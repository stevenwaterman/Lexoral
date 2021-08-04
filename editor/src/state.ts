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











// type SelectedIdxState = null | {
//   idx: number;
//   direction: "left" | "right"
// }

// const internalSelectedSectionIdxStore: Writable<SelectedIdxState> = writable(null);

// const clampedSelectedSectionIdxStore: Readable<SelectedIdxState> = derived([sectionsStore, internalSelectedSectionIdxStore], ([sections, selected]) => {
//   if(!selected) return null;
//   if(!sections.length) return null;
//   return {
//     idx: ((selected.idx % sections.length) + sections.length) % sections.length,
//     direction: selected.direction
//   }
// });

// export const selectedSectionIdxStore: Readable<SelectedIdxState> & {
//   left: () => void;
//   right: () => void;
//   set: (idx: number) => void;
// } = {
//   subscribe: clampedSelectedSectionIdxStore.subscribe,
//   set: (idx: number) => internalSelectedSectionIdxStore.update(state => state?.idx === idx ? state : ({ idx, direction: "left" })),
//   left: () => internalSelectedSectionIdxStore.update(state => ({idx: state.idx - 1, direction: "left"})),
//   right: () => internalSelectedSectionIdxStore.update(state => ({idx: state.idx + 1, direction: "right"})),
// };

// export const selectedSectionStore: Readable<null | {
//   section: OutputSection,
//   direction: "left" | "right"
// }> = derived([sectionsStore, selectedSectionIdxStore], ([sections, selected]) => {
//   if (selected === null) return null;
//   if (sections.length === 0) return null;
//   return {
//     section: sections[selected.idx],
//     direction: selected.direction
//   };
// });

const internalSectionsStore: Writable<Output> = writable([]);

const playingSectionsStore: Writable<Output | null> = writable([]);

const internalCurrentSectionStore: Writable<OutputSection | null> = writable(null);
let timers: NodeJS.Timeout[] = [];

playingSectionsStore.subscribe(sections => {
  timers.forEach(timer => clearTimeout(timer));
  timers = [];

  if (sections?.length) {
    const loopStart = sections[0].startTime;
    timers = sections.map(section => {
      const timeoutDelay = section.startTime - loopStart;
      return setTimeout(() => internalCurrentSectionStore.set(section), timeoutDelay * 1000);
    })
  }
})

export const audioTimeStore: Readable<{start: number; end: number} | null> = maybeDerived(
  playingSectionsStore, 
  null, 
  sections => {
    if (!sections?.length) return null;
    const start = sections[0].startTime;
    const end = sections[sections.length - 1].endTime;
    return {start, end};
  },
  (a, b) => a?.start === b?.start && a?.end === b?.end
);

export function selectSection(section: OutputSection, direction: "start" | "end") {
  directionStore.set(direction);
  playingSectionsStore.set([section]);
}

export const currentSectionStore: Readable<OutputSection | null> = internalCurrentSectionStore;
export const directionStore: Writable<"start" | "end"> = writable("start");
export const sectionsStore = {
  subscribe: internalSectionsStore.subscribe,
  set: (sections: Output) => {
    internalSectionsStore.set(sections);
    if (sections.length) selectSection(sections[0], "start");
  }
}
