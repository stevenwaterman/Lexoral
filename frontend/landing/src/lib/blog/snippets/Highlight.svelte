<script lang="ts">
  import { Change, diffLines } from "diff";
  import type { LineChange } from "./change";
  import HighlightSection from "./HighlightSection.svelte";

  export let from: string | undefined;
  export let to: string;

  let changes: Change[];
  $: changes = diffLines(from ?? to, to);

  function toLineChange(changes: Change[]): LineChange[] {
    let fromStartLine: number = 1;
    let toStartLine: number = 1;

    const output: LineChange[] = [];
    for (let i = 0; i < changes.length; i++) {
      const change = changes[i];
      const lines = change.value.split("\n");
      if (lines[lines.length - 1] === "") lines.pop();

      if (change.added) {
        output.push({ ...change, lines, toStartLine });
        toStartLine += change.count;
      }
      else if (change.removed) {
        output.push({ ...change, lines, fromStartLine });
        fromStartLine += change.count;
      }
      else {
        const first = i === 0;
        const last = i === changes.length - 1;

        const startLineCount = first ? 0 : 3;
        const endLineCount = last ? 0 : 3;
        const midLineCount = lines.length - startLineCount - endLineCount;

        if (midLineCount >= 6) {
          const startLines = lines.slice(0, startLineCount);
          const midLines = lines.slice(startLineCount, lines.length - endLineCount);
          const endLines = lines.slice(lines.length - endLineCount, lines.length);

          if (startLineCount > 0) {
            output.push({ ...change, count: startLines.length, lines: startLines, fromStartLine, toStartLine });
            fromStartLine += startLineCount;
            toStartLine += startLineCount;
          }

          if (midLineCount > 0) {
            output.push({ ...change, count: midLines.length, lines: midLines, fromStartLine, toStartLine, hidden: true });
            fromStartLine += midLineCount;
            toStartLine += midLineCount;
          }

          if (endLineCount > 0) {
            output.push({ ...change, count: endLines.length, lines: endLines, fromStartLine, toStartLine });
            fromStartLine += endLineCount;
            toStartLine += endLineCount;
          }
        } else {
          output.push({ ...change, lines, fromStartLine, toStartLine });
          fromStartLine += change.count;
          toStartLine += change.count;
        }
      }
    }

    return output;
  }

  let lineChanges: LineChange[];
  $: lineChanges = toLineChange(changes);
</script>

<style>
  .visualCode {
    grid-column: span 3;

    display: grid;
    grid-template-columns: auto auto 1fr;

    padding-top: 0.5em;
    padding-bottom: 0.5em;

    font-size: 10pt;
    background-color: var(--grey-5);
    color: var(--blue-0);

    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
  }

  .sr-code {
    position: absolute !important; /* Outside the DOM flow */
    height: 1px; width: 1px; /* Nearly collapsed */
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE 7+ only support clip without commas */
    clip: rect(1px, 1px, 1px, 1px); /* All other browsers */
    opacity: 0;
  }

  code :global(.hljs-subst) {
    color: var(--grey-2);
  }

  code :global(.hljs-attr),
  code :global(.hljs-property) {
    color: var(--blue-1);
  }

  code :global(.hljs-attribute),
  code :global(.hljs-doctag),
  code :global(.hljs-keyword),
  code :global(.hljs-meta-keyword),
  code :global(.hljs-name),
  code :global(.hljs-selector-tag),
  code :global(.hljs-function) {
      color: var(--red-1);
  }

  code :global(.hljs-deletion),
  code :global(.hljs-number),
  code :global(.hljs-quote),
  code :global(.hljs-selector-class),
  code :global(.hljs-selector-id),
  code :global(.hljs-string),
  code :global(.hljs-template-tag),
  code :global(.hljs-type),
  code :global(.hljs-comment),
  code :global(.hljs-literal) {
    color: var(--green-1);
  }

  code :global(.hljs-section),
  code :global(.hljs-title.class_),
  code :global(.hljs-built_in),
  code :global(.hljs-addition),
  code :global(.hljs-bullet),
  code :global(.hljs-code) {
    color: var(--yellow-0);
  }

  code :global(.hljs-title.function_),
  code :global(.hljs-meta),
  code :global(.hljs-meta-string) {
    color: #8250df;
  }

  code :global(.hljs-emphasis) {
    font-style: italic
  }

  code :global(.hljs-strong) {
    font-weight: 700
  }
</style>

<code class="visualCode" aria-hidden="true">
  {#each lineChanges as change}
    <HighlightSection {change} />
  {/each}
</code>

<code class="sr-code">
  {@html to}
</code>
