<script lang="ts">
  import { audioStateStore, currentTimeStore } from "./audioState";
  import { directionStore, prevSectionStore, nextSectionStore, audioLengthStore, currentTimePercentStore, hoveredFractionStore } from "./state";

  let clientWidth: number;

  let selectionStartPercent: number | null = null;

  function down({ offsetX }: MouseEvent) {
    selectionStartPercent = 100 * offsetX / clientWidth;
  }

  function up({ offsetX }: MouseEvent) {
    if (selectionStartPercent === null) return;

    const fraction = offsetX / clientWidth;
    const selectionStartFraction = selectionStartPercent / 100;

    const startTime = $audioLengthStore * Math.min(fraction, selectionStartFraction);
    const endTime = $audioLengthStore * Math.max(fraction, selectionStartFraction);

    if (endTime - startTime > 0.01) {
      audioStateStore.update(state => ({ 
        ...state,
        loopStart: startTime,
        loopEnd: endTime
      }));
    } else {
      audioStateStore.update(state => ({
        ...state,
        loopStart: $audioLengthStore * fraction,
        loopEnd: $audioLengthStore
      }));
    }

    selectionStartPercent = null;
  }

  function move({ offsetX }: MouseEvent) {
    hoveredFractionStore.set(offsetX / clientWidth);
  }

  function enter() {
  }

  function leave() {
    hoveredFractionStore.set(null);
    selectionStartPercent = null;
  }

  function playPause() {
    audioStateStore.update(state => ({...state, paused: !state.paused}));
  }

  function skipBack() {
    const prevSection = $prevSectionStore;
    directionStore.set("end"); // TODO centralise this functionality
    audioStateStore.update(state => ({ ...state, loopStart: prevSection.startTime, loopEnd: prevSection.endTime }));
  }

  function skipForward() {
    const nextSection = $nextSectionStore;
    directionStore.set("end"); // TODO centralise this functionality
    audioStateStore.update(state => ({ ...state, loopStart: nextSection.startTime, loopEnd: nextSection.endTime }));
  }

  function playAll() {
    audioStateStore.update(state => ({...state, loopStart: 0, loopEnd: $audioLengthStore }));
  }

  function restart() {
    currentTimeStore.set(0, {duration: 0});
    audioStateStore.update(state => state);
  }
</script>

<style>
  .bar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  .selection {
    background-color: green;
    z-index: 3;
  }

  .indicator {
    background-color: blue;
    width: 2px;
    z-index: 4;
  }

  .bounds {
    background-color: black;
    z-index: 1;
  }

  .fg {
    background-color: red;
    opacity: 0.5;
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
    height: 20px;
    cursor: none;
  }
  
  .timings {
    text-align: center;
  }
</style>

<div class="controlContainer">
  <p class="timings">
    {$currentTimeStore.toFixed(2)} / {$audioLengthStore?.toFixed(2)}
  </p>

  <button on:click={playPause}>{$audioStateStore.paused ? "play" : "pause"}</button>
  <button on:click={skipBack}>back</button>
  <button on:click={skipForward}>forward</button>
  <button on:click={playAll}>play all</button>
  <button on:click={restart}>restart section</button>
  <label for="loop">loop</label>
  <input id="loop" type="checkbox" bind:checked={$audioStateStore.loop}>
  <input bind:value={$audioStateStore.speed} type="range" min={0.5} max={2} step={0.25}/>
</div>

<div class="barContainer" bind:clientWidth on:mousedown={down} on:mouseup={up} on:mousemove={move} on:mouseenter={enter} on:mouseleave={leave}>
  {#if $hoveredFractionStore !== null}
    <div class="bar indicator" style={`left: ${$hoveredFractionStore * 100}%`}/>

    {#if selectionStartPercent !== null}
      <div class="bar selection" style={`left: ${Math.min(selectionStartPercent, $hoveredFractionStore * 100)}%; width: ${Math.abs($hoveredFractionStore * 100 - selectionStartPercent)}%`}/>
    {/if}
  {/if}
  <div class="bar bounds" style={`left: ${100 * $audioStateStore.loopStart / $audioLengthStore}%; width: ${100 * ($audioStateStore.loopEnd - $audioStateStore.loopStart) / $audioLengthStore}%`}/>
  <div class="bar fg" style={`width: ${$currentTimePercentStore}%`}/>
  <div class="bar bg"/>
</div>