<script lang="ts">
  import { updateSelection } from "../selectionStores";

  export let textContent: string;

  function keyDown(event: KeyboardEvent) {
    if (event.key === "Backspace") {
      console.log(event);
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
  bind:textContent
  on:keydown={keyDown}
  on:mousedown={mouseDown}
  on:mousemove={mouseMove}
  on:input={input}
>
  <slot/>
</div>