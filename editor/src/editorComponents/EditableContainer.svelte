<script lang="ts">
  import { updateSelection } from "../selectionStores";

  function keyDown(event: KeyboardEvent) {
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
  }
</style>

<div
  contenteditable={true}
  on:keydown={keyDown}
  on:mousedown={mouseDown}
  on:mousemove={mouseMove}
  on:input={input}
>
  <slot/>
</div>