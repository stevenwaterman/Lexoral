<script lang="ts">
  import type { User } from "firebase/auth";

  export let user: User | null;

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
        name: file.name
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
  label {
    display: block;
  }
</style>

<form method="post" enctype="multipart/form-data" on:submit|preventDefault={upload}>
  <div>
    <label for="file_upload">Choose audio to upload</label>
    <input id="file_upload" type="file" accept="audio/*" bind:this={fileInput}>
  </div>
  <div>
    <input type="submit" value="upload">
  </div>
</form>