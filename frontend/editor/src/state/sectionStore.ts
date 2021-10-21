import { derived, Readable, writable, Writable } from "svelte/store"
import { getOptions } from "../preprocess/align"
import { paragraphLocationsStore } from "./paragraphLocationsStore";
import type { SectionCollapsedPatch } from "./patch/dbListener";
import { patchInterface } from "./patch/patchInterface";
import { getSectionTimingStore, SectionTimingState } from "./timingsStore";
import { capitalise, sanitisePlaceholder } from "./wordStore";

export type Section = Pick<SectionState, "idx" | "options"> & SectionSelctedState & SectionTimingState & {
  text: string;
  endParagraph: boolean | null;
  edited: boolean;
};

export type SectionState = {
  idx: number;
  startTime: number;
  endTime: number;
  options: [string, ...string[]];
}

export type MaybeSectionStore = Readable<Section | undefined>;
export type SectionStore = Readable<Section>;

function transformState(
  sectionState: SectionState, 
  sectionCollapsedPatch: SectionCollapsedPatch, 
  sectionSelectedState: SectionSelctedState,
  sectionTimingState: SectionTimingState,
  placeholder: string
): Section {
  const edited = sectionCollapsedPatch.edited ?? sectionCollapsedPatch.text !== null;
  const text = (edited ? sectionCollapsedPatch.text : null) ?? placeholder;

  return { 
    idx: sectionState.idx,
    options: getOptions(text, sectionState.options),

    endParagraph: sectionCollapsedPatch.endParagraph,
    edited,
    text,

    ...sectionSelectedState, 
    ...sectionTimingState
  };
}

export function createSectionStores(...sections: SectionState[]): SectionStore[] {
  const stores: SectionStore[] = [];
  for (const section of sections) {
    const sectionPatchStore = patchInterface.getPatchStore(section.idx);
    const sectionSelectedStore = getSectionSelectedStore(section.idx);
    const timingStore = getSectionTimingStore(section.idx);
    const placeholderStore = derived(timingStore, timing => getPlaceholder(section.options, timing));

    const store = derived(
      [sectionPatchStore, sectionSelectedStore, timingStore, placeholderStore], 
      ([patch, selected, timing, placeholder]) => 
        transformState(section, patch, selected, timing, placeholder));

    stores.push(store);
  }
  allSectionsStoreInternal.set(stores);
  paragraphLocationsStore.setLastSectionIdx(stores.length - 1);
  return stores;
}

export type AllSections = SectionStore[];
const allSectionsStoreInternal: Writable<AllSections> = writable([]);
export const allSectionsStore: Readable<AllSections> = {subscribe: allSectionsStoreInternal.subscribe};

export type SectionSelctedState = { selected: boolean, playing: boolean };
const sectionSelectedStores: Record<number, Writable<SectionSelctedState>> = {};
export function getSectionSelectedStore(idx: number): Writable<SectionSelctedState> {
  let current = sectionSelectedStores[idx];
  if (!current) {
    current = writable({ selected: false, playing: false });
    sectionSelectedStores[idx] = current;
  }

  return current;
}

function getPlaceholder(options: [string, ...string[]], { silenceBefore, silenceAfter }: SectionTimingState) {
  let placeholder = sanitisePlaceholder(options[0]);
  if (silenceBefore >= 0.25) placeholder = capitalise(placeholder);
  if (silenceAfter >= 0.25) placeholder += ".";
  else if (silenceAfter >= 0.15) placeholder += ",";
  return placeholder;
}
