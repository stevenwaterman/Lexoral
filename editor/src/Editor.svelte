<script lang="ts">
  import Section from "./Section.svelte";
  import { sectionsStore } from "./state";

  let sectionComponents: Section[] = [];
</script>

<style>

</style>

{#each $sectionsStore as section, idx}
  <Section
    idx={idx}
    section={section}
    bind:this={sectionComponents[idx]}
  />
{/each}