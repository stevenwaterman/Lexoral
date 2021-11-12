<script lang="ts">
  import { initializeApp } from "firebase/app";
  import { browserLocalPersistence, initializeAuth } from "firebase/auth";
  import DataWrapper from "./DataWrapper.svelte";
import { userStore } from "./api";

  const app = initializeApp({
    apiKey: process.env["FIREBASE_API_KEY"],
    authDomain: `${process.env["PROJECT_ID"]}.firebaseapp.com`,
    projectId: process.env["PROJECT_ID"]
  });

  const auth = initializeAuth(app, {
    persistence: browserLocalPersistence
  });

  auth.onAuthStateChanged(user => {
    if (user?.emailVerified === false) location.pathname = "/dashboard/auth/verify/";
    else if (user === null) location.pathname = "/dashboard/auth/login/";
    else userStore.set(user);
  });
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

{#if $userStore === undefined}
  <span class="loading">
    Logging in...
  </span>
{:else if $userStore === null}
  <span class="loading">
    Login failed...
  </span>
{:else}
  <DataWrapper/>
{/if}
