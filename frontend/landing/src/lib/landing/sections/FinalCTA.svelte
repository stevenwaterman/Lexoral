<script lang="ts">
import LinkButton from "$lib/LinkButton.svelte";
import MarginVisual from "../MarginVisual.svelte";


</script>

<style>
  .section {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: -10em;
    padding-top: 4em;
    padding-bottom: 4em;

    filter: drop-shadow(0em 0.5em 0.5em var(--blue-2));
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
  }

  .textContainer {
    font-size: 1.25em;
    max-width: 65em;
    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 2em;
    
    margin-top: 1em;

    width: 100%;
    justify-items: center;
    align-items: center;
  }

  h2 {
    font-weight: 600;
    display: inline-block;
    transform: scaleX(0.95);
    transform-origin: 0% 0%;
    margin: 0;
    font-size: 2em;
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
  
  .grid :global(.LinkButton) {
    grid-column: 2;
    font-size: 1.5em;
  }
</style>

<div class="section">
  <div class="background"/>
  <div class="textContainer">
    <h2>Try Lexoral for free</h2>
    
    <div class="grid">

      <p>
        Experience the future of transcription today.
        All new accounts get 15 minutes of free credit, so you can try Lexoral with your own audio.
        
      </p>

      <div> 
        <LinkButton link="/dashboard/auth/signup">Sign up</LinkButton>
      </div>

      <ul class="list">
        <li>100% accurate transcripts</li>
        <li>Safe for confidential data</li>
        <li>Accessible anywhere</li>
        <li>No Subscriptions</li>
      </ul>
    </div>
  </div>
</div>
