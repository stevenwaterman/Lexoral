<script lang="ts">
  import { tick } from "svelte";

  import {
    areMultipleSectionsSelectedStore,
    caretPositionStore,
    deleteSelection,
    earlySectionStore,
    focusSectionIdxStore,
    focusSectionStore,
    isTextSelectedStore,
    lateSectionStore,
    selectedSectionsStore,
    selectionStore,
    updateSelection,
  } from "./selectionState";
  import type { SectionSelection } from "./selectionState";

  import {
    restoreSelection,
    saveSelection,
    selectNextSection,
    selectParagraphEnd,
    selectParagraphStart,
    selectPrevSection,
    selectSectionEnd,
    selectSectionPosition,
    selectSectionStart,
  } from "./select";

  import { MaybeSectionMutator } from "../text/storeMutators";
  import { findSectionNode } from "../text/selector";
  import { onKeyPressed } from "./controls";
import Section from "../text/Section.svelte";

  // async function backspace(event: KeyboardEvent) {
  //   if ($isTextSelectedStore) {
  //     event.preventDefault();

  //     const selection: SectionSelection | undefined = $selectionStore;
  //     if (selection === undefined) return;
  //     deleteSelection(selection, $selectedSectionsStore);

  //     await tick();
  //     await selectSectionPosition(
  //       $earlySectionStore?.idx,
  //       selection.early.offset
  //     );
  //   } else if ($caretPositionStore.start) {
  //     event.preventDefault();
  //     await selectPrevSection($focusSectionIdxStore);
  //   } else if ($caretPositionStore.end) {
  //     const textContent = findSectionNode($focusSectionIdxStore)?.textContent ?? undefined;
  //     if (textContent?.length === 3 || event.ctrlKey) {
  //       event.preventDefault();
  //       new MaybeSectionMutator(focusSectionStore).setText("");
  //       await selectPrevSection($focusSectionIdxStore)
  //     };
  //   }
  // }

  // async function deleteKey(event: KeyboardEvent) {
  //   if ($isTextSelectedStore) {
  //     event.preventDefault();

  //     const multiSelection = $areMultipleSectionsSelectedStore;
  //     const selection: SectionSelection | undefined = $selectionStore;
  //     if (selection === undefined) return;
  //     deleteSelection(selection, $selectedSectionsStore);

  //     await tick();
  //     if (multiSelection) await selectSectionStart($lateSectionStore?.idx);
  //     else await selectSectionPosition($lateSectionStore?.idx, selection.early.offset);
  //   } else if ($caretPositionStore.end) {
  //     event.preventDefault();
  //     await selectNextSection($focusSectionIdxStore);
  //   } else if ($caretPositionStore.start) {
  //     const textContent = findSectionNode($focusSectionIdxStore)?.textContent ?? undefined;
  //     if (textContent?.length === 3 || event.ctrlKey) {
  //       event.preventDefault();
  //       new MaybeSectionMutator(focusSectionStore).setText("");
  //       await selectNextSection($focusSectionIdxStore);
  //     };
  //   }
  // }

  // async function leftArrow(event: KeyboardEvent) {
  //   if ($caretPositionStore.start && !$isTextSelectedStore && !event.ctrlKey) {
  //     event.preventDefault();
  //     await selectPrevSection($focusSectionIdxStore);
  //   } else if (event.ctrlKey) {
  //     event.preventDefault();
  //     if ($caretPositionStore.start) {
  //       const idx = $focusSectionIdxStore;
  //       if (idx !== undefined) {
  //         await selectSectionStart(idx - 1);
  //       }
  //     } else {
  //       await selectSectionStart($focusSectionIdxStore);
  //     }
  //   }
  // }

  // async function rightArrow(event: KeyboardEvent) {
  //   if ($caretPositionStore.end && !$isTextSelectedStore && !event.ctrlKey) {
  //     event.preventDefault();
  //     await selectNextSection($focusSectionIdxStore);
  //   } else if (event.ctrlKey) {
  //     event.preventDefault();
  //     if ($caretPositionStore.end) {
  //       const idx = $focusSectionIdxStore;
  //       if (idx !== undefined) {
  //         await selectSectionEnd(idx + 1);
  //       }
  //     } else {
  //       await selectSectionEnd($focusSectionIdxStore);
  //     }
  //   }
  // }

  // async function tab(event: KeyboardEvent) {
  //   event.preventDefault();
  //   if (event.shiftKey) await selectPrevSection($earlySectionStore?.idx);
  //   else await selectNextSection($lateSectionStore?.idx);
  // }

  // async function home(event: KeyboardEvent) {
  //   if ($isTextSelectedStore) {
  //     event.preventDefault();
  //     selectParagraphStart($earlySectionStore?.idx);
  //     updateSelection();
  //   }
  // }

  // async function end(event: KeyboardEvent) {
  //   if ($isTextSelectedStore) {
  //     event.preventDefault();
  //     selectParagraphEnd($lateSectionStore?.idx);
  //     updateSelection();
  //   }
  // }

  // async function cKey(event: KeyboardEvent) {
  //   if (!event.ctrlKey) {
  //     event.preventDefault();
  //   }
  // }

  // async function pageDown(event: KeyboardEvent) {

  // }

  // async function pageUp(event: KeyboardEvent) {

  // }

  // async function upArrow(event: KeyboardEvent) {

  // }

  // async function downArrow(event: KeyboardEvent) {

  // }

  // const keyFuncs: Partial<Record<string, (event: KeyboardEvent) => Promise<void>>> = {
  //   Backspace: backspace,
  //   Delete: deleteKey,
  //   ArrowLeft: leftArrow,
  //   ArrowRight: rightArrow,
  //   Tab: tab,
  //   Home: home,
  //   End: end,
  //   PageUp: pageUp,
  //   PageDown: pageDown,
  //   ArrowUp: upArrow,
  //   ArrowDown: downArrow,
  //   c: cKey,
  // };

  // function left(shift: boolean) {

  // }

  // function leftCtrl(shift: boolean) {

  // }

  async function mouseDown(event: MouseEvent) {
    // await updateSelection();
  }

  async function mouseUp(event: MouseEvent) {
    await updateSelection();
  }

  async function mouseMove(event: MouseEvent) {
    // if (event.buttons === 1) {
      // await updateSelection();
    // }
  }

  async function input(event: Event) {
    await updateText();
    await updateSelection();
  }

  async function updateText() {
    await tick();
    const textContent = findSectionNode($focusSectionIdxStore)?.textContent ?? undefined;
    if (textContent === undefined) return;

    const trimmedContent = textContent.slice(1, textContent.length - 1);

    saveSelection();
    new MaybeSectionMutator(focusSectionStore).setText(trimmedContent);
    restoreSelection();
  }
</script>

<style>
  div {
    outline: none;
    width: 100%;
  }
</style>

<div
  contenteditable
  tabindex={-1}
  on:keydown={onKeyPressed}
  on:mouseup={mouseUp}
  on:mousedown={mouseDown}
  on:mousemove={mouseMove}
  on:input={input}
  on:dragover|preventDefault
  on:drop|preventDefault
  on:drag|preventDefault
  on:dragstart|preventDefault
  on:cut|preventDefault
  on:paste|preventDefault>
  <slot />
</div>
