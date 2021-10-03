import { Patch, patchStore } from "./patchStore";
import { createSectionStore, SectionState, SectionStore } from "./sectionStore";

/** Initialise the text state of the app using the data returned from the API */
export function initialiseStores(transcript: Omit<SectionState, "idx">[], patches: Patch[]): Record<number, { startTime: number; endTime: number }> {
  patchStore.init();

  const withIdx: SectionState[] = transcript.map((section, idx) => ({ idx, ...section }));
  withIdx.forEach(createSectionStore);

  // if (patches.length === 0) {
  //   createParagraphBreaks(withIdx);
  // }

  const audioTimings: Record<number, { startTime: number; endTime: number }> = {};
  withIdx.forEach(({ idx, startTime, endTime }) => {
    audioTimings[idx] = { startTime, endTime };
  })

  return audioTimings;
}

function createParagraphBreaks(sections: SectionState[]) {
  let lastEligibleToEndParagraph: boolean = false;
  let time = 0;
  let anyAdded = false;

  const patch: Patch = {};
  sections.forEach(section => { // TODO this threshold should be configurable
    if (lastEligibleToEndParagraph && section.startTime - time > 0.3) {
      anyAdded = true;
      patch[section.idx - 1] = {
        endParagraph: true
      };
    }
    lastEligibleToEndParagraph = isEligibleToEndParagraph(section);
    time = section.endTime;
  });

  if (anyAdded) patchStore.appendFull(patch);
}

const punctuation = [".", "!", "?"];
function isEligibleToEndParagraph({ options }: SectionState): boolean {
  const firstOption = options[0];
  if (firstOption === undefined) return false;
  const lastChar = firstOption[firstOption.length - 1];
  return lastChar !== undefined && punctuation.includes(lastChar);
}
