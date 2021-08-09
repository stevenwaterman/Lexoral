import { writable, derived } from "svelte/store";
import type { Writable, Readable } from "svelte/store";
import type { Output, OutputSection } from "./types";
import type { Tweened } from "svelte/motion";
import { tweened } from "svelte/motion";
import { maybeDerived, lastNonNullDerived } from "./utils";

export const outputStore: Writable<Output> = writable([]);

export const audioLengthStore: Readable<number> = derived(outputStore, sections => {
  if (!sections?.length) return 0;
  return sections[sections.length - 1].endTime;
});

export const audioBoundsStore: Writable<{start: number; end: number}> = writable({ start: 0, end: 0 });
export const playingStore: Writable<boolean> = writable(true);
export const loopStore: Writable<boolean> = writable(true);

export const currentTimeStore: Tweened<number> = tweened(0);

export const currentTimePercentStore: Readable<number> = derived([currentTimeStore, audioLengthStore], ([time, length]) => {
  if (!length) return 0;
  return 100 * (time / length);
});

export const playingSectionsStore: Readable<Output> = derived(
  [outputStore, audioBoundsStore],
  ([sections, audioBounds]) => sections.filter(section => section.startTime < audioBounds.end && section.endTime > audioBounds.start)
);

export const currentSectionStore: Readable<OutputSection> = maybeDerived(
  [playingSectionsStore, currentTimeStore],
  null,
  ([playingSections, currentTime]) => playingSections.find(section => section.startTime <= currentTime && section.endTime >= currentTime) || null
);

export const directionStore: Writable<"start" | "end"> = writable("start");

export const prevSectionStore: Readable<OutputSection> = derived(
  [outputStore, audioBoundsStore],
  ([sections, audioBounds]) => {
    const firstSectionIdx = sections.find(section => section.endTime > audioBounds.start)?.idx ?? 0;
    const prevIdx = Math.max(0, firstSectionIdx - 1);
    return sections[prevIdx];
  }
);

export const nextSectionStore: Readable<OutputSection> = derived(
  [outputStore, audioBoundsStore],
  ([sections, audioBounds]) => {
    const reverseSections = sections.slice().reverse();
    const lastSectionIdx = reverseSections.find(section => section.startTime < audioBounds.end)?.idx ?? 0;
    const nextIdx = Math.min(sections.length - 1, lastSectionIdx + 1);
    return sections[nextIdx];
  }
);
