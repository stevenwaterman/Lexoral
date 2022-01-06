<script lang="ts">
import { selectSectionStart } from "../input/select";

  import { audioDurationStore, currentTimeStore, getSectionIdxForTime } from "./audioStatus";
  
  let progress: number;
  $: progress = $currentTimeStore / $audioDurationStore;

  async function mousedown(event: MouseEvent & {currentTarget: HTMLDivElement}) {
    const clickX = event.offsetX;
    const timelineWidth = event.currentTarget.offsetWidth;
    const clickFraction = clickX / timelineWidth;

    const clickTime = clickFraction * $audioDurationStore;
    const sectionIdx = getSectionIdxForTime(clickTime);
    if (sectionIdx !== null) await selectSectionStart(sectionIdx);
  }

  async function mousemove(event: MouseEvent & {currentTarget: HTMLDivElement}) {
    if (event.buttons === 1) return mousedown(event);
  }
</script>

<style>
  .timeline {
    height: 0.5em;
    width: 100%;
    background-color: var(--blue-0);
    margin-bottom: 0.5em;
    border-radius: 0.25em;
  }

  .progress {
    height: 100%;
    background-color: var(--yellow-1);
    border-radius: 0.25em;
    width: 0;
  }
</style>

<div class="timeline" on:mousedown={mousedown} on:mousemove={mousemove}>
  <div class="progress" style={`width: ${100 * progress}%`}/>
</div>