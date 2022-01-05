<script lang="ts">
  import PlayPause from "./buttons/PlayPause.svelte";
  import Jump from "./buttons/Jump.svelte";
  import Volume from "./buttons/Volume.svelte";
  import Time from "./buttons/Time.svelte";
import Timeline from "./Timeline.svelte";
</script>

<style>
  .container {
    padding: 1em;
  }

  .controls {
    display: grid;
    grid-template-columns: auto auto auto 1fr auto;
    gap: 1em;

    width: 100%;

    justify-items: flex-start;
    align-items: center;
  }
</style>

<div class="container">
  <Timeline/>
  <div class="controls">
    <PlayPause/>
    <Jump/>
    <Volume/>

    <Time/>

    <div class="settings">
      Settings
    </div>
  </div>
</div>