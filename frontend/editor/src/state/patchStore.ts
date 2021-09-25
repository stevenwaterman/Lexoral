import { Readable, Writable, writable } from "svelte/store";
import { getAssertExists } from "../utils/list";
import { deriveDebounced } from "../utils/stores";
import type { User } from "firebase/auth";
import { patchTranscript } from "../api";
import { sendToast } from "../display/toast/toasts";

type PatchedSectionProps = {
  text: string;
  endParagraph: boolean;
}
export type SectionPatch = Partial<PatchedSectionProps>;
export type Patch = Record<number, SectionPatch>;
export type PatchState = {
  patches: Patch[];
  cursor: number;
};

export type PatchStore = Readable<PatchState> & {
  undo: () => void;
  redo: () => void;
  appendFull: (...patches: Patch[]) => void;
  append: (idx: number, patch: SectionPatch) => void;
  init: (...patches: Patch[]) => void;
  commit: () => void;
};

let patchState: PatchState | undefined = undefined;
export const patchStore: PatchStore = createPatchStore();
patchStore.subscribe(state => patchState = state);

function createPatchStore(): PatchStore {
  const store: Writable<PatchState> = writable({
    patches: [],
    cursor: 0
  });

  let finalized: boolean = true;

  function undo() {
    commit();
    store.update(state => {
      state.cursor = Math.max(0, state.cursor - 1);
      return state;
    });
  }

  function redo() {
    commit();
    store.update(state => {
      state.cursor = Math.min(state.patches.length, state.cursor + 1);
      return state;
    });
  }

  function appendFull(patch: Patch) {
    store.update(state => {
      minAddedIdx = Math.min(minAddedIdx ?? state.cursor, state.cursor);

      const removed = state.patches.splice(state.cursor, state.patches.length);
      if (state.patches.length === 0 || removed.length > 0 || finalized) {
        // Add new patch
        state.patches.push(patch);
        finalized = false;
      } else {
        // Edit last patch
        const lastPatch = state.patches[state.patches.length - 1] as Patch;
        Object.entries(patch)
          .forEach(([key, data]) => {
            const idx = parseInt(key);
            const lastPatchSection = lastPatch[idx];
            if (lastPatchSection === undefined) {
              lastPatch[idx] = data
            } else {
              lastPatch[idx] = {
                ...lastPatchSection,
                ...data
              }
            }
          })
        }
      state.cursor = state.patches.length;
      return state;
    });
  }

  function append(idx: number, patch: SectionPatch) {
    return appendFull({
      [idx]: patch
    });
  }

  function commit() {
    finalized = true;
  }

  function init(...patches: Patch[]) {
    store.set({
      patches,
      cursor: patches.length
    });

    initialised = true;
    minAddedIdx = undefined;
    commit();
  }
  
  return {
    subscribe: store.subscribe,
    undo,
    redo,
    appendFull,
    append,
    init,
    commit
  };
}

let initialised: boolean = false;
let minAddedIdx: number | undefined = undefined;
deriveDebounced(patchStore, 3).subscribe(async state => {
  if (state === undefined) return;
  patchStore.commit();
  const saved = await save(state.patches);
  if (saved) sendToast("AutoSaved");
});

let saving = false;
async function save(patches: Patch[]): Promise<boolean> {
  if (!initialised) {
    console.log("save called before init, cancelling");
    return false;
  }

  if (minAddedIdx === undefined) {
    console.log("Nothing added since last time, cancelling");
    return false;
  }
  const addStartIdx = minAddedIdx;
  const addEndIdx = patches.length - 1;

  let needed = false;
  const request: Record<number, Patch | null> = {};
  for (let i = addStartIdx; i <= addEndIdx; i++) {
    needed = true;
    request[i] = getAssertExists(patches, i);
  }

  if (!needed) {
    console.log("Cancelled save, unnecessary");
    saving = false;
    return false;
  }

  if (saving) {
    console.log("already saving");
    return false;
  }

  saving = true;

  await patchTranscript(request);

  minAddedIdx = undefined;
  saving = false;
  return true;
}

export async function manualSave() {
  if (patchState === undefined) return sendToast("Nothing to save");
  sendToast("Saving");
  const saved = await save(patchState.patches);
  if (saved) sendToast("Saved");
  else sendToast("Nothing to save");
}
