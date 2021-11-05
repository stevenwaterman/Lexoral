<script lang="ts">
  import { getContext } from "svelte";
  import { uploadFile } from "../api";
  import { creditStore, toCreditString } from "../credit/credit";
  import Loading from "../Loading.svelte";

  const { close } = getContext("simple-modal");

  let file: File | undefined = undefined;

  let placeholderName: string;
  $: placeholderName = getPlaceholderName(file);

  function getPlaceholderName(file: File | undefined) {
    if (file === undefined) return "My Transcript";
    const fileName = file.name;
    const lastDotIdx = fileName.lastIndexOf(".");
    if (lastDotIdx === -1) return fileName;
    return fileName.slice(0, lastDotIdx);
  }

  let name: string | undefined;

  let audioUrl: string | undefined;
  $: audioUrl = file === undefined ? undefined : URL.createObjectURL(file);

  let duration: number | undefined = undefined;

  let credit: number | undefined;
  $: credit = $creditStore;

  let normalisedDuration: number;
  $: normalisedDuration = isNaN(duration ?? 0) ? 0 : duration ?? 0;

  let roundedDuration: number;
  $: roundedDuration = Math.round(normalisedDuration);

  let remainingCredit: number;
  $: remainingCredit = (credit ?? 0) - roundedDuration;

  let affordable: boolean;
  $: affordable = remainingCredit >= 0;


  function fileChange(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    file = input.files?.[0];
  }

  let uploading = false;

  async function attemptUpload() {
    if (file === undefined) return;
    uploading = true;
    if (name !== undefined && name.length > 0) {
      await uploadFile(file, name);
    } else {
      await uploadFile(file, placeholderName);
    }
    uploading = false;
    close();
  }

  let allowUpload: boolean;
  $: allowUpload = (audioUrl !== undefined) && (duration !== undefined) && affordable;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .formSection {
    margin-block-end: 0.5em;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  label {
    margin-right: 1em;
  }

  h1 {
    margin: 0;
    margin-bottom: 1em;
    font-size: larger;
  }

  audio {
    width: 100%;
    outline: none;
  }

  p {
    align-self: center;
  }

  button {
    align-self: center;
  }

  .error {
    color: var(--error);
  }

  .loadingContainer {
    align-self: center;
  }

  .buttonContainer {
    align-self: center;
  }
</style>


<div class="container">
  <h1>New Transcript</h1>

  <div class="formSection">
    <label for="upload_file">Audio:</label>
    <input id="upload_file" type="file" accept="audio/*" disabled={uploading} on:change={fileChange}>
  </div>

  <div class="formSection">
    <label for="upload_name">Name:</label>
    <input id="upload_name" type="text" bind:value={name} disabled={uploading} placeholder={placeholderName}>
  </div>

  {#if audioUrl}
    <!-- svelte-ignore a11y-media-has-caption -->
    <audio controls src={audioUrl} bind:duration/>

    {#if duration === undefined}
      <p>Unsupported file type</p>
    {:else}
      {#if !affordable}
        <p class="error">Insufficient credit: Add {toCreditString(-remainingCredit)} to proceed</p>
      {:else}
        <p>Your remaining credit will be: {toCreditString(remainingCredit)}</p>
      {/if}
    {/if}
  {/if}

  {#if !uploading}
    <div class="buttonContainer">
      <button class="danger" on:click|preventDefault={close}>Cancel</button>
      <button class="success" on:click|preventDefault={attemptUpload} disabled={!allowUpload}>Upload</button>
    </div>
  {/if}

  {#if uploading}
    <div class="loadingContainer">
      <Loading text="Uploading"/>
    </div>
  {/if}
</div>