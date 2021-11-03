<script lang="ts">
  import { focusSectionIdxStore } from "./selectionState";

  import {
    restoreSelection,
    saveSelection,
    findSectionNode
  } from "./select";

  import { onKeyPressed } from "./controls";
  import { patchInterface } from "../state/patch/patchInterface";
  import { displayStore } from "../state/settings/displayStore";
  import type { DisplayState } from "../state/settings/displayStore";
  import type { FirestoreWritableField } from "../utils/firestoreWritable";

  let wrapper: HTMLDivElement;

  async function input(event: Event) {
    await updateText();
  }

  async function updateText() {
    const idx = $focusSectionIdxStore;
    if (idx === undefined) return;

    const textContent = findSectionNode(idx)?.textContent ?? undefined;
    if (textContent === undefined) return;

    const trimmedContent = textContent.slice(1, textContent.length - 1);

    saveSelection();
    patchInterface.append(idx, { text: trimmedContent });
    restoreSelection();
  }

  let fontSizeStore: FirestoreWritableField<DisplayState, "fontSize">;
  $: fontSizeStore = displayStore.getField("fontSize");

  let pageWidthStore: FirestoreWritableField<DisplayState, "fontSize">;
  $: pageWidthStore = displayStore.getField("pageWidth");
</script>

<style>
  .scroller {
    position: relative;
    
    outline: none;
    overflow-y: scroll;
    height: 100%;
    box-sizing: border-box;

    padding: 1em;
    max-width: 100%;
    min-width: 0;
    background-color: var(--page-background);
    margin: auto;
  }
</style>

<div
  class="scroller"
  style={`width: ${$pageWidthStore}em; font-size: ${$fontSizeStore}pt;`}
  bind:this={wrapper}
  contenteditable
  spellcheck={false}
  tabindex={-1}
  on:keydown={onKeyPressed}
  on:input={input}
  on:dragover|preventDefault
  on:drop|preventDefault
  on:drag|preventDefault
  on:dragstart|preventDefault
  on:cut|preventDefault
  on:paste|preventDefault>
  <slot wrapper={wrapper} />
</div>
