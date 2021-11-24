<script lang="ts">
  import { beforeUpdate } from "svelte";
  import { repositionDropdown } from "../input/dropdown/repositionDropdown";
  import { selectToSection } from "../input/select";
  import type { SectionStore } from "../state/section/sectionStore";
  import { getSectionStore } from "../state/section/sectionStoreRegistry";
  import { handleSectionKeydown, handleSectionKeyUp } from "./controls/sectionInput";

  export let idx: number;
  beforeUpdate(repositionDropdown);

  let sectionStore: SectionStore;
  $: sectionStore = getSectionStore(idx);

  $: ({selectedStore, playingStore, displayTextStore, completionsStore, editedStore, confirmedStore} = sectionStore);

  function select(event: MouseEvent) {
    if (event.buttons === 1) selectToSection(idx);
  }
</script>

<style>
  .section {
    display: inline;
    white-space: pre;
    outline: none;
    min-width: 0.5em;
  }

  .underline {
    display: inline-block;
    box-shadow: inset 0px -1px 0px var(--form-border);
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
  bind:textContent={$displayTextStore}
  class="section"
  class:highlight={$selectedStore}
  class:sectionPlaying={$playingStore}
  class:underline={$displayTextStore.length === 0}
  class:placeholder={!$editedStore}
  class:questionable={$completionsStore.length > 1 && !$confirmedStore}
  data-sectionIdx={idx}
  on:keydown={event => handleSectionKeydown(event, sectionStore)}
  on:keyup={event => handleSectionKeyUp(event, sectionStore)}
  on:mouseenter={select}
  on:mouseup={select}
/>
{" "}