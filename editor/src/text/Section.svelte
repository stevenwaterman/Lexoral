<script lang="ts">
  import { tick } from "svelte";
  import { playingStore, currentlyPlayingSectionIdxStore } from "../audio/audio";
  import type { SectionStore } from "./textState";
  import { caretPositionStore, earlySectionIdxStore, focusSectionStore, lateSectionIdxStore } from "../input/selectionState";
  import { selectEnd, selectSectionEnd, selectSectionStart, selectStart } from "../input/select";
  import { SectionMutator } from "./storeMutators";
  import { toggleParagraph } from "../input/paragraphs";

  export let sectionStore: SectionStore;
  export let first: boolean;
  export let last: boolean;

  let highlight: boolean;
  $: highlight = ($earlySectionIdxStore ?? 0) <= $sectionStore.idx && ($lateSectionIdxStore ?? 0) >= $sectionStore.idx;

  let component: HTMLSpanElement;
  $: if (!highlight && component) updateText();

  let displayText: string;
  $: displayText = " " + ($sectionStore.edited ? $sectionStore.text : $sectionStore.placeholder);

  async function updateText() {
    await tick();
    const textContent = component?.textContent?.trim();
    if (textContent === undefined) return;

    if (!$sectionStore.edited && textContent === $sectionStore.placeholder) return;
    if (textContent === $sectionStore.text) return;
    if (!$sectionStore.edited && textContent.substring(1) === $sectionStore.placeholder) {
      new SectionMutator(sectionStore).setText(textContent.substring(0, 1))
      await tick();
      selectEnd(component);
    } else {
      new SectionMutator(sectionStore).setText(textContent);
    }
  }

  async function keyDown(event: KeyboardEvent) {
    if (event.key === "Delete") {
      if ($caretPositionStore.end) {
        event.preventDefault();
        await selectSectionStart($sectionStore.idx + 1)
        if (last) await toggleParagraph();
      }
    }

    if (event.key === "Backspace") {
      if ($caretPositionStore.start) {
        event.preventDefault();
        if (first) await toggleParagraph();
        else await selectSectionEnd($sectionStore.idx - 1);
      }
    }

    if (event.key === "ArrowLeft" && !event.shiftKey && $caretPositionStore.start) {
      // prevent moving caret to start in first section of document
      event.preventDefault();
      await selectSectionEnd($sectionStore.idx - 1);
    }

    if (event.key === "ArrowRight" && !event.shiftKey && $caretPositionStore.end) {
      // prevent moving caret to start in first section of paragraph
      event.preventDefault();
      await selectSectionStart($sectionStore.idx + 1);
    }

    setTimeout(updateText);
  }

  async function onBlur() {
    setTimeout(() => {
      if ($focusSectionStore === $sectionStore) {
        component.focus();
      }
    })
    
  }
</script>

<style>
  .section {
    display: inline-block;
    white-space: pre;
    outline: none;
    transition: background 0.2s;
  }

  .section::selection {
    background: none;
  }

  .section.nonePlaying::selection {
    background-color: rgba(76, 108, 169, 0.99);
    color: var(--light-text);
  }

  .highlight {
    background-color: var(--weak-focus);
  }

  .placeholder {
    color: var(--secondary-text);
  }

  .sectionPlaying {
    background-color: var(--focus);
  }
</style>

<span
  class="section"
  class:highlight
  class:placeholder={!$sectionStore.edited}
  class:sectionPlaying={$currentlyPlayingSectionIdxStore === $sectionStore.idx}
  class:nonePlaying={!$playingStore}
  bind:this={component}
  on:keydown={keyDown}
  on:blur={onBlur}
  tabindex={$sectionStore.idx}
  data-sectionIdx={$sectionStore.idx}
>
  {displayText}
</span>