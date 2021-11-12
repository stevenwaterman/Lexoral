<script lang="ts">
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { navigate } from "svelte-navigator";
  import { userStore } from "./user";

  $: if ($userStore === undefined) throw new Error("Page has been loaded before auth state has updated");
  $: if ($userStore !== null) navigate("/dashboard");
  $: if ($userStore?.emailVerified === false) navigate("/dashboard/auth/verify");
  
  let email: string = "";
  let password: string = "";

  $: noEmailError = email.length === 0;
  $: noAtSignError = !noEmailError && !email.includes("@");

  $: noPasswordError = password.length === 0;
  $: shortPasswordError = !noPasswordError && password.length < 8;

  let showErrors: boolean = false;
  $: hasErrors = [noEmailError, noAtSignError, noPasswordError, shortPasswordError].some(i => i);

  function submit() {
    if (hasErrors) {
      showErrors = true;
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        if (user.emailVerified) {
          navigate("/dashboard");
        } else {
          navigate("/dashboard/auth/verify")
        }
      })
      .catch(err => {
        if (err.code === "auth/user-not-found") {
          console.error("Unrecognised email");
        } else if (err.code === "auth/invalid-email") {
          console.error("Invalid Email")
        }
        console.log(err);
        console.log(err.code);
        console.log(err.customData);
        console.log(err.name);
      })
  }
</script>

<style>
  form {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-items: center;
    gap: 1em;
    margin-bottom: 2em;
  }

  button {
    grid-column: span 2;
  }

  .error {
    margin-top: -0.5em;
    grid-column: span 2;
    color: var(--error);
    font-weight: bold;
  }
</style>

<h1>Log in to Lexoral</h1>

<form on:submit|preventDefault={submit}>
  <label for="email">Email Address</label>
  <input id="email" type="text" bind:value={email} />

  {#if showErrors && noEmailError}
    <p class="error">You must enter an email address</p>
  {/if}

  {#if showErrors && noAtSignError}
    <p class="error">That email address is invalid</p>
  {/if}



  <label for="password">Password</label>
  <input id="password" type="password" bind:value={password} />

  {#if showErrors && noPasswordError}
    <p class="error">You must enter a password</p>
  {/if}

  {#if showErrors && shortPasswordError}
    <p class="error">Your password must be at least 8 characters long</p>
  {/if}



  <button type="submit" disabled={showErrors && hasErrors}>Log In</button>
</form>

<p>Don't have an account yet? <a href="/dashboard/auth/signup">Sign up</a> instead</p>
