<script lang="ts">
  import ToastController from "../display/toast/ToastController.svelte";
  import { sendToast } from "../display/toast/toasts";
  import Header from "../display/Header.svelte";

  import Document from "../text/Document.svelte";
  import Dropdown from "./Dropdown.svelte";
  import EditableContainer from "./EditableContainer.svelte";
  import { exportTranscript } from "../state/export";
  import { playingStore } from "../audio/audioStatus";
  import { loopStore, playAudio, stopAudio, volumeStore } from "../audio/audioPlayer";

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
      // TODO
      // const idx = $lastPlayedSectionStore?.idx;
      // if (idx !== undefined) {
      //   const component = findSectionNode(idx);
      //   if (component) {
      //     event.preventDefault();
      //     await selectEnd(component);
      //     stopAudio();
      //   }
      // }
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
    if (volume <= 0.01) return 0;
    if (volume <= 0.1) return 0.01;
    if (volume <= 0.5) return 0.05;
    return 0.1;
  }

  function getVolumeIncreaseAmount(volume: number): number {
    if (volume === 1) return 0;
    if (volume >= 0.5) return 0.10;
    if (volume >= 0.1) return 0.05;
    return 0.01;
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
    // TODO 
    // contextAmountStore.update(amount => {
    //   if (amount > 0) {
    //     const newAmount = amount - 1;
    //     sendToast(`Set context amount: ${newAmount}`);
    //     return newAmount;
    //   } else return amount;
    // });
  }

  function increaseContext() {
    // TODO 
    // contextAmountStore.update(amount => {
    //   const newAmount = amount + 1;
    //   sendToast(`Set context amount: ${newAmount}`);
    //   return newAmount;
    // });
  }

  function contextMode() {
    // if ($audioModeStore === "context") return;
    // audioModeStore.set("context");
    // sendToast("Enabled audio mode: context");
  }

  function paragraphMode() {
    // if ($audioModeStore === "paragraph") return;
    // audioModeStore.set("paragraph");
    // sendToast("Enabled audio mode: paragraph");
  }

  function onwardMode() {
    // if ($audioModeStore === "onward") return;
    // audioModeStore.set("onward");
    // sendToast("Enabled audio mode: onward");
  }

  function toggleAutoPlay() {
    // TODO fix
    // autoPlayStore.update(autoPlay => {
    //   if (autoPlay) sendToast("Auto-play disabled")
    //   else sendToast("Auto-play enabled")
    //   return !autoPlay;
    // });
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
