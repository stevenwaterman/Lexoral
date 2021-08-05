<script lang="ts">
  import { audioLengthStore, currentTimeStore, currentTimePercentStore, audioBoundsStore } from "./state";

  let clientWidth: number;
  let startPlay: number;

  function down({ offsetX }: MouseEvent) {
    const fraction = offsetX / clientWidth;
    startPlay = $audioLengthStore * fraction;
  }

  function up({ offsetX }: MouseEvent) {
    if (startPlay) {
      const fraction = offsetX / clientWidth;
      const endPlay = $audioLengthStore * fraction;
      audioBoundsStore.set({ start: startPlay, end: endPlay });
      startPlay = undefined;
    }
  }

  function move({ offsetX }: MouseEvent) {
    if (!startPlay) return;
    const fraction = offsetX / clientWidth;
    const time = $audioLengthStore * fraction;
    audioBoundsStore.set({ start: 0, end: $audioLengthStore });
    currentTimeStore.set(time, { duration: 0 });
  }
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
    user-select: none;
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
    {$currentTimeStore.toFixed(2)} / {$audioLengthStore?.toFixed(2)}
  </p>
</div>

<div class="barContainer" bind:clientWidth on:mousedown={down} on:mouseup={up} on:mousemove={move}>
  <div class="bar fg" style={`width: ${$currentTimePercentStore}%`}/>
  <div class="bar bg"/>
</div>