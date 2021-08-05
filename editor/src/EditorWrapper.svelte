<script lang="ts">
  import Audio from "./Audio.svelte";
  import { refineTiming } from "./envelope";
  import Editor from "./Editor.svelte";
  import Controls from "./Controls.svelte";
  import type { Output } from "./types";
  import { outputStore } from "./state";

  export let data: Output;
  let buffer: AudioBuffer;

  async function postProcess(data: Output, buffer: AudioBuffer) {
    const processed = await refineTiming(data, buffer);
    outputStore.set(processed);
  }
</script>

<style>

</style>

{#if data && buffer}
  {#await postProcess(data, buffer)}
    Processing audio
  {:then}
    <Editor/>
    <Controls/>
  {/await}
{/if}

<Audio bind:buffer/>