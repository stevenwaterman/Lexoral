<script lang="ts">
  import ToastController from "../display/toast/ToastController.svelte";
  import Header from "../display/Header.svelte";

  import Scroller from "./Scroller.svelte";
  import { isEmbeddedDemo } from "../demo";
  import Modal from "svelte-simple-modal";
  import Playback from "../audio/Playback.svelte";
</script>

<style>
  .grid {
    display: grid;

    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;

    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  .mainSection {
    width: 100%;
    height: 100%;
    min-height: 0;
    min-width: 0;

    position: relative;

    border-left: 1px solid var(--form-border);
    border-right: 1px solid var(--form-border);
    background-color: var(--blue-2);
  }
</style>

{#if isEmbeddedDemo()}
  <Scroller/>
{:else}
  <Modal closeButton styleWindow={{backgroundColor: "var(--grey-5)"}}>
    <div class="grid">
      <Header/>
  
      <div class="mainSection">
        <Scroller/>
        <ToastController/>
      </div>
  
      <Playback/>
    </div>
  </Modal>
{/if}
