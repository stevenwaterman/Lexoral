import { DocumentReference, onSnapshot, setDoc } from "firebase/firestore";
import { derived, Readable, writable } from "svelte/store";

export type FirestoreWritable<T> = Readable<T> & {
  set: (value: Partial<T>) => void;
  sync: () => Promise<void>;
  field: <KEY extends keyof T>(key: KEY) => FirestoreWritableField<T, KEY>;
}

export type FirestoreWritableField<T, KEY extends keyof T> = Readable<T[KEY]> & {
  set: (value: T[KEY]) => void;
  sync: () => Promise<void>;
}

export async function firestoreWritable<T extends Record<string, any>>(
  document: DocumentReference<T>,
  initial: T,
  debounceDelay: number = 1
): Promise<FirestoreWritable<T>> {
  const dbStore = writable<T>(initial);

  let pendingState: Partial<T> = {};
  const pendingStore = writable<Partial<T>>(pendingState);

  const { subscribe } = derived(
    [dbStore, pendingStore], 
    ([dbState, pendingState]) => {
    return {
      ...dbState,
      ...pendingState
    };
  });

  onSnapshot(document, snapshot => {
    const data = snapshot.data();
    if (data !== undefined) dbStore.set({ ...initial, ...data });
  });


  async function sync(): Promise<void> {
    await setDoc(document, pendingState as any, { merge: true });
    pendingState = {};
    pendingStore.set({});
  }


  let timer: NodeJS.Timeout | undefined = undefined;

  function setPending(value: Partial<T>) {
    pendingState = value;
    pendingStore.update(oldState => ({...oldState, ...value}));

    if (timer !== undefined) clearTimeout(timer);
    timer = setTimeout(sync, debounceDelay);
  }

  window.onbeforeunload = () => {
    if (timer !== undefined) clearTimeout(timer);
    sync();
    return null;
  }

  function field<KEY extends keyof T>(key: KEY): FirestoreWritableField<T, KEY> {
    type VALUE = T[KEY];
    const derivedStore: Readable<VALUE> = derived({subscribe}, state => state[key]);
    const derivedSet = (value: VALUE) => {
      const patch: Partial<T> = {};
      patch[key] = value;
      setPending(patch);
    };
    return {
      subscribe: derivedStore.subscribe,
      set: derivedSet,
      sync
    }
  };

  return {
    subscribe,
    set: setPending,
    sync,
    field
  }
}
