import { Writable, writable } from "svelte/store";

export const commaTimeStore: Writable<number> = writable(150);
export const periodTimeStore: Writable<number> = writable(250);
export const paragraphTimeStore: Writable<number> = writable(500);
