import { Writable, writable } from "svelte/store";
import { findSectionNode } from "../../input/select";
import { deriveConditionally } from "../../utils/stores";

type DragState = { anchor: number, focus: number };
const dragStoreInternal: Writable<DragState | undefined> = writable(undefined);

function setAnchor(idx: number) {
  dragStoreInternal.update(state => {
    if (state === undefined) return { anchor: idx, focus: idx };
    else return { anchor: idx, focus: state.focus }
  });
}

function setFocus(idx: number) {
  dragStoreInternal.update(state => {
    if (state === undefined) return { anchor: idx, focus: idx };
    else return { anchor: state.anchor, focus: idx }
  });
}

function clear() {
  dragStoreInternal.set(undefined);
}

const subscribe = deriveConditionally(
  dragStoreInternal, 
  undefined, 
  (a, b) => 
    a?.anchor !== b?.anchor || 
    a?.focus !== b?.focus
).subscribe;

export const dragStore = {
  subscribe,
  setAnchor,
  setFocus,
  clear
};

dragStore.subscribe(state => {
  if (state === undefined) return;
  if (state.anchor === state.focus) return;

  const anchorSpan = findSectionNode(state.anchor);
  const focusSpan = findSectionNode(state.focus);

  const anchorNode = anchorSpan?.firstChild ?? anchorSpan;
  const focusNode = focusSpan?.firstChild ?? focusSpan;
  if (anchorNode === undefined || focusNode === undefined) return;

  const inverted = state.anchor > state.focus;
  const anchorOffset = inverted ? anchorNode.textContent?.length : 0;
  const focusOffset = inverted ? 0 : focusNode.textContent?.length;

  window.getSelection()?.setBaseAndExtent(
    anchorNode,
    anchorOffset ?? 0,
    focusNode,
    focusOffset ?? 0
  );
})


