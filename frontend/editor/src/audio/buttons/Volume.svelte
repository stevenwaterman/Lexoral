<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

  import { audioStore } from "../../state/settings/audioStore";

  $: volumeStore = audioStore.getField("volume");
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: auto auto;

    justify-items: center;
    align-items: center;
  }

  .inputContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    width: 0;
    transition: 0.2s width;
    overflow-x: hidden;
  }

  .container:hover .inputContainer {
    width: 8em;
  }

  .container:focus-within .inputContainer {
    width: 8em;
  }

  .inputContainer input {
    width: calc(100% - 1em);
    margin-left: 1em;
    box-sizing: border-box;
  }
</style>

<div class="container">
  <Fa icon={faVolumeUp}/>

  <div class="inputContainer">
    <input type="range" min={0} max={100} step={1} bind:value={$volumeStore}/>
  </div>
</div>