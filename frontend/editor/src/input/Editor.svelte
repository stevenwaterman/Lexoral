<script lang="ts">
  import ToastController from "../display/toast/ToastController.svelte";
  import { sendToast } from "../display/toast/toasts";
  import Header from "../display/Header.svelte";

  import Document from "../text/Document.svelte";
  import Dropdown from "./Dropdown.svelte";
  import EditableContainer from "./EditableContainer.svelte";
  import { exportTranscript } from "../state/export";
  import { lastPlayingSectionIdxStore, playingStore } from "../audio/audioStatus";
  import { autoPlayStore, loopStore, playAudio, rateStore, stopAudio, volumeStore } from "../audio/audioPlayer";
  import { audioStyleStore } from "../audio/audioTimings";
  import { selectEnd, findSectionNode } from "./select";
  import Options from "../options/Options.svelte";

  let altReleaseShouldPlay = false;

  function keyUp(event: KeyboardEvent) {
    if (event.key === "Alt") {
      event.preventDefault();
      if (altReleaseShouldPlay) {
        altReleaseShouldPlay = false;
        if ($playingStore) stopAudio();
        else playAudio();
      }
    }
  }

  async function keyDown(event: KeyboardEvent) {
    if (event.key === "Alt") {
      event.preventDefault();
      altReleaseShouldPlay = true;
    }

    if (event.key === "Escape" && $playingStore) {
      const idx = $lastPlayingSectionIdxStore;
      if (idx !== null) {
        const component = findSectionNode(idx);
        if (component) {
          event.preventDefault();
          await selectEnd(component);
          stopAudio();
        }
      }
    }

    if (event.key === "s" && event.ctrlKey) {
      event.preventDefault();
      // return manualSave();
      return;
    }

    if (event.key === "e" && event.ctrlKey) {
      event.preventDefault();
      return exportTranscript("txt");
    }

    if (event.key !== "Alt" && event.altKey) {
      event.preventDefault();
      altReleaseShouldPlay = false;
      switch(event.key) {
        case "c": return contextMode();
        case "o": return onwardMode();
        case "l": return toggleLoop();
        case "a": return toggleAutoPlay();
        case "ArrowLeft": return rateStore.decrease();
        case "ArrowRight": return rateStore.increase();
        case "ArrowUp": return volumeStore.increase();
        case "ArrowDown": return volumeStore.decrease();
      }
    }
  }

  function contextMode() {
    if ($audioStyleStore === "context") return;
    audioStyleStore.set("context");
    sendToast("Enabled audio mode: context");
  }

  function onwardMode() {
    if ($audioStyleStore === "onward") return;
    audioStyleStore.set("onward");
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
  .grid {
    display: grid;

    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;

    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  .mainSection {
    width: 100%;
    height: 100%;
    min-height: 0;

    position: relative;
  }
</style>

<svelte:body on:keydown={keyDown} on:keyup={keyUp}/>

<div class="grid">
  <Header/>

  <div class="mainSection">
    <EditableContainer let:wrapper>
      <Dropdown wrapper={wrapper}/>
      <Document wrapper={wrapper}/>
    </EditableContainer>
    <ToastController/>
  </div>
  

  <Options/>
</div>
