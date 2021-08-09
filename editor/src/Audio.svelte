<script lang="ts">
  import { onMount } from "svelte";
  import { audioStateStore, currentTimeStore } from "./audioState";
  import type { AudioState } from "./audioState";
import { clamp } from "./utils";

  let context: AudioContext;
  export let buffer: AudioBuffer;
  let stopAudio: () => void = () => {};

  onMount(async () => {
    context = new AudioContext();
    const audioData = await fetch("/assets/audio.mp3").then(res => res.blob()).then(blob => blob.arrayBuffer());
    buffer = await context.decodeAudioData(audioData);
  })
  
  // TODO multiple sections can have the same timings and they don't start playing when you swap between them

  function play(loopStart: number, loopEnd: number, loop: boolean, playbackStart: number) {
    pause();

    if (!context) return;
    if (!buffer) return;

    const bufferNode = context.createBufferSource();
    bufferNode.buffer = buffer;
    bufferNode.connect(context.destination);
    bufferNode.loopStart = loopStart;
    bufferNode.loopEnd = loopEnd;
    bufferNode.loop = loop;

    if (loop) {
      bufferNode.start(0, playbackStart);
    } else {
      bufferNode.start(0, playbackStart, loopEnd - playbackStart)
    }

    stopAudio = () => {
      bufferNode.stop();
    }
  }

  function pause() {
    stopAudio();
    stopAudio = () => {};
  }

  audioStateStore.subscribe(audioState => {
    if (audioState.loopStart === audioState.loopEnd) return;
    
    if (audioState.paused) pause()
    else play(audioState.loopStart, audioState.loopEnd, audioState.loop, clamp($currentTimeStore, audioState.loopStart, audioState.loopEnd));
  })
</script>
