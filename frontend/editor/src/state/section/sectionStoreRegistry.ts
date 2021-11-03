import { getAssertExistsRecord } from "../../utils/list";
import type { SectionStore } from "./sectionStore";

const sectionStores: Record<number, SectionStore> = {};
let maxSectionIdx: number = -1;

export function registerSectionStore(store: SectionStore) {
  maxSectionIdx = Math.max(maxSectionIdx, store.idx);
  sectionStores[store.idx] = store;
}

export function getSectionStores(): Readonly<Record<number, SectionStore>> {
  return sectionStores;
}

export function getSectionStore(idx: number): SectionStore {
  return getAssertExistsRecord(sectionStores, idx)
}

export function getMaxSectionIdx(): number {
  return maxSectionIdx;
}
