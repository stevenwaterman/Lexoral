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
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .errors {
    border: 1px solid var(--error);
    padding: 1em;
  }
</style>

<form on:submit|preventDefault={submit}>
  <div class="formElement">
    <label for="email">Email Address</label>
    <input id="email" type="text" bind:value={email} />
  </div>

  <div class="formElement">
    <label for="password">Password</label>
    <input id="password" type="password" bind:value={password} />
  </div>

  <input type="submit" value="Log In" />
</form>

<p>Don't have an account yet? <a href="/dashboard/auth/signup">Sign up</a> instead</p>

{#if showErrors && hasErrors}
  <div class="errors">
    {#if noEmailError}
      <p>You must enter an email address</p>
    {/if}

    {#if noAtSignError}
      <p>That email address is invalid</p>
    {/if}

    {#if noPasswordError}
      <p>You must enter a password</p>
    {/if}

    {#if shortPasswordError}
      <p>Your password must be at least 8 characters long</p>
    {/if}
  </div>
{/if}