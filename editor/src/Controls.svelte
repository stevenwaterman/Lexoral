<script lang="ts">
  import type { Tweened } from "svelte/motion";
  import { tweened } from "svelte/motion";
  import type { Readable } from "svelte/store";
  import { derived } from "svelte/store";
  import { audioLengthStore, audioTimeStore } from "./state";

  let currentTime: Tweened<number> = tweened(0);
  let currentTimePercent: Readable<number> = derived([currentTime, audioLengthStore], ([time, length]) => {
    if (!length) return 0;
    return 100 * (time / length);
  })

  audioTimeStore.subscribe(time => {
    if (time === null) {
      currentTime.set($currentTime, {duration: 0});
    } else {
      currentTime.set(time.start, {duration: 0});
      currentTime.set(time.end, {duration: (time.end - time.start) * 1000});
    }
  })
</script>

<style>
  .bar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .fg {
    background-color: red;
    z-index: 1;
  }

  .bg {
    background-color: gray;
    width: 100%;
  }

  .controlContainer {
    position: fixed;
    bottom: 20px;
    left: 4px;
    right: 4px;
  }

  .barContainer {
    position: fixed;
    bottom: 4px;
    left: 4px;
    right: 4px;
    height: 10px;
  }
  
  .timings {
    text-align: center;
  }
</style>

<div class="controlContainer">
  <p class="timings">
    {$currentTime.toFixed(2)} / {$audioLengthStore?.toFixed(2)}
  </p>
</div>

<div class="barContainer">
  <div class="bar fg" style={`width: ${$currentTimePercent}%`}/>
  <div class="bar bg"/>
</div>