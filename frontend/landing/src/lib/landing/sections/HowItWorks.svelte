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
    z-index: 1;
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
    <h2>How it Works</h2>
    <p class="subtitle">Your perfect transcript<br>is just 3 steps away</p>

    <ol class="steps">
      <li>
        <div class="circle" style="grid-column: 1;">
          <h3>Upload</h3>
        </div>
        <p>
          Upload your audio or video files on the Lexoral dashboard.
          They're encrypted and stored securely in the cloud.
          We accept almost any file type you can think of.
        </p>

        <p style="padding-bottom: 1em;">
          With Lexoral, you always know your confidential data is safe.
          Our fully-automated platform means the only human involved is you.
          Read our <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/PRIVACY.md">Privacy&nbsp;Policy</a> - it's short and simple.
        </p>
      </li>

      <li>
        <div class="circle" style="grid-column: 2;">
          <h3>Process</h3>
        </div>
        <p>
          We transcribe your audio automatically using AI speech recognition.
          If it's not sure about a word, we store all the options for you to decide.
        </p>

        <p>
          By analysing the audio, we work out when each word was said.
          That  you can automatically add punctuation when there is a pause.
          It also aligns your subtitles with the video.
        </p>
      </li>
      
      <li>
        <div class="circle" style="grid-column: 3;">
          <h3>Refine</h3>
        </div>
        <p>
          It's easy to find and fix any mistakes that slipped through.
          Click on a word, and we'll play the audio in sync.
          Pick the right option from a dropdown, or type your own.
        </p>

        <p>
          We save changes to your account automatically, so you can edit your transcripts from anywhere.
          Alternatively, use your transcript with other programs by downloading it as plain-text or subtitles.
        </p>
      </li>

      <div class="line" aria-hidden></div>

      <div class="animationWrapper">
        <Animation/>
      </div>
    </ol>
  </div>
</div>