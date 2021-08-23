import * as Tone from "tone";
import { writable, Writable } from "svelte/store";
import { playingSectionsStore } from "./selectionStores";
import type { SectionState } from "./sectionStores";
import { setOffsetInterval, maybeDerived } from "./utils";

/**
 * The sections that you can currently hear
 */
export const activelyPlayingSectionsStore: Writable<Record<number, boolean>> = writable({});
function setPlaying(section: SectionState) {
  // console.log(section.idx, "playing")
  activelyPlayingSectionsStore.update(state => {
    state[section.idx] = true;
    return state;
  })
}
function setNotPlaying(section: SectionState) {
  // console.log(section.idx, "stopped")
  activelyPlayingSectionsStore.update(state => {
    state[section.idx] = false;
    return state;
  })
}

function resetPlaying() {
  activelyPlayingSectionsStore.set({});
}

const player = new Tone.Player().toDestination();
player.onstop = () => {
  // TODO there's a couple of frames of delay here before this gets invoked
  
};

let loaded = false;
new Tone.ToneAudioBuffer("/assets/audio.mp3", buffer => {
  loaded = true;
  player.buffer = buffer;
});

let playing: boolean = false;
export const playingStore: Writable<boolean> = writable(playing);
playingStore.subscribe(value => { playing = value });

let cancelTimers: () => void = () => {};

function play(sections: SectionState[], loop: boolean) {
  if (!loaded) return; // TODO do something better here
  if (sections.length === 0) return;

  playingStore.set(true);

  const start = sections[0].startTime;
  const end = sections[sections.length - 1].endTime;
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

  sections.forEach(section => {
    const sectionStartOffset = section.startTime - start;
    const sectionEndOffset = section.endTime - start;
    cancellationCallbacks.push(
      setOffsetInterval(() => setPlaying(section), sectionStartOffset, loopLength),
      setOffsetInterval(() => setNotPlaying(section), sectionEndOffset, loopLength)
    );
  })

  cancelTimers = () => {
    // console.log("cancelling")
    cancellationCallbacks.forEach(func => func());
    cancelTimers = () => {};
  }
}

function playPause(sections: SectionState[], loop: boolean) {
  if (playing) player.stop();
  else play(sections, loop)
}

function pause() {
  player.stop();
  playingStore.set(false);
  cancelTimers();
  resetPlaying();
}

playingSectionsStore.subscribe(sections => {
  pause();
  if (sections.length === 0) return;
  play(sections, true);
})
  