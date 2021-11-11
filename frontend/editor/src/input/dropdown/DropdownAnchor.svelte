<script lang="ts">
  import type { SectionStore } from "../../state/section/sectionStore";
  import { clamp } from "../../utils/list";
  import DropdownFader from "./DropdownFader.svelte";

  export let section: SectionStore;
  export let sectionNode: HTMLElement;
  export let paragraphNode: HTMLElement;

  let sectionTop: number;
  $: sectionTop = sectionNode.offsetTop;

  let sectionLeft: number;
  $: sectionLeft = sectionNode.offsetLeft;

  let sectionWidth: number;
  $: sectionWidth = sectionNode.offsetWidth;

  let sectionHeight: number;
  $: sectionHeight = sectionNode.offsetHeight;


  let paragraphTop: number;
  $: paragraphTop = paragraphNode.offsetTop;

  let paragraphLeft: number;
  $: paragraphLeft = paragraphNode.offsetLeft;

  let paragraphWidth: number;
  $: paragraphWidth = paragraphNode.offsetWidth;

  
  let sectionWraps: boolean;
  $: sectionWraps = sectionLeft + sectionWidth > paragraphWidth;

  let sectionLeftUnwrapped: number;
  $: sectionLeftUnwrapped = sectionWraps ? 0 : sectionLeft;


  let maxDropdownLeft: number;
  $: maxDropdownLeft = paragraphWidth - sectionWidth;

  let desiredDropdownLeft: number;
  $: desiredDropdownLeft = sectionLeftUnwrapped + paragraphLeft;

  let dropdownLeft: number;
  $: dropdownLeft = clamp(desiredDropdownLeft, 0, maxDropdownLeft);

  let dropdownTop: number;
  $: dropdownTop = sectionTop + sectionHeight + paragraphTop;

  let transparent: boolean;
</script>

<style>
  .anchor {
    position: absolute;
    z-index: 1;

    transition-property: opacity;
    transition-duration: 500ms;
  }

  .transparent {
    opacity: 25%;
  }
</style>

<div class="anchor" style={`top: ${dropdownTop}px; left: ${dropdownLeft}px;`} class:transparent>
  <DropdownFader
    bind:transparent
    sectionIdx={section.idx}
    completionsStore={section.completionsStore}
  />
</div>
