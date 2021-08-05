import { writable, derived } from "svelte/store";
import type { Writable, Readable } from "svelte/store";
import type { Output, OutputSection } from "./types";
import type { Tweened } from "svelte/motion";
import { tweened } from "svelte/motion";
import { maybeDerived } from "./utils";


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


export const currentTime: Tweened<number> = tweened(0);
export const currentTimePercent: Readable<number> = derived([currentTime, audioLengthStore], ([time, length]) => {
  if (!length) return 0;
  return 100 * (time / length);
})

audioTimeStore.subscribe(time => {
  if (time === null) {
    currentTime.update(time => time, {duration: 0});
  } else {
    currentTime.set(time.start, {duration: 0});
    currentTime.set(time.end, {duration: (time.end - time.start) * 1000});
  }
})
