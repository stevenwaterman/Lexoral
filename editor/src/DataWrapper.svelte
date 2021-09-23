<script lang="ts">
  import type { User } from "firebase/auth";
  import { initAudio } from "./audio/audio";
  import Editor from "./input/Editor.svelte";
  import { initialiseStores } from "./state/initStore";
  import { fetchTranscript, setUser } from "./api";

  export let user: User;
  $: setUser(user);  

  async function getData(): Promise<void> {
    const params = new URLSearchParams(window.location.search);
    const transcriptId = params.get("id");
    if (transcriptId === null) throw new Error("Missing transcript ID");
    return fetchTranscript(transcriptId)
      .then(res => {
        const audioTimings = initialiseStores(res.transcript, res.patches);
        return initAudio(audioTimings, res.audioUrl);
      });
  }
</script>

<style>

</style>

{#await getData()}
  Loading your transcript
{:then}
  <Editor/>
{:catch err}
  {err}
{/await}