import * as Tone from "tone";
import { Writable, Readable, writable, derived } from "svelte/store";
import { StoreValues, deriveUnwrap, deriveLastDefined } from "../utils/stores";
import { audioTimingsStore } from "./audioSelection";
import { SectionStore, allSectionsStore, Section } from "../text/textState";
import { clamp } from "../utils/list";

/** Is the audio actively playing */
let playing: boolean = false;
const playingStoreInternal: Writable<boolean> = writable(playing);
export const playingStore: Readable<boolean> = playingStoreInternal;
playingStoreInternal.subscribe(state => playing = state);
Tone.Transport.on("start", () => playingStoreInternal.set(true));
Tone.Transport.on("stop", () => playingStoreInternal.set(false));

/** Should audio start playing when you select a new section? */
let autoPlay: boolean = false;
export const autoPlayStore: Writable<boolean> = writable(autoPlay);
autoPlayStore.subscribe(state => autoPlay = state);

/** Should audio restart when ending? */
let loop: boolean = false;
export const loopStore: Writable<boolean> = writable(loop);
loopStore.subscribe(state => loop = state);

/** Which section idx is currently playing? */
export const currentlyPlayingSectionIdxStore: Writable<number | undefined> = writable(undefined);
playingStore.subscribe(playing => {
  // When we stop playing, update such that no sections are currently playing
  if (!playing) currentlyPlayingSectionIdxStore.set(undefined);
});

/** Which section store is currently playing? */
const audioCurrentSectionStoreWrapped: Readable<SectionStore | undefined> = derived([currentlyPlayingSectionIdxStore, allSectionsStore], ([idx, sections]) => {
  if (idx === undefined) return undefined;
  return sections[idx as any];
})

/** Which section is currently playing? */
export const currentlyPlayingSectionStore: Readable<Section | undefined> = deriveUnwrap(audioCurrentSectionStoreWrapped);

/** Which section is playing now, or if none, playing most recently? */
export const lastPlayedSectionStore: Readable<Section | undefined> = deriveLastDefined(currentlyPlayingSectionStore, undefined);

/** The duration, in seconds, of the audio file */
let duration: number;

/** Load the audio into the Tone.js transport */
async function createPlayer(): Promise<Tone.Player> {
  return new Promise(resolve => {
    const player = new Tone.Player(
      "/assets/audio.mp3", 
      () => {
        duration = player.buffer.duration;
        resolve(player);
      }
    ).sync().start(0).toDestination();
  })
}

/** Initialise the audio, loading the audio file and registering the start/end times of each section. Must be called before any play/pause methods. */
export async function initAudio(allSections: Record<number, {startTime: number; endTime: number}>) {
  await createPlayer();

  Tone.Transport.loop = true;
  Tone.Transport.loopEnd = duration;

  Object.entries(allSections).forEach(([idxString, section]) => {
    const idx = parseInt(idxString);
    Tone.Transport.schedule(() => currentlyPlayingSectionIdxStore.set(idx), section.startTime);
    Tone.Transport.schedule(() => currentlyPlayingSectionIdxStore.set(undefined), section.endTime);
  })

  Tone.Transport.on("loop", () => {
    if (!loop) Tone.Transport.stop();
  })
}

/** 
 * Plays the audio based on the current state.
 * 
 * If the current timings have the start and end time the same, add 0.2 seconds to either side.
 * If the audio is already playing and the current time is inside the new timings, just continue playing.
 * Otherwise, restart from the start time specified in state.
 */
export function playAudio() {
  if (audioTimings === undefined) return;
  Tone.start();

  let start = clamp(audioTimings.start.time, 0, duration);
  let end = clamp(audioTimings.end.time, 0, duration);

  if (start === end) {
    start -= 0.2;
    end += 0.2;
  };

  if (needsRestart(start, end)) {
    Tone.Transport.pause();
    currentlyPlayingSectionIdxStore.set(audioTimings.start.sectionIdx);
    Tone.Transport.setLoopPoints(start, end);
    Tone.Transport.start(undefined, start);
  } else {
    Tone.Transport.setLoopPoints(start, end);
  }
}

/** Stop the audio if currently playing */
export function stopAudio() {
  if (playing) {
    Tone.Transport.stop();
  }
}

/** The desired start and end time if the audio were to start playing now */
let audioTimings: StoreValues<typeof audioTimingsStore> = undefined;

audioTimingsStore.subscribe(state => {
  // When the timings change, sometimes we start or stop the audio.
  audioTimings = state;

  if (state === undefined) return stopAudio(); // Stop if the new state contains no timings
  if (autoPlay) return playAudio(); // Start if autoplay is enabled

  if (playing && !needsRestart(state.start.time, state.end.time)) {
    // Start if audio is currently playing and the current time is within the new audio bounds
    playAudio();
  } else {
    // Stop if we'd need to restart the audio
    stopAudio();
  }
});

/** Determine whether the current audio time is between the specified start and end times */
function needsRestart(start: number, end: number) {
  const current = Tone.Transport.getSecondsAtTime(Tone.Transport.now());
  const restart = (
    !playing ||
    current < start ||
    current >= end
  );
  return restart;
}