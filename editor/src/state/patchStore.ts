import { Readable, Writable, writable } from "svelte/store";
import { getAssertExists } from "../utils/list";
import { deriveDebounced } from "../utils/stores";
import type { User } from "firebase/auth";
import { patchTranscript } from "../api";

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

export const patchStore: PatchStore = createPatchStore();

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
deriveDebounced(patchStore, 5).subscribe(state => {
  if (state === undefined) return;
  patchStore.commit();
  save(state.patches);
});

async function save(patches: Patch[]) {
  if (!initialised) {
    console.log("save called before init, cancelling");
    return;
  }

  if (minAddedIdx === undefined) {
    console.log("Nothing added since last time, cancelling");
    return;
  }
  const addStartIdx = minAddedIdx;
  const addEndIdx = patches.length - 1;
  console.log("Save started", { initialised, minAddedIdx, addStartIdx, addEndIdx });

  let needed = false;
  const request: Record<number, Patch | null> = {};
  for (let i = addStartIdx; i <= addEndIdx; i++) {
    needed = true;
    request[i] = getAssertExists(patches, i);
  }

  console.log("Request", request)

  if (!needed) {
    console.log("Cancelled save, unnecessary");
    return;
  }

  await patchTranscript(request);

  minAddedIdx = undefined;
  console.log("Save Done");
}
