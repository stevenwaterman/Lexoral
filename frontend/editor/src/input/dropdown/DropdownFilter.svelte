<script lang="ts">
  import { writable } from "svelte/store";
  import type { Readable } from "svelte/store";

  import type { SectionStore } from "../../state/section/sectionStore";
  import { getSectionStore } from "../../state/section/sectionStoreRegistry";

  import { focusSectionIdxStore, isTextSelectedStore } from "../selectionState";
  import { findSectionNode } from "../select";

  import DropdownAnchor from "./DropdownAnchor.svelte";
  import { subscribeToDropdownReposition } from "./repositionDropdown";

  let sectionIdx: number | undefined;
  $: sectionIdx = $focusSectionIdxStore;
  
  $: console.log(sectionIdx);

  let section: SectionStore | undefined;
  $: section = !sectionIdx ? undefined : getSectionStore(sectionIdx);

  let completionsStore: Readable<string[]>;
  $: completionsStore = section?.completionsStore ?? writable([]);

  let editedStore: Readable<boolean>;
  $: editedStore = section?.editedStore ?? writable(true);


  let sectionNode: HTMLElement | undefined;
  $: sectionNode = findSectionNode(sectionIdx);

  let paragraphNode: HTMLElement | undefined;
  $: paragraphNode = sectionNode?.parentElement ?? undefined;

  subscribeToDropdownReposition(() => {
    if (sectionNode?.isConnected) {
      sectionNode = sectionNode;
    } else {
      sectionNode = findSectionNode(sectionIdx);
    }
  })
</script>

{#if
  !$isTextSelectedStore &&
  $completionsStore.length > 1 &&
  section !== undefined &&
  sectionNode !== undefined &&
  paragraphNode !== undefined
}
  <DropdownAnchor {section} {sectionNode} {paragraphNode}/>
{/if}
