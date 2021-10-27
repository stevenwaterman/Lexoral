import { start } from "repl";
import { Readable, writable, Writable } from "svelte/store";
import { sectionStores } from "../state/section/sectionStore"
import { getAssertExists, getAssertExistsRecord } from "../utils/list";
import { makeReadonly } from "../utils/stores";

export const playingStore: Writable<boolean> = writable(false);

const audioTimings: Array<{ startTime: number; endTime: number }> = [];

export function initAudioCurrentlyPlaying() {
  const length = Object.keys(sectionStores).length;
  for (let i = 0; i < length; i++) {
    const data = { startTime: -1, endTime: -1};
    audioTimings.push(data);

    const store = getAssertExistsRecord(sectionStores, i);
    store.startTimeStore.subscribe(startTime => { data.startTime = startTime });
    store.endTimeStore.subscribe(endTime => { data.endTime = endTime });
  }
}

let lastSectionIdxLookupResult: { idx: number; startTime: number; endTime: number } | undefined = undefined;
function getSectionIdxForTime(time: number | null): number | null {
  if (time === null) return null;
  if (
    lastSectionIdxLookupResult !== undefined &&
    time >= lastSectionIdxLookupResult.startTime &&
    time <= lastSectionIdxLookupResult.endTime
  ) return lastSectionIdxLookupResult.idx;
  
  for (let i = 0; i < audioTimings.length; i++) {
    const { startTime, endTime } = getAssertExists(audioTimings, i);
    if (time >= startTime && time <= endTime) {
      lastSectionIdxLookupResult = { idx: i, startTime, endTime }
      return i;
    }
  }

  return null;
}

let lastPlayingSectionIdx: number | null = null;
const lastPlayingSectionIdxStoreInternal: Writable<number | null> = writable(lastPlayingSectionIdx);
export const lastPlayingSectionIdxStore: Readable<number | null> = makeReadonly(lastPlayingSectionIdxStoreInternal);

export function updateCurrentlyPlaying(time: number | null) {
  const newPlayingSectionIdx = getSectionIdxForTime(time);
  if (newPlayingSectionIdx === lastPlayingSectionIdx) return;

  if (lastPlayingSectionIdx !== null) {
    getAssertExistsRecord(sectionStores, lastPlayingSectionIdx).playingStore.set(false);
  }

  if (newPlayingSectionIdx !== null) {
    getAssertExistsRecord(sectionStores, newPlayingSectionIdx).playingStore.set(true);
  }

  lastPlayingSectionIdx = newPlayingSectionIdx;
  if (newPlayingSectionIdx !== null) lastPlayingSectionIdxStoreInternal.set(newPlayingSectionIdx);
}

playingStore.subscribe(playing => {
  if (!playing) lastPlayingSectionIdxStoreInternal.set(null);
})