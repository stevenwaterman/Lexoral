<style>
  .stroke {
    fill: none;
    stroke: var(--blue-1);
    stroke-width: 0.8;
  }
</style>

<defs>
  <clipPath id="globeClip">
    <circle cx="0" cy="0" r="10.3"/>
  </clipPath>
</defs>

<g clip-path="url(#globeClip)">
  <circle class="stroke" cx="0" cy="0" r="10"/>

  <line class="stroke" x1="-10" x2="10" y1="0" y2="0"/>
  <ellipse class="stroke" cx="0" cy="0" rx="6" ry="10"/>
  <ellipse class="stroke" cx="0" cy="0" rx="2" ry="10"/>
  
  <ellipse class="stroke" cx="0" cy="-10" rx="10" ry="5"/>
  <ellipse class="stroke" cx="0" cy="10" rx="10" ry="5"/>
</g>

