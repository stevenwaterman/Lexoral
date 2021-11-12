import type { User } from "firebase/auth";
import { Writable, writable } from "svelte/store";

export const userStore: Writable<User | null | undefined> = writable(undefined);
