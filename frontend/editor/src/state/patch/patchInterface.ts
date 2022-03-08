import { derived, Readable } from "svelte/store";
import { forIn, getAssertExistsRecord } from "../../utils/list";
import { deriveConditionally } from "../../utils/stores";
import { DbListener, Patch, SectionCollapsedPatch, SectionPatch } from "./dbListener";
import { writePatchToFirestore } from "./dbWriter";
import { Pending, PendingPatchState } from "./pendingPatchState";

const dbListener = new DbListener();
const pendingPatch = new PendingPatchState();

let dbCommaSilence: number | null = null;
dbListener.commaSilenceStore.subscribe(state => dbCommaSilence = state);

let dbPeriodSilence: number | null = null;
dbListener.periodSilenceStore.subscribe(state => dbPeriodSilence = state);

let dbParagraphSilence: number | null = null;
dbListener.paragraphSilenceStore.subscribe(state => dbParagraphSilence = state);


const commaSilenceStoreInternal: Readable<number> = derived(
  [dbListener.commaSilenceStore, pendingPatch.commaSilenceStore], 
  ([db, pending]) => {
    if (pending === undefined) return db ?? 150;
    else return pending ?? 0.15;
});
export const commaSilenceStore = {
  subscribe: commaSilenceStoreInternal.subscribe,
  set: (commaSilence: number) => {
    pendingPatch.setCommaSilence(commaSilence);
    setCommitTimer();
  }
};


const periodSilenceStoreInternal: Readable<number> = derived(
  [dbListener.periodSilenceStore, pendingPatch.periodSilenceStore], 
  ([db, pending]) => {
    if (pending === undefined) return db ?? 250;
    else return pending ?? 0.25;
});
export const periodSilenceStore = {
  subscribe: periodSilenceStoreInternal.subscribe,
  set: (commaSilence: number) => {
    pendingPatch.setPeriodSilence(commaSilence);
    setCommitTimer();
  }
};


const paragraphSilenceStoreInternal: Readable<number> = derived(
  [dbListener.paragraphSilenceStore, pendingPatch.paragraphSilenceStore], 
  ([db, pending]) => {
    if (pending === undefined) return db ?? 500;
    else return pending ?? 0.5;
});
export const paragraphSilenceStore = {
  subscribe: paragraphSilenceStoreInternal.subscribe,
  set: (commaSilence: number) => {
    pendingPatch.setParagraphSilence(commaSilence);
    setCommitTimer();
  }
};




async function init(): Promise<boolean> {
  const success = await dbListener.init();
  if (!success) return false;
  return true;
}

const sectionStores: Record<number, Readable<SectionCollapsedPatch>> = {};
const dbSectionData: Record<number, SectionCollapsedPatch> = {};

function getPatchStore(idx: number): Readable<SectionCollapsedPatch> {
  const current = sectionStores[idx];
  if (current) return current;

  const dbStore = dbListener.getSectionPatchStore(idx);
  const pendingStore = pendingPatch.getSectionPatchStore(idx);

  dbStore.subscribe(data => {
    dbSectionData[idx] = data
  });

  const store = derived([dbStore, pendingStore], ([dbData, pendingData]) => ({
    ...dbData,
    ...pendingData
  }));
  return deriveConditionally(store, { text: null, endParagraph: null, confirmed: null });
}

function undo() {
  if (!pendingPatch.undo()) dbListener.undo();
  setCommitTimer();
}

function redo() {
  if (!dbListener.redo()) pendingPatch.redo();
  setCommitTimer();
}

function append(idx: number, sectionPatch: SectionPatch["to"]) {
  pendingPatch.append(idx, sectionPatch);
  dbListener.maxRedoPointNow();
  setCommitTimer();
}

let timer: NodeJS.Timeout | undefined = undefined;

function setCommitTimer() {
  if (timer !== undefined) clearTimeout(timer);
  timer = setTimeout(commit, 3000);
}

async function commit() {
  console.log("Committing");
  const dbCursor = dbListener.getCursor();

  const lastCommonAncestor = dbCursor.current;
  const lastDbAncestor = dbCursor.max;
  const lastCursor = dbCursor.firebase;

  const newValues: Pending | undefined = pendingPatch.getPending();
  const newPatch = createPatch(newValues);

  if (
    lastCommonAncestor === lastCursor - 1 &&
    newPatch !== undefined &&
    dbListener.isPatchEqual(lastCursor, newPatch)
  ) {
    // Writing is a no-op
    dbListener.resetCursor();
  } else {
    await writePatchToFirestore(lastCommonAncestor, lastDbAncestor, newPatch);
  }
  pendingPatch.clear();
}

function createPatch(newValues: Pending | undefined): Patch | undefined {
  if (newValues === undefined) return;
  
  let patchEmpty = true;
  const patch: Patch = {};

  const metaPatch = { 
    from: {} as any, 
    to: {} as any
  } as any;

  const { commaSilence, periodSilence, paragraphSilence } = newValues.meta;
  
  if (commaSilence !== undefined) {
    metaPatch.from.commaSilence = dbCommaSilence;
    metaPatch.to.commaSilence = commaSilence;
    patchEmpty = false;
  }

  if (periodSilence !== undefined) {
    metaPatch.from.periodSilence = dbPeriodSilence;
    metaPatch.to.periodSilence = periodSilence;
    patchEmpty = false;
  }

  if (paragraphSilence !== undefined) {
    metaPatch.from.paragraphSilence = dbParagraphSilence;
    metaPatch.to.paragraphSilence = paragraphSilence;
    patchEmpty = false;
  }

  if (!patchEmpty) patch.meta = metaPatch;

  forIn(newValues, (idx, pendingData: any) => {
    if (isNaN(idx)) return;
    
    const dbData = getAssertExistsRecord(dbSectionData, idx) as any;

    let wroteAnyKeys = false;
    const sectionPatch = { from: {}, to: {} } as any;

    for (const key in pendingData) {
      const dbValue = dbData[key];
      const pendingValue = pendingData[key];
      if (dbValue !== pendingValue) {
        sectionPatch.from[key] = dbValue;
        sectionPatch.to[key] = pendingValue;
        wroteAnyKeys = true;
      }
    }

    if (wroteAnyKeys) {
      patch[idx] = sectionPatch;
      patchEmpty = false;
    }
  });

  if (patchEmpty) return undefined;
  else return patch;
}

export const patchInterface = { 
  init,
  getPatchStore,
  undo,
  redo,
  append
};

window.onbeforeunload = () => {
  if (timer !== undefined) clearTimeout(timer);
  commit();
  return null;
}
