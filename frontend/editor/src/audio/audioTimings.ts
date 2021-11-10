import { earlySectionIdxStore, lateSectionIdxStore } from "../input/selectionState";
import { ParagraphLocation, paragraphLocationsStore } from "../state/section/paragraphLocationsStore";
import { getMaxSectionIdx, getSectionStore } from "../state/section/sectionStoreRegistry";
import type { AudioStyle } from "../state/settings/audioStore";
import { clamp } from "../utils/list";

let earlySelectionIdx: number | undefined;
let lateSelectionIdx: number | undefined;
earlySectionIdxStore.subscribe(state => earlySelectionIdx = state);
lateSectionIdxStore.subscribe(state => lateSelectionIdx = state);

let paragraphLocations: ParagraphLocation[];
paragraphLocationsStore.subscribe(state => paragraphLocations = state);

export function getSelectionTimings(audioStyle: AudioStyle): { start: number, end: number } | null {
  if (earlySelectionIdx !== lateSelectionIdx) return getSelectionTimingsLiteral(earlySelectionIdx, lateSelectionIdx);
  if (audioStyle === "context") return getSelectionTimingsContext();
  else if (audioStyle === "onward") return getSelectionTimingsOnward();
  else throw new Error("Unrecognised audio style " + audioStyle)
}

function getSelectionTimingsContext(): { start: number, end: number } | null {
  const startSectionIdx = offsetInParagraph(earlySelectionIdx, -5);
  const endSectionIdx = offsetInParagraph(lateSelectionIdx, 5);
  return getSelectionTimingsLiteral(startSectionIdx, endSectionIdx);
}

function getSelectionTimingsOnward(): { start: number, end: number } | null {
  const startSectionIdx = earlySelectionIdx;
  const endSectionIdx = getMaxSectionIdx();
  return getSelectionTimingsLiteral(startSectionIdx, endSectionIdx);
}

function getSelectionTimingsLiteral(
  startSectionIdx: number | undefined, 
  endSectionIdx: number | undefined
): { start: number, end: number } | null {
  if (startSectionIdx === undefined) return null;
  if (endSectionIdx === undefined) return null;
  
  const start = getSectionStore(startSectionIdx).startTime as number;
  const end = getSectionStore(endSectionIdx).endTime as number;

  return {start, end};
}

function offsetInParagraph(section: number | undefined, offset: number): number | undefined {
  if (section === undefined) return;

  const paragraph = getParagraph(section);
  if (paragraph === undefined) return;

  return clamp(section + offset, paragraph.start, paragraph.end);
}

function getParagraph(section: number): ParagraphLocation | undefined {
  return paragraphLocations.find(location => 
    location.start <= section &&
    location.end >= section
  );
}
