<style>
  .body {
    fill: var(--blue-1);
  }

  .lens {
    fill: var(--blue-1);
  }

  .reel {
    fill: none;
    stroke: var(--blue-1);
  }

  .shineLines {
    fill: none;
    stroke-width: 0.5;
    stroke-dasharray: 0.4 3;
    stroke-dashoffset: 2.7;
    stroke: var(--yellow-1);
    stroke-linecap: round;
  }

  .shine {
    fill: var(--yellow-3);
    opacity: 0.5;
  }
</style>

<path class="shineLines" d="M 8 -2 C 12 -4 14 -6 17 -10 M 8 2 C 12 4 14 6 17 10 M 8 -1 C 11 -2 14 -3 18 -7 M 8 1 C 11 2 14 3 18 7 M 8 0 C 11 0 15 -1 20 -3 M 8 0 C 11 0 15 1 20 3"/>
<path class="shine" d="M 8 -2 C 12 -4 14 -6 17 -10 C 23 -3 23 3 17 10 C 14 6 12 4 8 2 Z"/>
<rect class="body" x="-5" y="-3" width="10" height="6" rx="0.5"/>
<path class="lens" d="M 5.5 -2 L 7.5 -4 C 8.5 -5 8.5 5 7.5 4 L 5.5 2 L 3.5 2 L 3.5 -2 Z"/>
<circle class="reel" cx="2" cy="-5.5" r="2.5"></circle>
<circle class="reel" cx="-3" cy="-5" r="2"></circle>