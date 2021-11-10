<script lang="ts">
  import ToastController from "../display/toast/ToastController.svelte";
  import Header from "../display/Header.svelte";

  import Document from "../text/Document.svelte";
  import Dropdown from "./dropdown/DropdownFilter.svelte";
  import Scroller from "./Scroller.svelte";
  import Options from "../options/Options.svelte";
</script>

<style>
  .grid {
    display: grid;

    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;

    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  .mainSection {
    width: 100%;
    height: 100%;
    min-height: 0;
    min-width: 0;

    position: relative;

    border-left: 1px solid var(--form-border);
    border-right: 1px solid var(--form-border);
    background-color: var(--blue-2);
  }
</style>

<div class="grid">
  <Header/>

  <div class="mainSection">
    <Scroller let:wrapper>
      <Dropdown/>
      <Document wrapper={wrapper}/>
    </Scroller>
    <ToastController/>
  </div>

  <Options/>
</div>
