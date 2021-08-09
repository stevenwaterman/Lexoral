<script lang="ts">
  import { getOptions } from "./align";
  import { audioStateStore } from "./audioState";
  import Dropdown from "./Dropdown.svelte";

  import { currentSectionStore, directionStore, outputStore, playingSectionsStore } from "./state";
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

  let selectedOption: string | undefined;
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
      if (event.shiftKey) {
        section.startParagraph = !section.startParagraph;
      } else {
        acceptOption();
        next();
      }
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

    // if (event.key === "Escape") {
    //   audioStateStore.update(state => ({ ...state, start: section.startTime, end: section.endTime }));
    // }
  }

  function acceptOption() {
    if (!selectedOption) return;
    text += selectedOption.substring(text.length, selectedOption.length);
  }

  function clickedOption(event: CustomEvent<number>) {
    const selectedOption = options[event.detail];
    text += selectedOption.substring(text.length, selectedOption.length);
  }

  function selectOption(event: CustomEvent<number>) {
    selectedIdx = event.detail;
  }

  function next() {
    const sections = $outputStore;
    const nextSection = moduloGet(sections, idx + 1);
    directionStore.set("start");
    audioStateStore.update(state => ({ ...state, loopStart: nextSection.startTime, loopEnd: nextSection.endTime }));
  }

  function prev() {
    const sections = $outputStore;
    const prevSection = moduloGet(sections, idx - 1);
    directionStore.set("end");
    audioStateStore.update(state => ({ ...state, loopStart: prevSection.startTime, loopEnd: prevSection.endTime }));
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
    audioStateStore.update(state => ({ ...state, loopStart: section.startTime, loopEnd: section.endTime }));
  }
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

  .playing {
    background-color: lightblue;
  }

  .wrapper {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    width: min-content;
    margin: 2px;
    max-width: 100%;
  }  
</style>

{#if section.startParagraph && idx > 0}
  <br><br>
{/if}
<div class="wrapper">
  <span class="measurement">{text || "W"}</span>
  <input
    bind:this={input}
    bind:value={text}
    class:focus
    class:playing={!focus && $playingSectionsStore.includes(section)}
    on:keydown={key}
    on:mousedown={click}
  >
  {#if focus && options.length}
    <Dropdown
      options={options}
      selectedIdx={clampedSelectedIdx}
      on:clickedOption={clickedOption}
      on:selectOption={selectOption}
    />
  {/if}
</div>