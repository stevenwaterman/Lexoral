<script lang="ts">
  import type { SectionState, SectionStore } from "../sectionStores";
  import { dropdownPositionStore, dropdownSectionStore } from "../selectionStores";
  import { clamp, next } from "../utils";

  let section: SectionState & Pick<SectionStore, "setText"> | undefined;
  $: section = $dropdownSectionStore;
  
  let visible: boolean;
  $: visible = section !== undefined && options.length > 0;

  let left: number;
  $: left = $dropdownPositionStore.left;

  let top: number;
  $: top = $dropdownPositionStore.top;

  let options: string[];
  $: options = section?.completionOptions;

  let selectedIdx = 0;

  function keyDown(event: KeyboardEvent) {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const newIdx = selectedIdx - 1;
      selectedIdx = clamp(newIdx, 0, options.length - 1);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const newIdx = selectedIdx + 1;
      selectedIdx = clamp(newIdx, 0, options.length - 1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (options.length > 0) {
        const selectedOption = options[selectedIdx];
        section.setText(selectedOption);
      }
    }
  }

  function resetIdx(_: any) {
    selectedIdx = 0;
  }
  $: resetIdx(section);
</script>

<style>
  .popup {
    position: absolute;
    max-width: 100vw;
    border: 1px solid var(--form-border);
    z-index: 2;
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
    white-space: nowrap;
    padding: 2px;
  }

  .topBorder {
    border-top: 1px solid var(--form-border);
  }
</style>

<svelte:body on:keydown={keyDown}/>

{#if visible}
  <div class="popup" style={`left: ${left}px; top: ${top}px;`}>
    {#each options as option, idx}
      <span
        class="option"
        class:highlight={idx === selectedIdx}
        class:topBorder={idx !== 0}
      >
        {option}
      </span>
    {/each}
  </div>
{/if}
