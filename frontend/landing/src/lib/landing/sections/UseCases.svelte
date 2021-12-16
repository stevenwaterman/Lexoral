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
    z-index: 8;

    padding-top: 5em;
    margin-top: -4em;

    --background-angle-horiz-start: calc(var(--col-margin) + 20em);
    --background-angle-horiz-delta: calc(100vw - var(--background-angle-horiz-start));
    --background-angle-vert-delta: calc(var(--background-angle-horiz-delta) / 8);
    padding-bottom: 2em;

    filter: drop-shadow(0em 0.5em 0.5em var(--blue-2));
  }

  .background {
    z-index: -1;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;

    background-color: var(--grey-5);

    clip-path: polygon(
      0 0,
      var(--background-angle-horiz-start) 0,
      100% var(--background-angle-vert-delta),
      100% 100%,
      0 100%
    );
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
    gap: 4em;

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

  .panel p {
    margin-top: 1em;
    max-width: 30em;
    font-size: 1.25em;
  }
  
  .conclusion {
    font-weight: 700;
    text-align: center;
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

      <p>
        Transcription is an important step of any research involving recorded interviews, but nobody looks forward to it.
        It's fiddly and tedious, but you can't risk the safety of your participants by outsourcing the chore.
      </p>

      <p>
        Manual transcription can be frustrating, but the benefits are clear.
        Your transcripts are perfectly accurate, and spending all day transcribing means you're fully immersed and ready to analyse.
      </p>

      <p>
        We give you the best of both worlds - all the safety and immersion of manual transcription, without the hours of manual work.
        What's more, our credit-based pricing means it's much simpler to secure funding.
      </p>

      <p class="conclusion">
        Lexoral takes the frustration out of transcription, giving you the great results you're used to, faster.
      </p>
    </div>

    <div class="panel">
      <CreatorIcon/>

      <h3>Content Creation</h3>

      <p>
        Adding subtitles to your videos is essential when making them accessible to everyone.
        The automatic captions never work right, and they certainly don't understand all the weird things you get up to.
        You'd love to make them better, but it all seems like magic.
      </p>

      <p>
        Whatever you end up doing, it's needs to fit your existing workflows.
        You're tight on time, but want high-quality subtitles that keep all your viewers on the same page.
      </p>

      <p>
        Simply upload your video to the dashboard, and it'll be auto-transcribed within minutes.
        Open the transcript, fix any mistakes, and export subtitles!
        We use standard file formats, supported by YouTube, Twitter, Instagram, and many more.
      </p>

      <p class="conclusion">
        Lexoral makes sure your videos are for everyone - even people that lost their headphones behind the sofa.
      </p>
    </div>
  </div>
</div>
    