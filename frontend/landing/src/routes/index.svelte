<script lang="ts">
  import AnimatedGradient from "$lib/landing/AnimatedGradient.svelte";
  import Hero from "$lib/landing/Title.svelte";
  import Demo from "$lib/landing/Demo.svelte";
  import LinkButton from "$lib/LinkButton.svelte";
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: calc(4.5vh + 5em) auto;
    
    width: 100em;
    max-width: calc(100vw - 4em);

    margin: auto;
  }

  nav {
    grid-column: span 2;
    width: 100%;
    max-height: 3em;

    padding-top: 0.5em;

    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-content: center;
    align-items: center;

    color: var(--page-background);
  }

  .logo {
    height: 100%;
    max-height: 3em;
  }

  .navList {
    list-style: none;

    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: center;
    align-items: center;

    margin: auto;
    gap: 3em;

    padding: 0;

    font-size: 1.2em;
    font-weight: 500;
  }
</style>

<svelte:head>
	<title>Lexoral</title>
</svelte:head>

<AnimatedGradient/>

<div class="grid">
  <nav>
    <a href="/">
      <img class="logo" src="assets/smallBrand_white.svg" alt="The Lexoral logo"/>
    </a>
    <ul class="navList">
      <li>How it Works</li>
      <li>Use Cases</li>
      <li>Company</li>
      <li>Pricing</li>
    </ul>
    <LinkButton link="/dashboard">Sign in</LinkButton>
  </nav>
  <Hero/>
  <Demo/>
</div>
