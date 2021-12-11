<script lang="ts">

</script>

<style>
  .section {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 5em;
    padding-top: 1em;
    padding-bottom: 1em;

    

    overflow: visible;
  }

  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    background-color: var(--grey-5);
    clip-path: polygon(
      0 0,
      calc(25vw + 20em) 0,
      100% 50%,
      100% 100%,
      0 100%
    );
  }

  .textContainer {
    width: 100em;
    max-width: calc(100vw - 4em);
  }

  .grid {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 0.5fr 0.75fr 0.25fr;
    gap: 2em;
    margin-top: -1em;

    justify-content: center;
    align-items: center;
  }

  h2 {
    font-weight: 600;
    font-size: 1.2em;
    display: inline-block;
    transform: scaleX(0.95);
    transform-origin: 0% 0%;
    margin: 0;

    color: var(--yellow-1);

    /* filter: drop-shadow(0.05em 0.05em 0px var(--page-background)); */
    font-style: italic;
  }

  .subtitle {
    font-weight: 600;
    font-size: 1.75em;
    margin: 0;
    color: var(--text);

    /* filter: drop-shadow(1px 1px 0px var(--text)); */
  }

  .headlinePrice {
    font-weight: 900;
    font-size: 7em;
  }

  .headlinePriceDetail {
    margin-left: 1em;
    font-weight: 600;
  }

  .headlineParagraph {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: var(--blue-1);
    margin-bottom: 2em;
  }

  .list {
    list-style: "✓";
    padding-left: 1em;
    margin: 0;
    font-size: 1.25em;
    width: fit-content;
    margin: auto;
  }

  .list li {
    padding-left: 1em;
    width: fit-content;
  }
</style>

<div class="section">
  <div class="background"/>
  <div class="textContainer">
    <h2>Pricing</h2>
    <p class="subtitle">Our pricing is simple,<br>so let's start there</p>

    <div class="grid">
      <div>
        <p style="margin: 1em 0">Unlike other transcription services, we don't charge you for stuff you don't need. Buy as much credit as you need and use it whenever.</p>
        <p>Purchase as little as 5 minutes of credit, or get 20% off when buying over 10 hours.</p>
      </div>

      <div>
        <p class="headlineParagraph">
          <span class="headlinePrice">£6</span>
          <span class="headlinePriceDetail">per hour of transcript</span>
        </p>
      </div>
      
      <ul class="list">
        <li>No Subscriptions</li>
        <li>No Locked Features</li>
        <li>No Hidden Fees</li>
      </ul>
    </div>
<!-- 
    <div>
      
      <ul>
        <li>Min. order 5 minutes</li>
        <li>20% off when buying 10+ hours</li>
      </ul>
    </div>

    <ul>
      <li>No subscriptions</li>
      <li>No locked features</li>
      <li>No hidden fees</li>
      <li>Just pay as you go</li>
    </ul>

    New accounts get 15 minutes of free credit
    No card needed, no risk taken
    
    Sign up now! -->
  </div>
</div>
