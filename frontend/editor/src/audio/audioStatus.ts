import { writable, Writable } from "svelte/store";

export const playingStore: Writable<boolean> = writable(false);