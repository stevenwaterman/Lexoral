import { loopStore } from "./audioController";
import { initSectionStartEnd, playingStore, updateCurrentlyPlaying } from "./audioStatus";
import { getSelectionTimings } from "./audioTimings";

let player: HTMLAudioElement;

export function initAudio(src: string, timings: Record<number, { startTime: number; endTime: number }>) {
  initSectionStartEnd(timings);

  player = document.createElement("audio");
  player.src = src;

  player.onplay = () => playingStore.set(true);
  player.onpause = () => playingStore.set(false);
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

  await player.play().catch(reason => {
    console.error("play error: " + reason)
  });

  onTimeUpdate();
}

export function stopAudio() {
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
