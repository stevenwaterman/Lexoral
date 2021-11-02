import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const fontSizeStore: Writable<number> = writable(12);
export const pageWidthStore: Writable<number> = writable(80);
