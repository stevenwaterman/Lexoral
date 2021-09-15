import { allSectionsStore, Section, SectionStore } from "./textState";
import { deriveUnwrapRecord } from "../utils/stores";
import { Writable, writable } from "svelte/store";
import { SectionMutator } from "./storeMutators";
import { sendToast } from "../display/toast/toasts";

let state: Partial<Record<number, Section>> = {};
deriveUnwrapRecord<number, Section, SectionStore>(allSectionsStore).subscribe(sections => state = sections);

export const autoSaveIntervalStore: Writable<number | undefined> = writable(undefined);

let timer: NodeJS.Timer | undefined = undefined;

export type SectionPatch = {
  idx: number;
  text?: string;
  edited?: true;
  endParagraph?: true;
}

autoSaveIntervalStore.subscribe(interval => {
  if (timer !== undefined) clearInterval(timer);
  if (interval === undefined) return;

  timer = setInterval(() => {
    save();
  }, interval * 1000);
})

export function loadSave() {
  const autoSave = localStorage.getItem("save");
  if (autoSave === null) return;
  const patches: SectionPatch[] = JSON.parse(autoSave);
  patches.forEach(patch => {
    SectionMutator.ofIdx(patch.idx)?.applyPatch(patch)
  })
  console.log("Loaded")
}

export function save() {
  const simplifiedState = Object.values(state)
    .map(section => {
      if (!section) return undefined;
      const simplified: SectionPatch = { idx: section.idx };
      if (section.text.length) simplified.text = section.text;
      if (section.edited) simplified.edited = section.edited;
      if (section.endParagraph) simplified.endParagraph = section.endParagraph;

      if (section.text.length || section.edited || section.endParagraph) return simplified;
      else return undefined;
    });
  const definedState = (simplifiedState.filter(state => state !== undefined) as SectionPatch[]);
  localStorage.setItem("save", JSON.stringify(definedState))
  sendToast("Saved")
}