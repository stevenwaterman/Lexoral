<script lang="ts">
import { onMount } from "svelte";

  import Section from "./Section.svelte";
  import { sectionsStore, selectedSectionIdxStore } from "./state";

  let sectionComponents: Section[] = [];

  onMount(() => {
    if (sectionComponents.length) {
      selectedSectionIdxStore.set(0);
    }
  })
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