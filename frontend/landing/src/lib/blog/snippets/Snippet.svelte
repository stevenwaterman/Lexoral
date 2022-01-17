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

<p>{config.name}</p>
<Highlight>
  {@html highlightedSnippet}
</Highlight>
