<script lang="ts">
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
</script>

{#each $paragraphLocationsStore as item (item.start + (1 / item.end))}
  <Paragraph
    observer={observer} 
    start={item.start} 
    end={item.end}
  />
{/each}
