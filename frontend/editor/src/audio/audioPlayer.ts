import { derived, writable, Writable } from "svelte/store";
import { earlySectionIdxStore, lateSectionIdxStore } from "../input/selectionState";
import { deriveDebounced } from "../utils/stores";
import { initSectionStartEnd, playingStore, updateCurrentlyPlaying } from "./audioStatus";
import { getSelectionTimings } from "./audioTimings";


let initiated = false;
let player: HTMLAudioElement;



export const loopStore: Writable<boolean> = writable(false);
export const volumeStore: Writable<number> = writable(1);
export const rateStore: Writable<number> = writable(1);

let startTime: number;
let endTime: number;

let loop: boolean;
loopStore.subscribe(state => loop = state);


export function initAudio(src: string, timings: Record<number, { startTime: number; endTime: number }>) {
  initSectionStartEnd(timings);

  player = document.createElement("audio");
  player.src = src;

  player.onplay = () => playingStore.set(true);
  player.onpause = () => playingStore.set(false);

  volumeStore.subscribe(volume => player.volume = volume);
  rateStore.subscribe(rate => player.playbackRate = rate);

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

export const autoPlayStore: Writable<boolean> = writable(true);
deriveDebounced(
  derived([earlySectionIdxStore, lateSectionIdxStore], values => values),
  0.05
).subscribe(() => playAudio());
