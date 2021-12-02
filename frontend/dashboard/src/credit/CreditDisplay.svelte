<script lang="ts">
  import { creditStore, toCreditString } from "./credit";

  function startCheckout() {
    
  }
</script>

Credit: {toCreditString($creditStore)} <button on:click={startCheckout}>+</button>