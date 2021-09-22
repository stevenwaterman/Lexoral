import { derived, Readable, writable, Writable } from "svelte/store"
import { getOptions } from "../preprocess/align"
import { paragraphLocationsStore } from "./paragraphLocationsStore";
import { PatchState, patchStore, PatchStore, SectionPatch } from "./patchStore";

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

function transformState({idx, startTime, endTime, options}: SectionState, patchState: PatchState): Section {
  const combinedPatch = combinePatches(idx, patchState);
  const endParagraph = combinedPatch.endParagraph ?? false;
  const text = combinedPatch.text ?? options[0];
  const edited = combinedPatch.text !== undefined;
  const completions = getOptions(text, options);
  return { idx, startTime, endTime, completions, edited, text, endParagraph };
}

function combinePatches(idx: number, patchState: PatchState): SectionPatch {
  let combinedPatch: SectionPatch = {};
  const keys: Array<keyof SectionPatch> = ["text", "endParagraph"];

  for (let i = patchState.cursor - 1; i >= 0; i--) {
    const patch = patchState.patches[i];
    const sectionPatch = patch?.[idx];
    if (sectionPatch === undefined) continue;

    let done = true;
    for (const key of keys) {
      if (combinedPatch[key] === undefined) {
        done = false;
        combinedPatch[key] = sectionPatch[key] as any;
      }
    }

    if (done) break;
  }

  return combinedPatch;
}

export function createSectionStore(state: SectionState): SectionStore {
  const store = derived(patchStore, patchState => transformState(state, patchState));
  store.subscribe(section => paragraphLocationsStore.setEndParagraph(section.idx, section.endParagraph));

  allSectionsStoreInternal.update(state => {
    state.push(store);
    return state;
  })
  
  return store;
}

export type AllSections = SectionStore[];
const allSectionsStoreInternal: Writable<AllSections> = writable([]);
export const allSectionsStore: Readable<AllSections> = {subscribe: allSectionsStoreInternal.subscribe}
