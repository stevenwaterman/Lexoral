<script lang="ts">
  import Pricing from "$lib/landing/sections/pricing/Pricing.svelte";
  import HowItWorks from "$lib/landing/sections/how/HowItWorks.svelte";
  import UseCases from "$lib/landing/sections/uses/UseCases.svelte";
  import Community from "$lib/landing/sections/community/Community.svelte";
  import FinalCta from "$lib/landing/sections/finish/FinalCTA.svelte";
  import Hero from "$lib/landing/hero/Hero.svelte";
  import Template from "$lib/template/Template.svelte";
</script>

<Template title="Lexoral">
    <Hero/>
    <Pricing/>
    <Community/>
    <UseCases/>
    <HowItWorks/>
    <FinalCta/>
</Template>
