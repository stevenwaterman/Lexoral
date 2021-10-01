<script lang="ts">
  import { slide } from "svelte/transition";

  let visible: boolean = false;

  function show() {
    visible = true;
  }

  function hide() {
    visible = false;
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
      <li>Rename</li>
      <li>Delete</li>
    </ul>
  {/if}
</button>

