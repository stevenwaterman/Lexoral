import { Readable, writable, Writable } from "svelte/store";
import { forIn } from "../../utils/list";
import { makeReadonly } from "../../utils/stores";
import type { MetaCollapsedPatch, MetaPatch, SectionCollapsedPatch, SectionCollapsedPatches, SectionPatch } from "./dbListener";

export type Pending = SectionCollapsedPatches & { meta: MetaCollapsedPatch };

export class PendingPatchState {
  private patchState: "none" | "pending" | "undone" = "none";
  private readonly sectionPatchStores: Record<number, Writable<Partial<SectionCollapsedPatch>>> = {};
  private sectionPatchData: SectionCollapsedPatches = {};

  private commaSilence: number | null | undefined = undefined;
  private readonly commaSilenceStoreInternal: Writable<number | null | undefined> = writable(this.commaSilence);
  public readonly commaSilenceStore: Readable<number | null | undefined> = makeReadonly(this.commaSilenceStoreInternal);

  private periodSilence: number | null | undefined = undefined;
  private readonly periodSilenceStoreInternal: Writable<number | null | undefined> = writable(this.periodSilence);
  public readonly periodSilenceStore: Readable<number | null | undefined> = makeReadonly(this.periodSilenceStoreInternal);

  private paragraphSilence: number | null | undefined = undefined;
  private readonly paragraphSilenceStoreInternal: Writable<number | null | undefined> = writable(this.paragraphSilence);
  public readonly paragraphSilenceStore: Readable<number | null | undefined> = makeReadonly(this.paragraphSilenceStoreInternal);

  private getSectionPatchStoreInternal(idx: number): Writable<Partial<SectionCollapsedPatch>> {
    let current = this.sectionPatchStores[idx];
    if (!current) {
      current = writable({});
      this.sectionPatchStores[idx] = current;
    }
    return current;
  }

  getSectionPatchStore(idx: number): Readable<Partial<SectionCollapsedPatch>> {
    return makeReadonly(this.getSectionPatchStoreInternal(idx));
  }


  getPending(): Pending | undefined {
    if (this.patchState !== "pending") return undefined;

    const output: Pending = { ...this.sectionPatchData, meta: {} };
    if (this.commaSilence !== undefined) output.meta.commaSilence = this.commaSilence;
    if (this.periodSilence !== undefined) output.meta.periodSilence = this.periodSilence;
    if (this.paragraphSilence !== undefined) output.meta.paragraphSilence = this.paragraphSilence;
    return output;
  }

  /**
   * Return value indicates whether anything was changed
   */
  undo(): boolean {
    if (this.patchState === "pending") {
      this.clearStores();
      this.patchState = "undone";
      return true;
    } else {
      return false;
    }
  }

  /**
   * Return value indicates whether anything was changed
   */
  redo(): boolean {
    if (this.patchState === "undone") {
      this.patchState = "pending";
      this.applyStores();
      return true;
    } else {
      return false;
    }
  }

  append(idx: number, sectionPatch: SectionPatch["to"]) {
    if (this.patchState === "pending") {
      const data = {
        ...this.sectionPatchData[idx],
        ...sectionPatch
      }
      this.sectionPatchData[idx] = data;
      this.getSectionPatchStoreInternal(idx).set(data)
    } else {
      this.patchState = "pending";
      this.sectionPatchData[idx] = sectionPatch;
      this.getSectionPatchStoreInternal(idx).set(sectionPatch);
    }
  }

  setCommaSilence(commaSilence: number) {
    this.patchState = "pending";
    this.commaSilence = commaSilence;
    this.commaSilenceStoreInternal.set(commaSilence);
  }

  setPeriodSilence(periodSilence: number) {
    this.patchState = "pending";
    this.periodSilence = periodSilence;
    this.periodSilenceStoreInternal.set(periodSilence);
  }

  setParagraphSilence(paragraphSilence: number) {
    this.patchState = "pending";
    this.paragraphSilence = paragraphSilence;
    this.paragraphSilenceStoreInternal.set(paragraphSilence);
  }

  clear() {
    this.patchState = "none";
    this.clearStores();
    this.sectionPatchData = {};
    this.commaSilence = undefined;
    this.periodSilence = undefined;
    this.paragraphSilence = undefined;
  }

  private clearStores() {
    for(let idx in this.sectionPatchData) {
      this.getSectionPatchStoreInternal(idx as any as number).set({});
    }

    this.commaSilenceStoreInternal.set(undefined);
    this.periodSilenceStoreInternal.set(undefined);
    this.paragraphSilenceStoreInternal.set(undefined);
  }

  private applyStores() {
    forIn(this.sectionPatchData, (idx, data) => {
      this.getSectionPatchStoreInternal(idx).set(data);
    });

    this.commaSilenceStoreInternal.set(this.commaSilence);
    this.periodSilenceStoreInternal.set(this.periodSilence);
    this.paragraphSilenceStoreInternal.set(this.paragraphSilence);
  }
}
