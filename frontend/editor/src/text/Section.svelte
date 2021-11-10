<script lang="ts">
  import { beforeUpdate } from "svelte";
  import { repositionDropdown } from "../input/dropdown/repositionDropdown";
  import type { SectionStore } from "../state/section/sectionStore";
  import { getSectionStore } from "../state/section/sectionStoreRegistry";
  import { handleSectionKeydown } from "./controls/sectionInput";

  export let idx: number;
  beforeUpdate(repositionDropdown);

  let sectionStore: SectionStore;
  $: sectionStore = getSectionStore(idx);

  $: ({selectedStore, playingStore, displayTextStore, editedStore, completionsStore} = sectionStore);

  type EventType = Event & { currentTarget: EventTarget & HTMLSpanElement };
  function onInput(event: EventType) {
    const target = event.currentTarget;
    const text = target.textContent;
    sectionStore.setText(text);
  }
</script>

<style>
  .section {
    display: inline;
    white-space: pre;
    outline: none;
    /* margin-right: 0.25em; */
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
  on:input={onInput}
  on:keydown={event => handleSectionKeydown(event, sectionStore)}
>
  {$displayTextStore}
</span>
{" "}