<script lang="ts">
  import LinkButton from "$lib/components/LinkButton.svelte";
  import DiagonalSection from "$lib/landing/sections/DiagonalSection.svelte";
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 3fr 2fr 2fr;
    grid-template-rows: auto auto;
    grid-auto-flow: column;

    margin-top: 2em;
    margin-bottom: 2em;
    
    justify-items: center;
    align-items: center;
    text-align: center;

    gap: 1em 2em;
    grid-column: span 2;
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

  @media (max-width: 1199px) {
    .grid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto auto;
    }

    .textCol1 {
      grid-column: span 2;
    }

    .grid :global(.LinkButton:first-of-type) {
      grid-column: span 2;
      margin-bottom: 4em;
    }
  }

  @media (max-width: 799px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, auto);
      justify-items: flex-start;
      align-items: flex-start;
      text-align: left;
    }

    .textCol1 {
      grid-column: unset;
    }

    .grid :global(.LinkButton) {
      grid-column: unset;
      margin-bottom: 4em;
    }
  }

  :global(#blog-cta) {
    padding-top: 12em;
  }
</style>

<DiagonalSection
  id="blog-cta"
  title="Get Started"
  subtitleTop="Create your account"
  subtitleBottom="and try Lexoral for free"
  flatBottom
>
  <div class="grid">
    <div class="textCol1">
      <p>
        Experience pain-free transcription today.
      </p>

      <p>
        Our AI transcribes your data automatically, asking for help where needed.
        All the quality of doing it by hand, in a fraction of the time.
      </p>

      <p>
        15 minutes of credit for all new users
      </p>
    </div>
    
    <LinkButton link="/dashboard/auth/signup" external>Sign up free</LinkButton>

    <div class="textCol2">
      <p class="heading">After the trial?</p>
      <p>Our pricing is simple:<br>£6 per hour of transcription</p>
      <p>Only pay for what you use</p>
    </div>
    <LinkButton link="/#pricing">Pricing</LinkButton>
  
    <div class="textCol3">
      <p class="heading">Want to know more?</p>
      <p>Learn how we can help make your transcription easy</p>
      <p>Visit our home page for more</p>
    </div>
    <LinkButton link="/">Learn more</LinkButton>
  </div>
</DiagonalSection>
