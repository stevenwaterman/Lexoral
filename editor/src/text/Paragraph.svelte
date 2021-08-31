<script lang="ts">
  import Section from "./Section.svelte";
import type { Paragraph, ParagraphStore } from "./textState";

  export let paragraphStore: ParagraphStore;

  let paragraph: Paragraph;
  $: paragraph = $paragraphStore;
</script>

<style>
  .paragraph {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-block-end: 1em;
  }
</style>

<p class="paragraph">
  {#each Object.entries(paragraph) as [idx, sectionStore] (idx)}
    <Section sectionStore={ sectionStore } />
  {/each}
</p>