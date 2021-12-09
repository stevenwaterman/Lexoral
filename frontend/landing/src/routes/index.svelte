<script lang="ts">
  import AnimatedGradient from "$lib/landing/AnimatedGradient.svelte";
  import Hero from "$lib/landing/Title.svelte";
  import Demo from "$lib/landing/Demo.svelte";
</script>

<style>
	h1 {
		width: 100%;
	}

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
  }

  .logo {
    height: 100%;
    max-height: 3em;
  }

  .navList {
    list-style: none;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    height: 100%;
    margin: 0;
    padding: 0;

    color: var(--page-background);
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
      <img class="logo" src="assets/smallBrand_white.svg"/>
    </a>
    <ul class="navList">
      <li>How it Works</li>
      <li>Use Cases</li>
      <li>Company</li>
      <li>Pricing</li>
    </ul>
    <a class="button" href="/">Sign in</a>
  </nav>
  <Hero/>
  <Demo/>
</div>
