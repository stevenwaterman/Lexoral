import { Readable, derived, writable, Writable, Unsubscriber } from "svelte/store";

type Stores = Readable<any> | [Readable<any>, ...Array<Readable<any>>];

export type StoreValues<T> = T extends Readable<infer U> ? U : {
  [K in keyof T]: T[K] extends Readable<infer U> ? U : never;
};

/**
 * Derive a new store from an existing store.
 * 
 * The new store outputs the same value as the existing store whenever the `accept` predicate passes.
 * By default, this predicate checks that the new value and current value are inequal, which is used to supress unnecessary updates
 */
export function deriveConditionally<T>(
  baseStore: Readable<T>,
  initialState: T,
  accept: (newState: T, oldState: T) => boolean = (a, b) => a !== b,
): Readable<T> {
  let oldState: T = initialState;
  return derived(baseStore, (newState, set) => {
    if (accept(newState, oldState)) set(newState);
  }, oldState);
}

/**
 * Derive a new store from an existing store.
 * 
 * The new store outputs the last non-null, non-undefined value from the base store.
 */
export function deriveLastDefined<T>(
  baseStore: Readable<T | undefined | null>,
  initialState: T
): Readable<T> {
  return derived(baseStore, (state, set) => {
    if (state !== null && state !== undefined) set(state);
  }, initialState)
}

/**
 * Derive a new store from an existing store.
 * 
 * The new store outputs both the current and previous states from the base store.
 * Until the base store is updated once, the previous state will be `undefined`.
 */
export function deriveWithPrevious<T>(baseStore: Readable<T>): Readable<{last?: T; current: T}> {
  let last: T | undefined = undefined;
  return derived(baseStore, current => {
    const value = { last, current };
    last = current;
    return value;
  })
}

/**
 * Derive a new store from an existing store.
 * 
 * The new store will update to match the base store after `delay` seconds have passed without the base store changing.
 * For example, if `delay` is `0.5` and the base store is updated every 0.2 seconds, the derived store will not update ever.
 * As soon as the base store stays on one value without updating for 0.5 seconds, the derived store will update to match the base store's current state.
 */
export function deriveDebounced<T>(
  baseStore: Readable<T>,
  delay: number,
): Readable<T> {
  let timeout: NodeJS.Timeout | undefined = undefined;
  return derived(baseStore, (state, set) => {
    if (timeout !== undefined) clearTimeout(timeout);
    timeout = setTimeout(() => {
      set(state);
    }, delay * 1000);
  })
}

/**
 * Unwrap a nested store, deriving a store `Readable<T>` from a base store of `Readable<Readable<T>>`
 * 
 * This breaks svelte's automatice DAG resolution and can cause additional updates to happen out of order.
 * All stores will still settle onto the right value eventually, they will just update multiple times.
 * 
 */
export function deriveUnwrap<T>(store_2: Readable<Readable<T> | undefined>): Readable<T | undefined> {
  return derived(store_2, (store, set) => {
    if (store === undefined) {
      set(undefined);
      return;
    }

    return store.subscribe(set);
  });
}

/**
 * Unwrap a store containing a record of indexed stores into a store containing a record of indexed states
 * 
 * Ex: Readable<{ 1: Readable<T>, 2: Readable<T> }> => Readable<{ 1: T, 2: T }>
 * 
 * This breaks svelte's automatice DAG resolution and can cause additional updates to happen out of order.
 * All stores will still settle onto the right value eventually, they will just update multiple times.
 * 
 */
export function deriveUnwrapRecord<K extends string | number | symbol, V, INNER extends Readable<V | undefined>>(
  store_2: Readable<Record<K, INNER>>, 
): Readable<Partial<Record<K, V>>> {
  const unsubscribers: Partial<Record<K, Unsubscriber>> = {};
  const record: Partial<Record<K, V>> = {};
  return derived(store_2, (values: Record<K, INNER>, set: (val: Partial<Record<K, V>>) => void) => {
    const newKeys = Object.keys(values) as K[];
    const oldKeys = Object.keys(record) as K[];

    const keysToSubscribe: K[] = newKeys.filter(newKey => record[newKey] === undefined);
    const keysToUnsubscribe: K[] = oldKeys.filter(oldKey => values[oldKey] === undefined);

    keysToSubscribe.forEach(key => {
      const innerStore: INNER = values[key];
      let firstRun = true;
      const unsubscribe = innerStore.subscribe(innerValue => {
        record[key] = innerValue;
        if (firstRun) {
          firstRun = false;
        } else {
          set(record)
        }
      });
      unsubscribers[key] = unsubscribe;
    });

    keysToUnsubscribe.forEach(key => {
      const unsubscriber = unsubscribers[key];
      if (unsubscriber !== undefined) unsubscriber();
      delete unsubscribers[key];
      delete record[key];
    });
    set(record);
  }, {});
}
