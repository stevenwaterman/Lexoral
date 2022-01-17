<script lang="ts">
  import type { Change } from "diff";

  const showLines: number = 3;

  export let change: Change;
  export let first: boolean;
  export let last: boolean;

  let showLinesStart: number;
  $: showLinesStart = first ? 0 : showLines;

  let showLinesEnd: number;
  $: showLinesEnd = last ? 0 : showLines;

  let hiddenLines: number;
  $: hiddenLines = change.count - showLinesStart - showLinesEnd;

  let lines: string[];
  $: lines = change.value.split("\n");

  let pre: string;
  $: pre = lines.slice(0, showLinesStart).join("\n");

  let mid: string;
  $: mid = lines.slice(showLinesStart, lines.length - showLinesEnd - 1).join("\n");

  let post: string;
  $: post = lines.slice(lines.length - showLinesEnd - 1, lines.length).join("\n");
</script>

<style>
  div {
    padding-left: 3em;
    padding-right: 3em;
  }

  :global(.diffCheckbox:checked + * .hidden) {
    background-color: var(--blue-6);
  }

  summary {
    text-align: center;
    font-weight: 900;
    font-style: italic;
    user-select: none;
    display: none;
    cursor: pointer;
  }

  :global(.diffCheckbox:checked + * summary) {
    display: revert;
  }

  details {
    display: contents;
    background-color: var(--blue-6);
  }

  :global(.diffCheckbox:checked + * details) {
    display: revert;
  }
</style>

{#if showLinesStart > 0}
  <div class="same">{@html pre}</div>
{/if}

<div class="hidden">
  <details><summary>&lt;{hiddenLines} identical lines&gt;</summary>{@html mid}</details>
</div>

{#if showLinesEnd > 0}
  <div class="same">{@html post}</div>
{/if}
