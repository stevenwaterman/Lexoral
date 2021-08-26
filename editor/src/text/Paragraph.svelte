<script lang="ts">
  import type { Paragraph, ParagraphStore } from "../sectionStores";
  import Section from "./Section.svelte";

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
  {#each $paragraphStore as section, idx}
    <Section sectionStore={ section } />
  {/each}
</p>