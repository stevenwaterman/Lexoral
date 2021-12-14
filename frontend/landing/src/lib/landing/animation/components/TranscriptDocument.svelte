<style>
  g {
    animation-name: g
  }

  @keyframes g {
    0%, 65% {
      transform: translate(600px, 0px) scale(0.9);
    }
    70%, 95% {
      transform: translate(650px, -60px) scale(3);
    }
    100% {
      transform: translate(1000px, -60px) scale(3);
    }
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
    30% { stroke-dashoffset: var(--perimiter); }
    35% { stroke-dashoffset: 0; }
    37% { fill: transparent; }
    39% { fill: var(--page-background); }
    to {
      stroke-dashoffset: 0;
      fill: var(--page-background);
    }
  }



  .transcriptLine {
    stroke: var(--yellow-1);
    stroke-width: 2px;
    stroke-linejoin: round;
    stroke-linecap: round;

    --perimiter: 70;
    stroke-dasharray: var(--perimiter);
    stroke-dashoffset: var(--perimiter);
  }

  .line0 { animation-name: line0; }
  .line1 { animation-name: line1; }
  .line2 { animation-name: line2; }
  .line3 { animation-name: line3; }
  .line4 { animation-name: line4; }
  .line5 { animation-name: line5; }
  .line6 { animation-name: line6; }

  @keyframes line0 {
    52% { stroke-dashoffset: var(--perimiter); }
    57%, to { stroke-dashoffset: 0; }
  }
  @keyframes line1 {
    53% { stroke-dashoffset: var(--perimiter); }
    57.5%, to { stroke-dashoffset: 0; }
  }
  @keyframes line2 {
    54% { stroke-dashoffset: var(--perimiter); }
    58%, to { stroke-dashoffset: 0; }
  }
  @keyframes line3 {
    55% { stroke-dashoffset: var(--perimiter); }
    58.5%, to { stroke-dashoffset: 0; }
  }
  @keyframes line4 {
    56% { stroke-dashoffset: var(--perimiter); }
    59%, to { stroke-dashoffset: 0; }
  }
  @keyframes line5 {
    57% { stroke-dashoffset: var(--perimiter); }
    59.5%, to { stroke-dashoffset: 0; }
  }
  @keyframes line6 {
    58% { stroke-dashoffset: var(--perimiter); }
    60%, to { stroke-dashoffset: 0; }
  }



  .correctionLine {
    stroke: var(--needs-fix);
    stroke-width: 2px;
    stroke-linejoin: round;
    stroke-linecap: round;

    --perimiter: 30;
    stroke-dasharray: var(--perimiter);
    stroke-dashoffset: var(--perimiter);

    --needs-fix: var(--red-1);
    --fixed: var(--green-0);
  }

  .correction0 { animation-name: correction0; }
  .correction1 { animation-name: correction1; }
  .correction2 { animation-name: correction2; }
  .correction3 { animation-name: correction3; }
  .correction4 { animation-name: correction4; }

  @keyframes correction0 {
    72% { stroke-dashoffset: var(--perimiter); }
    77% { stroke-dashoffset: 0; }
    80% { stroke: var(--needs-fix); }
    82% { stroke: var(--fixed); }
    to {
      stroke-dashoffset: 0;
      stroke: var(--fixed);
    }
  }
  @keyframes correction1 {
    72% { stroke-dashoffset: var(--perimiter); }
    77% { stroke-dashoffset: 0; }
    83% { stroke: var(--needs-fix); }
    85% { stroke: var(--fixed); }
    to {
      stroke-dashoffset: 0;
      stroke: var(--fixed);
    }
  }
  @keyframes correction2 {
    72% { stroke-dashoffset: var(--perimiter); }
    77% { stroke-dashoffset: 0; }
    86% { stroke: var(--needs-fix); }
    88% { stroke: var(--fixed); }
    to {
      stroke-dashoffset: 0;
      stroke: var(--fixed);
    }
  }
  @keyframes correction3 {
    72% { stroke-dashoffset: var(--perimiter); }
    77% { stroke-dashoffset: 0; }
    89% { stroke: var(--needs-fix); }
    91% { stroke: var(--fixed); }
    to {
      stroke-dashoffset: 0;
      stroke: var(--fixed);
    }
  }
  @keyframes correction4 {
    72% { stroke-dashoffset: var(--perimiter); }
    77% { stroke-dashoffset: 0; }
    92% { stroke: var(--needs-fix); }
    94% { stroke: var(--fixed); }
    to {
      stroke-dashoffset: 0;
      stroke: var(--fixed);
    }
  }



  .transcriptText {
    fill: transparent;

    stroke: var(--yellow-1);
    stroke-width: 0.7px;
    stroke-linejoin: round;
    stroke-linecap: round;

    --perimiter: 55;
    stroke-dasharray: var(--perimiter);
    stroke-dashoffset: var(--perimiter);

    font-size: 13px;
    animation-name: transcriptText;
  }

  @keyframes transcriptText {
    31% { stroke-dashoffset: var(--perimiter); }
    35% { stroke-dashoffset: 0; }
    37% { fill: transparent; }
    39% { fill: var(--yellow-1); }
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

  <line class="transcriptLine line0" x1={10} x2={55} y1={25} y2={25} />
  <line class="transcriptLine line1" x1={10} x2={55} y1={33} y2={33} />
  <line class="transcriptLine line2" x1={10} x2={55} y1={41} y2={41} />
  <line class="transcriptLine line3" x1={10} x2={55} y1={49} y2={49} />
  <line class="transcriptLine line4" x1={10} x2={55} y1={57} y2={57} />
  <line class="transcriptLine line5" x1={10} x2={55} y1={65} y2={65} />
  <line class="transcriptLine line6" x1={10} x2={55} y1={73} y2={73} />

  <line class="correctionLine correction0" x1={15} x2={20} y1={25} y2={25} />
  <line class="correctionLine correction1" x1={35} x2={45} y1={25} y2={25} />
  <line class="correctionLine correction2" x1={25} x2={35} y1={33} y2={33} />
  <line class="correctionLine correction3" x1={15} x2={30} y1={41} y2={41} />
  <line class="correctionLine correction4" x1={40} x2={55} y1={49} y2={49} />

  <text
    class="transcriptText drawComponents"
    x={3}
    y={95}
    text-anchor="start"
   
  >
    Transcript
  </text>
</g>

