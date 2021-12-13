<style>
  g {
    transform: translate(100px, -35px) scale(0.8) rotate(20deg)
  }

  .arrow {
    fill: transparent;
    stroke: var(--yellow-1);
    stroke-width: 4;

    --perimiter: 200;
    stroke-dasharray: var(--perimiter);
    stroke-dashoffset: var(--perimiter);
    stroke-linecap: round;
    stroke-linejoin: round;

    animation-name: arrow;
  }

  @keyframes arrow {
    0%, 15% { stroke-dashoffset: var(--perimiter); }
    22%, 25% { stroke-dashoffset: 0; }
    28%, 100% { stroke-dashoffset: -200; }
  }
</style>

<g>
  <path 
    class="arrow"
    d="m 29,143 c 48,14 97,-25 102,-37 3,-11 15,-6 15,-6 L 142,78 122,93 c 0,0 8,1 10,8"
  />
</g>
