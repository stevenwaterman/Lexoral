import { Readable, derived, writable, Writable } from "svelte/store";
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

export function unwrapStore<T, INNER extends Readable<T | undefined>>(store_2: Readable<INNER | undefined>, equality: (a: T, b: T) => boolean = (a, b) => a === b): Readable<T | undefined> {
  let value: T | undefined = undefined;
  const output: Writable<T | undefined> = writable(undefined);
  let unsubscribe: () => void = () => { };
  store_2.subscribe((store: INNER | undefined) => {
    unsubscribe();
    if (store !== undefined) {
      unsubscribe = store.subscribe((state: T | undefined) => {
        if (
          (value === undefined && state !== undefined) ||
          (value !== undefined && state === undefined) ||
          (value !== undefined && state !== undefined && !equality(value, state))
        ) {
          value = state;
          output.set(state);
        }
      })
    } else {
      unsubscribe = () => { };
      value = undefined;
      output.set(undefined);
    }
  });
  return output;
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
