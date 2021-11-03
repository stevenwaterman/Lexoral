import { DocumentReference, onSnapshot, setDoc } from "firebase/firestore";
import { derived, Readable, writable } from "svelte/store";

export type FirestoreWritable<T> = Readable<T> & {
  set: (value: Partial<T>) => void;
  update: (updater: (value: T) => Partial<T>) => void;
  sync: () => Promise<void>;
  field: <KEY extends keyof T>(key: KEY) => FirestoreWritableField<T, KEY>;
}

export type FirestoreWritableField<T, KEY extends keyof T> = Readable<T[KEY]> & {
  set: (value: T[KEY]) => void;
  update: (updater: (value: T[KEY]) => T[KEY]) => void;
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

  let current: T;
  subscribe(state => current = state);

  function update(updater: (value: T) => Partial<T>) {
    setPending(updater(current));
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

    function derivedUpdate(updater: (value: VALUE) => VALUE) {
      derivedSet(updater(current[key]));
    }

    return {
      subscribe: derivedStore.subscribe,
      set: derivedSet,
      update: derivedUpdate,
      sync
    }
  };

  return {
    subscribe,
    set: setPending,
    update,
    sync,
    field
  }
}

export type InitableFirebaseWritable<STATE> = {
  init: () => Promise<void>;
  get: () => FirestoreWritable<STATE>;
  getField: <KEY extends keyof STATE>(name: KEY) => FirestoreWritableField<STATE, KEY>;
}

export function initableFirestoreWritable<STATE extends Record<string, any>>(
  storeName: string,
  documentSupplier: () => DocumentReference<STATE>,
  initial: STATE
): InitableFirebaseWritable<STATE> {
  let initialised: boolean = false;

  async function init() {
    if (initialised) throw new Error(`${storeName} store is already initialised`);
    initialised = true;
  
    const document = documentSupplier();
    firestoreWritableInternal = await firestoreWritable<STATE>(document, initial);
  }
  
  let firestoreWritableInternal: FirestoreWritable<STATE> | undefined = undefined;
  const fieldStores: Partial<Record<keyof STATE, any>> = {};
  
  function get() {
    if (firestoreWritableInternal === undefined) throw new Error(`${storeName} store is not initialised`);
    return firestoreWritableInternal;
  }
  
  function getField<KEY extends keyof STATE>(name: KEY): FirestoreWritableField<STATE, KEY> {
    const existing = fieldStores[name];
    if (existing !== undefined) return existing as FirestoreWritableField<STATE, KEY>;
  
    const store = get().field(name);
    fieldStores[name] = store;
    return store;
  }
  
  return {
    init,
    get,
    getField
  }
}
