<script>
  import Arrow from "./Arrow.svelte";
  import Processor from "./Processor.svelte";
  import Cloud from "./Cloud.svelte";
  import WaveformDocument from "./WaveformDocument.svelte";
</script>
<style>
  svg {
    width: 100%;
  }

  svg :global(*) {
    animation-fill-mode: none;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-duration: 15s;
  }
</style>

<svg viewBox="0 0 900 200">
  <WaveformDocument/>
  <Arrow/>
  <Cloud/>
  <Processor/>
</svg>