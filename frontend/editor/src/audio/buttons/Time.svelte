<script lang="ts">
  import { currentTimeStore, audioDurationStore } from "../../audio/audioStatus";

  let showHours: boolean;
  $: showHours = $audioDurationStore >= 3600;

  function toTimeString(seconds: number, showHours: boolean): string {    
    if (showHours) {
      const hours = (seconds / 3600).toFixed(0);
      const mins = ((seconds % 3600) / 60).toFixed(0).padStart(2, "0");
      const secs = (seconds % 60).toFixed(0).padStart(2, "0");
      return `${hours}:${mins}:${secs}`
      
    } else {
      const mins = ((seconds % 3600) / 60).toFixed(0);
      const secs = (seconds % 60).toFixed(0).padStart(2, "0");
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