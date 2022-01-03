<script lang="ts">
  export let defaultPadding: boolean = true;
</script>

<style>
  .textContainer {
    background-color: var(--grey-5);
    border-radius: 2em;

    box-shadow: 0 0 0.5em 0 var(--blue-3);

    max-width: 60em;
    overflow: hidden;
    font-size: 14pt;
  }

  .defaultPadding {
    padding: 3em 4em;
    margin-top: -2em;
    margin-bottom: 4em;
  }
</style>

<div class="textContainer" class:defaultPadding>
  <slot/>
</div>
