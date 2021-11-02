<script lang="ts">
  import Section from "./Section.svelte";
  import { onDestroy, onMount } from "svelte";

  export let observer: IntersectionObserver | undefined;
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


  let style: string;
  $: style = visible ? "" : `min-height: ${minHeight}px`;
</script>

<style>
  .paragraph {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-block-end: 1em;
    box-sizing: border-box;

    position: relative;
    contain: paint layout;
  }

  .paragraph::selection {
    background: none;
  }
</style>

<p class="paragraph" bind:this={paragraphComponent} style={style} class:hidden={!visible}>
  {#each paragraphRange as idx (idx)}
    <Section 
      idx={idx}
      hidden={!visible}
    />
  {/each}
</p>
