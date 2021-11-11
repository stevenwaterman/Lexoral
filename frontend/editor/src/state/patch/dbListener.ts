import { Readable, writable, Writable } from "svelte/store";
import { assertUser, getTranscriptId } from "../../api";
import { getDb } from "./db";
import { collection, query, onSnapshot, DocumentData, QuerySnapshot, DocumentChange } from "firebase/firestore";
import { forIn, getAssertExists } from "../../utils/list";
import { makeReadonly } from "../../utils/stores";

type PatchProperty<KEY extends string, VALUE> = {
  from: Record<KEY, VALUE>;
  to: Record<KEY, VALUE>;
}
type PatchText = PatchProperty<"text", string | null>;
type PatchEndParagraph = PatchProperty<"endParagraph", boolean | null>;
export type SectionPatch = PatchText | PatchEndParagraph;

type PatchCommaSilence = PatchProperty<"commaSilence", number | null>;
type PatchPeriodSilence = PatchProperty<"periodSilence", number | null>;
type PatchParagraphSilence = PatchProperty<"paragraphSilence", number | null>;

export type MetaPatch = PatchCommaSilence | PatchPeriodSilence | PatchParagraphSilence;

export type Patch = Record<number, SectionPatch> & { meta?: MetaPatch };

type PatchHistory = Patch[];

export type SectionCollapsedPatch = {
  text: string | null;
  endParagraph: boolean | null;
  edited: boolean | null;
}
export type SectionCollapsedPatches = Record<number, Partial<SectionCollapsedPatch>>;

export type MetaCollapsedPatch = {
  commaSilence?: number | null;
  periodSilence?: number | null;
  paragraphSilence?: number | null;
}

export class DbListener {
  private readonly patchHistory: PatchHistory = [];
  private readonly sectionPatchStores: Record<number, Writable<SectionCollapsedPatch>> = {};

  private readonly commaSilenceStoreInternal: Writable<number | null> = writable(null);
  private readonly periodSilenceStoreInternal: Writable<number | null> = writable(null);
  private readonly paragraphSilenceStoreInternal: Writable<number | null> = writable(null);

  readonly commaSilenceStore: Readable<number | null> = makeReadonly(this.commaSilenceStoreInternal);
  readonly periodSilenceStore: Readable<number | null> = makeReadonly(this.periodSilenceStoreInternal);
  readonly paragraphSilenceStore: Readable<number | null> = makeReadonly(this.paragraphSilenceStoreInternal);

  private firebaseCursor: number = -1;
  private cursor: number = -1;
  private maxRedoPoint: number = -1;
  
  getCursor(): { current: number; max: number; firebase: number } {
    return {
      current: this.cursor,
      max: this.patchHistory.length - 1,
      firebase: this.firebaseCursor
    };
  }

  private getSectionPatchStoreInternal(idx: number): Writable<SectionCollapsedPatch> {
    let current = this.sectionPatchStores[idx];
    if (!current) {
      current = writable({ text: null, endParagraph: null, edited: null });
      this.sectionPatchStores[idx] = current;
    }
    return current;
  }

  getSectionPatchStore(idx: number): Readable<SectionCollapsedPatch> {
    return {
      subscribe: this.getSectionPatchStoreInternal(idx).subscribe
    }
  }

  private setCursor(newCursor: number) {
    if (isNaN(newCursor)) throw new Error();
    // console.log("Setting cursor to ", newCursor);
    if (newCursor === this.cursor) return;
    if (newCursor > this.cursor) this.applyPatches(this.cursor + 1, newCursor);
    else this.removePatches(this.cursor, newCursor + 1);
    this.cursor = newCursor;
  }

  /**
   * Moves the cursor forwards, applying patches as we move
   * @param from The current cursor
   * @param to The destination cursor. If to < from, noop.
   */
  private applyPatches(from: number, to: number) {
    const collapsedSections: SectionCollapsedPatches = {};
    let collapsedMeta: MetaCollapsedPatch = {};
  
    for (let i = from; i <= to; i++) {
      const patch = getAssertExists(this.patchHistory, i);

      const metaPatch: Partial<MetaPatch["to"]> = patch["meta"]?.to ?? {};
      collapsedMeta = { ...collapsedMeta, ...metaPatch };

      for (const key in patch) {
        if (key === "meta") continue;
        const idx = parseInt(key);
        const sectionPatch = patch[idx] as SectionPatch;
        const sectionCollapsed: Partial<SectionCollapsedPatch> = collapsedSections[idx] ?? {};
        collapsedSections[idx] = {
          ...sectionCollapsed,
          ...sectionPatch.to
        }
      }
    }
  
    this.applyCollapsedPatch(collapsedSections, collapsedMeta);
  }

  /**
   * Moves the cursor backwards, removing patches as we move
   * @param from The current cursor
   * @param to The destination cursor. If to > from, noop.
   */
  private removePatches(from: number, to: number) {
    const collapsedSections: SectionCollapsedPatches = {};
    let collapsedMeta: MetaCollapsedPatch = {};
  
    for (let i = from; i >= to; i--) {
      const patch = getAssertExists(this.patchHistory, i);

      const metaPatch: Partial<MetaPatch["to"]> = patch["meta"]?.from ?? {};
      collapsedMeta = { ...collapsedMeta, ...metaPatch };

      for (const key in patch) {
        if (key === "meta") continue;
        const idx = parseInt(key);
        const sectionPatch = patch[idx] as SectionPatch;
        const sectionCollapsed: Partial<SectionCollapsedPatch> = collapsedSections[idx] ?? {};
        collapsedSections[idx] = {
          ...sectionCollapsed,
          ...sectionPatch.from
        }
      }
    }
  
    this.applyCollapsedPatch(collapsedSections, collapsedMeta);
  }

  private applyCollapsedPatch(collapsedSections: SectionCollapsedPatches, collapsedMeta: MetaCollapsedPatch) {
    forIn(collapsedSections, (sectionIdx, adjustments) => {
      this.getSectionPatchStoreInternal(sectionIdx)
        .update(state => ({
          ...state,
          ...adjustments
        }));
    })

    const { commaSilence, periodSilence, paragraphSilence } = collapsedMeta;
    if (commaSilence !== undefined) this.commaSilenceStoreInternal.set(commaSilence);
    if (periodSilence !== undefined) this.periodSilenceStoreInternal.set(periodSilence);
    if (paragraphSilence !== undefined) this.paragraphSilenceStoreInternal.set(paragraphSilence);
  }

  /**
   * Returns true if the transcript has no patches
   */
  init(): Promise<boolean> {
    const patchCollection = collection(getDb(), "users", assertUser().uid, "transcripts", getTranscriptId(), "patches");
    const q = query(patchCollection);
    return new Promise<boolean>(resolve => {
      onSnapshot(q, snapshot => {
        this.processSnapshot(snapshot);
        resolve(this.patchHistory.length === 0);
      });
    });
  }

  private processSnapshot(snapshot: QuerySnapshot<DocumentData>) {
    const changes = snapshot.docChanges();
    console.log("Received changes from db:", changes);
    if (changes.length === 0) return;

    const newCursor = changes.find(change => change.doc.id === "meta")?.doc?.get("cursor") ?? this.cursor;

    const idChanges: Array<[number, DocumentChange<DocumentData>]> = 
      changes
        .filter(change => change.doc.id !== "meta")
        .map(change => ([parseInt(change.doc.id), change]));
    idChanges.sort(([a], [b]) => a - b);

    console.log("Updating local state based on received snapshot, changes are:", idChanges);
    console.log();

    if (idChanges.length) this.processComplexSnapshot(idChanges, newCursor);

    // Move the cursor to its new location (or back to the old location)
    this.setCursor(newCursor);
    this.firebaseCursor = newCursor;

    // If we've added any patches, don't allow fast-forwarding past now
    this.maxRedoPoint = this.patchHistory.length - 1;
  
  }

  private processComplexSnapshot(idChanges: Array<[number, DocumentChange<DocumentData>]>, newCursor: number) {
    // Ignore the deleted patches, we can infer them
    const modified = idChanges.filter(([_, change]) => change.type === "added" || change.type === "modified");
  
    // The index of the first patch that is different in the old and new history
    // If modified is empty, we only deleted, so take the first deleted index instead
    let firstChanged: number | undefined = undefined;
    if (firstChanged === undefined) firstChanged = modified[0]?.[0];
    if (firstChanged === undefined) firstChanged = idChanges[0]?.[0];
    if (firstChanged === undefined) throw new Error();
  
    // Move the cursor back to the most recent common ancestor of the two timelines
    this.setCursor(firstChanged - 1);
  
    // Replace the old history with the new history
    const newPatches = modified.map(([_, data]) => data.doc.data());
    this.patchHistory.splice(firstChanged, this.patchHistory.length, ...newPatches);
  }

  undo(): boolean {
    if (this.cursor >= 0) {
      this.setCursor(this.cursor - 1);
      return true;
    } else {
      return false;
    }
  }

  redo(): boolean {
    if (this.cursor < this.maxRedoPoint) {
      this.setCursor(this.cursor + 1);
      return true;
    } else {
      return false;
    }
  }

  maxRedoPointNow() {
    this.maxRedoPoint = this.cursor;
  }
}
