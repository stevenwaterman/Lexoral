<style>
  g {
    transform: translate(10px, 0px) scale(1) rotate(0);
    animation-name: g;
  }

  @keyframes g {
    0%, 20% { transform: translate(10px, 10px) scale(0.9) rotate(0); }
    30%, 65% { transform: translate(180px, 10px) scale(0.5) rotate(-20deg); }
    70%, 100% { transform: translate(-200px, -200px) scale(1) rotate(-20deg); }
  }

  .page {
    fill: transparent;
    stroke: var(--yellow-1);
    stroke-width: 2px;
    stroke-linejoin: round;
    stroke-linecap: round;

    --perimiter: 550;
    stroke-dasharray: var(--perimiter);
    stroke-dashoffset: var(--perimiter);

    animation-name: page;
  }

  @keyframes page {
    0% {}
    10% { stroke-dashoffset: 0; }
    12% { fill: transparent; }
    14% { fill: var(--page-background); }
    to {
      stroke-dashoffset: 0;
      fill: var(--page-background);
    }
  }



  .circle {
    fill: transparent;

    stroke: var(--yellow-1);
    stroke-width: 3px;
    stroke-linejoin: round;
    stroke-linecap: round;

    --perimiter: 230;
    stroke-dasharray: var(--perimiter);
    stroke-dashoffset: var(--perimiter);

    animation-name: circle;
  }

  @keyframes circle {
    4% { stroke-dashoffset: var(--perimiter); }
    10% { stroke-dashoffset: 0; }
    to {
      stroke-dashoffset: 0;
    }
  }



  .triangle {
    fill: transparent;

    stroke: var(--yellow-1);
    stroke-width: 4px;
    stroke-linejoin: round;
    stroke-linecap: round;

    --perimiter: 80;
    stroke-dasharray: var(--perimiter);
    stroke-dashoffset: var(--perimiter);

    animation-name: triangle;
  }

  @keyframes triangle {
    12% { stroke-dashoffset: var(--perimiter); }
    14% { stroke-dashoffset: 0; }
    to {
      stroke-dashoffset: 0;
    }
  }



  .videoText {
    fill: transparent;

    stroke: var(--yellow-1);
    stroke-width: 0.7px;
    stroke-linejoin: round;
    stroke-linecap: round;

    --perimiter: 55;
    stroke-dasharray: var(--perimiter);
    stroke-dashoffset: var(--perimiter);

    font-size: 12px;
    animation-name: videoText;
  }

  @keyframes videoText {
    6% { stroke-dashoffset: var(--perimiter); }
    10% { stroke-dashoffset: 0; }
    12% { fill: transparent; }
    14% { fill: var(--yellow-1); }
    to {
      fill: var(--yellow-1);
      stroke-dashoffset: 0;
    }
  }
</style>

<g>
  <polygon
    class="page" 
    points="
      0 0,
      50 0,
      65 15,
      50 15,
      50 0,
      65 15,
      65 100,
      0 100"
   
  />

  <circle class="circle" cx="32.5" cy="50" r="25"/>

  <polygon
    class="triangle" 
    points="
      27.5 40,
      27.5 60,
      42.5 50"
   
  />

  <text
    class="videoText"
    x={4}
    y={95}
    text-anchor="start"
   
  >
   Your Video
  </text>
</g>

