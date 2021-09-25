import { Writable, writable, Readable } from "svelte/store";

type ToastState = {
  idx: number;
  text: string;
}
let toastIdx = 0;

const toastDuration: number = 2.5;
const toastStoreInternal: Writable<ToastState[]> = writable([]);

/** Store containing the toasts currently visible on the screen */
export const toastStore: Readable<ToastState[]> = toastStoreInternal;

/** Display a toast notification on the screen */
export function sendToast(text: string) {
  toastStoreInternal.update(state => {
    state.push({ idx: toastIdx, text });
    return state;
  })

  toastIdx++;

  setTimeout(() => {
    toastStoreInternal.update(state => {
      state.shift();
      return state;
    })
  }, toastDuration * 1000)
}
