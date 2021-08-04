import { writable, derived } from "svelte/store";
import type { Writable, Readable } from "svelte/store";
import type { Output, OutputSection } from "./types";


type Stores = Readable<any> | [Readable<any>, ...Array<Readable<any>>];
type StoresValues<T> = T extends Readable<infer U> ? U : {
  [K in keyof T]: T[K] extends Readable<infer U> ? U : never;
};
function maybeDerived<S extends Stores, T>(
  stores: S,
  initial: T,
  func: (values: StoresValues<S>) => T,
  equality: (last: T, next: T) => boolean = (a, b) => (a === b)
): Readable<T> {
  let lastValue: T = initial;
  const actualFunc = (stores: StoresValues<S>, set: (value: T) => void) => {
    const nextValue = func(stores);
    if (!equality(lastValue, nextValue)) {
      lastValue = nextValue;
      set(nextValue);
    }
  };
  return derived(stores, actualFunc, initial);
}


export type AudioState = {
  playing: boolean;
  loop: null | {
    start: number;
    end: number;
  };
}

export const sectionsStore: Writable<Output> = writable([]);

type SelectedIdxState = null | {
  idx: number;
  direction: "left" | "right"
}

const internalSelectedSectionIdxStore: Writable<SelectedIdxState> = writable(null);

const clampedSelectedSectionIdxStore: Readable<SelectedIdxState> = derived([sectionsStore, internalSelectedSectionIdxStore], ([sections, selected]) => {
  if(!selected) return null;
  if(!sections.length) return null;
  return {
    idx: ((selected.idx % sections.length) + sections.length) % sections.length,
    direction: selected.direction
  }
});

export const selectedSectionIdxStore: Readable<SelectedIdxState> & {
  left: () => void;
  right: () => void;
  set: (idx: number) => void;
} = {
  subscribe: clampedSelectedSectionIdxStore.subscribe,
  set: (idx: number) => internalSelectedSectionIdxStore.update(state => state?.idx === idx ? state : ({ idx, direction: "left" })),
  left: () => internalSelectedSectionIdxStore.update(state => ({idx: state.idx - 1, direction: "left"})),
  right: () => internalSelectedSectionIdxStore.update(state => ({idx: state.idx + 1, direction: "right"})),
};

export const selectedSectionStore: Readable<null | {
  section: OutputSection,
  direction: "left" | "right"
}> = derived([sectionsStore, selectedSectionIdxStore], ([sections, selected]) => {
  if (selected === null) return null;
  if (sections.length === 0) return null;
  return {
    section: sections[selected.idx],
    direction: selected.direction
  };
});

export const playingStore: Writable<AudioState["playing"]> = writable(true);
export const loopStore: Readable<AudioState["loop"]> = maybeDerived(
  selectedSectionStore,
  null,
  selectedSection => {
    if (selectedSection === null) return null;
    return {
      start: selectedSection.section.startTime,
      end: selectedSection.section.endTime
    }
  },
  (last: AudioState["loop"], next: AudioState["loop"]) => last?.start === next?.start && last?.end === next?.end
);
export const audioStore: Readable<AudioState> = derived([playingStore, loopStore], ([playing, loop]) => ({playing, loop}));