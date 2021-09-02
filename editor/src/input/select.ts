import { updateSelection } from "./selectionState";

export function findSectionNode(idx: number | undefined): HTMLSpanElement | undefined {
  if (idx === undefined) return undefined;
  const queryResult = document.querySelector(`[data-sectionIdx="${idx}"]`) as HTMLSpanElement | null;
  return queryResult ?? undefined;
}

/** 
 * Select the start of the section after the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectSectionStart(idx: number | undefined) {
  const component = findSectionNode(idx);
  await selectStart(component);
}

/** 
 * Select the end of the section before the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectSectionPosition(idx: number | undefined, offset: number) {
  const component = findSectionNode(idx);
  await selectPosition(component, offset);
}

/** 
 * Select the end of the section before the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectSectionEnd(idx: number | undefined) {
  const component = findSectionNode(idx);
  await selectEnd(component);
}

export async function selectNextSection(idx: number | undefined) {
  if (idx === undefined) return undefined;
  return selectSectionStart(idx + 1);
}

export async function selectPrevSection(idx: number | undefined) {
  if (idx === undefined) return undefined;
  return selectSectionEnd(idx - 1);
}

/** 
 * Select the start of the first section in the paragraph that contains the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectParagraphStart(idx: number | undefined) {
  const component = findSectionNode(idx);
  const node: ChildNode | undefined = component?.parentElement?.firstElementChild?.firstChild ?? undefined;
  await selectStart(node);
}

/** 
 * Select the end of the last section in the paragraph that contains the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectParagraphEnd(idx: number | undefined) {
  const component = findSectionNode(idx);
  const node: ChildNode | undefined = component?.parentElement?.lastElementChild?.firstChild ?? undefined;
  await selectEnd(node);
}

/** 
 * Select the start of the provided component (after the initial space).
 * It should either be a section's `Span` element or its contained `TextNode`
 */
export async function selectStart(node: Node | undefined) {
  if (node === undefined) return;
  const textNode = node.hasChildNodes() ? node.firstChild : node;
  if (textNode === null) return;

  const range = document.createRange();
  range.setStart(textNode, 0);
  range.setEnd(textNode, 0);

  const sel = window.getSelection();
  if (sel === null) return;
  sel.removeAllRanges();
  sel.addRange(range);
  await updateSelection();
}

/** 
 * Select a specific character position in the provided component.
 * The offset is 0-indexed from the start of the actual text, ignoring the starting space, or 1-indexed if you include the starting space.
 * It should either be a section's `Span` element or its contained `TextNode`
 */
export async function selectPosition(node: Node | undefined, offset: number) {
  if (node === undefined) return;
  const textNode = node.hasChildNodes() ? node.firstChild : node;
  if (textNode === null) return;

  const range = document.createRange();
  range.setStart(textNode, offset);
  range.setEnd(textNode, offset);

  const sel = window.getSelection();
  if (sel === null) return;
  sel.removeAllRanges();
  sel.addRange(range);
  await updateSelection();
}

/** 
 * Select the end of the provided component.
 * It should either be a section's `Span` element or its contained `TextNode`
 */
export async function selectEnd(node: Node | undefined) {
  if (node === undefined) return;
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