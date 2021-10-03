import { derived, Readable, Writable, writable } from "svelte/store";
import { assertUser, getTranscriptId } from "../api";
import { getDb } from "./db";
import { collection, query, onSnapshot, DocumentChange, doc, DocumentReference, updateDoc, writeBatch } from "firebase/firestore";
import { updateSelection } from "../input/selectionState";
import { tick } from "svelte";
import { deriveDebounced, deriveWithPrevious } from "../utils/stores";

function getTranscriptDoc(): DocumentReference {
  return doc(getDb(), "users", assertUser().uid, "transcripts", getTranscriptId());
}

type PatchedSectionProps = {
  text: string;
  endParagraph: boolean;
}
export type SectionPatch = Partial<PatchedSectionProps>;
export type Patch = Record<number, SectionPatch>;

const internalCursorStore: Writable<number | undefined> = writable(undefined);
const internalPatchStore: Writable<Record<number, Patch>> = writable({});

function initCursorQuery() {
  onSnapshot(getTranscriptDoc(), doc => {
    const cursor = doc.get("patchCursor");
    internalCursorStore.set(cursor);
  })
}

function initPatchQuery() {
  const patchCollection = collection(getDb(), "users", assertUser().uid, "transcripts", getTranscriptId(), "patches");
  const q = query(patchCollection);
  onSnapshot(q, snapshot => {
    const changes = snapshot.docChanges();
    internalPatchStore.update(state => updatePatchStore(state, changes));
  });
}

function updatePatchStore(state: Record<number, Patch>, changes: DocumentChange<Patch>[]): Record<number, Patch> {
  changes.forEach(change => {
    const idStr = change.doc.id;
    const id = parseInt(idStr);
    if (change.type === "removed") {
      delete state[id];
    } else {
      state[id] = change.doc.data();
    }
  })
  return state;
}


let finalised = true;

let cursor: number | undefined;
internalCursorStore.subscribe(state => cursor = state);

export type PatchState = Patch[];

let maxPatch: number;
const combinedPatchStore: Readable<PatchState> = derived([internalCursorStore, internalPatchStore], ([cursor, patches]) => {
  maxPatch = Math.max(...Object.keys(patches).map(key => parseInt(key)));
  if (cursor === undefined || cursor < maxPatch) finalised = true;
  else finalised = false;

  const output: PatchState = [];
  if (cursor === undefined) return output;
  for (let i = 0; i <= cursor; i++) {
    const patch = patches[i];
    if (patch !== undefined) output.push(patch);
  }
  return output;
});

combinedPatchStore.subscribe(async () => {
  await tick();
  updateSelection();
});

/**
 * Finalise the patches if nothing changes for a second
 */
deriveDebounced(combinedPatchStore, 3).subscribe(() => {
  console.log("finalised")
  finalised = true;
});

export type PatchStore = Readable<PatchState> & {
  undo: () => Promise<void>;
  redo: () => Promise<void>;
  appendFull: (...patches: Patch[]) => Promise<void>;
  append: (idx: number, patch: SectionPatch) => Promise<void>;
  init: () => void;
};

function undo(): Promise<void> {
  if (cursor === undefined || cursor < 0) return Promise.resolve();

  const transcriptDoc = getTranscriptDoc();
  return updateDoc(transcriptDoc, {
    patchCursor: cursor - 1
  });

  
}

function redo(): Promise<void> {
  if (cursor === undefined || cursor >= maxPatch) return Promise.resolve();

  const transcriptDoc = getTranscriptDoc();
  return updateDoc(transcriptDoc, {
    patchCursor: cursor + 1
  });
}

function appendFull(...patches: Patch[]): Promise<void> {
  const oldCursor = cursor ?? -1;
  const newCursor = oldCursor + patches.length;

  const batch = writeBatch(getDb());
  batch.update(getTranscriptDoc(), { patchCursor: newCursor });

  patches.forEach((patch, idx) => {
    const patchId = oldCursor + idx + 1;
    const patchIdStr = patchId.toString().padStart(10, "0");
    const patchRef = doc(getDb(), "users", assertUser().uid, "transcripts", getTranscriptId(), "patches", patchIdStr);
    batch.set(patchRef, patch);
  })

  for (let i = newCursor + 1; i <= maxPatch; i++) {
    const patchIdStr = (i).toString().padStart(10, "0");
    const patchRef = doc(getDb(), "users", assertUser().uid, "transcripts", getTranscriptId(), "patches", patchIdStr);
    batch.delete(patchRef);
  }

  return batch.commit();
}

function append(idx: number, patch: SectionPatch): Promise<void> {
  if (cursor === undefined) return Promise.resolve();
  if (finalised) return appendFull({
    [idx]: patch
  });

  const patchIdStr = cursor.toString().padStart(10, "0");
  const patchRef = doc(getDb(), "users", assertUser().uid, "transcripts", getTranscriptId(), "patches", patchIdStr);

  return updateDoc(patchRef, {
    [idx]: patch
  });
}

function init() {
  initCursorQuery();
  initPatchQuery();
}

export const patchStore: PatchStore = {
  subscribe: combinedPatchStore.subscribe,
  undo,
  redo,
  appendFull,
  append,
  init
}
