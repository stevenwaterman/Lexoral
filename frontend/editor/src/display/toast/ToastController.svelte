<script lang="ts">
  import { toastStore } from "./toasts";
  import Toast from "./Toast.svelte";
</script>

<style>
  .toastContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    position: fixed;
    bottom: 12px;
    right: 24px;

    z-index: 1;
  }
</style>

<div class="toastContainer">
  {#each $toastStore as toast (toast.idx)}
    <Toast text={toast.text}/>
  {/each}
</div>