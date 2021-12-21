<script lang="ts">
  import LinkButton from "$lib/LinkButton.svelte";
  import DiagonalSection from "$lib/landing/sections/DiagonalSection.svelte";
  import PriceColumn from "./PriceColumn.svelte";
</script>

<style>
  .bgLogo {
    position: absolute;
    left: calc(110% - var(--col-margin));
    top: 70%;
    height: 160%;
    transform: translate(-52%, -48%) rotate(-5deg);
    filter: brightness(60%) blur(0.1em);
    opacity: 20%;

    transition: 1s opacity;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr auto;
    width: fit-content;
    gap: 4em;
    
    justify-items: center;
    align-items: flex-start;
  }

  .proseText {
    justify-self: flex-start;
    max-width: 26em;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto);
    gap: 1em;

    align-items: flex-start;
    justify-items: flex-start;
  }

  .grid :global(.LinkButton) {
    justify-self: flex-start;
  }

  :global(#pricing) {
    padding-top: 6em;
  }

  @media (max-width: 1599px) {
    .grid {
      grid-template-columns: 1fr auto;
    }

    .bgLogo {
      opacity: 0.1;
    }
  }

  @media (max-width: 1199px) {
    .bgLogo {
      opacity: 0;
    }
  }

  @media (max-width: 799px) {
    .grid {
      grid-template-columns: 1fr;
    }
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
      <p>We don't make you pay for things you don't need. Fill your account with credit and start uploading. Pay for what you use, and keep your transcripts forever.</p>
      <p>There are no hidden fees, so you know exactly what it will cost. 1 minute of footage costs 1 minute of credit - because that just makes sense.</p>
      <p>New accounts get 15 minutes of free credit so you can try Lexoral with your own audio and decide if it's right for you.</p>
      <LinkButton link="/dashboard/auth/signup">Try it for free</LinkButton>
    </div>

    <PriceColumn/>
  </div>
</DiagonalSection>
