<script lang="ts">
  import Nav from "$lib/nav/Nav.svelte";
  import AnimatedGradient from "$lib/AnimatedGradient.svelte";
  import Pricing from "$lib/landing/sections/pricing/Pricing.svelte";
  import HowItWorks from "$lib/landing/sections/how/HowItWorks.svelte";
  import UseCases from "$lib/landing/sections/uses/UseCases.svelte";
  import Community from "$lib/landing/sections/community/Community.svelte";
  import FinalCta from "$lib/landing/sections/finish/FinalCTA.svelte";
  import Footer from "$lib/Footer.svelte";
  import Hero from "$lib/landing/hero/Hero.svelte";
</script>

<style>
  :global(body) {
    overflow-x: hidden;
    --col-width: min(1200pt, 90vw);
    --col-margin: calc(50vw - var(--col-width) / 2);
  }

  .column {
    margin: auto;
    width: var(--col-width);
  }

  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    --topHeight: 6em;
    height: calc(var(--topHeight) + 12.5vw);

    contain: strict;

    z-index: -1;

    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      0 var(--topHeight)
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
  <Nav/>
  
  <Hero/>
  
  <Pricing/>
  <HowItWorks/>
  <UseCases/>
  <Community/>
  <FinalCta/>
</div>

<Footer/>
