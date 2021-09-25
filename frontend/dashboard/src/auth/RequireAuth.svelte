<script lang="ts">
  import { userStore } from "./user";

  if ($userStore === null) location.pathname = "/dashboard/auth/login";
  if ($userStore?.emailVerified === false) location.pathname = "/dashboard/auth/verify";
</script>

{#if $userStore?.emailVerified}
  <slot/>
{/if}