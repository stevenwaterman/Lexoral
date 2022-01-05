<script lang="ts">
  import { audioDurationStore, currentTimeStore } from "./audioStatus";
  
  let progress: number;
  $: progress = $currentTimeStore / $audioDurationStore
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
  }
</style>

<div class="timeline">
  <div class="progress" style={`width: ${100 * progress}%`}/>
</div>