<script lang="ts">
  import hljs from "highlight.js/lib/core";
  import typescript from "highlight.js/lib/languages/typescript";
  import xml from "highlight.js/lib/languages/xml";
  import javascript from "highlight.js/lib/languages/javascript";
  import css from "highlight.js/lib/languages/css";
  import prettier from "prettier";
  import { Change, diffLines } from "diff";
  import type { SnippetConfig } from "../blogData";
  import DiffSection from "./DiffSection.svelte";
  import Highlight from "./Highlight.svelte";

  export let from: SnippetConfig;
  export let to: SnippetConfig;

  hljs.registerLanguage("ts", typescript);
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("js", javascript);
  hljs.registerLanguage("css", css);

  let parser: string;
  $: parser = {
    svelte: "svelte",
    ts: "typescript"
  }[to.language];

  let fromSnippet: string;
  $: fromSnippet = prettier.format(from.snippet, { parser });

  let fromHighlighted: string;
  $: fromHighlighted = hljs.highlightAuto(fromSnippet).value;

  let toSnippet: string;
  $: toSnippet = prettier.format(to.snippet, { parser });

  let toHighlighted: string;
  $: toHighlighted = hljs.highlightAuto(toSnippet).value;

  let changes: Change[];
  $: changes = diffLines(fromHighlighted, toHighlighted);
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

  .diffLabel {
    color: var(--grey-5);
    user-select: none;
  }

  .diffCheckbox {
    margin-left: 1em;
    margin-right: 3em;
    color: var(--grey-5);
  }
</style>

<div class="container">
  <h2 class="name">{to.name}</h2>
  <label
    class="diffLabel"
    for={`diff-${from.name}-${to.name}-checkbox`}
    title={`Tick to show changes from ${from.name} to ${to.name}`}
  >Show Changes</label>
  <input class="diffCheckbox" id={`diff-${from.name}-${to.name}-checkbox`} type="checkbox" checked autocomplete="off"/>
  
  <Highlight diff>
    {#each changes as change, idx}
      <DiffSection {change} first={idx === 0} last={idx === changes.length - 1}/>
    {/each}
  </Highlight>
</div>

