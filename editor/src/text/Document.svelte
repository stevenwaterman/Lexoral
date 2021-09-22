<script lang="ts">
  import Paragraph from "./Paragraph.svelte";
  import { paragraphLocationsStore } from "../state/paragraphLocationsStore";
</script>

{#each $paragraphLocationsStore as {start, end}}
  <Paragraph start={start} end={end}/>
{/each}