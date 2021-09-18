<script lang="ts">
  import type { User } from "firebase/auth";

  export let user: User | null;

  async function sendRequest() {
    if (user === null) return;

    const idToken = await user.getIdToken();
    await fetch("https://europe-west2-lexoral-test.cloudfunctions.net/fetch", {
      method: "get",
      headers: {
        "Authorization": `Bearer ${idToken}`
      }
    })
  }

  let fileInput: HTMLInputElement;

  async function upload() {
    if (user === null) return;

    const files = fileInput.files;
    if (files === null) {
      console.error("Files is null");
      return;
    }

    const file = files[0];
    if (file === undefined) {
      console.error("File is undefined");
      return;
    }

    const data = new FormData();
    data.append('file', file);
    data.append('name', 'audio');

    const idToken = await user.getIdToken();
    await fetch("https://europe-west2-lexoral-test.cloudfunctions.net/upload", {
      method: "post",
      headers: {
        "Authorization": `Bearer ${idToken}`
      },
      body: data
    })
  }
</script>

<style>

</style>

{#if user === null}
  Welcome to Lexoral
{:else}
  Welcome, {user.email}
  <button on:click={sendRequest}>Fetch</button>

  <form method="post" enctype="multipart/form-data" action="https://europe-west2-lexoral-test.cloudfunctions.net/upload">
    <div>
      <label for="file">Choose audio to upload</label>
      <input id="file" name="file" type="file" accept="audio/*" bind:this={fileInput}>
    </div>
    <div>
      <input type="submit">
    </div>
  </form>
{/if}