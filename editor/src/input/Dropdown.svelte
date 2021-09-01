<script lang="ts">
  import { areMultipleSectionsSelectedStore, focusSectionStore, isTextSelectedStore } from "./selectionState";
  import { modulo } from "../utils/list";
  import { findSectionNode, selectEnd, selectSectionStart } from "./select";
  import type { Section } from "../text/textState";
import { MaybeSectionMutator, SectionMutator } from "../text/storeMutators";

  let section: Section | undefined;
  $: section = $focusSectionStore;
  $: if (!$areMultipleSectionsSelectedStore) findSectionNode(section?.idx)?.focus();

  let visible: boolean;
  $: visible = !$isTextSelectedStore && section !== undefined && options.length > 0;

  let left: number;
  let top: number;

  function resize(...deps: any[]) {
    const component = findSectionNode(section?.idx);
    if (!component) return;
    left = component.offsetLeft ?? 0;
    top = (component.offsetTop ?? 0) + (component.offsetHeight ?? 0);
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

  function resetIdx(..._: any[]) {
    selectedIdx = 0;
  }
  $: resetIdx(visible, section);

  function keyDown(event: KeyboardEvent) {
    if (event.key === "ArrowUp" && !event.ctrlKey) {
      event.preventDefault();
      if (visible) selectedIdx = (selectedIdx ?? 0) - 1;
    } else if (event.key === "ArrowDown" && !event.ctrlKey) {
      event.preventDefault();
      if (visible) selectedIdx = (selectedIdx ?? -1) + 1;
    } else if (event.key === "Enter" && !event.ctrlKey) {
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
    if (visible && options.length > 0 && highlightIdx !== undefined) {
        const selectedOption = options[highlightIdx];
        new MaybeSectionMutator(focusSectionStore).setText(selectedOption);
    }
    const idx = section?.idx;
    if (idx !== undefined) selectSectionStart(idx + 1);
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
