<script lang="ts">
  import { playAudio, stopAudio } from "../audio/audioPlayer";
  import { lastPlayingSectionIdxStore, playingStore } from "../audio/audioStatus";
  import { findSectionNode, selectEnd } from "../input/select";
  import { commaSilenceStore, paragraphSilenceStore, patchInterface, periodSilenceStore } from "../state/patch/patchInterface";
  import { exportTranscript } from "../state/export";
  import { displayStore } from "../state/settings/displayStore";
  import { audioStore } from "../state/settings/audioStore";

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

  $: fontSizeStore = displayStore.getField("fontSize");
  $: pageWidthStore = displayStore.getField("pageWidth");

  $: volumeStore = audioStore.getField("volume");
  $: rateStore = audioStore.getField("rate");
  $: audioStyleStore = audioStore.getField("mode");
  $: autoPlayStore = audioStore.getField("autoPlay");
  $: loopStore = audioStore.getField("loop");
</script>

<style>
  .container {
    box-sizing: border-box;

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

  input[type="number"] {
    font-size: inherit;
    height: 100%;
    text-align: center;
    margin-left: 1em;
  }
</style>

<div class="container">
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

    <label for="fontSize">Font Size</label>
    <input id="fontSize" type="number" min={8} step={1} bind:value={$fontSizeStore}/>
    <span>pt</span>

    <label for="pageWidth">Page Width</label>
    <input id="pageWidth" type="number" min={1} step={1} bind:value={$pageWidthStore}/>
    <span>em</span>
</div>