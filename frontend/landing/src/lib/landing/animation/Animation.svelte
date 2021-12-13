<script>
import Cloud from "./components/Cloud.svelte";
import TranscriptDocument from "./components/TranscriptDocument.svelte";
import VideoDocument from "./components/VideoDocument.svelte";
import Arrow from "./components/Arrow.svelte";
import Wave from "./components/Wave.svelte";
import Processor from "./components/Processor.svelte";
</script>
<style>
  svg {
    width: 100%;
    background-color: var(--blue-0);
  }

  svg :global(*) {
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-duration: 15s;
  }
</style>

<svg viewBox="0 0 900 100">
  <Wave/>
  <TranscriptDocument/>
  <VideoDocument/>
  <Cloud/>
  <Arrow/>
  <Processor/>
</svg>