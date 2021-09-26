<script lang="ts">
  import { Route } from "svelte-navigator";
  import AuthPathGuard from "./AuthPathGuard.svelte";
  
  export let path: string;
</script>

<Route path={path}>
  <AuthPathGuard>
    <slot/>
  </AuthPathGuard>
</Route>
