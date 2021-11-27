import { getAnchorSpan, getFocusSpan, getSpanIdx, selectEnd, selectNextSection, selectPrevSection, selectSectionEnd, selectSectionStart, selectStart } from "../../input/select";
import type { SectionStore } from "../../state/section/sectionStore";
import { getMaxSectionIdx, getSectionStore } from "../../state/section/sectionStoreRegistry";
import type { SectionKeyboardEvent } from "./sectionInput";

export async function deleteBackwards(event: SectionKeyboardEvent, section: SectionStore) {
  const selection = window.getSelection();
  if (selection === null) return;

  const { anchorNode, focusNode, anchorOffset, focusOffset } = selection;
  if (!anchorNode || !focusNode) return;

  if (anchorNode === focusNode) { // Selection is within one span
    if (anchorOffset === 0 && focusOffset === 0) {
      event.preventDefault();
      section.startParagraphStore.set(false);
      setTimeout(() => selectPrevSection(section.idx));
    } else {
      // Default behaviour, delete the text within a span
      return;
    }
  } else {
    // Selected multiple sections
    event.preventDefault();

    const anchorIdx = getSpanIdx(getAnchorSpan(selection));
    const focusIdx = getSpanIdx(getFocusSpan(selection));
    if (anchorIdx === null || focusIdx === null) return;

    const earlyIdx = Math.min(anchorIdx, focusIdx);
    const lateIdx = Math.max(anchorIdx, focusIdx);
    
    for (let i = earlyIdx; i <= lateIdx; i++) {
      const store = getSectionStore(i);
      store.displayTextStore.set("");
      store.startParagraphStore.set(false);
    }

    setTimeout(() => selectPrevSection(earlyIdx));
  }
}

export async function deleteForwards(event: SectionKeyboardEvent, section: SectionStore) {
  const selection = window.getSelection();
  if (selection === null) return;

  const { anchorNode, focusNode, anchorOffset, focusOffset } = selection;
  if (!anchorNode || !focusNode) return;

  if (anchorNode === focusNode) { // Selection is within one span
    const textLength = anchorNode.textContent?.length ?? 0;
    if (anchorOffset >= textLength && focusOffset >= textLength) {
      event.preventDefault();
      section.endParagraphStore.set(false);
      setTimeout(() => selectNextSection(section.idx));
    } else {
      // Default behaviour, delete the text within a span
      return;
    }
  } else {
    // Selected multiple sections
    event.preventDefault();

    const anchorIdx = getSpanIdx(getAnchorSpan(selection));
    const focusIdx = getSpanIdx(getFocusSpan(selection));
    if (anchorIdx === null || focusIdx === null) return;

    const earlyIdx = Math.min(anchorIdx, focusIdx);
    const lateIdx = Math.max(anchorIdx, focusIdx);
    
    for (let i = earlyIdx; i <= lateIdx; i++) {
      const store = getSectionStore(i);
      store.displayTextStore.set("");
      store.startParagraphStore.set(false);
    }

    setTimeout(() => selectNextSection(lateIdx));
  }
}

export async function newLine(event: SectionKeyboardEvent, section: SectionStore) {
  const selection = window.getSelection();

  const currentOffset = selection?.focusOffset;
  if (currentOffset === undefined) return; // Don't know what to do with this, leave it default

  const focusIdx = getSpanIdx(getFocusSpan(selection));
  if (focusIdx === null) return;

  const store = getSectionStore(focusIdx);

  if (currentOffset <= 0) {
    store.startParagraphStore.set(true);
    setTimeout(() => selectSectionStart(focusIdx));
  } else if (section.idx < getMaxSectionIdx()) {
    store.endParagraphStore.set(true);
    setTimeout(() => selectSectionStart(focusIdx + 1));
  }
}
