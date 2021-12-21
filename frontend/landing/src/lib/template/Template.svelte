<script lang="ts">
  import AnimatedGradient from "./AnimatedGradient.svelte";
  import Footer from "./Footer.svelte";
  import Nav from "./nav/Nav.svelte";

  export let title: string = "Lexoral";
</script>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;

    overflow-x: hidden;
    min-height: 100vh;
    --col-width: min(1200pt, 90vw);
    --col-margin: calc(50vw - var(--col-width) / 2);
  }

  :global(h1) {
    display: inline-block;
    white-space: nowrap;

    font-weight: 800;
    font-size: 3.5em;

    transform: scaleX(0.95);
    transform-origin: 0% 0%;
    margin: 0;

    filter: drop-shadow(1px 1px 1px var(--page-background));
  }

  .column {
    margin: auto;
    width: var(--col-width);
    flex-grow: 1;
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
	<title>{title}</title>
</svelte:head>

<div class="gradient">
  <AnimatedGradient/>
</div>

<div class="column">
  <Nav/>
  <slot/>
</div>

<Footer/>
