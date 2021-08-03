<script lang="ts">
  import Editor from "./EditorWrapper.svelte";
  import { refineTiming } from "./envelope";
  import type { Output } from "./types";

  let data: string;

  let json: Output | null;
  $: json = data ? JSON.parse(data) : null;
</script>

<style>

</style>

{#if json}
  <Editor data={json}/>
{:else}
  <input bind:value={data}>
{/if}