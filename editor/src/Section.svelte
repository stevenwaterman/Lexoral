<script lang="ts">
import { currentSectionStore, directionStore, sectionsStore, selectSection } from "./state";

  import type { OutputSection } from "./types";

  export let idx: number;
  export let section: OutputSection;

  let text: string = "";

  let selectedOption: number = 0;
  let options: OutputSection["options"];
  $: options = section.options.filter(option => option.text.toLowerCase().startsWith(text.toLowerCase()) && option.text.length > text.length);

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
        acceptOption();
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

    if (event.key === "Tab") {
      event.preventDefault();
      if (event.shiftKey) {
        prev();
      } else {
        if (options.length > selectedOption) {
          acceptOption()
        }
        next();
      }
    }
  }

  function acceptOption() {
    const option = options[selectedOption].text;
    text += option.substring(text.length, option.length);
  }

  function next() {
    const sections = $sectionsStore;
    const nextIdx = (((idx + 1) % sections.length) + sections.length) % sections.length;
    const nextSection = sections[nextIdx];
    selectSection(nextSection, "start");
  }

  function prev() {
    const sections = $sectionsStore;
    const prevIdx = (((idx - 1) % sections.length) + sections.length) % sections.length;
    const prevSection = sections[prevIdx];
    selectSection(prevSection, "end");
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
  $: if(input) {
    if($currentSectionStore === section) {
      focus = true;
      if ($directionStore === "start") focusStart();
      else focusEnd();
    } else {
      focus = false;
    }
  }

  function click(event: MouseEvent) {
    event.preventDefault();
    selectSection(section, "start");
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
    pointer-events: none;
    padding: 1px;
  }

  input {
    padding: 0;
    margin: 0;
    max-width: 100%;
    min-width: 1em;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
  }

  .focus {
    background-color: yellow;
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
  <input
    bind:this={input}
    bind:value={text}
    class:focus
    on:keydown={key}
    on:click={click}
    style={`width: ${clientWidth}px;`}
  >
  {#if focus && options.length}
    <div class="popup">
      {#each options as option, idx}
        <span class="option" class:highlight={selectedOption === idx}>{option.text}</span>
      {/each}
    </div>
  {/if}
</div>