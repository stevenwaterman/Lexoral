<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import { faVolumeDown, faVolumeMute, faVolumeOff, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
  import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

  import { audioStore } from "../../state/settings/audioStore";

  $: volumeStore = audioStore.getField("volume");

  let volumeIcon: IconDefinition;
  $: volumeIcon = getVolumeIcon($volumeStore);

  function getVolumeIcon(volume: number): IconDefinition {
    if (volume <= 0) return faVolumeMute;
    if (volume <= 25) return faVolumeOff;
    if (volume <= 60) return faVolumeDown;
    return faVolumeUp;
  }

  function click() {
    volumeStore.update(volume => {
      if (volume <= 0) return 0.5;
      else return 0;
    })
  }
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: auto auto;
    height: 100%;

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

  .inputContainer input {
    width: calc(100% - 1em);
    margin-left: 1em;
    box-sizing: border-box;
  }

  .iconWrapper {
    display: grid;
    justify-items: flex-start;
    width: 1.25em;
  }
</style>

<div class="container">
  <div class="iconWrapper" on:click={click}>
    <Fa icon={volumeIcon}/>
  </div>

  <div class="inputContainer">
    <input type="range" min={0} max={100} step={1} bind:value={$volumeStore}/>
  </div>
</div>