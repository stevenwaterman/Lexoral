<script>
import CreatorIcon from "../icons/CreatorIcon.svelte";

import ResearchIcon from "../icons/ResearchIcon.svelte";

</script>
<style>
  .section {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;

    padding-top: 5em;
    margin-top: -4em;

    padding-bottom: 1em;
  }

  .background {
    z-index: -2;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;

    background-color: var(--grey-5);
  }

  .divider {
    background-color: var(--blue-0);
    height: 100%;
    width: 0.7em;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }

  .textContainer {
    font-size: 1.25em;
    align-self: flex-start;

    color: var(--text);
  }

  h2 {
    font-weight: 600;
    font-size: 1.2em;
    display: inline-block;
    transform: scaleX(0.95);
    transform-origin: 0% 0%;
    margin: 0;

    color: var(--yellow-1);
    font-style: italic;
  }

  .subtitle {
    font-weight: 600;
    font-size: 1.75em;
    margin: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 2em;

    justify-items: center;
    align-items: flex-start;
  }

  h3 {
    font-weight: 600;
    font-size: 2em;
    color: var(--blue-1);
    margin-top: 0;
  }

  .panel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>

<div class="section">
  <div class="background">
    <div class="divider"/>
  </div>

  <div class="textContainer">
    <h2>Use Cases</h2>
    <p class="subtitle">Here's some examples<br>of how we can help</p>
  </div>

  <div class="grid">
    <div class="panel">
      <ResearchIcon/>

      <h3>Research</h3>

      <ul>
        <li>Safety</li>
        <li>Immersion benefits vs outsourcing / automated</li>
        <li>Jargon</li>
        <li>Quick to learn</li>
        <li>Time saved</li>
        <li>Simple pricing</li>
      </ul>
    </div>

    <div class="panel">
      <CreatorIcon/>

      <h3>Content Creation</h3>

      <ul>
        <li>Works with xyz platforms</li>
        <li>Quality Improvement</li>
        <li>Easy to use</li>
        <li>Upload video</li>
        <li>Export Subtitles</li>
      </ul>
    </div>
  </div>
</div>
    