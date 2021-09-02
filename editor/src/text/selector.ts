export function findSectionNode(idx: number | undefined): HTMLSpanElement | undefined {
  if (idx === undefined) return undefined;
  const queryResult = document.querySelector(`[data-sectionIdx="${idx}"]`) as HTMLSpanElement | null;
  return queryResult ?? undefined;
}
