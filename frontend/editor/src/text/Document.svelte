<script lang="ts">
import { afterUpdate, beforeUpdate } from "svelte";
import { get_store_value } from "svelte/internal";
import { selectSectionPosition, selectSectionStart } from "../input/select";
import { anchorSectionIdxStore, focusSectionIdxStore, selectionStore } from "../input/selectionState";

  import { paragraphLocationsStore } from "../state/section/paragraphLocationsStore";
  import Paragraph from "./Paragraph.svelte";

  export let wrapper: HTMLDivElement;

  const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
        const event = new CustomEvent("setVisible", { detail: entry.isIntersecting });
        entry.target.dispatchEvent(event);
     })
  }, {
    root: wrapper,
    rootMargin: "500px 0px 500px"
  });

  afterUpdate(() => {
    const selection = get_store_value(selectionStore);
    if (selection === undefined) selectSectionStart(0);
    else selectSectionPosition(selection.focus.section, selection.focus.offset);
  })
</script>

{#each $paragraphLocationsStore as item (item.start + (1 / item.end))}
  <Paragraph
    observer={observer} 
    start={item.start} 
    end={item.end}
  />
{/each}
