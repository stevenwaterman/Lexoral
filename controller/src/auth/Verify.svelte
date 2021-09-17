<script lang="ts">
  import { sendEmailVerification } from "firebase/auth";
  import type { User } from "firebase/auth";
  
  export let user: User | null;

  $: if (user === null) location.pathname = "/auth/login";
  $: if (user?.emailVerified) location.pathname = "/";
  $: if (user !== null && !user.emailVerified) {
    sendEmailVerification(user, {
      url: "http://localhost:5000/"
    })
  }
</script>

<style>

</style>

{#if user}
  <p>A verification email has been sent to {user.email}.</p>
  <p>Please click the link inside it to verify your email address and continue with Lexoral.</p>
{/if}