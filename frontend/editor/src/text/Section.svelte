<script lang="ts">
  import { beforeUpdate } from "svelte";
  import { repositionDropdown } from "../input/dropdown/repositionDropdown";
  import type { SectionStore } from "../state/section/sectionStore";
  import { getSectionStore } from "../state/section/sectionStoreRegistry";
  import { dragStore } from "./controls/dragStore";
  import { handleSectionKeydown, handleSectionKeyUp } from "./controls/sectionInput";

  export let idx: number;
  beforeUpdate(repositionDropdown);

  let sectionStore: SectionStore;
  $: sectionStore = getSectionStore(idx);

  $: ({selectedStore, soleSelectedStore, playingStore, displayTextStore, completionsStore, editedStore, confirmedStore, userTextStore} = sectionStore);

  function select(event: MouseEvent) {
    if (event.buttons === 1) {
      dragStore.setFocus(idx);
    }
  }

  function contextMenu(event: MouseEvent) {
    event.preventDefault();
    console.log({
      selected: $selectedStore,
      soleSelected: $soleSelectedStore,
      playing: $playingStore,
      displayText: $displayTextStore,
      completions: $completionsStore,
      edited: $editedStore,
      confirmed: $confirmedStore,
      userText: $userTextStore
    });
  }
</script>

<style>
  .section {
    display: inline;
    white-space: pre;
    outline: none;

    padding-left: 0.12em;
    padding-right: 0.12em;
  }

  .section:empty::before {
    content: "_";
    font-weight: 300;
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

  .section::selection {
    background: none;
  }

  .soleSelected.section::selection {
    background-color: var(--blue-1);
    color: var(--grey-4);
  }

  .questionable {
    border-bottom: 1px solid var(--error);
  }
</style>

<span
  contenteditable
  bind:textContent={$displayTextStore}
  class="section"
  class:soleSelected={$soleSelectedStore}
  class:highlight={$selectedStore}
  class:sectionPlaying={$playingStore}
  class:underline={$displayTextStore.length === 0}
  class:placeholder={!$editedStore}
  class:questionable={$displayTextStore.length > 0 && $completionsStore.length > 1 && !$confirmedStore}
  data-sectionIdx={idx}
  on:keydown={event => handleSectionKeydown(event, sectionStore)}
  on:keyup={event => handleSectionKeyUp(event, sectionStore)}
  on:contextmenu={contextMenu}
  on:mousemove={select}
  on:mouseup={select}
/>
