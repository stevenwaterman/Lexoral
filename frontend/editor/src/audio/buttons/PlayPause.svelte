<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

  import { playingStore } from "../audioStatus";  
  import { playAudio, stopAudio } from "../audioPlayer";

  async function click() {
    if ($playingStore) stopAudio();
    else await playAudio();
  }
</script>

<button on:click={click}>
  {#if $playingStore}
    <Fa icon={faStop}/>
  {:else}
    <Fa icon={faPlay}/>
  {/if}
</button>