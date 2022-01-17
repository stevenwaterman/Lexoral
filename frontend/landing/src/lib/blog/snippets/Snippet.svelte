<script lang="ts">
  import hljs from "highlight.js/lib/core";
  import typescript from "highlight.js/lib/languages/typescript";
  import xml from "highlight.js/lib/languages/xml";
  import javascript from "highlight.js/lib/languages/javascript";
  import css from "highlight.js/lib/languages/css";
  import prettier from "prettier";
  import type { SnippetConfig } from "../blogData";
  import Highlight from "./Highlight.svelte";

  export let config: SnippetConfig;

  hljs.registerLanguage("ts", typescript);
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("js", javascript);
  hljs.registerLanguage("css", css);

  let parser: string;
  $: parser = {
    svelte: "svelte",
    ts: "typescript"
  }[config.language];

  let formattedSnippet: string;
  $: formattedSnippet = prettier.format(config.snippet, { parser });

  let highlightedSnippet: string;
  $: highlightedSnippet = hljs.highlightAuto(formattedSnippet).value;
</script>

<style>
  .container {
    display: grid;
    grid-template-rows: auto 1fr;
    align-items: center;

    border: 0.2em solid var(--blue-0);
    border-radius: 0.5em;
    background-color: var(--blue-0);

    margin-top: 1em;
    margin-bottom: 1em;

    /* max-height: 90vh; */
    overflow: hidden;
  }

  .name {
    margin-left: 0.5em;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    color: var(--grey-5);
  }
</style>

<div class="container">
  <h2 class="name">{config.name}</h2>
  
  <Highlight>
    {@html highlightedSnippet}
  </Highlight>
</div>