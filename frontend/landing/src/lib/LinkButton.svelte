<script lang="ts">
  export let link: string;
  export let newTab: boolean = false;
  export let external: boolean = false;
</script>

<style>
  .LinkButton {
    position: relative;

    background-size: 250%;
    background-position-x: 100%;
    background-image: linear-gradient(to right, var(--green-1) 40%, var(--bgColor, var(--blue-1)) 50%);

    color: var(--page-background);
    padding: 0.5em 1.5em;
    border-radius: 0.5em;

    transition-property: background-position-x, padding;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(.05,.28,.25,.98);

    text-decoration: none;
    white-space: nowrap;
  }

  .LinkButton:hover {
    background-position-x: 0%;
    padding-left: 1em;
    padding-right: 2em;
  }

  .arrow {
    text-decoration: none !important;
    opacity: 0;
    position: absolute;

    right: 1em;

    transition-property: opacity;
  }

  .LinkButton:hover .arrow {
    opacity: 100%;
    transition-delay: 0.2s;
    transition-duration: 0.3s;
  }
</style>

<a
  class="LinkButton"
  rel={external ? "external" : undefined}
  href={link}
  target={newTab ? "_blank" : "_self"}
>
  <slot/>&nbsp;<span class="arrow">&gt;</span>
</a>