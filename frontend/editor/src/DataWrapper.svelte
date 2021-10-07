<script lang="ts">
  import type { User } from "firebase/auth";
  import { initAudio } from "./audio/audio";
  import Editor from "./input/Editor.svelte";
  import { initialiseStores } from "./state/initStore";
  import { fetchTranscript, setUser } from "./api";

  export let user: User;
  $: setUser(user);  

  async function getData(): Promise<void> {
    return fetchTranscript()
      .then(res => {
        // TODO remove this
        // const transcript = res.transcript.slice(0, 10000);
        console.log("Fetch done");
        const audioTimings = initialiseStores(res.transcript);
        console.log("Initialise done");
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