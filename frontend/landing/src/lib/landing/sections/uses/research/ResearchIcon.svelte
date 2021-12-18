<script>
  import MagnifierIcon from "./MagnifierIcon.svelte";
  import UserIcon from "./UserIcon.svelte";
</script>

<style>
  svg {
    height: 10em;
  }
</style>

<svg viewBox="-20 -13 40 26">
  <g transform="translate(-11 1)"><UserIcon/></g>
  <g transform="translate(11 1)"><UserIcon/></g>
  <g transform="translate(0 -1)"><UserIcon/></g>
  <g transform="scale(1.05) rotate(-40) translate(3 4)"><MagnifierIcon/></g>
</svg>
