<script lang="ts">
  export let link: string;
  export let bgColor: string = "rgba(0, 0, 0, 0.15)";
  export let newTab: boolean = false;
</script>

<style>
  .button {
    position: relative;

    background-size: 250%;
    background-position-x: 100%;
    background-image: linear-gradient(to right, var(--green-1) 40%, var(--bgColor) 50%);

    font-size: 1.3em;
    color: var(--page-background);
    padding: 0.5em 1.5em;
    border-radius: 0.5em;

    transition-property: background-position-x, padding;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(.05,.28,.25,.98);

    text-decoration: none;
  }

  .button:hover {
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

  .button:hover .arrow {
    opacity: 100%;
    transition-delay: 0.2s;
    transition-duration: 0.3s;
  }
</style>

<a
  class="button"
  href={link}
  style={`--bgColor: ${bgColor}`}
  target={newTab ? "_blank" : "_self"}
>
  <slot/>&nbsp;<span class="arrow">&gt;</span>
</a>