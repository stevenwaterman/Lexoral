<script lang="ts">
  import { slide } from "svelte/transition";
  import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
  import { getContext } from "svelte";
  import DeleteModal from "./DeleteModal.svelte";
  import RenameModal from "./RenameModal.svelte";

  export let transcript: QueryDocumentSnapshot<DocumentData>;
  let visible: boolean = false;

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
  }

  const { open } = getContext("simple-modal");

  function rename() {
    open(RenameModal, { transcript }, {
      closeButton: false
    });
  }

  async function del() {
    open(DeleteModal, { transcript }, {
      closeButton: false
    });
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

<button on:click={show} on:mouseleave={hide}>
  ⋮
  {#if visible}
  <ul on:mouseleave={hide} transition:slide>
      <li on:click={rename}>Rename</li>
      <li on:click={del}>Delete</li>
    </ul>
  {/if}
</button>

