import { derived, Readable, writable, Writable } from "svelte/store"
import { getOptions } from "../preprocess/align"
import { paragraphLocationsStore } from "./paragraphLocationsStore";
import type { SectionCollapsedPatch } from "./patch/dbListener";
import { patchInterface } from "./patch/patchInterface";

export type Section = {
  idx: number;
  startTime: number;
  endTime: number;
  completions: string[];
  edited: boolean;
  text: string;
  endParagraph: boolean;
  
  selected: boolean;
}

export type SectionState = {
  idx: number;
  startTime: number;
  endTime: number;
  options: [string, ...string[]];
}

export type MaybeSectionStore = Readable<Section | undefined>;
export type SectionStore = Readable<Section>;

function transformState({idx, startTime, endTime, options}: SectionState, patch: SectionCollapsedPatch, selected: boolean): Section {
  const endParagraph = patch.endParagraph;
  const text = patch.text ?? options[0];
  const edited = patch.text !== null;
  const completions = getOptions(text, options);
  return { idx, startTime, endTime, completions, edited, text, endParagraph, selected };
}

export function createSectionStores(...sections: SectionState[]): SectionStore[] {
  const stores: SectionStore[] = [];
  for (const section of sections) {
    const sectionPatchStore = patchInterface.getPatchStore(section.idx);
    const sectionSelectedStore = getSectionSelectedStore(section.idx);
    const store = derived([sectionPatchStore, sectionSelectedStore], ([patch, selected]) => transformState(section, patch, selected));
    stores.push(store);
  }
  allSectionsStoreInternal.set(stores);
  paragraphLocationsStore.setLastSectionIdx(stores.length - 1);
  return stores;
}

export type AllSections = SectionStore[];
const allSectionsStoreInternal: Writable<AllSections> = writable([]);
export const allSectionsStore: Readable<AllSections> = {subscribe: allSectionsStoreInternal.subscribe};

const sectionSelectedStores: Record<number, Writable<boolean>> = {};
export function getSectionSelectedStore(idx: number): Writable<boolean> {
  let current = sectionSelectedStores[idx];
  if (!current) {
    current = writable(false);
    sectionSelectedStores[idx] = current;
  }

  return current;
}
