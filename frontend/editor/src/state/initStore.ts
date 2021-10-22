import { initAudioCurrentlyPlaying } from "../audio/audioStatus";
import { getAssertExists } from "../utils/list";
import { paragraphLocationsStore } from "./paragraphLocationsStore";
import { patchInterface } from "./patch/patchInterface";
import { SectionStore } from "./section/sectionStore";
import { initWords } from "./wordStore";

export type TranscriptEntry = {
  idx: number;
  startTime: number;
  endTime: number;
  options: [string, ...string[]];
}

/** Initialise the text state of the app using the data returned from the API */
export async function initialiseStores(transcript: Omit<TranscriptEntry, "idx">[]) {
  const wordsPromise = initWords();
  const patchPromise = patchInterface.init();;

  const withIdx = transcript.map((section, idx) => ({ idx, ...section }));

  const stores = withIdx.map(section => new SectionStore(section));
  for (let i = 0; i < stores.length; i++) {
    const prev = stores[i - 1] ?? null;
    const self = getAssertExists(stores, i);
    const next = stores[i + 1] ?? null;
    self.initAdjancentSections(prev, next);
  }

  initAudioCurrentlyPlaying(withIdx.length)

  await Promise.all([wordsPromise, patchPromise]);
}
