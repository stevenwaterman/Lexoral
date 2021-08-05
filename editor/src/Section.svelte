<script lang="ts">
  import { getOptions } from "./align";

  import { audioBoundsStore, currentSectionStore, directionStore, outputStore } from "./state";
  import type { OutputSection } from "./types";
  import { modulo, moduloGet } from "./utils";

  export let idx: number;
  export let section: OutputSection;

  let options: string[];
  $: options = getOptions(text, section.options);

  let text: string = "";

  let selectedIdx: number = 0;

  let clampedSelectedIdx: number;
  $: clampedSelectedIdx = modulo(selectedIdx, options.length);

  let selectedOption: string | null;
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
      } else if (event.key === "Backspace" && start === 0) {
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

    if (event.key === "Escape") {
      audioBoundsStore.set({ start: section.startTime, end: section.endTime });
    }
  }

  function acceptOption() {
    const option = options[selectedIdx];
    text += option.substring(text.length, option.length);
  }

  function next() {
    const sections = $outputStore;
    const nextSection = moduloGet(sections, idx + 1);
    directionStore.set("start");
    audioBoundsStore.set({ start: nextSection.startTime, end: nextSection.endTime });
  }

  function prev() {
    const sections = $outputStore;
    const prevSection = moduloGet(sections, idx - 1);
    directionStore.set("end");
    audioBoundsStore.set({ start: prevSection.startTime, end: prevSection.endTime });
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
      selectedIdx = 0;
      focus = false;
    }
  }

  function click(event: MouseEvent) {
    focus = true;
    audioBoundsStore.set({ start: section.startTime, end: section.endTime });
  }

  let popup: HTMLDivElement | undefined;
  let popupRight: number | undefined;
  function updatePopupRight(popup: HTMLDivElement, text: string) {
    popupRight = popup.getBoundingClientRect().right;
  }
  $: popup && updatePopupRight(popup, text);
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
    cursor: pointer;
  }
</style>


<div class="wrapper">
  <span class="measurement">{text || "W"}</span>
  <input
    bind:this={input}
    bind:value={text}
    class:focus
    on:keydown={key}
    on:mousedown={click}
  >
  {#if focus && options.length}
    <div class="popup" bind:this={popup} style={`left: min(0px, calc(100vw - 2px - ${popupRight ?? 0}px));`}>
      {#each options as option, idx}
        <span class="option" class:highlight={clampedSelectedIdx === idx} on:click="{() => {selectedIdx = idx; acceptOption();}}">{option}</span>
      {/each}
    </div>
  {/if}
</div>