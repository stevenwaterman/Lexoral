<script lang="ts">
  import { playingStore } from "../audio/audio";
import { getAssertExists } from "../utils/list";

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
</style>

<p class="paragraph" class:nonePlaying={!$playingStore}>
  {#each paragraphRange as idx}
    <Section sectionStore={getAssertExists(sections, idx)}/>
  {/each}
</p>