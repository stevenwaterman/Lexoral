<style>
  svg {
    height: 20em;
    width: 100%;
    background-color: darkslategrey;
    border-radius: 2em;
  }

  svg :global(*) {
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 10s;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .flight {
    stroke: gold;
    stroke-width: 2;
    stroke-dasharray: 10 100;
    stroke-dashoffset: 10;
    animation-name: flight;
    animation-timing-function: ease-in;
  }

  @keyframes flight {
    from { stroke-dashoffset: 10; }
    21%, to { stroke-dashoffset: -80; }
  }

  .explosion {
    fill: orangered;
    opacity: 0.8;
    filter: blur(1px);
    transform-origin: center;
    animation-name: explosion;
  }

  @keyframes explosion {
    from, 19% { transform: scale(0); }
    20% { transform: scale(1.5); }
    22% { transform: scale(0.5); }
    23% { transform: scale(0.8); }
    25% { transform: scale(0.2); }
    26% { transform: scale(0.4); }
    35%, to { transform: scale(0); }
  }

  .trail {
    stroke-width: 2;
    stroke-dasharray: 1 10 5 10 10 5 30 150;
    animation-name: trail;
    animation-timing-function: ease-out;
  }

  @keyframes trail {
    from, 20% { 
      stroke-width: 3;
      stroke-dashoffset: 80;
    }
    100%, to {
      stroke-width: 0.5;
      stroke-dashoffset: -150;
    }
  }
</style>

<svg viewBox="0 0 100 100">
  <path class="flight" d="M 0 100 C 35 92 49 76 50 50"/>
  <path class="trail" d="M 50 50 C 41 23 26 23 1 41" style="stroke: yellowgreen"/>
  <path class="trail" d="M 50 50 C 30 43 14 51 0 100" style="stroke: turquoise"/>
  <path class="trail" d="M 50 50 C 84 46 96 63 100 85" style="stroke: goldenrod"/>
  <path class="trail" d="M 50 50 C 71 31 95 43 100 63" style="stroke: mediumorchid"/>
  <path class="trail" d="M 50 50 C 61 -6 76 3 73 100" style="stroke: firebrick"/>
  <circle class="explosion" cx="50" cy="50" r="20"/>
</svg>
