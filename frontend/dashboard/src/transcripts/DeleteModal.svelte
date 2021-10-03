<script lang="ts">
  import { deleteDoc } from "firebase/firestore";
  import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
  import { getContext } from "svelte";
  import Loading from "../Loading.svelte";

  const { close } = getContext("simple-modal");

  export let transcript: QueryDocumentSnapshot<DocumentData>;
    
  let name: string;
  $: name = transcript.get("name");

  let deleting = false;

  async function deleteTranscript() {
    deleting = true;
    await deleteDoc(transcript.ref);
    close();
    deleting = false;
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

  p {
    align-self: center;
  }

  button {
    align-self: center;
  }

  .loadingContainer {
    align-self: center;
  }

  .buttonContainer {
    align-self: center;
  }

  .bold {
    font-weight: bolder;
  }
</style>


<div class="container">
  <h1>Delete Transcript</h1>

  <p>You are about to <span class="bold">permanently</span> delete '{name}' from Lexoral's servers.</p>
  <p>It's not possible to recover the transcript after you delete it.</p>
  <p>Are you sure?</p>

  {#if !deleting}
    <div class="buttonContainer">
      <button on:click|preventDefault={close}>Cancel</button>
      <button class="danger" on:click|preventDefault={deleteTranscript}>Permanently Delete</button>
    </div>
  {/if}

  {#if deleting}
    <div class="loadingContainer">
      <Loading text="Deleting"/>
    </div>
  {/if}
</div>