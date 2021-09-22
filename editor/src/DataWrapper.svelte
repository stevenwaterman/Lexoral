<script lang="ts">
  import type { User } from "firebase/auth";
  import { initAudio } from "./audio/audio";
  import Editor from "./input/Editor.svelte";
  import { initialiseStores } from "./state/initStore";

  export let user: User;

  async function getData(): Promise<void> {
    const params = new URLSearchParams(window.location.search);
    const transcriptId = params.get("id");
    if (transcriptId === null) throw new Error("Missing transcript ID");

    return user
      .getIdToken()
      .then(idToken => 
        fetch(`https://europe-west2-lexoral-test.cloudfunctions.net/fetch?transcript=${transcriptId}`, {
          method: "get",
          headers: {
            "Authorization": `Bearer ${idToken}`
          }
        }))
      .then(res => {
        if (res.ok) return res;
        throw new Error("response was not OK: " + res.status)
      })
      .then(res => res.json())
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