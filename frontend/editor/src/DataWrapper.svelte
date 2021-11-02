<script lang="ts">
  import type { User } from "firebase/auth";
  import Editor from "./input/Editor.svelte";
  import { initAll } from "./state/initialiseState";
  import { setUser } from "./api";

  export let user: User;
  $: setUser(user);
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