import { loopStore } from "./audioController";
import { initSectionStartEnd, playingStore, updateCurrentlyPlaying } from "./audioStatus";
import { getSelectionTimings } from "./audioTimings";

let player: HTMLAudioElement;

export function initAudio(src: string, timings: Record<number, { startTime: number; endTime: number }>) {
  initSectionStartEnd(timings);

  player = document.createElement("audio");
  player.controls = true;
  player.style.zIndex = "2";
  player.style.position = "fixed";
  document.body.prepend(player);
  player.src = src;

  player.onplay = () => playingStore.set(true);
  player.onpause = () => {
    playingStore.set(false);
    updateCurrentlyPlaying(null);
  }
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
  onTimeUpdate();
}

export function stopAudio() {
  player.pause();
}


function onTimeUpdate() {
  const time = player.currentTime;

  if (time < endTime) {
    updateCurrentlyPlaying(time);
    requestAnimationFrame(onTimeUpdate);
    return;
  }

  if (loop) {
    player.currentTime = startTime;
    updateCurrentlyPlaying(startTime);
    requestAnimationFrame(onTimeUpdate);
    return;
  }

  player.pause();
}
