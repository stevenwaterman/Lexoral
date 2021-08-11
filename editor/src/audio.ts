import * as Tone from "tone";
import { writable, Writable } from "svelte/store";
import type { Output, OutputSection } from "./types";
import { navSelectedSectionsStore } from "./state";
import { setOffsetInterval } from "./utils";

export const navPlayingSectionsStore: Writable<Record<number, boolean>> = writable({});
function setPlaying(section: OutputSection) {
  navPlayingSectionsStore.update(state => {
    state[section.idx] = true;
    return state;
  })
}
function setNotPlaying(section: OutputSection) {
  navPlayingSectionsStore.update(state => {
    state[section.idx] = false;
    return state;
  })
}
function resetPlaying() {
  navPlayingSectionsStore.set({});
}

const player = new Tone.Player().toDestination();
player.onstop = () => {
  // TODO there's a couple of frames of delay here before this gets invoked
  playing = false;
  cancelTimers();
  resetPlaying();
};

new Tone.ToneAudioBuffer("/assets/audio.mp3", buffer => player.buffer = buffer);

let playing: boolean = false;
let cancelTimers: () => void = () => {};

function play(loop: boolean) {
  if (navSelectedSections.length === 0) return;

  playing = true;

  const start = navSelectedSections[0].startTime;
  const end = navSelectedSections[navSelectedSections.length - 1].endTime;
  const loopLength = loop ? end - start : undefined;

  player.loopStart = start;
  player.loopEnd = end;
  player.loop = loop;

  if (loop) {
    player.start(undefined, start);
  } else {
    player.start(undefined, start, end - start)
  }

  const cancellationCallbacks: (() => void)[] = [];

  navSelectedSections.forEach(section => {
    const sectionStartOffset = section.startTime - start;
    const sectionEndOffset = section.endTime - start;
    cancellationCallbacks.push(
      setOffsetInterval(() => setPlaying(section), sectionStartOffset, loopLength),
      setOffsetInterval(() => setNotPlaying(section), sectionEndOffset, loopLength)
    );
  })

  cancelTimers = () => {
    cancellationCallbacks.forEach(func => func());
    cancelTimers = () => {};
  }
}

let navSelectedSections: Output;
navSelectedSectionsStore.subscribe(state => {
  navSelectedSections = state;
  player.stop();
})

export function playPause(loop: boolean) {
  if (playing) player.stop();
  else play(loop)
}

export function pause() {
  player.stop();
}
