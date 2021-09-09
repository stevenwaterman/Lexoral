import { SectionStore, Section, Paragraph, documentStore, allSectionsStore } from "./textState";
import { getOptions } from "../preprocess/align";
import { Writable, writable } from "svelte/store";
import { get_store_value, tick } from "svelte/internal";
import type { CursorPosition } from "../input/selectionState";

let allSectionStores: Record<number, SectionStore>;
allSectionsStore.subscribe(state => allSectionStores = state);

type HistoryStep = {
  postStepSelection: {
    anchorNode: Node | undefined;
    anchorOffset: number | undefined;
    focusNode : Node | undefined;
    focusOffset: number | undefined;
  };
  undo: () => void;
  redo: () => void;
}

let undoCount: number = 0;
const history: HistoryStep[] = [];

function addHistory(undo: () => void, redo: () => void) {
  const splitPoint = history.length - undoCount;
  history.splice(splitPoint, history.length);
  undoCount = 0;

  const selection = window.getSelection();
  const anchorNode = selection?.anchorNode ?? undefined;
  const anchorOffset = selection?.anchorOffset ?? undefined;
  const focusNode = selection?.focusNode ?? undefined;
  const focusOffset = selection?.focusOffset ?? undefined;

  history.push({
    postStepSelection: {
      anchorNode,
      anchorOffset,
      focusNode,
      focusOffset
    },
    undo,
    redo
  });

  console.log(`History: ${undoCount} : ${history.length}`)
}

export async function undo() {
  const step = history.length - 1 - undoCount;
  const historyStep: HistoryStep | undefined = history[step];
  console.log(historyStep)
  if (!historyStep) return;

  undoCount++;
  historyStep.undo();

  await tick();

  console.log(`History: ${undoCount} : ${history.length}`)

  const previousStep: HistoryStep | undefined = history[step - 1];
  if (!previousStep) return;

  const {anchorNode, anchorOffset, focusNode, focusOffset} = previousStep.postStepSelection;
  if (!anchorNode || !anchorOffset || !focusNode || !focusOffset) return;

  window.getSelection()?.setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset);

}

export async function redo() {
  if (undoCount === 0) return;
  undoCount--;
  const step = history.length - 1 - undoCount;
  const historyStep = history[step];
  if (!historyStep) return;
  historyStep.redo();

  console.log(`History: ${undoCount} : ${history.length}`)

  await tick();

  const {anchorNode, anchorOffset, focusNode, focusOffset} = historyStep.postStepSelection;
  if (!anchorNode || !anchorOffset || !focusNode || !focusOffset) return;
  window.getSelection()?.setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset);
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
      if (state.text === text) return state;

      const newState = {
        ...state,
        text,
        completionOptions: getOptions(text, state.originalOptions),
        edited: true
      };

      addHistory(
        () => allSectionStores[state.idx].set(state),
        () => allSectionStores[state.idx].set(newState)
      )
      
      return newState;
    })
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

      const newState = {
        ...state,
        text: newText,
        completionOptions: getOptions(newText, state.originalOptions),
        edited: true
      }

      addHistory(
        () => allSectionStores[state.idx].set(state),
        () => allSectionStores[state.idx].set(newState)
      )

      return newState;
    })
  }
}

export class SectionMutator extends BaseSectionMutator<Section> {
  update(func: (state: Section) => Section): this {
    this.underlying.update(func);
    return this;
  }

  static ofIdx(idx: number): SectionMutator {
    return new SectionMutator(allSectionStores[idx]);
  }
}

export class MaybeSectionMutator extends BaseSectionMutator<Section | undefined> {
  update(func: (state: Section) => Section): this {
    this.underlying.update(state => {
      if (state === undefined) return undefined;
      else return func(state);
    })
    return this;
  }
}




abstract class BaseParagraphMutator<S> {
  protected readonly underlying: Writable<S>;

  constructor(underlying: Writable<S>) {
    this.underlying = underlying;
  }

  get(): Writable<S> {
    return this.underlying;
  }

  abstract update(func: (state: Paragraph) => Paragraph): this;

  append(store: SectionStore): this {
    return this.update(state => {
      state.push(store);
      return state;
    });
  }

  split(position: CursorPosition): this {
    return this.update(state => {
      const remainingSections = state.slice(0, position.section);
  
      const removedSections = state.slice(position.section);
      const newParagraphStore = writable(removedSections);
      documentStore.update(document => {
        document.splice(position.paragraph + 1, 0, newParagraphStore);
        return document;
      })
  
      return remainingSections;
    })
  }

  combine(position: CursorPosition): this {
    documentStore.update(document => {
      const [deletedParagraph] = document.splice(position.paragraph - 1, 1);
      const deletedParagraphValue = get_store_value(deletedParagraph);
      this.update(state => {
        const undoSplitPosition: CursorPosition = {
          paragraph: position.paragraph - 1,
          section: state.length - 1,
          offset: 0
        };

        state.unshift(...deletedParagraphValue);

        return state;
      })
      return document;
    })
    return this;
  }
}

export class ParagraphMutator extends BaseParagraphMutator<Paragraph> {
  update(func: (state: Paragraph) => Paragraph): this {
    this.underlying.update(func);
    return this;
  }
}

export class MaybeParagraphMutator extends BaseParagraphMutator<Paragraph | undefined> {
  update(func: (state: Paragraph) => Paragraph): this {
    this.underlying.update(state => {
      if (state === undefined) return undefined;
      else return func(state);
    })
    return this;
  }
}
