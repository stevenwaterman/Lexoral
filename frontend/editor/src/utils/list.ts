/**
 * Modulo (dividend % divisor) that makes negative numbers positive
 * 
 * Ex: modulo(3, 5) === 3
 * Ex: modulo(8, 5) === 3
 * Ex: modulo(-1, 5) === 4
 * Ex: modulo(-6, 5) === 4
 * 
 * Useful for list indexing where you want wraparound behaviour and negative indexing to index backwards relative to the list end
 */
export function modulo(dividend: number, divisor: number): number {
  return ((dividend % divisor) + divisor) % divisor;
}

/**
 * Get the specified element from the list, with wraparound behaviour and negative indexing.
 * 
 * Returns undefined iff `list` is empty
 * 
 * Ex: moduloGet([], 5) === undefined
 * 
 * Ex: const list = ["a", "b", "c"];
 * Ex: moduloGet(list, 1) === "b"
 * Ex: moduloGet(list, 5) === "c"
 * Ex: moduloGet(list, -1) === "c"
 * Ex: moduloGet(list, -5) === "b"
 */
export function moduloGet<T>(list: T[], idx: number): T | undefined {
  if (list.length === 0) return undefined;
  return list[modulo(idx, list.length)];
}

/**
 * Clamp the value between the min and max numbers
 * 
 * Ex: clamp(3, 1, 5) === 3
 * Ex: clamp(0, 1, 5) === 1
 * Ex: clamp(-5, 1, 5) === 1
 * Ex: clamp(5, 1, 5) === 5
 * Ex: clamp(10, 1, 5) === 5
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Get the specified element from the list, or the first/last one if requested index is out of range
 * 
 * Returns undefined iff `list` is empty
 * 
 * Ex: clampGet([], 5) === undefined
 * 
 * Ex: const list = ["a", "b", "c"];
 * Ex: clampGet(list, 1) === "b"
 * Ex: clampGet(list, 5) === "c"
 * Ex: clampGet(list, -1) === "a"
 * Ex: clampGet(list, -5) === "a"
 */
export function clampGet<T>(list: T[], idx: number): T | undefined {
  if (list.length === 0) return undefined;
  const clampedIdx = clamp(idx, 0, list.length - 1);
  return list[clampedIdx];
}

// export function clampGetRecord<V>(record: Record<number, V>, idx: number): V | undefined {
//   const keys = Object.keys(record).map(key => parseInt(key));
//   const minKey = Math.min(...keys);
//   const maxKey = Math.max(...keys);
//   const clampedKey = clamp(idx, minKey, maxKey);

//   let i = clampedKey;
//   while (!(i in record)) i++;
//   return record[i];
// }

export function getAssertExists<T>(list: T[], idx: number): T {
  const elem = list[idx];
  if (elem === undefined) {
    debugger
    throw new Error(`Idx ${idx} did not exist in list ${list}, asserted that it did`);
  }
  return elem;
}

export function getAssertExistsRecord<K extends string | number | symbol, V>(record: Record<K, V>, key: K): V {
  const elem = record[key];
  if (elem === undefined) {
    debugger
    throw new Error(`Idx ${key} did not exist in list ${record}, asserted that it did`);
  }
  return elem;
}

export function forIn<V>(record: Record<number, V>, func: (key: number, value: V) => void): void {
  for (const key in record) {
    const idx = parseInt(key);
    func(idx, record[idx] as V);
  }
}