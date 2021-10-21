<script lang="ts">
  import type { User } from "firebase/auth";
  import Editor from "./input/Editor.svelte";
  import { initialiseStores } from "./state/initStore";
  import { fetchTranscript, setUser } from "./api";
  import { initAudio } from "./audio/audioPlayer";

  export let user: User;
  $: setUser(user);

  async function init() {
    const { transcript, audioUrl } = await fetchTranscript();
    const initStoresPromise = initialiseStores(transcript);
    initAudio(audioUrl);
    await initStoresPromise;
  }
</script>

<style>

</style>

{#await init()}
  Loading Transcript
{:then}
  <Editor/>
{:catch err}
  {err}
{/await}