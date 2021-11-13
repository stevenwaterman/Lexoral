<script lang="ts">
  import type { Readable } from "svelte/store";
  import { patchInterface } from "../../state/patch/patchInterface";
  import { getAssertExists } from "../../utils/list";
  import { selectNextSection } from "../select";

  export let sectionIdx: number;
  export let completionsStore: Readable<string[]>;

  let selectedIdx: number | undefined = undefined;

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowUp" && event.ctrlKey) {
      event.preventDefault();
      selectPrev();
    }
    else if (event.key === "ArrowDown" && event.ctrlKey) {
      event.preventDefault();
      selectNext();
    }
    else if (event.key === "Enter" && event.ctrlKey) {
      event.preventDefault();
      acceptOption(selectedIdx);
    }
  }

  function selectPrev() {
    if ($completionsStore.length === 0) return;

    if (selectedIdx === undefined) {
      selectedIdx = $completionsStore.length - 1;
    } else {
      selectedIdx = Math.max(0, selectedIdx - 1);
    }
  }

  function selectNext() {
    if ($completionsStore.length === 0) return;

    if (selectedIdx === undefined) {
      selectedIdx = 0;
    } else {
      selectedIdx = Math.min($completionsStore.length - 1, selectedIdx + 1);
    }
  }

  async function acceptOption(optionIdx: number | undefined) {
    if (optionIdx === undefined) return;

    const selectedOption = getAssertExists($completionsStore, optionIdx);
    patchInterface.append(sectionIdx, { text: selectedOption, confirmed: true });
    await selectNextSection(sectionIdx);
  }

  function mouseDown(event: MouseEvent, idx: number) {
    event.preventDefault();
    acceptOption(idx);
  }
</script>

<style>
  .popup {
    max-width: 100vw;
    border: 1px solid var(--form-border);
    background: var(--page-background);
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    border-radius: 4px;
  }

  .highlight {
    background-color: var(--weak-focus);
  }

  .option {
    padding: 2px;
    cursor: pointer;
    white-space: pre;
  }

  .topBorder {
    border-top: 1px solid var(--form-border);
  }
</style>

<svelte:body on:keydown={onKeyDown}/>

<div class="popup">
  {#each $completionsStore as option, idx}
    <span
      class="option"
      class:highlight={idx === selectedIdx}
      class:topBorder={idx !== 0}
      on:mouseenter="{() => {selectedIdx = idx}}"
      on:mousedown="{event => mouseDown(event, idx)}"
    >
      {option.padEnd(1, " ")}
    </span>
  {/each}
</div>
