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

  <div class="formElement">
    <label for="privacy">I have read and agree to the <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/PRIVACY.md">Privacy Policy</a></label>
    <input id="privacy" type="checkbox" bind:checked={privacy} />
  </div>

  <input type="submit" value="Sign Up" />
</form>

<p>Already have an account? <a href="/dashboard/auth/login">Log in</a> instead</p>

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

    {#if privacyError}
      <p>You must agree to the privacy policy</p>
    {/if}
  </div>
{/if}