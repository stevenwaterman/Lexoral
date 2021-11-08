<script lang="ts">
  import { getSectionStore } from "../state/section/sectionStoreRegistry";

  export let idx: number;
  $: ({selectedStore, playingStore, displayTextStore, editedStore, completionsStore, endsParagraphStore} = getSectionStore(idx));
</script>

<style>
  .section {
    display: inline;
    white-space: pre;
    outline: none;
    margin-right: 0.25em;
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

  :global(.hidden .section) {
    display: none;
  }

  .questionable {
    box-shadow: inset 0px -1px 0px var(--error)
  }
</style>

<span
  contenteditable
  class="section"
  class:highlight={$selectedStore}
  class:sectionPlaying={$playingStore}
  class:underline={$displayTextStore.length === 0}
  class:placeholder={!$editedStore}
  class:questionable={$completionsStore.length > 1 && !$editedStore}
  data-sectionIdx={idx}
>
  {$displayTextStore}
</span>