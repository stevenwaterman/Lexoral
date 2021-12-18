<script lang="ts">
  import Demo from "./Demo.svelte";
  import Title from "./Title.svelte";
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    margin: auto;

    padding-top: 4em;
    padding-bottom: 8em;
  }
</style>

<div class="grid">
  <Title/>
  <Demo/>
</div>