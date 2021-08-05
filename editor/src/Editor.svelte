<script lang="ts">
  import Section from "./Section.svelte";
  import { outputStore } from "./state";

  let sectionComponents: Section[] = [];
</script>

<style>

</style>

{#each $outputStore as section, idx}
  <Section
    idx={idx}
    section={section}
    bind:this={sectionComponents[idx]}
  />
{/each}