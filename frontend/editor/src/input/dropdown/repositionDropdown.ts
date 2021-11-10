import { tick } from "svelte";

let watcher: () => void = () => {};

let waiting = false;

/**
 * Call this in `beforeUpdate` on all the components whose change might affect dropdown position
 */
export async function repositionDropdown() {
  if (waiting) return;
  waiting = true;
  await tick();
  watcher();
  waiting = false;
}

export function subscribeToDropdownReposition(cb: () => void) {
  watcher = cb;
}
