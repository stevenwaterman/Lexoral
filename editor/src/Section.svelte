<script lang="ts">
  import { getOptions } from "./align";
  import Dropdown from "./Dropdown.svelte";
  import { navPlayingSectionsStore } from "./audio";
  import { editSelectedSectionStore, modeStore, navDragSelectingStore, selectionStore, selectionStoreSorted, selectionCountStore, outputStore, editDirectionStore } from "./state";
  import type { OutputSection } from "./types";
  import { clamp, modulo, moduloGet } from "./utils";

  export let section: OutputSection;
  let text: string = "";
  let input: HTMLInputElement;

  $: if ($modeStore === "nav") input?.blur();

  let selected: boolean;
  $: selected = $selectionStoreSorted.startIdx <= section.idx && $selectionStoreSorted.endIdx >= section.idx;

  let navOnlySelected: boolean;
  $: navOnlySelected = $modeStore === "nav" && selected && $selectionCountStore === 1;

  let navPlaying: boolean;
  $: navPlaying = selected && $navPlayingSectionsStore[section.idx] === true;

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
      if(event.key === "ArrowRight" && end === text.length) {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft" && start === 0) {
        event.preventDefault();
        prev();
      } else if (event.key === "Backspace" && start === 0) {
        event.preventDefault();
        prev();
      }
    }

    if (event.key === "Enter") {
      event.preventDefault();
      acceptOption();
      next();
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      selectedIdx++;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      selectedIdx--;
    }

    if (event.key === "Tab") {
      event.preventDefault();
      if (event.shiftKey) {
        prev();
      } else {
        next();
      }
    }

    if (event.key === "Escape") {
      modeStore.set("nav");
    }
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

  function click(event: MouseEvent) {
    if ($modeStore === "nav") {
      event.preventDefault();

      navDragSelectingStore.set(true);
      if (event.shiftKey) {
        selectionStore.update(state => {
          if (state === null) return { startIdx: section.idx, endIdx: section.idx }
          return { startIdx: state.startIdx, endIdx: section.idx }
        })
      } else {
        if (navOnlySelected) {
          modeStore.set("edit");
        } else {
          selectionStore.set({ startIdx: section.idx, endIdx: section.idx })
        }
      }
    } else {
      selectionStore.set({ startIdx: section.idx, endIdx: section.idx })
    }
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
    margin-top: 4px;
    padding-right: 1px;
  }

  input {
    padding: 0;
    margin: 0;
    width: calc(100% - 4px);
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .navSelected {
    background-color: lightblue;
  }

  .editSelected {
    background-color: lightpink;
  }

  .navPlaying {
    background-color: lightgreen;
  }

  .wrapper {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    width: min-content;
    max-width: 100%;
  }

  .nav {
    cursor: pointer;
  }

  .break {
    flex-basis: 100%;
  }
</style>

{#if section.startParagraph && section.idx > 0}
  <div class="break"/>
{/if}
<div class="wrapper"
  on:keydown={key}
  on:mousedown={click}
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
</div>