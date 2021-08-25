import { Readable, derived, writable, Writable, Unsubscriber } from "svelte/store";

/**
 * Modulo that makes negative numbers positive
 */
export function modulo(a: number, b: number): number {
  return ((a % b) + b) % b;
}

export function moduloGet<T>(list: T[], idx: number): T | undefined {
  if (list.length === 0) return undefined;
  return list[modulo(idx, list.length)];
}


type Stores = Readable<any> | [Readable<any>, ...Array<Readable<any>>];
export type StoreValues<T> = T extends Readable<infer U> ? U : {
  [K in keyof T]: T[K] extends Readable<infer U> ? U : never;
};
export function maybeDerived<S extends Stores, T>(
  stores: S,
  initial: T,
  func: (values: StoreValues<S>) => T,
  update: (last: {inputs: StoreValues<S>; output: T}, next: {inputs: StoreValues<S>; output: T}) => boolean = (a, b) => (a.output !== b.output)
): Readable<T> {
  let lastInput: StoreValues<S> | undefined = undefined;
  let lastOutput: T = initial;
  const actualFunc = (stores: StoreValues<S>, set: (value: T) => void) => {
    const nextOutput = func(stores);
    if (lastInput === undefined || update({inputs: lastInput, output: lastOutput}, {inputs: stores, output: nextOutput})) {
      lastOutput = nextOutput;
      set(nextOutput);
    }
    lastInput = stores;
  };
  return derived(stores, actualFunc, initial);
}

export function zipWithLast<T>(
  store: Readable<T>
): Readable<{last?: T; current: T}> {
  let last: T | undefined = undefined;
  return derived(store, current => {
    const value = { last, current };
    last = current;
    return value;
  })
}

export function debounce<T>(
  store: Readable<T>,
  delay: number,
): Readable<T> {
  let timeout: NodeJS.Timeout | undefined = undefined;
  return derived(store, (state, set) => {
    if (timeout !== undefined) clearTimeout(timeout);
    timeout = setTimeout(() => {
      set(state);
    }, delay * 1000)
  })
}

export function maybeWritable<T>(
  initial: T,
  update: (last: T, next: T) => boolean = (a, b) => (a !== b)
): Writable<T> {
  let lastValue: T = initial;
  const internalStore: Writable<T> = writable(initial);

  const storeSetFunc: (typeof internalStore)["set"] = newValue => {
    if (update(lastValue, newValue)) {
      lastValue = newValue;
      internalStore.set(newValue);
    }
  }

  return {
    subscribe: internalStore.subscribe,
    set: storeSetFunc,
    update: func => storeSetFunc(func(lastValue))
  }
}

export function deriveLastDefined<T>(
  stores: Readable<T | undefined>,
  initial: T
): Readable<T> {
  let lastValue: T = initial;
  const actualFunc = (value: T | undefined, set: (value: T) => void) => {
    if (value === undefined) set(lastValue);
    else {
      lastValue = value;
      set(value);
    }
  };
  return derived(stores, actualFunc, initial);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function clampGet<T>(list: T[], idx: number): T | undefined {
  if (list.length === 0) return undefined;
  const clampedIdx = clamp(idx, 0, list.length - 1);
  return list[clampedIdx];
}

export function setOffsetInterval(callback: () => void, firstDuration: number, latterDuration?: number): () => void {
  const timeouts: NodeJS.Timeout[] = [];
  const intervals: NodeJS.Timer[] = [];
  timeouts.push(
    setTimeout(() => {
      callback();
      if (latterDuration !== undefined) {
        intervals.push(setInterval(callback, latterDuration * 1000));
      }
    }, firstDuration * 1000));
  return () => {
    timeouts.forEach(timer => clearTimeout(timer));
    intervals.forEach(interval => clearInterval(interval));
  }
}

export function unwrapStore<T, INNER extends Readable<T | undefined>>(store_2: Readable<INNER | undefined>): Readable<T | undefined> {
  let unsubscribe: () => void = () => { };

  return derived(store_2, (store, set) => {
    unsubscribe();

    if (store === undefined) {
      unsubscribe = () => {};
      set(undefined);
      return;
    }

    unsubscribe = store.subscribe(set);
  });
}

export function unwrapRecordStore<K extends string | number | symbol, V, INNER extends Readable<V | undefined>>(
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

export function siblingIdx(node: Element): number {
  let i = 0;
  let sib = node.previousElementSibling;
  while (sib !== null) {
    sib = sib.previousElementSibling;
    i++;
  }
  return i;
}
