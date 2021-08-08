<script lang="ts">
  import { afterUpdate, createEventDispatcher } from "svelte";

  export let options: string[];
  export let selectedIdx: number;

  let width: number;
  let popup: HTMLDivElement | undefined;
  let popupRight: number | undefined;
  afterUpdate(() => {
    // TODO this is a bit jank
    popupRight = popup?.getBoundingClientRect()?.left + width;
  })

  const dispatch = createEventDispatcher();

  function clicked(idx: number) {
    dispatch("clickedOption", idx);
  }
  
  function entered(idx: number) {
    dispatch("selectOption", idx);
  }

  
</script>

<style>
  .popup {
    position: absolute;
    top: 100%;
    max-width: 100vw;
    border: 1px solid black;
    z-index: 1;
    background: white;
    display: flex;
    flex-direction: column;
    margin-top: 2px;
  }

  .highlight {
    background-color: lightblue;
  }

  .option {
    white-space: nowrap;
    cursor: pointer;
  }

  .measurement {
    opacity: 0;
  }
</style>

<div class="popup measurement" bind:this={popup}/>
<div class="popup" bind:clientWidth={width} style={`left: min(0px, calc(100vw - 2px - ${popupRight ?? 0}px));`}>
  {#each options as option, idx}
    <span
      class="option"
      class:highlight={selectedIdx === idx}
      on:click="{() => {clicked(idx)}}"
      on:mouseenter="{() => {entered(idx)}}"
    >
      {option}
    </span>
  {/each}
</div>