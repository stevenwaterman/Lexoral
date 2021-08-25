<script lang="ts">
  import { autoPlayStore, lastPlayedSectionStore, loopStore, playAudio, playingStore, stopAudio } from "../audio";
  import { mutationStore } from "../audioStores";
  import { selectEnd } from "../selectionStores";

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
    mutationStore.set({
      start: {
        sectionOffset: 0,
        constrainWithinParagraph: false,
        addGap: false,
        timeOffset: 0
      },
      end: {
        sectionOffset: 0,
        constrainWithinParagraph: false,
        addGap: false,
        timeOffset: 0
      }
    })
  }

  function contextMode() {
    mutationStore.set({
      start: {
        sectionOffset: 3,
        constrainWithinParagraph: true,
        addGap: true,
        timeOffset: 0
      },
      end: {
        sectionOffset: 3,
        constrainWithinParagraph: true,
        addGap: true,
        timeOffset: 0
      }
    })
  }

  function paragraphMode() {
    mutationStore.set({
      start: {
        sectionOffset: Number.MAX_SAFE_INTEGER,
        constrainWithinParagraph: true,
        addGap: true,
        timeOffset: 0
      },
      end: {
        sectionOffset: Number.MAX_SAFE_INTEGER,
        constrainWithinParagraph: true,
        addGap: true,
        timeOffset: 0
      }
    })
  }

  function onwardMode() {
    mutationStore.set({
      start: {
        sectionOffset: 0,
        constrainWithinParagraph: false,
        addGap: false,
        timeOffset: 0
      },
      end: {
        sectionOffset: Number.MAX_SAFE_INTEGER,
        constrainWithinParagraph: false,
        addGap: true,
        timeOffset: 0
      }
    })
  }

  function toggleAutoPlay() {
    autoPlayStore.update(autoPlay => !autoPlay);
  }

  function toggleLoop() {
    console.log("loop")
    loopStore.update(loop => !loop);
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
    margin-bottom: 20px;
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

<div class="container">
  <img class="logo" src="/assets/smallBrand.png" alt="logo"/>

  <div class="wrapper">
    <Dropdown/>
    <EditableContainer>
      <Document />
    </EditableContainer>
  </div>
</div>
