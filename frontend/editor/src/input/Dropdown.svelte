<script lang="ts">
  import { focusSectionIdxStore, focusSectionStore, isTextSelectedStore } from "./selectionState";
  import { getAssertExists, modulo } from "../utils/list";
  import { selectNextSection, selectSectionStart } from "./select";
  import { playingStore } from "../audio/audio";
  import { findSectionNode } from "../text/selector";
  import type { Section } from "../state/sectionStore";
import { patchInterface } from "../state/patch/patchInterface";

  export let wrapper: HTMLDivElement | undefined;

  let section: Section | undefined;
  $: section = $focusSectionStore;

  let visible: boolean;
  $: visible = !$isTextSelectedStore && section !== undefined && options.length > 0;

  let optionHeight: number;
  let left: number;
  let top: number;

  function resize(...deps: any[]) {
    if (!section) return;

    const sectionBox = findSectionNode(section?.idx)?.getBoundingClientRect();
    const wrapperBox = wrapper?.getBoundingClientRect();
    if (!wrapperBox || !sectionBox) return;

    left = sectionBox.left - wrapperBox.left

    const boxHeight = section.completions.length * (optionHeight + 1) + 5;
    const desiredTop = sectionBox.top + sectionBox.height - wrapperBox.top;
    const desiredBottom = desiredTop + boxHeight;

    if (desiredBottom >= wrapperBox.height) {
      // Point upwards instead
      top = sectionBox.top - wrapperBox.top - boxHeight
    } else {
      top = desiredTop;
    }
    
  }
  $: resize(section);

  let options: string[];
  $: options = getOptions(section)
  function getOptions(section: Section | undefined): string[] {
    if (!section) return [];
    const {completions, text, edited} = section;

    let options: string[] = completions;
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
    makeOpaque();
    if (event.key === "ArrowUp" && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      if (visible) selectedIdx = (selectedIdx ?? 0) - 1;
    } else if (event.key === "ArrowDown" && !event.ctrlKey && !event.altKey) {
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

  async function acceptOption() {
    if (section && visible && options.length > 0 && highlightIdx !== undefined) {
      const selectedOption = getAssertExists(options, highlightIdx);
      patchInterface.append(section.idx, { text: selectedOption });
    }
    await selectNextSection(section?.idx);
  }

  let mouseInside = false;
  function mouseEnter() {
    mouseInside = true;
    makeOpaque();
  }
  function mouseLeave() {
    mouseInside = false;
    resetIdx();
  }

  let timeout: NodeJS.Timeout | undefined = undefined;
  let transparent: boolean = false;
  $: if ($playingStore && !transparent && !mouseInside) {
    timeout = setTimeout(() => {
      transparent = true;
    }, 1500)
  }

  function makeOpaque() {
    if (timeout !== undefined) clearTimeout(timeout);
    transparent = false;
  }
  $: if (!$playingStore) makeOpaque();
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

    transition-property: opacity;
    transition-duration: 500ms;
  }

  .transparent {
    opacity: 25%;
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

  .invisible {
    opacity: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>

<svelte:body on:keydown={keyDown}/>
<svelte:window on:resize={resize}/>

<span class="option invisible" bind:clientHeight={optionHeight}>Test</span>

{#if visible}
  <div
    class="popup"
    class:transparent
    style={`left: ${left}px; top: ${top}px;`}
    on:mouseenter={mouseEnter}
    on:mouseleave={mouseLeave}
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
