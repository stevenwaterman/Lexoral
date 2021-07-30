<script lang="ts">
  import type { OutputSection } from "./types";
  export let section: OutputSection;

  let selectedOption: number = 0;

  let selectedText: string;
  $: selectedText = section.options[selectedOption].text;
</script>

<style>
  button {
    padding: 0;
    margin: 0;
    background-color: #fff;
  }

  .hasOptions {
    background-color: #cfc;
  }
</style>

<button class:hasOptions={section.options.length > 1}>{selectedText}</button>