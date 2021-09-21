<script lang="ts">
  import { autoPlayStore, lastPlayedSectionStore, loopStore, playAudio, playingStore, stopAudio, volumeStore } from "../audio/audio";
  import { audioModeStore, contextAmountStore } from "../audio/audioSelection";
  import { selectEnd } from "./select";
  import ToastController from "../display/toast/ToastController.svelte";
  import { sendToast } from "../display/toast/toasts";
  import Header from "../display/Header.svelte";

  import Document from "../text/Document.svelte";
  import Dropdown from "./Dropdown.svelte";
  import EditableContainer from "./EditableContainer.svelte";
  import { findSectionNode } from "../text/selector";
  import { autoSaveIntervalStore, loadSave } from "../text/save";
  import { clearHistory } from "../text/storeMutators";

  loadSave()
  autoSaveIntervalStore.set(60);
  clearHistory();

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
      const idx = $lastPlayedSectionStore?.idx;
      if (idx !== undefined) {
        const component = findSectionNode(idx);
        if (component) {
          event.preventDefault();
          await selectEnd(component);
          stopAudio();
        }
      }
    }

    if (event.key !== "Alt" && event.altKey) {
      event.preventDefault();
      altReleaseShouldPlay = false;
      switch(event.key) {
        case "c": return contextMode();
        case "p": return paragraphMode();
        case "o": return onwardMode();
        case "l": return toggleLoop();
        case "a": return toggleAutoPlay();
        case "ArrowLeft": return decreaseContext();
        case "ArrowRight": return increaseContext();
        case "ArrowUp": return increaseVolume();
        case "ArrowDown": return decreaseVolume();
      }
    }
  }

  function getVolumeDecreaseAmount(volume: number): number {
    if (volume <= 1) return 0;
    if (volume <= 10) return 1;
    if (volume <= 50) return 5;
    if (volume <= 150) return 10;
    if (volume <= 400) return 25;
    return 100;
  }

  function getVolumeIncreaseAmount(volume: number): number {
    if (volume >= 400) return 100;
    if (volume >= 150) return 25;
    if (volume >= 50) return 10;
    if (volume >= 10) return 5;
    return 1;
  }

  function decreaseVolume() {
    volumeStore.update(volume => {
      const newVolume = volume - getVolumeDecreaseAmount(volume);
      if (volume !== newVolume) sendToast(`Set volume: ${Math.round(newVolume)}%`);
      return newVolume;
    })
  }

  function increaseVolume() {
    volumeStore.update(volume => {
      const newVolume = volume + getVolumeIncreaseAmount(volume);
      if (volume !== newVolume) sendToast(`Set volume: ${Math.round(newVolume)}%`);
      return newVolume;
    })
  }

  function decreaseContext() {
    contextAmountStore.update(amount => {
      if (amount > 0) {
        const newAmount = amount - 1;
        sendToast(`Set context amount: ${newAmount}`);
        return newAmount;
      } else return amount;
    });
  }

  function increaseContext() {
    contextAmountStore.update(amount => {
      const newAmount = amount + 1;
      sendToast(`Set context amount: ${newAmount}`);
      return newAmount;
    });
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

  let wrapper: HTMLDivElement;
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
  
  <div class="wrapper" bind:this={wrapper}>
    <Dropdown wrapper={wrapper}/>
    <EditableContainer>
      <Document />
    </EditableContainer>
  </div>
</div>
