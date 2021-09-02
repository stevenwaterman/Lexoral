<script lang="ts">
import { playingStore } from "../audio/audio";

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

  .paragraph.nonePlaying::selection {
    background-color: rgba(76, 108, 169, 0.99);
  }
</style>

<p class="paragraph" class:nonePlaying={!$playingStore}>
  {#each $paragraphStore as sectionStore, idx}
    <Section sectionStore={ sectionStore } last={idx === $paragraphStore.length - 1}/>
  {/each}
</p>