<style>
  g {
    transform: translate(290px, 40px) scale(0.9) rotate(5deg);
  }

  .audio {
    fill: transparent;
    stroke: var(--yellow-1);
    stroke-width: 0;

    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 1 10;

    animation-name: audio;
    animation-timing-function: linear;
  }

  @keyframes audio {
    from { 
      stroke-dashoffset: 1000;
      stroke-width: 0;
    }

    35%, 50% {
      stroke-width: 0;
    }

    37%, 48% {
      stroke-width: 4;
    }

    100% { 
      stroke-dashoffset: 0;
      stroke-width: 0;
    }
  }



  .word {
    fill: transparent;
    stroke: var(--yellow-1);
    stroke-width: 0;

    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 10 100;

    animation-name: word;
    animation-timing-function: linear;
  }

  @keyframes word {
    from { 
      stroke-dashoffset: 3000;
      stroke-width: 0;
    }

    45%, 62% {
      stroke-width: 0;
    }

    47%, 60% {
      stroke-width: 6;
    }

    100% { 
      stroke-dashoffset: 0;
      stroke-width: 0;
    }
  }
</style>

<g>
  <path 
    class="audio"
    d="
    m 0 0
    c 10 0 10 16 20 16
    c 10 0 10 -16 20 -16
    c 10 0 10 16 20 16
    c 10 0 10 -16 20 -16
    c 10 0 10 16 20 16
    c 10 0 10 -16 20 -16
    c 10 0 10 16 20 16
    c 10 0 10 -16 20 -16
    "
  />

  <line class="word" x1="173" x2="350" y1="-2" y2="-5"/>
</g>
