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