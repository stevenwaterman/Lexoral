<script lang="ts">
  import type { Paragraph } from "../sectionStores";
  import { documentStore } from "../sectionStores";
import { selectedTimeRangeStore } from "../selectionStores";
  import Dropdown from "./Dropdown.svelte";
  import EditableContainer from "./EditableContainer.svelte";

  function getText(paragraph: Paragraph) {
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

  .section {
    display: inline-block;
    white-space: pre;
  }

  .highlight {
    background-color: var(--weak-focus)
  }
</style>

<div class="container">
  <img class="logo" src="/assets/smallBrand.png" alt="logo"/>

  <div class="wrapper">
    <Dropdown/>
    <EditableContainer bind:textContent>
      {#each $documentStore as paragraph}
        <p>
          {#each paragraph as section}
            <span class="section" class:highlight={selectedTimeRange !== null && selectedTimeRange.start < section.time.end && selectedTimeRange.end >= section.time.start}>
              {section.text + " "}
            </span>
          {/each}
        </p>
      {/each}
    </EditableContainer>
  </div>
</div>

