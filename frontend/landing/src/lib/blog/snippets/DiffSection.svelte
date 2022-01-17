<script lang="ts">
  import type { Change } from "diff";
  import DiffIdentical from "./DiffIdentical.svelte";

  export let change: Change;
  export let first: boolean;
  export let last: boolean;

  let type: "added" | "removed" | "hidden" | "same";
  $: if (change.added) type = "added";
     else if (change.removed) type = "removed";
     else if (change.count >= 12) type = "hidden";
     else type = "same";
</script>

<style>
  div {
    padding-left: 3em;
    padding-right: 3em;
  }

  :global(.diffCheckbox:checked + * .added) {
    background-color: var(--green-6);
  }

  .removed {
    display: none;
  }

  :global(.diffCheckbox:checked + * .removed) {
    display: revert;
    background-color: var(--red-6);
  }
</style>

{#if type === "hidden"}
  <DiffIdentical {change} {first} {last}/>
{:else}
  <div class={type}>
    {@html change.value}
  </div>
{/if}
