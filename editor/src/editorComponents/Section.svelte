<script lang="ts">
  import type { SectionStore } from "../sectionStores";
  import { focusAtEndStore, focusAtStartStore, fromSectionIdxStore, toSectionIdxStore, updateSelection } from "../selectionStores";
  import { next, prev } from "../utils";

  export let sectionStore: SectionStore;

  let highlight: boolean;
  $: highlight = $fromSectionIdxStore !== null && $fromSectionIdxStore <= $sectionStore.idx && $toSectionIdxStore !== null && $toSectionIdxStore >= $sectionStore.idx;

  let component: HTMLSpanElement;
  $: if (component) sectionStore.registerComponent(component);
  $: if (!highlight && component) updateText();

  let displayText: string;
  $: displayText = " " + ($sectionStore.edited ? $sectionStore.text : $sectionStore.placeholder);

  function updateText() {
    if (component === undefined) return;
    const textContent = component.textContent.trim();
    if (!$sectionStore.edited && textContent === $sectionStore.placeholder) return;
    if (textContent === $sectionStore.text) return;
    sectionStore.setText(textContent);
  }

  function keyDown(event: KeyboardEvent) {
    if (event.key === "Delete") {
      if ($focusAtEndStore) {
        event.preventDefault();
        event.stopPropagation();
        next(component);
      }
    }

    if (event.key === "Backspace") {
      if ($focusAtStartStore) {
        event.preventDefault();
        event.stopPropagation();
        prev(component);
      }
    }

    if (event.key === "ArrowLeft") {
      if ($focusAtStartStore) {
        event.preventDefault();
        event.stopPropagation();
        prev(component);
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