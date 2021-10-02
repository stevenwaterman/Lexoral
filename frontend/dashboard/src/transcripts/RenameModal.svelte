<script lang="ts">
  import { updateDoc } from "firebase/firestore";
  import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
  import { getContext } from "svelte";
  import Loading from "../Loading.svelte";

  const { close } = getContext("simple-modal");

  export let transcript: QueryDocumentSnapshot<DocumentData>;
    
  let name: string = transcript.get("name");

  let renaming = false;

  async function deleteTranscript() {
    renaming = true;
    await updateDoc(transcript.ref, { name });
    close();
    renaming = false;
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin: 0;
    margin-bottom: 1em;
    font-size: larger;
  }

  button {
    align-self: center;
  }

  .formSection {
    margin-block-end: 0.5em;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .loadingContainer {
    align-self: center;
  }

  .buttonContainer {
    align-self: center;
  }
</style>


<div class="container">
  <h1>Rename Transcript</h1>

  <div class="formSection">
    <label for="upload_name">Name:</label>
    <input id="upload_name" type="text" bind:value={name} disabled={renaming}>
  </div>

  {#if !renaming}
    <div class="buttonContainer">
      <button on:click|preventDefault={close}>Cancel</button>
      <button class="danger" on:click|preventDefault={deleteTranscript}>Update Name</button>
    </div>
  {/if}

  {#if renaming}
    <div class="loadingContainer">
      <Loading text="Renaming"/>
    </div>
  {/if}
</div>