<script lang="ts">
  import { pause, playPause } from "./audio";

  import Section from "./Section.svelte";
  import { modeStore, navDragSelectingStore, selectionStore, outputStore } from "./state";
  import { clamp } from "./utils";

  let sectionComponents: Section[] = [];

  function mouseUp() {
    navDragSelectingStore.set(false);
  }

  function keyDown(event: KeyboardEvent) {
    if ($modeStore === "nav") {
      switch(event.key) {
        case "ArrowLeft": return left(event.shiftKey);
        case "ArrowRight": return right(event.shiftKey);
        case "ArrowDown": return down(event.shiftKey);
        case "ArrowUp": return up(event.shiftKey);
        case " ": return space(event.shiftKey);
        case "Escape": return escape();
        case "Enter": return enter();
      }
    }
  }

  function left(shift: boolean) {
    const cursor = $selectionStore.endIdx;
    const newCursor = cursor - 1;
    const clampedCursor = clamp(newCursor, 0, $outputStore.length - 1)
    if (shift) {
      selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: clampedCursor }))
    } else {
      selectionStore.set({ startIdx: clampedCursor, endIdx: clampedCursor });
    }
  }

  function right(shift: boolean) {
    const cursor = $selectionStore.endIdx;
    const newCursor = cursor + 1;
    const clampedCursor = clamp(newCursor, 0, $outputStore.length - 1)
    if (shift) {
      selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: clampedCursor }))
    } else {
      selectionStore.set({ startIdx: clampedCursor, endIdx: clampedCursor });
    }
  }

  function down(shift: boolean) {
    const cursor = $selectionStore.endIdx;
    const sections = $outputStore;
    const section = sections.find(section => section.idx > cursor && section.startParagraph);
    const newCursor = section ? section.idx : sections.length - 1;
    const clampedCursor = clamp(newCursor, 0, sections.length - 1)
    if (shift) {
      selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: clampedCursor }))
    } else {
      selectionStore.set({ startIdx: clampedCursor, endIdx: clampedCursor });
    }
  }

  function up(shift: boolean) {
    const cursor = $selectionStore.endIdx;
    const sections = $outputStore.slice().reverse();
    const section = sections.find(section => section.idx < cursor && section.startParagraph);
    const newCursor = section ? section.idx : 0;
    const clampedCursor = clamp(newCursor, 0, sections.length - 1)
    if (shift) {
      selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: clampedCursor }))
    } else {
      selectionStore.set({ startIdx: clampedCursor, endIdx: clampedCursor });
    }
  }

  function space(shift: boolean) {
    if (shift) playPause(true)
    else playPause(false);
  }

  function escape() {
    pause();
  }

  function enter() {
    modeStore.set("edit");
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>

<svelte:body on:keydown={keyDown} on:mouseup={mouseUp}/>

<div class="container">
  {#each $outputStore as section}
    <Section
      section={section}
      bind:this={sectionComponents[section.idx]}
    />
  {/each}
</div>

<p style="position: fixed; bottom: 0">
  {$modeStore === "nav" ? "Navigation Mode" : "Edit Mode"}
</p>