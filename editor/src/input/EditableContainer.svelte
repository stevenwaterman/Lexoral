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
    findSectionNode,
    selectParagraphEnd,
    selectParagraphStart,
    selectSectionEnd,
    selectSectionPosition,
    selectSectionStart,
  } from "./select";

  import { MaybeSectionMutator } from "../text/storeMutators";

  async function updateText() {
    await tick();
    const section = $focusSectionStore;
    if (section === undefined) return;

    const component = findSectionNode(section.idx);
    const textContent = component?.textContent ?? undefined;
    if (textContent === undefined) return;

    if (!section.edited && textContent === section.placeholder) return;
    if (textContent === section.text) return;
    if (!section.edited && textContent.substring(1) === section.placeholder) {
      new MaybeSectionMutator(focusSectionStore).setText(textContent.substring(0, 1));
      await tick();
      selectSectionEnd(section.idx);
    } else {
      new MaybeSectionMutator(focusSectionStore).setText(textContent);
    }
  }

  async function backspace(event: KeyboardEvent) {
    if ($isTextSelectedStore) {
      event.preventDefault();

      const selection: SectionSelection | undefined = $selectionStore;
      if (selection === undefined) return;
      deleteSelection(selection, $selectedSectionsStore);

      await tick();
      await selectSectionPosition(
        $earlySectionStore?.idx,
        selection.early.offset
      );
    } else if ($caretPositionStore.start) {
      event.preventDefault();
      const currentIdx = $focusSectionIdxStore;
      if (currentIdx !== undefined) {
        await selectSectionEnd(currentIdx - 1);
      }
    } else if ($caretPositionStore.end) {
      const textContent = findSectionNode($focusSectionIdxStore)?.textContent ?? undefined;
      if (textContent?.length === 1) {
        event.preventDefault();
        new MaybeSectionMutator(focusSectionStore).setText("");
        const oldIdx = $focusSectionIdxStore ?? 1;
        await selectSectionEnd(oldIdx - 1);
      };
    }
  }

  async function deleteKey(event: KeyboardEvent) {
    if ($isTextSelectedStore) {
      event.preventDefault();

      const multiSelection = $areMultipleSectionsSelectedStore;
      const selection: SectionSelection | undefined = $selectionStore;
      if (selection === undefined) return;
      deleteSelection(selection, $selectedSectionsStore);

      await tick();
      if (multiSelection) await selectSectionStart($lateSectionStore?.idx);
      else
        await selectSectionPosition(
          $lateSectionStore?.idx,
          selection.early.offset
        );
    } else if ($caretPositionStore.end) {
      event.preventDefault();
      const currentIdx = $focusSectionIdxStore;
      if (currentIdx !== undefined) {
        await selectSectionStart(currentIdx + 1);
      }
    } else if ($caretPositionStore.start) {
      const textContent = findSectionNode($focusSectionIdxStore)?.textContent ?? undefined;
      if (textContent?.length === 1) {
        event.preventDefault();
        new MaybeSectionMutator(focusSectionStore).setText("");
        const oldIdx = $focusSectionIdxStore ?? 1;
        await selectSectionStart(oldIdx + 1);
      };
    }
  }

  async function leftArrow(event: KeyboardEvent) {}

  async function rightArrow(event: KeyboardEvent) {}

  async function tab(event: KeyboardEvent) {
    event.preventDefault();
    if (event.shiftKey) {
      const idx = $earlySectionStore?.idx;
      if (idx !== undefined) selectSectionEnd(idx - 1);
    } else {
      const idx = $lateSectionStore?.idx;
      if (idx !== undefined) selectSectionStart(idx + 1);
    }
  }

  async function home(event: KeyboardEvent) {
    if ($isTextSelectedStore) {
      event.preventDefault();
      selectParagraphStart($earlySectionStore?.idx);
      updateSelection();
    }
  }

  async function end(event: KeyboardEvent) {
    if ($isTextSelectedStore) {
      event.preventDefault();
      selectParagraphEnd($lateSectionStore?.idx);
      updateSelection();
    }
  }

  async function cKey(event: KeyboardEvent) {
    if (!event.ctrlKey) {
      event.preventDefault();
    }
  }

  const keyFuncs: Partial<Record<string, (event: KeyboardEvent) => Promise<void>>> = {
    Backspace: backspace,
    Delete: deleteKey,
    ArrowLeft: leftArrow,
    ArrowRight: rightArrow,
    Tab: tab,
    Home: home,
    End: end,
    c: cKey,
  };

  async function keyDown(event: KeyboardEvent) {
    const func = keyFuncs[event.key];
    if (func !== undefined) func(event);
    else if ($isTextSelectedStore) event.preventDefault();
    await updateSelection();
  }

  async function mouseDown(event: MouseEvent) {
    await updateSelection();
  }

  async function mouseUp(event: MouseEvent) {
    await updateSelection();
  }

  async function mouseMove(event: MouseEvent) {
    if (event.buttons === 1) {
      await updateSelection();
    }
  }

  async function input(event: Event) {
    await updateText();
    await updateSelection();
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
  on:keydown={keyDown}
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
