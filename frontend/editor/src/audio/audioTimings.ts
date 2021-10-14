import { get_store_value } from "svelte/internal";
import { earlySectionIdxStore, lateSectionIdxStore } from "../input/selectionState";
import { ParagraphLocation, paragraphLocationsStore } from "../state/paragraphLocationsStore";
import { AllSections, allSectionsStore } from "../state/sectionStore";
import { clamp } from "../utils/list";

let earlySelectionIdx: number | undefined;
let lateSelectionIdx: number | undefined;
earlySectionIdxStore.subscribe(state => earlySelectionIdx = state);
lateSectionIdxStore.subscribe(state => lateSelectionIdx = state);

let paragraphLocations: ParagraphLocation[];
paragraphLocationsStore.subscribe(state => paragraphLocations = state);

let allSections: AllSections;
allSectionsStore.subscribe(state => allSections = state);



export function getSelectionTimings(): { start: number, end: number } | null {
  const startSectionIdx = offsetInParagraph(earlySelectionIdx, 0);
  const endSectionIdx = offsetInParagraph(lateSelectionIdx, 0 );

  if (startSectionIdx === undefined) return null;
  if (endSectionIdx === undefined) return null;

  const startSectionStore = allSections[startSectionIdx];
  const endSectionStore = allSections[endSectionIdx];

  if (startSectionStore === undefined) return null;
  if (endSectionStore === undefined) return null;

  const startSection = get_store_value(startSectionStore);
  const endSection = get_store_value(endSectionStore);

  const start = startSection.startTime;
  const end = endSection.endTime;

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
