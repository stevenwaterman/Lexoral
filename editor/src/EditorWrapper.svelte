<script lang="ts">
  import { refineTiming } from "./envelope";
  import Editor from "./Editor.svelte";
  import type { Output } from "./types";
  import { outputStore } from "./state";

  export let data: Output;

  $: outputStore.set(data);
</script>

<style>

</style>

{#if data}
  <Editor/>
{/if}
