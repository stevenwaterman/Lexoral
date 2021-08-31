<script lang="ts">
  import Section from "./Section.svelte";
  import type { ParagraphStore } from "./textState";

  export let paragraphStore: ParagraphStore;
</script>

<style>
  .paragraph {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-block-end: 1em;
  }
</style>

<p class="paragraph">
  {#each $paragraphStore as sectionStore}
    <Section sectionStore={ sectionStore } />
  {/each}
</p>