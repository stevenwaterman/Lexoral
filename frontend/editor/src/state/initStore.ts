import { patchInterface } from "./patch/patchInterface";
import { createSectionStores, SectionState, SectionStore } from "./sectionStore";

/** Initialise the text state of the app using the data returned from the API */
export function initialiseStores(transcript: Omit<SectionState, "idx">[]): Record<number, { startTime: number; endTime: number }> {
  console.log(1);
  const withIdx: SectionState[] = transcript.map((section, idx) => ({ idx, ...section }));
  console.log(2);
  createSectionStores(...withIdx);
  console.log(3);


  patchInterface.init();
  console.log(4);


  const audioTimings: Record<number, { startTime: number; endTime: number }> = {};
  withIdx.forEach(({ idx, startTime, endTime }) => {
    audioTimings[idx] = { startTime, endTime };
  })
  console.log(5);

  setTimeout(() => {createParagraphBreaks(withIdx)}, 10000)

  console.log(6);
  return audioTimings;
}

function createParagraphBreaks(sections: SectionState[]) {
  let lastEligibleToEndParagraph: boolean = false;
  let time = 0;

  sections.forEach(section => { // TODO this threshold should be configurable
    if (lastEligibleToEndParagraph && section.startTime - time > 0.3) {

      // TODO this is inefficient because it rerenders each time
      patchInterface.append(section.idx - 1, { endParagraph: true });
    }
    lastEligibleToEndParagraph = isEligibleToEndParagraph(section);
    time = section.endTime;
  });
}

const punctuation = [".", "!", "?"];
function isEligibleToEndParagraph({ options }: SectionState): boolean {
  const firstOption = options[0];
  if (firstOption === undefined) return false;
  const lastChar = firstOption[firstOption.length - 1];
  return lastChar !== undefined && punctuation.includes(lastChar);
}
