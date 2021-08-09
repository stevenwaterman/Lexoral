<script lang="ts">
  import { onMount } from "svelte";
  import * as Tone from "tone";
  import { audioStateStore, currentTimeStore } from "./audioState";
  import { clamp } from "./utils";

  export let buffer: AudioBuffer;

  let player: Tone.Player | null;
  $: player = buffer ? new Tone.Player(buffer) : null;

  onMount(async () => {
    await Tone.start();
    new Tone.ToneAudioBuffer("/assets/audio.mp3", toneBuffer => {
      buffer = toneBuffer.get();
    });
  })
  
  let stopAudio: () => void = () => {};

  function play(loopStart: number, loopEnd: number, loop: boolean, playbackStart: number, speed: number) {
    pause();

    player.loopStart = loopStart;
    player.loopEnd = loopEnd;
    player.loop = loop;
    player.playbackRate = speed;

    const octaves = Math.log2(speed);
    const pitchShift: Tone.PitchShift = new Tone.PitchShift({
      pitch: -octaves * 12,
      delayTime: 0,
      windowSize: 0.2 / speed
    }).toDestination();

    player.connect(pitchShift);

    if (loop) {
      player.start(undefined, playbackStart);
    } else {
      player.start(undefined, playbackStart, loopEnd - playbackStart)
    }

    stopAudio = () => {
      pitchShift.dispose();
      player.stop();
    }
  }

  function pause() {
    stopAudio();
    stopAudio = () => {};
  }

  audioStateStore.subscribe(audioState => {
    if (audioState.loopStart === audioState.loopEnd) return;
    
    if (audioState.paused) pause()
    else play(audioState.loopStart, audioState.loopEnd, audioState.loop, clamp($currentTimeStore, audioState.loopStart, audioState.loopEnd), audioState.speed);
  })
</script>
