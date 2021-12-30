<script lang="ts">
  import Demo from "./Demo.svelte";
  import Title from "./Title.svelte";
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 30em 1fr;
    grid-template-rows: 1fr auto;
    grid-auto-flow: column;
    font-size: 1.35em;

    gap: 1em 4em;
    width: 100%;

    justify-content: center;
    align-items: flex-end;

    padding-bottom: 8em;
  }

  @media (max-width: 1599px) {
    .grid {
      column-gap: 2em;
      grid-template-columns: 24.5em 1fr;
      padding-top: 2em;
      padding-bottom: 6em;
    }
  }

  @media (max-width: 1199px) {
    .grid {
      font-size: 1.1em;
      grid-template-columns: 22.5em 1fr;
      grid-template-rows: 1fr 1fr;
      padding-bottom: 4em;
    }
  }

  @media (max-width: 799px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
    }
  }
</style>

<div class="grid">
  <Title/>
  <Demo/>
</div>