import { derived, Readable, writable, Writable } from "svelte/store";
import { getAssertExists } from "../utils/list";

export type ParagraphLocation = {start: number, end: number};

const paragraphDataStore: Writable<Record<number, boolean>> = writable({});
const paragraphLocationsStoreInternal: Readable<ParagraphLocation[]> = derived(paragraphDataStore, locations => {
  const idxs = Object.keys(locations).map(i => parseInt(i));
  if (idxs.length === 0) return [];
  idxs.sort((a,b) => a-b);

  const boundaries: number[] = [-1];
  for (const idx of idxs) {
    if (locations[idx]) boundaries.push(idx);
  }

  const lastIdx = idxs[idxs.length - 1] as number;
  if (boundaries[boundaries.length - 1] !== lastIdx) boundaries.push(lastIdx);

  const output: {start: number; end: number}[] = [];
  for(let i = 1; i < boundaries.length; i++) {
    const start = getAssertExists(boundaries, i - 1) + 1;
    const end = getAssertExists(boundaries, i);
    output.push({ start, end })
  }
  return output;
})

function setEndParagraph(idx: number, endParagraph: boolean) {
  paragraphDataStore.update(state => {
    state[idx] = endParagraph;
    return state;
  })
}

export const paragraphLocationsStore: Readable<ParagraphLocation[]> & {
  setEndParagraph: (idx: number, endParagraph: boolean) => void
} = {
  subscribe: paragraphLocationsStoreInternal.subscribe,
  setEndParagraph
}
