<script lang="ts">
  import Audio from "./Audio.svelte";
  import { refineTiming } from "./envelope";
  import Section from "./Section.svelte";
  import type { Output } from "./types";

  export let data: Output;
  let buffer: AudioBuffer;

  let sectionComponents: Section[] = [];

  function next(idx: number) {
    if (idx + 1 !== sectionComponents.length) {
      sectionComponents[idx + 1].focusStart();
    }
  }

  function prev(idx: number) {
    if (idx !== 0) {
      sectionComponents[idx - 1].focusEnd();
    }
  }
</script>

<style>

</style>

{#if data && buffer}
  {#await refineTiming(data, buffer)}
    Processing audio
  {:then sections}
    {#each sections as section, idx}
    <Section
      section={section}
      on:next="{() => next(idx)}"
      on:prev="{() => prev(idx)}"
      bind:this={sectionComponents[idx]}
    />
    {/each}
  {/await}
{/if}


<Audio bind:buffer/>