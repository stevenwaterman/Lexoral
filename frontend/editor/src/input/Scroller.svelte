<script lang="ts">
  import { displayStore } from "../state/settings/displayStore";

  import Document from "../text/Document.svelte";
  import Dropdown from "./dropdown/DropdownFilter.svelte";

  let wrapper: HTMLDivElement;

  $: fontSizeStore = displayStore.getField("fontSize");
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
  spellcheck={false}
  tabindex={-1}
  on:dragover|preventDefault
  on:drop|preventDefault
  on:drag|preventDefault
  on:dragstart|preventDefault
  on:cut|preventDefault
  on:paste|preventDefault>

  <Dropdown/>
  <Document wrapper={wrapper}/>
</div>
