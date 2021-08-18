import { Readable, derived, writable, Writable } from "svelte/store";

/**
 * Modulo that makes negative numbers positive
 */
export function modulo(a: number, b: number) {
  return ((a % b) + b) % b;
}

export function moduloGet<T>(list: T[], idx: number): T | undefined {
  if (list.length === 0) return undefined;
  return list[modulo(idx, list.length)];
}


type Stores = Readable<any> | [Readable<any>, ...Array<Readable<any>>];
type StoresValues<T> = T extends Readable<infer U> ? U : {
  [K in keyof T]: T[K] extends Readable<infer U> ? U : never;
};
export function maybeDerived<S extends Stores, T>(
  stores: S,
  initial: T,
  func: (values: StoresValues<S>) => T,
  update: (last: T, next: T) => boolean = (a, b) => (a !== b)
): Readable<T> {
  let lastValue: T = initial;
  const actualFunc = (stores: StoresValues<S>, set: (value: T) => void) => {
    const nextValue = func(stores);
    if (update(lastValue, nextValue)) {
      lastValue = nextValue;
      set(nextValue);
    }
  };
  return derived(stores, actualFunc, initial);
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

export function lastNonNullDerived<T>(
  stores: Readable<T | null>,
  initial: T
): Readable<T> {
  let lastValue: T = initial;
  const actualFunc = (value: T, set: (value: T) => void) => {
    if (value === null) set(lastValue);
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
  const timers: NodeJS.Timeout[] = [];
  timers.push(
    setTimeout(() => {
      callback();
      if (latterDuration !== undefined) {
        timers.push(setInterval(callback, latterDuration * 1000));
      }
    }, firstDuration * 1000));
  return () => timers.forEach(clearTimeout);
}

// export function paragraphBounds(sections: Output, idx: number): { startIdx: number; endIdx: number } | null {
//   if (idx < 0) return null;
//   if (idx >= sections.length) return null;

//   let startIdx: number | null = null;
//   let endIdx: number | null = null;

//   for (let i = idx; i >= 0 && i < sections.length; i--) {
//     const section = sections[i];
//     if (section.startParagraph) {
//       startIdx = i;
//       break;
//     }
//   }

//   for (let i = idx + 1; i >= 0 && i < sections.length; i++) {
//     const section = sections[i];
//     if (section.startParagraph) {
//       endIdx = i - 1;
//       break;
//     }
//   }

//   if (startIdx === null) {
//     console.log("StartIdx is null - this should never happen");
//     startIdx = sections.length - 1;
//   }

//   if (endIdx === null) {
//     endIdx = sections.length - 1;
//   }
  
//   return { startIdx, endIdx };
// }

export function unwrapStore<T, INNER extends Readable<T | null>>(store_2: Readable<INNER | null>, equality: (a: T, b: T) => boolean = (a, b) => a === b): Readable<T | null> {
  let value: T | null = null;
  const output: Writable<T | null> = writable(null);
  let unsubscribe: () => void = () => { };
  store_2.subscribe((store: INNER | null) => {
    unsubscribe();
    if (store !== null) {
      unsubscribe = store.subscribe((state: T | null) => {
        if (
          (value === null && state !== null) ||
          (value !== null && state === null) ||
          (value !== null && state !== null && !equality(value, state))
        ) {
          value = state;
          output.set(state);
        }
      })
    } else {
      unsubscribe = () => { };
      value = null;
      output.set(null);
    }
  });
  return output;
}


