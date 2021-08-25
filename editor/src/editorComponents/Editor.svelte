<script lang="ts">
  import { autoPlayStore, lastPlayedSectionStore, loopStore, playAudio, playingStore, stopAudio } from "../audio";
  import { modeStore } from "../audioStores";
  import { selectEnd } from "../selectionStores";
  import ToastController from "../toast/ToastController.svelte";
  import { sendToast } from "../toast/toasts";

  import Document from "./Document.svelte";
  import Dropdown from "./Dropdown.svelte";
  import EditableContainer from "./EditableContainer.svelte";

  function keyUp(event: KeyboardEvent) {
    if (event.key === "Alt") {
      if ($playingStore) stopAudio();
      else playAudio();
    }
  }

  async function keyDown(event: KeyboardEvent) {
    if (event.key === "Escape" && $playingStore) {
      const component = $lastPlayedSectionStore?.spanComponent;
      if (component) {
        await selectEnd(component);
        stopAudio();
      }
    }

    if (event.altKey) {
      switch(event.key) {
        case "w": return wordMode();
        case "c": return contextMode();
        case "p": return paragraphMode();
        case "o": return onwardMode();
        case "l": return toggleLoop();
        case "a": return toggleAutoPlay();
      }
    }
  }

  function wordMode() {
    if ($modeStore === "word") return;
    modeStore.set("word");
    sendToast("Enabled audio mode: word");
  }

  function contextMode() {
    if ($modeStore === "context") return;
    modeStore.set("context");
    sendToast("Enabled audio mode: context");
  }

  function paragraphMode() {
    if ($modeStore === "paragraph") return;
    modeStore.set("paragraph");
    sendToast("Enabled audio mode: paragraph");
  }

  function onwardMode() {
    if ($modeStore === "onward") return;
    modeStore.set("onward");
    sendToast("Enabled audio mode: onward");
  }

  function toggleAutoPlay() {
    autoPlayStore.update(autoPlay => {
      if (autoPlay) sendToast("Auto-play disabled")
      else sendToast("Auto-play enabled")
      return !autoPlay;
    });
  }

  function toggleLoop() {
    loopStore.update(loop => {
      if (loop) sendToast("Looping disabled")
      else sendToast("Looping enabled")
      return !loop
    });
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .logo {
    max-width:100%;
    max-height:60px;
    width: auto;
    height: auto;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .wrapper {
    flex-grow: 1;
    margin-top: 10px;
    border-top: 1px solid var(--form-border);
    border-bottom: 1px solid var(--form-border);
    padding: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
  }
</style>

<svelte:body on:keydown={keyDown} on:keyup={keyUp}/>

<ToastController/>

<div class="container">
  <img class="logo" src="/assets/smallBrand.png" alt="logo"/>

  <div class="wrapper">
    <Dropdown/>
    <EditableContainer>
      <Document />
    </EditableContainer>
  </div>
</div>
