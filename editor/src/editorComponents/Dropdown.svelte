<script lang="ts">
  import { getOptions } from "../align";
  import type { SectionState } from "../sectionStores";
  import { dropdownPositionStore, dropdownSectionStore } from "../selectionStores";
  import { clamp } from "../utils";

  let section: SectionState | null;
  $: section = $dropdownSectionStore;
  
  let visible: boolean;
  $: visible = section !== null;

  let left: number;
  $: left = $dropdownPositionStore.left;

  let top: number;
  $: top = $dropdownPositionStore.top;

  let options: string[];
  $: options = section?.options;

  let completionOptions: string[];
  $: completionOptions = section === null ? [] : getOptions("", options);

  let selectedIdx = 0;

  function keyDown(event: KeyboardEvent) {
    if (!visible) return;

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const newIdx = selectedIdx - 1;
      selectedIdx = clamp(newIdx, 0, options.length - 1);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const newIdx = selectedIdx + 1;
      selectedIdx = clamp(newIdx, 0, options.length - 1);
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
    {#each completionOptions as option, idx}
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
