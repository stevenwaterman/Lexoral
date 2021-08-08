import { writable, derived } from "svelte/store";
import type { Writable, Readable } from "svelte/store";
import type { Output, OutputSection } from "./types";
import type { Tweened } from "svelte/motion";
import { tweened } from "svelte/motion";
import { maybeDerived } from "./utils";

export const outputStore: Writable<Output> = writable([]);

export const audioLengthStore: Readable<number> = derived(outputStore, sections => {
  if (!sections?.length) return 0;
  return sections[sections.length - 1].endTime;
});

export const audioBoundsStore: Writable<{start: number; end: number}> = writable({ start: 0, end: 0 });
export const playStore: Writable<boolean> = writable(true);
export const loopStore: Writable<boolean> = writable(true);

export const currentTimeStore: Tweened<number> = tweened(0);

export const currentTimePercentStore: Readable<number> = derived([currentTimeStore, audioLengthStore], ([time, length]) => {
  if (!length) return 0;
  return 100 * (time / length);
});

export const playingSectionsStore: Readable<Output> = derived(
  [outputStore, audioBoundsStore],
  ([sections, audioBounds]) => sections.filter(section => section.startTime < audioBounds.end && section.endTime > audioBounds.start)
)

export const currentSectionStore: Readable<OutputSection> = derived(
  [playingSectionsStore, currentTimeStore],
  ([playingSections, currentTime]) =>
    playingSections.find(section => section.startTime <= currentTime && section.endTime >= currentTime)
);

export const directionStore: Writable<"start" | "end"> = writable("start");
