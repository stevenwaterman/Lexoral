<script lang="ts">
  export let type: string;
  export let hourPrice: number;

  let minPrice: number;
  $: minPrice = hourPrice * 100 / 60;
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr 1fr;
    color: var(--blue-1);
  }

  .type {
    grid-column: span 2;
    color: var(--yellow-1);
    font-weight: 600;

    margin: 0;
    margin-bottom: 0.3em;
  }

  .perHour {
    grid-row: span 2;
    font-weight: 900;
    font-size: 4em;
    margin-top: -0.3em;
    margin-bottom: -0.3em;
    margin-right: 0.3em;
  }

  

  .clarification {
    text-align: center;
    align-self: flex-end;
    justify-self: center;
  }

  .perMin {
    text-align: center;
    align-self: flex-start;
    justify-self: center;
  }

  @media (max-width: 1199px) {
    .grid {
      grid-template-columns: auto;
      grid-template-rows: repeat(4, auto);
      justify-items: center;
      align-items: center;
    }

    .type {
      grid-column: unset;
    }

    .perHour {
      grid-row: unset;
      margin: 0;
      margin-top: -0.1em;
      margin-bottom: -0.1em;
    }
  }
</style>

<div class="grid">
  <h3 class="type">{type}</h3>
  <span class="perHour">£{hourPrice.toFixed(2)}</span>
  <span class="clarification">per hour uploaded</span>
  <span class="perMin">({minPrice.toFixed(0)}p / min)</span>
</div>