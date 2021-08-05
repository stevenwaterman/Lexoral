<script lang="ts">
import { audioLengthStore, currentTime, currentTimePercent } from "./state";



</script>

<style>
  .bar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .fg {
    background-color: red;
    z-index: 1;
  }

  .bg {
    background-color: gray;
    width: 100%;
  }

  .controlContainer {
    position: fixed;
    bottom: 20px;
    left: 4px;
    right: 4px;
  }

  .barContainer {
    position: fixed;
    bottom: 4px;
    left: 4px;
    right: 4px;
    height: 10px;
  }
  
  .timings {
    text-align: center;
  }
</style>

<div class="controlContainer">
  <p class="timings">
    {$currentTime.toFixed(2)} / {$audioLengthStore?.toFixed(2)}
  </p>
</div>

<div class="barContainer">
  <div class="bar fg" style={`width: ${$currentTimePercent}%`}/>
  <div class="bar bg"/>
</div>