<script lang="ts">
  import LinkButton from "$lib/components/LinkButton.svelte";
</script>

<style>
  .container {
    position: relative;
    grid-row: span 2;
  }

  .border {
    position: relative;
    width: 100%;

    height: 20em;
    border: 0.2em solid var(--form-border);
    border-radius: 1em;
    box-sizing: border-box;
    overflow: hidden;
    background-color: var(--page-background);

    animation-name: glow;
    animation-duration: 0.5s;
    animation-direction: alternate;
    animation-iteration-count: 10;
    animation-fill-mode: both;

    z-index: 11;

    box-shadow: 0em 0em 1em -0.2em var(--yellow-3);
  }

  .border:hover .cursor {
    opacity: 0;
  }

  .cursor {
    position: absolute;
    width: 5em;

    animation-name: cursorPosition;
    animation-duration: 5s;
    animation-delay: 3s;

    opacity: 100%;
    transition: 0.2s opacity;
  }

  .cursor img {
    animation-name: click;
    animation-duration: 5s;
    animation-delay: 3s;

    transform-origin: 0% 0%;
  }

  .cursor span {
    font-size: 2em;
    font-weight: 700;
    color: var(--yellow-1);
    margin-top: -2em;
    padding: 1em;
    background: radial-gradient(ellipse at center, var(--page-background) 20%, transparent 70%)
  }

  @keyframes cursorPosition {
    0% {
      left: -100%;
      top: 100%;
    }

    30% {
      left: 30%;
      top: 30%;
    }

    70% {
      left: 30%;
      top: 30%;
    }

    100% {
      left: -100%;
      top: 50%;
    }
  }

  @keyframes click {
    40% {
      transform: scale(1);
    }

    45% {
      transform: scale(0.75);
    }

    50% {
      transform: scale(1);
    }
  }

  .demo {
    padding-top: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;

    margin-top: -1.5em;
    margin-left: -1.5em;
    width: calc(100% + 2.5em);
    height: calc(100% + 1.5em);
  }

  .linkAnchor {
    position: absolute;
    bottom: -1.5em;
    right: -1em;
    transform: rotate(-6deg);
    z-index: 12;
  }

  .linkAnchor :global(.LinkButton) {
    font-size: 1.25em;
  }

  @media (max-width: 799px) {
    .container {
      grid-row: 3;
      display: grid;
      grid-template-rows: auto auto;
      gap: 1em;
      justify-items: center;
      align-items: center;
    }

    .border {
      height: 50vh;
    }

    .linkAnchor {
      position: static;
      left: unset;
      top: unset;
      transform: unset;
      z-index: 12;
    }
  }
</style>

<div class="container" data-nosnippet>
  <div class="border">
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe class="demo" src="https://lexoral.com/demo" tabindex="-1" />
    <div class="cursor">
      <img aria-hidden src="/assets/cursor.svg" alt="Example Cursor">
      <span>Try&nbsp;me!</span>
    </div>
  </div>
  <div class="linkAnchor">
    <LinkButton link="/demo" external>Try the full demo</LinkButton>
  </div>
</div>
