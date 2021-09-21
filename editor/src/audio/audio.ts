import { Writable, Readable, writable, derived } from "svelte/store";
import { StoreValues, deriveUnwrap, deriveLastDefined } from "../utils/stores";
import { audioTimingsStore } from "./audioSelection";
import { SectionStore, allSectionsStore, Section, MaybeSectionStore } from "../text/textState";
import { clamp } from "../utils/list";
import * as Tone from "tone";

/** Is the audio actively playing */
let playing: boolean = false;
const playingStoreInternal: Writable<boolean> = writable(playing);
export const playingStore: Readable<boolean> = playingStoreInternal;
playingStoreInternal.subscribe(state => playing = state);
Tone.Transport.on("start", () => playingStoreInternal.set(true));
Tone.Transport.on("stop", () => playingStoreInternal.set(false));

/** How loud should the audio play? (%) */
export const volumeStore: Writable<number> = writable(100);

/** Should audio start playing when you select a new section? */
let autoPlay: boolean = true;
export const autoPlayStore: Writable<boolean> = writable(autoPlay);
autoPlayStore.subscribe(state => autoPlay = state);

/** Should audio restart when ending? */
let loop: boolean = false;
export const loopStore: Writable<boolean> = writable(loop);
loopStore.subscribe(state => {
  loop = state;
  Tone.Transport.loop = loop;
  if (!loop) stopAudio();
})

/** Which section idx is currently playing? */
const currentlyPlayingSectionIdxStoreInternal: Writable<number | undefined> = writable(undefined);
export const currentlyPlayingSectionIdxStore: Readable<number | undefined> = derived(
  [ playingStore, currentlyPlayingSectionIdxStoreInternal,  audioTimingsStore], 
  ([playing,      currentIdx,                               audioTimings]) => {
  if (!playing) return undefined;
  if (!currentIdx) return undefined;
  if (!audioTimings) return undefined;
  if (currentIdx < audioTimings.start.sectionIdx) return undefined;
  if (currentIdx > audioTimings.end.sectionIdx) return undefined;
  return currentIdx;
})

/** Which section store is currently playing? */
const audioCurrentSectionStoreWrapped: Readable<SectionStore | undefined> = derived([currentlyPlayingSectionIdxStoreInternal, allSectionsStore], ([idx, sections]) => {
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
async function createPlayer(audioUrl: string): Promise<Tone.Player> {
  const gainNode = new Tone.Gain(1).toDestination();
  volumeStore.subscribe(volume => gainNode.gain.value = volume / 100);

  return new Promise(resolve => {
    const player = new Tone.Player(
      audioUrl, 
      () => {
        duration = player.buffer.duration;
        resolve(player);
      }
    ).sync().start(0).connect(gainNode);
  })
}

/** Initialise the audio, loading the audio file and registering the start/end times of each section. Must be called before any play/pause methods. */
export async function initAudio(allSections: Record<number, {startTime: number; endTime: number}>, audioUrl: string) {
  await createPlayer(audioUrl);

  Tone.Transport.loop = true;
  Tone.Transport.loopEnd = duration;

  Object.entries(allSections).forEach(([idxString, section]) => {
    const idx = parseInt(idxString);
    Tone.Transport.schedule(() => currentlyPlayingSectionIdxStoreInternal.set(idx), section.startTime);
    Tone.Transport.schedule(() => currentlyPlayingSectionIdxStoreInternal.set(undefined), section.endTime);
  })
}

let desiredEnd: number | undefined = undefined;

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

  Tone.Transport.loop = false;
  Tone.Transport.loopStart = start;
  Tone.Transport.loopEnd = end;

  if (Tone.Transport.state === "started") {
    Tone.Transport.seconds = start;
  } else {
    Tone.Transport.start(undefined, start);
  }

  Tone.Transport.loop = loop;

  currentlyPlayingSectionIdxStoreInternal.set(audioTimings.start.sectionIdx);

  if (!loop) {
    desiredEnd = end;
    Tone.Transport.scheduleOnce(() => {
      if (desiredEnd !== end) return; // Changed desired end, do nothing.
      if (loop) return;
      Tone.Transport.stop();
    }, end)
  }
}

/** Stop the audio if currently playing */
export function stopAudio() {
  if (playing) {
    Tone.Transport.stop();
  }
}

export const suppressAudioStore: Writable<boolean> = writable(false);

/** The desired start and end time if the audio were to start playing now */
let audioTimings: StoreValues<typeof audioTimingsStore> = undefined;

derived(
  [suppressAudioStore, audioTimingsStore], 
  ([suppress, timings]) => ({suppress, timings})
).subscribe(({suppress, timings}) => {
  audioTimings = timings;
  
  if (suppress) return;
  if (timings === undefined) return stopAudio(); // Stop if the new state contains no timings
  if (autoPlay) return playAudio(); // Start if autoplay is enabled
  else stopAudio();
})
