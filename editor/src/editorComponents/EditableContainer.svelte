<script lang="ts">
  import { tick } from "svelte";
  import { deleteSelection, earlySectionStore, focusSectionStore, isSelectingStore, lateSectionStore, selectedSectionsStore, selectionStore, updateSelection, selectNext, selectParagraphEnd, selectParagraphStart, selectPosition, selectPrev, selectStart } from "../selectionStores";

  export let textContent: string;

  async function keyDown(event: KeyboardEvent) {
    if (event.key === "Backspace" && $isSelectingStore) { //TODO delete whole sections when selecting across sections, rather than characters within sections
      event.preventDefault();
      deleteSelection($selectionStore, $selectedSectionsStore);
      await tick();
      selectPosition($earlySectionStore.spanComponent, $selectionStore.early.offset)
    }

    if (event.key === "Delete" && $isSelectingStore) {
      event.preventDefault();
      deleteSelection($selectionStore, $selectedSectionsStore);
      await tick();
      if ($selectionStore.early.paragraph === $selectionStore.late.paragraph && $selectionStore.early.section === $selectionStore.late.section) {
        selectPosition($lateSectionStore.spanComponent, $selectionStore.early.offset)
      } else {
        selectStart($lateSectionStore.spanComponent)
      }
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

  function mouseUp(event: MouseEvent) {
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
  on:mouseup={mouseUp}
  on:mousedown={mouseDown}
  on:mousemove={mouseMove}
  on:input={input}
  on:dragover|preventDefault
  on:drop|preventDefault
  on:drag|preventDefault
  on:dragstart|preventDefault
  on:cut|preventDefault
  on:paste|preventDefault
>
  <slot/>
</div>