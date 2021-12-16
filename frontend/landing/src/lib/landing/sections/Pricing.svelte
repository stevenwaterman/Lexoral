<script lang="ts">
import LinkButton from "$lib/LinkButton.svelte";
import MarginVisual from "../MarginVisual.svelte";


</script>

<style>
  .section {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 0em;
    padding-top: 1em;

    --background-angle-horiz-start: calc(var(--col-margin) + 20em);
    --background-angle-horiz-delta: calc(100vw - var(--background-angle-horiz-start));
    --background-angle-vert-delta: calc(var(--background-angle-horiz-delta) / 8);
    padding-bottom: calc(var(--background-angle-vert-delta) + 1em);
    margin-bottom: calc(-1em - var(--background-angle-vert-delta));

    filter: drop-shadow(0em 0.5em 0.5em var(--blue-2));
    z-index: 10;
  }

  .background {
    position: absolute;
    top: 0;
    z-index: -1;

    width: 100vw;
    height: 100%;
    overflow: hidden;

    background-color: var(--grey-5);

    clip-path: polygon(
      0 0,
      var(--background-angle-horiz-start) 0,
      100% var(--background-angle-vert-delta),
      100% 100%,
      var(--background-angle-horiz-start) calc(100% - var(--background-angle-vert-delta)),
      0 calc(100% - var(--background-angle-vert-delta))
    );
  }

  .bgLogo {
    position: absolute;
    left: calc(110% - var(--col-margin));
    top: 70%;
    height: 200%;
    transform: translate(-50%, -50%) rotate(-10deg);
    filter: brightness(60%) blur(0.1em);
    opacity: 20%;
  }

  .textContainer {
    font-size: 1.25em;
    max-width: 65em;
    align-self: flex-start;
  }

  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1em 2em;
    
    margin-top: 1em;

    justify-items: center;
    align-items: center;
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
    color: var(--text);
  }

  .headlinePrice {
    font-weight: 900;
    font-size: 6em;
    margin-top: -0.1em;
    margin-bottom: -0.1em;
  }

  .headlinePriceDetail {
    font-weight: 600;
  }

  .headlineParagraph {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: var(--blue-1);
  }

  .list {
    list-style: "✓";
    padding-left: 1em;
    margin: 0;
    width: fit-content;
    margin: auto;
    font-size: 1.2em;
    color: var(--blue-1);
    font-weight: 600;
    white-space: nowrap;
  }

  .list li {
    padding-left: 1em;
    width: fit-content;
  }
  
  .grid :global(.LinkButton) {
    grid-column: 2;
    font-size: 1.2em;
  }

  .proseText {
    max-width: 26em;
  }
</style>

<div class="section">
  <div class="background">
    <img class="bgLogo" src="/assets/logo.svg" alt="The Lexoral logo" aria-hidden/>
  </div>

  <div class="textContainer">
    <h2>Pricing</h2>
    <p class="subtitle">Our pricing is simple,<br>so let's start there</p>

    <div class="grid">
      <div class="proseText">
        <p>Unlike other transcription services, we don't charge you for stuff you don't need. Buy as much credit as you need and use it whenever.</p>
        <p style="margin-top: 1em">Purchase as little as 5 minutes of credit, or save 20% on 10+ hours.</p>
        <p style="margin-top: 1em">New accounts get 15 minutes of free credit so you can try Lexoral with your own audio and decide if it's right for you.</p>
      </div>

      <div>
        <p class="headlineParagraph">
          <span class="headlinePrice">£6</span>
          <span class="headlinePriceDetail">per hour of transcript</span>
          <span class="headlinePriceDetail">£4.80 when buying 10+ hours</span>
        </p>
      </div>
      
      <ul class="list">
        <li>No Subscriptions</li>
        <li>No Locked Features</li>
        <li>No Hidden Fees</li>
      </ul>

      <LinkButton link="/dashboard/auth/signup">Try it for free</LinkButton>
    </div>
  </div>
</div>
