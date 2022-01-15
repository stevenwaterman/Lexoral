import type { transcode } from "buffer";
import { fetchTranscript } from "../api";
import { initAudio } from "../audio/audioPlayer";
import { initAudioCurrentlyPlaying } from "../audio/audioStatus";
import { resolveAllPromises } from "../utils/promises";
import { patchInterface } from "./patch/patchInterface";
import { initSectionStores } from "./section/sectionStore"
import { audioStore } from "./settings/audioStore";
import { displayStore } from "./settings/displayStore";
import { initWords } from "./wordStore";

export type TranscriptEntry = {
  idx: number;
  startTime: number;
  endTime: number;
  options: [string, ...string[]];
}

/** Initialise the text state of the app using the data returned from the API */
export async function initAll() {
  return resolveAllPromises(async register => {
    const fetch = register(fetchTranscript());

    const words = register(initWords());
    const patch = register(patchInterface.init());

    const audio = fetch.then(({ audioUrl }) => initAudio(audioUrl));

    const sectionPreReqs = Promise.all([fetch, words]).then(([{ transcript }]) => transcript);
    const sections = register(sectionPreReqs.then(transcript => initSectionStores(transcript)));
    
    const currentlyPlaying = register(sections.then(sectionStores => initAudioCurrentlyPlaying(sectionStores)));

    audioStore.connect();
    displayStore.connect();
  })
}
