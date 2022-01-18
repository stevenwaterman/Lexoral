<script lang="ts">
  import type { LineChange } from "./change";

  export let change: LineChange;

  let type: "added" | "removed" | "hidden" | "same";
  $: if (change.added) type = "added";
     else if (change.removed) type = "removed";
     else if (change.hidden) type = "hidden";
     else type = "same";
</script>

<style>
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

  summary {
    text-align: center;
    font-weight: 900;
    font-style: italic;
    user-select: none;
    display: none;
    cursor: pointer;
    background-color: var(--blue-6);
  }

  :global(.diffCheckbox:checked + * summary) {
    display: revert;
  }

  details {
    display: contents;
    grid-column: span 3;
  }

  details[open] summary {
    display: none;
  }

  :global(.diffCheckbox:checked + * details) {
    display: revert;
  }

  :global(.diffCheckbox:checked + * details[open]) {
    display: contents;
  }

  .fromLine,
  .toLine {
    font-weight: 700;
    color: var(--grey-2);
    text-align: right;
    user-select: none;
  }

  .fromLine {
    display: none;
    grid-column: 1;
    padding-left: 0.5em;
    padding-right: 0.25em;
  }

  :global(.diffCheckbox:checked + * .fromLine) {
    display: revert;
  }

  .toLine {
    grid-column: 2;
    border-right: 0.1em solid var(--border);
    padding-right: 0.5em;
    padding-left: 0.5em;
  }

  .code {
    white-space: pre;
    grid-column: 3;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
</style>

{#if type === "hidden"}
  <details>
    <summary>&lt;Show {change.count} identical lines&gt;</summary>
      {#each change.lines as line, idx}
          <div class={`fromLine ${type}`}>{change.fromStartLine === undefined ? " " : change.fromStartLine + idx}</div>
          <div class={`toLine ${type}`}>{change.toStartLine === undefined ? " " : change.toStartLine + idx}</div>
          <div class={`code ${type}`}>{@html line || " "}</div>
      {/each}
  </details>
{:else}
  {#each change.lines as line, idx}
    <div class={`fromLine ${type}`}>{change.fromStartLine === undefined ? " " : change.fromStartLine + idx}</div>
    <div class={`toLine ${type}`}>{change.toStartLine === undefined ? " " : change.toStartLine + idx}</div>
    <div class={`code ${type}`}>{@html line || " "}</div>
  {/each}
{/if}


