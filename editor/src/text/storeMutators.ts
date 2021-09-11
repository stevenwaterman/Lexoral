import { Section, allSectionsStore, AllSections, SectionStore } from "./textState";
import { getOptions } from "../preprocess/align";
import type { Writable } from "svelte/store";
import { tick } from "svelte/internal";
import { SectionSelection, selectionStore } from "../input/selectionState";
import { findSectionNode } from "./selector";
import { selectSectionStart } from "../input/select";

let allSections: AllSections;
allSectionsStore.subscribe(state => allSections = state);

type HistoryStep = {
  sectionIdx: number;
  from: Section;
  to: Section;
  lock: boolean;
}

let undoCount: number = 0;
const history: HistoryStep[] = [];

async function addHistory(idx: number, from: Section, to: Section) {
  setTimeout(() => addHistoryInternal(idx, from, to));
}

function addHistoryInternal(idx: number, from: Section, to: Section) {
  // TODO don't combine updates for text and endParagraph
  const splitPoint = history.length - undoCount;
  history.splice(splitPoint, history.length);
  undoCount = 0;

  const lastHistory = history[history.length - 1];
  if (lastHistory && !lastHistory.lock && lastHistory.sectionIdx === idx) {
    to = to;
  } else {
    if (lastHistory) lastHistory.lock = true;
    history.push({
      sectionIdx: idx,
      from,
      to,
      lock: false,
    });
  }
}

export async function undo() {
  const step = history.length - 1 - undoCount;
  const historyStep: HistoryStep | undefined = history[step];
  if (!historyStep) return;

  undoCount++;
  allSections[historyStep.sectionIdx].set(historyStep.from);

  await tick();

  const previousStep: HistoryStep | undefined = history[step - 1];
  await selectSectionStart(previousStep?.sectionIdx);
}

export async function redo() {
  if (undoCount === 0) return;
  undoCount--;
  const step = history.length - 1 - undoCount;
  const historyStep = history[step];
  if (!historyStep) return;
  allSections[historyStep.sectionIdx].set(historyStep.to);

  await tick();
  await selectSectionStart(historyStep.sectionIdx);
}




abstract class BaseSectionMutator<S> {
  protected readonly underlying: Writable<S>;

  constructor(underlying: Writable<S>) {
    this.underlying = underlying;
  }

  get(): Writable<S> {
    return this.underlying;
  }

  abstract update(func: (state: Section) => Section): this;

  setText(text: string): this {
    return this.update(state => {
      if (state.text === text && state.edited) return state;

      return {
        ...state,
        text,
        completionOptions: getOptions(text, state.originalOptions),
        edited: true
      };
    })
  }

  toggleParagraph(): this {
    return this.update(state => ({
      ...state,
      endParagraph: !state.endParagraph
    }))
  }

  enableEndParagraph(): this {
    return this.update(state => ({
      ...state,
      endParagraph: true
    }))
  }

  disableEndParagraph(): this {
    return this.update(state => ({
      ...state,
      endParagraph: false
    }))
  }

  deleteText(offsets?: { start?: number, end?: number }): this {
    const startOffset = offsets?.start;
    const endOffset = offsets?.end;
    return this.update(state => {
      const currentText = state.edited ? state.text : state.placeholder;

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
      }
    })
  }
}

export class SectionMutator extends BaseSectionMutator<Section> {
  update(func: (state: Section) => Section): this {
    this.underlying.update(state => {
      const newState = func(state);
      addHistory(state.idx, state, newState);
      return newState;
    });
    return this;
  }

  static ofIdx(idx: number): SectionMutator | undefined {
    const store: SectionStore | undefined = allSections[idx];
    if (!store) return undefined;
    return new SectionMutator(store);
  }
}

export class MaybeSectionMutator extends BaseSectionMutator<Section | undefined> {
  update(func: (state: Section) => Section): this {
    this.underlying.update(state => {
      if (state === undefined) return undefined;
      const newState = func(state);
      addHistory(state.idx, state, newState);
      return newState;
    })
    return this;
  }
}
