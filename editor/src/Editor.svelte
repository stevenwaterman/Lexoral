<script lang="ts">
  import EscOverlay from "./EscOverlay.svelte";
  import { pause, playPause } from "./audio";
  import Section from "./Section.svelte";
  import { modeStore, navDragSelectingStore, selectionStore, outputStore, selectionStoreSorted } from "./state";
  import { clamp, paragraphBounds } from "./utils";

  let sectionComponents: Section[] = [];

  function mouseUp() {
    navDragSelectingStore.set(false);
  }

  function keyDown(event: KeyboardEvent) {
    if ($modeStore === "nav") {
      event.preventDefault();
      switch(event.key) {
        case "ArrowLeft": return left(event.shiftKey);
        case "ArrowRight": return right(event.shiftKey);
        case "ArrowDown": return down(event.shiftKey);
        case "ArrowUp": return up(event.shiftKey);
        case " ": return space(event.shiftKey);
        case "Enter": return enter(event.shiftKey);
        case "Home": return home(event.shiftKey);
        case "End": return end(event.shiftKey);
        case "Tab": return tab(event);
        case "a": return aKey(event);
      }
    } else {
      switch(event.key) {
        case "Escape": return editEscape();
      }
    }
  }

  function left(shift: boolean) {
    let newCursor: number;

    if (shift) {
      newCursor = $selectionStore.endIdx - 1;
    } else if ($selectionStore.startIdx === $selectionStore.endIdx) {
      newCursor = $selectionStoreSorted.startIdx - 1;
    } else {
      newCursor = $selectionStoreSorted.startIdx;
    }

    const clampedCursor = clamp(newCursor, 0, $outputStore.length - 1)
    if (shift) {
      selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: clampedCursor }))
    } else {
      selectionStore.set({ startIdx: clampedCursor, endIdx: clampedCursor });
    }
  }

  function right(shift: boolean) {
    let newCursor: number;

    if (shift) {
      newCursor = $selectionStore.endIdx + 1;
    } else if ($selectionStore.startIdx === $selectionStore.endIdx) {
      newCursor = $selectionStoreSorted.endIdx + 1;
    } else {
      newCursor = $selectionStoreSorted.endIdx;
    }

    const clampedCursor = clamp(newCursor, 0, $outputStore.length - 1)
    if (shift) {
      selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: clampedCursor }))
    } else {
      selectionStore.set({ startIdx: clampedCursor, endIdx: clampedCursor });
    }
  }

  function down(shift: boolean) {
    const cursor = shift ? $selectionStore.endIdx : $selectionStoreSorted.endIdx;
    const sections = $outputStore;

    const currentParagraphBounds = paragraphBounds(sections, cursor);
    if (currentParagraphBounds.endIdx === $outputStore.length - 1) return;
    const newCursor = currentParagraphBounds.endIdx + 1;

    if (shift) {
      selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: newCursor }))
    } else {
      selectionStore.set({ startIdx: newCursor, endIdx: newCursor });
    }
  }

  function up(shift: boolean) {
    const cursor = shift ? $selectionStore.endIdx : $selectionStoreSorted.startIdx;
    const sections = $outputStore;

    const currentParagraphBounds = paragraphBounds(sections, cursor);
    const prevParagraphBounds = paragraphBounds(sections, currentParagraphBounds.startIdx - 1);
    if (prevParagraphBounds === null) return;

    const newCursor = prevParagraphBounds.startIdx;

    if (shift) {
      selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: newCursor }))
    } else {
      selectionStore.set({ startIdx: newCursor, endIdx: newCursor });
    }
  }

  function end(shift: boolean) {
    const cursor = shift ? $selectionStore.endIdx : $selectionStoreSorted.endIdx;
    const sections = $outputStore;

    const currentParagraphBounds = paragraphBounds(sections, cursor);
    const newCursor = currentParagraphBounds.endIdx;

    if (shift) {
      selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: newCursor }))
    } else {
      selectionStore.set({ startIdx: newCursor, endIdx: newCursor });
    }
  }

  function home(shift: boolean) {
    const cursor = shift ? $selectionStore.endIdx : $selectionStoreSorted.startIdx;
    const sections = $outputStore;

    const currentParagraphBounds = paragraphBounds(sections, cursor);
    const newCursor = currentParagraphBounds.startIdx;

    if (shift) {
      selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: newCursor }))
    } else {
      selectionStore.set({ startIdx: newCursor, endIdx: newCursor });
    }
  }

  function tab(event: KeyboardEvent) {
    event.preventDefault();
    if (event.shiftKey) return left(false);
    else return right(false);
  }

  function space(shift: boolean) {
    if (shift) playPause(true)
    else playPause(false);
  }

  function editEscape() {
    modeStore.set("nav");
  }

  function enter(shift: boolean) {
    if (shift) {
      outputStore.update(state => {
        const section = state[$selectionStore.endIdx];
        section.startParagraph = !section.startParagraph;
        return state;
      });
    } else {
      modeStore.set("edit");
    }
  }

  function aKey(event: KeyboardEvent) {
    if (!event.ctrlKey) return;
    selectionStore.set({ startIdx: 0, endIdx: $outputStore.length - 1 })
  }

  function click(event: MouseEvent) {
    console.log("clicked")
    if ($modeStore === "edit") {
      modeStore.set("nav");
    }
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 90vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 200px 8px 200px 8px;
    box-sizing: border-box;
  }
</style>

<svelte:body on:keydown={keyDown} on:mouseup={mouseUp} on:mousedown={click}/>

<EscOverlay/>

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