<script lang="ts">
  import type { ParagraphState } from "../sectionStores";
  import { documentStore } from "../sectionStores";
  import { selectedTimeRangeStore } from "../selectionStores";
  import Document from "./Document.svelte";
  import Dropdown from "./Dropdown.svelte";
  import EditableContainer from "./EditableContainer.svelte";
  import Paragraph from "./Paragraph.svelte";

  function getText(paragraph: ParagraphState) {
    let text = "";
    for(let section of paragraph) {
      if (text.length) text += " "      
      text += section.text;
    }
    return text;
  }

  let textContent;

  let selectedTimeRange: { start: number; end: number; } | null;
  $: selectedTimeRange = $selectedTimeRangeStore;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
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

  
</style>

<div class="container">
  <img class="logo" src="/assets/smallBrand.png" alt="logo"/>

  <div class="wrapper">
    <Dropdown/>
    <EditableContainer bind:textContent>
      <Document />
    </EditableContainer>
  </div>
</div>

