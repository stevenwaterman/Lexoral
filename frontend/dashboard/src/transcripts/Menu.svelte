<script lang="ts">
  import { slide } from "svelte/transition";
  import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
  import { getContext, tick } from "svelte";
  import DeleteModal from "./DeleteModal.svelte";
  import RenameModal from "./RenameModal.svelte";

  export let transcript: QueryDocumentSnapshot<DocumentData>;
  let visible: boolean = false;

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
    resetHideTimer();
  }

  const { open } = getContext("simple-modal");

  async function rename() {
    hide();
    open(RenameModal, { transcript }, {
      closeButton: false
    });
  }

  async function del() {
    hide();
    open(DeleteModal, { transcript }, {
      closeButton: false
    });
  }

  let hideTimer: NodeJS.Timer | undefined = undefined;

  function startHideTimer() {
    hideTimer = setTimeout(hide, 500);
  }

  function resetHideTimer() {
    if (hideTimer !== undefined) {
      clearTimeout(hideTimer);
      hideTimer = undefined;
    }
  }
</script>

<style>
  button {
    position: relative;
    background-color: transparent;
    color: var(--text);
    transition: none;
    height: 100%;
    padding-left: 0.75em;
    padding-right: 0.75em;
    padding-top: 0;
    padding-bottom: 0;
  }

  ul {
    position: absolute;
    right: 0;
    top: 100%;
    z-index: 1;

    background-color: var(--grey-3);
    border: 1px solid var(--border);
    border-radius: 0.5em;

    padding: 0.25em;

    list-style-type: none;
  }

  li {
    padding: 0.25em;
    margin: 0.25em;
    border-radius: 0.25em;

    cursor: pointer;
  }

  li:hover {
    background-color: var(--weak-focus)
  }
</style>

<button on:click|self={show} on:mouseleave={startHideTimer} on:mouseenter={resetHideTimer}>
  ⋮
  {#if visible}
    <ul transition:slide>
      <li on:click={rename}>Rename</li>
      <li on:click={del}>Delete</li>
    </ul>
  {/if}
</button>

