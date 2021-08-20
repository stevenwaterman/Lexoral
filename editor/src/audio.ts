import * as Tone from "tone";
import { writable, Writable, derived, Readable } from "svelte/store";
import { createSelectionStore, selectionStore } from "./selectionStores";
import { SectionState, documentStore } from "./sectionStores";

// export const playingSectionsStore: Writable<Record<number, boolean>> = writable({});
// function setPlaying(section: SectionState) {
//   playingSectionsStore.update(state => {
//     state[section.idx] = true;
//     return state;
//   })
// }
// function setNotPlaying(section: SectionState) {
//   playingSectionsStore.update(state => {
//     state[section.idx] = false;
//     return state;
//   })
// }

// function resetPlaying() {
//   playingSectionsStore.set({});
// }

const player = new Tone.Player().toDestination();
player.onstop = () => {
  // TODO there's a couple of frames of delay here before this gets invoked
  playingStore.set(false);
  // cancelTimers();
  // resetPlaying();
};

let loaded = false;
new Tone.ToneAudioBuffer("/assets/audio.mp3", buffer => {
  loaded = true;
  player.buffer = buffer;
});

let playing: boolean = false;
export const playingStore: Writable<boolean> = writable(playing);
playingStore.subscribe(value => { playing = value });

// let cancelTimers: () => void = () => {};

function play(start: number, end: number, loop: boolean) {
  if (!loaded) return; // TODO do something better here
  // if (navSelectedSections.length === 0) return;

  playingStore.set(true);

  // const start = navSelectedSections[0].startTime;
  // const end = navSelectedSections[navSelectedSections.length - 1].endTime;
  // const loopLength = loop ? end - start : undefined;

  player.loopStart = start;
  player.loopEnd = end;
  player.loop = loop;

  if (loop) {
    player.start(undefined, start);
  } else {
    player.start(undefined, start, end - start)
  }

  // const cancellationCallbacks: (() => void)[] = [];

  // navSelectedSections.forEach(section => {
  //   const sectionStartOffset = section.startTime - start;
  //   const sectionEndOffset = section.endTime - start;
  //   cancellationCallbacks.push(
  //     setOffsetInterval(() => setPlaying(section), sectionStartOffset, loopLength),
  //     setOffsetInterval(() => setNotPlaying(section), sectionEndOffset, loopLength)
  //   );
  // })

  // cancelTimers = () => {
  //   cancellationCallbacks.forEach(func => func());
  //   cancelTimers = () => {};
  // }
}

export function playPause({start, end}: {start: number; end: number}, loop: boolean) {
  if (playing) player.stop();
  else play(start, end, loop)
}

export function pause() {
  player.stop();
}

const audioSelectionStore: Readable<undefined | { start: { paragraph: number; section: number; }, end: { paragraph: number; section: number; }}> = 
  derived(selectionStore, 
    selection => {
      if (selection === undefined) return undefined;
      return {
        start: {
          paragraph: selection.early.paragraph - 1,
          section: Number.MAX_SAFE_INTEGER
        },
        end: {
          paragraph: selection.late.paragraph + 1,
          section: 0
        }
      }
    }
  );

const startAtZeroStore: Readable<boolean> = derived(audioSelectionStore, state => (state?.start?.paragraph ?? 0) < 0);
const endAtInfinityStore: Readable<boolean> = derived([audioSelectionStore, documentStore], ([state, document]) => (state?.end?.paragraph ?? 0) >= document.length);

const audioStartSectionStore: Readable<SectionState | undefined> = createSelectionStore(derived(audioSelectionStore, selection => selection?.start));
const audioEndSectionStore: Readable<SectionState | undefined> = createSelectionStore(derived(audioSelectionStore, selection => selection?.end));
const audioTimings: Readable<{ start: number; end: number } | undefined> = derived([audioStartSectionStore, audioEndSectionStore, startAtZeroStore, endAtInfinityStore], ([start, end, startAtZero, endAtInfinity]) => {
  if (start === undefined) return undefined;
  if (end === undefined) return undefined;
  const startTime = startAtZero ? 0 : (start.endTime + 0.2);
  const endTime = endAtInfinity ? player.buffer.duration : (end.startTime - 0.2);
  return { start: startTime, end: endTime };
});
audioTimings.subscribe(timings => {
  pause();
  if (timings !== undefined) {
    play(timings.start, timings.end, true);
  }
})