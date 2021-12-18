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
    max-width: 22em;
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
      <p>We're always looking to improve - let us know what's worrying you</p>
      <LinkButton link="#community">Contact us</LinkButton>
      <Arrow/>
    </div>
  </div>
</DiagonalSection>
