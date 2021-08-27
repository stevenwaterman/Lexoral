import { updateSelection } from "./selectionState";

/** 
 * Select the start of the section after the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectNext(component: HTMLSpanElement | undefined) {
  const node: ChildNode | undefined = component?.nextElementSibling?.firstChild ?? component?.parentElement?.nextElementSibling?.firstElementChild?.firstChild ?? undefined;
  if (node === undefined) return;
  await selectStart(node);
}

/** 
 * Select the end of the section before the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectPrev(component: HTMLSpanElement | undefined) {
  const node: ChildNode | undefined = component?.previousElementSibling?.firstChild ?? component?.parentElement?.previousElementSibling?.lastElementChild?.firstChild ?? undefined;
  if (node === undefined) return;
  await selectEnd(node);
}

/** 
 * Select the start of the first section in the paragraph that contains the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectParagraphStart(component: HTMLSpanElement | undefined) {
  const node: ChildNode | undefined = component?.parentElement?.firstElementChild?.firstChild ?? undefined;
  if (node === undefined) return;
  await selectStart(node);
}

/** 
 * Select the end of the last section in the paragraph that contains the provided component.
 * The provided component should be a section's `Span` element
 */
export async function selectParagraphEnd(component: HTMLSpanElement | undefined) {
  const node: ChildNode | undefined = component?.parentElement?.lastElementChild?.firstChild ?? undefined;
  if (node === undefined) return;
  await selectEnd(node);
}

/** 
 * Select the start of the provided component (after the initial space).
 * It should either be a section's `Span` element or its contained `TextNode`
 */
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

/** 
 * Select a specific character position in the provided component.
 * The offset is 0-indexed from the start of the actual text, ignoring the starting space, or 1-indexed if you include the starting space.
 * It should either be a section's `Span` element or its contained `TextNode`
 */
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

/** 
 * Select the end of the provided component.
 * It should either be a section's `Span` element or its contained `TextNode`
 */
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