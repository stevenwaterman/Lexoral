import { derived, Readable, writable, Writable } from "svelte/store";
import { forIn, getAssertExists } from "../utils/list";
import type { SectionCollapsedPatches } from "./patch/dbListener";

export type ParagraphLocation = { start: number, end: number };

export const lastSectionIdxStore: Writable<number> = writable(-1);

const paragraphDefaultsStore: Writable<Set<number>> = writable(new Set());
const paragraphDataStore: Writable<Record<number, boolean>> = writable({ true: new Set(), false: new Set() });
const paragraphLocationsStoreInternal: Readable<ParagraphLocation[]> = derived([paragraphDefaultsStore, paragraphDataStore, lastSectionIdxStore], ([defaults, locations, lastSectionIdx]) => {
  const boundaries: Set<number> = new Set(defaults);
  forIn(locations, (idx, endParagraph) => {
    if (endParagraph) boundaries.add(idx);
    else boundaries.delete(idx);
  })
  boundaries.add(-1);
  boundaries.add(lastSectionIdx);

  const sortedBoundaries = Array.from(boundaries);
  sortedBoundaries.sort((a,b) => a-b);

  const output: {start: number; end: number}[] = [];
  for(let i = 1; i < sortedBoundaries.length; i++) {
    const start = getAssertExists(sortedBoundaries, i - 1) + 1;
    const end = getAssertExists(sortedBoundaries, i);
    output.push({ start, end })
  }
  return output;
})


function setEndParagraph(idx: number, endParagraph: boolean | null) {
  paragraphDataStore.update(state => {
    if (endParagraph === true) state[idx] = true;
    else if (endParagraph === false) state[idx] = false;
    else if (endParagraph === null) delete state[idx];
    return state;
  })
}

function setEndParagraphBulk(patches: SectionCollapsedPatches) {
  const setTrue: number[] = [];
  const setFalse: number[] = [];
  const remove: number[] = [];

  forIn(patches, (idx, { endParagraph }) => {
    if (endParagraph === true) setTrue.push(idx);
    else if (endParagraph === false) setFalse.push(idx);
    else if (endParagraph === null) remove.push(idx);
  });

  if (setTrue.length === 0 && setFalse.length === 0 && remove.length === 0) return;

  paragraphDataStore.update(state => {
    setTrue.forEach(idx => state[idx] = true);
    setFalse.forEach(idx => state[idx] = false);
    remove.forEach(idx => delete state[idx]);
    return state;
  })
}

export const paragraphLocationsStore: Readable<ParagraphLocation[]> & {
  setEndParagraph: (idx: number, endParagraph: boolean) => void;
  setEndParagraphBulk: (patches: SectionCollapsedPatches) => void;
  setLastSectionIdx: (idx: number) => void;
  setDefaults: (defaultEndParagraphs: Set<number>) => void;
} = {
  subscribe: paragraphLocationsStoreInternal.subscribe,
  setEndParagraph,
  setEndParagraphBulk,
  setLastSectionIdx: lastSectionIdxStore.set,
  setDefaults: paragraphDefaultsStore.set
}
