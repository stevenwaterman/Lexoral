<script lang="ts">
  import ToastController from "../display/toast/ToastController.svelte";
  import { sendToast } from "../display/toast/toasts";
  import Header from "../display/Header.svelte";

  import Document from "../text/Document.svelte";
  import Dropdown from "./Dropdown.svelte";
  import EditableContainer from "./EditableContainer.svelte";
  import { exportTranscript } from "../state/export";
  import { lastPlayingSectionIdxStore, playingStore } from "../audio/audioStatus";
  import { playAudio, stopAudio } from "../audio/audioPlayer";
  import { selectEnd, findSectionNode } from "./select";
  import Options from "../options/Options.svelte";
import { audioStore } from "../state/settings/audioStore";
import { clamp } from "../utils/list";

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
        case "ArrowLeft": return audioStore.getField("rate").update(rate => Math.max(10, rate - 5));
        case "ArrowRight": return audioStore.getField("rate").update(rate => rate + 5);
        case "ArrowUp": return audioStore.getField("volume").update(volume => clamp(volume + 5, 0, 100));
        case "ArrowDown": return audioStore.getField("volume").update(volume => clamp(volume - 5, 0, 100));
      }
    }
  }

  function contextMode() {
    audioStore.getField("mode").set("context");
  }

  function onwardMode() {
    audioStore.getField("mode").set("onward");
  }

  function toggleAutoPlay() {
    audioStore.getField("autoPlay").update(autoPlay => !autoPlay);
  }

  function toggleLoop() {
    audioStore.getField("loop").update(loop => !loop);
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
    min-width: 0;

    position: relative;

    border-left: 1px solid var(--form-border);
    border-right: 1px solid var(--form-border);
    background-color: var(--blue-2);
  }
</style>

<svelte:body on:keydown={keyDown} on:keyup={keyUp}/>

<div class="grid">
  <Header/>

  <div class="mainSection">
    <EditableContainer let:wrapper>
      <Dropdown/>
      <Document wrapper={wrapper}/>
    </EditableContainer>
    <ToastController/>
  </div>

  <Options/>
</div>
