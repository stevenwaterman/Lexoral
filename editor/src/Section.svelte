<script lang="ts">
  import { getOptions } from "./align";
  import Dropdown from "./Dropdown.svelte";
  import { playingSectionsStore, playingStore } from "./audio";
  import { editSelectedSectionStore, modeStore, navDragSelectingStore, escPressedStore, selectionStore, selectionStoreSorted, selectionCountStore, outputStore, editDirectionStore } from "./state";
  import type { OutputSection } from "./types";
  import { clamp, modulo, moduloGet, paragraphBounds } from "./utils";

  export let section: OutputSection;
  let text: string = "";
  let input: HTMLInputElement;

  $: if ($modeStore === "nav") input?.blur();

  let selected: boolean;
  $: selected = $selectionStoreSorted.startIdx <= section.idx && $selectionStoreSorted.endIdx >= section.idx;

  let navOnlySelected: boolean;
  $: navOnlySelected = $modeStore === "nav" && selected && $selectionCountStore === 1;

  $: if (!$navDragSelectingStore && $selectionStore.endIdx === section.idx && !$playingStore) {
    input?.scrollIntoView({ block: "center" });
  }

  let navPlaying: boolean;
  $: navPlaying = $modeStore === "nav" && selected && $playingSectionsStore[section.idx] === true;

  $: if(navPlaying) {
    input?.scrollIntoView({ block: "center" });
  }

  let editing: boolean;
  $: editing = $modeStore === "edit" && $editSelectedSectionStore === section;

  let navDropdownVisible: boolean;
  $: navDropdownVisible = navPlaying || navOnlySelected;

  let editDropdownVisible: boolean;
  $: editDropdownVisible = editing;

  let anyDropdownVisible: boolean;
  $: anyDropdownVisible = navDropdownVisible || editDropdownVisible;

  $: if(input && editing) {
    if ($editDirectionStore === "start") focusStart();
    else focusEnd();
  }

  let options: string[];
  $: options = getOptions(text, section.options);

  let selectedIdx: number = 0;

  let clampedSelectedIdx: number;
  $: clampedSelectedIdx = modulo(selectedIdx, options.length);

  let selectedOption: string | undefined;
  $: selectedOption = moduloGet(options, selectedIdx);

  $: if (!anyDropdownVisible) selectedIdx = 0;

  function key(event: KeyboardEvent) {
    if ($modeStore === "nav") return;
    const start = input.selectionStart;
    const end = input.selectionEnd;

    if (start === end) { // Nothing selected
      if((event.key === "ArrowRight" || event.key === "Delete") && end === text.length && !event.shiftKey) {
        event.preventDefault();
        next();
      } else if ((event.key === "ArrowLeft" || event.key === "Backspace") && start === 0 && !event.shiftKey) {
        event.preventDefault();
        prev();
      }
    }

    if (event.key === "Enter") {
      event.preventDefault();
      if (event.shiftKey) {
        section.startParagraph = !section.startParagraph;
      } else {
        acceptOption();
        next();
      }
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (options.length > 1 && !event.shiftKey) {
        selectedIdx++;
      } else {
        moveDown();
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (options.length > 1 && !event.shiftKey) {
        selectedIdx--;
      } else {
        moveUp();
      }
    }

    if (event.key === "Tab") {
      event.preventDefault();
      if (event.shiftKey) {
        prev();
      } else {
        next();
      }
    }
  }

  function moveDown() {
    const cursor = section.idx;
    const sections = $outputStore;

    const currentParagraphBounds = paragraphBounds(sections, cursor);
    if (currentParagraphBounds.endIdx === $outputStore.length - 1) return;
    const newCursor = currentParagraphBounds.endIdx + 1;

    selectionStore.set({ startIdx: newCursor, endIdx: newCursor });
  }

  function moveUp() {
    const cursor = section.idx
    const sections = $outputStore;

    const currentParagraphBounds = paragraphBounds(sections, cursor);
    const prevParagraphBounds = paragraphBounds(sections, currentParagraphBounds.startIdx - 1);
    if (prevParagraphBounds === null) return;

    const newCursor = prevParagraphBounds.startIdx;
    selectionStore.set({ startIdx: newCursor, endIdx: newCursor });
  }

  function prev() {
    editDirectionStore.set("end");
    const newCursor = section.idx - 1;
    const clampedCursor = clamp(newCursor, 0, $outputStore.length - 1)
    selectionStore.set({ startIdx: clampedCursor, endIdx: clampedCursor });
  }

  function next() {
    editDirectionStore.set("start");
    const newCursor = section.idx + 1;
    const clampedCursor = clamp(newCursor, 0, $outputStore.length - 1)
    selectionStore.set({ startIdx: clampedCursor, endIdx: clampedCursor });
  }

  function acceptOption() {
    if (!selectedOption) return;
    text += selectedOption.substring(text.length, selectedOption.length);
    focusEnd();
  }

  function clickedOption(event: CustomEvent<number>) {
    if ($modeStore === "nav") return;
    const selectedOption = options[event.detail];
    text += selectedOption.substring(text.length, selectedOption.length);
    focusEnd(true);
  }

  function selectOption(event: CustomEvent<number>) {
    selectedIdx = event.detail;
  }

  export function focusStart(force: boolean = false) {
    setTimeout(() => {
      if (force || !inputFocussed) {
        input.focus();
        input.setSelectionRange(0, 0, "none");
      }
    })
  }

  export function focusEnd(force: boolean = false) {
    setTimeout(() => {
      if (force || !inputFocussed) {
        input.focus();
        input.setSelectionRange(text.length, text.length, "none");
      }
    })
  }

  let inputFocussed: boolean = false;

  let wasOnlySelectedBeforeMouseDown: boolean = false;
  function mouseDown(event: MouseEvent) {
    wasOnlySelectedBeforeMouseDown = navOnlySelected;

    if ($modeStore === "nav") {
      event.preventDefault();
      navDragSelectingStore.set(true);

      if (event.shiftKey) {
        selectionStore.update(state => {
          if (state === null) return { startIdx: section.idx, endIdx: section.idx }
          return { startIdx: state.startIdx, endIdx: section.idx }
        });
        return;
      }
    }

    selectionStore.set({ startIdx: section.idx, endIdx: section.idx })
  }

  function click(event: MouseEvent) {
    if ($modeStore !== "nav") return;
    if (event.shiftKey) return;
    if (!wasOnlySelectedBeforeMouseDown) return;
    if ($navDragSelectingStore) return;
    modeStore.set("edit");
  }

  function mouseEnter() {
    if ($modeStore === "nav" && $navDragSelectingStore) {
      selectionStore.update(state => ({
        startIdx: state.startIdx,
        endIdx: section.idx
      }))
    }
  }
</script>

<style>
  .measurement {
    user-select: none;
    white-space: pre;
    opacity: 0;
    pointer-events: none;
    margin-right: 4px;
    padding-right: 1px;
  }

  input {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
    width: calc(100% - 4px);
    border: none;
    outline: none;
    border-bottom: 1px solid var(--form-border);
    background-color: transparent;
  }

  .navSelected {
    background-color: var(--weak-focus);
  }

  .editSelected {
    background-color: var(--strong-focus);
  }

  .navPlaying {
    background-color: var(--focus);
  }

  .wrapper {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    width: min-content;
    max-width: 100%;
    margin-top: 4px;
  }

  .nav {
    cursor: pointer;
  }

  .break {
    flex-basis: 100%;
    margin-bottom: 20px;
  }

  .labelContainer {
    z-index: 1;
    padding: 0;
    margin: 0;
    width: calc(100% - 4px);
    position: absolute;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .labelBackground {
    z-index: 1;
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    background-color: var(--page-background);
    opacity: 0.7;
  }

  .labelBackground.navSelected {
    background-color: var(--weak-focus);
  }

  .label {
    z-index: 2;
    background-color: var(--page-background);
    font-size: 8pt;
    padding-left: 2px;
    padding-right: 2px;
    border-radius: 2px;
  }
</style>

{#if section.startParagraph && section.idx > 0}
  <div class="break"/>
{/if}
<div class="wrapper"
  on:keydown={key}
  on:mousedown|stopPropagation={mouseDown}
  on:click={click}
  on:mouseenter={mouseEnter}
>
  <span class="measurement">{text || "W"}</span>
  <input
    bind:this={input}
    bind:value={text}
    class:nav={$modeStore === "nav"}
    class:navSelected={$modeStore === "nav" && selected}
    class:editSelected={$modeStore === "edit" && selected}
    class:navPlaying
    on:focus="{() => inputFocussed = true}"
    on:blur="{() => inputFocussed = false}"
  >
  {#if $escPressedStore}
    <div class="labelContainer">
      <div class="labelBackground" class:navSelected={$modeStore === "nav" && selected}/>
      <span class="label">{section.idx + 1}</span>
    </div>
  {:else}
    {#if navDropdownVisible && options.length}
      <Dropdown options={options} />
    {/if}
    {#if editDropdownVisible && options.length}
      <Dropdown
        options={options}
        selectedIdx={clampedSelectedIdx}
        on:clickedOption={clickedOption}
        on:selectOption={selectOption}
      />
    {/if}
  {/if}
</div>
