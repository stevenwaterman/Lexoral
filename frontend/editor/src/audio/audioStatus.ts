import { derived, Readable, writable, Writable } from "svelte/store";
import type { SectionStore } from "../state/section/sectionStore"
import { getSectionStore } from "../state/section/sectionStoreRegistry";
import { getAssertExists } from "../utils/list";
import { deriveWithPrevious } from "../utils/stores";

export const playingStore: Writable<boolean> = writable(false);
export const currentTimeStore: Writable<number> = writable(0);
export const audioDurationStore: Writable<number> = writable(0);

const audioTimings: Array<{ startTime: number; endTime: number }> = [];

export function initAudioCurrentlyPlaying(sectionStores: SectionStore[]) {
  sectionStores.forEach(store => {
    const data = { startTime: -1, endTime: -1};
    store.startTimeStore.subscribe(startTime => { data.startTime = startTime });
    store.endTimeStore.subscribe(endTime => { data.endTime = endTime });
    audioTimings.push(data);
  });
}

let lastSectionIdxLookupResult: { idx: number; startTime: number; endTime: number } | undefined = undefined;
export function getSectionIdxForTime(time: number | null): number | null {
  if (time === null) return null;

  if (lastSectionIdxLookupResult !== undefined && timeWithin(time, lastSectionIdxLookupResult)) {
    return lastSectionIdxLookupResult.idx;
  }

  const foundIdx = audioTimings.findIndex(sectionTiming => timeWithin(time, sectionTiming));
  if (foundIdx === -1) return null;

  const found = getAssertExists(audioTimings, foundIdx);
  lastSectionIdxLookupResult = { idx: foundIdx, ...found };
  return foundIdx;
}

function timeWithin(time: number, sectionTime: { startTime: number; endTime: number } | undefined): boolean {
  if (sectionTime === undefined) return false;
  if (sectionTime.startTime > time) return false;
  if (sectionTime.endTime < time) return false;
  return true;
}

export const lastPlayingSectionIdxStore: Readable<number | null> = derived(
  [playingStore, currentTimeStore], 
  ([playing, time], set) => {
    if (!playing) {
      set(null);
      return;
    };
    
    const newValue = getSectionIdxForTime(time);
    if (newValue !== null) set(newValue);
  }
);

deriveWithPrevious(lastPlayingSectionIdxStore).subscribe(({last, current}) => {
  if (last !== null && last !== undefined) getSectionStore(last).playingStore.set(false);
  if (current !== null) getSectionStore(current).playingStore.set(true);
})
