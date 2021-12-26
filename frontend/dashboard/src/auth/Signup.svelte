<script lang="ts">
  import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
  import { navigate } from "svelte-navigator";
  import { userStore } from "./user";

  $: if ($userStore === undefined) throw new Error("Page has been loaded before auth state has updated");
  $: if ($userStore !== null) navigate("/dashboard");
  $: if ($userStore?.emailVerified === false) navigate("/dashboard/auth/verify");
  
  let email: string = "";
  let password: string = "";
  let privacy: boolean = false;

  $: noEmailError = email.length === 0;
  $: noAtSignError = !noEmailError && !email.includes("@");

  $: noPasswordError = password.length === 0;
  $: shortPasswordError = !noPasswordError && password.length < 8;

  $: privacyError = !privacy;

  let showErrors: boolean = false;
  $: hasErrors = [noEmailError, noAtSignError, noPasswordError, shortPasswordError, privacyError].some(i => i);

  function submit() {
    if (hasErrors) {
      showErrors = true;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({user}) => {
        if (user.emailVerified) {
          navigate("/dashboard");
        } else {
          console.log("Sending email verification");
          await sendEmailVerification(user);
          navigate("/dashboard/auth/verify");
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
    gap: 1em;
    margin-bottom: 2em;
    justify-items: center;
    align-items: center;
  }

  form label {
    justify-self: right;
  }

  form input {
    justify-self: left;
  }

  button {
    grid-column: span 2;
  }

  .error {
    margin-top: -0.5em;
    grid-column: span 2;
    color: var(--error);
    font-weight: bold;
    max-width: 100%;
  }

  .checkboxRow {
    grid-column: span 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>

<h1>Create your Lexoral account</h1>

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



  <div class="checkboxRow">
    <label for="privacy">I have read and agree to the <a href="https://lexoral.com/privacy">Privacy Policy</a></label>
    <input id="privacy" type="checkbox" bind:checked={privacy} style="margin-left: 1em"/>
  </div>

  {#if showErrors && privacyError}
    <p class="error">You must agree to the privacy policy</p>
  {/if}



  <button type="submit" disabled={showErrors && hasErrors}>Create Account</button>
</form>

<p>Already have an account? <a href="/dashboard/auth/login">Log in</a> instead</p>
