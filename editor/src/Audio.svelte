<script lang="ts">
  import { onMount } from "svelte";
  import { audioTimeStore } from "./state";

  let context: AudioContext;
  export let buffer: AudioBuffer;
  let stop: () => void = () => {};

  onMount(async () => {
    context = new AudioContext();
    const audioData = await fetch("/assets/audio.mp3").then(res => res.blob()).then(blob => blob.arrayBuffer());
    buffer = await context.decodeAudioData(audioData);
  })
  
  let timings: {start: number; end: number} | null;
  $: timings = $audioTimeStore;

  $: if (context && buffer) {
    stop();
    stop = () => {};

    if (timings) {
      const bufferNode = context.createBufferSource();
      bufferNode.buffer = buffer;
      bufferNode.connect(context.destination);
      bufferNode.loop = true;
      bufferNode.loopStart = timings.start;
      bufferNode.loopEnd = timings.end;
      bufferNode.start(0, timings.start);
      stop = () => bufferNode.stop();
    }
  }
</script>
