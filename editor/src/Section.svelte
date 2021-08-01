<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { audioStore } from "./state";

  import type { OutputSection } from "./types";
  export let section: OutputSection;

  let selectedOption: number = 0;
  function updateSelectedOption(selectedOption: number) {
    text = section.options[selectedOption].text;
  }
  $: updateSelectedOption(selectedOption);

  let text: string = section.options[selectedOption].text;

  let clientWidth: number;

  let input: HTMLInputElement;

  const dispatch = createEventDispatcher();

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

    if (event.key === "Tab") {
      event.preventDefault();
      if (event.shiftKey) {
        prev();
      } else {
        next();
      }
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      selectedOption = (selectedOption + 1) % section.options.length;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      selectedOption = (selectedOption + section.options.length - 1) % section.options.length;
    }
  }

  function next() {
    dispatch("next");
  }

  function prev() {
    dispatch("prev");
  }

  export function focusStart() {
    input.focus();
    input.setSelectionRange(0, 0, "none");
  }

  export function focusEnd() {
    input.focus();
    input.setSelectionRange(text.length, text.length, "none");
  }

  let focus = false;

  function onFocus() {
    focus = true;
    audioStore.set({ start: section.startTime, end: section.endTime });
  }

  function blur() {
    focus = false;
  }
</script>

<style>
  .measurement {
    position: fixed;
    top: 0;
    left: 0;
    user-select: none;
    white-space: pre;
    opacity: 0;
    padding: 1px;
    pointer-events: none;
  }

  input {
    padding: 0;
    margin: 0;
    min-width: 8px;
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

  .hasOptions {
    background-color: lightpink;
  }
</style>

<span class="measurement" bind:clientWidth>{text}</span>
<div class="wrapper" tabindex="-1">
  <input bind:this={input} class:hasOptions={section.options.length > 1} on:focus={onFocus} on:blur={blur} on:keydown={key} bind:value={text} style={`width: ${clientWidth}px;`}>
  {#if focus && section.options.length > 1}
    <div class="popup">
      {#each section.options as option, idx}
        <span class="option" class:highlight={selectedOption === idx}>{option.text}</span>
      {/each}
    </div>
  {/if}
</div>


<!-- <button class:hasOptions={section.options.length > 1} on:click={clicked} on:keydown={keyDown} on:mouseleave="{() => popup = false}">
  {selectedText}
  {#if popup}
    <div class="popup">
      {#each section.options as option, idx}
        <button class:selected={selectedOption === idx} on:click="{() => select(idx)}">{option.text}</button>
      {/each}
    </div>
  {/if}
</button> -->

