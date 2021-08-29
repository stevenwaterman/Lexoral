<script lang="ts">
  import { focusSectionStore, isTextSelectedStore } from "./selectionState";
  import { modulo } from "../utils/list";
  import { selectEnd, selectNext } from "./select";
  import type { Section } from "../text/textState";

  let section: Section | undefined;
  $: section = $focusSectionStore;
  $: if (!$isTextSelectedStore) section?.spanComponent?.focus();

  let visible: boolean;
  $: visible = !$isTextSelectedStore && section !== undefined && options.length > 0;

  let left: number;
  let top: number;

  function resize(...deps: any[]) {
    left = section?.spanComponent?.offsetLeft ?? 0;
    top = (section?.spanComponent?.offsetTop ?? 0) + (section?.spanComponent?.offsetHeight ?? 0);
  }
  $: resize(section);

  let options: string[];
  $: options = getOptions(section)
  function getOptions(section: Section | undefined): string[] {
    if (!section) return [];
    const {completionOptions, text, edited} = section;

    let options: string[] = completionOptions;
    if (!edited && text.length > 0) {
      options = options.filter(option => option !== text);
      options.unshift(text);
    }
    return options;
  }

  let selectedIdx: number = 0;

  let highlightIdx: number;
  $: highlightIdx = modulo(selectedIdx, options.length);

  function resetIdx(_?: any) {
    selectedIdx = 0;
  }
  $: resetIdx(visible);

  function keyDown(event: KeyboardEvent) {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (visible) selectedIdx = (selectedIdx ?? 0) - 1;
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (visible) selectedIdx = (selectedIdx ?? -1) + 1;
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
    if (visible && section !== undefined && options.length > 0 && highlightIdx !== undefined) {
        const selectedOption = options[highlightIdx];
        section.setText(selectedOption);
    } 
    selectNext(section?.spanComponent)
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
