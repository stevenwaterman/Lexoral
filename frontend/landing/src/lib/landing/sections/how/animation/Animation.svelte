<script>
import Cloud from "./components/Cloud.svelte";
import TranscriptDocument from "./components/TranscriptDocument.svelte";
import VideoDocument from "./components/VideoDocument.svelte";
import Arrow from "./components/Arrow.svelte";
import Wave from "./components/Wave.svelte";
import Processor from "./components/Processor.svelte";
</script>
<style>
  svg :global(*) {
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-duration: 15s;
    animation-delay: 5s;
  }

  g {
    animation-name: g;
  }

  @keyframes g {
    1%, 99% {
      opacity: 1;
    }

    0%, 100% {
      opacity: 0;
    }
  }
</style>

<svg viewBox="0 0 900 100">
  <g>
    <Wave/>
    <TranscriptDocument/>
    <VideoDocument/>
    <Cloud/>
    <Arrow/>
    <Processor/>
  </g>
</svg>