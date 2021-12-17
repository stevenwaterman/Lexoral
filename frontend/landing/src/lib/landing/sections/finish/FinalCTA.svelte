<script lang="ts">
  import LinkButton from "$lib/LinkButton.svelte";
  import DiagonalSection from "$lib/landing/sections/DiagonalSection.svelte";
  import Arrow from "./Arrow.svelte";
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
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2em;
    width: 100%;

    margin-top: 2em;
    margin-bottom: 2em;
    
    justify-items: flex-start;
    align-items: flex-start;
  }
  
  .grid :global(.LinkButton) {
    grid-column: 2;
    font-size: 1.2em;
  }

  .proseText {
    max-width: 26em;
  }

  .column {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .center {
    align-items: center;
    text-align: center;
  }

  .grid :global(.LinkButton) {
    font-size: 1em;
    margin-top: 1em;
  }

  .heading {
    color: var(--yellow-1);
    font-weight: 700;
    align-self: center;
  }
</style>

<DiagonalSection
  id="get-started"
  title="Get Started"
  subtitleTop="Create your account"
  subtitleBottom="and try it risk-free"
  flatBottom
>
  <img slot="bg" class="bgLogo" src="/assets/logo.svg" alt="The Lexoral logo" aria-hidden/>
  <div class="grid">
    <div class="column">
      <p class="proseText">
        Get started instantly with 15 minutes of free transcription.
        No restrictions, no locked features, and no card needed - just sign up and go!
      </p>

      <LinkButton link="/dashboard/auth/signup">Sign up</LinkButton>
    </div>

    <div class="column center" style="max-width: 14em">
      <p class="heading">After the trial?</p>
      <p>Our simple pricing means you only pay for what you use</p>
      <LinkButton link="#pricing">Pricing</LinkButton>
    </div>
    
    <div class="column center" style="max-width: 15em">
      <p class="heading">Still not convinced?</p>
      <p>Get in touch and let's chat - we're always looking to improve</p>
      <LinkButton link="#community">Contact us</LinkButton>
      <Arrow/>
    </div>
  </div>
</DiagonalSection>


<!-- <script lang="ts">
  import LinkButton from "$lib/LinkButton.svelte";
  import AnimatedGradient from "$lib/AnimatedGradient.svelte";
  import DiagonalSection from "../DiagonalSection.svelte";
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1em 2em;
    
    justify-items: center;
    align-items: center;
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
  
  .buttonContainer {
    font-size: 1.5em;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttonContainer p {
    font-size: 0.6em;
    font-style: italic;
  }

  .tagline {
    font-weight: 600;
    font-size: 1.2em;
  }

</style>

<DiagonalSection
  id="get-started"
  title="Get Started"
  subtitleTop="Create your account"
  subtitleBottom="to try it for real"
  flatBottom
>

  <div class="grid">
    <div class="left">
      <p>We're confident that you'll love Lexoral, but you can't trust everything you read on the internet.</p>
      <p>That's why we're giving all new accounts 15 minutes of free credit, so you can try it with your own footage.</p>
      <p class="tagline">Experience the future of transcription today.</p>
    </div>

    
  
    <div class="buttonContainer">
      <LinkButton link="/dashboard/auth/signup">Sign up</LinkButton>
      <p>Free forever, no card needed</p>
    </div>
  </div>
</DiagonalSection> -->
