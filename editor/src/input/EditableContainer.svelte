<script lang="ts">
  import { tick } from "svelte";

  import {
areMultipleSectionsSelectedStore,
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
selectSectionPosition,
        selectSectionStart,
    selectStart
  } from "./select";

  async function backspace(event: KeyboardEvent) {
    if ($isTextSelectedStore) {
      event.preventDefault();

      const selection: SectionSelection | undefined = $selectionStore;
      if (selection === undefined) return;
      deleteSelection(selection, $selectedSectionsStore);

      await tick();
      await selectSectionPosition($earlySectionStore?.idx, selection.early.offset);
    }
  }

  async function deleteKey(event: KeyboardEvent) {
    if ($isTextSelectedStore) {
      event.preventDefault();

      const multiSelection = $areMultipleSectionsSelectedStore;
      const selection: SectionSelection | undefined = $selectionStore;
      if (selection === undefined) return;
      deleteSelection(selection, $selectedSectionsStore);

      await tick();
      if (multiSelection) await selectSectionStart($lateSectionStore?.idx);
      else await selectSectionPosition($lateSectionStore?.idx, selection.early.offset);
    }
  }

  async function leftArrow(event: KeyboardEvent) {
    // if ($isTextSelectedStore && !event.shiftKey) {
    //   const component = findSectionNode($earlySectionStore?.idx);
    //   const offset = $selectionStore?.early?.offset;
    //   if (component !== undefined && offset !== undefined) {
    //     selectPosition(component, offset);
    //   }
    // }
  }

  async function rightArrow(event: KeyboardEvent) {
    // if ($isTextSelectedStore && !event.shiftKey) {
    //   const component = findSectionNode($lateSectionStore?.idx);
    //   const offset = $selectionStore?.late?.offset;
    //   if (component !== undefined && offset !== undefined) {
    //     selectPosition(component, offset);
    //   }
    // }
  }

  async function tab(event: KeyboardEvent) {
    if ($isTextSelectedStore) {
      event.preventDefault();
      if (event.shiftKey) {
        const idx = $earlySectionStore?.idx
        if (idx !== undefined) selectSectionEnd(idx - 1);        
      } else {
        const idx = $lateSectionStore?.idx;
        if (idx !== undefined) selectSectionStart(idx + 1);
      }
    }
  }

  async function home(event: KeyboardEvent) {
    if ($isTextSelectedStore) {
      event.preventDefault();
      selectParagraphStart($earlySectionStore?.idx);
      updateSelection();
    }
  }

  async function end(event: KeyboardEvent) {
    if ($isTextSelectedStore) {
      event.preventDefault();
      selectParagraphEnd($lateSectionStore?.idx);
      updateSelection();
    }
  }

  const keyFuncs: Partial<Record<string, (event: KeyboardEvent) => Promise<void>>> = {
    "Backspace": backspace,
    "Delete": deleteKey,
    "ArrowLeft": leftArrow,
    "ArrowRight": rightArrow,
    "Tab": tab,
    "Home": home,
    "End": end
  };
  
  async function keyDown(event: KeyboardEvent) {
    const func = keyFuncs[event.key];
    if (func !== undefined) func(event);
    else if ($isTextSelectedStore) event.preventDefault();
    await updateSelection();
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