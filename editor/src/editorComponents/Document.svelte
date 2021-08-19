<script lang="ts">
  import { documentStore } from "../sectionStores";
  import Paragraph from "./Paragraph.svelte";
</script>

{#each $documentStore as paragraphStore}
  <Paragraph paragraphStore={ paragraphStore }/>
{/each}