<script lang="ts">
  import type { SectionState } from "../sectionStores";
  import { selectedTimeRangeStore } from "../selectionStores";
  export let section: SectionState;

  let component: HTMLSpanElement;

  let highlight: boolean;
  $: highlight = 
    $selectedTimeRangeStore !== null &&
    $selectedTimeRangeStore.start < section.time.end &&
    $selectedTimeRangeStore.end > section.time.start;
</script>

<style>
  .section {
    display: inline-block;
    white-space: pre;
    padding-right: 4pt;
  }

  .section::selection {
    background: none;
  }

  .highlight {
    background-color: var(--weak-focus)
  }
</style>

<span class="section" class:highlight contenteditable="true" bind:this={component}>
  {section.text}
</span>