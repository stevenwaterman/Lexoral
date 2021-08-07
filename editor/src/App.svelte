<script lang="ts">
  import Editor from "./EditorWrapper.svelte";
  import { refineTiming } from "./envelope";
  import type { Output } from "./types";

  let data: string = `[{"options":[{"text":"I'm not playing anymore.","confidence":0.9347271907886304}],"startTime":0.1,"endTime":1.4,"endParagraph":true},{"options":[{"text":"I was playing with Steven,","confidence":0.9190858828115958}],"startTime":1.5,"endTime":3.3,"endParagraph":false},{"options":[{"text":"but then I got a bit","confidence":0.9037063095071408}],"startTime":4.7,"endTime":5.6,"endParagraph":false},{"options":[{"text":"Federal","confidence":0.89718789},{"text":"Fed Up.","confidence":0.83724141}],"startTime":5.6,"endTime":6,"endParagraph":false},{"options":[{"text":"Because this game could be a lot.","confidence":0.36617334576358124}],"startTime":7.3,"endTime":8.9,"endParagraph":true},{"options":[{"text":"Yeah.","confidence":0.86630243}],"startTime":8.9,"endTime":9.4,"endParagraph":false},{"options":[{"text":"So I've now doing secrets","confidence":0.48791892448329904}],"startTime":10.2,"endTime":12.5,"endParagraph":false},{"options":[{"text":"It's fun.","confidence":0.9993846813727228}],"startTime":14.7,"endTime":15.2,"endParagraph":true},{"options":[{"text":"It's not","confidence":0.9993846813727228}],"startTime":15.6,"endTime":15.9,"endParagraph":false},{"options":[{"text":"a","confidence":0.9945142322435451},{"text":"that","confidence":0.943908187697281}],"startTime":15.9,"endTime":16,"endParagraph":false},{"options":[{"text":"secret.","confidence":0.9996922933446686}],"startTime":16,"endTime":16.6,"endParagraph":false},{"options":[{"text":"I'm","confidence":0.9996922933446686}],"startTime":16.7,"endTime":16.8,"endParagraph":false},{"options":[{"text":"just","confidence":0.9945142322435451},{"text":"just,","confidence":0.943908187697281}],"startTime":16.8,"endTime":17.1,"endParagraph":false},{"options":[{"text":"I'm","confidence":0.9986843750346583},{"text":"I'm,","confidence":0.7661137}],"startTime":17.2,"endTime":17.7,"endParagraph":false},{"options":[{"text":"if any of you in","confidence":0.998462413265898}],"startTime":17.9,"endTime":18.7,"endParagraph":false},{"options":[{"text":"charge,","confidence":0.9984612020500957},{"text":"charge","confidence":0.8000344}],"startTime":18.7,"endTime":19.2,"endParagraph":false},{"options":[{"text":"usually","confidence":0.9984612020500957},{"text":"really","confidence":0.8000344}],"startTime":19.2,"endTime":19.6,"endParagraph":false},{"options":[{"text":"have any recommendations of cool like","confidence":0.9981551797362378}],"startTime":19.6,"endTime":22.3,"endParagraph":false},{"options":[{"text":"artists.","confidence":0.9625975905297219},{"text":"artist,","confidence":0.9588583203141742},{"text":"artists,","confidence":0.8000344}],"startTime":22.6,"endTime":23.2,"endParagraph":false}]`;

  let json: Output | null;
  $: json = data ? JSON.parse(data) : null;
</script>

<style>

</style>

{#if json}
  <Editor data={json}/>
{:else}
  <input bind:value={data}>
{/if}