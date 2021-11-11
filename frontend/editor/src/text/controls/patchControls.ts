import { selectEnd, selectNextSection, selectPrevSection, selectSectionEnd, selectSectionStart, selectStart } from "../../input/select";
import { patchInterface } from "../../state/patch/patchInterface";
import type { SectionStore } from "../../state/section/sectionStore";
import type { SectionKeyboardEvent } from "./sectionInput";

export async function undo(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  patchInterface.undo();
}

export async function redo(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  patchInterface.redo();
}
