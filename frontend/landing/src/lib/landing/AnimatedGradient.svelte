<script lang="ts">

</script>

<style>
  .contain {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    height: max(20em, 30vh);

    contain: strict;

    z-index: -1;
  }

  .clip {
    width: 100%;
    height: 100%;

    contain: strict;

    clip-path: polygon(
      -0.5px -0.5px,
      calc(100% + 0.5px) -0.5px,
      calc(100% + 0.5px) calc(100% + 0.5px),
      -0.5px calc(35% + 0.5px)
    );
  }

  .panX {
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-name: pan-x;
    animation-timing-function: ease-in-out;

    contain: strict;

    width: 300%;
    height: 300%;
  }

  .panY {
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-name: pan-y;
    animation-timing-function: ease-in-out;

    contain: strict;

    width: 100%;
    height: 100%;
  }

  .gradient {
    height: 100%;
    width: 100%;

    contain: strict;

    background: 
      linear-gradient(300deg, var(--blue-1), transparent 50%) no-repeat,
      linear-gradient(10deg, var(--green-2), transparent 50%) no-repeat,
      linear-gradient(110deg, var(--yellow-2), transparent 50%) no-repeat,
      linear-gradient(180deg, var(--red-2), transparent 50%) no-repeat,
      var(--blue-1);
  }

  @keyframes pan-x {
    0% {
      transform: translateX(-50%);
      /* animation-timing-function: cubic-bezier(.6,.03,.51,.92); */
    }

    20% {
      transform: translateX(-15%);
      /* animation-timing-function: cubic-bezier(.41,.05,.57,.94); */
    }

    40% {
      transform: translateX(-33%);
      /* animation-timing-function: cubic-bezier(.49,.07,.57,.94); */
    }

    60% {
      transform: translateX(0%);
      /* animation-timing-function: cubic-bezier(.24,.04,.78,.97); */
    }

    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes pan-y {
    0% {
      transform: translateY(-35%);
      animation-timing-function: ease-out;
    }

    15% {
      transform: translateY(-66%);
    }

    45% {
      transform: translateY(0%);
      /* animation-timing-function: cubic-bezier(.42,.06,.78,.69); */
    }

    65% {
      transform: translateY(-45%);
      /* animation-timing-function: cubic-bezier(.42,.06,.7,.79); */
    }

    80% {
      transform: translateY(-10%);
      /* animation-timing-function: cubic-bezier(.54,.04,.7,.79) */
      animation-timing-function: ease-in;
    }

    100% {
      transform: translateY(-35%);
    }
  }
</style>

<div class="contain">
  <div class="clip">
    <div class="panX">
      <div class="panY">
        <div class="gradient"/>
      </div>
    </div>
  </div>
</div>

