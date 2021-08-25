import { Writable, writable, Readable, derived } from "svelte/store";
import { ParagraphStore, documentStore, ParagraphState, SectionState, SectionStore, allSectionsStore } from "./sectionStores";
import { clampGet, unwrapStore, siblingIdx, maybeDerived } from "./utils";
import { tick } from "svelte";

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
  const paragraphStoreWrapped: Readable<ParagraphStore | undefined> = maybeDerived([documentStore, inputStore], undefined, ([document, selection]) => {
    return selection === undefined ? undefined : clampGet(document, selection.paragraph);
  });
  const paragraphStore: Readable<ParagraphState | undefined> = unwrapStore(paragraphStoreWrapped);
  const sectionStoreWrapped: Readable<SectionStore | undefined> = maybeDerived([paragraphStore, inputStore], undefined, ([paragraph, selection]) => {
    if (paragraph === undefined) return undefined;
    if (selection === undefined) return undefined;
    return clampGet(paragraph, selection.section);
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
derived([focusSectionStore], state => state).subscribe(([section]) => section?.spanComponent?.focus());

export const earlySectionStore: Readable<SectionState | undefined> = derived([selectionStore, anchorSectionStore, focusSectionStore], ([selection, anchor, focus]) => selection?.inverted ? focus : anchor);
export const lateSectionStore: Readable<SectionState | undefined> = derived([selectionStore, anchorSectionStore, focusSectionStore], ([selection, anchor, focus]) => selection?.inverted ? anchor : focus);

export const anchorSectionIdxStore = derived(anchorSectionStore, section => section?.idx);
export const focusSectionIdxStore = derived(focusSectionStore, section => section?.idx);
export const earlySectionIdxStore = derived(earlySectionStore, section => section?.idx);
export const lateSectionIdxStore = derived(lateSectionStore, section => section?.idx);

/** Is any text selected */
export const isSelectingStore: Readable<boolean> = derived(selectionStore, selection => {
  if (selection === undefined) return false;
  if (selection.anchor.paragraph !== selection.focus.paragraph) return true;
  if (selection.anchor.section !== selection.focus.section) return true;
  if (selection.anchor.offset !== selection.focus.offset) return true;
  return false;
});


export const caretPositionStore: Readable<{start: boolean; end: boolean}> = derived([focusSectionStore, selectionStore], ([section, selection]) => {
  if (section === undefined || selection === undefined) return { start: false, end: false };
  const start = selection.focus.offset === 0;
  const textLength = section?.spanComponent?.textContent?.length ?? 0;
  const end = selection.focus.offset > textLength - 2;
  return { start, end };
})

export async function updateSelection(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(async () => {
      await updateSelectionInternal();
      resolve();
    });
  })
}

let lastAnchorNode: Node | null = null;
let lastFocusNode: Node | null = null;
let lastAnchorOffset: number | undefined = undefined;
let lastFocusOffset: number | undefined = undefined;

async function updateSelectionInternal() {
  const selection = window.getSelection();
  if (selection === null) return;
  const { anchorNode, anchorOffset, focusNode, focusOffset } = selection;

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

  const anchorSpan = anchorNode?.parentElement ?? undefined;
  const anchorParagraph = anchorSpan?.parentElement ?? undefined;
  if (anchorSpan === undefined || anchorParagraph === undefined) return;

  const focusSpan = focusNode?.parentElement ?? undefined;
  const focusParagraph = focusSpan?.parentElement ?? undefined;
  if (focusSpan === undefined || focusParagraph === undefined) return;

  const anchorSectionIdx = siblingIdx(anchorSpan);
  const anchorParagraphIdx = siblingIdx(anchorParagraph);

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
  await tick();
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

export const selectedSectionsIdxStore: Readable<undefined | { start: number; end: number }> = derived([earlySectionIdxStore, lateSectionIdxStore], ([early, late]) => {
  if (early === undefined) return undefined;
  if (late === undefined) return undefined;
  return { start: early, end: late }
})

export function deleteSelection(selection: SectionSelection, selectedSectionsStore: SectionStore[]) {
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

export async function selectNext(component: HTMLSpanElement) {
  const node: ChildNode | undefined = component.nextElementSibling?.firstChild ?? component?.parentElement?.nextElementSibling?.firstElementChild?.firstChild ?? undefined;
  if (node === undefined) return;
  await selectStart(node);
}

export async function selectPrev(component: HTMLSpanElement) {
  const node: ChildNode | undefined = component.previousElementSibling?.firstChild ?? component?.parentElement?.previousElementSibling?.lastElementChild?.firstChild ?? undefined;
  if (node === undefined) return;
  await selectEnd(node);
}

export async function selectParagraphStart(component: HTMLSpanElement) {
  const node: ChildNode | undefined = component?.parentElement?.firstElementChild?.firstChild ?? undefined;
  if (node === undefined) return;
  await selectStart(node);
}

export async function selectParagraphEnd(component: HTMLSpanElement) {
  const node: ChildNode | undefined = component?.parentElement?.lastElementChild?.firstChild ?? undefined;
  if (node === undefined) return;
  await selectEnd(node);
}

export async function selectStart(node: Node) {
  if (node) {
    const textNode = node.hasChildNodes() ? node.firstChild : node;
    if (textNode === null) return;

    const range = document.createRange();
    range.setStart(textNode, 1);
    range.setEnd(textNode, 1);

    const sel = window.getSelection();
    if (sel === null) return;
    sel.removeAllRanges();
    sel.addRange(range);
    await updateSelection();
  }
}

export async function selectPosition(node: Node, offset: number) {
  if (node) {
    const textNode = node.hasChildNodes() ? node.firstChild : node;
    if (textNode === null) return;

    const range = document.createRange();
    range.setStart(textNode, offset + 1);
    range.setEnd(textNode, offset + 1);

    const sel = window.getSelection();
    if (sel === null) return;
    sel.removeAllRanges();
    sel.addRange(range);
    await updateSelection();
  }
}

export async function selectEnd(node: Node) {
  if (node) {
    const textNode = node.hasChildNodes() ? node.firstChild : node;
    if (textNode === null) return;

    const textLength = textNode.textContent?.length;
    if (textLength === undefined) return;

    const range = document.createRange();
    range.setStart(textNode, textLength);
    range.setEnd(textNode, textLength);

    const sel = window.getSelection();
    if (sel === null) return;
    sel.removeAllRanges();
    sel.addRange(range);
    await updateSelection();
  }
}
