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
};

export const patchStore: PatchStore = createPatchStore();

function createPatchStore(): PatchStore {
  const store: Writable<PatchState> = writable({
    patches: [],
    cursor: 0
  });

  function undo() {
    store.update(state => {
      state.cursor = Math.max(0, state.cursor - 1);
      return state;
    });
  }

  function redo() {
    store.update(state => {
      state.cursor = Math.min(state.patches.length, state.cursor + 1);
      return state;
    });
  }

  function appendFull(...patches: Patch[]) {
    store.update(state => {
      minAddedIdx = Math.min(minAddedIdx, state.cursor);

      state.patches.splice(state.cursor, state.patches.length, ...patches);
      state.cursor = state.patches.length;
      return state;
    })
  }

  function init(...patches: Patch[]) {
    store.set({
      patches,
      cursor: patches.length
    });

    initialised = true;
    minAddedIdx = patches.length;
    dbMaxIdx = patches.length - 1;
  }

  function append(idx: number, patch: SectionPatch) {
    return appendFull({
      [idx]: patch
    });
  }
  
  return {
    subscribe: store.subscribe,
    undo,
    redo,
    appendFull,
    append,
    init
  };
}

let initialised: boolean = false;
let minAddedIdx: number = 0;
let dbMaxIdx: number = 0;
deriveDebounced(patchStore, 5).subscribe(state => {
  if (state === undefined) return;
  save(state.patches)
});

async function save(patches: Patch[]) {
  if (!initialised) {
    console.log("save called before init, cancelling");
    return;
  }
  const addStartIdx = minAddedIdx;
  const addEndIdx = patches.length - 1;
  const deleteEnd = dbMaxIdx;
  console.log("Save started", { addStartIdx, addEndIdx, deleteEnd, patches });

  let needed = false;
  const request: Record<number, Patch | null> = {};
  for (let i = addStartIdx; i <= addEndIdx; i++) {
    needed = true;
    request[i] = getAssertExists(patches, i);
  }
  for (let i = addEndIdx + 1; i <= deleteEnd; i++) {
    needed = true;
    request[i] = null;
  }

  if (!needed) {
    console.log("Cancelled save, unnecessary");
    return;
  }

  await patchTranscript(request);

  minAddedIdx = addEndIdx;
  dbMaxIdx = addEndIdx;
  console.log("Save Done");
}
