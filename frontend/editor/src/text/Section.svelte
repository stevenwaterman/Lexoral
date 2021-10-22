<script lang="ts">
  import type { Readable } from "svelte/store";
  import type { SectionStore } from "../state/section/sectionStore";

  export let sectionStore: SectionStore;
  export let hidden: boolean;

  let selectedStore: Readable<boolean>;
  $: selectedStore = sectionStore.selectedStore;

  let editedStore: Readable<boolean>;
  $: editedStore = sectionStore.editedStore;

  let playingStore: Readable<boolean>;
  $: playingStore = sectionStore.playingStore;

  let displayTextStore: Readable<string>;
  $: displayTextStore = sectionStore.displayTextStore;

  let endsParagraphStore: Readable<boolean>;
  $: endsParagraphStore = sectionStore.endsParagraphStore;
</script>

<style>
  .section {
    display: inline;
    white-space: pre-wrap;
    /* transition: background 0.2s; */
    min-width: 1em;
  }

  .section::selection {
    background: none;
  }

  .underline {
    padding-right: 0.5em;
    box-shadow: inset 0 -2px 0 var(--form-border);
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

  .hidden {
    display: none;
  }

  .questionable {
    border-bottom: 1px solid var(--error)
  }
</style>

<span
  class="section"
  class:hidden
  class:highlight={$selectedStore}
  class:finalised={!$editedStore}
  class:sectionPlaying={$playingStore}
  class:underline={$displayTextStore.length === 0}
  data-sectionIdx={sectionStore.idx}
>
  {`\u200b${$displayTextStore}\u200b`}
  <!-- {`/${$displayTextStore}/`} -->
</span>
{$endsParagraphStore ? "" : " "}