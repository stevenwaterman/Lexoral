import { derived, Readable, writable, Writable } from "svelte/store";
import { forIn, getAssertExists } from "../utils/list";
import type { SectionCollapsedPatches } from "./patch/dbListener";

export type ParagraphLocation = {start: number, end: number};

const lastSectionIdxStore: Writable<number> = writable(-1);

const paragraphDataStore: Writable<Set<number>> = writable(new Set<number>());
const paragraphLocationsStoreInternal: Readable<ParagraphLocation[]> = derived([paragraphDataStore, lastSectionIdxStore], ([locations, lastSectionIdx]) => {
  const boundaries: number[] = [-1, ...locations, lastSectionIdx];
  boundaries.sort((a,b) => a-b);

  const output: {start: number; end: number}[] = [];
  for(let i = 1; i < boundaries.length; i++) {
    const start = getAssertExists(boundaries, i - 1) + 1;
    const end = getAssertExists(boundaries, i);
    output.push({ start, end })
  }
  return output;
})


let paragraphData: Set<number>;
paragraphDataStore.subscribe(state => paragraphData = state);

function setEndParagraph(idx: number, endParagraph: boolean) {
  const current = paragraphData.has(idx);
  if (current === endParagraph) return;
  
  paragraphDataStore.update(state => {
    if (endParagraph) state.add(idx);
    else state.delete(idx);
    return state;
  })
}

function setEndParagraphBulk(patches: SectionCollapsedPatches) {
  const add: number[] = [];
  const remove: number[] = [];

  forIn(patches, (idx, { endParagraph }) => {
    if (endParagraph === true) add.push(idx as any as number);
    else if (endParagraph === false) remove.push(idx as any as number);
  });

  if (add.length === 0 && remove.length === 0) return;

  paragraphDataStore.update(state => {
    remove.forEach(idx => state.delete(idx));
    add.forEach(idx => state.add(idx));
    return state;
  })
}

export const paragraphLocationsStore: Readable<ParagraphLocation[]> & {
  setEndParagraph: (idx: number, endParagraph: boolean) => void;
  setEndParagraphBulk: (patches: SectionCollapsedPatches) => void;
  setLastSectionIdx: (idx: number) => void;
} = {
  subscribe: paragraphLocationsStoreInternal.subscribe,
  setEndParagraph,
  setEndParagraphBulk,
  setLastSectionIdx: lastSectionIdxStore.set
}
