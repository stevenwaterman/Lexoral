<script lang="ts">
  import ReadyTranscripts from "./transcripts/ReadyTranscripts.svelte";
  import Credit from "./credit/CreditDisplay.svelte";
  import LogOut from "./auth/LogOutButton.svelte";
  import UploadButton from "./upload/UploadButton.svelte";
</script>


<LogOut/>
<Credit/>
<UploadButton/>
<div style="height: 5em"></div>
<ReadyTranscripts/>
