<script lang="ts">
  import Paragraph from "./Paragraph.svelte";
  import { paragraphLocationsStore } from "../state/section/paragraphLocationsStore";

  export let observer: IntersectionObserver;
</script>

{#each $paragraphLocationsStore as item (item.start + (1 / item.end))}
  <Paragraph
    observer={observer} 
    start={item.start} 
    end={item.end}
  />
{/each}
