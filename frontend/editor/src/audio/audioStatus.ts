import { Readable, writable, Writable } from "svelte/store";
import { getSectionSelectedStore } from "../state/sectionStore";
import { getAssertExists } from "../utils/list";

export const playingStore: Writable<boolean> = writable(false);

let audioTimings: Array<{ startTime: number; endTime: number }>;

export function initSectionStartEnd(timings: Record<number, { startTime: number; endTime: number }>) {
  const sorted = Object.entries(timings)
    .map(([key, value]) => [parseInt(key), value] as const);
  sorted.sort((a,b) => (a[0] - b[0]));

  audioTimings = sorted.map(([_, val]) => val);
}

function getSectionIdxForTime(time: number | null): number | null {
  if (time === null) return null;
  
  for (let i = 0; i < audioTimings.length; i++) {
    const { startTime, endTime } = getAssertExists(audioTimings, i);
    if (time >= startTime && time <= endTime) return i;
  }

  return null;
}

let lastPlayingSectionIdx: number | null = null;
const lastPlayingSectionIdxStoreInternal: Writable<number | null> = writable(lastPlayingSectionIdx);
export const lastPlayingSectionIdxStore: Readable<number | null> = { subscribe: lastPlayingSectionIdxStoreInternal.subscribe };

export function updateCurrentlyPlaying(time: number | null) {
  const newPlayingSectionIdx = getSectionIdxForTime(time);
  if (newPlayingSectionIdx === lastPlayingSectionIdx) return;

  if (lastPlayingSectionIdx !== null) {
    getSectionSelectedStore(lastPlayingSectionIdx)
      .update(state => ({ ...state, playing: false }));
  }

  if (newPlayingSectionIdx !== null) {
    getSectionSelectedStore(newPlayingSectionIdx)
      .update(state => ({ ...state, playing: true }));
  }

  lastPlayingSectionIdx = newPlayingSectionIdx;
  if (newPlayingSectionIdx !== null) lastPlayingSectionIdxStoreInternal.set(newPlayingSectionIdx);
}

playingStore.subscribe(playing => {
  if (!playing) lastPlayingSectionIdxStoreInternal.set(null);
})