<style>
  g {
    animation-name: g;
  }

  @keyframes g {
    0%, 65% { transform: translate(190px, 0px) scale(1.2); }
    70%, 100% { transform: translate(-200px, -200px) scale(2); }
  }

  .cloud {
    fill: transparent;
    stroke: var(--yellow-1);
    stroke-width: 2;
    stroke-linecap: round;

    --perimiter: 250;
    stroke-dasharray: var(--perimiter);
    stroke-dashoffset: var(--perimiter);

    animation-name: cloud;
  }

  @keyframes cloud {
    0% { stroke-dashoffset: var(--perimiter); }
    10% { stroke-dashoffset: 0; }
    12% { fill: transparent; }
    14% { fill: var(--yellow-3); }
    100% {
      stroke-dashoffset: 0;
      fill: var(--yellow-3);
    }
  }
    
</style>

<g>
  <path 
    class="cloud"
    d="M 79,51 H 16 c -8,0 -14,-5 -14,-13 0,-6 4,-11 11,-12 -0,-1 -0,-2 -0,-3 0,-10 10,-19 22,-19 9,0 17,5 21,13 2,-1 6,-3 10,-3 8,0 16,5 16,13 6,1 11,6 11,12 0,7 -6,12 -14,12 z"
  />
</g>
