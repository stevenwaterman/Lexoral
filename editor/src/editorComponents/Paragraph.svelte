<script lang="ts">
  import type { ParagraphStore } from "../sectionStores";
  import Section from "./Section.svelte";

  export let paragraphStore: ParagraphStore;
</script>

<style>
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 6pt;
    padding-top: 6pt;
  }
</style>

<div class="row">
  {#each $paragraphStore.sections as section (section.idx)}
    <Section sectionStore={section.store}/>
  {/each}
</div>
