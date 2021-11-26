import { selectEnd, selectNextSection, selectPosition, selectPrevSection, selectSectionEnd, selectSectionPosition, selectSectionStart, selectStart } from "../../input/select";
import type { SectionStore } from "../../state/section/sectionStore";
import { getMaxSectionIdx } from "../../state/section/sectionStoreRegistry";
import type { SectionKeyboardEvent } from "./sectionInput";

export async function prevCharacter(event: SectionKeyboardEvent, section: SectionStore) {
  const selection = window.getSelection();
  if (selection === null) return; // Don't know what to do with this, leave it default

  const focusNode = selection.focusNode;
  if (focusNode === null) return; // Don't know what to do with this, leave it default

  const focusOffset = selection.focusOffset;
  if (focusOffset === undefined) return; // Don't know what to do with this, leave it default

  const focusSpan = focusNode.parentElement as HTMLSpanElement;
  const focusIdxStr = focusSpan.getAttribute("data-sectionIdx");
  if (focusIdxStr === null) return; // Don't know what to do with this, leave it default
  const focusIdx = parseInt(focusIdxStr);

  if (focusOffset > 0 && section.idx === focusIdx) return; // one character left as normal

  // Need to move one section left
  event.preventDefault();
  await selectPrevSection(focusIdx, event.shiftKey);
}

export async function prevWord(event: SectionKeyboardEvent, section: SectionStore) {
  const selection = window.getSelection();
  if (selection === null) return; // Don't know what to do with this, leave it default

  const focusNode = selection.focusNode;
  if (focusNode === null) return; // Don't know what to do with this, leave it default

  const focusOffset = selection.focusOffset;
  if (focusOffset === undefined) return; // Don't know what to do with this, leave it default

  const focusSpan = focusNode.parentElement as HTMLSpanElement;
  const focusIdxStr = focusSpan.getAttribute("data-sectionIdx");
  if (focusIdxStr === null) return; // Don't know what to do with this, leave it default
  const focusIdx = parseInt(focusIdxStr);

  event.preventDefault();
  if (focusOffset > 0 && section.idx === focusIdx) {
    // Not at start of section, move there
    await selectStart(event.currentTarget, event.shiftKey);
    return
  }

  // Need to move one section left
  await selectPrevSection(focusIdx, event.shiftKey);
}

export async function nextCharacter(event: SectionKeyboardEvent, section: SectionStore) {
  const selection = window.getSelection();
  if (selection === null) return; // Don't know what to do with this, leave it default

  const focusNode = selection.focusNode;
  if (focusNode === null) return; // Don't know what to do with this, leave it default

  const focusOffset = selection.focusOffset;
  if (focusOffset === undefined) return; // Don't know what to do with this, leave it default

  const focusSpan = focusNode.parentElement as HTMLSpanElement;
  const focusIdxStr = focusSpan.getAttribute("data-sectionIdx");
  if (focusIdxStr === null) return; // Don't know what to do with this, leave it default
  const focusIdx = parseInt(focusIdxStr);

  const focusLength = focusNode.textContent?.length ?? 0;
  if (focusOffset < focusLength && section.idx === focusIdx) return; // one character right as normal

  // Need to move one section right
  event.preventDefault();
  await selectNextSection(focusIdx, event.shiftKey);
}

export async function nextWord(event: SectionKeyboardEvent, section: SectionStore) {
  const selection = window.getSelection();
  if (selection === null) return; // Don't know what to do with this, leave it default

  const focusNode = selection.focusNode;
  if (focusNode === null) return; // Don't know what to do with this, leave it default

  const focusOffset = selection.focusOffset;
  if (focusOffset === undefined) return; // Don't know what to do with this, leave it default

  const focusSpan = focusNode.parentElement as HTMLSpanElement;
  const focusIdxStr = focusSpan.getAttribute("data-sectionIdx");
  if (focusIdxStr === null) return; // Don't know what to do with this, leave it default
  const focusIdx = parseInt(focusIdxStr);

  event.preventDefault();
  const focusLength = focusNode.textContent?.length ?? 0;
  if (focusOffset < focusLength && section.idx === focusIdx) {
    // Not at end of section, move there
    await selectEnd(event.currentTarget, event.shiftKey);
    return
  }

  // Need to move one section right
  await selectNextSection(focusIdx, event.shiftKey);
}

export async function prevLine(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();

  const span = window.getSelection()?.focusNode?.parentElement;
  if (!span) return;

  const spanRight = span.offsetLeft + span.offsetWidth;
  const spanTop = span.offsetTop;

  let inspectSection: HTMLSpanElement = span;
  let prevTop: number | undefined = undefined;
  while (prevTop === undefined && inspectSection.previousElementSibling !== null) {
    inspectSection = inspectSection.previousElementSibling as HTMLSpanElement;
    if (inspectSection.offsetTop < spanTop) {
      prevTop = inspectSection.offsetTop;
      break;
    }
  }

  if (prevTop === undefined) {
    // span is the first line in paragraph, need to select from the prev paragraph
    const prevParaSpan = span.parentElement?.previousElementSibling?.lastElementChild ?? null;
    if (prevParaSpan === null) return;
    inspectSection = prevParaSpan as HTMLSpanElement;
    prevTop = inspectSection.offsetTop;
  }

  while (true) {
    if (inspectSection.offsetLeft < spanRight) {
      await selectStart(inspectSection, event.shiftKey);
      return;
    }

    const prev = inspectSection.previousElementSibling;
    if (prev === null) return;
    const prevSpan = prev as HTMLSpanElement;
    if (prevSpan.offsetTop < prevTop) {
      await selectStart(inspectSection, event.shiftKey);
      return;
    }
    inspectSection = prevSpan;
  }
}

export async function nextLine(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();

  const span = window.getSelection()?.focusNode?.parentElement;
  if (!span) return;

  const spanLeft = span.offsetLeft;
  const spanTop = span.offsetTop;

  let inspectSection: HTMLSpanElement = span;
  let nextTop: number | undefined = undefined;
  while (nextTop === undefined && inspectSection.nextElementSibling !== null) {
    inspectSection = inspectSection.nextElementSibling as HTMLSpanElement;
    if (inspectSection.offsetTop > spanTop) {
      nextTop = inspectSection.offsetTop;
      break;
    }
  }

  if (nextTop === undefined) {
    // span is the last line in paragraph, need to select from the next paragraph
    const nextParaSpan = span.parentElement?.nextElementSibling?.firstElementChild ?? null;
    if (nextParaSpan === null) return;
    inspectSection = nextParaSpan as HTMLSpanElement;
    nextTop = inspectSection.offsetTop;
  }

  while (true) {
    if (inspectSection.offsetLeft + inspectSection.offsetWidth >= spanLeft) {
      await selectStart(inspectSection, event.shiftKey);
      return;
    }

    const next = inspectSection.nextElementSibling;
    if (next === null) return;
    const nextSpan = next as HTMLSpanElement;
    if (nextSpan.offsetTop > nextTop) {
      await selectStart(inspectSection, event.shiftKey);
      return;
    }
    inspectSection = nextSpan;
  }
}

export async function lineStart(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();

  const span = window.getSelection()?.focusNode?.parentElement;
  if (!span) return;
  
  const spanTop = span.offsetTop;

  let inspectSection: HTMLSpanElement = span;
  while (true) {
    const prev = inspectSection.previousElementSibling as HTMLSpanElement | null;
    if (prev?.offsetTop !== spanTop) {
      await selectStart(inspectSection, event.shiftKey);
      return;
    }
    inspectSection = prev;
  }
}

export async function lineEnd(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();

  const span = window.getSelection()?.focusNode?.parentElement;
  if (!span) return;
  
  const spanTop = span.offsetTop;

  let inspectSection: HTMLSpanElement = span;
  while (true) {
    const next = inspectSection.nextElementSibling as HTMLSpanElement | null;
    if (next?.offsetTop !== spanTop) {
      await selectEnd(inspectSection, event.shiftKey);
      return;
    }
    inspectSection = next;
  }
}

export async function documentStart(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  await selectSectionStart(0, event.shiftKey);
}

export async function documentEnd(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  await selectSectionEnd(getMaxSectionIdx(), event.shiftKey);
}

export async function prevParagraph(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();

  const focusNode = window.getSelection()?.focusNode;
  const focusParagraph = focusNode?.parentElement?.parentElement;
  const prevParagraph = focusParagraph?.previousElementSibling;
  const lastSpan = prevParagraph?.lastElementChild;

  if (lastSpan) return selectEnd(lastSpan, event.shiftKey);

  const focusParagraphStart = focusParagraph?.firstElementChild;
  if (focusParagraphStart) return selectStart(focusParagraphStart, event.shiftKey);
}

export async function nextParagraph(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();

  const focusNode = window.getSelection()?.focusNode;
  const focusParagraph = focusNode?.parentElement?.parentElement;
  const nextParagraph = focusParagraph?.nextElementSibling;
  const firstSpan = nextParagraph?.firstElementChild;

  if (firstSpan) return selectStart(firstSpan, event.shiftKey);

  const focusParagraphEnd = focusParagraph?.lastElementChild;
  if (focusParagraphEnd) return selectEnd(focusParagraphEnd, event.shiftKey);
}
