<script lang="ts">
  import { focusSectionIdxStore } from "./selectionState";

  import {
    restoreSelection,
    saveSelection
  } from "./select";

  import { findSectionNode } from "../text/selector";
  import { onKeyPressed } from "./controls";
  import { patchInterface } from "../state/patch/patchInterface";

  let wrapper: HTMLDivElement;

  async function mouseDown(event: MouseEvent) {
    // suppressAudioStore.set(true);
  }

  // async function mouseMove(event: MouseEvent) {
  //   if (event.buttons === 1) await updateSelection();
  // }

  async function mouseUp(event: MouseEvent) {
    // await updateSelection();
    // suppressAudioStore.set(false);
  }

  async function input(event: Event) {
    await updateText();
    // await updateSelection();
  }

  async function updateText() {
    const idx = $focusSectionIdxStore;
    if (idx === undefined) return;

    const textContent = findSectionNode(idx)?.textContent ?? undefined;
    if (textContent === undefined) return;

    const trimmedContent = textContent.slice(1, textContent.length - 1);

    saveSelection();
    patchInterface.append(idx, { text: trimmedContent });
    restoreSelection();
  }
</script>

<style>
  .scroller {
    outline: none;
    padding: 1em;
    padding-top: 100px;
  }
</style>

<div
  class="scroller"
  bind:this={wrapper}
  contenteditable
  tabindex={-1}
  on:keydown={onKeyPressed}
  on:mousedown={mouseDown}
  on:mouseup={mouseUp}
  on:input={input}
  on:dragover|preventDefault
  on:drop|preventDefault
  on:drag|preventDefault
  on:dragstart|preventDefault
  on:cut|preventDefault
  on:paste|preventDefault>
  <slot wrapper={wrapper} />
</div>
