<script lang="ts">
  import { currentTimeStore, audioDurationStore } from "../../audio/audioStatus";

  let showHours: boolean;
  $: showHours = $audioDurationStore >= 3600;

  function toTimeString(seconds: number, showHours: boolean): string {    
    if (showHours) {
      const hours = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
      const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
      return `${hours}:${mins}:${secs}`
      
    } else {
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
      return `${mins}:${secs}`
    }
  }

  let current: string;
  $: current = toTimeString($currentTimeStore, showHours);

  let duration: string;
  $: duration = toTimeString($audioDurationStore, showHours);
</script>

<style>
  .time {
    margin: 0;
  }
</style>

<p class="time">{current} / {duration}</p>