import * as Tone from "tone";
import { Writable, Readable, writable, derived } from "svelte/store";
import { zipWithLast, StoreValues, clamp, unwrapStore, deriveLastDefined, debounce } from "./utils";
import { audioTimingsStore } from "./audioStores";
import { SectionStore, allSectionsStore, SectionState } from "./sectionStores";
import { stat } from "fs";

let playing: boolean = false;
const playingStoreInternal: Writable<boolean> = writable(playing);
playingStoreInternal.subscribe(state => playing = state);
Tone.Transport.on("start", () => playingStoreInternal.set(true));
Tone.Transport.on("stop", () => playingStoreInternal.set(false));
export const playingStore: Readable<boolean> = playingStoreInternal;

let autoPlay: boolean = false;
export const autoPlayStore: Writable<boolean> = writable(autoPlay);
autoPlayStore.subscribe(state => autoPlay = state);

let loop: boolean = false;
export const loopStore: Writable<boolean> = writable(loop);
loopStore.subscribe(state => loop = state);

const audioCurrentSectionIdxStore: Writable<string | undefined> = writable(undefined);
zipWithLast(audioCurrentSectionIdxStore).subscribe(({ last, current }) => {
  if (last !== undefined) setAudioCurrentSectionStore(last, false);
  if (current !== undefined) setAudioCurrentSectionStore(current, true);
})
playingStore.subscribe(playing => {
  if (!playing) audioCurrentSectionIdxStore.set(undefined);
});

const audioCurrentSectionStoreWrapped: Readable<SectionStore | undefined> = derived([audioCurrentSectionIdxStore, allSectionsStore], ([idx, sections]) => {
  if (idx === undefined) return undefined;
  return sections[idx as any];
})
export const currentlyPlayingSectionStore: Readable<SectionState | undefined> = unwrapStore(audioCurrentSectionStoreWrapped);
export const lastPlayedSectionStore: Readable<SectionState | undefined> = deriveLastDefined(currentlyPlayingSectionStore, undefined);

const audioCurrentSectionStores: Record<string, Writable<boolean>> = {};

export function getAudioCurrentSectionStore(idx: number | string): Readable<boolean> {
  const store = audioCurrentSectionStores[idx];
  if (store === undefined) {
    audioCurrentSectionStores[idx] = writable(false);
  }
  return audioCurrentSectionStores[idx];
}

function setAudioCurrentSectionStore(idx: number | string, current: boolean) {
  const store = audioCurrentSectionStores[idx];
  if (store === undefined) {
    audioCurrentSectionStores[idx] = writable(current);
  } else {
    store.set(current);
  }
}

async function createPlayer(): Promise<Tone.Player> {
  return new Promise(resolve => {
    const player = new Tone.Player(
      "/assets/audio.mp3", 
      () => { resolve(player) }
    ).sync().start(0).toDestination();
  })
}

let player: Tone.Player;
export async function initAudio(allSections: Record<number, {startTime: number; endTime: number}>) {
  player = await createPlayer();
  Tone.Transport.loop = true;
  Tone.Transport.loopEnd = player.buffer.duration;

  Object.entries(allSections).forEach(([idx, section]) => {
    Tone.Transport.schedule(() => audioCurrentSectionIdxStore.set(idx), section.startTime);
    Tone.Transport.schedule(() => audioCurrentSectionIdxStore.set(undefined), section.endTime);
  })

  Tone.Transport.on("loop", () => {
    if (!loop) Tone.Transport.stop();
  })
}


export function playAudio() {
  if (audioTimings === undefined) return;

  const fileDuration = player.buffer.duration;
  let start = clamp(audioTimings.start, 0, fileDuration);
  let end = clamp(audioTimings.end, 0, fileDuration);

  if (start === end) {
    start -= 0.2;
    end += 0.2;
  };

  Tone.Transport.setLoopPoints(start, end);

  if (needsRestart(start, end)) {
    console.log("restart");
    Tone.Transport.pause();
    Tone.Transport.start(undefined, start);
  }
}

export function stopAudio() {
  if (playing) {
    Tone.Transport.stop();
  }
}


let audioTimings: StoreValues<typeof audioTimingsStore> = undefined;
audioTimingsStore.subscribe(state => {
  audioTimings = state;
  if (state === undefined) return stopAudio();

  if (autoPlay) return playAudio();

  if (playing && !needsRestart(state.start, state.end)) {
    playAudio();
  } else {
    stopAudio();
  }
});

function needsRestart(start: number, end: number) {
  const current = Tone.Transport.getSecondsAtTime(Tone.Transport.now());
  const restart = (
    !playing ||
    current < start ||
    current >= end
  );
  return restart;
}