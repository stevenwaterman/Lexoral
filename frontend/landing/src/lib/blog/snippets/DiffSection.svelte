<script lang="ts">
  import type { Change } from "diff";

  export let change: Change;
</script>

<style>
  .added {
    background-color: var(--green-3);
  }

  .removed {
    background-color: var(--red-3);
  }

  .same {
    background-color: var(--blue-3);
  }

  summary {
    text-align: center;
    padding-top: 1em;
    padding-bottom: 1em;
    font-style: italic;
  }
</style>

{#if change.added}
  <div class="added">{@html change.value}</div>
{:else if change.removed}
  <div class="removed">{@html change.value}</div>
{:else if change.count <= 4}
  <div class="same">{@html change.value}</div>
{:else}
  <div class="same"><details><summary>&lt;{change.count} identical lines&gt;</summary>{@html change.value}</details></div>
{/if}