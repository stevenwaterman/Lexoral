import { paragraphLocationsStore } from "./paragraphLocationsStore";
import { patchInterface } from "./patch/patchInterface";
import { createSectionStores, SectionState, SectionStore } from "./sectionStore";

/** Initialise the text state of the app using the data returned from the API */
export async function initialiseStores(transcript: Omit<SectionState, "idx">[]): Promise<Record<number, { startTime: number; endTime: number }>> {
  const withIdx: SectionState[] = transcript.map((section, idx) => ({ idx, ...section }));
  createSectionStores(...withIdx);

  const patchPromise = patchInterface.init();

  const audioTimings: Record<number, { startTime: number; endTime: number }> = {};
  withIdx.forEach(({ idx, startTime, endTime }) => {
    audioTimings[idx] = { startTime, endTime };
  })

  await patchPromise;
  createParagraphBreaks(withIdx, 0.3);
  return audioTimings;
}

function createParagraphBreaks(sections: SectionState[], requiredSilence: number) {
  const locations: Set<number> = new Set();
  let lastEligibleToEndParagraph: boolean = false;
  let time = 0;

  sections.forEach(section => { // TODO this threshold should be configurable
    if (lastEligibleToEndParagraph && section.startTime - time > requiredSilence) locations.add(section.idx - 1);
    lastEligibleToEndParagraph = isEligibleToEndParagraph(section);
    time = section.endTime;
  });

  paragraphLocationsStore.setDefaults(locations);
}

const punctuation = [".", "!", "?"];
function isEligibleToEndParagraph({ options }: SectionState): boolean {
  const firstOption = options[0];
  if (firstOption === undefined) return false;
  const lastChar = firstOption[firstOption.length - 1];
  return lastChar !== undefined && punctuation.includes(lastChar);
}
