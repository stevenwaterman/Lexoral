<script lang="ts">
  import { currentSectionStore, directionStore, sectionsStore, selectSection } from "./state";
  import type { OutputSection } from "./types";
  import { modulo, moduloGet } from "./utils";

  export let idx: number;
  export let section: OutputSection;

  let text: string = "";

  let selectedIdx: number = 0;

  let clampedSelectedIdx: number;
  $: clampedSelectedIdx = modulo(selectedIdx, options.length);

  let options: OutputSection["options"];
  $: options = section.options.filter(option => option.text.toLowerCase().startsWith(text.toLowerCase()) && option.text.length > text.length);

  let selectedOption: OutputSection["options"][number] | null;
  $: selectedOption = moduloGet(options, selectedIdx);

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
      if (options.length > selectedIdx) {
        acceptOption();
      }
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
  }

  function acceptOption() {
    const option = options[selectedIdx].text;
    text += option.substring(text.length, option.length);
  }

  function next() {
    const sections = $sectionsStore;
    const nextSection = moduloGet(sections, idx + 1);
    selectSection(nextSection, "start");
  }

  function prev() {
    const sections = $sectionsStore;
    const prevSection = moduloGet(sections, idx - 1);
    selectSection(prevSection, "end");
  }

  export function focusStart() {
    if (!focus) {
      input.focus();
      input.setSelectionRange(0, 0, "none");
    }
  }

  export function focusEnd() {
    if (!focus) {
      input.focus();
      input.setSelectionRange(text.length, text.length, "none");
    }
  }

  let focus = false;
  $: if(input) {
    if($currentSectionStore === section) {
      if ($directionStore === "start") focusStart();
      else focusEnd();
      focus = true;
    } else {
      focus = false;
    }
  }

  function click(event: MouseEvent) {
    focus = true;
    selectSection(section, "start");
  }

  let popup: HTMLDivElement | undefined;
  let popupBoundingBox: DOMRect | undefined;
  $: popupBoundingBox = popup?.getBoundingClientRect();
  let popupRight: number;
  $: popupRight = popupBoundingBox?.right;
</script>

<style>
  .measurement {
    user-select: none;
    white-space: pre;
    opacity: 0;
    pointer-events: none;
  }

  input {
    padding: 0;
    margin: 0;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    position: absolute;
  }

  .focus {
    background-color: yellow;
  }

  .popup {
    position: absolute;
    top: 100%;
    max-width: 100vw;
    border: 1px solid black;
    z-index: 1;
    background: white;
    display: flex;
    flex-direction: column;
    margin-top: 2px;
  }

  .wrapper {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    width: min-content;
    margin: 2px;
    max-width: 100%;
  }

  .highlight {
    background-color: lightblue;
  }

  .option {
    white-space: nowrap;
  }
</style>


<div class="wrapper">
  <span class="measurement">{text || "W"}</span>
  <input
    bind:this={input}
    bind:value={text}
    class:focus
    on:keydown={key}
    on:click={click}
  >
  {#if focus && options.length}
    <div class="popup" bind:this={popup} style={`left: min(0px, calc(100vw - ${popupRight ?? 0}px));`}>
      {#each options as option, idx}
        <span class="option" class:highlight={clampedSelectedIdx === idx}>{option.text}</span>
      {/each}
    </div>
  {/if}
</div>