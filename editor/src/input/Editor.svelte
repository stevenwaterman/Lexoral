<script lang="ts">
  import { autoPlayStore, lastPlayedSectionStore, loopStore, playAudio, playingStore, stopAudio } from "../audio/audio";
  import { audioModeStore } from "../audio/audioSelection";
  import { selectEnd } from "./select";
  import ToastController from "../display/toast/ToastController.svelte";
  import { sendToast } from "../display/toast/toasts";
  import Header from "../display/Header.svelte";

  import Document from "../text/Document.svelte";
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
    if ($audioModeStore === "word") return;
    audioModeStore.set("word");
    sendToast("Enabled audio mode: word");
  }

  function contextMode() {
    if ($audioModeStore === "context") return;
    audioModeStore.set("context");
    sendToast("Enabled audio mode: context");
  }

  function paragraphMode() {
    if ($audioModeStore === "paragraph") return;
    audioModeStore.set("paragraph");
    sendToast("Enabled audio mode: paragraph");
  }

  function onwardMode() {
    if ($audioModeStore === "onward") return;
    audioModeStore.set("onward");
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

  .wrapper {
    flex-grow: 1;
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
  <Header/>
  

  <div class="wrapper">
    <Dropdown/>
    <EditableContainer>
      <Document />
    </EditableContainer>
  </div>
</div>
