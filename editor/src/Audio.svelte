<script lang="ts">
  import { onMount } from "svelte";
  import { audioBoundsStore, currentTimeStore, loopStore, playStore } from "./state";

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

    stopAudio = () => {};

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

    const firstDurationMs = (loopEnd - playbackStart) * 1000;
    const latterDurationMs = (loopEnd - loopStart) * 1000;

    currentTimeStore.set(playbackStart, {duration: 0});
    currentTimeStore.set(loopEnd, {duration: firstDurationMs});

    const resetTime = () => {
      currentTimeStore.set(loopStart, {duration: 0});
      currentTimeStore.set(loopEnd, {duration: latterDurationMs});
    }
    
    const timers: NodeJS.Timeout[] = [];

    if (loop) {
      timers.push(setTimeout(() => {
        resetTime();
        timers.push(setInterval(resetTime, latterDurationMs));
      }, firstDurationMs));
    }
    

    stopAudio = () => {
      bufferNode.stop();
      currentTimeStore.set($currentTimeStore, {duration: 0});
      timers.forEach(clearTimeout);
    }
  }

  function pause() {
    stopAudio();
    stopAudio = () => {};
  }

  audioBoundsStore.subscribe(timings => {
    const playing = $playStore;
    const loop = $loopStore;
    if (playing) {
      play(timings.start, timings.end, loop, timings.start);
    } else {
      currentTimeStore.set(timings.start, {duration: 0})
    }
  });

  playStore.subscribe(playing => {
    if (playing) {
      const timings = $audioBoundsStore;
      const loop = $loopStore;
      const currentTime = $currentTimeStore;
      play(timings.start, timings.end, loop, currentTime);
    } else {
      pause();
    }
  });

  loopStore.subscribe(loop => {
    const playing = $playStore;
    if (playing) {
      const timings = $audioBoundsStore;
      const currentTime = $currentTimeStore;
      play(timings.start, timings.end, loop, currentTime);
    }
  })
</script>
