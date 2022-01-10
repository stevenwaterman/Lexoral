<script lang="ts">
  import { faCog, faHome, faRedo, faDownload, faUndo } from "@fortawesome/free-solid-svg-icons";
  import { getContext } from "svelte";
  import Fa from "svelte-fa/src/fa.svelte";
  import { playingStore } from "../audio/audioStatus";
  import { isDemo } from "../demo";
  import { exportTranscript } from "../state/export";
  import { patchInterface } from "../state/patch/patchInterface";
  import OptionsModal from "../options/OptionsModal.svelte";

  function save() {
    exportTranscript("srt");
  }

  function undo() {
    patchInterface.undo();
  }

  function redo() {
    patchInterface.redo();
  }

  const { open } = getContext("simple-modal");

  function settings() {
    open(OptionsModal, {}, {
      closeButton: true
    });
  }
</script>

<style>
  .header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 60px;

    border-bottom: 1px solid var(--form-border);
    transition: background 0.5s;

    /* background-color: var(--grey-3); */
    z-index: 2;

    padding-left: 1em;
    padding-right: 1em;
  }

  .playing {
    background-color: var(--yellow-3);
  }

  img {
    width: auto;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }

  .buttons {
    display: grid;
    grid-auto-flow: column;
    gap: 0.5em;
    align-items: center;
  }

  .left {
    justify-items: flex-start;
    margin-right: auto;
  }

  .right {
    justify-items: flex-end;
    margin-left: auto;
  }
</style>

<div class="header" class:playing={$playingStore}>
  <div class="buttons left">
    <a href="/dashboard">
      <button>
        <Fa icon={faHome}/>
      </button>
    </a>

    <button on:click={undo}>
      <Fa icon={faUndo}/>
    </button>

    <button on:click={redo}>
      <Fa icon={faRedo}/>
    </button>
  </div>

  <a href={isDemo() ? "/" : "/dashboard"}>
    <img src="/assets/smallBrand.svg" alt="logo"/>
  </a>

  <div class="buttons right">
    <button on:click={save}>
      <Fa icon={faDownload}/>
    </button>

    <button on:click={settings}>
      <Fa icon={faCog}/>
    </button>
  </div>
</div>