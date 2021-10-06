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
}

export type SectionState = {
  idx: number;
  startTime: number;
  endTime: number;
  options: [string, ...string[]];
}

export type MaybeSectionStore = Readable<Section | undefined>;
export type SectionStore = Readable<Section>;

function transformState({idx, startTime, endTime, options}: SectionState, patch: SectionCollapsedPatch): Section {
  const endParagraph = patch.endParagraph;
  const text = patch.text ?? options[0];
  const edited = patch.text !== null;
  const completions = getOptions(text, options);
  return { idx, startTime, endTime, completions, edited, text, endParagraph };
}

export function createSectionStores(...sections: SectionState[]): SectionStore[] {
  const stores: SectionStore[] = [];
  for (const section of sections) {
    const sectionPatchStore = patchInterface.getPatchStore(section.idx);
    const store = derived(sectionPatchStore, patch => transformState(section, patch));

    store.subscribe(section => {
        paragraphLocationsStore.setEndParagraph(section.idx, section.endParagraph)
    });

    stores.push(store);
  }
  allSectionsStoreInternal.set(stores);
  return stores;
}

export type AllSections = SectionStore[];
const allSectionsStoreInternal: Writable<AllSections> = writable([]);
export const allSectionsStore: Readable<AllSections> = {subscribe: allSectionsStoreInternal.subscribe}
