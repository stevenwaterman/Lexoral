/*

left arrow = anchor + focus 1 character left, jump to end of previous section if currently at the start of this section
shift + left arrow = move focus 1 character left, jump to end of previous section if currently at the start of this section
ctrl + left arrow = anchor + focus to start of focus section, jump to start of previous section if currently at the start of this section
ctrl + shift + left arrow = focus to start of section, jump to start of previous section if currently at the start of this section

*/

import { focusSectionStore, updateSelection } from "./selectionState";
import type { Section } from "../text/textState";
import { findSectionNode } from "../text/selector";

let focusSection: Section | undefined = undefined;
focusSectionStore.subscribe(state => focusSection = state);

export async function controlsKeyDown(event: KeyboardEvent) {
  if(event.altKey) return;

  if (event.key === "ArrowLeft") {
    if (event.ctrlKey) return mutateSelection(event, ctrlLeftArrow);
    else return mutateSelection(event, leftArrow);
  }

  if (event.key === "ArrowRight") {
    if (event.ctrlKey) return mutateSelection(event, ctrlRightArrow);
    else return mutateSelection(event, rightArrow);
  }

  if (event.key === "ArrowUp") return defaultBehaviour();
  if (event.key === "ArrowDown") return defaultBehaviour();

  if (event.key === "Home") {
    if (event.ctrlKey) return mutateSelection(event, ctrlHome);
    else return mutateSelection(event, home);
  }

  if (event.key === "End") {
    if (event.ctrlKey) return mutateSelection(event, ctrlEnd);
    else return mutateSelection(event, end);
  }
}

async function defaultBehaviour() {
  await updateSelection();
}

async function mutateSelection(event: KeyboardEvent, func: typeof leftArrow) {
  const focus = guardedCall(func);
  const anchor = event.shiftKey ? getAnchor() : focus;
  if (focus === undefined) return;
  if (anchor === undefined) return;

  const range = window.getSelection()?.getRangeAt(0);
  if (range === undefined) return;
  range.setStart(anchor.node, anchor.offset);
  range.setEnd(focus.node, focus.offset);
  event.preventDefault();
  await updateSelection();
}

function getAnchor(): { node: Node; offset: number } | undefined {
  const selection = window.getSelection();
  if (selection === null) return;

  const node = selection.anchorNode;
  if (node === null) return;

  return { node, offset: selection.anchorOffset };
}

function guardedCall(func: typeof leftArrow) {
  if (focusSection === undefined) return;

  const selection = window.getSelection();
  if (selection === null) return;

  const { focusNode, focusOffset } = selection;
  if (focusNode === null) return;
  return func(focusNode, focusOffset, focusSection);
}

function leftArrow(focusNode: Node, focusOffset: number, focusSection: Section): { node: Node; offset: number } | undefined {
  if (focusOffset <= 1) {
    const node = findSectionNode(focusSection.idx - 1)?.firstChild;
    if (!node) return;

    const offset = (node?.textContent?.length ?? 1) - 1;
    return { node, offset };

  }
  else return { node: focusNode, offset: focusOffset - 1 };
}

function rightArrow(focusNode: Node, focusOffset: number, focusSection: Section): { node: Node; offset: number } | undefined {
  const nodeLength = focusNode?.textContent?.length ?? 0;
  if (focusOffset >= nodeLength - 1) {
    const node = findSectionNode(focusSection.idx + 1)?.firstChild;
    if (!node) return;
    return { node, offset: 1 };
  }
  else return { node: focusNode, offset: focusOffset + 1 };
}

function ctrlLeftArrow(focusNode: Node, focusOffset: number, focusSection: Section): { node: Node; offset: number } | undefined {
  if (focusOffset <= 1) {
    const node = findSectionNode(focusSection.idx - 1)?.firstChild;
    if (!node) return;
    return { node, offset: 1 };
  }
  else return { node: focusNode, offset: 1 };
}

function ctrlRightArrow(focusNode: Node, focusOffset: number, focusSection: Section): { node: Node; offset: number } | undefined {
  const nodeLength = focusNode?.textContent?.length ?? 0;
  if (focusOffset >= nodeLength - 1) {
    const node = findSectionNode(focusSection.idx + 1)?.firstChild;
    if (!node) return;

    const offset = (node?.textContent?.length ?? 1) - 1;
    return { node, offset };
  }
  else return { node: focusNode, offset: (focusNode?.textContent?.length ?? 1) - 1 };
}

function home(focusNode: Node, focusOffset: number, focusSection: Section): { node: Node; offset: number } | undefined {
  const focusSpan = focusNode?.parentElement;
  const focusParagraph = focusSpan?.parentElement;
  const focusFirstSpan = focusParagraph?.firstElementChild;
  const node = focusFirstSpan?.firstChild;
  if (!node) return;
  return { node, offset: 1 };
}

function end(focusNode: Node, focusOffset: number, focusSection: Section): { node: Node; offset: number } | undefined {
  const focusSpan = focusNode?.parentElement;
  const focusParagraph = focusSpan?.parentElement;
  const focusLastSpan = focusParagraph?.lastElementChild;
  const node = focusLastSpan?.firstChild;
  if (!node) return;

  const offset = (node?.textContent?.length ?? 1) - 1;
  return { node, offset };
}

function ctrlHome(focusNode: Node, focusOffset: number, focusSection: Section): { node: Node; offset: number } | undefined {
  const focusSpan = focusNode?.parentElement;
  const focusParagraph = focusSpan?.parentElement;
  const focusDocument = focusParagraph?.parentElement;
  const focusFirstParagraph = focusDocument?.firstElementChild;
  const focusFirstSpan = focusFirstParagraph?.firstElementChild;
  const node = focusFirstSpan?.firstChild;
  if (!node) return;
  return { node, offset: 1 };
}

function ctrlEnd(focusNode: Node, focusOffset: number, focusSection: Section): { node: Node; offset: number } | undefined {
  const focusSpan = focusNode?.parentElement;
  const focusParagraph = focusSpan?.parentElement;
  const focusDocument = focusParagraph?.parentElement;
  const focusLastParagraph = focusDocument?.lastElementChild;
  const focusLastSpan = focusLastParagraph?.lastElementChild;
  const node = focusLastSpan?.firstChild;
  if (!node) return;

  const offset = (node?.textContent?.length ?? 1) - 1;
  return { node, offset };
}
