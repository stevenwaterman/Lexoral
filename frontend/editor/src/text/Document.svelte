<script lang="ts">
  import { afterUpdate } from "svelte";
  import { selectSectionPosition, selectSectionStart } from "../input/select";
  import { getSelectionState } from "../input/selectionState";

  import ParagraphFactory from "./ParagraphFactory.svelte";

  export let wrapper: HTMLDivElement;

  const observerCallback: IntersectionObserverCallback = 
    entries => {
      entries.forEach(entry => {
        const event = new CustomEvent("setVisible", { detail: entry.isIntersecting });
        entry.target.dispatchEvent(event);
      })
    };

  let observerConfig: IntersectionObserverInit | undefined;
  $: observerConfig = !wrapper ? undefined : {
    root: wrapper,
    rootMargin: "500px 0px 500px"
  };

  let observer: IntersectionObserver | undefined;
  $: observer = !observerConfig ? undefined : new IntersectionObserver(observerCallback, observerConfig);

  afterUpdate(() => {
    const selection = getSelectionState();
    if (selection === undefined) selectSectionStart(0);
    else selectSectionPosition(selection.focus.section, selection.focus.offset);
  });
</script>

{#if observer !== undefined} 
  <ParagraphFactory {observer}/>
{/if}
