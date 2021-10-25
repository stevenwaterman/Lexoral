<script lang="ts">
  import type { Readable } from "svelte/store";
  import type { SectionStoreState } from "../state/section/sectionStore";
  import type { sectionProps } from "./selector";

  export let idx: number;
  export let sectionStore: Readable<SectionStoreState<typeof sectionProps>>;
  export let hidden: boolean;
</script>

<style>
  .section {
    display: inline;
    white-space: pre-wrap;
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
  class:hidden
  class:highlight={$sectionStore.selected}
  class:sectionPlaying={$sectionStore.playing}
  class:underline={$sectionStore.displayText.length === 0}
  class:placeholder={!$sectionStore.edited}
  data-sectionIdx={idx}
  title={`${$sectionStore.startTime} - ${$sectionStore.endTime}`}
>
  {`\u200b${$sectionStore.displayText}\u200b`}
  <!-- {`/${state.displayText}/`} -->
</span>
{$sectionStore.endsParagraph ? "" : " "}