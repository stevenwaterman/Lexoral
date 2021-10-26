import { tick } from "svelte";
import { derived, Readable, writable, Writable } from "svelte/store";
import { restoreSelection, saveSelection } from "../../input/select";
import { forIn, getAssertExists } from "../../utils/list";
import { deriveDebounced } from "../../utils/stores";
import { maxSectionIdx, sectionStores } from "./sectionStore";

export type ParagraphLocation = { start: number, end: number };

const paragraphData: Set<number> = new Set();
const paragraphDataStore: Writable<Set<number>> = writable(paragraphData);
const debouncedParagraphDataStore: Readable<Set<number> | undefined> = deriveDebounced(paragraphDataStore, 0.05);

const paragraphLocationsStoreInternal: Readable<ParagraphLocation[]> = derived(debouncedParagraphDataStore, locations => {
  if (locations === undefined) return [];

  const sortedBoundaries = Array.from(locations);
  sortedBoundaries.sort((a,b) => a-b);
  sortedBoundaries.unshift(-1);
  if (sortedBoundaries[sortedBoundaries.length - 1] !== maxSectionIdx) {
    sortedBoundaries.push(maxSectionIdx);
  }

  const output: {start: number; end: number}[] = [];
  for(let i = 1; i < sortedBoundaries.length; i++) {
    const start = getAssertExists(sortedBoundaries, i - 1) + 1;
    const end = getAssertExists(sortedBoundaries, i);
    output.push({ start, end })
  }
  return output;
});

paragraphLocationsStoreInternal.subscribe(async () => {
  saveSelection();
  await tick();
  restoreSelection();
})


function setEndParagraph(idx: number, endParagraph: boolean) {
  if (endParagraph) {
    if (paragraphData.has(idx)) return;
    paragraphData.add(idx);
  } else {
    if (!paragraphData.has(idx)) return;
    paragraphData.delete(idx);
  }
  paragraphDataStore.set(paragraphData);
}

export const paragraphLocationsStore: Readable<ParagraphLocation[]> & {
  init: () => void;
  setEndParagraph: (idx: number, endParagraph: boolean) => void;
} = {
  subscribe: paragraphLocationsStoreInternal.subscribe,
  init,
  setEndParagraph,
}

function init() {
  forIn(sectionStores, (idx, store) => {
    store.endsParagraphStore.subscribe(endParagraph => setEndParagraph(idx, endParagraph));
  });
}

