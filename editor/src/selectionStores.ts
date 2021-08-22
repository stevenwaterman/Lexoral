import { Writable, writable, Readable, derived } from "svelte/store";
import { ParagraphStore, documentStore, ParagraphState, SectionState, SectionStore, allSectionsStore } from "./sectionStores";
import { clampGet, unwrapStore, siblingIdx, unwrapRecordStore } from "./utils";

export type CursorPosition = {
  paragraph: number;
  section: number;
  offset: number;
}

export type SectionSelection = {
  anchor: CursorPosition;
  focus: CursorPosition;
  early: CursorPosition;
  late: CursorPosition;
  inverted: boolean;
};

export const selectionStore: Writable<SectionSelection | undefined> = writable(undefined);

export function createSelectionStore(inputStore: Readable<undefined | Omit<CursorPosition, "offset">>): Readable<SectionState | undefined> {
  let input: undefined | Omit<CursorPosition, "offset"> = undefined;

  const paragraphStoreWrapped: Readable<ParagraphStore | undefined> = derived([documentStore, inputStore], ([document, selection]) => {
    input = selection;
    return selection === undefined ? undefined : clampGet(document, selection.paragraph);
  });
  const paragraphStore: Readable<ParagraphState | undefined> = unwrapStore(paragraphStoreWrapped);
  const sectionStoreWrapped: Readable<SectionStore | undefined> = derived(paragraphStore, (paragraph) => {
    if (paragraph === undefined) return undefined;
    if (input === undefined) return undefined;
    return clampGet(paragraph, input.section);
  });
  const sectionStore: Readable<SectionState | undefined> = unwrapStore(sectionStoreWrapped);

  return sectionStore;
}

export const anchorSectionStore: Readable<SectionState | undefined> = createSelectionStore(derived(selectionStore, selection => {
  if (selection === undefined) return undefined;
  return {
    paragraph: selection.anchor.paragraph,
    section: selection.anchor.section
  }
}));

export const focusSectionStore: Readable<SectionState | undefined> = createSelectionStore(derived(selectionStore, selection => {
  if (selection === undefined) return undefined;
  return {
    paragraph: selection.focus.paragraph,
    section: selection.focus.section
  }
}));

export const earlySectionStore: Readable<SectionState | undefined> = derived([selectionStore, anchorSectionStore, focusSectionStore], ([selection, anchor, focus]) => selection?.inverted ? focus : anchor);
export const lateSectionStore: Readable<SectionState | undefined> = derived([selectionStore, anchorSectionStore, focusSectionStore], ([selection, anchor, focus]) => selection?.inverted ? anchor : focus);

export const anchorSectionIdxStore = derived(anchorSectionStore, section => section?.idx);
export const focusSectionIdxStore = derived(focusSectionStore, section => section?.idx);
export const earlySectionIdxStore = derived(earlySectionStore, section => section?.idx);
export const lateSectionIdxStore = derived(lateSectionStore, section => section?.idx);

export const singleSelectionStore: Readable<boolean> = derived(selectionStore, selection => 
  selection !== undefined && 
  selection.anchor.section === selection.focus.section && 
  selection.anchor.paragraph === selection.focus.paragraph &&
  selection.anchor.offset === selection.focus.offset
);

export const dropdownSectionStore: Readable<SectionState | undefined> = derived([focusSectionStore, singleSelectionStore], ([state, single]) => single ? state : undefined);
derived([selectionStore, dropdownSectionStore], state => state).subscribe(([_, section]) => section?.spanComponent?.focus());

export const dropdownPositionStore: Writable<{top: number; left: number}> = writable({ top: 0, left: 0 });

export const caretPositionStore: Readable<{start: boolean; end: boolean}> = derived([dropdownSectionStore, selectionStore], ([section, selection]) => {
  if (section === undefined) return { start: false, end: false };
  const start = selection.focus.offset === 0;
  const textLength = section.spanComponent.textContent.length;
  const end = selection.focus.offset > textLength - 2;
  return { start, end };
})

export function updateSelection() {
  setTimeout(updateSelectionInternal);
}

let lastAnchorNode: Node | undefined = undefined;
let lastFocusNode: Node | undefined = undefined;
let lastAnchorOffset: number | undefined = undefined;
let lastFocusOffset: number | undefined = undefined;

function updateSelectionInternal() {
  const { anchorNode, anchorOffset, focusNode, focusOffset } = window.getSelection();

  updateDropdownPosition(focusNode);

  if (
    anchorNode === lastAnchorNode &&
    focusNode === lastFocusNode &&
    anchorOffset === lastAnchorOffset &&
    focusOffset === lastFocusOffset
  ) return;

  lastAnchorNode = anchorNode;
  lastFocusNode = focusNode;
  lastAnchorOffset = anchorOffset;
  lastFocusOffset = focusOffset;

  const anchorSpan = anchorNode.parentElement;
  const anchorParagraph = anchorSpan.parentElement;
  const anchorSectionIdx = siblingIdx(anchorSpan);
  const anchorParagraphIdx = siblingIdx(anchorParagraph);

  const focusSpan = focusNode.parentElement;
  const focusParagraph = focusSpan.parentElement;
  const focusSectionIdx = siblingIdx(focusSpan);
  const focusParagraphIdx = siblingIdx(focusParagraph);

  const anchor = {
    paragraph: anchorParagraphIdx,
    section: anchorSectionIdx,
    offset: anchorOffset - 1
  };

  const focus = {
    paragraph: focusParagraphIdx,
    section: focusSectionIdx,
    offset: focusOffset - 1
  };

  const inverted = isSelectionInverted(anchor, focus);
  const early = inverted ? focus : anchor;
  const late = inverted ? anchor : focus;

  selectionStore.set({ anchor, focus, early, late, inverted });
}

function updateDropdownPosition(endContainer: Node) {
  const span = endContainer.parentElement;
  dropdownPositionStore.set({
    top: span.offsetTop + span.offsetHeight,
    left: span.offsetLeft
  })
}

/**
 * The sections that currently have any of their text selected
 */
export const selectedSectionsStore: Readable<SectionStore[]> = derived([earlySectionIdxStore, lateSectionIdxStore, allSectionsStore], ([rangeStart, rangeEnd, sections]) => {
  if (rangeStart === undefined) return [];
  if (rangeEnd === undefined) return [];
  const output: SectionStore[] = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    output.push(sections[i]);
  }
  return output;
})

const playingSectionStoresWrapped: Readable<Record<number, SectionStore>> = derived([earlySectionIdxStore, lateSectionIdxStore, allSectionsStore], ([rangeStart, rangeEnd, sections]) => {
  if (rangeStart === undefined) return [];
  if (rangeEnd === undefined) return [];
  const start = rangeStart - 3;
  const end = rangeStart + 3;
  const output: Record<number, SectionStore> = {};

  for (let i = start; i <= end; i++) {
    const section = sections[i];
    if (section) output[i] = section;
  }
  return output;
})

const playingSectionsRecordStore: Readable<Record<number, SectionState>> = unwrapRecordStore(playingSectionStoresWrapped);
export const playingSectionsStore: Readable<SectionState[]> = derived(playingSectionsRecordStore, record => {
  const sections = Object.values(record);
  sections.sort((a, b) => a.idx - b.idx);
  return sections;
})

/**
 * The secitons that currently have their audio queued to play, but not necessarily actively playing
 */


export function deleteSelection(selection: SectionSelection, selectedSectionsStore: SectionStore[]) {
  // debugger;

  const earlyOffset = selection.early.offset;
  const lateOffset = selection.late.offset;

  selectedSectionsStore.forEach((section, idx) => {
    const sectionIsFirst = idx === 0;
    const sectionIsLast = idx === selectedSectionsStore.length - 1;

    section.deleteText({
      start: sectionIsFirst ? earlyOffset : undefined,
      end: sectionIsLast ? lateOffset : undefined
    });
  })
}

function isSelectionInverted(anchor: CursorPosition, focus: CursorPosition): boolean {
  if (focus.paragraph < anchor.paragraph) return true;
  if (focus.paragraph > anchor.paragraph) return false;

  if (focus.section < anchor.section) return true;
  if (focus.section > anchor.section) return false;

  return focus.offset < anchor.offset;
}