<script lang="ts">
  import type { Readable } from "svelte/store";

  import { playingStore } from "../../audio/audioStatus";
  import DropdownDisplay from "./DropdownDisplay.svelte";
  
  export let sectionIdx: number;
  export let completionsStore: Readable<string[]>;
  
  export let transparent: boolean = false;

  let mouseInside = false;
  function mouseEnter() {
    mouseInside = true;
    makeOpaque();
  }
  function mouseLeave() {
    mouseInside = false;
  }

  let timeout: NodeJS.Timeout | undefined = undefined;

  function makeOpaque() {
    if (timeout !== undefined) clearTimeout(timeout);
    transparent = false;
  }

  $: if (!$playingStore) makeOpaque();
  $: if ($playingStore && !transparent && !mouseInside) {
    timeout = setTimeout(() => {
      transparent = true;
    }, 1500)
  }
</script>

<DropdownDisplay
  on:mouseenter={mouseEnter}
  on:mouseleave={mouseLeave}
  {sectionIdx}
  {completionsStore}
/>
