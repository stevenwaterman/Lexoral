import * as Tone from "tone";
import { Writable, Readable, writable } from "svelte/store";
import { audioTimingsStore } from "./selectionStores";
import { zipWithLast, debounce } from "./utils";

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

export async function initAudio(allSections: Record<number, {startTime: number; endTime: number}>) {
  const player = await createPlayer();
  Tone.Transport.loop = true;
  Tone.Transport.loopEnd = player.buffer.duration;

  Object.entries(allSections).forEach(([idx, section]) => {
    Tone.Transport.schedule(() => audioCurrentSectionStore.set(idx), section.startTime);
    Tone.Transport.schedule(() => audioCurrentSectionStore.set(idx), section.endTime);
  })
}

debounce(audioTimingsStore, 0.05).subscribe(timings => {
  if (!timings) return;
  
  Tone.Transport.pause();
  Tone.Transport.setLoopPoints(timings.start, timings.end);
  const current = Tone.Transport.getSecondsAtTime(Tone.Transport.now());
  if (current < timings.start) {
    Tone.Transport.start(undefined, timings.start);
  } else {
    Tone.Transport.start();
  }
});
