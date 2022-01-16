<script lang="ts">
  import prettier from "prettier";
  import type { SnippetConfig } from "../blogData";

  import Highlight, { HighlightSvelte } from "svelte-highlight";
  import { typescript } from "svelte-highlight/src/languages";
  import { github } from "svelte-highlight/src/styles";

  export let config: SnippetConfig;

  let parser: string;
  $: parser = {
    svelte: "svelte",
    ts: "typescript"
  }[config.language];

  let snippet: string;
  $: snippet = prettier.format(config.snippet, { parser });
</script>

<svelte:head>
  {@html github}
</svelte:head>

<style>
  :global(.hljs) {
    font-size: 0.75em;
  }
</style>

<p>{config.name}</p>
{#if config.language === "svelte"}
  <HighlightSvelte code={snippet}/>
{:else if config.language === "ts"}
  <Highlight language={typescript} code={snippet}/>
{/if}