<script lang="ts">
  import type { User } from "firebase/auth";
  import Editor from "./input/Editor.svelte";
  import { initialiseStores } from "./state/initStore";
  import { fetchTranscript, setUser } from "./api";
import { initAudio } from "./audio/audioPlayer";

  export let user: User;
  $: setUser(user);  
</script>

<style>

</style>

{#await fetchTranscript()}
  Downloading Transcript
{:then res}
  {#await initialiseStores(res.transcript)}
    Loading Transcript
  {:then audioTimings}
    {#await initAudio(res.audioUrl)}
      Loading Audio
    {:then}
      <Editor/>
    {/await}
  {/await}
{:catch err}
  {err}
{/await}