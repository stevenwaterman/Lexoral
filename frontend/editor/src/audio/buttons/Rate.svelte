<script lang="ts">
  import { audioStore } from "../../state/settings/audioStore";

  $: rateStore = audioStore.getField("rate");
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: auto auto;
    height: 100%;

    justify-items: center;
    align-items: center;

    gap: 0.5em;
  }

  select {
    background-color: var(--grey-5);
    padding-right: 0.25em;
  }
</style>

<div class="container">
  <label for="rate">Playback Speed:</label>
  <select name="rate" id="rate" bind:value={$rateStore}>
    <option value={25}>0.25x</option>
    <option value={50}>0.5x</option>
    <option value={75}>0.75x</option>
    <option value={100}>Normal</option>
    <option value={125}>1.25x</option>
    <option value={150}>1.5x</option>
    <option value={175}>1.75x</option>
    <option value={200}>2x</option>
  </select>
</div>