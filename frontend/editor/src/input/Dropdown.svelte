<script lang="ts">
  import { getAssertExists, modulo } from "../utils/list";
  import { findSectionNode, selectNextSection } from "./select";
  import { playingStore } from "../audio/audioStatus";
  import { patchInterface } from "../state/patch/patchInterface";
  import { focusSectionIdxStore, isTextSelectedStore } from "./selectionState";
  import { sectionStores } from "../state/section/sectionStore";
  import type { SectionStore } from "../state/section/sectionStore";
  import type { Readable } from "svelte/store";

  let sectionIdx: number | undefined;
  $: sectionIdx = $focusSectionIdxStore;

  let section: SectionStore | undefined;
  $: section = sectionIdx === undefined ? undefined : sectionStores[sectionIdx];

  let completionsStore: Readable<[string, ...string[]]> | undefined;
  $: completionsStore = section === undefined ? undefined : section.completionsStore;

  let completions: string[];
  $: completions = completionsStore === undefined ? [] : $completionsStore

  let visible: boolean;
  $: visible = !$isTextSelectedStore && section !== undefined && completions.length > 1;

  let sectionNode: HTMLSpanElement | undefined;
  $: sectionNode = findSectionNode(sectionIdx);

  function resize() {
    sectionNode = sectionNode;
  }

  let paragraphNode: HTMLElement | undefined;
  $: paragraphNode = sectionNode?.parentElement ?? undefined;

  let sectionWraps: boolean;
  $: sectionWraps = (sectionNode?.offsetLeft ?? 0) + (sectionNode?.offsetWidth ?? 0) > (paragraphNode?.offsetWidth ?? 0);

  let sectionOffsetLeft: number;
  $: sectionOffsetLeft = sectionWraps ? 0 : sectionNode?.offsetLeft ?? 0;

  let left: number;
  $: left = sectionOffsetLeft + (paragraphNode?.offsetLeft ?? 0);

  let top: number;
  $: top = (sectionNode?.offsetTop ?? 0) + (paragraphNode?.offsetTop ?? 0) + (sectionNode?.offsetHeight ?? 0);

  let selectedIdx: number = 0;

  let highlightIdx: number;
  $: highlightIdx = modulo(selectedIdx, completions.length);

  function resetIdx(..._: any[]) {
    selectedIdx = 0;
  }
  $: resetIdx(visible, section);

  function keyDown(event: KeyboardEvent) {
    makeOpaque();
    if (event.key === "ArrowUp" && event.ctrlKey && !event.altKey) {
      event.preventDefault();
      if (visible) selectedIdx = (selectedIdx ?? 0) - 1;
    } else if (event.key === "ArrowDown" && event.ctrlKey && !event.altKey) {
      event.preventDefault();
      if (visible) selectedIdx = (selectedIdx ?? -1) + 1;
    } else if (event.key === "Enter" && event.ctrlKey) {
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
    if (section && visible && completions.length > 0 && highlightIdx !== undefined) {
      const selectedOption = getAssertExists(completions, highlightIdx);
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
    z-index: 1;
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
    white-space: pre;
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
    class:transparent
    style={`left: ${left}px; top: ${top}px;`}
    on:mouseenter={mouseEnter}
    on:mouseleave={mouseLeave}
  >
    {#each completions as option, idx}
      <span
        class="option"
        class:highlight={idx === highlightIdx}
        class:topBorder={idx !== 0}
        on:mouseenter="{() => mouseEnterOption(idx)}"
        on:mousedown="{() => mouseClick(idx)}"
      >
        {option.padEnd(1, " ")}
      </span>
    {/each}
  </div>
{/if}
