<script>
  import CameraIcon from "./CameraIcon.svelte";
  import GlobeIcon from "./GlobeIcon.svelte";
</script>

<style>
  svg {
    height: 10em;
  }
</style>

<svg viewBox="-22 -13 44 26">
  <g transform="scale(1.15) translate(8 -0.5)"><GlobeIcon/></g>
  <g transform="translate(-15 8) rotate(-20)"><CameraIcon/></g>
</svg>
