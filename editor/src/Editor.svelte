<script lang="ts">
  import Section from "./Section.svelte";
  import type { Output } from "./types";
  export let data: Output;
</script>

<style>

</style>

{#each data as section}
  <Section section={section}/>
{/each}