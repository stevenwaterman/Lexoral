import { DocumentReference, onSnapshot, setDoc } from "firebase/firestore";
import { get_store_value, init } from "svelte/internal";
import { derived, Readable, Subscriber, Unsubscriber, Writable, writable } from "svelte/store";
import { isDemo } from "../demo";

export class FirestoreWritable<T extends Record<string, any>> implements Readable<T> {
  private connection: "NONE" | "PENDING" | "READY" = "NONE";

  private readonly dbStore: Writable<T>;
  private readonly pendingStore: Writable<Partial<T>>;
  private readonly exposedStore: Readable<T>;

  public current: T;

  constructor(
    private readonly documentSupplier: () => DocumentReference<T>,
    private readonly initial: T,
    private readonly debounceDelayMs: number = 1000
  ) {
    this.dbStore = writable(initial);
    this.pendingStore = writable({});
    this.exposedStore = derived(
      [this.dbStore, this.pendingStore], 
      ([dbState, pendingState]) => ({ ...dbState, ...pendingState })
    );

    this.current = initial;
    this.exposedStore.subscribe(state => this.current = state);
  }

  subscribe(run: Subscriber<T>, invalidate?: (value?: T) => void): Unsubscriber {
    return this.exposedStore.subscribe(run, invalidate);
  }

  async connect() {
    if (isDemo()) {
      this.connection = "READY";
      return;
    }

    if (this.connection !== "NONE") throw new Error("Already connected");
    this.connection = "PENDING";

    return new Promise<void>(async (resolve) => {
      onSnapshot(this.documentSupplier(), snapshot => {
        const data = snapshot.data();
        if (data !== undefined) this.dbStore.set({ ...this.initial, ...data });
      });

      await this.sync();
      this.connection = "READY";
      resolve();
    });
  }
  
  async sync(): Promise<void> {
    const pendingState = get_store_value(this.pendingStore);
    await setDoc(this.documentSupplier(), pendingState as any, { merge: true });
    this.pendingStore.set({});
  }

  private timer: NodeJS.Timeout | undefined = undefined;

  patch(value: Partial<T>) {
    this.pendingStore.update(oldState => ({...oldState, ...value}));

    if (this.timer !== undefined) clearTimeout(this.timer);
    this.timer = setTimeout(() => this.sync(), this.debounceDelayMs);
  }

  update(updater: (value: T) => Partial<T>) {
    const newValue = updater(this.current);
    this.patch(newValue);
  }

  getField<K extends keyof T>(key: K): FirestoreWritableField<T, K> {
    return new FirestoreWritableField<T, K>(this, key);
  }
}

class FirestoreWritableField<T extends Record<string, any>, K extends keyof T> implements Writable<T[K]> {
  private readonly derivedStore: Readable<T[K]>;

  constructor(
    private readonly parent: FirestoreWritable<T>,
    private readonly key: K
  ) {
    this.derivedStore = derived(this.parent, parentValue => parentValue[key]);
  }

  subscribe(run: Subscriber<T[K]>, invalidate?: (value?: T[K]) => void): Unsubscriber {
    return this.derivedStore.subscribe(run, invalidate);
  }

  set(value: T[K]) {
    const patch: Partial<T> = {};
    patch[this.key] = value;
    this.parent.patch(patch);
  }

  update(updater: (value: T[K]) => T[K]) {
    const newValue = updater(this.parent.current[this.key]);
    this.set(newValue);
  }

  async sync() {
    return this.parent.sync();
  }
}
