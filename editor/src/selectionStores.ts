import { writable, Readable, Writable, derived } from "svelte/store";
import { siblingIdx, clampGet } from "./utils";
import { Paragraph, documentStore, Section } from "./sectionStores";

const selectionStore: Writable<null | {start: { row: number; col: number }; end: { row: number; col: number }}> = writable(null);

const startParagraphStore: Readable<Paragraph | null> = derived([documentStore, selectionStore], ([allParagraphs, selection]) => selection === null ? null : clampGet(allParagraphs, selection.start.row));
const startSectionStore: Readable<Section | null> = derived([startParagraphStore, selectionStore], ([paragraph, selection]) => {
  if (paragraph === null) return null;
  if (selection === null) return null;
  if (paragraph.length === 0) return null;

  let count = 0;
  for (let section of paragraph) {
    count += section.text.length + 1;
    if (count > selection.start.col) return section;
  }

  return paragraph[paragraph.length - 1];
});

const endParagraphStore: Readable<Paragraph | null> = derived([documentStore, selectionStore], ([allParagraphs, selection]) => selection === null ? null : clampGet(allParagraphs, selection.end.row));
const endSectionStore: Readable<Section | null> = derived([endParagraphStore, selectionStore], ([paragraph, selection]) => {
  if (paragraph === null) return null;
  if (selection === null) return null;
  if (paragraph.length === 0) return null;

  let count = 0;
  for (let section of paragraph) {
    count += section.text.length + 1;
    if (count > selection.end.col) return section;
  }

  return paragraph[paragraph.length - 1];
});

const singleSelectionStore: Readable<boolean> = derived(selectionStore, selection => 
  selection !== null &&
  selection.start.row === selection.end.row && 
  selection.start.col === selection.end.col
);

export const dropdownSectionStore: Readable<Section | null> = derived([singleSelectionStore, endSectionStore], ([singleSelection, endSection]) => {
  if (!singleSelection) return null;
  return endSection;
});

export function updateSelection() {
  setTimeout(updateSelectionInternal);
}

let lastStartColIdx: number | null = null;
let lastEndColIdx: number | null = null;
let lastStartContainer: Node | null = null;
let lastEndContainer: Node | null = null;

function updateSelectionInternal() {
  const selection = window.getSelection();

  const startContainer = selection.anchorNode;
  const startColIdx = selection.anchorOffset;

  const endContainer = selection.focusNode;
  const endColIdx = selection.focusOffset;

  if (
    startContainer === lastStartContainer && 
    endContainer === lastEndContainer &&
    startColIdx === lastStartColIdx &&
    endColIdx === lastEndColIdx
  ) return;

  updateDropdownPosition(selection);

  lastStartContainer = startContainer;
  lastStartColIdx = startColIdx;

  lastEndContainer = endContainer;
  lastEndColIdx = endColIdx;

  const startRowIdx = siblingIdx(startContainer.parentElement);
  const endRowIdx = siblingIdx(endContainer.parentElement);

  selectionStore.set({
    start: {
      row: startRowIdx,
      col: startColIdx
    },
    end: {
      row: endRowIdx,
      col: endColIdx
    }
  });
}

export const dropdownPositionStore: Writable<{ left: number; top: number }> = writable({ left: 0, top: 0 });

function updateDropdownPosition(selection: Selection) {
  const rangeBounds = selection.getRangeAt(0).getBoundingClientRect();
  const paragraphElement = selection.focusNode.parentElement;
  const paragraphBounds = paragraphElement.getBoundingClientRect();

  const left = rangeBounds.left + paragraphElement.offsetLeft - paragraphBounds.left;
  const top = rangeBounds.top + rangeBounds.height + paragraphElement.offsetTop - paragraphBounds.top;

  dropdownPositionStore.set({ left, top });
}
