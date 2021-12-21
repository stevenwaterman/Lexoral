<script lang="ts">
  import DiagonalSection from "$lib/landing/sections/DiagonalSection.svelte";
  import Animation from "$lib/landing/sections/how/animation/Animation.svelte";
</script>

<style>
  .steps {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    grid-auto-flow: column;

    align-items: center;
    justify-items: center;
    gap: 1em 1em;

    margin: 0;
    padding: 0;
  }

  .steps li {
    display: contents;
  }

  .steps li p {
    align-self: flex-start;
    max-width: 22em
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

  li:nth-of-type(1) .circle { grid-column: 1; }
  li:nth-of-type(2) .circle { grid-column: 2; }
  li:nth-of-type(3) .circle { grid-column: 3; }

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
    animation-delay: 6s;
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

  @media (max-width: 799px) {
    .steps {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
      justify-items: flex-start;
    }

    .animationWrapper {
      display: none;
    }

    .line {
      display: none;
    }

    .circle {
      margin-top: 2em;
      grid-column: unset !important;
      grid-row: unset !important;
    }
  }
</style>

<DiagonalSection
  id="how-it-works"
  title="How it Works"
  subtitleTop="Your perfect transcript"
  subtitleBottom="is just 3 steps away" 
>
  <ol class="steps">
    <li>
      <div class="circle">
        <h3>Upload</h3>
      </div>
      <p>
        Upload your audio or video files on the Lexoral dashboard.
        They're encrypted and stored safely in the cloud.
        We accept almost any file type you can think of.
      </p>

      <p>
        With Lexoral, you always know your confidential data is safe.
        Our fully-automated platform means the only human involved is you.
        Check our <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/PRIVACY.md">Privacy&nbsp;Policy</a> - it's short and simple.
      </p>
    </li>

    <li>
      <div class="circle">
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
      <div class="circle">
        <h3>Refine</h3>
      </div>
      <p>
        It's easy to find and fix any mistakes that slipped through.
        Click on a word, and we'll play the audio in sync.
        Pick the right option from a dropdown, or type your own.
      </p>

      <p>
        We save changes to your account automatically, so you can edit your transcripts from anywhere.
        Alternatively, use your transcript with other programs by exporting it as plain-text or subtitles.
      </p>
    </li>

    <div class="line" aria-hidden></div>

    <div class="animationWrapper">
      <Animation/>
    </div>
  </ol>
</DiagonalSection>
