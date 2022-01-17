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

<Highlight>
  {#each changes as change}
    <DiffSection {change}/>
  {/each}
</Highlight>
