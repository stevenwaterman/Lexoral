<script lang="ts">
  import Editor from "./input/Editor.svelte";
  import { initAll } from "./state/initialiseState";
</script>

<style>

</style>

{#await initAll()}
  Initialising
{:then}
  <Editor/>
{:catch err}
  {err}
{/await}