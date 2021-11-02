<script lang="ts">
  import { autoPlayStore, loopStore, playAudio, rateStore, stopAudio, volumeStore } from "../audio/audioPlayer";
  import { audioStyleStore } from "../audio/audioTimings";
  import { lastPlayingSectionIdxStore, playingStore } from "../audio/audioStatus";
  import { findSectionNode, selectEnd } from "../input/select";
  import { commaSilenceStore, paragraphSilenceStore, patchInterface, periodSilenceStore } from "../state/patch/patchInterface";
  import { exportTranscript } from "../state/export";
  import { fontSizeStore, pageWidthStore } from "../state/displayStore";

  async function jumpTo() {
    const idx = $lastPlayingSectionIdxStore;
    if (idx !== null) {
      const component = findSectionNode(idx);
      if (component) {
        await selectEnd(component);
        stopAudio();
      }
    }
  }

  function commaChange() {
    if ($commaSilenceStore >= $periodSilenceStore) {
      periodSilenceStore.set($commaSilenceStore + 1);
    }
    if ($periodSilenceStore >= $paragraphSilenceStore) {
      periodSilenceStore.set($periodSilenceStore + 1);
    }
  }

  function periodChange() {
    if ($commaSilenceStore >= $periodSilenceStore) {
      commaSilenceStore.set($periodSilenceStore - 1);
    }
    if ($periodSilenceStore >= $paragraphSilenceStore) {
      paragraphSilenceStore.set($periodSilenceStore + 1);
    }
  }

  function paragraphChange() {
    if ($periodSilenceStore >= $paragraphSilenceStore) {
      periodSilenceStore.set($paragraphSilenceStore - 1);
    }
    if ($commaSilenceStore >= $periodSilenceStore) {
      commaSilenceStore.set($periodSilenceStore - 1);
    }
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: center;

    padding-left: 0.5em;
    padding-right: 1em;
    box-sizing: border-box;

    height: 100%;
    width: 300px;

    border-left: 1px solid var(--form-border);
    background-color: var(--grey-3);

    z-index: 2;

    overflow-y: auto;
  }

  .grid {
    display: grid;
    grid-template-columns: auto 1fr 1fr;

    gap: 0.5em 0.2em;

    justify-items: center;
    align-items: center;
  }

  span {
    text-align: center;
  }

  input {
    min-width: 0;
    padding: 0;
    width: 100%;
  }

  .twoCol {
    grid-column: span 2;
  }

  .spacer {
    grid-column: span 3;
    height: 3em;
  }

  .buttonRow3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column: span 3;
    gap: 1em;

    align-items: center;
  }

  .buttonRow2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column: span 3;
    gap: 1em;

    align-items: center;
  }

  input[type="number"] {
    font-size: inherit;
    height: 100%;
    text-align: center;
    margin-left: 1em;
  }
</style>

<div class="container">
  <h2>Options</h2>

  <div class="grid">
    <label for="commaSpinner">Comma</label>
    <input id="commaSpinner" type="number" min={10} step={10} bind:value={$commaSilenceStore} on:change={commaChange}/>
    <span>ms</span>

    <label for="periodSpinner">Period</label>
    <input id="periodSpinner" type="number" min={20} step={10} bind:value={$periodSilenceStore} on:change={periodChange}/>
    <span>ms</span>

    <label for="paragraphSpinner">Paragraph</label>
    <input id="paragraphSpinner" type="number" min={30} step={10} bind:value={$paragraphSilenceStore} on:change={paragraphChange}/>
    <span>ms</span>

    <div class="spacer"></div>
    
    <label for="speedSlider" title="Alt+Right = Faster, Alt+Left = Slower">Speed</label>
    <span>{$rateStore}%</span>
    <input id="speedSlider" type="range" min={5} max={300} step={5} bind:value={$rateStore}/>

    <label for="volumeSlider" title="Alt+Up = Louder, Alt+Down = Quieter">Volume</label>
    <span>{$volumeStore}%</span>
    <input id="volumeSlider" type="range" min={5} max={100} step={5} bind:value={$volumeStore}/>

    <div class="spacer"></div>

    <label for="autoPlayCheckbox" title="Alt+A">AutoPlay</label>
    <input id="autoPlayCheckbox" class="twoCol" type="checkbox" bind:checked={$autoPlayStore}>

    <label for="loopCheckbox" title="Alt+L">Loop</label>
    <input id="loopCheckbox" class="twoCol" type="checkbox" bind:checked={$loopStore}>

    <label for="playMode" title="Alt+C = Context, Alt+O = Onward">Mode</label>
    <select class="twoCol" bind:value={$audioStyleStore}>
      <option value="context">Context</option>
      <option value="onward">Onward</option>
    </select>

    <div class="spacer"></div>

    <div class="buttonRow3">
      <button title="Alt" on:click={playAudio} disabled={$playingStore}>Play</button>
      <button title="Alt" on:click={stopAudio} disabled={!$playingStore}>Stop</button>
      <button title="Escape" on:click={jumpTo} disabled={!$playingStore}>Jump</button>
    </div>

    <div class="buttonRow2">
      <button title="Ctrl+Z" on:click={() => patchInterface.undo()}>Undo</button>
      <button title="Ctrl+Y" on:click={() => patchInterface.redo()}>Redo</button>
    </div>

    <div class="buttonRow2">
      <button title="Ctrl+E" on:click={() => exportTranscript("txt")}>Save .txt</button>
      <button on:click={() => exportTranscript("srt")}>Save .srt</button>
    </div>

    <label for="fontSize">Font Size</label>
    <input id="fontSize" type="number" min={8} step={1} bind:value={$fontSizeStore}/>
    <span>pt</span>

    <label for="pageWidth">Page Width</label>
    <input id="pageWidth" type="number" min={1} step={1} bind:value={$pageWidthStore}/>
    <span>em</span>
  </div>
</div>