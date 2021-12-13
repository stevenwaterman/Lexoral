<style>
  g {
    transform: translate(350px, -30px) scale(0.8)
  }

  path {
    fill: transparent;
    stroke: var(--yellow-1);
    stroke-width: 6;

    --perimiter: 200;
    stroke-dasharray: var(--perimiter);
    stroke-dashoffset: var(--perimiter);
    stroke-linecap: round;
    stroke-linejoin: round;

    animation-name: arrow;
  }

  @keyframes arrow {
    0% { stroke-dashoffset: var(--perimiter); }
    10% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 0; }
  }
</style>

<g>
  <path 
    class="arrow"
    d="m 29,143 c 48,14 97,-25 102,-37 3,-11 15,-6 15,-6 L 142,78 122,93 c 0,0 8,1 10,8"
  />
</g>
