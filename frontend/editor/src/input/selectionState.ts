import { Writable, writable, Readable, derived } from "svelte/store";
import { deriveConditionally, deriveWithPrevious } from "../utils/stores";
import { clamp, forIn, getAssertExistsRecord } from "../utils/list";
import { sectionStores } from "../state/section/sectionStore"
import { paragraphLocationsStore } from "../state/section/paragraphLocationsStore";

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
    getAssertExistsRecord(sectionStores, idx).selectedStore.set(selected);
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
    console.debug("Unrecognised selection position", {node, offset, side});
    // debugger;
    return;
  }

  const paragraph = span.parentElement;
  if (paragraph === null) {
    console.log("Unrecognised paragraph position");
    debugger;
    return;
  };

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


/** Is the selection inverted, ie right-to-left, ie `anchor === late` */
function isSelectionInverted(anchor: CursorPosition, focus: CursorPosition): boolean {
  if (focus.section < anchor.section) return true;
  if (focus.section > anchor.section) return false;

  return focus.offset < anchor.offset;
}
