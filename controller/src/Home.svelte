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

    const idToken = await user.getIdToken();
    await fetch("https://europe-west2-lexoral-test.cloudfunctions.net/upload", {
      method: "post",
      headers: {
        "Authorization": `Bearer ${idToken}`
      },
      body: file
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


  <form method="post" enctype="multipart/form-data" on:submit|preventDefault={upload}>
    <div>
      <label for="file_upload">Choose audio to upload</label>
      <input id="file_upload" type="file" accept="audio/*" bind:this={fileInput}>
    </div>
    <div>
      <input type="submit">
    </div>
  </form>
{/if}