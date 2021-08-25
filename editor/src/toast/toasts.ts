import { Writable, writable, Readable } from "svelte/store";

type ToastState = {
  idx: number;
  text: string;
}
let toastIdx = 0;

const toastDuration: number = 2.5;
const toastStoreInternal: Writable<ToastState[]> = writable([]);
export const toastStore: Readable<ToastState[]> = toastStoreInternal;

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
