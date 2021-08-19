import { Writable, writable, Readable, derived } from "svelte/store";
import { ParagraphStore, documentStore, ParagraphState, SectionState, SectionStore } from "./sectionStores";
import { clampGet, unwrapStore, siblingIdx } from "./utils";

type CursorPosition = {
  paragraph: number;
  section: number;
  offset: number;
}

type SectionSelection = {
  from: CursorPosition;
  to: CursorPosition;
} | undefined;

const selectionStore: Writable<SectionSelection> = writable(undefined);

const fromParagraphIdxStore: Readable<number | undefined> = derived(selectionStore, selection => selection?.from?.paragraph);
const fromParagraphStoreWrapped: Readable<ParagraphStore | undefined> = derived([documentStore, fromParagraphIdxStore], ([document, idx]) => idx === undefined ? undefined : clampGet(document, idx));
const fromParagraphStore: Readable<ParagraphState> = unwrapStore<ParagraphState | undefined, ParagraphStore | undefined>(fromParagraphStoreWrapped, (a, b) => a === b);

const fromSectionIdxStore: Readable<number | undefined> = derived(selectionStore, selection => selection?.from?.section);
const fromSectionStoreWrapped: Readable<SectionStore | undefined> = derived([fromParagraphStore, fromSectionIdxStore], ([paragraph, idx]) => {
  if (paragraph === undefined) return undefined;
  if (idx === undefined) return undefined;
  const section = clampGet(paragraph.sections, idx);
  if (section === undefined) return undefined;
  return section.store;
});
const fromSectionStore: Readable<SectionState | undefined> = unwrapStore<SectionState | undefined, SectionStore | undefined>(fromSectionStoreWrapped, (a, b) => a === b);


const toParagraphIdxStore: Readable<number | undefined> = derived(selectionStore, selection => selection?.to?.paragraph);
const toParagraphStoreWrapped: Readable<ParagraphStore | undefined> = derived([documentStore, toParagraphIdxStore], ([document, idx]) => idx === undefined ? undefined : clampGet(document, idx));
const toParagraphStore: Readable<ParagraphState> = unwrapStore<ParagraphState | undefined, ParagraphStore | undefined>(toParagraphStoreWrapped, (a, b) => a === b);

const toSectionIdxStore: Readable<number | undefined> = derived(selectionStore, selection => selection?.to?.section);
const toSectionStoreWrapped: Readable<SectionStore | undefined> = derived([toParagraphStore, toSectionIdxStore], ([paragraph, idx]) => {
  if (paragraph === undefined) return undefined;
  if (idx === undefined) return undefined;
  const section = clampGet(paragraph.sections, idx);
  if (section === undefined) return undefined;
  return section.store;
});
const toSectionStore: Readable<SectionState | undefined> = unwrapStore<SectionState | undefined, SectionStore | undefined>(toSectionStoreWrapped, (a, b) => a === b);



export const singleSelectionStore: Readable<boolean> = derived(selectionStore, selection => 
  selection !== undefined && 
  selection.from.section === selection.to.section && 
  selection.from.paragraph === selection.to.paragraph
);

export const dropdownSectionStore: Readable<SectionState | undefined> = derived([toSectionStore, singleSelectionStore], ([selection, single]) => single ? selection : undefined);
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

export const selectedTimeRangeStore: Readable<{start: number; end: number} | undefined> = derived([fromSectionStore, toSectionStore], ([start, end]) => {
  if (start === undefined) return undefined;
  if (end === undefined) return undefined;
  const early = Math.min(start.startTime, end.startTime);
  const late = Math.max(start.endTime, end.endTime);
  return { start: early, end: late }
});

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
