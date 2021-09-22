import { Readable, writable } from "svelte/store";

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
  append: (idx: number, patch: SectionPatch) => void
};

export const patchStore: PatchStore = createPatchStore([]);


function createPatchStore(patches: Patch[]): PatchStore {
  const store = writable({
    patches,
    cursor: patches.length
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
      state.patches.splice(state.cursor, state.patches.length, ...patches);
      state.cursor = state.patches.length;
      return state;
    })
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
    append
  };
}
