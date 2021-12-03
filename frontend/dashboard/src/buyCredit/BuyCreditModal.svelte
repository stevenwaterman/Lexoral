<script lang="ts">
  import { getContext } from "svelte";
  import { addCredit } from "../api";
  import Loading from "../Loading.svelte";

  const { close } = getContext("simple-modal");

  let processing: boolean = false;
  let hours: number = 0;
  let minutes: number = 0;

  let subtotalMinutes: number;
  $: subtotalMinutes = Math.max(hours * 60 + minutes, 5);

  const stdPrice = 0.1;
  const bulkPrice = 0.08;

  const bulkQuantity = 60 * 10;

  let qualifiesForBulkPrice: boolean;
  $: qualifiesForBulkPrice = subtotalMinutes >= bulkQuantity;

  let price: number;
  $: price = qualifiesForBulkPrice ? bulkPrice : stdPrice;

  let subtotal: number;
  $: subtotal = subtotalMinutes * price;

  let shouldBuyBulk: boolean;
  $: shouldBuyBulk = !qualifiesForBulkPrice && subtotal >= bulkPrice * bulkQuantity;

  let totalPrice: number;
  $: totalPrice = shouldBuyBulk ? bulkPrice * bulkQuantity : subtotal;

  let totalMinutes: number;
  $: totalMinutes = shouldBuyBulk ? bulkQuantity : subtotalMinutes;

  async function submit() {
    if (processing) return;

    processing = true;
    await addCredit(totalMinutes);
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .formSection {
    margin-block-end: 0.5em;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  label {
    margin-right: 1em;
  }

  h1 {
    margin: 0;
    margin-bottom: 1em;
    font-size: larger;
  }

  p {
    align-self: center;
  }

  button {
    align-self: center;
  }

  .loadingContainer {
    align-self: center;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }

  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .grid { 
    display: grid;
    width: 100;

    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 3em;
  }

  .pricing {
    text-align: center;
  }

  input {
    width: 4em;
  }
</style>


<div class="container">
  <h1>Buy Credit</h1>

  <div class="grid">
    <div class="col">
      <div class="row">
        <div class="formSection">
          <label for="hours">Hours:</label>
          <input id="hours" type="number" min={0} disabled={processing} bind:value={hours}>
        </div>
      
        <div class="formSection">
          <label for="minutes">Minutes:</label>
          <input id="minutes" type="number" min={0} max={59} disabled={processing} bind:value={minutes}>
        </div>
      </div>
    
      <p>Buying {totalMinutes} mins of credit for £{totalPrice.toFixed(2)}</p>
    
      {#if processing}
        <div class="loadingContainer">
          <Loading text="Loading secure checkout..."/>
        </div>
      {:else}
        <button on:click={submit}>Check out</button>
      {/if}
    </div>

    <div class="pricing">
      <p>Std Price: £0.10 per minute</p>
      <p>Bulk Price: £0.08 per minute<br>(orders over 10 hours)</p>
      <p>Bulk price automatically applied</p>
      <p>Min order: 5 mins</p>
    </div>
  </div>
</div>