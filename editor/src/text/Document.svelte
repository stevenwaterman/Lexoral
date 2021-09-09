<script lang="ts">
  import Paragraph from "./Paragraph.svelte";
  import { paragraphLocationsStore } from "../text/textState";
</script>

{#each $paragraphLocationsStore as {start, end}}
  <Paragraph start={start} end={end}/>
{/each}