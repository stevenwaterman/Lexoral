import { selectEnd, selectNextSection, selectPosition, selectPrevSection, selectSectionEnd, selectSectionPosition, selectSectionStart, selectStart } from "../../input/select";
import { selectionState } from "../../input/selectionState";
import type { SectionStore } from "../../state/section/sectionStore";
import type { SectionKeyboardEvent } from "./sectionInput";

export async function prevCharacter(event: SectionKeyboardEvent, section: SectionStore) {
  const currentOffset = selectionState?.focus?.offset;
  if (currentOffset === undefined) return; // Don't know what to do with this, leave it default
  if (currentOffset > 0) return; // Move one character left as normal

  // Need to move one section left
  event.preventDefault();
  await selectPrevSection(section.idx);
}

export async function prevWord(event: SectionKeyboardEvent, section: SectionStore) {
  const currentOffset = selectionState?.focus?.offset;
  if (currentOffset === undefined) return; // Don't know what to do with this, leave it default

  if (currentOffset <= 0) {
    // At start of section, more to start of prev section
    event.preventDefault();
    await selectSectionStart(section.idx - 1);
  } else {
    // Not at start of section, move there
    event.preventDefault();
    await selectStart(event.currentTarget);
  }
}

export async function nextCharacter(event: SectionKeyboardEvent, section: SectionStore) {
  const currentOffset = selectionState?.focus?.offset;
  if (currentOffset === undefined) return; // Don't know what to do with this, leave it default

  const textLength = event.currentTarget.textContent?.length;
  if (textLength !== undefined && currentOffset < textLength) return; // Move one character right as normal

  // Need to move one section right
  event.preventDefault();
  await selectNextSection(section.idx);
}

export async function nextWord(event: SectionKeyboardEvent, section: SectionStore) {
  const currentOffset = selectionState?.focus?.offset;
  if (currentOffset === undefined) return; // Don't know what to do with this, leave it default

  const textLength = event.currentTarget.textContent?.length;

  if (textLength === undefined || currentOffset >= textLength) {
    // At end of section, more to end of next section
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
    if (inspectSection.offsetLeft >= spanLeft) {
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
  event.preventDefault();

  const span = event.currentTarget;
  const spanLeft = span.offsetLeft;
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
    if (inspectSection.offsetLeft < spanLeft) {
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
