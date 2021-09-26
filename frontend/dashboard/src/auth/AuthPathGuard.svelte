<script lang="ts">
  import { userStore } from "./user";
  import { navigate, Route } from "svelte-navigator";
  import { onMount, onDestroy } from "svelte";
  import type { User } from "firebase/auth";

  let user: User | null | undefined;
  $: user = $userStore;

  onMount(() => {
    if (user === null) navigate("/dashboard/auth/login");
    else if (user && !user.emailVerified) navigate("/dashboard/auth/verify");
  })
</script>

{#if user && user.emailVerified}
  <slot/>
{/if}
