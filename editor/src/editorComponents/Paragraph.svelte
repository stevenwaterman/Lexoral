<script lang="ts">
  import type { ParagraphState } from "../sectionStores";
  import Section from "./Section.svelte";

  export let paragraph: ParagraphState;
</script>

<p>
  {#each paragraph as section}
    <Section { section } />
  {/each}
</p>