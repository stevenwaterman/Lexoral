<script lang="ts">
  import { displayStore } from "../state/settings/displayStore";
  import type { DisplayState } from "../state/settings/displayStore";
  import type { FirestoreWritableField } from "../utils/firestoreWritable";
  import type { SectionSelection } from "./selectionState";
  import { selectionStore } from "./selectionState";
import { dragStore } from "../text/controls/dragStore";

  let wrapper: HTMLDivElement;

  let fontSizeStore: FirestoreWritableField<DisplayState, "fontSize">;
  $: fontSizeStore = displayStore.getField("fontSize");

  let pageWidthStore: FirestoreWritableField<DisplayState, "fontSize">;
  $: pageWidthStore = displayStore.getField("pageWidth");

  let selection: SectionSelection | undefined;
  $: selection = $selectionStore;

  let mutiSelect: boolean;
  $: mutiSelect = selection?.anchor?.section !== selection?.focus?.section;
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
  class:mutiSelect
  style={`width: ${$pageWidthStore}em; font-size: ${$fontSizeStore}pt;`}
  bind:this={wrapper}
  spellcheck={false}
  tabindex={-1}
  on:dragover|preventDefault
  on:drop|preventDefault
  on:drag|preventDefault
  on:dragstart|preventDefault
  on:cut|preventDefault
  on:paste|preventDefault>
  <slot wrapper={wrapper} />
</div>
