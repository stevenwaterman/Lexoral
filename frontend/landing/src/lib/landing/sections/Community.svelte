<script>

import Contact from "./Contact.svelte";

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
    padding-bottom: calc(14em);

    filter: drop-shadow(0em 0.5em 0.5em var(--blue-0));
    z-index: 7;
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
      calc(100% - var(--col-margin)) calc(100% - 10em),
      var(--col-margin) calc(100% - 10em),
      0 100%
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

  .portrait {
    border-radius: 50% 50% 10% 10%;
    height: 10em;
    max-height: 500px;
  }

  .pictureContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .personName {
    white-space: nowrap;
    font-weight: 700;
  }

  .job {
    white-space: nowrap;
    font-style: italic;
  }

  .grid {
    display: grid;
    grid-template-columns: 16em 1fr auto;
    gap: 4em;

    justify-items: center;
    align-items: center;
    margin-top: 1em;

    width: fit-content;
  }

  .stevenMessage {
    max-width: 30em;
  }

  .stevenMessage p {
    margin-top: 1em; 
  }

  .messageSubhead {
    font-weight: 700;
    color: var(--yellow-1);
  }

  .artieQuote {
    max-width: 25em;
    margin-left: 1em;
    padding-left: 1em;
    border-left: 0.25em solid var(--blue-2);
  }

  .quoteAttribution {
    text-align: right;
    font-style: italic;
  }
</style>

<div class="section">
  <div class="background"></div>
  <div class="textContainer">
    <h2>Community</h2>
    <p class="subtitle">Made by real people<br>you can chat with</p>
    
    <div class="grid">
      <div class="pictureContainer">
        <img class="portrait" src="/assets/steven.jpg" alt="Me, Steven Waterman"/>
        <p class="personName">Steven Waterman</p>
        <p class="job" style="margin-bottom: 1em;">Founder</p>

        <img class="portrait" src="/assets/goldie.jpg" alt="My cat Goldie" style="margin-top: 1em;"/>
        <p class="personName">Goldie</p>
        <p class="job">Background Noise</p>
      </div>
  
      <div class="stevenMessage">
        <p class="messageSubhead">Hi, I'm Steven - I like cats, robot wars, and forests.</p>

        <p>
          I've spent my career building software to make people's lives easier at a whole range of big companies.
          So when I saw an opportunity to use tech to help solve a problem close to me, I went for it:
        </p>

        <p class="messageSubhead">I started Lexoral to help with my partner's PhD research:</p>

        <div class="artieQuote">
          <p>
            I'm doing a longitudinal qualitative study, with 20+ hours of participant interviews.
          </p>

          <p>
            Transcription was always my least favourite bit: it was slow to do manually but none of the alternatives worked for me.
            They don't understand the terminology, wouldn't pass ethics, and locked you in to long-term subscriptions.
          </p>

          <p>
            Lexoral meant transcripts took an afternoon instead of a week.
            Only having to correct little mistakes meant I was immersed with my participants' stories from the start.
          </p>
        </div>

        <p class="quoteAttribution">
          Artie Waterman<br>PhD Student, Durham University
        </p>
      </div>

      <Contact/>
    </div>
  </div>
</div>
