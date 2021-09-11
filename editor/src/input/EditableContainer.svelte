<script lang="ts">
  import {
    focusSectionIdxStore,
    focusSectionStore,
    updateSelection
  } from "./selectionState";

  import {
    restoreSelection,
    saveSelection
  } from "./select";

  import { MaybeSectionMutator } from "../text/storeMutators";
  import { findSectionNode } from "../text/selector";
  import { onKeyPressed } from "./controls";
  import { suppressAudioStore } from "../audio/audio";

  async function mouseDown(event: MouseEvent) {
    suppressAudioStore.set(true);
  }

  // async function mouseMove(event: MouseEvent) {
  //   if (event.buttons === 1) await updateSelection();
  // }

  async function mouseUp(event: MouseEvent) {
    await updateSelection();
    suppressAudioStore.set(false);
  }

  async function input(event: Event) {
    await updateText();
    await updateSelection();
  }

  async function updateText() {
    const textContent = findSectionNode($focusSectionIdxStore)?.textContent ?? undefined;
    if (textContent === undefined) return;

    const trimmedContent = textContent.slice(1, textContent.length - 1);

    saveSelection();
    new MaybeSectionMutator(focusSectionStore).setText(trimmedContent);
    restoreSelection();
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
  <slot />
</div>
