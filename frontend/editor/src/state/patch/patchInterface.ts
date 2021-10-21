import { derived, Readable } from "svelte/store";
import { forIn, getAssertExists, getAssertExistsRecord } from "../../utils/list";
import { deriveConditionally } from "../../utils/stores";
import { DbListener, Patch, SectionCollapsedPatch, SectionPatch } from "./dbListener";
import { writePatchToFirestore } from "./dbWriter";
import { PendingPatchState } from "./pendingPatchState";

const dbListener = new DbListener();
const pendingPatch = new PendingPatchState();

function init(): Promise<boolean> {
  return dbListener.init();
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
  return deriveConditionally(store, { text: null, endParagraph: false, edited: null });
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
  const dbCursor = dbListener.getCursor();

  const lastCommonAncestor = dbCursor.current;
  const lastDbAncestor = dbCursor.max;
  const lastCursor = dbCursor.firebase;

  const newValues: Record<number, SectionPatch["to"]> | undefined = pendingPatch.getPending();
  const newPatch = createPatch(newValues);

  if (newPatch === undefined && lastCommonAncestor === lastCursor) {
    console.log("No changes, not committing");
  };

  await writePatchToFirestore(lastCommonAncestor, lastDbAncestor, newPatch);
  pendingPatch.clear();
}

function createPatch(newValues: Record<number, SectionPatch["to"]> | undefined): Patch | undefined {
  if (newValues === undefined) return;
  
  let patchEmpty = true;
  const patch: Patch = {};

  forIn(newValues, (idx, pendingData: any) => {
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

export const patchInterface = { init, getPatchStore, undo, redo, append };

window.onbeforeunload = () => {
  if (timer !== undefined) clearTimeout(timer);
  commit();
  return null;
}
