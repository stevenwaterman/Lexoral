<script lang="ts">
  import { scale } from "svelte/transition";
  
  export let text: string = "Loading";
</script>

<style>
  .lds-dual-ring {
    display: inline-block;
    position: relative;
    width: 10em;
    height: 10em;
    padding: 0;
    margin: 0;
  }

  .lds-dual-ring:after {
    content: " ";

    position: absolute;
    top: 15%;
    left: 15%;
    right: 15%;
    bottom: 15%;

    border-radius: 50%;
    border: 0.25em solid var(--blue-1);
    border-color: var(--blue-1) transparent var(--blue-1) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  span {
    z-index: 1;
    font-weight: bold;
  }

  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
  }
</style>

<div class="col">
  <div class="lds-dual-ring" in:scale></div>
  <span>{text}</span>
</div>