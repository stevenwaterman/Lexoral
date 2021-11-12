<script lang="ts">
  import { initializeApp } from "firebase/app";
  import { browserLocalPersistence, initializeAuth } from "firebase/auth";
  import Editor from "./input/Editor.svelte";
  import Loading from "./Loading.svelte";
  import { userStore } from "./api";
  import { initAll } from "./state/initialiseState";

  const app = initializeApp({
    apiKey: process.env["FIREBASE_API_KEY"],
    authDomain: `${process.env["PROJECT_ID"]}.firebaseapp.com`,
    projectId: process.env["PROJECT_ID"]
  });

  const auth = initializeAuth(app, {
    persistence: browserLocalPersistence
  });

  auth.onAuthStateChanged(user => {
    if (user === null) location.pathname = "/dashboard/auth/login/";
    else if (user.emailVerified === false) location.pathname = "/dashboard/auth/verify/";
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
  <Loading text="Logging in..."/>
{:else if $userStore === null}
  <span class="loading">
    Login failed...
  </span>
{:else}
  {#await initAll()}
    <Loading text="Loading Transcript..."/>
  {:then}
    <Editor/>
  {:catch err}
    <span class="loading">
      Error: {err}
    </span>
  {/await}
{/if}
