<script lang="ts">
  import hljs from "highlight.js/lib/core";
  import typescript from "highlight.js/lib/languages/typescript";
  import prettier from "prettier";
  import { Change, diffLines } from "diff";
  import type { SnippetConfig } from "../blogData";
  import { github } from "svelte-highlight/src/styles";
  import DiffSection from "./DiffSection.svelte";

  export let from: SnippetConfig;
  export let to: SnippetConfig;

  hljs.registerLanguage("typescript", typescript);

  let parser: string;
  $: parser = {
    svelte: "svelte",
    ts: "typescript"
  }[to.language];

  let fromSnippet: string;
  $: fromSnippet = prettier.format(from.snippet, { parser });

  let fromHighlighted: string;
  $: fromHighlighted = hljs.highlight("typescript", fromSnippet).value;

  let toSnippet: string;
  $: toSnippet = prettier.format(to.snippet, { parser });

  let toHighlighted: string;
  $: toHighlighted = hljs.highlight("typescript", toSnippet).value;

  let changes: Change[];
  $: changes = diffLines(fromHighlighted, toHighlighted);

  $: console.log(changes);
</script>

<svelte:head>
  {@html github}
</svelte:head>

<style>
  code {
    font-size: 0.75em;
  }
</style>

<pre>
  <code>
    {#each changes as change}
      <DiffSection {change}/>
    {/each}
  </code>
</pre>

