<script lang="ts">
  import { tick } from "svelte";
  import {
    deleteSelection, 
    earlySectionStore,
    focusSectionStore,
    isTextSelectedStore,
    lateSectionStore,
    selectedSectionsStore,
    selectionStore,
    updateSelection, 
    selectNext,
    selectParagraphEnd,
    selectParagraphStart,
    selectPosition, 
    selectPrev,
    selectStart
  } from "./selectionState";
  import type { SectionSelection } from "./selectionState";
  
  async function keyDown(event: KeyboardEvent) {
    if (event.key === "Backspace" && $isTextSelectedStore) {
      event.preventDefault();

      const selection: SectionSelection | undefined = $selectionStore;
      if (selection === undefined) return;
      deleteSelection(selection, $selectedSectionsStore);

      await tick();

      const component = $earlySectionStore?.spanComponent;
      if (component === undefined) return;
      selectPosition(component, selection.early.offset)
    }

    if (event.key === "Delete" && $isTextSelectedStore) {
      event.preventDefault();

      const selection: SectionSelection | undefined = $selectionStore;
      if (selection === undefined) return;
      deleteSelection(selection, $selectedSectionsStore);

      await tick();

      const component = $lateSectionStore?.spanComponent;
      if (component === undefined) return;

      const singleSection = $selectionStore?.early?.paragraph === $selectionStore?.late?.paragraph && $selectionStore?.early?.section === $selectionStore?.late?.section;
      if (singleSection) {
        selectPosition(component, selection.early.offset)
      } else {
        selectStart(component)
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