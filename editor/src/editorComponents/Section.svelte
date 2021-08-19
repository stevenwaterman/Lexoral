<script lang="ts">
  import type { SectionStore } from "../sectionStores";
  import { focusAtEndStore, focusAtStartStore, selectedTimeRangeStore, updateSelection } from "../selectionStores";

  export let sectionStore: SectionStore;

  let highlight: boolean;
  $: highlight = 
    $selectedTimeRangeStore !== undefined && ((
      $selectedTimeRangeStore.start < $sectionStore.endTime &&
      $selectedTimeRangeStore.end > $sectionStore.startTime
    ) || (
      $selectedTimeRangeStore.start === $sectionStore.startTime &&
      $selectedTimeRangeStore.end === $sectionStore.endTime
    ));

  let component: HTMLSpanElement;
  $: if (component) sectionStore.registerComponent(component);
  $: if (!highlight && component) updateText();

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

        const node: Node = component.nextElementSibling?.firstChild ?? component.parentElement.nextElementSibling?.firstElementChild?.firstChild;
        if (node !== null) {
          const range = document.createRange();
          range.setStart(node, 1);
          range.setEnd(node, 1);

          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          updateSelection();
        }
      }
    }

    if (event.key === "Backspace") {
      if ($focusAtStartStore) {
        event.preventDefault();
        event.stopPropagation();

        const node: Node = component.previousElementSibling?.firstChild ?? component.parentElement.previousElementSibling?.lastElementChild?.firstChild;
        console.log(component.previousElementSibling?.firstChild)
        if (node !== null) {
          const range = document.createRange();
          range.setStart(node, node.textContent.length);
          range.setEnd(node, node.textContent.length);

          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          updateSelection();
        }
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

  .section::selection {
    display: none;
  }

  .highlight {
    background-color: var(--weak-focus);
  }

  .placeholder {
    color: var(--secondary-text);
  }
</style>

<span
  class="section"
  class:highlight
  class:placeholder={!$sectionStore.edited}
  bind:this={component}
  on:keydown={keyDown}
  on:blur={updateText}
  tabindex={$sectionStore.idx}
>
  {" " + $sectionStore.placeholder}
</span>