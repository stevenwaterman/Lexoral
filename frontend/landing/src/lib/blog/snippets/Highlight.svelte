<script lang="ts">
  export let diff: boolean = false;
</script>

<style>
  pre {
    font-size: 10pt;

    background-color: var(--grey-5);
    color: var(--blue-0);
    margin: 0;

    padding: 2em 3em;

    grid-column: span 3;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;

    min-height: 0;
    max-height: 100%;
    overflow: auto;
  }

  .diff {
    padding-left: 0em;
    padding-right: 0em;
    white-space: normal;
  }

  .diff :global(div) {
    white-space: pre;
  }

  pre :global(.hljs-subst) {
    color: var(--grey-2);
  }

  pre :global(.hljs-attr),
  pre :global(.hljs-property) {
    color: var(--blue-1);
  }

  pre :global(.hljs-attribute),
  pre :global(.hljs-doctag),
  pre :global(.hljs-keyword),
  pre :global(.hljs-meta-keyword),
  pre :global(.hljs-name),
  pre :global(.hljs-selector-tag),
  pre :global(.hljs-function) {
      color: var(--red-1);
  }

  pre :global(.hljs-deletion),
  pre :global(.hljs-number),
  pre :global(.hljs-quote),
  pre :global(.hljs-selector-class),
  pre :global(.hljs-selector-id),
  pre :global(.hljs-string),
  pre :global(.hljs-template-tag),
  pre :global(.hljs-type),
  pre :global(.hljs-comment),
  pre :global(.hljs-literal) {
    color: var(--green-1);
  }

  pre :global(.hljs-section),
  pre :global(.hljs-title.class_),
  pre :global(.hljs-built_in),
  pre :global(.hljs-addition),
  pre :global(.hljs-bullet),
  pre :global(.hljs-pre) {
    color: var(--yellow-0);
  }

  pre :global(.hljs-title.function_),
  pre :global(.hljs-meta),
  pre :global(.hljs-meta-string) {
    color: #8250df;
  }

  pre :global(.hljs-emphasis) {
    font-style: italic
  }

  pre :global(.hljs-strong) {
    font-weight: 700
  }
</style>

<pre class:diff>
  <code><slot/></code>
</pre>
