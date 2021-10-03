import { derived, Readable, Writable, writable } from "svelte/store";
import { assertUser, getTranscriptId } from "../api";
import { getDb } from "./db";
import { collection, query, FirestoreDataConverter, DocumentData, onSnapshot, DocumentChange, doc, QueryDocumentSnapshot, DocumentReference, updateDoc, writeBatch } from "firebase/firestore";

function getTranscriptDoc(): DocumentReference {
  return doc(getDb(), "users", assertUser().uid, "transcripts", getTranscriptId());
}

type PatchedSectionProps = {
  text: string;
  endParagraph: boolean;
}
export type SectionPatch = Partial<PatchedSectionProps>;
export type Patch = Record<number, SectionPatch>;

const internalCursorStore: Writable<number> = writable(0);
const internalPatchStore: Writable<Record<number, Patch>> = writable({});

const converter: FirestoreDataConverter<Patch> = {
  toFirestore: (patch: Patch) => patch,
  fromFirestore: ({data}: QueryDocumentSnapshot<DocumentData>) => data()
}

function initCursorQuery() {
  onSnapshot(getTranscriptDoc(), doc => {
    const cursor = doc.get("patchCursor");
    internalCursorStore.set(cursor);
  })
}

function initPatchQuery() {
  const patchCollection = collection(getDb(), "users", assertUser().uid, "transcripts", getTranscriptId(), "patches");
  const q = query(patchCollection).withConverter(converter);
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






let cursor: number;
internalCursorStore.subscribe(state => cursor = state);

let maxPatch: number;
internalPatchStore.subscribe(state => maxPatch = Math.max(...Object.keys(state).map(key => parseInt(key))));

export type PatchState = Patch[];

const combinedPatchStore: Readable<PatchState> = derived([internalCursorStore, internalPatchStore], ([cursor, patches]) => {
  const output: PatchState = [];
  for (let i = 0; i <= cursor; i++) {
    const patch = patches[i];
    if (patch === undefined) throw new Error(`Patch ${i} is undefined - keys are ${Object.keys(patches)}}`);
    output.push(patch);
  }
  return output;
});

export type PatchStore = Readable<PatchState> & {
  undo: () => Promise<void>;
  redo: () => Promise<void>;
  appendFull: (...patches: Patch[]) => Promise<void>;
  append: (idx: number, patch: SectionPatch) => Promise<void>;
  init: () => void;
};

function undo(): Promise<void> {
  if (cursor < 0) return Promise.resolve();

  const transcriptDoc = getTranscriptDoc();
  return updateDoc(transcriptDoc, {
    patchCursor: cursor - 1
  });
}

function redo(): Promise<void> {
  if (cursor >= maxPatch) return Promise.resolve();

  const transcriptDoc = getTranscriptDoc();
  return updateDoc(transcriptDoc, {
    patchCursor: cursor + 1
  });
}

function appendFull(...patches: Patch[]): Promise<void> {
  const newCursor = cursor + patches.length;

  const batch = writeBatch(getDb());
  batch.update(getTranscriptDoc(), { patchCursor: newCursor });

  patches.forEach((patch, idx) => {
    const patchId = cursor + idx + 1;
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
  return appendFull({
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

// function createPatchStore(): PatchStore {
//   const store: Writable<PatchState> = writable({
//     patches: [],
//     cursor: 0
//   });

//   let finalized: boolean = true;

//   function appendFull(patch: Patch) {
//     store.update(state => {
//       minAddedIdx = Math.min(minAddedIdx ?? state.cursor, state.cursor);

//       const removed = state.patches.splice(state.cursor, state.patches.length);
//       if (state.patches.length === 0 || removed.length > 0 || finalized) {
//         // Add new patch
//         state.patches.push(patch);
//         finalized = false;
//       } else {
//         // Edit last patch
//         const lastPatch = state.patches[state.patches.length - 1] as Patch;
//         Object.entries(patch)
//           .forEach(([key, data]) => {
//             const idx = parseInt(key);
//             const lastPatchSection = lastPatch[idx];
//             if (lastPatchSection === undefined) {
//               lastPatch[idx] = data
//             } else {
//               lastPatch[idx] = {
//                 ...lastPatchSection,
//                 ...data
//               }
//             }
//           })
//         }
//       state.cursor = state.patches.length;
//       return state;
//     });
//   }

//   function append(idx: number, patch: SectionPatch) {
//     return appendFull({
//       [idx]: patch
//     });
//   }

//   function commit() {
//     finalized = true;
//   }

//   function init(...patches: Patch[]) {
//     store.set({
//       patches,
//       cursor: patches.length
//     });

//     initialised = true;
//     minAddedIdx = undefined;
//     commit();
//   }
  
//   return {
//     subscribe: store.subscribe,
//     undo,
//     redo,
//     appendFull,
//     append,
//     init,
//     commit
//   };
// }

// let initialised: boolean = false;
// let minAddedIdx: number | undefined = undefined;
// deriveDebounced(patchStore, 3).subscribe(async state => {
//   if (state === undefined) return;
//   patchStore.commit();
//   const saved = await save(state.patches);
//   if (saved) sendToast("AutoSaved");
// });

// let saving = false;
// async function save(patches: Patch[]): Promise<boolean> {
//   if (!initialised) {
//     console.log("save called before init, cancelling");
//     return false;
//   }

//   if (minAddedIdx === undefined) {
//     console.log("Nothing added since last time, cancelling");
//     return false;
//   }
//   const addStartIdx = minAddedIdx;
//   const addEndIdx = patches.length - 1;

//   let needed = false;
//   const request: Record<number, Patch | null> = {};
//   for (let i = addStartIdx; i <= addEndIdx; i++) {
//     needed = true;
//     request[i] = getAssertExists(patches, i);
//   }

//   if (!needed) {
//     console.log("Cancelled save, unnecessary");
//     saving = false;
//     return false;
//   }

//   if (saving) {
//     console.log("already saving");
//     return false;
//   }

//   saving = true;

//   await patchTranscript(request);

//   minAddedIdx = undefined;
//   saving = false;
//   return true;
// }

// export async function manualSave() {
//   if (patchState === undefined) return sendToast("Nothing to save");
//   sendToast("Saving");
//   const saved = await save(patchState.patches);
//   if (saved) sendToast("Saved");
//   else sendToast("Nothing to save");
// }
