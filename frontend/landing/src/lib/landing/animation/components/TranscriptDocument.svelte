<style>
  g {
    transform: translateX(100px);
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
    2% { stroke-dashoffset: var(--perimiter); }
    7%, to { stroke-dashoffset: 0; }
  }
  @keyframes line1 {
    3% { stroke-dashoffset: var(--perimiter); }
    7.5%, to { stroke-dashoffset: 0; }
  }
  @keyframes line2 {
    4% { stroke-dashoffset: var(--perimiter); }
    8%, to { stroke-dashoffset: 0; }
  }
  @keyframes line3 {
    5% { stroke-dashoffset: var(--perimiter); }
    8.5%, to { stroke-dashoffset: 0; }
  }
  @keyframes line4 {
    6% { stroke-dashoffset: var(--perimiter); }
    9%, to { stroke-dashoffset: 0; }
  }
  @keyframes line5 {
    7% { stroke-dashoffset: var(--perimiter); }
    9.5%, to { stroke-dashoffset: 0; }
  }
  @keyframes line6 {
    8% { stroke-dashoffset: var(--perimiter); }
    10%, to { stroke-dashoffset: 0; }
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
    vector-effect="non-scaling-stroke"
  />

  <line class="transcriptLine line0" x1={10} x2={55} y1={25} y2={25} vector-effect="non-scaling-stroke" />
  <line class="transcriptLine line1" x1={10} x2={55} y1={33} y2={33} vector-effect="non-scaling-stroke" />
  <line class="transcriptLine line2" x1={10} x2={55} y1={41} y2={41} vector-effect="non-scaling-stroke" />
  <line class="transcriptLine line3" x1={10} x2={55} y1={49} y2={49} vector-effect="non-scaling-stroke" />
  <line class="transcriptLine line4" x1={10} x2={55} y1={57} y2={57} vector-effect="non-scaling-stroke" />
  <line class="transcriptLine line5" x1={10} x2={55} y1={65} y2={65} vector-effect="non-scaling-stroke" />
  <line class="transcriptLine line6" x1={10} x2={55} y1={73} y2={73} vector-effect="non-scaling-stroke" />

  <text
    class="transcriptText drawComponents"
    x={3}
    y={95}
    text-anchor="start"
    vector-effect="non-scaling-stroke"
  >
    Transcript
  </text>
</g>

