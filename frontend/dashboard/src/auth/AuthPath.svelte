<script lang="ts">
  import { userStore } from "./user";
  import { navigate, Route } from "svelte-navigator";

  export let path: string;

  $: if ($userStore === null) navigate("/dashboard/auth/login");
  $: if ($userStore?.emailVerified === false) navigate("/dashboard/auth/verify");
</script>

<Route path={path}>
  {#if $userStore?.emailVerified}
    <slot/>
  {/if}
</Route>
