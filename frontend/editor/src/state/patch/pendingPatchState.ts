import { Readable, writable, Writable } from "svelte/store";
import { forIn } from "../../utils/list";
import { paragraphLocationsStore } from "../paragraphLocationsStore";
import type { SectionCollapsedPatch, SectionPatch } from "./dbListener";

export class PendingPatchState {
  private patchState: "none" | "pending" | "undone" = "none";
  private readonly sectionPatchStores: Record<number, Writable<Partial<SectionCollapsedPatch>>> = {};
  private sectionPatchData: Record<number, SectionPatch["to"]> = {};

  private getSectionPatchStoreInternal(idx: number): Writable<Partial<SectionCollapsedPatch>> {
    let current = this.sectionPatchStores[idx];
    if (!current) {
      current = writable({});
      this.sectionPatchStores[idx] = current;
    }
    return current;
  }

  getSectionPatchStore(idx: number): Readable<Partial<SectionCollapsedPatch>> {
    return {
      subscribe: this.getSectionPatchStoreInternal(idx).subscribe
    }
  }


  getPending(): Record<number, SectionPatch["to"]> | undefined {
    if (this.patchState === "pending") return this.sectionPatchData;
    else return undefined;
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
      this.sectionPatchData[idx] = {
        ...this.sectionPatchData[idx],
        ...sectionPatch
      }
    } else {
      this.patchState = "pending";
      this.sectionPatchData[idx] = sectionPatch;
    }

    if ("endParagraph" in sectionPatch) {
      paragraphLocationsStore.setEndParagraph(idx, sectionPatch["endParagraph"]);
    }

    this.getSectionPatchStoreInternal(idx).set(sectionPatch);
  }

  clear() {
    this.patchState = "none";
    this.clearStores();
    this.sectionPatchData = {};
  }

  private clearStores() {
    for(let idx in this.sectionPatchData) {
      this.getSectionPatchStoreInternal(idx as any as number).set({});
    }
  }

  private applyStores() {
    forIn(this.sectionPatchData, (idx, data) => {
      this.getSectionPatchStoreInternal(idx).set(data);
    });
  }
}
