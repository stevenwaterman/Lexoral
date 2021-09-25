import { browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence, User } from "firebase/auth";
import { Readable, Writable, writable } from "svelte/store";

const internalUserStore: Writable<User | null | undefined> = writable(undefined);
export const userStore: Readable<User | null | undefined> = { subscribe: internalUserStore.subscribe };
export function initUserStore() {
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence);
  onAuthStateChanged(auth, user => internalUserStore.set(user));
}

userStore.subscribe(user => {
  console.log("User:", user)
})
