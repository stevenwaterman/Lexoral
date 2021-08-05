<script lang="ts">
  import { onMount } from "svelte";
  import { audioBoundsStore } from "./state";

  let context: AudioContext;
  export let buffer: AudioBuffer;
  let stop: () => void = () => {};

  onMount(async () => {
    context = new AudioContext();
    const audioData = await fetch("/assets/audio.mp3").then(res => res.blob()).then(blob => blob.arrayBuffer());
    buffer = await context.decodeAudioData(audioData);
  })
  
  // TODO multiple sections can have the same timings and they don't start playing when you swap between them

  let timings: {start: number; end: number} | null;
  $: timings = $audioBoundsStore;

  $: if (context && buffer) {
    stop();
    stop = () => {};

    if (timings) {
      const bufferNode = context.createBufferSource();
      bufferNode.buffer = buffer;
      bufferNode.connect(context.destination);
      const duration = timings.end - timings.start;
      bufferNode.start(0, timings.start, duration);
      stop = () => bufferNode.stop();
    }
  }
</script>
