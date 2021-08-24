import * as Tone from "tone";
import { Writable, Readable, writable } from "svelte/store";
import { zipWithLast, StoreValues, clamp } from "./utils";
import { audioTimingsStore } from "./audioStores";

const playingStoreInternal: Writable<boolean> = writable(false);
Tone.Transport.on("start", () => playingStoreInternal.set(true));
Tone.Transport.on("stop", () => playingStoreInternal.set(false));
export const playingStore: Readable<boolean> = playingStoreInternal;

let autoPlay: boolean = false;
export const autoPlayStore: Writable<boolean> = writable(autoPlay);

let loop: boolean = false;
export const loopStore: Writable<boolean> = writable(loop);

const audioCurrentSectionStore: Writable<string | undefined> = writable(undefined);
zipWithLast(audioCurrentSectionStore).subscribe(({ last, current }) => {
  if (last !== undefined) setAudioCurrentSectionStore(last, false);
  if (current !== undefined) setAudioCurrentSectionStore(current, true);
})

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
    Tone.Transport.schedule(() => audioCurrentSectionStore.set(idx), section.startTime);
    Tone.Transport.schedule(() => audioCurrentSectionStore.set(idx), section.endTime);
  })

  Tone.Transport.on("stop", () => audioCurrentSectionStore.set(undefined));
}


export function playAudio() {
  if (audioTimings === undefined) return;

  const fileDuration = player.buffer.duration;
  const start = clamp(audioTimings.start, 0, fileDuration);
  const end = clamp(audioTimings.end, 0, fileDuration);

  Tone.Transport.pause();
  Tone.Transport.setLoopPoints(start, end);
  Tone.Transport.loop = loop;

  const current = Tone.Transport.getSecondsAtTime(Tone.Transport.now());
  if (current < start || !loop) {
    Tone.Transport.start(undefined, start);
  } else {
    Tone.Transport.start();
  }

  if (!loop) {
    const duration = end - start;
    Tone.Transport.stop(`+${duration}`);
  }
}

export function stopAudio() {
  Tone.Transport.stop();
}


let audioTimings: StoreValues<typeof audioTimingsStore> = undefined;
audioTimingsStore.subscribe(state => {
  audioTimings = state;
  if (autoPlay) {
    playAudio();
  } else {
    stopAudio();
  }
});
