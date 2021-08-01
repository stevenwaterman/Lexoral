<script lang="ts">
  import Audio from "./Audio.svelte";
  import Section from "./Section.svelte";
  import type { Output } from "./types";
  export let data: Output;

  let sections: Section[] = [];

  function next(idx: number) {
    if (idx + 1 !== sections.length) {
      sections[idx + 1].focusStart();
    }
  }

  function prev(idx: number) {
    if (idx !== 0) {
      sections[idx - 1].focusEnd();
    }
  }
</script>

<style>

</style>

{#each data as section, idx}
  <Section
    section={section}
    on:next="{() => next(idx)}"
    on:prev="{() => prev(idx)}"
    bind:this={sections[idx]}
  />
{/each}

<Audio/>