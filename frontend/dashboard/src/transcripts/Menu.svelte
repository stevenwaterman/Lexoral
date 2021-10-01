<script lang="ts">
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
  }

  ul {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
</style>

<button on:click={show}>
  ⋮
  {#if visible}
    <ul on:mouseleave={hide}>
      <li>Rename</li>
      <li>Delete</li>
    </ul>
  {/if}
</button>

