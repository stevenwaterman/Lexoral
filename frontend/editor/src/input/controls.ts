import { focusSectionIdxStore, anchorSectionIdxStore } from "./selectionState";
import { findSectionNode } from "../text/selector";
import { tick } from "svelte";
import { selectSectionEnd, selectSectionStart } from "./select";
import { patchInterface } from "../state/patch/patchInterface";

let focusSectionIdx: number | undefined = undefined;
focusSectionIdxStore.subscribe(state => focusSectionIdx = state);

let anchorSectionIdx: number | undefined = undefined;
anchorSectionIdxStore.subscribe(state => anchorSectionIdx = state);

let inProgress = false;
export async function onKeyPressed(event: KeyboardEvent) {
  // Check to see if another event handler is already running
  // If so, prevent this one
  // When the app lags, multiple events can overlap because they're async
  // This causes desynchronisation between the browser and the text state
  if (inProgress) {
    event.preventDefault();
    event.stopPropagation();
    return;
  };
  inProgress = true;
  await onKeyPressedInner(event);
  inProgress = false;
}

async function onKeyPressedInner(event: KeyboardEvent) {
  if (event.altKey) return;

  const selection = window.getSelection();

  if (event.key === "Enter" && event.ctrlKey) {
    event.preventDefault();
    if (focusSectionIdx !== undefined) {
      const patchIdx = selection?.focusOffset === 1 ? focusSectionIdx - 1 : focusSectionIdx;
      patchInterface.append(patchIdx, { endParagraph: true })
      await tick();
      await selectSectionStart(focusSectionIdx)
      return;
    }
  }

  if (event.key === "z" && event.ctrlKey && !event.shiftKey) {
    event.preventDefault();
    patchInterface.undo();
  }

  if (event.key === "y" && event.ctrlKey) {
    event.preventDefault();
    patchInterface.redo();
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

  if (selection?.isCollapsed === false) {
    event.preventDefault();
  }
}

async function defaultBehaviour() {
  // await updateSelection();
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
  // await updateSelection();
}

function getAnchor(): { node: Node; offset: number } | undefined {
  const selection = window.getSelection();
  if (selection === null) return;

  const node = selection.anchorNode;
  if (node === null) return;

  return { node, offset: selection.anchorOffset };
}

function guardedCall(func: typeof leftArrow) {
  if (focusSectionIdx === undefined) return;

  const selection = window.getSelection();
  if (selection === null) return;

  const { focusNode, focusOffset } = selection;
  if (focusNode === null) return;
  return func(focusNode, focusOffset, focusSectionIdx);
}

function leftArrow(focusNode: Node, focusOffset: number, focusSectionIdx: number): { node: Node; offset: number } | undefined {
  if (focusOffset <= 1) {
    const node = findSectionNode(focusSectionIdx - 1)?.firstChild;
    if (!node) return;

    const offset = (node?.textContent?.length ?? 1) - 1;
    return { node, offset };

  }
  else return { node: focusNode, offset: focusOffset - 1 };
}

function rightArrow(focusNode: Node, focusOffset: number, focusSectionIdx: number): { node: Node; offset: number } | undefined {
  const nodeLength = focusNode?.textContent?.length ?? 0;
  if (focusOffset >= nodeLength - 1) {
    const node = findSectionNode(focusSectionIdx + 1)?.firstChild;
    if (!node) return;
    return { node, offset: 1 };
  }
  else return { node: focusNode, offset: focusOffset + 1 };
}

function shiftTab(focusNode: Node, focusOffset: number, focusSectionIdx: number): { node: Node; offset: number } | undefined {
  const node = findSectionNode(focusSectionIdx - 1)?.firstChild;
  if (!node) return;

  const offset = (node?.textContent?.length ?? 1) - 1;
  return { node, offset };
}

function tab(focusNode: Node, focusOffset: number, focusSectionIdx: number): { node: Node; offset: number } | undefined {
  const node = findSectionNode(focusSectionIdx + 1)?.firstChild;
  if (!node) return;
  return { node, offset: 1 };
}


function ctrlLeftArrow(focusNode: Node, focusOffset: number, focusSectionIdx: number): { node: Node; offset: number } | undefined {
  if (focusOffset <= 1) {
    const node = findSectionNode(focusSectionIdx - 1)?.firstChild;
    if (!node) return;
    return { node, offset: 1 };
  }
  else return { node: focusNode, offset: 1 };
}

function ctrlRightArrow(focusNode: Node, focusOffset: number, focusSectionIdx: number): { node: Node; offset: number } | undefined {
  const nodeLength = focusNode?.textContent?.length ?? 0;
  if (focusOffset >= nodeLength - 1) {
    const node = findSectionNode(focusSectionIdx + 1)?.firstChild;
    if (!node) return;

    const offset = (node?.textContent?.length ?? 1) - 1;
    return { node, offset };
  }
  else return { node: focusNode, offset: (focusNode?.textContent?.length ?? 1) - 1 };
}

function home(focusNode: Node, focusOffset: number, focusSectionIdx: number): { node: Node; offset: number } | undefined {
  const focusSpan = focusNode?.parentElement;
  const focusParagraph = focusSpan?.parentElement;
  const focusFirstSpan = focusParagraph?.firstElementChild;
  const node = focusFirstSpan?.firstChild;
  if (!node) return;
  return { node, offset: 1 };
}

function end(focusNode: Node, focusOffset: number, focusSectionIdx: number): { node: Node; offset: number } | undefined {
  const focusSpan = focusNode?.parentElement;
  const focusParagraph = focusSpan?.parentElement;
  const focusLastSpan = focusParagraph?.lastElementChild;
  const node = focusLastSpan?.firstChild;
  if (!node) return;

  const offset = (node?.textContent?.length ?? 1) - 1;
  return { node, offset };
}

function ctrlHome(focusNode: Node, focusOffset: number, focusSectionIdx: number): { node: Node; offset: number } | undefined {
  const focusSpan = focusNode?.parentElement;
  const focusParagraph = focusSpan?.parentElement;
  const focusDocument = focusParagraph?.parentElement;
  const focusFirstParagraph = focusDocument?.firstElementChild;
  const focusFirstSpan = focusFirstParagraph?.firstElementChild;
  const node = focusFirstSpan?.firstChild;
  if (!node) return;
  return { node, offset: 1 };
}

function ctrlEnd(focusNode: Node, focusOffset: number, focusSectionIdx: number): { node: Node; offset: number } | undefined {
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
  if (!focusSectionIdx) return;

  if (isParagraphEnd(focusSectionIdx - 1)) {
    patchInterface.append(focusSectionIdx - 1, { endParagraph: false });
    await tick();
  }
  return selectSectionEnd(focusSectionIdx - 1);
}

async function backspaceDeletingPrevious(event: KeyboardEvent, selection: Selection) {
  event.preventDefault();
  if (!focusSectionIdx) return;

  if (isParagraphEnd(focusSectionIdx - 1)) {
    patchInterface.append(focusSectionIdx - 1, {
      text: "",
      endParagraph: false
    });
    await tick();
  } else {
    patchInterface.append(focusSectionIdx - 1, { text: "" });
  }

  return selectSectionStart(focusSectionIdx - 1);
}

async function backspaceSelectedText(event: KeyboardEvent, selection: Selection) {
  if (selection.anchorNode === selection.focusNode) {
    // Selected within one section
    return defaultBehaviour();
  }

  event.preventDefault();

  // Selecting multiple sections
  if (anchorSectionIdx === undefined || focusSectionIdx === undefined) {
    throw new Error("idxs are undefined when deleting")
  };

  const startIdx = Math.min(anchorSectionIdx, focusSectionIdx);
  const endIdx = Math.max(anchorSectionIdx, focusSectionIdx);

  for (let i = startIdx; i <= endIdx; i++) {
    // TODO should this keep the paragraph breaks in?
    patchInterface.append(i, { text: "" });
  }

  return selectSectionStart(startIdx);
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
  if (!focusSectionIdx) return;

  if (isParagraphEnd(focusSectionIdx)) {
    patchInterface.append(focusSectionIdx, { endParagraph: false })
    await tick();
  }
  return selectSectionStart(focusSectionIdx + 1);
}

async function deleteDeletingNext(event: KeyboardEvent, selection: Selection) {
  event.preventDefault();
  if (!focusSectionIdx) return;

  patchInterface.append(focusSectionIdx + 1, { text: "" });
  if (isParagraphEnd(focusSectionIdx)) patchInterface.append(focusSectionIdx, { endParagraph: false });

  return selectSectionStart(focusSectionIdx + 1);
}

async function deleteSelectedText(event: KeyboardEvent, selection: Selection) {
  if (selection.anchorNode === selection.focusNode) {
    // Selected within one section
    return defaultBehaviour();
  }

  event.preventDefault();

  // Selecting multiple sections
  if (anchorSectionIdx === undefined || focusSectionIdx === undefined) {
    throw new Error("idxs are undefined when deleting")
  };

  const startIdx = Math.min(anchorSectionIdx, focusSectionIdx);
  const endIdx = Math.max(anchorSectionIdx, focusSectionIdx);

  for (let i = startIdx; i <= endIdx; i++) {
    // TODO should this keep the paragraph breaks in?
    patchInterface.append(i, { text: "" });
  }
  
  return selectSectionEnd(endIdx);
}


function isParagraphEnd(idx: number): boolean {
  const currentSpan = findSectionNode(idx);
  if (!currentSpan) return false;

  const prevSpan = findSectionNode(idx + 1);
  if (!prevSpan) return false;

  return currentSpan.parentElement !== prevSpan.parentElement;
}