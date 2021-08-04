<script lang="ts">
  import { selectedSectionIdxStore } from "./state";
  import type { OutputSection } from "./types";

  export let idx: number;
  export let section: OutputSection;

  let text: string = "";

  let selectedOption: number = 0;
  let options: OutputSection["options"];
  $: options = section.options.filter(option => option.text.startsWith(text));

  let clientWidth: number;

  let input: HTMLInputElement;

  function key(event: KeyboardEvent) {
    const start = input.selectionStart;
    const end = input.selectionEnd;

    if (start === end) { // Nothing selected
      if(event.key === "ArrowRight" && end === text.length) {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft" && start === 0) {
        event.preventDefault();
        prev();
      }
    }

    if (event.key === "Enter") {
      event.preventDefault();
      if (options.length > selectedOption) {
        text = options[selectedOption].text;
      }
      next();
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      selectedOption = (selectedOption + 1) % section.options.length;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      selectedOption = (selectedOption + section.options.length - 1) % section.options.length;
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

  function next() {
    selectedSectionIdxStore.right();
  }

  function prev() {
    selectedSectionIdxStore.left();
  }

  export function focusStart() {
    input.focus();
    input.setSelectionRange(0, 0, "none");
  }

  export function focusEnd() {
    input.focus();
    input.setSelectionRange(text.length, text.length, "none");
  }

  $: if(input && $selectedSectionIdxStore?.idx === idx) {
    if($selectedSectionIdxStore.direction === "left") focusEnd();
    else focusStart();
  }

  let focus = false;

  function onFocus() {
    focus = true;
    selectedSectionIdxStore.set(idx);
  }

  function blur() {
    focus = false;
  }

  // TODO unfocussing and refocussing restarts audio
  // TODO click on options to select
</script>

<style>
  .measurement {
    position: fixed;
    top: 0;
    left: 0;
    user-select: none;
    white-space: pre;
    opacity: 0;
    pointer-events: none;
    padding: 1px;
  }

  input {
    padding: 0;
    margin: 0;
    max-width: 100%;
    min-width: 1em;
    border: none;
  }

  .underline {
    border-bottom: 1px solid black;
  }

  .popup {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid black;
    z-index: 1;
    background: white;
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    position: relative;
    display: inline;
  }

  .highlight {
    background-color: lightblue;
  }

  .option {
    white-space: nowrap;
  }
</style>

<span class="measurement" bind:clientWidth>{text}</span>
<div class="wrapper">
  <input bind:this={input} class:underline={!text.length} on:focus={onFocus} on:blur={blur} on:keydown={key} bind:value={text} style={`width: ${clientWidth || 100}px;`}>
  {#if focus && options.length}
    <div class="popup">
      {#each options as option, idx}
        <span class="option" class:highlight={selectedOption === idx}>{option.text}</span>
      {/each}
    </div>
  {/if}
</div>