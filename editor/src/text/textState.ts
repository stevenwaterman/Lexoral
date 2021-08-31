import { writable, Writable } from "svelte/store";
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
export type Document = ParagraphStore[];
export type DocumentStore = Writable<Document>;

/** Represents one paragraph of text */
export type Paragraph = SectionStore[];
export type ParagraphStore = Writable<Paragraph>;
export type MaybeParagraphStore = Writable<Paragraph | undefined>;

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
};
export type SectionStore = Writable<Section>;
export type MaybeSectionStore = Writable<Section | undefined>;

/** Hydrate the section as returned from the api and load it into a newly created section store */
function createSectionStore(state: JsonOutputSection, idx: number): SectionStore {
  return writable({
    idx,
    startTime: state.startTime,
    endTime: state.endTime,
    originalOptions: state.options,
    completionOptions: getOptions("", state.options),
    text: "",
    placeholder: state.options[0].text,
    edited: false
  });
}

export const documentStore: DocumentStore = writable([]);
/** A store containing all sections, mapped by their section index */
export const allSectionsStore: Writable<Record<number, SectionStore>> = writable({});

/** Initialise the text state of the app using the data returned from the API */
export function initialiseStores(output: JsonOutput): Record<number, { startTime: number; endTime: number }> {
  const audioTimings: Record<number, { startTime: number; endTime: number }> = {};
  const sectionStores: Record<number, SectionStore> = {};
  const paragraphStores = output.reduce((acc, elem, idx) => {
      const sectionStore = createSectionStore(elem, idx);
      audioTimings[idx] = elem;
      sectionStores[idx] = sectionStore;
      if (acc.length === 0 || elem.startParagraph) {
        const paragraph: Paragraph = [sectionStore];
        const paragraphStore = writable(paragraph);
        acc.push(paragraphStore);
        return acc;
      } else {
        const lastParagraphStore = acc[acc.length - 1];
        lastParagraphStore.update(state => {
          state.push(sectionStore);
          return state;
        })
        return acc;
      }
    }, [] as ParagraphStore[]);
  
  documentStore.set(paragraphStores);
  allSectionsStore.set(sectionStores);
  return audioTimings;
}
