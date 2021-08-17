<script lang="ts">
  import { escPressedStore, selectionStore, outputStore, modeStore } from "./state";

  let input: HTMLInputElement;
  $: if (input) input.focus();

  let text: string = "";

  $: updateSelection(text);

  function updateSelection(text: string) {
    if (text === undefined) return;
    if (text.length === 0) return;

    const sections = text.split(/[/*\-+. ]/g).filter(section => section.length > 0);
    if (sections.length === 0) return;
    if (sections.length > 2) return;

    const numberSections = sections.map(section => parseFloat(section));
    if (numberSections.some(section => isNaN(section))) return;
    if (numberSections.some(section => section % 1 !== 0)) return;
    if (numberSections.some(section => section <= 0)) return;
    if (numberSections.some(section => section > $outputStore.length)) return;

    const adjustedSections = numberSections.map(section => section - 1);

    const startIdx = adjustedSections[0];
    const endIdx = adjustedSections.length === 1 ? adjustedSections[0] : adjustedSections[1];
    selectionStore.set({ startIdx, endIdx });
  }

  function keyDown(event: KeyboardEvent) {
    if (event.key === "Escape" && $modeStore === "nav") {
      text = "";
      escPressedStore.set(true);
    }
  }

  function keyUp(event: KeyboardEvent) {
    if (event.key === "Escape") {
      text = "";
      escPressedStore.set(false);
    }
  }

  function blur() {
    escPressedStore.set(false);
  }
</script>

<style>
  input {
    text-align: right;
    position: fixed;
    outline: none;
    border: none;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    caret-color: transparent;
    background: none;
  }
</style>

<svelte:body on:keydown={keyDown} on:keyup={keyUp}/>

{#if $escPressedStore}
  <input bind:this={input} bind:value={text} on:blur={blur}>
{/if}