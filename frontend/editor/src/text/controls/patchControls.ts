import { tick } from "svelte";
import { selectSectionPosition, selectSectionStart } from "../../input/select";
import { patchInterface } from "../../state/patch/patchInterface";
import type { SectionStore } from "../../state/section/sectionStore";
import type { SectionKeyboardEvent } from "./sectionInput";

export async function undo(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();

  const offset = window.getSelection()?.focusOffset;

  patchInterface.undo();

  setTimeout(() => {
    if (offset === undefined) {
      selectSectionStart(section.idx);
    } else {
      selectSectionPosition(section.idx, offset);
    }
  })
  
}

export async function redo(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();

  const offset = window.getSelection()?.focusOffset;

  patchInterface.redo();

  setTimeout(() => {
    if (offset === undefined) {
      selectSectionStart(section.idx);
    } else {
      selectSectionPosition(section.idx, offset);
    }
  })
}
