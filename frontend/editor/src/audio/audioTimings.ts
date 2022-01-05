import { derived, Readable } from "svelte/store";
import { earlySectionIdxStore, lateSectionIdxStore } from "../input/selectionState";
import { ParagraphLocation, paragraphLocationsStore } from "../state/section/paragraphLocationsStore";
import { getSectionStore } from "../state/section/sectionStoreRegistry";
import { audioStore } from "../state/settings/audioStore";
import { clamp } from "../utils/list";

export const selectionTimingsStore: Readable<{start: number, end: number} | null> = derived([
  audioStore.getField("mode"),
  earlySectionIdxStore,
  lateSectionIdxStore,
  paragraphLocationsStore
], ([audioStyle, earlySelectionIdx, lateSelectionIdx, paragraphLocations]) => {
  if (earlySelectionIdx !== lateSelectionIdx) return getSelectionTimingsLiteral(earlySelectionIdx, lateSelectionIdx);
  if (audioStyle === "context") return getSelectionTimingsContext(earlySelectionIdx, lateSelectionIdx, paragraphLocations);
  else if (audioStyle === "onward") return getSelectionTimingsOnward(earlySelectionIdx, lateSelectionIdx);
  else throw new Error("Unrecognised audio style " + audioStyle)
});

function getSelectionTimingsContext(
  earlySelectionIdx: number | undefined, 
  lateSelectionIdx: number | undefined,
  paragraphLocations: ParagraphLocation[]
): { start: number, end: number } | null {
  const startSectionIdx = offsetInParagraph(earlySelectionIdx, -5, paragraphLocations);
  const endSectionIdx = offsetInParagraph(lateSelectionIdx, 5, paragraphLocations);
  return getSelectionTimingsLiteral(startSectionIdx, endSectionIdx);
}

function getSelectionTimingsOnward(
  earlySelectionIdx: number | undefined, 
  lateSelectionIdx: number | undefined
): { start: number, end: number } | null {
  if (earlySelectionIdx === undefined) return null;
  const start = getSectionStore(earlySelectionIdx).startTime as number;
  return { start, end: Number.MAX_SAFE_INTEGER };
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

function offsetInParagraph(
  section: number | undefined,
  offset: number,
  paragraphLocations: ParagraphLocation[]
): number | undefined {
  if (section === undefined) return;

  const paragraph = getParagraph(section, paragraphLocations);
  if (paragraph === undefined) return;

  return clamp(section + offset, paragraph.start, paragraph.end);
}

function getParagraph(section: number, paragraphLocations: ParagraphLocation[]): ParagraphLocation | undefined {
  return paragraphLocations.find(location => 
    location.start <= section &&
    location.end >= section
  );
}
