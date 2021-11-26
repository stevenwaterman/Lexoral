import { derived, Readable, writable, Writable } from "svelte/store"
import { fakeWritable, makeReadonly, makeWritable } from "../../utils/stores";
import type { TranscriptEntry } from "../initialiseState";
import { commaSilenceStore, paragraphSilenceStore, patchInterface, periodSilenceStore } from "../patch/patchInterface";
import { getCompletionStore } from "./completions";
import { paragraphLocationsStore } from "./paragraphLocationsStore";
import { registerSectionStore } from "./sectionStoreRegistry";

class SectionStoreBuilderOne {
  protected readonly transcriptEntry: TranscriptEntry;

  public readonly idx: number;

  public startTime: number = -1;
  readonly startTimeStore: Readable<number>;

  public endTime: number = -1;
  readonly endTimeStore: Readable<number>;

  protected readonly rawOptions: [string, ...string[]];

  constructor(transcriptEntry: TranscriptEntry) {
    this.transcriptEntry = transcriptEntry;

    const { idx, startTime, endTime, options } = transcriptEntry;

    this.idx = idx;
    this.startTimeStore = makeReadonly(writable(startTime));
    this.endTimeStore = makeReadonly(writable(endTime));
    this.rawOptions = options;

    this.startTimeStore.subscribe(state => this.startTime = state);
    this.endTimeStore.subscribe(state => this.endTime = state);

    const sectionPatchStore = patchInterface.getPatchStore(idx);

    this.userTextStore = derived(sectionPatchStore, sectionPatch => sectionPatch.text);
    this.userEndParagraphStore = derived(sectionPatchStore, sectionPatch => sectionPatch.endParagraph);

    const confirmedReadable = derived(sectionPatchStore, section => section.confirmed ?? false);
    const setConfirmed = (confirmed: boolean) => patchInterface.append(idx, { confirmed });
    this.confirmedStore = makeWritable(confirmedReadable, setConfirmed);

    this.editedStore = derived([this.userTextStore, this.confirmedStore], ([text, confirmed]) => confirmed || text !== null);
  }

  public readonly selectedStore: Writable<boolean> = writable(false);
  public readonly soleSelectedStore: Writable<boolean> = writable(false);
  public readonly playingStore: Writable<boolean> = writable(false);
  public readonly editedStore: Readable<boolean>;

  protected readonly userTextStore: Readable<string | null>;
  protected readonly userEndParagraphStore: Readable<boolean | null>;
  public readonly confirmedStore: Writable<boolean>;

  public build(prev: SectionStoreBuilderOne | null, next: SectionStoreBuilderOne | null): SectionStoreBuilderTwo {
    return new SectionStoreBuilderTwo(this.transcriptEntry, prev, next);
  }
}

class SectionStoreBuilderTwo extends SectionStoreBuilderOne {
  protected readonly prevOne: SectionStoreBuilderOne | null;
  protected readonly nextOne: SectionStoreBuilderOne | null;

  constructor(
    transcriptEntry: TranscriptEntry, 
    prev: SectionStoreBuilderOne | null, 
    next: SectionStoreBuilderOne | null
  ) {
    super(transcriptEntry);
    this.prevOne = prev;
    this.nextOne = next;

    const prevEndTime: Readable<number | null> = prev?.endTimeStore ?? writable(null);
    this.silenceBeforeStore = derived([prevEndTime, this.startTimeStore], ([silenceStart, silenceEnd]) => {
      if (silenceStart === null) return null;
      return silenceEnd - silenceStart;
    });

    const nextStartTime: Readable<number | null> = next?.startTimeStore ?? writable(null);
    this.silenceAfterStore = derived([this.endTimeStore, nextStartTime], ([silenceStart, silenceEnd]) => {
      if (silenceEnd === null) return null;
      return silenceEnd - silenceStart;
    });

    const endParagraphReadable = derived(
      [this.userEndParagraphStore, this.silenceAfterStore, paragraphSilenceStore],
      ([manualEndParagraph, silenceAfter, requiredSilence]) => {
        if (silenceAfter === null) return true;
        if (manualEndParagraph !== null) return manualEndParagraph;
        return silenceAfter >= requiredSilence / 1000
      }
    );
    const endParagraphSetter = (endParagraph: boolean) => patchInterface.append(this.idx, { endParagraph });
    this.endParagraphStore = makeWritable(endParagraphReadable, endParagraphSetter);

    this.placeholderPunctuationStore = derived(
      [this.endParagraphStore, this.silenceAfterStore, commaSilenceStore, periodSilenceStore],
      ([endsParagraph, silenceAfter, commaRequiredSilence, periodRequiredSilence]) => {
        if (endsParagraph) return ".";
        if (silenceAfter === null) return ".";
        if (silenceAfter >= periodRequiredSilence / 1000) return ".";
        if (silenceAfter >= commaRequiredSilence / 1000) return ",";
        return "";
      }
    );

    this.endsSentenceStore = derived(
      [this.endParagraphStore, this.placeholderPunctuationStore, this.userTextStore], 
      ([endsParagraph, placeholderPunctuation, text]) => {
        if (endsParagraph) return true;

        if (text === null) {
          if (placeholderPunctuation === ".") return true;
          else return false;
        };

        const lastCharacter = text[text.length - 1] as string;
        if (lastCharacter === ".") return true;
        if (lastCharacter === "!") return true;
        if (lastCharacter === "?") return true;
        return false;
    });
  }

  public readonly silenceBeforeStore: Readable<number | null>;
  public readonly silenceAfterStore: Readable<number | null>;
  public readonly endParagraphStore: Writable<boolean>;
  public readonly placeholderPunctuationStore: Readable<"," | "." | "">;
  public readonly endsSentenceStore: Readable<boolean>;

  public override build(prevTwo: SectionStoreBuilderTwo | null, nextTwo: SectionStoreBuilderTwo | null): SectionStoreBuilderThree {
    return new SectionStoreBuilderThree(this.transcriptEntry, this.prevOne, this.nextOne, prevTwo, nextTwo);
  }
}

class SectionStoreBuilderThree extends SectionStoreBuilderTwo {
  constructor(
    transcriptEntry: TranscriptEntry,
    prevOne: SectionStoreBuilderOne | null,
    nextOne: SectionStoreBuilderOne | null,
    prev: SectionStoreBuilderTwo | null, 
    next: SectionStoreBuilderTwo | null
  ) {
    super(transcriptEntry, prevOne, nextOne);

    this.startParagraphStore = prev?.endParagraphStore ?? fakeWritable(true);
    this.placeholderCapitalisationStore = prev?.endsSentenceStore ?? writable(true);
    this.completionsStore = getCompletionStore(this.userTextStore, this.rawOptions, this.placeholderCapitalisationStore, this.placeholderPunctuationStore);

    const displayTextReadable = derived(this.completionsStore, completions => completions[0]);
    const displayTextSetter = (text: string) => patchInterface.append(this.idx, { text });
    this.displayTextStore = makeWritable(displayTextReadable, displayTextSetter);
    
    registerSectionStore(this);
  }

  public readonly startParagraphStore: Writable<boolean>;
  public readonly placeholderCapitalisationStore: Readable<boolean>;
  public readonly completionsStore: Readable<[string, ...string[]]>;
  public readonly displayTextStore: Writable<string>;
}

export function initSectionStores(transcript: Omit<TranscriptEntry, "idx">[]) {
  const stageOne = transcript.map((section, idx) => new SectionStoreBuilderOne({ idx, ...section }))

  const stageTwo = stageOne.map((store, idx) => {
    const prev = stageOne[idx - 1] ?? null;
    const next = stageOne[idx + 1] ?? null;
    return store.build(prev, next);
  });

  const stageThree = stageTwo.map((store, idx) => {
    const prev = stageTwo[idx - 1] ?? null;
    const next = stageTwo[idx + 1] ?? null;
    return store.build(prev, next);
  })

  stageThree.forEach(store => {
    store.endParagraphStore.subscribe(endsParagraph => 
      paragraphLocationsStore.setEndParagraph(store.idx, endsParagraph));
  });

  return stageThree;
}

export type SectionStore = SectionStoreBuilderThree;
