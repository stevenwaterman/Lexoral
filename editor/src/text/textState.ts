import { writable, Writable, Readable, derived } from "svelte/store";
import { getOptions } from "../preprocess/align";
import { getAssertExists } from "../utils/list";

/** The format of one section as returned from the API */
export type JsonOutputSection = {
  startTime: number;
  endTime: number;
  options: string[];
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
  originalOptions: string[];
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
    placeholder: state.options?.[0] ?? "",
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
  for(let i = 1; i < sortedIdxs.length; i++) {
    const start = getAssertExists(sortedIdxs, i - 1) + 1;
    const end = getAssertExists(sortedIdxs, i);
    output.push({ start, end })
  }
  return output;
})

/** Initialise the text state of the app using the data returned from the API */
export function initialiseStores(output: JsonOutput): Record<number, { startTime: number; endTime: number }> {
  const audioTimings: Record<number, { startTime: number; endTime: number }> = {};
  const sectionStores: SectionStore[] = [];

  let lastEligibleToEndParagraph: boolean = false;
  let time = 0;

  output.forEach((outputSection, idx) => { // TODO this threshold should be configurable
    if (lastEligibleToEndParagraph && outputSection.startTime - time > 0.3) {
      sectionStores[sectionStores.length - 1]?.update(section => ({
        ...section,
        endParagraph: true
      }));
    }
    lastEligibleToEndParagraph = isEligibleToEndParagraph(outputSection);
    time = outputSection.endTime;
    
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

const punctuation = [".", "!", "?"]

function isEligibleToEndParagraph({options}: JsonOutputSection): boolean {
  const firstOption = options[0];
  if (firstOption === undefined) return false;
  const lastChar = firstOption[firstOption.length - 1];
  return lastChar !== undefined && punctuation.includes(lastChar);
}