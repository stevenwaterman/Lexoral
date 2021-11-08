import { Writable, writable, Readable, derived } from "svelte/store";
import { deriveConditionally, deriveWithPrevious } from "../utils/stores";
import { forIn } from "../utils/list";
import { getSectionStore } from "../state/section/sectionStoreRegistry";

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

const anchorCursorPositionStore: Readable<CursorPosition | undefined> = derived(selectionStore, selection => selection?.anchor);
const focusCursorPositionStore: Readable<CursorPosition | undefined> = derived(selectionStore, selection => selection?.focus);

export const anchorSectionIdxStore = derived(anchorCursorPositionStore, cursor => cursor?.section);
export const focusSectionIdxStore = derived(focusCursorPositionStore, cursor => cursor?.section);

export const earlySectionIdxStore = derived([selectionStore, anchorSectionIdxStore, focusSectionIdxStore], ([selection, anchor, focus]) => selection?.inverted ? focus : anchor);
export const lateSectionIdxStore = derived([selectionStore, anchorSectionIdxStore, focusSectionIdxStore], ([selection, anchor, focus]) => selection?.inverted ? anchor : focus);


const selectionRangeStore = derived([earlySectionIdxStore, lateSectionIdxStore], ([early, late]) => ({early, late}));
deriveWithPrevious(selectionRangeStore).subscribe(({ last, current }) => {
  const updates: Record<number, boolean> = {};

  const lastEarly = last?.early;
  const lastLate = last?.late;
  if (lastEarly !== undefined && lastLate !== undefined) {
    for (let i = lastEarly; i <= lastLate; i++) {
      updates[i] = false;
    }
  }
  
  const currentEarly = current.early;
  const currentLate = current.late;
  if (currentEarly !== undefined && currentLate !== undefined) {
    for (let i = currentEarly; i <= currentLate; i++) {
      updates[i] = true;
    }
  }

  forIn(updates, (idx, selected) => {
    getSectionStore(idx).selectedStore.set(selected);
  })
})



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

document.addEventListener("selectionchange", updateSelection);

export function updateSelection() {
  const selection = window.getSelection();
  if (selection === null) return;

  const anchor = getCursorPosition(selection.anchorNode, selection.anchorOffset);
  const focus = getCursorPosition(selection.focusNode, selection.focusOffset);
  if (anchor === null) return;
  if (focus === null) return;

  const inverted = isSelectionInverted(anchor, focus);

  const early = inverted ? focus : anchor;
  const late = inverted ? anchor : focus;

  selectionStoreInternal.set({ anchor, focus, early, late, inverted });
}

function getCursorPosition(node: Node | null, offset: number): CursorPosition | null {
  if (node === null) return null;

  const parent = node.parentElement;
  if (parent === null) return null;
  if (!parent.classList.contains("section")) return null;

  const section = parent as HTMLSpanElement;
  const sectionIdx = section.getAttribute("data-sectionIdx");
  if(sectionIdx === null) return null;

  return {
    section: parseInt(sectionIdx),
    offset
  }
}

/** Is the selection inverted, ie right-to-left, ie `anchor === late` */
function isSelectionInverted(anchor: CursorPosition, focus: CursorPosition): boolean {
  if (focus.section < anchor.section) return true;
  if (focus.section > anchor.section) return false;

  return focus.offset < anchor.offset;
}
