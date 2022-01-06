<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

  import { lastPlayingSectionIdxStore, playingStore } from "../../audio/audioStatus";
  import { findSectionNode, selectEnd } from "../../input/select";
  import { stopAudio } from "../audioPlayer";

  async function click() {
    const idx = $lastPlayingSectionIdxStore;
    if (idx !== null) {
      const component = findSectionNode(idx);
      if (component) {
        await selectEnd(component);
        stopAudio();
      }
    }
  }
</script>

<button on:click={click} disabled={!$playingStore} title="Jump to current time (Esc)">
  <Fa icon={faThumbtack}/>
</button>