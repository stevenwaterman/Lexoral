import { Writable, writable, Readable, derived } from "svelte/store";
import { ParagraphStore, documentStore, ParagraphState, SectionState, SectionStore } from "./sectionStores";
import { clampGet, unwrapStore, siblingIdx } from "./utils";

export type CursorPosition = {
  paragraph: number;
  section: number;
  offset: number;
}

export type SectionSelection = {
  from: CursorPosition;
  to: CursorPosition;
} | undefined;

export const selectionStore: Writable<SectionSelection> = writable(undefined);

export function createSelectionStore(inputStore: Readable<undefined | Omit<CursorPosition, "offset">>): Readable<SectionState | undefined> {
  const paragraphStoreWrapped: Readable<ParagraphStore | undefined> = derived([documentStore, inputStore], ([document, selection]) => selection === undefined ? undefined : clampGet(document, selection.paragraph));
  const paragraphStore: Readable<ParagraphState | undefined> = unwrapStore(paragraphStoreWrapped);
  const sectionStoreWrapped: Readable<SectionStore | undefined> = derived([paragraphStore, inputStore], ([paragraph, selection]) => {
    if (paragraph === undefined) return undefined;
    if (selection === undefined) return undefined;
    return clampGet(paragraph, selection.section);
  });
  const sectionStore: Readable<SectionState | undefined> = unwrapStore(sectionStoreWrapped);
  return sectionStore;
}

export const fromSectionStore = createSelectionStore(derived(selectionStore, selection => {
  if (selection === undefined) return undefined;
  return {
    paragraph: selection.from.paragraph,
    section: selection.from.section
  }
}));
export const fromSectionIdxStore = derived(fromSectionStore, section => section?.idx);

export const toSectionStore = createSelectionStore(derived(selectionStore, selection => {
  if (selection === undefined) return undefined;
  return {
    paragraph: selection.to.paragraph,
    section: selection.to.section
  }
}));
export const toSectionIdxStore = derived(toSectionStore, section => section?.idx);


export const singleSelectionStore: Readable<boolean> = derived(selectionStore, selection => 
  selection !== undefined && 
  selection.from.section === selection.to.section && 
  selection.from.paragraph === selection.to.paragraph
);

export const dropdownSectionStore: Readable<SectionState | undefined> = derived([toSectionStore, singleSelectionStore], ([state, single]) => single ? state : undefined);
export const dropdownPositionStore: Writable<{top: number; left: number}> = writable({ top: 0, left: 0 });

const focusStore: Readable<{ component: HTMLSpanElement; offset: number } | null> = derived([dropdownSectionStore, selectionStore], ([section, selection]) => {
  if (section === undefined) return undefined;
  if (section.spanComponent === undefined) return undefined;
  if (selection === undefined) return undefined;
  return {
    component: section.spanComponent,
    offset: selection.to.offset
  }
});
focusStore.subscribe(state => {
  if (state === undefined) return;
  state.component.focus();
});

export const focusAtStartStore: Readable<boolean> = derived(focusStore, focus => {
  if (focus === undefined) return false;
  return focus.offset === 1;
});

export const focusAtEndStore: Readable<boolean> = derived(focusStore, focus => {
  if (focus === undefined) return false;
  const length = focus.component.textContent.length;
  return focus.offset === length;
})

export function updateSelection() {
  setTimeout(updateSelectionInternal);
}

let lastStartOffset: number | undefined = undefined;
let lastStartContainer: Node | undefined = undefined;
let lastEndOffset: number | undefined = undefined;
let lastEndContainer: Node | undefined = undefined;

function updateSelectionInternal() {
  const selection = window.getSelection();

  const startContainer = selection.anchorNode;
  const endContainer = selection.focusNode;

  const startOffset = selection.anchorOffset;
  const endOffset = selection.focusOffset;

  updateDropdownPosition(endContainer);

  if (
    startContainer === lastStartContainer && 
    endContainer === lastEndContainer &&
    startOffset === lastStartOffset &&
    endOffset === lastEndOffset
  ) return;

  lastStartContainer = startContainer;
  lastEndContainer = endContainer;

  const fromSpan = startContainer.parentElement;
  const fromParagraph = fromSpan.parentElement;
  const fromSectionIdx = siblingIdx(fromSpan);
  const fromParagraphIdx = siblingIdx(fromParagraph);

  const toSpan = endContainer.parentElement;
  const toParagraph = toSpan.parentElement;
  const toSectionIdx = siblingIdx(toSpan);
  const toParagraphIdx = siblingIdx(toParagraph);

  selectionStore.set({
    from: {
      paragraph: fromParagraphIdx,
      section: fromSectionIdx,
      offset: startOffset
    }, 
    to: {
      paragraph: toParagraphIdx,
      section: toSectionIdx,
      offset: endOffset
    }
  })
}

function updateDropdownPosition(endContainer: Node) {
  const span = endContainer.parentElement;
  dropdownPositionStore.set({
    top: span.offsetTop + span.offsetHeight,
    left: span.offsetLeft
  })
}
