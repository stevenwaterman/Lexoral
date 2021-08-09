import { Readable, derived } from "svelte/store";

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
  equality: (last: T, next: T) => boolean = (a, b) => (a === b)
): Readable<T> {
  let lastValue: T = initial;
  const actualFunc = (stores: StoresValues<S>, set: (value: T) => void) => {
    const nextValue = func(stores);
    if (!equality(lastValue, nextValue)) {
      lastValue = nextValue;
      set(nextValue);
    }
  };
  return derived(stores, actualFunc, initial);
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