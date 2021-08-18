import { writable, Readable, derived, Writable } from "svelte/store";
import { getOptions } from "./align";

export type JsonOutputSection = {
  startTime: number;
  endTime: number;
  options: {text: string; confidence: number}[];
  startParagraph: boolean
}
export type JsonOutput = JsonOutputSection[];

type AllParagraphsState = ParagraphStore[];
export type AllParagraphsStore = Readable<AllParagraphsState>;

export type ParagraphState = {
  sections: { idx: number; store: SectionStore }[];
};
export type ParagraphStore = Readable<ParagraphState> & {
  firstSectionIdx: number;
  append: (section: SectionStore) => void;
};

export type SectionState = {
  idx: number;
  startTime: number;
  endTime: number;
  originalOptions: {text: string; confidence: number}[];
  completionOptions: string[];
  text: string;
  placeholder: string;
  edited: boolean;
};
export type SectionStore = Readable<SectionState> & {
  setText: (text: string) => void
}

function createSectionStore(state: JsonOutputSection, idx: number): SectionStore {
  const internalStore: Writable<SectionState> = writable({
    idx,
    startTime: state.startTime,
    endTime: state.endTime,
    originalOptions: state.options,
    completionOptions: getOptions("", state.options),
    text: "",
    placeholder: state.options[0].text,
    edited: false
  });

  function setText(text: string) {
    internalStore.update(state => ({
      ...state,
      text,
      completionOptions: getOptions(text, state.originalOptions),
      edited: true
    }))
  }

  return {
    subscribe: internalStore.subscribe,
    setText
  }
}

function createParagraphStore(sections: SectionStore[], firstSectionIdx: number): ParagraphStore {
  const sectionsWithIndex = sections.map((store, idx) => ({
    idx: firstSectionIdx + idx,
    store
  })) as { idx: number; store: SectionStore }[];

  const base: Writable<ParagraphState> = writable({ sections: sectionsWithIndex });

  function append(store: SectionStore) {
    base.update(state => {
      state.sections.push({ idx: state.sections.length + firstSectionIdx, store });
      return state;
    });
  }

  return { 
    ...base, 
    firstSectionIdx,
    append
   }
}

const allParagraphsStoreInternal: Writable<AllParagraphsState> = writable([]);
export const allParagraphsStore: AllParagraphsStore = allParagraphsStoreInternal;

export function initialiseStores(output: JsonOutput) {
  const paragraphStores = output.reduce((acc, elem, idx) => {
      const sectionStore = createSectionStore(elem, idx);
      if (acc.length === 0 || elem.startParagraph) {
        const paragraphStore = createParagraphStore([sectionStore], idx);
        acc.push(paragraphStore);
        return acc;
      } else {
        const lastParagraphStore = acc[acc.length - 1];
        lastParagraphStore.append(sectionStore);
        return acc;
      }
    }, [] as ParagraphStore[]);
  
  allParagraphsStoreInternal.set(paragraphStores);
}