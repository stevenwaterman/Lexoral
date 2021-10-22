import { start } from "repl";
import { Readable, writable, Writable } from "svelte/store";
import { getSectionSelectedStore } from "../state/section/combinedSectionStore";
import { getSectionTimingStore } from "../state/timingsStore";
import { getAssertExists } from "../utils/list";

export const playingStore: Writable<boolean> = writable(false);

const audioTimings: Array<{ startTime: number; endTime: number }> = [];

export function initAudioCurrentlyPlaying(sectionCount: number) {
  for (let i = 0; i < sectionCount; i++) {
    const data = { startTime: -1, endTime: -1};
    audioTimings.push(data);

    getSectionTimingStore(i).subscribe(({ startTime, endTime }) => {
      data.startTime = startTime;
      data.endTime = endTime;
    });
  }
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