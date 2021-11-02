import { fetchTranscript } from "../api";
import { initAudio } from "../audio/audioPlayer";
import { initAudioCurrentlyPlaying } from "../audio/audioStatus";
import { displayStore } from "./displayStore";
import { patchInterface } from "./patch/patchInterface";
import { initSectionStores } from "./section/sectionStore"
import { initWords } from "./wordStore";

export type TranscriptEntry = {
  idx: number;
  startTime: number;
  endTime: number;
  options: [string, ...string[]];
}

/** Initialise the text state of the app using the data returned from the API */
export async function initAll() {
  const fetchPromise = fetchTranscript();

  const displayOptionsPromise = displayStore.init();
  const wordsPromise = initWords();
  const patchPromise = patchInterface.init();

  const { transcript, audioUrl } = await fetchPromise;

  initAudio(audioUrl);
  const sectionStores = initSectionStores(transcript);
  initAudioCurrentlyPlaying(sectionStores);

  await Promise.all([displayOptionsPromise, wordsPromise, patchPromise]);
}
