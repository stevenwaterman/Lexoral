<script lang="ts">
  import type { User } from "firebase/auth";

  export let user: User;

  async function getData(userId: string) {
    const params = new URLSearchParams(window.location.search);
    const transcriptId = params.get("id");
    if (transcriptId === null) throw new Error("Missing transcript ID");

    await user
      .getIdToken()
      .then(idToken => 
        fetch(`https://europe-west2-lexoral-test.cloudfunctions.net/fetch?transcript=${transcriptId}`, {
          method: "get",
          headers: {
            "Authorization": `Bearer ${idToken}`
          }
        }))
      .then(res => {
        if (res.ok) return res;
        throw new Error("response was not OK: " + res.status)
      })
      .then(res => res.json())
      .then(console.log);
  }
</script>

<style>

</style>

{#await getData(user.uid)}
  Pending
{:then res}
  {res}
{:catch err}
  {err}
{/await}