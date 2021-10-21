import { derived, Readable, writable, Writable } from "svelte/store";
import { getAssertExistsRecord } from "../utils/list";
import type { SectionState } from "./sectionStore";

type TimingState = {
  startTime: number;
  endTime: number;
};

type SilenceState = {
  silenceBefore: number;
  silenceAfter: number;
}

export type SectionTimingState = TimingState & SilenceState;

const sectionStartEndStores: Record<number, Writable<TimingState>> = {};
const sectionTimingStores: Record<number, Readable<SectionTimingState>> = {};

export function initSectionTimings(sections: SectionState[]) {
  sections.forEach(section => {
    sectionStartEndStores[section.idx] = writable({ startTime: section.startTime, endTime: section.endTime });
  })

  sections.forEach(section => {
    const prev = sectionStartEndStores[section.idx - 1];
    const self = getAssertExistsRecord(sectionStartEndStores, section.idx);
    const next = sectionStartEndStores[section.idx + 1];

    sectionTimingStores[section.idx] = deriveTimingStore(prev, self, next);
  })
}

function deriveTimingStore(
  prevStore: Readable<{startTime: number; endTime: number;}> | undefined,
  selfStore: Readable<{startTime: number; endTime: number;}>,
  nextStore: Readable<{startTime: number; endTime: number;}> | undefined
): Readable<SectionTimingState> {
  return derived([
    prevStore ?? writable(undefined), 
    selfStore, 
    nextStore ?? writable(undefined)
  ], ([prev, { startTime, endTime }, next]) => {
    const silenceBefore = prev === undefined ? 1000 : startTime - prev.endTime
    const silenceAfter = next === undefined ? 1000 : next.startTime - endTime;
    return {
      startTime,
      endTime,
      silenceBefore,
      silenceAfter
    }
  });
}

export type SectionTimingStore = Readable<SectionTimingState> & {
  set: (state: {startTime: number, endTime: number}) => void
}

export function getSectionTimingStore(idx: number): SectionTimingStore {
  const { subscribe } = getAssertExistsRecord(sectionTimingStores, idx);
  const { set } = getAssertExistsRecord(sectionStartEndStores, idx);
  return { subscribe, set };
}
