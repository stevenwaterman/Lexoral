<script lang="ts">
  import Editor from "./EditorWrapper.svelte";
  import { refineTiming } from "./envelope";
  import type { JsonOutput, Output } from "./types";

  // let data: string = `[{"options":[{"text":"I'm not playing anymore.","confidence":0.9347271907886304}],"startTime":0.1,"endTime":1.4,"startParagraph":true},{"options":[{"text":"I was playing with Steven,","confidence":0.9190858828115958}],"startTime":1.5,"endTime":3.3,"startParagraph":false},{"options":[{"text":"but then I got a bit","confidence":0.9037063095071408}],"startTime":4.7,"endTime":5.6,"startParagraph":false},{"options":[{"text":"Federal","confidence":0.89718789},{"text":"Fed Up.","confidence":0.83724141}],"startTime":5.6,"endTime":6,"startParagraph":false},{"options":[{"text":"Because this game could be a lot.","confidence":0.36617334576358124}],"startTime":7.3,"endTime":8.9,"startParagraph":true},{"options":[{"text":"Yeah.","confidence":0.86630243}],"startTime":8.9,"endTime":9.4,"startParagraph":false},{"options":[{"text":"So I've now doing secrets","confidence":0.48791892448329904}],"startTime":10.2,"endTime":12.5,"startParagraph":false},{"options":[{"text":"It's fun.","confidence":0.9993846813727228}],"startTime":14.7,"endTime":15.2,"startParagraph":true},{"options":[{"text":"It's not","confidence":0.9993846813727228}],"startTime":15.6,"endTime":15.9,"startParagraph":false},{"options":[{"text":"a","confidence":0.9945142322435451},{"text":"that","confidence":0.943908187697281}],"startTime":15.9,"endTime":16,"startParagraph":false},{"options":[{"text":"secret.","confidence":0.9996922933446686}],"startTime":16,"endTime":16.6,"startParagraph":false},{"options":[{"text":"I'm","confidence":0.9996922933446686}],"startTime":16.7,"endTime":16.8,"startParagraph":false},{"options":[{"text":"just","confidence":0.9945142322435451},{"text":"just,","confidence":0.943908187697281}],"startTime":16.8,"endTime":17.1,"startParagraph":false},{"options":[{"text":"I'm","confidence":0.9986843750346583},{"text":"I'm,","confidence":0.7661137}],"startTime":17.2,"endTime":17.7,"startParagraph":false},{"options":[{"text":"if any of you in","confidence":0.998462413265898}],"startTime":17.9,"endTime":18.7,"startParagraph":false},{"options":[{"text":"charge,","confidence":0.9984612020500957},{"text":"charge","confidence":0.8000344}],"startTime":18.7,"endTime":19.2,"startParagraph":false},{"options":[{"text":"usually","confidence":0.9984612020500957},{"text":"really","confidence":0.8000344}],"startTime":19.2,"endTime":19.6,"startParagraph":false},{"options":[{"text":"have any recommendations of cool like","confidence":0.9981551797362378}],"startTime":19.6,"endTime":22.3,"startParagraph":false},{"options":[{"text":"artists.","confidence":0.9625975905297219},{"text":"artist,","confidence":0.9588583203141742},{"text":"artists,","confidence":0.8000344}],"startTime":22.6,"endTime":23.2,"startParagraph":false}]`;
  let data: string = `[{"options":[{"text":"It's","confidence":0.9988894632251396}],"startTime":0.2,"endTime":0.5,"startParagraph":true},{"options":[{"text":"still,","confidence":0.967653704061437},{"text":"still","confidence":0.9656672659840352}],"startTime":0.5,"endTime":0.9,"startParagraph":false},{"options":[{"text":"it's still really cool.","confidence":0.9955652471751852}],"startTime":1.1,"endTime":2.1,"startParagraph":false},{"options":[{"text":"I feel like BattleBots is probably","confidence":0.9933552513602467}],"startTime":2.1,"endTime":3.1,"startParagraph":true},{"options":[{"text":"as real as it gets like.","confidence":0.9933552513602467}],"startTime":3.1,"endTime":4.6,"startParagraph":false},{"options":[{"text":"Oh,","confidence":0.9988894632251396}],"startTime":4.8,"endTime":5,"startParagraph":true},{"options":[{"text":"yeah.","confidence":0.9988894632251396}],"startTime":5,"endTime":5.5,"startParagraph":false},{"options":[{"text":"It's like an actual competition.","confidence":0.9944596353564242}],"startTime":5.5,"endTime":7.6,"startParagraph":true},{"options":[{"text":"It's just it's just like it's so","confidence":0.9922520938231105}],"startTime":7.6,"endTime":9,"startParagraph":true},{"options":[{"text":"much time.","confidence":0.9977801597422076}],"startTime":9,"endTime":9.5,"startParagraph":false},{"options":[{"text":"It's so much time and you're so","confidence":0.9922520938231105}],"startTime":9.5,"endTime":11.6,"startParagraph":true},{"options":[{"text":"tired","confidence":0.967653704061437},{"text":"tired.","confidence":0.9656672659840352}],"startTime":11.6,"endTime":11.9,"startParagraph":false},{"options":[{"text":"and","confidence":0.967653704061437},{"text":"Me","confidence":0.9656672659840352}],"startTime":11.9,"endTime":12,"startParagraph":false},{"options":[{"text":"like not sleeping and you're living","confidence":0.9933552513602467}],"startTime":12,"endTime":14,"startParagraph":false},{"options":[{"text":"in a hotel.","confidence":0.9966720881815878}],"startTime":14,"endTime":14.9,"startParagraph":false},{"options":[{"text":"I think that's interesting that","confidence":0.9944596353564242}],"startTime":15.9,"endTime":17.1,"startParagraph":true},{"options":[{"text":"that's a part of just showing","confidence":0.9933552513602467}],"startTime":17.1,"endTime":19.4,"startParagraph":false},{"options":[{"text":"moviemaking","confidence":0.967816480917168},{"text":"movie making","confidence":0.9654936188922618}],"startTime":19.4,"endTime":20.2,"startParagraph":false},{"options":[{"text":"and just in general where you don't","confidence":0.9922520938231105}],"startTime":20.2,"endTime":22.7,"startParagraph":false},{"options":[{"text":"see how tiring everything is just","confidence":0.9933552513602467}],"startTime":22.7,"endTime":26.6,"startParagraph":false},{"options":[{"text":"to put it all together.","confidence":0.9944596353564242}],"startTime":26.6,"endTime":27.9,"startParagraph":false},{"options":[{"text":"Everyone's just being completely.","confidence":0.9955652471751852}],"startTime":27.9,"endTime":29.7,"startParagraph":true},{"options":[{"text":"Crushed.","confidence":0.9128384}],"startTime":30,"endTime":30.9,"startParagraph":true},{"options":[{"text":"Right?","confidence":0.9128384}],"startTime":30.9,"endTime":31.7,"startParagraph":true},{"options":[{"text":"And I just probably got a few people","confidence":0.48211562699749005}],"startTime":32.3,"endTime":34.2,"startParagraph":true},{"options":[{"text":"who are sorry and you had it easy","confidence":0.48211562699749005}],"startTime":34.2,"endTime":36.1,"startParagraph":false},{"options":[{"text":"compared to other people but competitors,","confidence":0.5785799858152961}],"startTime":36.1,"endTime":38,"startParagraph":false},{"options":[{"text":"probably if you're a competitor,","confidence":0.6338252047846542}],"startTime":38,"endTime":39.3,"startParagraph":false},{"options":[{"text":"it's a way worse.","confidence":0.6943454666068541}],"startTime":39.3,"endTime":40.3,"startParagraph":false},{"options":[{"text":"Like,","confidence":0.9128384}],"startTime":40.3,"endTime":40.6,"startParagraph":true},{"options":[{"text":"oh,","confidence":0.9128384}],"startTime":40.6,"endTime":40.8,"startParagraph":false},{"options":[{"text":"yeah.","confidence":0.9128384}],"startTime":40.8,"endTime":41.2,"startParagraph":false}]`;

  let json: JsonOutput | null;
  $: json = data ? JSON.parse(data) : null;

  let withIdx: Output | null;
  $: withIdx = json ? json.map((section, idx) => ({...section, idx})) : null;
</script>

<style>
  :global(html) {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  :global(body) {
    user-select: none;
    color: #333;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 18pt;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  :global(input) {
    font-family: inherit;
    font-size: inherit;
    border: 1px solid #ccc;
    border-radius: 2px;
  }
</style>

{#if json}
  <Editor data={withIdx}/>
{:else}
  <input bind:value={data}>
{/if}