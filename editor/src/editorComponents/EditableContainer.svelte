<script lang="ts">
  import { singleSelectionStore, updateSelection } from "../selectionStores";

  export let textContent: string;

  function keyDown(event: KeyboardEvent) {
    // console.log(event);
    if (event.key === "Backspace") {
      if (!$singleSelectionStore) {
        event.preventDefault();
        //TODO empty the sections instead
      }
    }

    if (event.key === "Delete") {
      if (!$singleSelectionStore) {
        event.preventDefault();
      }
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

  function input() {
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