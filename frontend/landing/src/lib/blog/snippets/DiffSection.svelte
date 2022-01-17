<script lang="ts">
  import type { Change } from "diff";

  export let change: Change;

  let type: "added" | "removed" | "hidden" | "same";
  $: if (change.added) type = "added";
     else if (change.removed) type = "removed";
     else if (change.count > 5) type = "hidden";
     else type = "same";
</script>

<style>
  .added {
    /* background-color: #E6FFEC; */
    background-color: var(--green-6);
  }

  .removed {
    /* background-color: #FFEBE9; */
    background-color: var(--red-6);
  }

  .hidden {
    /* background-color: #DDF4FF; */
    background-color: var(--blue-6);
  }

  summary {
    text-align: center;
    padding-top: 1em;
    padding-bottom: 1em;
    font-style: italic;
  }
</style>

<div class={type}>
  {#if type === "hidden"}
    <details><summary>&lt;{change.count} identical lines&gt;</summary>{@html change.value}</details>
  {:else}
    {@html change.value}
  {/if}
</div>
