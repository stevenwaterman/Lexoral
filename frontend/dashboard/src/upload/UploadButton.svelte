<script lang="ts">
  import { getContext } from "svelte";
  import UploadModal from "./UploadModal.svelte";

  const { open } = getContext("simple-modal");

  function showModal() {
    open(UploadModal, {}, {
      closeButton: false
    });
  }
</script>

<button on:click={showModal}>New Transcript</button>