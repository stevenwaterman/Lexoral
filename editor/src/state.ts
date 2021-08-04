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
export const audioLengthStore: Readable<number> = derived(sectionsStore, sections => {
  if (!sections?.length) return 0;
  return sections[sections.length - 1].endTime;
});
