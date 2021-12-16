<script lang="ts">
import LinkButton from "$lib/LinkButton.svelte";


</script>

<style>
  .section {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: -10em;
    padding-top: 6em;
    padding-bottom: 3em;

    z-index: 6;
  }

  .background {
    position: absolute;
    top: 0;
    z-index: -1;

    width: 100vw;
    height: 100%;
    overflow: hidden;

    background-color: var(--grey-5);
    pointer-events: none;
  }

  .textContainer {
    font-size: 1.25em;
    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3em 2em;
    
    padding-top: 4em;
    padding-bottom: 2em;

    justify-items: center;
    align-items: center;

    border-bottom: 0.45em solid var(--yellow-1);
  }

  h2 {
    font-weight: 600;
    display: inline-block;
    transform: scaleX(0.95);
    transform-origin: 0% 0%;
    margin: 0;
    font-size: 3em;
    border-bottom: 0.15em solid var(--yellow-1);
    padding-left: 2em;
    padding-right: 2em;
  }

  .list {
    list-style: "✓";
    padding-left: 1em;
    margin: 0;
    width: fit-content;
    margin: auto;
    font-size: 1.2em;
    color: var(--blue-1);
    font-weight: 600;
    white-space: nowrap;
  }

  .list li {
    padding-left: 1em;
    width: fit-content;
  }
  
  .buttonContainer {
    font-size: 1.5em;
    grid-column: span 2;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttonContainer p {
    font-size: 0.6em;
    font-style: italic;
  }

  .tagline {
    font-weight: 600;
    font-size: 1.2em;
  }

  .left {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: auto auto auto;
    gap: 1em;

    align-items: center;
    justify-items: center;

    max-width: 25em;
    justify-self: flex-start;
  }

  .left p {
    text-align: center;
  }
</style>

<div class="section">
  <div class="background"/>
  <div class="textContainer">
    <h2>Try Lexoral for free</h2>
    
    <div class="grid">
      <div class="left">
        <p>We're confident that you'll love Lexoral, but you can't trust everything you read on the internet.</p>
        <p>That's why we're giving all new accounts 15 minutes of free credit, so you can try it with your own footage.</p>
        <p class="tagline">Experience the future of transcription today.</p>
      </div>

      <ul class="list">
        <li>100% Accuracy</li>
        <li>Safe for confidential data</li>
        <li>Accessible anywhere</li>
        <li>No Subscriptions</li>
      </ul>
    
      <div class="buttonContainer">
        <LinkButton link="/dashboard/auth/signup">Sign up</LinkButton>
        <p>Free forever, no card needed</p>
      </div>
    </div>

  </div>
</div>
