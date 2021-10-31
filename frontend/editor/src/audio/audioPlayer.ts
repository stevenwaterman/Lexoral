import { derived, writable, Writable } from "svelte/store";
import { sendToast } from "../display/toast/toasts";
import { earlySectionIdxStore, lateSectionIdxStore } from "../input/selectionState";
import { deriveDebounced } from "../utils/stores";
import { playingStore, updateCurrentlyPlaying } from "./audioStatus";
import { getSelectionTimings } from "./audioTimings";


let initiated = false;
let player: HTMLAudioElement;

export const loopStore: Writable<boolean> = writable(false);

const volumeStoreInternal: Writable<number> = writable(100);
function decreaseVolume() {
  volumeStoreInternal.update(volume => {
    if (volume <= 5) return 5;
    return volume - 5;
  })
}
function increaseVolume() {
  volumeStoreInternal.update(volume => {
    if (volume >= 100) return 100;
    return volume + 5;
  })
}
export const volumeStore = {
  ...volumeStoreInternal,
  decrease: decreaseVolume,
  increase: increaseVolume
}
deriveDebounced(volumeStore, 0.5).subscribe(volume => sendToast(`Volume: ${volume}%`));


const rateStoreInternal: Writable<number> = writable(100);
function decreaseRate() {
  rateStoreInternal.update(rate => {
    if (rate <= 10) return 10;
    if (rate <= 100) return rate - 10;
    if (rate <= 300) return rate - 25;
    return rate - 100;
  })
}
function increaseRate() {
  rateStoreInternal.update(rate => {
    if (rate >= 500) return 500;
    if (rate >= 300) return rate + 100;
    if (rate >= 100) return rate + 25;
    return rate + 10;
  })
}
export const rateStore = {
  ...rateStoreInternal,
  decrease: decreaseRate,
  increase: increaseRate
}
deriveDebounced(rateStore, 0.5).subscribe(rate => sendToast(`Playback Rate: ${rate}%`));

let startTime: number;
let endTime: number;

let loop: boolean;
loopStore.subscribe(state => loop = state);


export function initAudio(src: string) {
  player = document.createElement("audio");
  player.src = src;

  player.onplay = () => playingStore.set(true);
  player.onpause = () => playingStore.set(false);

  volumeStore.subscribe(volume => player.volume = volume / 100);
  rateStore.subscribe(rate => player.playbackRate = rate / 100);

  initiated = true;
}

export async function playAudio() {
  if (!initiated) return;

  player.pause();

  const timings = getSelectionTimings();
  if (timings === null) return;

  player.currentTime = timings.start;
  startTime = timings.start;
  endTime = timings.end;

  await player.play().catch(reason => {
    console.error("play error: " + reason)
  });

  onTimeUpdate();
}

export function stopAudio() {
  if (!initiated) return;

  player.pause();
}


function onTimeUpdate() {
  if (player.paused) {
    updateCurrentlyPlaying(null);
    return;
  }

  const time = player.currentTime;

  if (time < endTime) {
    updateCurrentlyPlaying(time);
  } else if (loop) {
    player.currentTime = startTime;
    updateCurrentlyPlaying(startTime);
  } else {
    player.pause();
  }

  requestAnimationFrame(onTimeUpdate);
}

let autoPlay: boolean = true;
export const autoPlayStore: Writable<boolean> = writable(autoPlay);
autoPlayStore.subscribe(state => autoPlay = state);

deriveDebounced(
  derived([earlySectionIdxStore, lateSectionIdxStore], values => values),
  0.05
).subscribe(() => {
  if (autoPlay) playAudio();
  else stopAudio();
});
