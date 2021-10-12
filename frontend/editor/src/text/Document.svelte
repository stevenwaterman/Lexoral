<script lang="ts">
  import Paragraph from "./Paragraph.svelte";
  import { paragraphLocationsStore } from "../state/paragraphLocationsStore";
  import type { AllSections } from "../state/sectionStore";
  import { allSectionsStore } from "../state/sectionStore";

  export let wrapper: HTMLDivElement;

  let sections: AllSections;
  $: sections = $allSectionsStore;

  const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
        const event = new CustomEvent("setVisible", { detail: entry.isIntersecting });
        entry.target.dispatchEvent(event);
     })
  }, {
    root: wrapper,
    rootMargin: "500px 0px 500px"
  });
</script>

{#each $paragraphLocationsStore as item (item.start + (1 / item.end))}
  <Paragraph
    observer={observer} 
    sections={sections} 
    start={item.start} 
    end={item.end}
  />
{/each}
