import { writable, derived } from "svelte/store";
import type { Writable, Readable } from "svelte/store";
import type { Output, OutputSection } from "./types";

export const outputStore: Writable<Output> = writable([]);

export const modeStore: Writable<"nav" | "edit"> = writable("nav");

export const selectionStore: Writable<{ startIdx: number; endIdx: number }> = writable({ startIdx: 0, endIdx: 0 });
modeStore.subscribe(mode => {
  if (mode === "edit") {
    selectionStore.update(selection => ({
      startIdx: selection.endIdx,
      endIdx: selection.endIdx
    }))
  }
})

export const selectionStoreSorted: Readable<{ startIdx: number; endIdx: number }> = derived(selectionStore, selection => 
  ({startIdx: Math.min(selection.startIdx, selection.endIdx),
    endIdx: Math.max(selection.startIdx, selection.endIdx)}));
export const selectionCountStore: Readable<number> = derived(selectionStoreSorted, selection => selection.endIdx - selection.startIdx + 1);


export const navDragSelectingStore: Writable<boolean> = writable(false);
export const navSelectedSectionsStore: Readable<Output> = derived([outputStore, selectionStoreSorted], ([sections, {startIdx, endIdx}]) => {
  return sections.filter(section => section.idx >= startIdx && section.idx <= endIdx);
})

export const editSelectedSectionStore: Readable<OutputSection> = derived([outputStore, selectionStore], ([sections, {endIdx}]) => sections[endIdx]);
export const editDirectionStore: Writable<"start" | "end"> = writable("start");



// export const audioLengthStore: Readable<number> = derived(outputStore, sections => {
//   if (!sections?.length) return 0;
//   return sections[sections.length - 1].endTime;
// });
// audioLengthStore.subscribe(audioLength => {
//   audioStateStore.update(state => ({ ...state, loopStart: 0, loopEnd: audioLength }));
// })

// export const currentTimePercentStore: Readable<number> = derived([currentTimeStore, audioLengthStore], ([time, length]) => {
//   if (!length) return 0;
//   return 100 * (time / length);
// });

// export const playingSectionsStore: Readable<Output> = derived(
//   [outputStore, audioStateStore],
//   ([sections, audioState]) => sections.filter(section => section.startTime < audioState.loopEnd && section.endTime > audioState.loopStart)
// );

// export const currentSectionStore: Readable<OutputSection> = maybeDerived(
//   [playingSectionsStore, currentTimeStore],
//   null,
//   ([playingSections, currentTime]) => {
//     if (playingSections.length === 0) return null;
//     const section = playingSections.find(section => section.endTime >= currentTime);
//     if (section) return section;
//     return playingSections[playingSections.length - 1];
//   }
// );

// export const directionStore: Writable<"start" | "end"> = writable("start");

// export const hoveredFractionStore: Writable<number | null> = writable(null);
// const hoveredTimeStore: Readable<number | null> = derived([audioLengthStore, hoveredFractionStore], ([audioLength, hoveredFraction]) => {
//   if (hoveredFraction === null) return null;
//   return audioLength * hoveredFraction;
// });
// export const hoveredSectionStore: Readable<OutputSection | null> = derived([outputStore, hoveredTimeStore], ([sections, hoveredTime]) => {
//   if (hoveredTime === null) return null;
//   return sections.find(section => section.startTime <= hoveredTime && section.endTime >= hoveredTime) ?? null;
// })

// /** Select the last section that is finished */
// export function selectPrevious(sections: Output, currentTime: number) {
//   const previous = getPreviousSeciton(sections, currentTime);
//   if (previous === null) return;
//   directionStore.set("end");
//   audioStateStore.update(state => ({ ...state, loopStart: previous.startTime, loopEnd: previous.endTime }));
// }

// function getPreviousSeciton(sections: Output, currentTime: number): OutputSection | null {
//   if (sections.length === 0) return null;
//   const reverseSections = sections.slice().reverse();
//   const finishedSection = reverseSections.find(section => section.endTime < currentTime);
//   if (finishedSection) return finishedSection;
//   return sections[0];
// }

// /** Select the first section that is yet to start */
// export function selectNext(sections: Output, currentTime: number) {
//   const next = getNextSeciton(sections, currentTime);
//   if (next === null) return;
//   directionStore.set("start");
//   audioStateStore.update(state => ({ ...state, loopStart: next.startTime, loopEnd: next.endTime }));
// }

// function getNextSeciton(sections: Output, currentTime: number): OutputSection | null {
//   if (sections.length === 0) return null;
//   const finishedSection = sections.find(section => section.startTime > currentTime);
//   if (finishedSection) return finishedSection;
//   return sections[sections.length - 1];
// }