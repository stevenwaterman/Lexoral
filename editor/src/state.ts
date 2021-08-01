import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const audioStore: Writable<{start: number; end: number;}> = writable({start: 0, end: 0});
