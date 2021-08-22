import { Readable, derived, writable, Writable, Unsubscriber } from "svelte/store";
import { updateSelection } from "./selectionStores";

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
  update: (last: {inputs: StoresValues<S>; output: T}, next: {inputs: StoresValues<S>; output: T}) => boolean = (a, b) => (a.output !== b.output)
): Readable<T> {
  let lastInput: StoresValues<S> | undefined = undefined;
  let lastOutput: T = initial;
  const actualFunc = (stores: StoresValues<S>, set: (value: T) => void) => {
    const nextOutput = func(stores);
    if (lastInput === undefined || update({inputs: lastInput, output: lastOutput}, {inputs: stores, output: nextOutput})) {
      lastOutput = nextOutput;
      set(nextOutput);
    }
    lastInput = stores;
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

export function lastNonUndefinedDerived<T>(
  stores: Readable<T | undefined>,
  initial: T
): Readable<T> {
  let lastValue: T = initial;
  const actualFunc = (value: T, set: (value: T) => void) => {
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
      const unsubscribe = innerStore.subscribe(innerValue => {
        record[key] = innerValue;
        set(record)
      });
      unsubscribers[key] = unsubscribe;
    });

    keysToUnsubscribe.forEach(key => {
      unsubscribers[key]();
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

export function selectNext(component: HTMLSpanElement) {
  const node: Node = component.nextElementSibling?.firstChild ?? component.parentElement.nextElementSibling?.firstElementChild?.firstChild;
  selectStart(node);
}

export function selectPrev(component: HTMLSpanElement) {
  const node: Node = component.previousElementSibling?.firstChild ?? component.parentElement.previousElementSibling?.lastElementChild?.firstChild;
  selectEnd(node);
}

export function selectParagraphStart(component: HTMLSpanElement) {
  const node: Node = component.parentElement.firstElementChild?.firstChild;
  selectStart(node);
}

export function selectParagraphEnd(component: HTMLSpanElement) {
  const node: Node = component.parentElement.lastElementChild?.firstChild;
  selectEnd(node);
}

export function selectStart(node: Node) {
  if (node) {
    const textNode = node.hasChildNodes() ? node.firstChild : node;
    const range = document.createRange();
    range.setStart(textNode, 1);
    range.setEnd(textNode, 1);

    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    updateSelection();
  }
}

export function selectPosition(node: Node, offset: number) {
  if (node) {
    const textNode = node.hasChildNodes() ? node.firstChild : node;
    const range = document.createRange();
    range.setStart(textNode, offset + 1);
    range.setEnd(textNode, offset + 1);

    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    updateSelection();
  }
}

export function selectEnd(node: Node) {
  if (node) {
    const textNode = node.hasChildNodes() ? node.firstChild : node;
    const range = document.createRange();
    range.setStart(textNode, textNode.textContent.length);
    range.setEnd(textNode, textNode.textContent.length);

    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    updateSelection();
  }
}
