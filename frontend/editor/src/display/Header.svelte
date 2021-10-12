<script lang="ts">
  import { playingStore } from "../audio/audio";
</script>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom: 1px solid var(--form-border);
    margin-bottom: 10px;
    transition: background 0.5s;

    background-color: var(--grey-3);
    z-index: 1;
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