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

    const audioSettings = register(audioStore.init());
    const displaySettings = register(displayStore.init());
    const words = register(initWords());
    const patch = register(patchInterface.init());

    const audio = register(
      Promise.all([fetch, audioSettings])
        .then(([{ audioUrl }]) => initAudio(audioUrl))
    );

    const sections = register(fetch.then(({ transcript }) => initSectionStores(transcript)));
    const currentlyPlaying = register(sections.then(sectionStores => initAudioCurrentlyPlaying(sectionStores)));
  })
}
