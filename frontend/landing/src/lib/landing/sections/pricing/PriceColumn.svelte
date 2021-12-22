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

  @media (max-width: 1199px) {
    .priceCol {
      margin-top: -2em;
      margin-bottom: -2em;
      align-self: center;
      font-size: 0.9em;
    }
  }

  @media (max-width: 799px) {
    .priceCol {
      grid-row: 1;
      margin-top:1em;
    }
  }
</style>

<div class="priceCol">
  <PriceElement type="Standard (5+ mins)" hourPrice={6}/>
  <PriceElement type="Bulk (10+ hours)" hourPrice={4.8}/>
</div>
