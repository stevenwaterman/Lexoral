<script lang="ts">
  import { initializeApp } from "firebase/app";
  import { Router, Route } from "svelte-navigator";
  import Home from "./Home.svelte";
  import Login from "./auth/Login.svelte";
  import Signup from "./auth/Signup.svelte";
  import Verify from "./auth/Verify.svelte";
  import { browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence } from "firebase/auth";
  import type { User } from "firebase/auth";

  const app = initializeApp({
    apiKey: "AIzaSyBv7G95FIPXdpLE3Ft6aMJ2PHmt6ng28FM",
    authDomain: "lexoral-test.firebaseapp.com"
  })

  let currentUser: User | null | undefined = undefined;
  $: if (currentUser && !currentUser.emailVerified && location.pathname !== "/auth/verify") location.pathname = "/auth/verify";
  $: if (currentUser === null && location.pathname !== "/auth/login" && location.pathname !== "/auth/signup") location.pathname = "/auth/login";

  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence);
  onAuthStateChanged(auth, user => currentUser = user);
</script>

<style>
  :global(:root) {
    --text: #242230;
    --secondary-text: #525666;
    --light-text: var(--grey-4);
    
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

    --grey-1: #242230;
    --grey-2: #525666;
    --grey-3: #D2D4DB;
    --grey-4: #E9EBED;

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
</style>

{#if currentUser !== undefined}
  <Router>
      <Route path="/">
        <Home user={currentUser}/>
      </Route>
      <Route path="/auth/login">
        <Login user={currentUser}/>
      </Route>
      <Route path="/auth/signup">
        <Signup user={currentUser}/>
      </Route>
      <Route path="/auth/verify">
        <Verify user={currentUser}/>
      </Route>
  </Router>
{/if}
