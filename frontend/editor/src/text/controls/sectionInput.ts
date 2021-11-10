import type { SectionStore } from "../../state/section/sectionStore";
import * as cursorControls from "./cursorControls";

export type SectionKeyboardEvent = KeyboardEvent & { currentTarget: EventTarget & HTMLSpanElement };

type HandlerMap = Record<string, (event: SectionKeyboardEvent, section: SectionStore) => Promise<void>>;
const handlers: HandlerMap = {}

handlers["ArrowLeft"] = async (event, section) => {
  const alt = event.altKey;
  const ctrl = event.ctrlKey;
  const shift = event.shiftKey;

  if (!alt && ctrl && !shift) return cursorControls.prevWord(event, section);
  if (!alt && !ctrl && !shift) return cursorControls.prevCharacter(event, section);
}

handlers["ArrowRight"] = async (event, section) => {
  const alt = event.altKey;
  const ctrl = event.ctrlKey;
  const shift = event.shiftKey;

  if (!alt && ctrl && !shift) return cursorControls.nextWord(event, section);
  if (!alt && !ctrl && !shift) return cursorControls.nextCharacter(event, section);
}

handlers["ArrowDown"] = async (event, section) => {
  const alt = event.altKey;
  const ctrl = event.ctrlKey;
  const shift = event.shiftKey;

  if (!alt && !ctrl && !shift) return cursorControls.nextLine(event, section);
}

handlers["ArrowUp"] = async (event, section) => {
  const alt = event.altKey;
  const ctrl = event.ctrlKey;
  const shift = event.shiftKey;

  if (!alt && !ctrl && !shift) return cursorControls.prevLine(event, section);
}






export function handleSectionKeydown(event: SectionKeyboardEvent, section: SectionStore) {
  const key = event.key;
  const handler = handlers[key];
  if (handler === undefined) return;
  handler(event, section);
}