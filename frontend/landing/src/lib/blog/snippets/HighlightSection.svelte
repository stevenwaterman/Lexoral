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
  div {
    display: inline;
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

  .removed {
    display: none;
    background-color: var(--red-6);
  }

  details {
    display: none;
    grid-column: span 3;
  }

  summary {
    text-align: center;
    font-weight: 900;
    font-style: italic;
    user-select: none;
    cursor: pointer;
    background-color: var(--blue-6);
    grid-column: span 3;

    /* Keep the summary text visible when scrolling left-right */
    max-width: calc(100vw - 0.4em - 1px);
    position: sticky;
    left: 0;
  }

  details[open] {
    display: contents;
  }

  details[open] summary {
    display: none;
  }


  :global(.diffCheckbox:checked + * .added) {
    background-color: var(--green-6);
  }

  :global(.diffCheckbox:checked + * .removed) {
    display: revert;
  }

  :global(.diffCheckbox:checked + * .fromLine) {
    display: revert;
  }

  :global(.diffCheckbox:checked + * .fromLine) {
    display: revert;
  }

  :global(.diffCheckbox:checked + code > .hidden) {
    display: none;
  }

  :global(.diffCheckbox:checked + * details) {
    display: revert;
  }
</style>

{#if type === "hidden"}
  <details>
    <summary>&lt;Show {change.count} identical lines&gt;</summary>
    {#each change.lines as line, idx}
        <div class={`fromLine ${type}`} aria-hidden="true">{change.fromStartLine === undefined ? " " : change.fromStartLine + idx}</div>
        <div class={`toLine ${type}`} aria-hidden="true">{change.toStartLine === undefined ? " " : change.toStartLine + idx}</div>
        <div class={`code ${type}`}>{@html line || " "}</div>
    {/each}
  </details>
{/if}

{#each change.lines as line, idx}
  <div class={`fromLine ${type}`} aria-hidden="true">{change.fromStartLine === undefined ? " " : change.fromStartLine + idx}</div>
  <div class={`toLine ${type}`} aria-hidden="true">{change.toStartLine === undefined ? " " : change.toStartLine + idx}</div>
  <div class={`code ${type}`}>{@html line || " "}</div>
{/each}
