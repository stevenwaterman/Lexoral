<script lang="ts">
  import { faCog, faDownload, faHome, faRedo, faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa/src/fa.svelte";
  import { playingStore } from "../audio/audioStatus";
  import { isDemo } from "../demo";

  function save() {

  }

  function undo() {

  }

  function redo() {

  }

  function settings() {
    
  }
</script>

<style>
  .header {
    height: 60px;

    display: grid;
    grid-template-columns: 1fr auto 1fr;

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

  .logo {
    height: 100%;
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

    <button on:click={save}>
      <Fa icon={faSave}/>
    </button>

    <button on:click={undo}>
      <Fa icon={faUndo}/>
    </button>

    <button on:click={redo}>
      <Fa icon={faRedo}/>
    </button>
  </div>

  <a class="logo" href={isDemo() ? "/" : "/dashboard"}>
    <img src="/assets/smallBrand.svg" alt="logo"/>
  </a>

  <div class="buttons right">
    <button on:click={settings}>
      <Fa icon={faCog}/>
    </button>
  </div>
</div>