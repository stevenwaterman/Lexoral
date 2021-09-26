<script lang="ts">
  import { initializeApp } from "firebase/app";
  import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";
  import type { User } from "firebase/auth";
  import DataWrapper from "./DataWrapper.svelte";

  initializeApp({
    apiKey: "AIzaSyBv7G95FIPXdpLE3Ft6aMJ2PHmt6ng28FM",
    authDomain: `${process.env["PROJECT_ID"]}.firebaseapp.com`
  })

  let user: User | null | undefined = undefined;
  $: if (user?.emailVerified === false) location.pathname = "/dashboard/auth/verify";
  $: if (user === null) location.pathname = "/dashboard/auth/login";

  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence);
  onAuthStateChanged(auth, state => user = state);
</script>

<style>
  .loading {
    position: fixed;
    left: 50vw;
    top: 50vh;
    transform: translate(-50%, -50%);
  }
</style>

<svelte:body tabindex={-1}/>

{#if user === undefined}
  <span class="loading">
    Logging in...
  </span>
{:else if user === null}
  <span class="loading">
    Login failed...
  </span>
{:else}
  <DataWrapper user={user}/>
{/if}
