<style>
  path {
    animation-name: animation;
    stroke: var(--yellow-1);
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: 250;
  }

  @keyframes animation {
    0%, 90%, 100% {
      transform: translateX(190px) translateY(10px);
      stroke-dashoffset: 250;
      fill: transparent;
    }

    12% {
      stroke-dashoffset: 250;
    }

    14%, 89% {
      stroke-dashoffset: 0;
    }

    20% {
      fill: transparent;
    }

    22%, 89% {
      fill: var(--yellow-3);
    }

    23% {
      transform: translateX(190px) translateY(10px);
    }

    28%, 35% {
      transform: translateX(400px) translateY(10px);
    }

    55%, 89% {
      transform: translateX(1200px) translateY(10px);
    }
  }
</style>

<defs>
  <linearGradient id="cloudFillup" gradientTransform="rotate(90)">
    <stop offset="5%"  stop-color="var(--green" />
    <stop offset="95%" stop-color="red" />
  </linearGradient>
</defs>

<path d="M 79,51 H 16 c -8,0 -14,-5 -14,-13 0,-6 4,-11 11,-12 -0,-1 -0,-2 -0,-3 0,-10 10,-19 22,-19 9,0 17,5 21,13 2,-1 6,-3 10,-3 8,0 16,5 16,13 6,1 11,6 11,12 0,7 -6,12 -14,12 z">

</path>