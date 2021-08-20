<script lang="ts">
import { tick } from "svelte";

  import { deleteSelection, earlySectionStore, focusSectionStore, lateSectionStore, selectedSectionsStore, selectionStore, singleSelectionStore, updateSelection } from "../selectionStores";
  import { selectEnd, selectNext, selectParagraphEnd, selectParagraphStart, selectPrev, selectStart } from "../utils";

  export let textContent: string;

  async function keyDown(event: KeyboardEvent) {
    if (event.key === "Backspace" && !$singleSelectionStore) {
      event.preventDefault();
      deleteSelection($selectionStore, $selectedSectionsStore);
      selectEnd($earlySectionStore.spanComponent);
    }

    if (event.key === "Delete" && !$singleSelectionStore) {
      event.preventDefault();
      deleteSelection($selectionStore, $selectedSectionsStore);
      selectStart($lateSectionStore.spanComponent);
    }

    if (event.key === "Tab") {
      event.preventDefault();
      if (event.shiftKey) {
        const node = $earlySectionStore?.spanComponent;
        if (node) selectPrev(node);
      } else {
        const node = $lateSectionStore?.spanComponent;
        if (node) selectNext(node);
      }
    }

    if (event.key === "Home") {
      event.preventDefault();
      const node = $earlySectionStore?.spanComponent;
      if (node) selectParagraphStart(node);
    }

    if (event.key === "End") {
      event.preventDefault();
      const node = $lateSectionStore?.spanComponent;
      if (node) selectParagraphEnd(node);
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const node = $focusSectionStore?.spanComponent;
      if (node) selectNext(node);
    }

    updateSelection();
  }

  function mouseDown(event: MouseEvent) {
    updateSelection();
  }

  function mouseMove(event: MouseEvent) {
    if (event.buttons === 1) {
      updateSelection();
    }
  }

  function input(event: Event) {
    updateSelection();
  }
</script>

<style>
  div {
    outline: none;
    width: 100%;
  }
</style>

<div
  contenteditable
  tabindex={-1}
  bind:textContent
  on:keydown={keyDown}
  on:mousedown={mouseDown}
  on:mousemove={mouseMove}
  on:input={input}
  on:dragover|preventDefault
  on:drop|preventDefault
  on:drag|preventDefault
  on:dragstart|preventDefault
>
  <slot/>
</div>