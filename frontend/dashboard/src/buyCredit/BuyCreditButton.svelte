<script lang="ts">
  import { getContext } from "svelte";
  import BuyCreditModal from "./BuyCreditModal.svelte";

  const { open } = getContext("simple-modal");

  function showModal() {
    open(BuyCreditModal, {}, {
      closeButton: true
    });
  }
</script>

<button on:click={showModal} title="Buy more credit">+</button>