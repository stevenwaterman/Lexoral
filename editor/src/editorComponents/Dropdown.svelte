<script lang="ts">
  import type { SectionState } from "../sectionStores";
  import { focusSectionStore, isSelectingStore } from "../selectionStores";
  import { modulo } from "../utils";

  let section: SectionState | undefined;
  $: section = $focusSectionStore;
  $: if (!$isSelectingStore) section?.spanComponent?.focus();

  let visible: boolean;
  $: visible = !$isSelectingStore && section !== undefined && options.length > 0;

  let left: number;
  let top: number;

  function resize(...deps: any[]) {
    left = section?.spanComponent?.offsetLeft ?? 0;
    top = (section?.spanComponent?.offsetTop ?? 0) + (section?.spanComponent?.offsetHeight ?? 0);
  }
  $: resize(section);

  let options: string[];
  $: options = section?.completionOptions ?? [];

  let selectedIdx: number = 0;

  let highlightIdx: number;
  $: highlightIdx = modulo(selectedIdx, options.length);

  function resetIdx(_?: any) {
    selectedIdx = 0;
  }
  $: resetIdx(visible);

  function keyDown(event: KeyboardEvent) {
    if (!visible) return;

    if (event.key === "ArrowUp") {
      event.preventDefault();
      selectedIdx = (selectedIdx ?? 0) - 1;
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      selectedIdx = (selectedIdx ?? -1) + 1;
    } else if (event.key === "Enter") {
      event.preventDefault();
      acceptOption();
    }
  }

  function mouseEnterOption(idx: number) {
    selectedIdx = idx;
  }

  function mouseClick(idx: number) {
    mouseEnterOption(idx);
    acceptOption();
  }

  function acceptOption() {
    if (section !== undefined && options.length > 0 && highlightIdx !== undefined) {
      const selectedOption = options[highlightIdx];
      section.setText(selectedOption);
    }
  }
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
    cursor: pointer;
  }

  .topBorder {
    border-top: 1px solid var(--form-border);
  }
</style>

<svelte:body on:keydown={keyDown}/>
<svelte:window on:resize={resize}/>

{#if visible}
  <div
    class="popup" 
    style={`left: ${left}px; top: ${top}px;`}
    on:mouseleave={resetIdx}
  >
    {#each options as option, idx}
      <span
        class="option"
        class:highlight={idx === highlightIdx}
        class:topBorder={idx !== 0}
        on:mouseenter="{() => mouseEnterOption(idx)}"
        on:click="{() => mouseClick(idx)}"
      >
        {option}
      </span>
    {/each}
  </div>
{/if}
