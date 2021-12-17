<script lang="ts">
  export let id: string;
  export let title: string;

  export let subtitleTop: string;
  export let subtitleBottom: string | undefined = undefined;

  export let flatBottom: boolean = false;
</script>

<style>
  :global(body) {
    --background-angle-horiz-start: calc(var(--col-margin) + 20em);
    --background-angle-horiz-delta: calc(100vw - var(--background-angle-horiz-start));
    --background-angle-vert-delta: calc(var(--background-angle-horiz-delta) / 8);
  }

  section {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: var(--background-angle-vert-delta);
    margin-bottom: calc(0em - var(--background-angle-vert-delta));

    filter: drop-shadow(0em 0.5em 0.5em var(--blue-2));
    pointer-events: none;
  }

  .flatBottom {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  section:nth-child(2n+1) { color: var(--page-background); }
  section:nth-child(2n) .background { background-color: var(--grey-5); }
  section:nth-child(2n + 1) .background { background-color: var(--blue-0); }
  section:nth-of-type(0) { z-index: 10; }
  section:nth-of-type(1) { z-index: 9; }
  section:nth-of-type(2) { z-index: 8; }
  section:nth-of-type(3) { z-index: 7; }
  section:nth-of-type(4) { z-index: 6; }
  section:nth-of-type(5) { z-index: 5; }
  section:nth-of-type(6) { z-index: 4; }

  .textContainer {
    font-size: 1.25em;
    align-self: flex-start;

    padding-top: 3em;
    padding-bottom: 2em;

    width: 100%;

    pointer-events: initial;
  }

  h2 {
    font-weight: 600;
    font-size: 1.2em;
    display: inline-block;
    margin: 0;

    color: var(--yellow-1);
    font-style: italic;
  }

  p {
    font-weight: 600;
    font-size: 1.75em;
    margin: 0;
    margin-bottom: 1em;
  }

  .background {
    position: absolute;
    top: 0;
    z-index: -1;

    width: 100vw;
    height: 100%;
    overflow: hidden;

    clip-path: polygon(
      0 0,
      var(--background-angle-horiz-start) 0,
      100% var(--background-angle-vert-delta),
      100% 100%,
      var(--background-angle-horiz-start) calc(100% - var(--background-angle-vert-delta)),
      0 calc(100% - var(--background-angle-vert-delta))
    );
  }

  .flatBottom .background {
    clip-path: polygon(
      0 0,
      var(--background-angle-horiz-start) 0,
      100% var(--background-angle-vert-delta),
      100% 100%,
      0 100%
    );
  }
</style>

<section {id} class:flatBottom>
  <div class="background">
    <slot name="bg"/>
  </div>

  <div class="textContainer">
    <h2>{title}</h2>
    <p>
      {subtitleTop}
      {#if subtitleBottom !== undefined}
        <br>{subtitleBottom}
      {/if}
    </p>
    <slot/>
  </div>
</section>
