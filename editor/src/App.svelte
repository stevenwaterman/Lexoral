<script lang="ts">
  import { initAudio } from "./audio";
  import Editor from "./editorComponents/Editor.svelte";
  import { initialiseStores } from "./sectionStores";
</script>

<style>
  :global(:root) {
    --text: #242230;
    --secondary-text: #525666;
    --light-text: var(--grey4);
    
    --weak-focus: #9CAFD3;
    --focus: #8BA861;
    --strong-focus: #E47A77;

    --info: #9CAFD3;
    --warn: #F6AE2D;
    --error: #E47A77;

    --primary: #8BA861;
    --secondary: #9CAFD3;

    --page-background: #E9EBED;
    --border: #D2D4DB;
    --form-border: #525666;

    --grey1: #242230;
    --grey2: #525666;
    --grey3: #D2D4DB;
    --grey4: #E9EBED;

    --red-1: #BB2A25;
    --red-2: #DA4944;
    --red-3: #E47A77;
    
    --yellow-1: #EB9C0A;
    --yellow-2: #F6AE2D;
    --yellow-3: #F8C462;
    
    --green-1: #607641;
    --green-2: #769150;
    --green-3: #8BA861;
    
    --blue-1: #4C6CA9;
    --blue-2: #728DC0;
    --blue-3: #9CAFD3;
  }


  :global(html) {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  :global(body) {
    color: var(--text);
    background-color: var(--page-background);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 18pt;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .loading {
    position: fixed;
    left: 50vw;
    top: 50vh;
    transform: translate(-50%, -50%);
  }
</style>

<svelte:body tabindex={-1}/>

{#await fetch("assets/data2.json").then(data => data.json()).then(data => initialiseStores(data)).then(initAudio)}
  <span class="loading">
    Fetching data...
  </span>
{:then}
  <Editor/>
{/await}
