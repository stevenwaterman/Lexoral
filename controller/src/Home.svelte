<script lang="ts">
  import type { User } from "firebase/auth";
  import ReadyTranscripts from "./transcripts/ReadyTranscripts.svelte";
  import Upload from "./Upload.svelte";
  import Credit from "./Credit.svelte";

  export let user: User | null;
</script>


{#if user !== null}
  <Credit user={user}/>
  <Upload user={user}/>
  <div style="height: 5em"></div>
  <ReadyTranscripts user={user}/>
{/if}
