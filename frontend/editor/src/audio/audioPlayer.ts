import { derived, writable, Writable } from "svelte/store";
import { earlySectionIdxStore, lateSectionIdxStore } from "../input/selectionState";
import { audioStore, AudioStyle } from "../state/settings/audioStore";
import { deriveSyncedWithTick } from "../utils/stores";
import { playingStore, updateCurrentlyPlaying } from "./audioStatus";
import { getSelectionTimings } from "./audioTimings";


let initiated = false;
let player: HTMLAudioElement;

let startTime: number;
let endTime: number;

let loop: boolean;
let autoPlay: boolean;
let audioStyle: AudioStyle;

export function initAudio(src: string) {
  player = document.createElement("audio");
  player.src = src;

  player.onplay = () => playingStore.set(true);
  player.onpause = () => playingStore.set(false);

  audioStore.getField("volume").subscribe(volume => player.volume = volume / 100);
  audioStore.getField("rate").subscribe(rate => player.playbackRate = rate / 100);
  audioStore.getField("loop").subscribe(state => loop = state);
  audioStore.getField("autoPlay").subscribe(state => autoPlay = state);
  audioStore.getField("mode").subscribe(state => audioStyle = state);

  initiated = true;
}

export async function playAudio() {
  if (!initiated) return;

  player.pause();

  const timings = getSelectionTimings(audioStyle);
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

deriveSyncedWithTick(
  derived([earlySectionIdxStore, lateSectionIdxStore], values => values),
).subscribe(() => {
  if (autoPlay) playAudio();
  else stopAudio();
});
