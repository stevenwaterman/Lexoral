<script lang="ts">
  import type { User } from "firebase/auth";

  export let user: User | null;

  async function sendRequest() {
    if (user === null) return;

    const idToken = await user.getIdToken();
    fetch("https://europe-west2-lexoral-test.cloudfunctions.net/fetch", {
      method: "get",
      headers: {
        "Authorization": `Bearer ${idToken}`
      }
    })
  }
</script>

<style>

</style>

{#if user === null}
  Welcome to Lexoral
{:else}
  Welcome, {user.email}
  <button on:click={sendRequest}>Fetch</button>
{/if}