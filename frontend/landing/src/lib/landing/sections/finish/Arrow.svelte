<style>
  svg {
    width: 0;
    height: 0;
    min-width: 100%;
    min-height: 100%;

    margin-left: -2em;
    grid-row: span 2;
    transform: translate(-20%,-20%);
  }

  .arrow {
    fill: transparent;
    stroke: var(--yellow-1);
    stroke-width: 4;

    stroke-linecap: round;
    stroke-linejoin: round;

    transform: translate(-10px, 25px) rotate(-15deg);
  }

  @media (max-width: 1599px) {
    svg {
      display: none;
    }
  }
</style>

<svg viewBox="0 0 100 100">
  <path 
    class="arrow"
    d="m 5 70 c 38 14 78 -25 82 -37 c 2 -11 12 -6 12 -6 l -4 -22 l -16 15 c 0 0 7 1 8 8"
  />
</svg>
