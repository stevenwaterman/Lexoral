import { CursorPosition, focusParagraphStore, focusSectionIdxStore, selectionStore } from "./selectionState";
import { MaybeParagraphMutator } from "../text/storeMutators";
import { tick } from "svelte";
import { selectSectionStart, selectSectionEnd } from "./select";

let focusSectionIdx: number | undefined;
focusSectionIdxStore.subscribe(state => focusSectionIdx = state);

let focusCursor: CursorPosition | undefined;
selectionStore.subscribe(state => focusCursor = state?.focus);

export async function toggleParagraph() {
  if (focusSectionIdx === undefined) return;
  if (focusCursor === undefined) return;
  const idxCapture = focusSectionIdx;
  if (focusCursor.section === 0) {
    new MaybeParagraphMutator(focusParagraphStore).combine(focusCursor);
    await tick();
    await selectSectionEnd(idxCapture);
  } else {
    new MaybeParagraphMutator(focusParagraphStore).split(focusCursor);
    await tick();
    await selectSectionStart(idxCapture);
  }
}
