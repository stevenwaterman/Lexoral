<script lang="ts">
  import { playingStore, currentlyPlayingSectionIdxStore } from "../audio/audio";
  import type { SectionStore } from "./textState";
  import { earlySectionIdxStore, lateSectionIdxStore } from "../input/selectionState";

  export let sectionStore: SectionStore;
  export let last: boolean;

  let highlight: boolean;
  $: highlight = ($earlySectionIdxStore ?? 0) <= $sectionStore.idx && ($lateSectionIdxStore ?? 0) >= $sectionStore.idx;

  let desiredText: string;
  $: desiredText = $sectionStore.edited ? $sectionStore.text : $sectionStore.placeholder;

  let innerText: string;
  $: innerText = desiredText.length === 0 ? "_" : desiredText;
</script>

<style>
  .section {
    display: inline;
    white-space: pre-wrap;
    transition: background 0.2s;
  }

  .section::selection {
    background: none;
  }

  .section.nonePlaying::selection {
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
  class:nonePlaying={!$playingStore}
  data-sectionIdx={$sectionStore.idx}
>
  <!-- {`\u200b${innerText}\u200b`} -->
  {`/${innerText}/`}
</span>
{last ? "" : " "}