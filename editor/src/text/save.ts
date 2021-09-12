import { allSectionsStore, Section, SectionStore } from "./textState";
import { deriveUnwrapRecord } from "../utils/stores";
import { Writable, writable } from "svelte/store";

let state: Partial<Record<number, Section>> = {};
deriveUnwrapRecord<number, Section, SectionStore>(allSectionsStore).subscribe(sections => state = sections);

export const autoSaveIntervalStore: Writable<number | undefined> = writable(undefined);

let timer: NodeJS.Timer | undefined = undefined;

type SimplifiedSection = {
  idx: number;
  text?: string;
  edited?: true;
  endParagraph?: true;
}

autoSaveIntervalStore.subscribe(interval => {
  if (timer !== undefined) clearInterval(timer);
  if (interval === undefined) return;

  timer = setInterval(() => {
    const simplifiedState = (Object.values(state).filter(section => section !== undefined) as Section[])
      .map(({ idx, text, edited, endParagraph }) => {
        const section: SimplifiedSection = {idx};
        if (text.length) section.text = text;
        if (edited) section.edited = edited;
        if (endParagraph) section.endParagraph = endParagraph;
        return section;
      })
    localStorage.setItem("autoSave", JSON.stringify(simplifiedState))
    console.log("AutoSaved")
  }, interval * 1000);
})

