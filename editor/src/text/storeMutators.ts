import { Section, allSectionsStore, AllSections } from "./textState";
import { getOptions } from "../preprocess/align";
import type { Writable } from "svelte/store";
import { tick } from "svelte/internal";

let allSections: AllSections;
allSectionsStore.subscribe(state => allSections = state);

type HistoryStep = {
  sectionIdx: number;
  from: Section;
  to: Section;
  lock: boolean;
  postStepSelection: {
    anchorNode: Node | undefined;
    anchorOffset: number | undefined;
    focusNode : Node | undefined;
    focusOffset: number | undefined;
  };
}

let undoCount: number = 0;
const history: HistoryStep[] = [];

function addHistory(idx: number, from: Section, to: Section) {
  // TODO don't combine updates for text and endParagraph
  const splitPoint = history.length - undoCount;
  history.splice(splitPoint, history.length);
  undoCount = 0;

  const selection = window.getSelection();
  const anchorNode = selection?.anchorNode ?? undefined;
  const anchorOffset = selection?.anchorOffset ?? undefined;
  const focusNode = selection?.focusNode ?? undefined;
  const focusOffset = selection?.focusOffset ?? undefined;
  const postStepSelection = {
    anchorNode,
    anchorOffset,
    focusNode,
    focusOffset
  };

  const lastHistory = history[history.length - 1];
  if (lastHistory && !lastHistory.lock && lastHistory.sectionIdx === idx) {
    lastHistory.postStepSelection = postStepSelection;
    to = to;
  } else {
    if (lastHistory) lastHistory.lock = true;
    history.push({
      sectionIdx: idx,
      from,
      to,
      lock: false,
      postStepSelection
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
  allSections[historyStep.sectionIdx].set(historyStep.to);

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

  static ofIdx(idx: number): SectionMutator {
    return new SectionMutator(allSections[idx]);
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




// abstract class BaseParagraphMutator<S> {
//   protected readonly underlying: Writable<S>;

//   constructor(underlying: Writable<S>) {
//     this.underlying = underlying;
//   }

//   get(): Writable<S> {
//     return this.underlying;
//   }

//   abstract update(func: (state: Paragraph) => Paragraph): this;

//   append(store: SectionStore): this {
//     return this.update(state => {
//       state.push(store);
//       return state;
//     });
//   }

//   split(position: CursorPosition): this {
//     return this.update(state => {
//       const remainingSections = state.slice(0, position.section);
  
//       const removedSections = state.slice(position.section);
//       const newParagraphStore = writable(removedSections);
//       documentStore.update(document => {
//         document.splice(position.paragraph + 1, 0, newParagraphStore);
//         return document;
//       })
  
//       return remainingSections;
//     })
//   }

//   combine(position: CursorPosition): this {
//     documentStore.update(document => {
//       const [deletedParagraph] = document.splice(position.paragraph - 1, 1);
//       const deletedParagraphValue = get_store_value(deletedParagraph);
//       this.update(state => {
//         const undoSplitPosition: CursorPosition = {
//           paragraph: position.paragraph - 1,
//           section: state.length - 1,
//           offset: 0
//         };

//         state.unshift(...deletedParagraphValue);

//         return state;
//       })
//       return document;
//     })
//     return this;
//   }
// }

// export class ParagraphMutator extends BaseParagraphMutator<Paragraph> {
//   update(func: (state: Paragraph) => Paragraph): this {
//     this.underlying.update(func);
//     return this;
//   }
// }

// export class MaybeParagraphMutator extends BaseParagraphMutator<Paragraph | undefined> {
//   update(func: (state: Paragraph) => Paragraph): this {
//     this.underlying.update(state => {
//       if (state === undefined) return undefined;
//       else return func(state);
//     })
//     return this;
//   }
// }
