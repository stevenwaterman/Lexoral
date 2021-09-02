import { Writable, writable, Readable, derived } from "svelte/store";
import { ParagraphStore, documentStore, Section, SectionStore, allSectionsStore, MaybeParagraphStore, MaybeSectionStore } from "../text/textState";
import { deriveConditionally, deriveUnwrapWritable, makeWritable } from "../utils/stores";
import { tick } from "svelte";
import { clampGet } from "../utils/list";
import { SectionMutator } from "../text/storeMutators";
import { findSectionNode } from "../text/selector";

/** Represents the start or end of a selection */
export type CursorPosition = {
  paragraph: number;
  section: number;
  offset: number;
}

/**
 * Represents a full selection
 * 
 * `anchor` is where the user started selecting from
 * `focus` is where the user ended the selection
 * `early` is the side of the selection that is earliest in the text
 * `late` is the side of the selection that is latest in the text
 * `inverted` is true if the user selected right-to-left, ie `anchor === late`
 */
export type SectionSelection = {
  anchor: CursorPosition;
  focus: CursorPosition;
  early: CursorPosition;
  late: CursorPosition;
  inverted: boolean;
};

/** Store containing the current selection */
const selectionStoreInternal: Writable<SectionSelection | undefined> = writable(undefined);
export const selectionStore: Readable<SectionSelection | undefined> = deriveConditionally(selectionStoreInternal, undefined);

/**
 * Derive a store containing the selected section based from a store containing a cursor position
*/
export function deriveSectionSelectionStore(cursorPositionStore: Readable<undefined | Omit<CursorPosition, "offset">>): {
  paragraph: MaybeParagraphStore;
  section: MaybeSectionStore;
} {
  // Use the paragraph idx from the cursor position to derive a store containing the paragraph store for the paragraph containing the cursor
  const paragraphStoreWrapped: Readable<ParagraphStore | undefined> = derived([documentStore, cursorPositionStore], ([document, cursorPosition]) => 
    cursorPosition === undefined ? undefined : clampGet(document, cursorPosition.paragraph));
  const paragraphStore: MaybeParagraphStore = deriveUnwrapWritable(paragraphStoreWrapped);
  const paragraphStoreSuppressed: MaybeParagraphStore = makeWritable(paragraphStore, deriveConditionally(paragraphStore, undefined));

  // Use the section idx from the cursor position and the above store to derive a store containing the section store for the section containing the cursor
  const sectionStoreWrapped: Readable<SectionStore | undefined> = derived(
    [ paragraphStoreSuppressed, cursorPositionStore],
    ([paragraph,                cursorPosition]
  ) => {
    if (paragraph === undefined) return undefined;
    if (cursorPosition === undefined) return undefined;
    return clampGet(paragraph, cursorPosition.section);
  });
  const sectionStore: MaybeSectionStore = deriveUnwrapWritable(sectionStoreWrapped);
  const sectionStoreSuppressed: MaybeSectionStore = makeWritable(sectionStore, deriveConditionally(sectionStore, undefined));

  return {
    section: sectionStoreSuppressed,
    paragraph: paragraphStoreSuppressed
  }
}

const anchorCursorPositionStore: Readable<CursorPosition | undefined> = derived(selectionStore, selection => selection?.anchor);
const focusCursorPositionStore: Readable<CursorPosition | undefined> = derived(selectionStore, selection => selection?.focus);

const anchorStores = deriveSectionSelectionStore(anchorCursorPositionStore);
export const anchorSectionStore: MaybeSectionStore = anchorStores.section;
export const anchorSectionIdxStore = derived(anchorSectionStore, section => section?.idx);
export const anchorParagraphStore: MaybeParagraphStore = anchorStores.paragraph;

const focusStores = deriveSectionSelectionStore(focusCursorPositionStore);
export const focusSectionStore: MaybeSectionStore = focusStores.section;
export const focusSectionIdxStore = derived(focusSectionStore, section => section?.idx);
export const focusParagraphStore: MaybeParagraphStore = focusStores.paragraph;

export const earlySectionStore: Readable<Section | undefined> = derived([selectionStore, anchorSectionStore, focusSectionStore], ([selection, anchor, focus]) => selection?.inverted ? focus : anchor);
export const earlySectionIdxStore = derived(earlySectionStore, section => section?.idx);
export const lateSectionStore: Readable<Section | undefined> = derived([selectionStore, anchorSectionStore, focusSectionStore], ([selection, anchor, focus]) => selection?.inverted ? anchor : focus);
export const lateSectionIdxStore = derived(lateSectionStore, section => section?.idx);

/** Store indicating whether the selection is non-empty, ie are one or more characters selected */
export const isTextSelectedStore: Readable<boolean> = derived(selectionStore, selection => {
  if (selection === undefined) return false;
  if (selection.anchor.paragraph !== selection.focus.paragraph) return true;
  if (selection.anchor.section !== selection.focus.section) return true;
  if (selection.anchor.offset !== selection.focus.offset) return true;
  return false;
});

/** Store indicating whether the section selection is non-empty, ie are multiple sections selected */
export const areMultipleSectionsSelectedStore: Readable<boolean> = derived(selectionStore, selection => {
  if (selection === undefined) return false;
  if (selection.anchor.paragraph !== selection.focus.paragraph) return true;
  if (selection.anchor.section !== selection.focus.section) return true;
  return false;
});

/** Store indicating whether the caret is at the start / end of the current section */
export const caretPositionStore: Readable<{start: boolean; end: boolean}> = derived([focusSectionStore, selectionStore], ([section, selection]) => {
  if (section === undefined || selection === undefined) return { start: false, end: false };
  const start = selection.focus.offset === 0;
  const textLength = findSectionNode(section.idx)?.textContent?.length ?? 0;
  const end = selection.focus.offset >= textLength - 2;
  return { start, end };
})

/**
 * Update the selection state based on the current text selection in browser.
 * Runs with the next microtasks, after any updates have occurred.
 * Resolves once the updates are complete.
 */
export async function updateSelection(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(async () => {
      await updateSelectionInternal();
      resolve();
    });
  })
}

async function updateSelectionInternal() {
  const selection = window.getSelection();
  if (selection === null) return;

  const normalisedAnchor = normaliseCursor(selection.anchorNode, selection.anchorOffset);
  const normalisedFocus = normaliseCursor(selection.focusNode, selection.focusOffset);
  if (normalisedAnchor === undefined) return;
  if (normalisedFocus === undefined) return;

  const anchor = normalisedAnchor.position;
  const focus = normalisedFocus.position;
  
  const inverted = isSelectionInverted(anchor, focus);

  const early = inverted ? focus : anchor;
  const late = inverted ? anchor : focus;

  selectionStoreInternal.set({ anchor, focus, early, late, inverted });
  await tick();

  const newAnchorNode = normalisedAnchor.newNode ?? selection.anchorNode;
  const newFocusNode = normalisedFocus.newNode ?? selection.focusNode;
  if (newAnchorNode !== null && newFocusNode !== null) {
    if (normalisedAnchor.newNode !== null || normalisedFocus.newNode !== null) {
      const range = document.createRange();
      range.setStart(newAnchorNode, normalisedAnchor.position.offset);
      range.setEnd(newFocusNode, normalisedFocus.position.offset);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
}

function normaliseCursor(node: Node | null, offset: number): { position: CursorPosition, newNode: Node | null } | undefined {
  let span: HTMLSpanElement;
  let spanOffset: number;

  if (node?.parentElement?.classList?.contains("section")) {
    // Inside the span
    span = node.parentElement;
    spanOffset = offset - 1;
  } else if (node?.parentElement?.classList?.contains("paragraph")) {
    // Between spans
    span = (node as Text).nextElementSibling as HTMLSpanElement;
    spanOffset = 0;
  } else {
    console.log("Unrecognised element selected", node);
    return undefined;
  }

  const newNode = span.firstChild;

  const paragraph = span.parentElement;
  if (paragraph === null) return undefined;

  return {
    newNode: node === newNode ? null : newNode,
    position: {
      paragraph: siblingIdx(paragraph),
      section: siblingIdx(span),
      offset: spanOffset
    }
  }
}


/** The sections that currently have any of their text selected */
export const selectedSectionsStore: Readable<SectionStore[]> = derived([earlySectionIdxStore, lateSectionIdxStore, allSectionsStore], ([rangeStart, rangeEnd, sections]) => {
  // TODO this is probably a source of performance issues
  if (rangeStart === undefined) return [];
  if (rangeEnd === undefined) return [];
  const output: SectionStore[] = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    output.push(sections[i]);
  }
  return output;
})

/** Delete the text inside of the provided selection */
export function deleteSelection(selection: SectionSelection, selectedSectionsStore: SectionStore[]) {
  const earlyOffset = selection.early.offset;
  const lateOffset = selection.late.offset;

  selectedSectionsStore.forEach((section, idx) => {
    const sectionIsFirst = idx === 0;
    const sectionIsLast = idx === selectedSectionsStore.length - 1;

    new SectionMutator(section).deleteText({
      start: sectionIsFirst ? earlyOffset : undefined,
      end: sectionIsLast ? lateOffset : undefined
    });
  })
}

/** Is the selection inverted, ie right-to-left, ie `anchor === late` */
function isSelectionInverted(anchor: CursorPosition, focus: CursorPosition): boolean {
  if (focus.paragraph < anchor.paragraph) return true;
  if (focus.paragraph > anchor.paragraph) return false;

  if (focus.section < anchor.section) return true;
  if (focus.section > anchor.section) return false;

  return focus.offset < anchor.offset;
}

/** What number sibling is the provided node? */
function siblingIdx(node: Element): number {
  let i = 0;
  let sib = node.previousElementSibling;
  while (sib !== null) {
    sib = sib.previousElementSibling;
    i++;
  }
  return i;
}
