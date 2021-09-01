<script lang="ts">
  import { tick } from "svelte";

  import {
    deleteSelection, 
    earlySectionStore,
    isTextSelectedStore,
    lateSectionStore,
    selectedSectionsStore,
    selectionStore,
    updateSelection
  } from "./selectionState";
  import type { SectionSelection } from "./selectionState";

  import { 
findSectionNode,
    selectParagraphEnd,
    selectParagraphStart,
    selectPosition, 
selectSectionEnd, 
selectSectionStart, 
                selectStart
  } from "./select";
  
  async function keyDown(event: KeyboardEvent) {
    if ($isTextSelectedStore) {
      event.preventDefault();

      if (event.key === "Backspace") {
        const selection: SectionSelection | undefined = $selectionStore;
        if (selection === undefined) return;
        deleteSelection(selection, $selectedSectionsStore);

        await tick();

        const component = findSectionNode($earlySectionStore?.idx)
        if (component === undefined) return;
        selectPosition(component, selection.early.offset)
      }

      if (event.key === "Delete") {
        event.preventDefault();

        const selection: SectionSelection | undefined = $selectionStore;
        if (selection === undefined) return;
        deleteSelection(selection, $selectedSectionsStore);

        await tick();

        const component = findSectionNode($lateSectionStore?.idx);
        if (component === undefined) return;

        const singleSection = $selectionStore?.early?.paragraph === $selectionStore?.late?.paragraph && $selectionStore?.early?.section === $selectionStore?.late?.section;
        if (singleSection) {
          selectPosition(component, selection.early.offset)
        } else {
          selectStart(component)
        }
      }

      if (event.key === "ArrowLeft") {
        const component = findSectionNode($earlySectionStore?.idx);
        const offset = $selectionStore?.early?.offset;
        if (component !== undefined && offset !== undefined) {
          selectPosition(component, offset);
        }
      }

      if (event.key === "ArrowRight") {
        const component = findSectionNode($lateSectionStore?.idx);
        const offset = $selectionStore?.late?.offset;
        if (component !== undefined && offset !== undefined) {
          selectPosition(component, offset);
        }
      }
    }

    if (event.key === "Tab") {
      event.preventDefault();
      if (event.shiftKey) {
        const idx = $earlySectionStore?.idx
        if (idx !== undefined) selectSectionEnd(idx - 1);        
      } else {
        const idx = $lateSectionStore?.idx;
        if (idx !== undefined) selectSectionStart(idx + 1);
      }
    }

    if (event.key === "Home") {
      event.preventDefault();
      selectParagraphStart($earlySectionStore?.idx);
    }

    if (event.key === "End") {
      event.preventDefault();
      selectParagraphEnd($lateSectionStore?.idx);
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