<script lang="ts">
  import { sendEmailVerification } from "firebase/auth";
  import type { User } from "firebase/auth";
  import { userStore } from "./user";
  import { navigate } from "svelte-navigator";
  
  let user: User | null | undefined;
  $: user = $userStore

  $: if (!user) navigate("/dashboard/auth/login");
  $: if (user?.emailVerified) navigate("/dashboard");

  let manuallySent: boolean = false;

  function resend() {
    if (user === null || user === undefined) throw new Error("User is not defined");

    sendEmailVerification(user, {
      url: "https://lexoral.com/dashboard"
    })

    manuallySent = true;
  }
</script>

{#if user}
  <p>A verification email has been sent to {user.email}.</p>
  <p>Please click the link inside it to verify your email address and continue with Lexoral.</p>

  {#if !user.emailVerified}
    <button disabled={manuallySent} on:click={() => resend()}>Resend Email</button>
  {/if}
{/if}