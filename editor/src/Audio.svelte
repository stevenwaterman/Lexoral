<script lang="ts">
  import { onMount } from "svelte";
  import { audioStore } from "./state";

  let context: AudioContext;
  export let buffer: AudioBuffer;
  let stop: () => void = () => {};

  onMount(async () => {
    context = new AudioContext();
    const audioData = await fetch("/assets/audio.mp3").then(res => res.blob()).then(blob => blob.arrayBuffer());
    buffer = await context.decodeAudioData(audioData);
  })
  
  let time: {start: number; end: number;};
  $: time = $audioStore;

  $: if(context && buffer) {
    const bufferNode = context.createBufferSource();
    bufferNode.buffer = buffer;
    bufferNode.connect(context.destination);
    bufferNode.loop = true;
    const start = Math.max(0, time.start);
    bufferNode.loopStart = start;
    bufferNode.loopEnd = Math.min(buffer.duration, time.end);
    bufferNode.start(0, start);
    stop();
    stop = () => bufferNode.stop();
  }
</script>
