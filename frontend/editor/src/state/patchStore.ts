import { derived, Readable, Writable, writable } from "svelte/store";
import { assertUser, getTranscriptId } from "../api";
import { getDb } from "./db";
import { collection, query, onSnapshot, DocumentChange, doc, DocumentReference, updateDoc, writeBatch } from "firebase/firestore";
import { deriveDebounced } from "../utils/stores";

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

let pendingPatch: { patch: Patch, undone: boolean };
const pendingPatchStore: Writable<{ patch: Patch, undone: boolean }> = writable({ patch: {}, undone: false });
pendingPatchStore.subscribe(state => pendingPatch = state);
function isPending(state: { patch: Patch, undone: boolean }): boolean {
  if (Object.keys(state.patch).length === 0) return false;
  if (state.undone) return false;
  return true;
}
function isUndone(state: { patch: Patch, undone: boolean }): boolean {
  if (Object.keys(state.patch).length === 0) return false;
  if (state.undone) return true;
  return false;
}
function clearPending() {
  pendingPatchStore.set({ patch: {}, undone: false });
}
deriveDebounced(pendingPatchStore, 3).subscribe(() => appendFull());
pendingPatchStore.subscribe(() => console.log("edited"))

let cursor: number | undefined;
internalCursorStore.subscribe(state => cursor = state);

export type PatchState = Patch[];

let maxPatch: number;
const combinedPatchStore: Readable<PatchState> = derived([internalCursorStore, internalPatchStore, pendingPatchStore], ([cursor, patches, pendingPatch]) => {
  maxPatch = Math.max(...Object.keys(patches).map(key => parseInt(key)));

  const output: PatchState = [];
  for (let i = 0; i <= (cursor ?? -1); i++) {
    const patch = patches[i];
    if (patch !== undefined) output.push(patch);
  }

  if (isPending(pendingPatch)) {
    output.push(pendingPatch.patch);
  }

  return output;
});

export type PatchStore = Readable<PatchState> & {
  undo: () => Promise<void>;
  redo: () => Promise<void>;
  appendFull: (...patches: Patch[]) => Promise<void>;
  append: (idx: number, patch: SectionPatch) => void;
  init: () => void;
};

function undo(): Promise<void> {
  if (isPending(pendingPatch)) {
    pendingPatchStore.update(state => ({...state, undone: true}));
    return Promise.resolve();
  }

  if (cursor === undefined || cursor < 0) return Promise.resolve();
  const transcriptDoc = getTranscriptDoc();
  return updateDoc(transcriptDoc, {
    patchCursor: cursor - 1
  });
}

function redo(): Promise<void> {
  if (cursor === undefined) return Promise.resolve();

  if (cursor >= maxPatch) {
    if (isUndone(pendingPatch)) {
      pendingPatchStore.update(state => ({...state, undone: false}));
    }
    return Promise.resolve();
  }

  const transcriptDoc = getTranscriptDoc();
  return updateDoc(transcriptDoc, {
    patchCursor: cursor + 1
  });
}

async function appendFull(...patches: Patch[]): Promise<void> {
  if (isPending(pendingPatch)) {
    patches.unshift(pendingPatch.patch);
  }

  if (patches.length === 0) {
    console.log("Not Committing");
    return Promise.resolve();
  }
  console.log("Committing " + JSON.stringify(patches));

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

  await batch.commit();
  if (isPending(pendingPatch) || isUndone(pendingPatch)) {
    clearPending();
  }
}

function append(idx: number, patch: SectionPatch) {
  if (isUndone(pendingPatch)) {
    pendingPatchStore.set({ patch: { [idx]: patch }, undone: false });
  } else {
    pendingPatchStore.update(state => {
      state.patch[idx] = {...state.patch[idx], ...patch };
      return state;
    })
  }
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
