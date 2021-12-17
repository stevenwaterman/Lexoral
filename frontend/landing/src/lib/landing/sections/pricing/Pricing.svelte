<script lang="ts">
  import LinkButton from "$lib/LinkButton.svelte";
  import DiagonalSection from "$lib/landing/sections/DiagonalSection.svelte";
</script>

<style>
  .bgLogo {
    position: absolute;
    left: calc(110% - var(--col-margin));
    top: 70%;
    height: 200%;
    transform: translate(-50%, -50%) rotate(-10deg);
    filter: brightness(60%) blur(0.1em);
    opacity: 20%;
  }

  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1em 2em;
    width: fit-content;
    
    justify-items: center;
    align-items: center;
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

<DiagonalSection
  id="pricing"
  title="Pricing"
  subtitleTop="Our pricing is simple,"
  subtitleBottom="so let's start there"
>
  <img slot="bg" class="bgLogo" src="/assets/logo.svg" alt="The Lexoral logo" aria-hidden/>
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
</DiagonalSection>
