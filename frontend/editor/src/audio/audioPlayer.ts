import { loopStore } from "./audioController";
import { playingStore } from "./audioStatus";
import { getSelectionTimings } from "./audioTimings";

let player: HTMLAudioElement;

export function initAudio(src: string) {
  player = document.createElement("audio");
  player.controls = true;
  player.style.zIndex = "2";
  player.style.position = "fixed";
  document.body.prepend(player);
  player.src = src;

  player.onplay = () => playingStore.set(true);
  player.onpause = () => playingStore.set(false);
  // player.ontimeupdate = onTimeUpdate;
}

let startTime: number;
let endTime: number;

let loop: boolean;
loopStore.subscribe(state => loop = state);

export async function playAudio() {
  player.pause();

  const timings = getSelectionTimings();
  if (timings === null) return;

  player.currentTime = timings.start;
  startTime = timings.start;
  endTime = timings.end;

  await player.play();
}

export function stopAudio() {
  player.pause();
}



function onTimeUpdate() {
  const time = player.currentTime;
  console.log(startTime, time, endTime);

  if (time < endTime) return;

  if (loop) {
    player.currentTime = startTime;
  } else {
    player.pause();
  }
}