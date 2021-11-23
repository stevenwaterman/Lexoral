import { selectEnd, selectNextSection, selectPosition, selectPrevSection, selectSectionEnd, selectSectionPosition, selectSectionStart, selectStart } from "../../input/select";
import type { SectionStore } from "../../state/section/sectionStore";
import { getMaxSectionIdx } from "../../state/section/sectionStoreRegistry";
import type { SectionKeyboardEvent } from "./sectionInput";

export async function prevCharacter(event: SectionKeyboardEvent, section: SectionStore) {
  const currentOffset = window.getSelection()?.focusOffset;
  if (currentOffset === undefined) return; // Don't know what to do with this, leave it default
  if (currentOffset > 0) return; // Move one character left as normal

  // Need to move one section left
  event.preventDefault();
  await selectPrevSection(section.idx);
}

export async function prevWord(event: SectionKeyboardEvent, section: SectionStore) {
  const currentOffset = window.getSelection()?.focusOffset;
  if (currentOffset === undefined) return; // Don't know what to do with this, leave it default

  if (currentOffset <= 0) {
    // At start of section, move to start of prev section
    event.preventDefault();
    await selectSectionStart(section.idx - 1);
  } else {
    // Not at start of section, move there
    event.preventDefault();
    await selectStart(event.currentTarget);
  }
}

export async function nextCharacter(event: SectionKeyboardEvent, section: SectionStore) {
  const currentOffset = window.getSelection()?.focusOffset;
  if (currentOffset === undefined) return; // Don't know what to do with this, leave it default

  const textLength = event.currentTarget.textContent?.length;
  if (textLength !== undefined && currentOffset < textLength) return; // Move one character right as normal

  // Need to move one section right
  event.preventDefault();
  await selectNextSection(section.idx);
}

export async function nextWord(event: SectionKeyboardEvent, section: SectionStore) {
  const currentOffset = window.getSelection()?.focusOffset;
  if (currentOffset === undefined) return; // Don't know what to do with this, leave it default

  const textLength = event.currentTarget.textContent?.length;

  if (textLength === undefined || currentOffset >= textLength) {
    // At end of section, move to end of next section
    event.preventDefault();
    await selectSectionEnd(section.idx + 1);
  } else {
    // Not at end of section, move there
    event.preventDefault();
    await selectEnd(event.currentTarget);
  }
}

export async function nextLine(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();

  const span = event.currentTarget;
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
      await selectStart(inspectSection);
      return;
    }

    const next = inspectSection.nextElementSibling;
    if (next === null) return;
    const nextSpan = next as HTMLSpanElement;
    if (nextSpan.offsetTop > nextTop) {
      await selectStart(inspectSection);
      return;
    }
    inspectSection = nextSpan;
  }
}

export async function prevLine(event: SectionKeyboardEvent, section: SectionStore) {
  debugger
  event.preventDefault();

  const span = event.currentTarget;
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
      await selectStart(inspectSection);
      return;
    }

    const prev = inspectSection.previousElementSibling;
    if (prev === null) return;
    const prevSpan = prev as HTMLSpanElement;
    if (prevSpan.offsetTop < prevTop) {
      await selectStart(inspectSection);
      return;
    }
    inspectSection = prevSpan;
  }
}

export async function lineStart(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();

  const span = event.currentTarget;
  const spanTop = span.offsetTop;

  let inspectSection: HTMLSpanElement = span;
  while (true) {
    const prev = inspectSection.previousElementSibling as HTMLSpanElement | null;
    if (prev?.offsetTop !== spanTop) {
      await selectStart(inspectSection);
      return;
    }
    inspectSection = prev;
  }
}

export async function lineEnd(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();

  const span = event.currentTarget;
  const spanTop = span.offsetTop;

  let inspectSection: HTMLSpanElement = span;
  while (true) {
    const next = inspectSection.nextElementSibling as HTMLSpanElement | null;
    if (next?.offsetTop !== spanTop) {
      await selectEnd(inspectSection);
      return;
    }
    inspectSection = next;
  }
}

export async function documentStart(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  await selectSectionStart(0);
}

export async function documentEnd(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  await selectSectionEnd(getMaxSectionIdx());
}

export async function prevParagraph(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();

  const span = event.currentTarget.parentElement?.previousElementSibling?.lastElementChild ?? undefined;
  if (span) return selectEnd(span);

  await selectStart(event.currentTarget.parentElement?.firstElementChild ?? undefined)
}

export async function nextParagraph(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  const span = event.currentTarget.parentElement?.nextElementSibling?.firstElementChild ?? undefined;
  if (span) return selectStart(span);

  await selectEnd(event.currentTarget.parentElement?.lastElementChild ?? undefined)
}
