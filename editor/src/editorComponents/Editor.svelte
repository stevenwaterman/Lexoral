<script lang="ts">
  import EscOverlay from "./EscOverlay.svelte";
  // import { pause, playPause } from "../audio";
  import Paragraph from "./Paragraph.svelte";
  // import { modeStore, navDragSelectingStore, selectionStore, selectionStoreSorted } from "../state";
  // import { clamp, paragraphBounds } from "../utils";
  import { allParagraphsStore } from "../sectionStores";
  // import type { paragraphBounds } from "../utils";
  import Dropdown from "./Dropdown.svelte";
  import { tick } from "svelte";
import EditableContainer from "./EditableContainer.svelte";

  // let sectionComponents: Section[] = [];

  // function mouseUp() {
  //   navDragSelectingStore.set(false);
  // }

  // function keyDown(event: KeyboardEvent) {
  //   if ($modeStore === "nav") {
  //     switch(event.key) {
  //       case "ArrowLeft": return left(event);
  //       case "ArrowRight": return right(event);
  //       case "ArrowDown": return down(event);
  //       case "ArrowUp": return up(event);
  //       case " ": return space(event);
  //       case "Enter": return enter(event);
  //       case "Home": return home(event);
  //       case "End": return end(event);
  //       case "Tab": return tab(event);
  //       case "a": return aKey(event);
  //     }
  //   } else {
  //     switch(event.key) {
  //       case "Escape": return editEscape();
  //     }
  //   }
  // }

  // function left(event: KeyboardEvent) {
  //   event.preventDefault();

  //   let newCursor: number;

  //   if (event.shiftKey) {
  //     newCursor = $selectionStore.endIdx - 1;
  //   } else if ($selectionStore.startIdx === $selectionStore.endIdx) {
  //     newCursor = $selectionStoreSorted.startIdx - 1;
  //   } else {
  //     newCursor = $selectionStoreSorted.startIdx;
  //   }

  //   const clampedCursor = clamp(newCursor, 0, $outputStore.length - 1)
  //   if (event.shiftKey) {
  //     selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: clampedCursor }))
  //   } else {
  //     selectionStore.set({ startIdx: clampedCursor, endIdx: clampedCursor });
  //   }
  // }

  // function right(event: KeyboardEvent) {
  //   event.preventDefault();

  //   let newCursor: number;

  //   if (event.shiftKey) {
  //     newCursor = $selectionStore.endIdx + 1;
  //   } else if ($selectionStore.startIdx === $selectionStore.endIdx) {
  //     newCursor = $selectionStoreSorted.endIdx + 1;
  //   } else {
  //     newCursor = $selectionStoreSorted.endIdx;
  //   }

  //   const clampedCursor = clamp(newCursor, 0, $outputStore.length - 1)
  //   if (event.shiftKey) {
  //     selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: clampedCursor }))
  //   } else {
  //     selectionStore.set({ startIdx: clampedCursor, endIdx: clampedCursor });
  //   }
  // }

  // function down(event: KeyboardEvent) {
  //   event.preventDefault();

  //   const cursor = event.shiftKey ? $selectionStore.endIdx : $selectionStoreSorted.endIdx;
  //   const sections = $outputStore;

  //   const currentParagraphBounds = paragraphBounds(sections, cursor);
  //   if (currentParagraphBounds.endIdx === $outputStore.length - 1) return;
  //   const newCursor = currentParagraphBounds.endIdx + 1;

  //   if (event.shiftKey) {
  //     selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: newCursor }))
  //   } else {
  //     selectionStore.set({ startIdx: newCursor, endIdx: newCursor });
  //   }
  // }

  // function up(event: KeyboardEvent) {
  //   event.preventDefault();

  //   const cursor = event.shiftKey ? $selectionStore.endIdx : $selectionStoreSorted.startIdx;
  //   const sections = $outputStore;

  //   const currentParagraphBounds = paragraphBounds(sections, cursor);
  //   const prevParagraphBounds = paragraphBounds(sections, currentParagraphBounds.startIdx - 1);
  //   if (prevParagraphBounds === null) return;

  //   const newCursor = prevParagraphBounds.startIdx;

  //   if (event.shiftKey) {
  //     selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: newCursor }))
  //   } else {
  //     selectionStore.set({ startIdx: newCursor, endIdx: newCursor });
  //   }
  // }

  // function end(event: KeyboardEvent) {
  //   event.preventDefault();

  //   const cursor = event.shiftKey ? $selectionStore.endIdx : $selectionStoreSorted.endIdx;
  //   const sections = $outputStore;

  //   const currentParagraphBounds = paragraphBounds(sections, cursor);
  //   const newCursor = event.ctrlKey ? sections.length - 1 : currentParagraphBounds.endIdx;

  //   if (event.shiftKey) {
  //     selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: newCursor }))
  //   } else {
  //     selectionStore.set({ startIdx: newCursor, endIdx: newCursor });
  //   }
  // }

  // function home(event: KeyboardEvent) {
  //   event.preventDefault();

  //   const cursor = event.shiftKey ? $selectionStore.endIdx : $selectionStoreSorted.startIdx;
  //   const sections = $outputStore;

  //   const currentParagraphBounds = paragraphBounds(sections, cursor);
  //   const newCursor = event.ctrlKey ? 0 : currentParagraphBounds.startIdx;

  //   if (event.shiftKey) {
  //     selectionStore.update(state => ({ startIdx: state.startIdx, endIdx: newCursor }))
  //   } else {
  //     selectionStore.set({ startIdx: newCursor, endIdx: newCursor });
  //   }
  // }

  // function tab(event: KeyboardEvent) {
  //   if (event.shiftKey) {
  //     event.preventDefault();

  //     let newCursor: number;
  //     if ($selectionStore.startIdx === $selectionStore.endIdx) {
  //       newCursor = $selectionStoreSorted.startIdx - 1;
  //     } else {
  //       newCursor = $selectionStoreSorted.startIdx;
  //     }

  //     const clampedCursor = clamp(newCursor, 0, $outputStore.length - 1)
  //     selectionStore.set({ startIdx: clampedCursor, endIdx: clampedCursor });
  //   }
  //   else return right(event);
  // }

  // function space(event: KeyboardEvent) {
  //   event.preventDefault();
  //   if (event.shiftKey) playPause(true)
  //   else playPause(false);
  // }

  // function editEscape() {
  //   event.preventDefault();
  //   modeStore.set("nav");
  // }

  // function enter(event: KeyboardEvent) {
  //   event.preventDefault();
  //   if (event.shiftKey) {
  //     outputStore.update(state => {
  //       const section = state[$selectionStore.endIdx];
  //       section.startParagraph = !section.startParagraph;
  //       return state;
  //     });
  //   } else {
  //     selectionStore.update(state => ({
  //       startIdx: state.endIdx,
  //       endIdx: state.endIdx
  //     }));
  //     modeStore.set("edit");
  //   }
  // }

  // function aKey(event: KeyboardEvent) {
  //   if (!event.ctrlKey) return;
  //   event.preventDefault();
  //   selectionStore.set({ startIdx: 0, endIdx: $outputStore.length - 1 })
  // }

  // function click(event: MouseEvent) {
  //   if ($modeStore === "edit") {
  //     modeStore.set("nav");
  //   }
  // }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .sectionContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
  }

  .logo {
    max-width:100%;
    max-height:60px;
    width: auto;
    height: auto;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .wrapper {
    flex-grow: 1;
    /* min-height: 0; */
    margin-top: 10px;
    margin-bottom: 20px;
    border-top: 1px solid var(--form-border);
    border-bottom: 1px solid var(--form-border);
    padding: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .padding {
    height: 40%;
    flex-shrink: 0;
  }
</style>

<!-- <svelte:body on:keydown={keyDown} on:mouseup={mouseUp} on:mousedown={click}/> -->

<EscOverlay/>

<div class="container">
  <img class="logo" src="/assets/smallBrand.png" alt="logo"/>

  <!-- <div class="wrapper">
    <div class="padding"/>
    <div class="sectionContainer">
      {#each $outputStore as section}
        <Section
          section={section}
          bind:this={sectionComponents[section.idx]}
        />
      {/each}
    </div>
    <div class="padding"/>
  </div> -->

  <div class="wrapper">
    <Dropdown/>
    <EditableContainer>
      {#each $allParagraphsStore as paragraphStore (paragraphStore.firstSectionIdx)}
        <Paragraph paragraphStore={paragraphStore}/>
      {/each}
    </EditableContainer>
  </div>
  
  <!-- <div>
    {$modeStore === "nav" ? "Navigation Mode" : "Edit Mode"}
  </div> -->
</div>

