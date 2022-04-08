<script lang="ts">
  const handler: any = "Calendly.initPopupWidget({url: 'https://calendly.com/lexoral/office-hours'});return false;";
</script>

<style>
  .container {
    display: contents;
  }

  button {
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

  button:hover {
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

  button:hover .arrow {
    opacity: 100%;
    transition-delay: 0.2s;
    transition-duration: 0.3s;
  }
</style>

<div class="container">
  <!-- Calendly link widget begin -->
  <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
  <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
  <button onclick={handler}>Book a Slot&nbsp;<span class="arrow">&gt;</span></button>
  <!-- Calendly link widget end -->
</div>

