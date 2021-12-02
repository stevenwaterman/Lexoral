<script lang="ts">
  import { addCredit } from "../api";
  import { creditStore, toCreditString } from "./credit";
</script>

<span>
  Credit: {toCreditString($creditStore)} <button on:click={() => addCredit(10)}>+</button>
</span>
