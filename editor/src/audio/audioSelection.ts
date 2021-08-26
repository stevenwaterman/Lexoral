import { Writable, writable, derived, Readable } from "svelte/store";
import { selectionStore, earlySectionIdxStore, areMultipleSectionsSelectedStore, lateSectionIdxStore } from "../input/selectionState";
import { allSectionsStore, documentStore, ParagraphStore, SectionStore } from "../text/textState";
import { deriveUnwrap } from "../utils/stores";
import { clampGet, clamp } from "../utils/list";

/**
 * The audio mode determines how to translate the section selection into the audio selection
 * 
 * This is converted into a series of mutations to apply onto the section selection to create the audio selection
 * 
 * Note that this mode only applies when a single section is selected.
 * If the user manually selects multiple sections, then exactly that will play.
 * 
 * Context: Play 3 words either side of the selected word, as long as they're in the same paragraph.
 * Word: Play exactly what is selected.
 * Paragraph: Play the entire paragraph that contains the current selection.
 * Onward: Play from the selection until the end of the audio.
 */
export const audioModeStore: Writable<"word" | "context" | "paragraph" | "onward"> = writable("context");

/**
 * These mutations are applied in order to the start or end of the section selection.
 * sectionOffset is only applied when you select one section, and is not applied when you manually select a range of sections.
 * 
 * 1. Add `sectionOffset` sections before and after the original selection. This is generally negative for the start and positive for the end.
 * 2. If `constrainWithinParagraph`, remove any of the sections added by `sectionOffset` that are in a paragraph different to the paragraph(s) of the original selection
 * 3. If `addGap`, play from the end of the section before the first section until the start of the section after the last section (rather than the start of the first to the end of the last). In other words, play the silence before and after the selection.
 * 4. Add `timeOffset` seconds to the start/end time.
 */
type AudioSelectionSideMutation = {
  sectionOffset: number;
  constrainWithinParagraph: boolean;
  addGap: boolean;
  timeOffset: number;
}

/**
 * Defines the mutations to apply onto the start and end of the section selection to get the start and end of the audio selection.
 */
type AudioSelectionMutation = {
  start: AudioSelectionSideMutation;
  end: AudioSelectionSideMutation;
}

/**
 * Play exactly what is selected.
 */
const wordMode: AudioSelectionMutation = {
  start: {
    sectionOffset: 0,
    constrainWithinParagraph: false,
    addGap: false,
    timeOffset: 0
  },
  end: {
    sectionOffset: 0,
    constrainWithinParagraph: false,
    addGap: false,
    timeOffset: 0
  }
};

/**
 * Play 3 words either side of the selected word, as long as they're in the same paragraph.
 */
const contextMode: AudioSelectionMutation = {
  start: {
    sectionOffset: -3,
    constrainWithinParagraph: true,
    addGap: true,
    timeOffset: 0
  },
  end: {
    sectionOffset: 3,
    constrainWithinParagraph: true,
    addGap: true,
    timeOffset: 0
  }
}

/**
 * Play the entire paragraph that contains the current selection.
 */
const paragraphMode: AudioSelectionMutation = {
  start: {
    sectionOffset: Number.MIN_SAFE_INTEGER,
    constrainWithinParagraph: true,
    addGap: true,
    timeOffset: 0
  },
  end: {
    sectionOffset: Number.MAX_SAFE_INTEGER,
    constrainWithinParagraph: true,
    addGap: true,
    timeOffset: 0
  }
}

/**
 * Play from the selection until the end of the audio.
 */
const onwardMode: AudioSelectionMutation = {
  start: {
    sectionOffset: 0,
    constrainWithinParagraph: false,
    addGap: false,
    timeOffset: 0
  },
  end: {
    sectionOffset: Number.MAX_SAFE_INTEGER,
    constrainWithinParagraph: false,
    addGap: true,
    timeOffset: 0
  }
}

/**
 * Supplies the set of mutations to apply onto the section selection based on the audio mode.
 */
const mutationStore: Readable<AudioSelectionMutation> = derived(audioModeStore, mode => {
  switch(mode) {
    case "word": return wordMode;
    case "context": return contextMode;
    case "paragraph": return paragraphMode;
    case "onward": return onwardMode;
  }
})

function applyMutations(side: "start" | "end") {
  const earlyLate: "early" | "late" = side === "start" ? "early" : "late";
  const sectionIdxStore: Readable<number | undefined> = earlyLate === "early" ? earlySectionIdxStore : lateSectionIdxStore;
  const addGapsOffset = side === "start" ? -1 : 1;

  /**
   * Store containing the paragraph store for the paragraph that contains the [start / end] of the current selection
   */
  const paragraphStoreWrapped: Readable<ParagraphStore | undefined> = derived([documentStore, selectionStore], ([document, selection]) => {
    if (selection === undefined) return undefined;
    return clampGet(document, selection[earlyLate].paragraph);
  });

  /**
   * Store containing the section stores for the section at the [start / end] of the audio selection after applying the `sectionOffset` and `constrainWithinParagraph` mutations.
   */
  const offsetSectionStoreWrapped: Readable<SectionStore | undefined> = derived(
    [ areMultipleSectionsSelectedStore, sectionIdxStore,  selectionStore, mutationStore,  deriveUnwrap(paragraphStoreWrapped), allSectionsStore], 
    ([areMultipleSectionsSelected,      sectionIdx,       selection,      mutation,       paragraph,                          allSections]
  ) => {
    if (sectionIdx === undefined) return undefined;
    if (paragraph === undefined) return undefined;
    if (selection === undefined) return undefined;
    if (areMultipleSectionsSelected) return allSections[sectionIdx];

    if (mutation[side].constrainWithinParagraph) {
      const offsetIdx = selection[earlyLate].section + mutation[side].sectionOffset;
      return clampGet(paragraph, offsetIdx)
    } else {
      const offsetIdx = sectionIdx + mutation[side].sectionOffset;
      const maxIdx = Object.keys(allSections).length - 1;
      return allSections[clamp(offsetIdx, 0, maxIdx)];
    }                                          
  });

  /**
   * Store containing the section store for the section at the [start / end] of the audio after applying the `sectionOffset`, `constrainWithinParagraph`, and `addGaps` mutations.
   */
  const gapsSectionStoreWrapped: Readable<SectionStore | undefined> = derived(
    [ deriveUnwrap(offsetSectionStoreWrapped), mutationStore,  allSectionsStore], 
    ([offsetSection,                          mutation,       allSections]
  ) => {
    if (offsetSection === undefined) return undefined;
    const offset = mutation.start.addGap ? addGapsOffset : 0;
    const desiredIdx = offsetSection.idx + offset;
    const maxIdx = Object.keys(allSections).length - 1;
    return allSections[clamp(desiredIdx, 0, maxIdx)];
  })

  if (side === "start") {
    return derived(
      [ deriveUnwrap(gapsSectionStoreWrapped), mutationStore],
      ([gapsSection,                          mutation]
    ) => {
      if (gapsSection === undefined) return undefined;
      if (gapsSection.idx === 0 && mutation.start.addGap) return gapsSection.startTime - 2; // Very first section
      if (mutation.start.addGap) return gapsSection.endTime - mutation.start.timeOffset;
      else return gapsSection.startTime - mutation.start.timeOffset;
    })
  } else {
    return derived(
      [ deriveUnwrap(gapsSectionStoreWrapped), mutationStore,  allSectionsStore], 
      ([gapsSection,                          mutation,       allSections]) => {
      if (gapsSection === undefined) return undefined;
      const maxIdx = Object.keys(allSectionsStore).length - 1;
      if (gapsSection.idx === maxIdx && mutation.end.addGap) return gapsSection.endTime + 2; // Very last section
      if (mutation.end.addGap) return gapsSection.startTime + mutation.end.timeOffset;
      else return gapsSection.endTime + mutation.end.timeOffset;
    })
  }
}

export const audioTimingsStore: Readable<{ start: number; end: number } | undefined> = derived(
  [ applyMutations("start"),  applyMutations("end")], 
  ([start,                    end]
) => {
  if (start === undefined) return undefined;
  if (end === undefined) return undefined;
  return { start, end };
});