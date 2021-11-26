import type { SectionStore } from "../../state/section/sectionStore";
import * as cursorControls from "./cursorControls";
import * as patchControls from "./patchControls";
import * as textControls from "./textControls";
import * as audioControls from "./audioControls";

export type SectionKeyboardEvent = KeyboardEvent & { currentTarget: EventTarget & HTMLSpanElement };

type HandlerMap = Record<string, (alt: boolean, ctrl: boolean, shift: boolean, event: SectionKeyboardEvent, section: SectionStore) => Promise<void>>;
const handlers: HandlerMap = {}

handlers["ArrowLeft"] = async (alt, ctrl, shift, event, section) => {
  if (!alt && ctrl) return cursorControls.prevWord(event, section);
  if (!alt && !ctrl) return cursorControls.prevCharacter(event, section);

  if (alt && !ctrl && !shift) return audioControls.rateDown(event, section);
}

handlers["ArrowRight"] = async (alt, ctrl, shift, event, section) => {
  if (!alt && ctrl) return cursorControls.nextWord(event, section);
  if (!alt && !ctrl) return cursorControls.nextCharacter(event, section);
  
  if (alt && !ctrl && !shift) return audioControls.rateUp(event, section);
}

handlers["ArrowDown"] = async (alt, ctrl, shift, event, section) => {
  if (!alt && !ctrl) return cursorControls.nextLine(event, section);
  if (alt && !ctrl && !shift) return audioControls.volumeDown(event, section);
}

handlers["ArrowUp"] = async (alt, ctrl, shift, event, section) => {
  if (!alt && !ctrl) return cursorControls.prevLine(event, section);
  if (alt && !ctrl && !shift) return audioControls.volumeUp(event, section);
}

handlers["Home"] = async (alt, ctrl, shift, event, section) => {
  if (!alt && !ctrl) return cursorControls.lineStart(event, section);
  if (!alt && ctrl && !shift) return cursorControls.documentStart(event, section);
}

handlers["End"] = async (alt, ctrl, shift, event, section) => {
  if (!alt && !ctrl) return cursorControls.lineEnd(event, section);
  if (!alt && ctrl && !shift) return cursorControls.documentEnd(event, section);
}

handlers["PageUp"] = async (alt, ctrl, shift, event, section) => {
  if (!alt && !ctrl) return cursorControls.prevParagraph(event, section);
}

handlers["PageDown"] = async (alt, ctrl, shift, event, section) => {
  if (!alt && !ctrl) return cursorControls.nextParagraph(event, section);
}

handlers["Backspace"] = async (alt, ctrl, shift, event, section) => {
  if (!alt) return textControls.deleteBackwards(event, section);
}

handlers["Delete"] = async (alt, ctrl, shift, event, section) => {
  if (!alt) return textControls.deleteForwards(event, section);
}

handlers["Enter"] = async (alt, ctrl, shift, event, section) => {
  event.preventDefault();
  if (!alt && !ctrl && !shift) return textControls.newLine(event, section);
}

handlers["z"] = async (alt, ctrl, shift, event, section) => {
  if (!alt && ctrl && !shift) return patchControls.undo(event, section);
}

handlers["y"] = async (alt, ctrl, shift, event, section) => {
  if (!alt && ctrl && !shift) return patchControls.redo(event, section);
}

handlers["a"] = async (alt, ctrl, shift, event, section) => {
  if (alt && !ctrl && !shift) return audioControls.toggleAutoplay(event, section);
}

handlers["l"] = async (alt, ctrl, shift, event, section) => {
  if (alt && !ctrl && !shift) return audioControls.toggleLoop(event, section);
}

handlers["Escape"] = async (alt, ctrl, shift, event, section) => {
  if (!alt && !ctrl && !shift) return audioControls.jumpTo(event, section);
}

handlers["o"] = async (alt, ctrl, shift, event, section) => {
  if (alt && !ctrl && !shift) return audioControls.onwardMode(event, section);
}

handlers["c"] = async (alt, ctrl, shift, event, section) => {
  if (alt && !ctrl && !shift) return audioControls.contextMode(event, section);
}

let lastPressedAlt = false;

export function handleSectionKeydown(event: SectionKeyboardEvent, section: SectionStore) {
  const key = event.key;

  if (key === "Alt") lastPressedAlt = true;
  else lastPressedAlt = false;

  const handler = handlers[key];
  if (handler === undefined) return;
  handler(event.altKey, event.ctrlKey, event.shiftKey, event, section);
}

export function handleSectionKeyUp(event: SectionKeyboardEvent, section: SectionStore) {
  if (lastPressedAlt && event.key === "Alt") {
    event.preventDefault();
    audioControls.togglePlay(event, section);
  }
}