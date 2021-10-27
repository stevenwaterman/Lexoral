<script lang="ts">
  import { playingStore } from "../audio/audioStatus";
</script>

<style>
  .header {
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
    max-width:100%;
    max-height:40px;
    width: auto;
    height: auto;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<div class="header" class:playing={$playingStore}>
  <img class="logo" src="/assets/smallBrand.svg" alt="logo"/>
</div>