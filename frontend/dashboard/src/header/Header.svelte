<script lang="ts">
  import Credit from "../credit/CreditDisplay.svelte";
  import LogOut from "../auth/LogOutButton.svelte";
  import UploadButton from "../upload/UploadButton.svelte";
import { userStore } from "../auth/user";
</script>

<style>
  nav {
    height: 3em;
    background-color: var(--yellow-3);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
    width: 100%;
  }

  .logo {
    height: 100%;
    box-sizing: border-box;
  }

  .buttons {
    margin-right: 1em;
    display: grid;
    grid-template-columns: auto auto;
    gap: 1em;
  }
</style>

<nav>
  <img class="logo" src="/assets/smallBrand.svg" alt="logo"/>
  {#if $userStore}
    <Credit/>
    <div class="buttons">
      <UploadButton/>
      <LogOut/>
    </div>
  {/if}
</nav>
