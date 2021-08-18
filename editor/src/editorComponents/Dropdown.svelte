<script lang="ts">
  import { afterUpdate, createEventDispatcher } from "svelte";
import type { SectionState } from "../sectionStores";
import { dropdownPositionStore, dropdownSectionStore } from "../selectionStores";
  import { modeStore } from "../state";

  let section: SectionState | null;
  $: section = $dropdownSectionStore;

  let left: number;
  $: left = $dropdownPositionStore?.left ?? 0;

  let top: number;
  $: top = ($dropdownPositionStore?.top ?? 0) + ($dropdownPositionStore?.height ?? 0)

  // let visible: boolean;
  // $: visible = $modeStore === "edit";

  // const dispatch = createEventDispatcher();

  // function clicked(idx: number) {
  //   dispatch("clickedOption", idx);
  // }
  
  // function entered(idx: number) {
  //   dispatch("selectOption", idx);
  // }
</script>

<style>
  .popup {
    position: fixed;
    top: 0;
    max-width: 100vw;
    border: 1px solid var(--form-border);
    z-index: 2;
    background: var(--page-background);
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    border-radius: 4px;
  }

  .edit {
    cursor: pointer;
  }

  .highlight {
    background-color: var(--weak-focus);
  }

  .option {
    white-space: nowrap;
    padding: 2px;
  }

  .topBorder {
    border-top: 1px solid var(--form-border);
  }
</style>


{#if section !== null}
  <div 
    class="popup"
    style={`left: ${left}px; top: ${top}px;`}
    class:edit={$modeStore === "edit"}
  >
    {#each section.completionOptions as option, idx}
      <span
        class="option"
        class:topBorder={idx !== 0}
      >
        {option}
      </span>
    {/each}
  </div>
{/if}
