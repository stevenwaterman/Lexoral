<script lang="ts">
  import { sendEmailVerification } from "firebase/auth";
  import type { User } from "firebase/auth";
  import { userStore } from "./user";
  import { navigate } from "svelte-navigator";
  
  $: if ($userStore === undefined) throw new Error("Page has been loaded before auth state has updated");
  $: if ($userStore === null) navigate("/dashboard/auth/login", {replace: true});
  $: if ($userStore?.emailVerified === true) navigate("/dashboard", {replace: true});

  let manuallySent: boolean = false;

  function resend(user: User | null | undefined) {
    if (user === null || user === undefined) throw new Error("User is not defined");

    sendEmailVerification(user, {
      url: "https://lexoral.com/dashboard"
    })

    manuallySent = true;
  }
</script>

<h1>Verify your Email Address to continue</h1>

<p>A verification email has been sent to {$userStore?.email}.</p>
<p>Please click the link inside to continue with Lexoral.</p>
<p>Can't see it? Click below to send another verification email.</p>
<button disabled={manuallySent} on:click={() => resend($userStore)}>Resend Email</button>
