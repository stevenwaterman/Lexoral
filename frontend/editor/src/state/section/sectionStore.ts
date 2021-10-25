import { derived, Readable, writable, Writable } from "svelte/store"
import { makeReadonly } from "../../utils/stores";
import type { TranscriptEntry } from "../initStore";
import { patchInterface } from "../patch/patchInterface";
import { capitalise, isKnownWord } from "../wordStore";
import { commaTimeStore, paragraphTimeStore, periodTimeStore } from "./defaultPunctuationStore";


type AtLeastOne<List extends any[]> = [List[0], ...List];

type SectionStoreSubStoreKeys = 
  "startTimeStore" |
  "endTimeStore" |
  "selectedStore" |
  "playingStore" |
  "editedStore" |
  "silenceBeforeStore" |
  "silenceAfterStore" |
  "endsParagraphStore" |
  "startsParagraphStore" |
  "displayTextStore" |
  "endsSentenceStore";

type SectionStoreFullState = {
  startTime: number | null;
  endTime: number | null;
  selected: boolean;
  playing: boolean;
  edited: boolean;
  silenceBefore: number | null;
  silenceAfter: number | null;
  endsParagraph: boolean;
  startsParagraph: boolean;
  displayText: string;
  endsSentence: boolean;
}
export type DeriveSectionKeys = Readonly<Array<keyof SectionStoreFullState>>;

export type SectionStoreState<KEYS extends DeriveSectionKeys> = Pick<SectionStoreFullState, KEYS[number]>;

export function deriveRelevant<KEYS extends DeriveSectionKeys>(sectionStore: SectionStore, keys: KEYS): Readable<SectionStoreState<KEYS>> {
  const storeNames = keys.map(key => key + "Store") as Array<SectionStoreSubStoreKeys>;
  const stores = storeNames.map(key => sectionStore[key]);
  return derived(stores as AtLeastOne<typeof stores>, values => {
    const data = {} as any;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i] as any;
      const value = values[i] as any;
      data[key] = value
    }
    return data;
  })
}



export const sectionStores: Record<number, SectionStore> = {};

export class SectionStore {
  readonly idx: number;

  public startTime: number | undefined = undefined;
  readonly startTimeStore: Readable<number>;

  public endTime: number | undefined = undefined;
  readonly endTimeStore: Readable<number>;

  private readonly rawOptionsStore: Readable<[string, ...string[]]>;

  constructor({ idx, startTime, endTime, options }: TranscriptEntry) {
    this.idx = idx;
    this.startTimeStore = makeReadonly(writable(startTime));
    this.endTimeStore = makeReadonly(writable(endTime));
    this.rawOptionsStore = makeReadonly(writable(options));

    this.startTimeStore.subscribe(state => this.startTime = state);
    this.endTimeStore.subscribe(state => this.endTime = state);

    const sectionPatchStore = patchInterface.getPatchStore(idx);
    this.userTextStore = derived(sectionPatchStore, sectionPatch => sectionPatch.text);
    this.userEndParagraphStore = derived(sectionPatchStore, sectionPatch => sectionPatch.endParagraph);
    this.editedStore = derived(this.userTextStore, text => text !== null);

    sectionStores[idx] = this;
  }


  readonly selectedStore: Writable<boolean> = writable(false);
  readonly playingStore: Writable<boolean> = writable(false);


  private readonly userTextStore: Readable<string | null>;
  setText(text: string | null) {
    patchInterface.append(this.idx, { text });
  }

  private readonly userEndParagraphStore: Readable<boolean | null>;
  setEndParagraph(endParagraph: boolean) {
    patchInterface.append(this.idx, { endParagraph });
  }

  readonly editedStore: Readable<boolean>;


  private sectionBefore: SectionStore | null | undefined = undefined;
  private sectionAfter: SectionStore | null | undefined = undefined;
  initAdjancentSections(sectionBefore: SectionStore | null, sectionAfter: SectionStore | null) {
    this.sectionBefore = sectionBefore;
    this.sectionAfter = sectionAfter;
  }


  private silenceBeforeStoreInternal: Readable<number | null> | undefined = undefined;
  public get silenceBeforeStore(): Readable<number | null> {
    if (this.silenceBeforeStoreInternal !== undefined) return this.silenceBeforeStoreInternal;
    if (this.sectionBefore === undefined) throw new Error("Adjacent sections are not initialised");

    const endOfPrevious: Readable<number | null> = this.sectionBefore?.endTimeStore ?? writable(null);
    this.silenceBeforeStoreInternal = derived([endOfPrevious, this.startTimeStore], ([silenceStart, silenceEnd]) => {
      if (silenceStart === null) return null;
      return silenceEnd - silenceStart;
    })
    return this.silenceBeforeStoreInternal;
  }

  private silenceAfterStoreInternal: Readable<number | null> | undefined = undefined;
  public get silenceAfterStore(): Readable<number | null> {
    if (this.silenceAfterStoreInternal !== undefined) return this.silenceAfterStoreInternal;
    if (this.sectionAfter === undefined) throw new Error("Adjacent sections are not initialised");

    const startOfNext: Readable<number | null> = this.sectionAfter?.startTimeStore ?? writable(null);
    this.silenceAfterStoreInternal = derived([this.endTimeStore, startOfNext], ([silenceStart, silenceEnd]) => {
      if (silenceEnd === null) return null;
      return silenceEnd - silenceStart;
    })
    return this.silenceAfterStoreInternal;
  }

  
  endsParagraph: boolean | undefined = undefined;
  private endsParagraphStoreInternal: Readable<boolean> | undefined = undefined;
  public get endsParagraphStore(): Readable<boolean> {
    if (this.endsParagraphStoreInternal !== undefined) return this.endsParagraphStoreInternal;

    const store = derived(
      [this.userEndParagraphStore, this.silenceAfterStore, paragraphTimeStore],
      ([manualEndParagraph, silenceAfter, requiredSilence]) => {
        if (silenceAfter === null) return true;
        if (manualEndParagraph !== null) return manualEndParagraph;
        return silenceAfter >= requiredSilence
      }
    );
    store.subscribe(state => this.endsParagraph = state);
    this.endsParagraphStoreInternal = store;
    return store;
  }

  public get startsParagraphStore(): Readable<boolean> {
    if (this.sectionBefore === undefined) throw new Error("Adjacent sections are not initialised");
    if (this.sectionBefore === null) return writable(true);
    return this.sectionBefore.endsParagraphStore;
  }


  private placeholderPunctuationStoreInternal: Readable<"," | "." | ""> | undefined = undefined;
  private get placeholderPunctuationStore(): Readable<"," | "." | ""> {
    if (this.placeholderPunctuationStoreInternal !== undefined) return this.placeholderPunctuationStoreInternal;

    const store = derived([this.silenceAfterStore, commaTimeStore, periodTimeStore],
      ([silenceAfter, commaRequiredSilence, periodRequiredSilence]) => {
        if (silenceAfter === null) return ".";
        if (silenceAfter >= periodRequiredSilence) return ".";
        if (silenceAfter >= commaRequiredSilence) return ",";
        return "";
      }
    );
    this.placeholderPunctuationStoreInternal = store;
    return store;
  }

  private placeholderCapitalisationStoreInternal: Readable<boolean> | undefined = undefined;
  private get placeholderCapitalisationStore(): Readable<boolean> {
    if (this.placeholderCapitalisationStoreInternal !== undefined) return this.placeholderCapitalisationStoreInternal;
    if (this.sectionBefore === undefined) throw new Error("Adjacent sections are not initialised");
    if (this.sectionBefore === null) return makeReadonly(writable(true));
    this.placeholderCapitalisationStoreInternal = this.sectionBefore.endsSentenceStore;
    return this.placeholderCapitalisationStoreInternal;
  }

  private placeholderStoreInternal: Readable<string> | undefined = undefined;
  private get placeholderStore(): Readable<string> {
    if (this.placeholderStoreInternal !== undefined) return this.placeholderStoreInternal;

    const store = derived([
      this.rawOptionsStore,
      this.placeholderPunctuationStore,
      this.placeholderCapitalisationStore
    ], ([
      options,
      punctuation,
      capitalisePlaceholder
    ]) => {
      const firstOption = options[0];
      const punctuationRemoved = firstOption.replace(/[.,]/g, "");
      const words = punctuationRemoved.split(" ");
      const lowercaseWords = words.map(word => {
        if (word === word.toUpperCase()) return word; // Keep eg USA all-caps
        const lowercase = word.toLowerCase();
        if (!isKnownWord(lowercase)) return capitalise(lowercase);
        return lowercase;
      })
      const recombinedWords = lowercaseWords.join(" ") + punctuation;
      if (capitalisePlaceholder) return capitalise(recombinedWords);
      else return recombinedWords;
    });
    this.placeholderStoreInternal = store;
    return store;
  }

  displayText: string | undefined = undefined;
  private displayTextStoreInternal: Readable<string> | undefined = undefined;
  public get displayTextStore(): Readable<string> {
    if (this.displayTextStoreInternal !== undefined) return this.displayTextStoreInternal;

    const store = derived([this.userTextStore, this.placeholderStore], ([userText, placeholder]) => {
      if (userText !== null) return userText;
      else return placeholder;
    })
    store.subscribe(state => this.displayText = state);
    this.displayTextStoreInternal = store;
    return store;
  }

  private endsSentenceStoreInternal: Readable<boolean> | undefined = undefined;
  public get endsSentenceStore(): Readable<boolean> {
    if (this.endsSentenceStoreInternal !== undefined) return this.endsSentenceStoreInternal;

    const store = derived(this.displayTextStore, text => {
      const lastCharacter = text[text.length - 1] as string;
      if (lastCharacter === ".") return true;
      if (lastCharacter === "!") return true;
      if (lastCharacter === "?") return true;
      return false;
    });
    this.endsSentenceStoreInternal = store;
    return store;
  }
}
