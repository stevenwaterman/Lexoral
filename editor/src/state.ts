import { writable, derived } from "svelte/store";
import type { Writable, Readable } from "svelte/store";
import type { Output, OutputSection } from "./types";

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

const clampedSelectedSectionIdxStore: Readable<SelectedIdxState> = derived([sectionsStore, internalSelectedSectionIdxStore], ([sections, selected]) => selected === null ? null : ({
  idx: Math.max(Math.min(sections.length, selected.idx), 0),
  direction: selected.direction
}));

export const selectedSectionIdxStore: Readable<SelectedIdxState> & {
  left: () => void;
  right: () => void;
  set: (idx: number) => void;
} = {
  subscribe: clampedSelectedSectionIdxStore.subscribe,
  set: (idx: number) => internalSelectedSectionIdxStore.set({ idx, direction: "left" }),
  left: () => internalSelectedSectionIdxStore.update(state => ({idx: state.idx - 1, direction: "left"})),
  right: () => internalSelectedSectionIdxStore.update(state => ({idx: state.idx + 1, direction: "right"})),
};

export const selectedSectionStore: Readable<null | {
  section: OutputSection,
  direction: "left" | "right"
}> = derived([sectionsStore, selectedSectionIdxStore], ([sections, selected]) => selected === null ? null : ({
  section: sections[selected.idx],
  direction: selected.direction
}));

export const playingStore: Writable<AudioState["playing"]> = writable(true);
export const loopStore: Readable<AudioState["loop"]> = derived(selectedSectionStore, selectedSection => selectedSection === null ? null : ({
  start: selectedSection.section.startTime,
  end: selectedSection.section.endTime
}));
export const audioStore: Readable<AudioState> = derived([playingStore, loopStore], ([playing, loop]) => ({playing, loop}));