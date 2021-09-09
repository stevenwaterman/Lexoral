import { writable, Writable, Readable, derived } from "svelte/store";
import { getOptions } from "../preprocess/align";

/** The format of one section as returned from the API */
export type JsonOutputSection = {
  startTime: number;
  endTime: number;
  options: {text: string; confidence: number}[];
  startParagraph: boolean
}

/** The format of the entire document as returned from the API */
export type JsonOutput = JsonOutputSection[];

/** Represents the entire text file */
export type AllSections = SectionStore[];
export type AllSectionsStore = Writable<AllSections>;

/** Represents one section of text, usually one word */
export type Section = {
  idx: number;
  startTime: number;
  endTime: number;
  originalOptions: {text: string; confidence: number}[];
  completionOptions: string[];
  text: string;
  placeholder: string;
  edited: boolean;
  endParagraph: boolean;
};
export type SectionStore = Writable<Section>;
export type MaybeSectionStore = Writable<Section | undefined>;

/** Hydrate the section as returned from the api and load it into a newly created section store */
function createSectionStore(state: JsonOutputSection, idx: number): SectionStore {
  const store = writable({
    idx,
    startTime: state.startTime,
    endTime: state.endTime,
    originalOptions: state.options,
    completionOptions: getOptions("", state.options),
    text: "",
    placeholder: state.options[0].text,
    edited: false,
    endParagraph: false
  });

  store.subscribe(({idx, endParagraph}) => paragraphLocationsInternal.update(state => {
    if (endParagraph) {
    state[idx] = true;
    } else {
      delete state[idx];
    }
    return state;
  }))

  return store;
}

export const allSectionsStore: AllSectionsStore = writable([]);

const paragraphLocationsInternal: Writable<Record<number, true>> = writable({});
export const paragraphLocationsStore: Readable<{start: number, end: number}[]> = derived([paragraphLocationsInternal, allSectionsStore], ([locations, allSections]) => {
  const sortedIdxs = Object.keys(locations).map(i => parseInt(i));
  sortedIdxs.sort((a,b) => a - b);
  sortedIdxs.unshift(-1);

  const lastIdx = allSections.length - 1;
  if (sortedIdxs[sortedIdxs.length - 1] !== lastIdx) sortedIdxs.push(lastIdx)

  const output: {start: number; end: number}[] = [];
  for(let i = 1; i <= sortedIdxs.length; i++) {
    const start = sortedIdxs[i - 1] + 1;
    const end = sortedIdxs[i];
    output.push({ start, end })
  }
  return output;
})

/** Initialise the text state of the app using the data returned from the API */
export function initialiseStores(output: JsonOutput): Record<number, { startTime: number; endTime: number }> {
  const audioTimings: Record<number, { startTime: number; endTime: number }> = {};
  const sectionStores: SectionStore[] = [];
  output.forEach((outputSection, idx) => {
    if (outputSection.startParagraph) {
      const lastStore = sectionStores[sectionStores.length - 1];
      lastStore?.update(state => ({
        ...state,
        endParagraph: true
      }));
    }

    const store = createSectionStore(outputSection, idx);
    sectionStores.push(store);
    audioTimings[idx] = {
      startTime: outputSection.startTime,
      endTime: outputSection.endTime
    };
  });
  
  allSectionsStore.set(sectionStores);
  return audioTimings;
}
