import { writable, Writable } from "svelte/store";
import { earlySectionIdxStore, lateSectionIdxStore } from "../input/selectionState";
import { ParagraphLocation, paragraphLocationsStore } from "../state/paragraphLocationsStore";
import { clamp } from "../utils/list";

export const loopStore: Writable<boolean> = writable(false);
export const volumeStore: Writable<number> = writable(1);
export const rateStore: Writable<number> = writable(1);
