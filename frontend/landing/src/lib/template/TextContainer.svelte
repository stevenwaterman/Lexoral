<script lang="ts">
  export let style: string = "";
</script>

<style>
  .textContainer {
    background-color: var(--grey-5);
    border-radius: 2em;

    box-shadow: 0 0 0.5em 0 var(--blue-3);

    width: fit-content;
    max-width: 60em;
    overflow: hidden;
    font-size: 14pt;
  }
</style>

<div class="textContainer" style={style}>
  <slot/>
</div>
