<script lang="ts">
  import LinkButton from "$lib/LinkButton.svelte";
  import DiagonalSection from "$lib/landing/sections/DiagonalSection.svelte";
  import Arrow from "./Arrow.svelte";
</script>

<style>
  .bgLogo {
    position: absolute;
    left: calc(110% - var(--col-margin));
    top: 90%;
    height: 150%;
    transform: translate(-50%, -50%) rotate(-10deg);
    filter: brightness(60%) blur(0.1em);
    opacity: 20%;
  }

  .grid {
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 1fr;
    grid-template-rows: auto auto;
    grid-auto-flow: column;

    margin-top: 2em;
    margin-bottom: 2em;
    
    justify-items: center;
    align-items: center;
    text-align: center;

    gap: 1em 2em;
  }
  
  .grid :global(.LinkButton) {
    font-size: 1.2em;
  }

  .heading {
    color: var(--yellow-1);
    font-weight: 700;
    align-self: center;
  }

  .textCol1 {
    max-width: 22em;
    justify-self: flex-start;
    text-align: left;
  }

  .grid :global(.LinkButton:first-of-type) {
    justify-self: flex-start;
  }

  .grid :global(.LinkButton) {
    font-size: 1em;
  }

  .textCol2 {
    max-width: 15em;
  }

  .textCol3 {
    max-width: 15em;
  }
  
  @media (max-width: 1599px) {
    .grid {
      grid-template-columns: 3fr 2fr 2fr;
    }
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
    <p class="textCol1">
      Get started instantly with 15 minutes of free transcription.
      No restrictions, no locked features, and no card needed - just sign up and go!
    </p>
    <LinkButton link="/dashboard/auth/signup">Sign up</LinkButton>

    <p class="textCol2"><span class="heading">After the trial?</span><br>Our simple pricing means you only pay for what you use</p>
    <LinkButton link="#pricing">Pricing</LinkButton>
  
    <p class="textCol3"><span class="heading">Still not convinced?</span><br>We're always looking to improve - let us know what's worrying you</p>
    <LinkButton link="#community">Contact us</LinkButton>

    <Arrow/>
  </div>
</DiagonalSection>
