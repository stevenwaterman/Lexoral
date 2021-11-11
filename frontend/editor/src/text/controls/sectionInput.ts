import type { SectionStore } from "../../state/section/sectionStore";
import * as cursorControls from "./cursorControls";
import * as textControls from "./textControls";

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

handlers["Home"] = async (event, section) => {
  const alt = event.altKey;
  const ctrl = event.ctrlKey;
  const shift = event.shiftKey;

  if (!alt && !ctrl && !shift) return cursorControls.lineStart(event, section);
  if (!alt && ctrl && !shift) return cursorControls.documentStart(event, section);
}

handlers["End"] = async (event, section) => {
  const alt = event.altKey;
  const ctrl = event.ctrlKey;
  const shift = event.shiftKey;

  if (!alt && !ctrl && !shift) return cursorControls.lineEnd(event, section);
  if (!alt && ctrl && !shift) return cursorControls.documentEnd(event, section);
}

handlers["PageUp"] = async (event, section) => {
  const alt = event.altKey;
  const ctrl = event.ctrlKey;
  const shift = event.shiftKey;

  if (!alt && !ctrl && !shift) return cursorControls.prevParagraph(event, section);
}

handlers["PageDown"] = async (event, section) => {
  const alt = event.altKey;
  const ctrl = event.ctrlKey;
  const shift = event.shiftKey;

  if (!alt && !ctrl && !shift) return cursorControls.nextParagraph(event, section);
}

handlers["Backspace"] = async (event, section) => {
  const alt = event.altKey;
  const ctrl = event.ctrlKey;
  const shift = event.shiftKey;

  if (!alt && ctrl && !shift) return textControls.deletePrevWord(event, section);
  if (!alt && !ctrl && !shift) return textControls.deletePrevCharacter(event, section);
}

handlers["Delete"] = async (event, section) => {
  const alt = event.altKey;
  const ctrl = event.ctrlKey;
  const shift = event.shiftKey;

  if (!alt && ctrl && !shift) return textControls.deleteNextWord(event, section);
  if (!alt && !ctrl && !shift) return textControls.deleteNextCharacter(event, section);
}

handlers["Enter"] = async (event, section) => {
  const alt = event.altKey;
  const ctrl = event.ctrlKey;
  const shift = event.shiftKey;

  event.preventDefault();

  if (!alt && !ctrl && !shift) return textControls.newLine(event, section);
}

export function handleSectionKeydown(event: SectionKeyboardEvent, section: SectionStore) {
  const key = event.key;
  const handler = handlers[key];
  if (handler === undefined) return;
  handler(event, section);
}