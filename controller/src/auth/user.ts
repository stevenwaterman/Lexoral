import { browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence, User } from "firebase/auth";
import { Readable, Writable, writable } from "svelte/store";

const internalUserStore: Writable<User | null> = writable(null);
export const userStore: Readable<User | null> = { subscribe: internalUserStore.subscribe };
export function initUserStore() {
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence);
  onAuthStateChanged(auth, user => internalUserStore.set(user));
}
