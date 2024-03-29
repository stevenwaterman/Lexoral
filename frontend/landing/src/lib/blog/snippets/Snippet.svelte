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
  export let diffFrom: SnippetConfig | undefined = undefined;

  hljs.registerLanguage("ts", typescript);
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("js", javascript);
  hljs.registerLanguage("css", css);

  let parser: string;
  $: parser = {
    svelte: "svelte",
    ts: "typescript"
  }[config.language];

  function highlight(snippet?: string): string | undefined {
    if (snippet === undefined) return undefined;

    const trimmed = snippet.trim();
    const formatted = prettier.format(trimmed, { parser }).trimEnd();
    const highlighted = hljs.highlightAuto(formatted).value;
    return highlighted;
  }
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-template-rows: auto 1fr;
    align-items: center;

    border: 0.2em solid var(--blue-0);
    border-radius: 0.5em;
    background-color: var(--blue-0);

    overflow: hidden;
  }

  .name {
    margin-left: 0.5em;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    color: var(--grey-5);

    grid-column: 1;
  }

  .diffLabel {
    color: var(--grey-5);
    user-select: none;

    grid-column: 2;
  }

  .diffCheckbox {
    margin-left: 1em;
    margin-right: 3em;
    color: var(--grey-5);

    grid-column: 3;
  }

  @media (max-width: 799px) {
    .container {
      grid-template-columns: 1fr auto;
      grid-template-rows: auto auto 1fr;
    }

    .name {
      grid-row: span 2;
    }

    .diffLabel {
      grid-row: 1;
      margin-right: 1em;
      margin-top: 0.5em;
      align-self: flex-end;
    }

    .diffCheckbox {
      grid-column: 2;
      grid-row: 2;
      margin: 0;
      margin-right: 1em;
      margin-bottom: 1em;
      align-self: flex-start;
    }
  }
</style>

<figure class="container wide">
  <h2 class="name">{config.name}</h2>

  {#if diffFrom !== undefined}
    <label
      class="diffLabel"
      for={`diff-${diffFrom.name}-${config.name}-checkbox`}
      title={`Tick to show changes from ${diffFrom.name} to ${config.name}`}
    >Show Diff</label>
    <input class="diffCheckbox" id={`diff-${diffFrom.name}-${config.name}-checkbox`} type="checkbox" checked autocomplete="off"/>
  {/if}
  
  <Highlight from={highlight(diffFrom?.snippet)} to={highlight(config.snippet)} />
</figure>
