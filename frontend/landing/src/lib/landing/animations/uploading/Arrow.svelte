<style>
  path {
    animation-name: animation;
    fill: transparent;
    stroke: var(--yellow-1);
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: 200;
    transform: translateX(80px);
  }

  @keyframes animation {
    0%, 90%, 100% {
      stroke-dashoffset: 200;
    }

    10% {
      stroke-dashoffset: 200;
    }

    12%, 19% {
      stroke-dashoffset: 0;
    }

    23%, 89% {
      stroke-dashoffset: -200;
    }
  }
</style>

<path d="m 29,143 c 48,14 97,-25 102,-37 3,-11 15,-6 15,-6 L 142,78 122,93 c 0,0 8,1 10,8"/>
