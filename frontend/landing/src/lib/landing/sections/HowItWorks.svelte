<script lang="ts">

</script>

<style>
  .section {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .background {
    z-index: -2;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;

    background-color: var(--blue-0); 
  }

  .textContainer {
    font-size: 1.25em;
    max-width: 65em;
    align-self: flex-start;
    margin-top: 4em;

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
    grid-template-rows: auto auto auto;
    grid-auto-flow: column;

    padding: 0;

    align-items: center;
    justify-items: center;
    gap: 1em;
  }

  .steps li {
    display: contents;
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--yellow-3);
    color: var(--text);

    clip-path: circle(60%);

    grid-column: 1;
  }

  .circle h3 {
    margin: 0;
    padding: 1em;
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
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes progress {
    from { background-position-x: 110%; }
    50% { background-position-x: -50%; }
    100% { background-position-x: -50%; }
  }
</style>

<div class="section">
  <div class="background"></div>
  <div class="textContainer">
    <h2>How it Works</h2>
    <p class="subtitle">Your perfect transcript<br>is just 3 steps away</p>

    <ol class="steps">
      <li>
        <div class="circle" style="grid-row: 1">
          <h3>Upload</h3>
        </div>
        <p>
          Upload your audio or video files on the Lexoral dashboard.
          We accept almost any file type you can think of.
          They'll be encrypted and stored securely in the cloud.
        </p>
        <p>
          Upload your audio or video files on the Lexoral dashboard.
          We accept almost any file type you can think of.
          They'll be encrypted and stored securely in the cloud.
        </p>
      </li>

      <li>
        <div class="circle" style="grid-column: 2; grid-row: 1;">
          <h3>Process</h3>
        </div>
        <p>
          We use Google's state-of-the-art speech recognition AI to transcribe your audio automatically.
          If it's not sure about a word, we'll store all the options and let you pick.
          Our fully-automated process means your confidential data stays confidential.
        </p>
        <p>
          We use Google's state-of-the-art speech recognition AI to transcribe your audio automatically.
          If it's not sure about a word, we'll store all the options and let you pick.
          Our fully-automated process means your confidential data stays confidential.
        </p>
      </li>
      
      <li>
        <div class="circle" style="grid-column: 3; grid-row: 1;">
          <h3>Refine</h3>
        </div>
        <p>
          Open your transcript and have a click around - we'll play the audio in sync.
          See a red underline?
          Click that word and choose from the options in the dropdown, or type something else.
          Export the finished transcript for use elsewhere, or just close the window - it autosaves!
        </p>
        <p>
          Open your transcript and have a click around - we'll play the audio in sync.
          See a red underline?
          Click that word and choose from the options in the dropdown, or type something else.
          Export the finished transcript for use elsewhere, or just close the window - it autosaves!
        </p>
      </li>

      <div class="line" aria-hidden></div>
    </ol>
  </div>
</div>