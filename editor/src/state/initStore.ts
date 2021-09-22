import { Patch, patchStore } from "./patchStore";
import { createSectionStore, SectionState, SectionStore } from "./sectionStore";

/** Initialise the text state of the app using the data returned from the API */
export function initialiseStores(transcript: Omit<SectionState, "idx">[], patches: Patch[]): Record<number, { startTime: number; endTime: number }> {
  patchStore.appendFull(...patches);

  const withIdx: SectionState[] = transcript.map((section, idx) => ({ idx, ...section }));
  withIdx.forEach(createSectionStore);

  const audioTimings: Record<number, { startTime: number; endTime: number }> = {};
  withIdx.forEach(({idx, startTime, endTime}) => {
    audioTimings[idx] = { startTime, endTime };
  })

  return audioTimings;
}

/*
const punctuation = [".", "!", "?"]


function isEligibleToEndParagraph({options}: JsonOutputSection): boolean {
  const firstOption = options[0];
  if (firstOption === undefined) return false;
  const lastChar = firstOption[firstOption.length - 1];
  return lastChar !== undefined && punctuation.includes(lastChar);
}


  let lastEligibleToEndParagraph: boolean = false;
  let time = 0;

output.forEach((outputSection, idx) => { // TODO this threshold should be configurable
    if (lastEligibleToEndParagraph && outputSection.startTime - time > 0.3) {
      sectionStores[sectionStores.length - 1]?.update(section => ({
        ...section,
        endParagraph: true
      }));
    }
    lastEligibleToEndParagraph = isEligibleToEndParagraph(outputSection);
    time = outputSection.endTime;
    
    const store = createSectionStore(outputSection, idx);
    sectionStores.push(store);
    audioTimings[idx] = {
      startTime: outputSection.startTime,
      endTime: outputSection.endTime
    };
  });
  */