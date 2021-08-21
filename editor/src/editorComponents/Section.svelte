<script lang="ts">
import { tick } from "svelte";

  import type { SectionStore } from "../sectionStores";
  import { caretPositionStore, earlySectionIdxStore, lateSectionIdxStore } from "../selectionStores";
  import { selectEnd, selectNext, selectPrev } from "../utils";

  export let sectionStore: SectionStore;

  let highlight: boolean;
  $: highlight = $earlySectionIdxStore !== null && $earlySectionIdxStore <= $sectionStore.idx && $lateSectionIdxStore !== null && $lateSectionIdxStore >= $sectionStore.idx;

  let component: HTMLSpanElement;
  $: if (component) sectionStore.registerComponent(component);
  $: if (!highlight && component) updateText();

  let displayText: string;
  $: displayText = " " + ($sectionStore.edited ? $sectionStore.text : $sectionStore.placeholder);

  async function updateText() {
    if (component === undefined) return;
    const textContent = component.textContent.trim();
    if (!$sectionStore.edited && textContent === $sectionStore.placeholder) return;
    if (textContent === $sectionStore.text) return;
    if (!$sectionStore.edited && textContent.substring(1) === $sectionStore.placeholder) {
      sectionStore.setText(textContent.substring(0, 1))
      await tick();
      selectEnd(component);
    }
    else {
      sectionStore.setText(textContent);
    }
  }

  function keyDown(event: KeyboardEvent) {
    if (event.key === "Delete") {
      if ($caretPositionStore.end) {
        event.preventDefault();
        event.stopPropagation();
        selectNext(component);
      }
    }

    if (event.key === "Backspace") {
      if ($caretPositionStore.start) {
        event.preventDefault();
        event.stopPropagation();
        selectPrev(component);
      }
    }

    if (event.key === "ArrowLeft") {
      if ($caretPositionStore.start) {
        // prevent moving caret to start in first section
        event.preventDefault();
        event.stopPropagation();
        selectPrev(component);
      }
    }

    setTimeout(updateText);
  }
</script>

<style>
  .section {
    display: inline-block;
    white-space: pre;
    outline: none;
  }

  .highlight {
    background-color: var(--weak-focus);
  }

  .section.unsure {
    color: var(--strong-focus)
  }

  .placeholder {
    color: var(--secondary-text);
  }
</style>

<span
  class="section"
  class:highlight
  class:placeholder={!$sectionStore.edited}
  class:unsure={!$sectionStore.edited && $sectionStore.completionOptions.length > 1}
  bind:this={component}
  on:keydown={keyDown}
  on:blur={updateText}
  tabindex={$sectionStore.idx}
>
  {displayText}
</span>