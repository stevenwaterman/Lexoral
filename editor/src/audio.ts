import * as Tone from "tone";
import { Writable, Readable, writable, derived } from "svelte/store";
import { isSelectingMultipleSectionsStore, selectedSectionsIdxStore } from "./selectionStores";
import { zipWithLast, debounce, unwrapStore, StoreValues } from "./utils";
import { SectionStore, SectionState, allSectionsStore } from "./sectionStores";

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

  Tone.Transport.on("stop", () => audioCurrentSectionStore.set(undefined));
  Tone.Transport.on("loopEnd", () => {
    if (!autoPlay) { // todo add loop store
      Tone.Transport.pause();
    }
  })
}

const audioStartSectionStoreWrapped: Readable<SectionStore | undefined> = derived([isSelectingMultipleSectionsStore, selectedSectionsIdxStore, allSectionsStore], ([multiple, idx, sections]) => {
  if (idx === undefined) return undefined;
  const start = idx.start;
  const desiredIdx = multiple ? start : start - 3;
  const clampedIdx = Math.max(0, desiredIdx);
  const store = sections[clampedIdx];
  return store;
});
const audioStartSectionStore: Readable<SectionState | undefined> = unwrapStore(audioStartSectionStoreWrapped);

const audioEndSectionStoreWrapped: Readable<SectionStore | undefined> = derived([isSelectingMultipleSectionsStore, selectedSectionsIdxStore, allSectionsStore], ([multiple, idx, sections]) => {
  if (idx === undefined) return undefined;
  const end = idx.end;
  const desiredIdx = multiple ? end : end + 3;
  const clampedIdx = Math.min(Object.keys(sections).length, desiredIdx);
  const store = sections[clampedIdx];
  return store;
});
const audioEndSectionStore: Readable<SectionState | undefined> = unwrapStore(audioEndSectionStoreWrapped);

export const audioTimingsStore: Readable<{start: number; end: number} | undefined> = derived([audioStartSectionStore, audioEndSectionStore], ([start, end]) => {
  if (start === undefined) return undefined;
  if (end === undefined) return undefined;
  return {start: start.startTime, end: end.endTime};
})

const playingStoreInternal: Writable<boolean> = writable(false);
Tone.Transport.on("start", () => playingStoreInternal.set(true));
Tone.Transport.on("stop", () => playingStoreInternal.set(false));
export const playingStore: Readable<boolean> = playingStoreInternal;

let autoPlay: boolean = false;
export const autoPlayStore: Writable<boolean> = writable(autoPlay);

let audioTimings: StoreValues<typeof audioTimingsStore> = undefined;
audioTimingsStore.subscribe(state => {
  audioTimings = state;
  if (autoPlay) {
    playAudio();
  } else {
    stopAudio();
  }
});

export function playAudio() {
  if (audioTimings === undefined) return;

  Tone.Transport.pause();
  Tone.Transport.setLoopPoints(audioTimings.start, audioTimings.end);
  const current = Tone.Transport.getSecondsAtTime(Tone.Transport.now());
  if (current < audioTimings.start) {
    Tone.Transport.start(undefined, audioTimings.start);
  } else {
    Tone.Transport.start();
  }
}

export function stopAudio() {
  Tone.Transport.pause();
}
