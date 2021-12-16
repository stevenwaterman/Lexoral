<script lang="ts">
  import AnimatedGradient from "$lib/landing/AnimatedGradient.svelte";
  import Hero from "$lib/landing/sections/Title.svelte";
  import Demo from "$lib/landing/sections/Demo.svelte";
  import Pricing from "$lib/landing/sections/Pricing.svelte";
  import Nav from "$lib/landing/Nav.svelte";
  import HowItWorks from "$lib/landing/sections/HowItWorks.svelte";
  import UseCases from "$lib/landing/sections/UseCases.svelte";
import Community from "$lib/landing/sections/Community.svelte";
import FinalCta from "$lib/landing/sections/FinalCTA.svelte";
</script>

<style>
  :global(body) {
    overflow-x: hidden;
  }

  .column {
    margin: auto;
    --col-width: min(1200pt, calc(100vw - 4em));
    --col-margin: calc(50vw - var(--col-width) / 2);
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
</style>

<svelte:head>
	<title>Lexoral</title>
</svelte:head>

<AnimatedGradient/>

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


<footer>
- Lexoral logo
- Privacy Policy
- Contact details
</footer>
