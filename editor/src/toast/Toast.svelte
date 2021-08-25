<script lang="ts">
  import { slide } from "svelte/transition";

  export let text: string;
</script>

<style>
  p {
    margin: 4px;
    display: block;
    background-color: var(--blue-1);
    color: var(--page-background);
    padding: 10px;
    border-radius: 8px;
  }
</style>

<p transition:slide>
  {text}
</p>