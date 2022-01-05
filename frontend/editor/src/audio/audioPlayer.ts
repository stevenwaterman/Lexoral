import { get_store_value } from "svelte/internal";
import { derived } from "svelte/store";
import { earlySectionIdxStore, lateSectionIdxStore } from "../input/selectionState";
import { audioStore, AudioStyle } from "../state/settings/audioStore";
import { deriveSyncedWithTick } from "../utils/stores";
import { audioDurationStore, currentTimeStore, playingStore } from "./audioStatus";
import { selectionTimingsStore } from "./audioTimings";

let initialised = false;
let player: HTMLAudioElement;

let startTime: number;
let endTime: number;

let loop: boolean;
let autoPlay: boolean;

export function initAudio(src: string) {
  player = document.createElement("audio");
  player.src = src;

  player.onplay = () => playingStore.set(true);
  player.onpause = () => playingStore.set(false);
  player.ondurationchange = () => audioDurationStore.set(player.duration)

  audioStore.getField("volume").subscribe(volume => player.volume = volume / 100);
  audioStore.getField("rate").subscribe(rate => player.playbackRate = rate / 100);

  audioStore.getField("loop").subscribe(state => loop = state);
  audioStore.getField("autoPlay").subscribe(state => autoPlay = state);

  initialised = true;
}

export async function playAudio() {
  if (!initialised) throw new Error("Trying to play the audio before it has been initialised");

  player.pause();

  const timings = get_store_value(selectionTimingsStore);
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
  if (!initialised) throw new Error("Trying to play the audio before it has been initialised");
  player.pause();
}

export async function toggleAudio() {
  if (!initialised) throw new Error("Trying to play the audio before it has been initialised");
  if (player.paused) return playAudio();
  else return stopAudio();
}


function onTimeUpdate() {
  if (player.paused) {
    return;
  }

  const time = player.currentTime;

  if (time < endTime) {
    currentTimeStore.set(time);
  } else if (loop) {
    player.currentTime = startTime;
    currentTimeStore.set(startTime);
  } else {
    player.pause();
  }

  requestAnimationFrame(onTimeUpdate);
}

deriveSyncedWithTick(
  derived([earlySectionIdxStore, lateSectionIdxStore], values => values),
).subscribe(() => {
  if (!initialised) return;
  if (autoPlay) playAudio();
  else stopAudio();
});
