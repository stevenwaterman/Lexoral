<script lang="ts">
  import type { SectionStore } from "../state/sectionStore";

  export let sectionStore: SectionStore;
  export let last: boolean;
  export let hidden: boolean;
</script>

<style>
  .section {
    display: inline;
    white-space: pre-wrap;
    /* transition: background 0.2s; */
    min-width: 1em;
  }

  .section::selection {
    background: none;
  }

  .underline {
    padding-right: 0.5em;
    box-shadow: inset 0 -2px 0 var(--form-border);
  }

  .highlight {
    background-color: var(--weak-focus);
  }

  .placeholder {
    color: var(--secondary-text);
  }

  .sectionPlaying {
    background-color: var(--focus);
  }

  .hidden {
    display: none;
  }

  .questionable {
    border-bottom: 1px solid var(--error)
  }
</style>

<span
  class="section"
  class:hidden={hidden}
  class:highlight={$sectionStore.selected}
  class:placeholder={!$sectionStore.edited}
  class:sectionPlaying={$sectionStore.playing}
  class:underline={$sectionStore.text.length === 0}
  class:questionable={$sectionStore.completions.length > 1 && !$sectionStore.edited}
  data-sectionIdx={$sectionStore.idx}
>
  {`\u200b${$sectionStore.text}\u200b`}
  <!-- {`/${sectionStore.text}/`} -->
</span>
{last ? "" : " "}