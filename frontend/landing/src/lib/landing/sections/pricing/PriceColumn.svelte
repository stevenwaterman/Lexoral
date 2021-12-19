<script lang="ts">
  import PriceElement from "./PriceElement.svelte";
</script>

<style>
  .priceCol {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 2em;
    color: var(--blue-1);
    height: fit-content;
  }
</style>

<div class="priceCol">
  <PriceElement type="Standard (5+ mins)" hourPrice={6}/>
  <PriceElement type="Bulk (10+ hours)" hourPrice={4.8}/>
</div>