<script lang="ts">
  import { getSectionStore } from "../state/section/sectionStoreRegistry";

  export let idx: number;
  export let hidden: boolean;
  $: ({selectedStore, playingStore, displayTextStore, editedStore, completionsStore, endsParagraphStore} = getSectionStore(idx));
</script>

<style>
  .section {
    display: inline;
    white-space: pre;
    min-width: 1em;
  }

  .section::selection {
    background: none;
  }

  .underline {
    padding-right: 0.5em;
    box-shadow: inset 0px -1px 0px var(--form-border)
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
    box-shadow: inset 0px -1px 0px var(--error)
  }
</style>

<span
  class="section"
  class:hidden
  class:highlight={$selectedStore}
  class:sectionPlaying={$playingStore}
  class:underline={$displayTextStore.length === 0}
  class:placeholder={!$editedStore}
  class:questionable={$completionsStore.length > 1 && !$editedStore}
  data-sectionIdx={idx}
>
  {`\u200b${$displayTextStore}\u200b`}
  <!-- {`/${$displayTextStore}/`} -->
</span>
{$endsParagraphStore ? "" : " "}