<script lang="ts">
  import { initializeApp } from "firebase/app";
  import { Router, Route } from "svelte-navigator";
  import Login from "./auth/Login.svelte";
  import Signup from "./auth/Signup.svelte";
  import Verify from "./auth/Verify.svelte";
  import PaymentSuccess from "./buyCredit/PaymentSuccess.svelte";
  import PaymentFailed from "./buyCredit/PaymentFailed.svelte";
  import Modal from "svelte-simple-modal"
  import { userStore } from "./auth/user";
  import Header from "./header/Header.svelte";
  import Transcripts from "./transcripts/Transcripts.svelte";
  import { browserLocalPersistence, getAuth, initializeAuth, onAuthStateChanged } from "firebase/auth";

  const app = initializeApp({
    apiKey: process.env["FIREBASE_API_KEY"],
    authDomain: `${process.env["PROJECT_ID"]}.firebaseapp.com`,
    projectId: process.env["PROJECT_ID"]
  });

  const auth = initializeAuth(app, {
    persistence: browserLocalPersistence
  });

  auth.onAuthStateChanged(user => userStore.set(user));
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>

{#if $userStore !== undefined}
  <Modal>
    <div class="container">
      <Header/>
      <Router basepath="/dashboard">
        <Route path="/">
          <Transcripts/>
        </Route>
        <Route path="/auth/login">
          <Login/>
        </Route>
        <Route path="/auth/signup">
          <Signup/>
        </Route>
        <Route path="/auth/verify">
          <Verify/>
        </Route>
        <Route path="/payment/success">
          <PaymentSuccess/>
        </Route>
        <Route path="/payment/failed">
          <PaymentFailed/>
        </Route>
      </Router>
    </div>
  </Modal>
{/if}