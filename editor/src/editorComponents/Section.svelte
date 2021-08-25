<script lang="ts">
  import { tick } from "svelte";
  import type { Readable } from "svelte/store";
  import { getAudioCurrentSectionStore, playingStore } from "../audio";
  import type { SectionStore } from "../sectionStores";
  import { caretPositionStore, earlySectionIdxStore, focusSectionStore, lateSectionIdxStore, selectEnd, selectNext, selectPrev } from "../selectionStores";

  export let sectionStore: SectionStore;

  let highlight: boolean;
  $: highlight = ($earlySectionIdxStore ?? 0) <= $sectionStore.idx && ($lateSectionIdxStore ?? 0) >= $sectionStore.idx;

  let component: HTMLSpanElement;
  $: if (component) sectionStore.registerComponent(component);
  $: if (!highlight && component) updateText();

  let displayText: string;
  $: displayText = " " + ($sectionStore.edited ? $sectionStore.text : $sectionStore.placeholder);

  let sectionPlayingStore: Readable<boolean>;
  $: sectionPlayingStore = getAudioCurrentSectionStore($sectionStore.idx)

  async function updateText() {
    const textContent = component?.textContent?.trim();
    if (textContent === undefined) return;

    if (!$sectionStore.edited && textContent === $sectionStore.placeholder) return;
    if (textContent === $sectionStore.text) return;
    if (!$sectionStore.edited && textContent.substring(1) === $sectionStore.placeholder) {
      sectionStore.setText(textContent.substring(0, 1))
      await tick();
      selectEnd(component);
    }
    else {
      sectionStore.setText(textContent);
    }
  }

  function keyDown(event: KeyboardEvent) {
    if (event.key === "Delete") {
      if ($caretPositionStore.end) {
        event.preventDefault();
        event.stopPropagation();
        selectNext(component);
      }
    }

    if (event.key === "Backspace") {
      if ($caretPositionStore.start) {
        event.preventDefault();
        event.stopPropagation();
        selectPrev(component);
      }
    }

    if (event.key === "ArrowLeft") {
      if ($caretPositionStore.start) {
        // prevent moving caret to start in first section
        event.preventDefault();
        event.stopPropagation();
        selectPrev(component);
      }
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
  class:sectionPlaying={$sectionPlayingStore && $playingStore}
  class:nonePlaying={!$playingStore}
  bind:this={component}
  on:keydown={keyDown}
  on:blur={onBlur}
  tabindex={$sectionStore.idx}
>
  {displayText}
</span>