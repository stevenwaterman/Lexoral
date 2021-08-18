import { Writable, writable, Readable, derived } from "svelte/store";
import { ParagraphStore, allParagraphsStore, ParagraphState, SectionState, SectionStore } from "./sectionStores";
import { clamp, clampGet, unwrapStore, siblingIdx } from "./utils";

type CursorPosition = {
  row: number;
  column: number;
}

type SectionSelection = {
  from: CursorPosition;
  to: CursorPosition;
} | null;

const fromRowIdxStore: Writable<number | null> = writable(null);
const fromParagraphStoreWrapped: Readable<ParagraphStore | null> = derived([allParagraphsStore, fromRowIdxStore], ([allParagraphs, idx]) => idx === null ? null : clampGet(allParagraphs, idx));
const fromParagraphStore: Readable<ParagraphState> = unwrapStore<ParagraphState | null, ParagraphStore | null>(fromParagraphStoreWrapped, (a, b) => a === b);

const fromColIdxStore: Writable<number | null> = writable(null);
const fromSectionStoreWrapped: Readable<SectionStore | null> = derived([fromParagraphStore, fromColIdxStore], ([paragraph, idx]) => {
  if (paragraph === null) return null;
  if (idx === null) return null;
  const section = clampGet(paragraph.sections, idx);
  if (section === undefined) return null;
  return section.store;
});
const fromSelectionStore: Readable<SectionState | null> = unwrapStore<SectionState | null, SectionStore | null>(fromSectionStoreWrapped, (a, b) => a === b);

const fromCursorPositionStore: Readable<CursorPosition | null> = derived([fromRowIdxStore, fromColIdxStore], ([row, column]) => {
  if(row === null) return null;
  if(column === null) return null;
  return { row, column }
});


const toRowIdxStore: Writable<number | null> = writable(null);
const toParagraphStoreWrapped: Readable<ParagraphStore | null> = derived([allParagraphsStore, toRowIdxStore], ([allParagraphs, idx]) => idx === null ? null : clampGet(allParagraphs, idx));
const toParagraphStore: Readable<ParagraphState> = unwrapStore<ParagraphState | null, ParagraphStore | null>(toParagraphStoreWrapped, (a, b) => a === b);

const toColIdxStore: Writable<number | null> = writable(null);
const toSectionStoreWrapped: Readable<SectionStore | null> = derived([toParagraphStore, toColIdxStore], ([paragraph, idx]) => {
  if (paragraph === null) return null;
  if (idx === null) return null;
  const section = clampGet(paragraph.sections, idx);
  if (section === undefined) return null;
  return section.store;
});
const toSelectionStore: Readable<SectionState | null> = unwrapStore<SectionState | null, SectionStore | null>(toSectionStoreWrapped, (a, b) => a === b);

const toCursorPositionStore: Readable<CursorPosition | null> = derived([toRowIdxStore, toColIdxStore], ([row, column]) => {
  if (row === null) return null;
  if (column === null) return null;
  return { row, column }
});


const selectionStore: Readable<SectionSelection> = derived([fromCursorPositionStore, toCursorPositionStore], ([from, to]) => {
  if (from === null) return null;
  if (to === null) return null;
  return { from, to };
})


const singleSelectionStore: Readable<boolean> = derived(selectionStore, selection => 
  selection !== null && 
  selection.from.column === selection.to.column && 
  selection.from.row === selection.to.row
);

export const dropdownSectionStore: Readable<SectionState | null> = derived([toSelectionStore, singleSelectionStore], ([selection, single]) => single ? selection : null);
export const dropdownPositionStore: Writable<{top: number; left: number}> = writable({ top: 0, left: 0 });

export function updateSelection() {
  setTimeout(updateSelectionInternal);
}

let lastSelection: Selection | null = null;
let lastStartContainer: Node | null = null;
let lastEndContainer: Node | null = null;

function updateSelectionInternal() {
  const selection = window.getSelection();

  const startContainer = selection.anchorNode;
  const endContainer = selection.focusNode;

  updateDropdownPosition(endContainer);
  if (startContainer === lastStartContainer && endContainer === lastEndContainer) return;
  lastStartContainer = startContainer;
  lastEndContainer = endContainer;


  const fromSpan = startContainer.parentElement;
  const fromRow = fromSpan.parentElement;
  const fromColIdx = siblingIdx(fromSpan);
  const fromRowIdx = siblingIdx(fromRow);
  fromColIdxStore.set(fromColIdx);
  fromRowIdxStore.set(fromRowIdx);

  const toSpan = endContainer.parentElement;
  const toRow = toSpan.parentElement;
  const toColIdx = siblingIdx(toSpan);
  const toRowIdx = siblingIdx(toRow);
  toColIdxStore.set(toColIdx);
  toRowIdxStore.set(toRowIdx);
}

function updateDropdownPosition(endContainer: Node) {
  const span = endContainer.parentElement;
  dropdownPositionStore.set({
    top: span.offsetTop + span.offsetHeight,
    left: span.offsetLeft
  })
}
