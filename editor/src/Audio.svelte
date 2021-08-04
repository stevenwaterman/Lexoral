<script lang="ts">
  import { onMount } from "svelte";
  import { loopStore, playingStore } from "./state";
  import type { AudioState } from "./state";

  let context: AudioContext;
  export let buffer: AudioBuffer;
  let stop: () => void = () => {};

  onMount(async () => {
    context = new AudioContext();
    const audioData = await fetch("/assets/audio.mp3").then(res => res.blob()).then(blob => blob.arrayBuffer());
    buffer = await context.decodeAudioData(audioData);
  })
  
  let loop: AudioState["loop"];
  $: loop = $loopStore;

  let playing: AudioState["playing"];
  $: playing = $playingStore;

  $: if (context && buffer) {
    const oldStop = stop;
    let timeouts: NodeJS.Timeout[] = [];

    if (playing) {
      const bufferNode = context.createBufferSource();
      bufferNode.buffer = buffer;
      bufferNode.connect(context.destination);
      bufferNode.loop = true;

      if (loop) {
        const start = Math.max(0, loop.start);
        bufferNode.loopStart = start;
        bufferNode.loopEnd = Math.min(buffer.duration, loop.end);
        bufferNode.start(0, start);
        timeouts.push(setInterval(() => {
          console.log("Looping")
        }, (loop.end - loop.start) * 1000));
      } else {
        bufferNode.start(0);
        timeouts.push(setTimeout(() => {
          console.log("Completely finished")
        }, buffer.duration * 1000));
      }

      stop = () => {
        bufferNode.stop();
        timeouts.forEach(timeout => clearTimeout(timeout));
      }
    } else {
      stop = () => {};
    }

    oldStop();
  }
</script>
