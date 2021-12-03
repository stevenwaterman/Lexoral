<script lang="ts">
  import BuyCreditButton from "../buyCredit/BuyCreditButton.svelte";
  import { creditStore, toCreditString } from "./credit";
</script>

<span>
  Credit: {toCreditString($creditStore)} <BuyCreditButton/>
</span>
