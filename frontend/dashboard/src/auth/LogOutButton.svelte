<script lang="ts">
  import { getAuth, signOut } from "firebase/auth";

  let loggingOut: boolean = false;
  async function logOut() {
    const auth = getAuth();
    loggingOut = true;
    await signOut(auth);
    loggingOut = false;
  }
</script>

<button disabled={loggingOut} on:click={logOut}>
  Sign Out
</button>