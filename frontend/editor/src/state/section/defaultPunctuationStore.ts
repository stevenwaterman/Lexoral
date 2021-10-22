import { Writable, writable } from "svelte/store";

export const commaTimeStore: Writable<number> = writable(0.15);
export const periodTimeStore: Writable<number> = writable(0.25);
export const paragraphTimeStore: Writable<number> = writable(0.5);
