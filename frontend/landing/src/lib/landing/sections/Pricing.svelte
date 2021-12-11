<script lang="ts">
import LinkButton from "$lib/LinkButton.svelte";


</script>

<style>
  .section {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2em;
    padding-top: 1em;
    padding-bottom: 11em;
  }

  .background {
    position: absolute;
    width: 100vw;
    height: 100%;

    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;

    background-color: var(--grey-5);
    clip-path: polygon(
      0 0,
      calc(25vw + 10em) 0,
      100% 10em,
      100% 100%,
      calc(25vw + 10em) calc(100% - 10em),
      0 calc(100% - 10em)
    );
  }

  .bgLogo {
    position: absolute;
    right: -10%;
    bottom: 20%;
    width: 70em;
    transform: rotate(20deg) translate(50%, 50%);
    filter: brightness(0);
    opacity: 20%;
  }

  .textContainer {
    font-size: 1.25em;
  }

  .grid {
    display: grid;
    width: 80%;
    grid-template-columns: 1fr 0.5fr 0.5fr;
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

    /* filter: drop-shadow(0.05em 0.05em 0px var(--page-background)); */
    font-style: italic;
  }

  .subtitle {
    font-weight: 600;
    font-size: 1.75em;
    margin: 0;
    color: var(--text);

    /* filter: drop-shadow(1px 1px 0px var(--text)); */
  }

  .headlinePrice {
    font-weight: 900;
    font-size: 6em;
    margin-top: -0.1em;
    margin-bottom: -0.1em;
  }

  .headlinePriceDetail {
    margin-left: 1em;
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
  }

  .list li {
    padding-left: 1em;
    width: fit-content;
  }
  
  .grid :global(.LinkButton) {
    grid-column: 2;
    font-size: 1.2em;
  }
</style>

<div class="section">
  <div class="background">
    <img class="bgLogo" src="/assets/logo.svg"/>
  </div>

  <div class="textContainer">
    <h2>Pricing</h2>
    <p class="subtitle">Our pricing is simple,<br>so let's start there</p>

    <div class="grid">
      <div>
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
