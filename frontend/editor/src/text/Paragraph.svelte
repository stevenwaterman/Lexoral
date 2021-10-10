<script lang="ts">
  import { getAssertExists } from "../utils/list";

  import Section from "./Section.svelte";
  import type { AllSections } from "../state/sectionStore";
  import { onDestroy, onMount } from "svelte";

  export let observer: IntersectionObserver | undefined;
  export let sections: AllSections;
  export let start: number;
  export let end: number;

  let visible: boolean = true;
  let minHeight: number = 0;

  let paragraphComponent: HTMLParagraphElement;
  $: paragraphComponent?.addEventListener("setVisible", setVisible)


  export function setVisible(event: Event) {
    minHeight = paragraphComponent.clientHeight;
    visible = (event as CustomEvent<boolean>).detail;
  }

  onMount(() => observer?.observe(paragraphComponent));
  onDestroy(() => observer?.unobserve(paragraphComponent));

  function range(start: number, end: number): number[] {
    const output: number[] = [];
    for(let i = start; i <= end; i++) {
      output.push(i);
    }
    return output;
  }

  let paragraphRange: number[];
  $: paragraphRange = range(start, end);

</script>

<style>
  .paragraph {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-block-end: 1em;
    box-sizing: border-box;

    contain: style paint layout;
  }

  .paragraph::selection {
    background: none;
  }
</style>

<p class="paragraph" bind:this={paragraphComponent} style={`min-height: ${minHeight}px`}>
  {#each paragraphRange as idx (idx)}
    <Section sectionStore={getAssertExists(sections, idx)} last={idx === paragraphRange.length - 1} hidden={!visible}/>
  {/each}
</p>
