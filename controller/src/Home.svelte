<script lang="ts">
  import type { User } from "firebase/auth";

  export let user: User | null;

  async function sendRequest() {
    if (user === null) return;

    const idToken = await user.getIdToken();
    await fetch("https://europe-west2-lexoral-test.cloudfunctions.net/patch?transcript=VWhYn86xAweQmEvCZxoW", {
      method: "put",
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
        "Authorization": `Bearer ${idToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "TestName"
      })
    })
    .then(async res => {
      if (res.ok) return res;
      const text = await res.text();
      throw new Error("Request was rejected: " + text);
    })
    .then(res => res.text())
    .then(url => fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/octet-stream"
      },
      body: file
    }))
    .catch(console.error);
  }
</script>

<style>

</style>

{#if user === null}
  Welcome to Lexoral
{:else}
  Welcome, {user.email}
  <button on:click={sendRequest}>Fetch</button>
  <!-- <form method="post" enctype="multipart/form-data" action="https://europe-west2-lexoral-test.cloudfunctions.net/upload">
    <input id="file_upload" type="file" name="file" accept="audio/*">
    <input type="submit">
  </form> -->

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