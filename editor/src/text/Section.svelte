<script lang="ts">
  import { playingStore, currentlyPlayingSectionIdxStore } from "../audio/audio";
  import type { SectionStore } from "./textState";
  import { areMultipleSectionsSelectedStore, earlySectionIdxStore, lateSectionIdxStore } from "../input/selectionState";

  export let sectionStore: SectionStore;

  let last: boolean;
  $: last = $sectionStore.endParagraph;

  let highlight: boolean;
  $: highlight = ($earlySectionIdxStore ?? 0) <= $sectionStore.idx && ($lateSectionIdxStore ?? 0) >= $sectionStore.idx;

  let desiredText: string;
  $: desiredText = $sectionStore.edited ? $sectionStore.text : $sectionStore.placeholder;
</script>

<style>
  .section {
    display: inline;
    white-space: pre-wrap;
    transition: background 0.2s;
    min-width: 1em;
  }

  .section::selection {
    background: none;
  }

  .underline {
    padding-right: 0.5em;
    box-shadow: inset 0 -2px 0 var(--form-border);
  }

  .section.singleSelection::selection {
    background-color: rgba(76, 108, 169, 0.99);
    color: var(--light-text);
  }

  .highlight {
    background-color: var(--weak-focus);
  }

  .placeholder {
    color: var(--secondary-text);
  }

  .sectionPlaying {
    background-color: var(--focus);
  }
</style>

<span
  class="section"
  class:highlight
  class:placeholder={!$sectionStore.edited}
  class:sectionPlaying={$currentlyPlayingSectionIdxStore === $sectionStore.idx}
  class:singleSelection={!$areMultipleSectionsSelectedStore}
  class:underline={desiredText.length === 0}
  data-sectionIdx={$sectionStore.idx}
>
  {`\u200b${desiredText}\u200b`}
  <!-- {`/${desiredText}/`} -->
</span>
{last ? "" : " "}