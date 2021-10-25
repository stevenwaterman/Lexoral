import { derived, Readable, writable, Writable } from "svelte/store";
import { forIn, getAssertExists } from "../../utils/list";
import { sectionStores } from "./sectionStore";

export type ParagraphLocation = { start: number, end: number };

export const lastSectionIdxStore: Writable<number> = writable(-1);

const paragraphDataStore: Writable<Set<number>> = writable(new Set());
const paragraphLocationsStoreInternal: Readable<ParagraphLocation[]> = derived([paragraphDataStore, lastSectionIdxStore], ([locations, lastSectionIdx]) => {
  const sortedBoundaries = Array.from(locations);
  sortedBoundaries.sort((a,b) => a-b);
  sortedBoundaries.unshift(-1);
  if (sortedBoundaries[sortedBoundaries.length - 1] !== lastSectionIdx) {
    sortedBoundaries.push(lastSectionIdx);
  }

  const output: {start: number; end: number}[] = [];
  for(let i = 1; i < sortedBoundaries.length; i++) {
    const start = getAssertExists(sortedBoundaries, i - 1) + 1;
    const end = getAssertExists(sortedBoundaries, i);
    output.push({ start, end })
  }
  return output;
})


function setEndParagraph(idx: number, endParagraph: boolean) {
  paragraphDataStore.update(state => {
    if (endParagraph) state.add(idx);
    else state.delete(idx);
    return state;
  })
}

export const paragraphLocationsStore: Readable<ParagraphLocation[]> & {
  init: () => void;
  setEndParagraph: (idx: number, endParagraph: boolean) => void;
  setLastSectionIdx: (idx: number) => void;
} = {
  subscribe: paragraphLocationsStoreInternal.subscribe,
  init,
  setEndParagraph,
  setLastSectionIdx: lastSectionIdxStore.set
}

function init() {
  forIn(sectionStores, (idx, store) => {
    store.endsParagraphStore.subscribe(endParagraph => setEndParagraph(idx, endParagraph));
  });
}
