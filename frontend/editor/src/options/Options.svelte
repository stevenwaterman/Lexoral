<script lang="ts">
  import { periodTimeStore, commaTimeStore, paragraphTimeStore } from "../state/section/defaultPunctuationStore";
  import { autoPlayStore, loopStore, playAudio, rateStore, stopAudio, volumeStore } from "../audio/audioPlayer";
  import { audioStyleStore } from "../audio/audioTimings";
  import { lastPlayingSectionIdxStore, playingStore } from "../audio/audioStatus";
  import { findSectionNode, selectEnd } from "../input/select";
import { patchInterface } from "../state/patch/patchInterface";
import { exportTranscript, exportTranscriptPlainText } from "../state/export";

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
</style>

<div class="container">
  <h2>Options</h2>

  <div class="grid">
    <label for="commaSlider">Comma</label>
    <span>{$commaTimeStore}s</span>
    <input id="commaSlider" type="range" min={0.01} max={$periodTimeStore - 0.01} step={0.01} bind:value={$commaTimeStore}/>

    <label for="periodSlider">Period</label>
    <span>{$periodTimeStore}s</span>
    <input id="periodSlider" type="range" min={$commaTimeStore + 0.01} max={$paragraphTimeStore - 0.01} step={0.01} bind:value={$periodTimeStore}/> 

    <label for="paragraphSlider">Paragraph</label>
    <span>{$paragraphTimeStore}s</span>
    <input id="paragraphSlider" type="range" min={$periodTimeStore + 0.01} max={2} step={0.01} bind:value={$paragraphTimeStore}/>

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
  </div>
</div>