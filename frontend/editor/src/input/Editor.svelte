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
  import { commaTimeStore, paragraphTimeStore, periodTimeStore } from "../state/section/defaultPunctuationStore";

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
      return exportTranscript();
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

<svelte:body on:keydown={keyDown} on:keyup={keyUp}/>

<ToastController/>

<Header/>

<EditableContainer let:wrapper>
  <Dropdown wrapper={wrapper}/>
  <Document wrapper={wrapper}/>
</EditableContainer>

<div>
  <input type="range" min={0.01} max={$periodTimeStore - 0.01} step={0.01} bind:value={$commaTimeStore}/> 
  <span>{$commaTimeStore}</span>
</div>

<div>
  <input type="range" min={$commaTimeStore + 0.01} max={$paragraphTimeStore - 0.01} step={0.01} bind:value={$periodTimeStore}/> 
  <span>{$periodTimeStore}</span>
</div>

<div>
  <input type="range" min={$periodTimeStore + 0.01} max={1} step={0.01} bind:value={$paragraphTimeStore}/>
  <span>{$paragraphTimeStore}</span>
</div>
