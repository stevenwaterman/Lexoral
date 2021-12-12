<style>
  g {
    animation-name: group;
  }

  polygon {
    animation-name: page;
  }

  .waveformSegment {
    animation-name: waveformSegment;
  }

  .videoText {
    animation-name: videoText;
  }

  .transcriptText {
    animation-name: transcriptText;
  }

  .transcriptLine {
    animation-name: transcriptLine;
  }

  @keyframes group {
    0%, 90%, 100% {
      transform: translateX(100px) translateY(5px) scale(1);
    }

    8% {
      transform: translateX(100px) translateY(5px) scale(1);
    }

    10%, 14% {
      transform: translateX(20px) translateY(70px) scale(0.8);
    }

    20%, 23% {
      transform: translateX(190px) translateY(15px) scale(0.2) rotate(-10deg);
    }

    28%, 29% {
      transform: translateX(400px) translateY(15px) scale(0.2) rotate(-10deg);
    }

    33%, 43% {
      transform: translateX(400px) translateY(200px) scale(0.4) rotate(-90deg);
    }

    46%, 89% {
      transform: translateX(350px) translateY(180px) scale(1.6) rotate(-90deg);
    }
  }

  @keyframes page {
    0%, 90%, 100% {
      stroke-dasharray: 550;
      stroke-dashoffset: 550;

      stroke: var(--yellow-1);
      stroke-width: 2px;
      stroke-linejoin: round;

      fill: transparent;
    }

    5%, 89% { 
      stroke-dashoffset: 0;
      fill: transparent;
    }

    8%, 89% {
      fill: var(--page-background);
    }
  }

  @keyframes waveformSegment {
    0%, 90%, 100% {
      stroke-dasharray: 100;
      stroke-dashoffset: 100;

      stroke: var(--yellow-1);
      stroke-width: 2px;
      stroke-linecap: round;
    }

    5% {
      stroke-dashoffset: initial;
    }

    8%, 89% { 
      stroke-dashoffset: 0;
    }

    25% {
      opacity: 1;
    }

    36%, 89% {
      opacity: 0;
    }
  }

  @keyframes videoText {
    0%, 90%, 100% {
      fill: transparent;
    }

    5%, 25% {
      fill: var(--yellow-1);
    }

    36%, 89% {
      fill: transparent;
    }
  }

  @keyframes transcriptText {
    0%, 38% {
      fill: transparent;
    }

    40%, 100% {
      fill: var(--yellow-1);
    }
  }

  @keyframes transcriptLine {
    0%, 46% {
      stroke: var(--yellow-1);
      stroke-width: 2px;
      stroke-linecap: round;

      stroke-dasharray: 100;
      stroke-dashoffset: 100;
    }

    48%, 100% {
      stroke-dashoffset: 0;
    }
  }
</style>

<g>
  <polygon class="page" points="
    0 0,
    85 0,
    100 15,
    85 15,
    85 0,
    100 15,
    100 150,
    0 150
  "/>
  {#each [1,3,8,5,2,4,1,3,5,9,7,4,3,1] as amplitude, idx}
    <line class="waveformSegment" x1={10 + idx * 6} x2={10 + idx * 6} y1={75 - amplitude * 3} y2={75 + amplitude * 3}/>
  {/each}
  <text class="videoText" x={5} y={140}>Video File</text>

  <text class="transcriptText" text-anchor="start" transform="rotate(90)" x={35} y={-80}>Transcript</text>
  {#each new Array(7) as _, idx}
    <line class="transcriptLine" x1={10 + idx * 10} x2={10 + idx * 10} y1={30} y2={130}/>
  {/each}
</g>

