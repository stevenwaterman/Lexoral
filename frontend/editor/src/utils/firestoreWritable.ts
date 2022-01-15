import { DocumentReference, onSnapshot, setDoc } from "firebase/firestore";
import { get_store_value } from "svelte/internal";
import { derived, Readable, Writable, writable } from "svelte/store";

/**
 * Creates a two-way binding to a firestore document. Any changes are persisted after `debounceDelayMs` milliseconds of no further changes.
 * This is done to reduce the number of writes to firestore, as otherwise when someone slides a volume slider we'd be doing 60 writes per second.
 * 
 * You must call connect() in order to bind to firestore - until you do that it's just a normal svelte store.
 */
export class FirestoreWritable<T extends Record<string, any>> implements Readable<T> {
  constructor(
    private readonly documentSupplier: () => DocumentReference<T>,
    private readonly initial: T,
    private readonly debounceDelayMs: number = 1000
  ) {}

  /**
   * Whether the store is currently being synchronised with the remote state (ie firebase)
   * Call connect() to start synchronising
   */
  private connected = false;

  /**
   * Store representing the state that is currently in firestore
   * For internal use - writing to this store does not update firestore
   * Instead, update `patchStore` and then call `push` (or call `patch`)
   */
  private readonly remoteStore: Writable<T> = writable(this.initial);

  /**
   * The changes that have been made locally and have not (yet) been pushed to firestore
   */
  private readonly stageStore: Writable<Partial<T>> = writable({});

  /**
   * Store representing the state that is currently known to this pc
   * Essentially, the remote state, overridden by any staged data
   */
  private readonly localStore: Readable<T> = derived([this.remoteStore, this.stageStore], ([remote, stage]) => ({...remote, ...stage}));

  /**
   * This class is a svelte store, so you can subscribe to it.
   * It returns the combined data - ie `localStore`
   */
  public readonly subscribe: Readable<T>["subscribe"] = this.localStore.subscribe;

  /**
   * Connect the store to the remote state (firestore), sychronising in both directions
   * You must have called `initializeApp` first
   * 
   * Calling multiple times results in an error
   */
  connect() {
    if (this.connected) throw new Error("Already connected");
    this.connected = true;

    onSnapshot(this.documentSupplier(), snapshot => {
      const data = snapshot.data();
      if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
    });

    let timer: NodeJS.Timeout | undefined = undefined;
    this.stageStore.subscribe(stageState => {
      if (timer !== undefined) clearTimeout(timer);
      if (stageState === {}) return;
      timer = setTimeout(() => this.push(stageState), this.debounceDelayMs);
    })
  }
  
  /**
   * Push any changes that are only stored locally to firestore
   * This is usually called automatically, but can be called manually to force-save, for example if you are about to exit
   * 
   * Pass in the current value of stageStore, if you have access to it - it's faster.
   * If not, we'll get it for you, but it's a bit slower so don't do that on hot code paths
   */
  async push(stageState?: Partial<T>): Promise<void> {
    if (stageState === undefined) stageState = get_store_value(this.stageStore);
    await setDoc(this.documentSupplier(), stageState as any, { merge: true });
    this.stageStore.set({});
  }

  /**
   * Make changes to the store
   * The provided patch is used keywise as overrides to the current local state
   * After a certain period (specified by `debounceDelayMs` on creation) of no commits, your changes are pushed to the remote state
   * 
   * @param patch The changes to make to the store
   */
  commit(patch: Partial<T>) {
    this.stageStore.update(state => ({...state, ...patch}));
  }

  /**
   * Cache the created `FirestoreWritableField`s to return later if `getField` is called again
   */
  private readonly fields: Partial<Record<keyof T, FirestoreWritableField<T, keyof T>>> = {};

  /**
   * Return a `Writable` store for a given field on the document
   * This is useful for `input` element two-way bindings, since the parent `FirestoreWritable` is always a json object
   * 
   * Essentially call this to get a two-way binding to a field on the firestore document
   * 
   * @param key The name of the field you want to bind to
   * @returns A writable svelte store that automatically synchronises two-ways with firestore, including a debounce cache to minimise firestore writes
   */
  getField<K extends keyof T>(key: K): FirestoreWritableField<T, K> {
    if(!(key in this.fields)) this.fields[key] = new FirestoreWritableField(this, key);
    return this.fields[key] as FirestoreWritableField<T, K>;
  }
}

/**
 * Extracts one fields from the document managed by the parent, and creates a writable store that two-way binds to that field in firestore
 * 
 * Has the same debounce caching layer as the parent
 */
class FirestoreWritableField<T extends Record<string, any>, K extends keyof T> implements Writable<T[K]> {
  constructor(
    private readonly parent: FirestoreWritable<T>,
    private readonly key: K
  ) {}

  private readonly derivedStore: Readable<T[K]> = derived(this.parent, parentValue => parentValue[this.key]);
  public readonly subscribe = this.derivedStore.subscribe;
  public readonly push = this.parent.push;

  set(value: T[K]) {
    const patch: Partial<T> = {};
    patch[this.key] = value;
    this.parent.commit(patch);
  }

  update(updater: (value: T[K]) => T[K]) {
    const oldValue = get_store_value(this.derivedStore);
    this.set(updater(oldValue));
  }
}
