import { writable, Readable, derived, Writable } from "svelte/store";
import { getOptions } from "./align";

export type JsonOutputSection = {
  startTime: number;
  endTime: number;
  options: {text: string; confidence: number}[];
  startParagraph: boolean
}
export type JsonOutput = JsonOutputSection[];

type DocumentState = ParagraphStore[];
export type DocumentStore = Readable<DocumentState>;

export type ParagraphState = SectionStore[];
export type ParagraphStore = Readable<ParagraphState> & {
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
  spanComponent?: HTMLSpanElement;
} & Pick<SectionStore, "setText">;
export type SectionStore = Readable<SectionState> & {
  setText: (text: string) => void;
  deleteText: (offsets?: { start?: number, end?: number }) => void;
  registerComponent: (component: HTMLSpanElement) => void;
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
    edited: false,
    setText
  });

  function setText(text: string) {
    internalStore.update(state => ({
      ...state,
      text,
      completionOptions: getOptions(text, state.originalOptions),
      edited: true
    }))
  }

  function deleteText(offsets?: { start?: number, end?: number }): void {
    const startOffset = offsets?.start;
    const endOffset = offsets?.end;
    internalStore.update(state => {
      const currentText = state.edited ? state.text : state.placeholder;

      // debugger
      let newText = "";
      if (startOffset !== undefined) {
        newText += currentText.substring(0, startOffset);
      }
      if (endOffset !== undefined) {
        newText += currentText.substring(endOffset);
      }

      return {
        ...state,
        text: newText,
        completionOptions: getOptions(newText, state.originalOptions),
        edited: true
    }})
  }

  function registerComponent(component: HTMLSpanElement) {
    internalStore.update(state => ({
      ...state,
      spanComponent: component
    }))
  }

  return {
    subscribe: internalStore.subscribe,
    setText,
    deleteText,
    registerComponent
  }
}

function createParagraphStore(sections: SectionStore[]): ParagraphStore {
  const base: Writable<ParagraphState> = writable(sections);

  function append(store: SectionStore) {
    base.update(state => {
      state.push(store);
      return state;
    });
  }

  return { 
    ...base,
    append
   }
}

const documentStoreInternal: Writable<DocumentState> = writable([]);
export const documentStore: DocumentStore = documentStoreInternal;
export const allSectionsStore: Writable<Record<number, SectionStore>> = writable({});

export function initialiseStores(output: JsonOutput): Record<number, { startTime: number; endTime: number }> {
  const audioTimings: Record<number, { startTime: number; endTime: number }> = {};
  const sectionStores: Record<number, SectionStore> = {};
  const paragraphStores = output.reduce((acc, elem, idx) => {
      const sectionStore = createSectionStore(elem, idx);
      audioTimings[idx] = elem;
      sectionStores[idx] = sectionStore;
      if (acc.length === 0 || elem.startParagraph) {
        const paragraphStore = createParagraphStore([sectionStore]);
        acc.push(paragraphStore);
        return acc;
      } else {
        const lastParagraphStore = acc[acc.length - 1];
        lastParagraphStore.append(sectionStore);
        return acc;
      }
    }, [] as ParagraphStore[]);
  
  documentStoreInternal.set(paragraphStores);
  allSectionsStore.set(sectionStores);
  return audioTimings;
}
