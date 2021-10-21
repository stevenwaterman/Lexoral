import { initAudioCurrentlyPlaying } from "../audio/audioStatus";
import { paragraphLocationsStore } from "./paragraphLocationsStore";
import { patchInterface } from "./patch/patchInterface";
import { createSectionStores, SectionState, SectionStore } from "./sectionStore";
import { initSectionTimings } from "./timingsStore";
import { initWords } from "./wordStore";

/** Initialise the text state of the app using the data returned from the API */
export async function initialiseStores(transcript: Omit<SectionState, "idx">[]) {
  const wordsPromise = initWords();

  const withIdx: SectionState[] = transcript.map((section, idx) => ({ idx, ...section }));
  initSectionTimings(withIdx)

  await wordsPromise;

  createSectionStores(...withIdx);
  const patchPromise = patchInterface.init();;
  initAudioCurrentlyPlaying(withIdx.length)

  await patchPromise;
}
