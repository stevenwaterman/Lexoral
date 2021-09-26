<script lang="ts">
  import { sendEmailVerification } from "firebase/auth";
  import type { User } from "firebase/auth";
  import { userStore } from "./user";
  import { navigate } from "svelte-navigator";
  
  let user: User | null | undefined;
  $: user = $userStore

  $: if (!user) navigate("/dashboard/auth/login");
  $: if (user?.emailVerified) navigate("/dashboard");
  $: if (user && !user.emailVerified) {
    sendEmailVerification(user, {
      url: "https://lexoral.com/dashboard"
    })
  }
</script>

<style>

</style>

{#if user}
  <p>A verification email has been sent to {user.email}.</p>
  <p>Please click the link inside it to verify your email address and continue with Lexoral.</p>
{/if}