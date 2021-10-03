import { Writable, writable, Readable, derived } from "svelte/store";
import { deriveConditionally, deriveUnwrap, deriveUnwrapWritable } from "../utils/stores";
import { tick } from "svelte";
import { clampGet, clamp, getAssertExists } from "../utils/list";
import { findSectionNode } from "../text/selector";
import { allSectionsStore, MaybeSectionStore, Section, SectionStore } from "../state/sectionStore";
import { patchStore } from "../state/patchStore";

/** Represents the start or end of a selection */
export type CursorPosition = {
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
export function deriveSectionSelectionStore(cursorPositionStore: Readable<undefined | Omit<CursorPosition, "offset">>): MaybeSectionStore {
  // Use the section idx from the cursor position and the above store to derive a store containing the section store for the section containing the cursor
  const sectionStoreWrapped: Readable<SectionStore | undefined> = derived(
    [ allSectionsStore, cursorPositionStore],
    ([allSections,      cursorPosition]
  ) => {
    if (cursorPosition === undefined) return undefined;
    return clampGet(allSections, cursorPosition.section);
  });
  return deriveUnwrap(sectionStoreWrapped);
}

const anchorCursorPositionStore: Readable<CursorPosition | undefined> = derived(selectionStore, selection => selection?.anchor);
const focusCursorPositionStore: Readable<CursorPosition | undefined> = derived(selectionStore, selection => selection?.focus);

export const anchorSectionStore: MaybeSectionStore = deriveSectionSelectionStore(anchorCursorPositionStore);
export const anchorSectionIdxStore = derived(anchorSectionStore, section => section?.idx);

export const focusSectionStore: MaybeSectionStore = deriveSectionSelectionStore(focusCursorPositionStore);
export const focusSectionIdxStore = derived(focusSectionStore, section => section?.idx);

export const earlySectionStore: Readable<Section | undefined> = derived([selectionStore, anchorSectionStore, focusSectionStore], ([selection, anchor, focus]) => selection?.inverted ? focus : anchor);
export const earlySectionIdxStore = derived(earlySectionStore, section => section?.idx);
export const lateSectionStore: Readable<Section | undefined> = derived([selectionStore, anchorSectionStore, focusSectionStore], ([selection, anchor, focus]) => selection?.inverted ? anchor : focus);
export const lateSectionIdxStore = derived(lateSectionStore, section => section?.idx);

/** Store indicating whether the selection is non-empty, ie are one or more characters selected */
export const isTextSelectedStore: Readable<boolean> = derived(selectionStore, selection => {
  if (selection === undefined) return false;
  if (selection.anchor.section !== selection.focus.section) return true;
  if (selection.anchor.offset !== selection.focus.offset) return true;
  return false;
});

/** Store indicating whether the section selection is non-empty, ie are multiple sections selected */
export const areMultipleSectionsSelectedStore: Readable<boolean> = derived(selectionStore, selection => {
  if (selection === undefined) return false;
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
});

document.addEventListener("selectionchange", updateSelection);

patchStore.subscribe(async () => {
  await tick();
  updateSelection();
});

export function updateSelection() {
  const selection = window.getSelection();
  if (selection === null) return;

  const anchor = normaliseCursor(selection.anchorNode, selection.anchorOffset, "anchor");
  const focus = normaliseCursor(selection.focusNode, selection.focusOffset, "focus");
  if (anchor === undefined) return;
  if (focus === undefined) return;

  const inverted = isSelectionInverted(anchor, focus);

  const early = inverted ? focus : anchor;
  const late = inverted ? anchor : focus;

  selectionStoreInternal.set({ anchor, focus, early, late, inverted });
}

function normaliseCursor(node: Node | null, offset: number, side: "anchor" | "focus"): CursorPosition | undefined {
  let span: HTMLSpanElement;
  let spanOffset: number;

  let requiresSelectionUpdate: boolean = false;

  if (node?.parentElement?.classList?.contains("section")) {
    // Inside the span
    span = node.parentElement;
    const clampedOffset = clamp(offset, 1, (span.textContent?.length ?? 1) - 1);
    spanOffset = clampedOffset - 1;
    if (clampedOffset !== offset) requiresSelectionUpdate = true;
  } else if (node?.parentElement?.classList?.contains("paragraph")) {
    // Between spans
    const nextSpan = (node as Text).nextElementSibling as HTMLSpanElement | null;
    if (nextSpan === null) {
      // Between paragraphs, select first span of next paragraph
      span = node.parentElement.nextElementSibling?.firstElementChild as HTMLSpanElement;
    } else {
      // Between spans within paragraph
      span = nextSpan;
    }
    spanOffset = 0;
    requiresSelectionUpdate = true;
  } else {
    // console.log("Unrecognised selection position", {node, offset, side});
    return;
  }

  const paragraph = span.parentElement;
  if (paragraph === null) return undefined;

  if (requiresSelectionUpdate) {
    const node = span.firstChild;
    const selection = window.getSelection();
    if (node !== null && selection !== null) {
      if (side === "anchor") selection.setBaseAndExtent(node, spanOffset + 1, selection.focusNode ?? node , selection.focusOffset);
      else selection.setBaseAndExtent(selection.anchorNode ?? node, selection.anchorOffset, node, spanOffset + 1);
    }
  }

  const sectionIdx = span.getAttribute("data-sectionIdx");
  if(sectionIdx === null) throw new Error("Null sectionIdx");

  return {
    section: parseInt(sectionIdx),
    offset: spanOffset
  }
}


/** The sections that currently have any of their text selected */
export const selectedSectionsStore: Readable<SectionStore[]> = derived([earlySectionIdxStore, lateSectionIdxStore, allSectionsStore], ([rangeStart, rangeEnd, sections]) => {
  // TODO this is probably a source of performance issues
  if (rangeStart === undefined) return [];
  if (rangeEnd === undefined) return [];
  const output: SectionStore[] = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    const section = getAssertExists(sections, i);
    output.push(section);
  }
  return output;
})

/** Is the selection inverted, ie right-to-left, ie `anchor === late` */
function isSelectionInverted(anchor: CursorPosition, focus: CursorPosition): boolean {
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
