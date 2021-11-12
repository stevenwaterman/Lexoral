<script lang="ts">
  import { playingStore } from "../audio/audioStatus";
</script>

<style>
  .header {
    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom: 1px solid var(--form-border);
    transition: background 0.5s;

    background-color: var(--grey-3);
    z-index: 2;

    grid-column: 1 / 3;
  }

  .playing {
    background-color: var(--yellow-3);
  }

  .logo {
    
  }

  img {
    width: auto;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
</style>

<div class="header" class:playing={$playingStore}>
  <a class="logo" href="/dashboard">
    <img src="/assets/smallBrand.svg" alt="logo"/>
  </a>
</div>