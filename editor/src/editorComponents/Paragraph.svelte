<script lang="ts">
  import type { ParagraphStore } from "../sectionStores";
  import { updateSelection } from "../selectionStores";
  import Section from "./Section.svelte";

  export let paragraphStore: ParagraphStore;
  export let rowIdx: number;

  function select(colIdx: number) {
    updateSelection({
      from: {
        row: rowIdx,
        column: colIdx
      },
      to: {
        row: rowIdx,
        column: colIdx
      }
    })
  }
</script>

<style>
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 12pt;
  }
</style>

<div class="row">
  {#each $paragraphStore.sections as section, colIdx (section.idx)}
    <Section sectionStore={section.store} on:select="{() => select(colIdx)}"/>
  {/each}
</div>
