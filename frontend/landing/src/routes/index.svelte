<script lang="ts">
  import Nav from "$lib/Nav.svelte";
  import AnimatedGradient from "$lib/AnimatedGradient.svelte";
  import Hero from "$lib/landing/title/Title.svelte";
  import Demo from "$lib/landing/title/Demo.svelte";
  import Pricing from "$lib/landing/sections/pricing/Pricing.svelte";
  import HowItWorks from "$lib/landing/sections/how/HowItWorks.svelte";
  import UseCases from "$lib/landing/sections/uses/UseCases.svelte";
  import Community from "$lib/landing/sections/community/Community.svelte";
  import FinalCta from "$lib/landing/sections/finish/FinalCTA.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<style>
  :global(body) {
    overflow-x: hidden;
    --col-width: min(1200pt, calc(100vw - 4em));
    --col-margin: calc(50vw - var(--col-width) / 2);
  }

  .column {
    margin: auto;
    width: var(--col-width);
  }

  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: max(5em, calc(8vh)) auto;
    
    margin: auto;
    margin-bottom: -1em;
  }
  
  .grid :global(nav) {
    grid-column: span 2;
  }

  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    height: max(20em, 30vh);

    contain: strict;

    z-index: -1;

    clip-path: polygon(
      -0.5px -0.5px,
      calc(100% + 0.5px) -0.5px,
      calc(100% + 0.5px) calc(100% + 0.5px),
      -0.5px 5em
    );
  }
</style>

<svelte:head>
	<title>Lexoral</title>
</svelte:head>

<div class="gradient">
  <AnimatedGradient/>
</div>

<div class="column">
  <div class="grid">
    <Nav/>
    <Hero/>
    <Demo/>
  </div>
  
  <Pricing/>
  <HowItWorks/>
  <UseCases/>
  <Community/>
  <FinalCta/>
</div>

<Footer/>
