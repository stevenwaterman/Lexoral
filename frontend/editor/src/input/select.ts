import { clamp } from "../utils/list";
import type { SectionSelection } from "./selectionState";

export async function selectExactly(selection: SectionSelection | undefined) {
  if (!selection) return;

  const anchor = findSectionNode(selection.anchor.section)?.firstChild;
  const focus = findSectionNode(selection.focus.section)?.firstChild;
  if (!anchor || !focus) return;

  const windowSelection = window.getSelection();
  if (!windowSelection) return;

  windowSelection.setBaseAndExtent(anchor, selection.anchor.offset, focus, selection.focus.offset);
  // await updateSelection();
}

/** 
 * Select the start of the section after the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectSectionStart(idx: number | undefined, extend?: boolean) {
  const component = findSectionNode(idx);
  await selectStart(component, extend);
}

/** 
 * Select the end of the section before the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectSectionPosition(idx: number | undefined, offset: number, extend?: boolean) {
  const component = findSectionNode(idx);
  await selectPosition(component, offset, extend);
}

/** 
 * Select the end of the section before the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectSectionEnd(idx: number | undefined, extend?: boolean) {
  const component = findSectionNode(idx);
  await selectEnd(component, extend);
}

export async function selectNextSection(idx: number | undefined, extend?: boolean) {
  if (idx === undefined) return undefined;
  return selectSectionStart(idx + 1, extend);
}

export async function selectPrevSection(idx: number | undefined, extend?: boolean) {
  if (idx === undefined) return undefined;
  return selectSectionEnd(idx - 1, extend);
}

/** 
 * Select the start of the first section in the paragraph that contains the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectParagraphStart(idx: number | undefined, extend?: boolean) {
  const component = findSectionNode(idx);
  const node: ChildNode | undefined = component?.parentElement?.firstElementChild?.firstChild ?? undefined;
  await selectStart(node, extend);
}

/** 
 * Select the end of the last section in the paragraph that contains the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectParagraphEnd(idx: number | undefined, extend?: boolean) {
  const component = findSectionNode(idx);
  const node: ChildNode | undefined = component?.parentElement?.lastElementChild?.firstChild ?? undefined;
  await selectEnd(node, extend);
}

/** 
 * Select the start of the provided component (after the initial space).
 * It should either be a section's `Span` element or its contained `TextNode`
 */
export async function selectStart(node: Node | undefined, extend?: boolean) {
  return selectPosition(node, 0, extend);
}

/** 
 * Select a specific character position in the provided component.
 * The offset is 0-indexed from the start of the actual text, ignoring the starting space, or 1-indexed if you include the starting space.
 * It should either be a section's `Span` element or its contained `TextNode`
 */
export async function selectPosition(node: Node | undefined, offset: number, extend?: boolean) {
  if (node === undefined) return;
  const textNode = node.hasChildNodes() ? node.firstChild : node;
  if (textNode === null) return;

  const clampedOffset = clamp(offset, 0, textNode.textContent?.length ?? 0);

  if (extend) {
    window.getSelection()?.extend(textNode, clampedOffset);
  } else {
    window.getSelection()?.setBaseAndExtent(textNode, clampedOffset, textNode, clampedOffset);
  }
}

/** 
 * Select the end of the provided component.
 * It should either be a section's `Span` element or its contained `TextNode`
 */
export async function selectEnd(node: Node | undefined, extend?: boolean) {
  const textLength = node?.textContent?.length ?? 0;
  return selectPosition(node, textLength, extend);
}



let savedSelection: undefined | {
  anchorNode: Node;
  anchorOffset: number;
  focusNode: Node;
  focusOffset: number;
} = undefined;

export function saveSelection() {
  const selection = window.getSelection();
  if (!selection) return;

  const {anchorNode, anchorOffset, focusNode, focusOffset} = selection;
  if (anchorNode === null) return;
  if (focusNode === null) return;
  savedSelection = {anchorNode, anchorOffset, focusNode, focusOffset};
}

export function restoreSelection() {
  if (!savedSelection) return;
  window.getSelection()?.setBaseAndExtent(
    savedSelection.anchorNode, 
    savedSelection.anchorOffset,
    savedSelection.focusNode,
    savedSelection.focusOffset
  );
  savedSelection = undefined;
}

export function findSectionNode(idx: number | undefined): HTMLSpanElement | undefined {
  if (idx === undefined) return undefined;
  const queryResult = document.querySelector(`[data-sectionIdx="${idx}"]`) as HTMLSpanElement | null;
  return queryResult ?? undefined;
}

export function getFocusSpan(selection: Selection | null): HTMLSpanElement | null {
  const focusNode = selection?.focusNode;
  const focusSpan = focusNode?.nodeType === Node.TEXT_NODE ? focusNode.parentElement : focusNode;
  if (focusSpan) {
    return focusSpan as HTMLSpanElement;
  } else {
    return null;
  }
}

export function getAnchorSpan(selection: Selection | null): HTMLSpanElement | null {
  const anchorNode = selection?.anchorNode;
  const anchorSpan = anchorNode?.nodeType === Node.TEXT_NODE ? anchorNode.parentElement : anchorNode;
  if (anchorSpan) {
    return anchorSpan as HTMLSpanElement;
  } else {
    return null;
  }
}

export function getSpanIdx(span: HTMLSpanElement | null): number | null {
  if (span === null) return null;
  const idxStr = span.getAttribute("data-sectionIdx");
  if (idxStr === null) return null;
  const idx = parseInt(idxStr);
  return idx;
}
