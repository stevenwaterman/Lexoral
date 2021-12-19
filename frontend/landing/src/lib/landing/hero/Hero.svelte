<script lang="ts">
  import Demo from "./Demo.svelte";
  import Title from "./Title.svelte";
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 4em;
    margin: auto;

    justify-content: center;
    align-items: flex-end;

    padding-top: 4em;
    padding-bottom: 8em;
  }

  @media (max-width: 1599px) {
    .grid {
      gap: 1em;
    }
  }
</style>

<div class="grid">
  <Title/>
  <Demo/>
</div>