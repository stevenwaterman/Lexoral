<script lang="ts">
  import { fromSectionStore, singleSelectionStore, toSectionStore, updateSelection } from "../selectionStores";
import { next, paragraphEnd, paragraphStart, prev } from "../utils";

  export let textContent: string;

  function keyDown(event: KeyboardEvent) {
    if (!$singleSelectionStore) {
      event.preventDefault();
      //TODO empty the sections instead
    }

    if (event.key === "Tab") {
      event.preventDefault();
      if (event.shiftKey) {
        const node = $fromSectionStore?.spanComponent;
        if (node) prev(node);
      } else {
        const node = $toSectionStore?.spanComponent;
        if (node) next(node);
      }
    }

    if (event.key === "Home") {
      event.preventDefault();
      const node = $fromSectionStore?.spanComponent;
      if (node) paragraphStart(node);
    }

    if (event.key === "End") {
      event.preventDefault();
      const node = $toSectionStore?.spanComponent;
      if (node) paragraphEnd(node);
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const node = $toSectionStore?.spanComponent;
      if (node) next(node);
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