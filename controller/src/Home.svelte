<script lang="ts">
  import type { User } from "firebase/auth";

  export let user: User | null;
</script>

<style>

</style>

{#if user === null}
  Welcome to Lexoral
{:else}
  Welcome, {user.email}
{/if}