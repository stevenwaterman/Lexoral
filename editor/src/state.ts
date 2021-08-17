import { writable, derived } from "svelte/store";
import type { Writable, Readable } from "svelte/store";
import type { Output, OutputSection } from "./types";
import { maybeWritable } from "./utils";

export const outputStore: Writable<Output> = writable([]);
export const textStore: Writable<string[]> = writable([]);

export const modeStore: Writable<"nav" | "edit"> = writable("nav");

export const selectionStore: Writable<{ startIdx: number; endIdx: number }> = maybeWritable(
  { startIdx: 0, endIdx: 0 }, 
  (last, next) => last.startIdx !== next.startIdx || last.endIdx !== next.endIdx
);

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

export const escPressedStore: Writable<boolean> = writable(false);
modeStore.subscribe(mode => {
  if(mode === "edit") {
    escPressedStore.set(false);
  }
})
