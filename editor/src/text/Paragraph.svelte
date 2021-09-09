<script lang="ts">
  import { playingStore } from "../audio/audio";

  import Section from "./Section.svelte";
  import type { AllSections } from "./textState";
  import { allSectionsStore } from "./textState";

  export let start: number;
  export let end: number;

  function range(start: number, end: number): number[] {
    const output: number[] = [];
    for(let i = start; i <= end; i++) {
      output.push(i);
    }
    return output;
  }

  let paragraphRange: number[];
  $: paragraphRange = range(start, end);

  let sections: AllSections;
  $: sections = $allSectionsStore;
</script>

<style>
  .paragraph {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-block-end: 1em;
  }

  .paragraph::selection {
    background: none;
  }

  .paragraph.nonePlaying::selection {
    background-color: rgba(76, 108, 169, 0.99);
  }
</style>

<p class="paragraph" class:nonePlaying={!$playingStore}>
  {#each paragraphRange as idx}
    <Section sectionStore={ sections[idx] }/>
  {/each}
</p>