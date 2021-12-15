<script lang="ts">
import Animation from "../animation/Animation.svelte";


</script>

<style>
  .section {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    --background-angle-horiz-start: calc(var(--col-margin) + 20em);
    --background-angle-horiz-delta: calc(100vw - var(--background-angle-horiz-start));
    --background-angle-vert-delta: calc(var(--background-angle-horiz-delta) / 8);
    padding-bottom: calc(var(--background-angle-vert-delta) - 1em);
    margin-bottom: calc(-1em - var(--background-angle-vert-delta));

    filter: drop-shadow(0em 0.5em 0.5em var(--blue-0));
    z-index: -1;
  }

  .background {
    z-index: -2;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;

    background-color: var(--blue-0);

    clip-path: polygon(
      0 0,
      var(--background-angle-horiz-start) 0,
      100% var(--background-angle-vert-delta),
      100% 100%,
      var(--background-angle-horiz-start) calc(100% - var(--background-angle-vert-delta)),
      0 calc(100% - var(--background-angle-vert-delta))
    );
  }

  .textContainer {
    font-size: 1.25em;
    align-self: flex-start;
    margin-top: 5em;

    color: var(--page-background);
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

  .steps {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    grid-auto-flow: column;

    margin-top: 2em;
    padding: 0;

    align-items: center;
    justify-items: center;
    gap: 0.5em 1em;
  }

  .steps li {
    display: contents;
  }

  .steps li p {
    align-self: flex-start;
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--yellow-3);
    color: var(--text);

    clip-path: polygon(
      0 0,
      calc(100% - 1.5em) 0,
      100% 50%,
      calc(100% - 1.5em) 100%,
      0 100%
    );

    grid-row: 1;
  }

  .circle h3 {
    margin: 0;
    padding: 1em;
    padding-right: 2em;
  }

  .line {
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 4;
    height: 0.5em;
    width: 100%;
    border-radius: 1em;
    z-index: -1;

    background-image: linear-gradient(to right, var(--blue-3) 30%, var(--grey-5) 50%, var(--blue-3) 51%);
    background-size: 200%;

    animation-name: progress;
    animation-duration: 15s;
    animation-delay: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes progress {
    from { background-position-x: 110%; }
    100% { background-position-x: -50%; }
  }

  .animationWrapper {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 2;

    width: 100%;
  }
  
  a {
    color: var(--blue-3);

  }
</style>

<div class="section">
  <div class="background"></div>
  <div class="textContainer">
    <h2>Community</h2>
    <p class="subtitle">Made by real people<br>you can chat with</p>
    
  </div>
</div>

<!-- Made by real people you can talk to
  
  Picture of me
  
  Hi! I'm Steven, the founder of Lexoral.
  When doing research for their PhD, my partner would often get frustrated at how slow and tedious it was to transcribe their interview recordings.
  Automated transcription tools weren't accurate enough, and outsourcing wasn't an option for their confidential data.
  Manual transcription was the only option, but did it have to be so painful?
  To make their life easier, I built Lexoral - the fast way to create a high-quality transcript.
  
  I'm making Lexoral better every day, and would love to chat with you about how you think we can improve:
  
  - Contact us (email)
  - Slack
  - Twitch
  - Github (We're open source)
  
  We also have a blog where I talk about the technical challenges of building Lexoral. -->