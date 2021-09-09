import { focusSectionStore, updateSelection } from "./selectionState";
import type { Section } from "../text/textState";
import { findSectionNode } from "../text/selector";
import { SectionMutator } from "../text/storeMutators";
import { undo, redo } from "./history";

let focusSection: Section | undefined = undefined;
focusSectionStore.subscribe(state => focusSection = state);

export async function onKeyPressed(event: KeyboardEvent) {
  if(event.altKey) return;

  if (event.key === "z" && event.ctrlKey && !event.shiftKey) {
    event.preventDefault();
    await undo();
    return await updateSelection();
  }

  if (event.key === "y" && event.ctrlKey) {
    event.preventDefault();
    await redo();
    return await updateSelection();
  }

  if (event.key === "ArrowLeft") {
    if (event.ctrlKey) return processEvent(event, ctrlLeftArrow);
    else return processEvent(event, leftArrow);
  }

  if (event.key === "ArrowRight") {
    if (event.ctrlKey) return processEvent(event, ctrlRightArrow);
    else return processEvent(event, rightArrow);
  }

  if (event.key === "Tab" && !event.shiftKey) return processEvent(event, tab);
  if (event.key === "Tab" && event.shiftKey) {
    event.preventDefault();
    const focus = guardedCall(shiftTab);
    return mutateSelection(false, focus);
  }

  if (event.key === "ArrowUp") return defaultBehaviour();
  if (event.key === "ArrowDown") return defaultBehaviour();

  if (event.key === "Home") {
    if (event.ctrlKey) return processEvent(event, ctrlHome);
    else return processEvent(event, home);
  }

  if (event.key === "End") {
    if (event.ctrlKey) return processEvent(event, ctrlEnd);
    else return processEvent(event, end);
  }

  if (event.key === "Backspace") return backspace(event);
  if (event.key === "Delete") return deleteKey(event);

  const selection = window.getSelection();
  if (selection?.isCollapsed === false) {
    event.preventDefault();
  }
}

async function defaultBehaviour() {
  await updateSelection();
}

async function processEvent(event: KeyboardEvent, func: typeof leftArrow) {
  const focus = guardedCall(func);
  event.preventDefault();
  return mutateSelection(event.shiftKey, focus);
}

async function mutateSelection(shift: boolean, focus: { node: Node; offset: number } | undefined) {
  const anchor = shift ? getAnchor() : focus;
  if (!focus) return;
  if (!anchor) return;

  const selection = window.getSelection();
  if (!selection) return;
  selection.setBaseAndExtent(anchor.node, anchor.offset, focus.node, focus.offset);
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

function shiftTab(focusNode: Node, focusOffset: number, focusSection: Section): { node: Node; offset: number } | undefined {
  const node = findSectionNode(focusSection.idx - 1)?.firstChild;
  if (!node) return;

  const offset = (node?.textContent?.length ?? 1) - 1;
  return { node, offset };
}

function tab(focusNode: Node, focusOffset: number, focusSection: Section): { node: Node; offset: number } | undefined {
  const node = findSectionNode(focusSection.idx + 1)?.firstChild;
  if (!node) return;
  return { node, offset: 1 };
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




async function backspace(event: KeyboardEvent) {
  const selection = window.getSelection();
  if (selection === null) return;

  if (!selection.isCollapsed) return backspaceSelectedText(event, selection);
  if (event.ctrlKey && selection.focusOffset <= 1) return backspaceDeletingPrevious(event, selection);
  if (selection.focusOffset <= 1) return backspaceAtStart(event, selection);

  return defaultBehaviour();
}

async function backspaceAtStart(event: KeyboardEvent, selection: Selection) {
  event.preventDefault();
  if (!focusSection) return;
  const node = findSectionNode(focusSection.idx - 1)?.firstChild;
  if (!node) return;

  const offset = (node?.textContent?.length ?? 1) - 1;
  return mutateSelection(false, { node, offset });
}

async function backspaceDeletingPrevious(event: KeyboardEvent, selection: Selection) {
  event.preventDefault();
  if (!focusSection) return;
  const newIdx = focusSection.idx - 1;
  const node = findSectionNode(newIdx)?.firstChild;
  if (!node) return;

  SectionMutator.ofIdx(newIdx).setText("");
  return mutateSelection(false, { node, offset: 1 });
}

async function backspaceSelectedText(event: KeyboardEvent, selection: Selection) {
  event.preventDefault();
  console.log("Preventing backspace")
  return updateSelection();
}



async function deleteKey(event: KeyboardEvent) {
  const selection = window.getSelection();
  if (selection === null) return;

  if (!selection.isCollapsed) return deleteSelectedText(event, selection);

  const length = selection.focusNode?.textContent?.length ?? 0;
  const atEnd = selection.focusOffset >= length - 1;
  if (event.ctrlKey && atEnd) return deleteDeletingNext(event, selection);
  if (atEnd) return deleteAtEnd(event, selection);

  return defaultBehaviour();
}

async function deleteAtEnd(event: KeyboardEvent, selection: Selection) {
  event.preventDefault();
  if (!focusSection) return;
  const node = findSectionNode(focusSection.idx + 1)?.firstChild;
  if (!node) return;
  return mutateSelection(false, { node, offset: 1 });
}

async function deleteDeletingNext(event: KeyboardEvent, selection: Selection) {
  event.preventDefault();
  if (!focusSection) return;
  const newIdx = focusSection.idx + 1;
  const node = findSectionNode(newIdx)?.firstChild;
  if (!node) return;

  const length = node?.textContent?.length ?? 2;
  SectionMutator.ofIdx(newIdx).setText("");
  return mutateSelection(false, { node, offset: length - 1 });
}

async function deleteSelectedText(event: KeyboardEvent, selection: Selection) {
  event.preventDefault();
  console.log("Preventing delete")
  return updateSelection();
}
