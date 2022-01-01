<style>
  .portrait {
    border-radius: 50% 50% 10% 10%;
    height: 10em;
    max-height: 500px;
    margin-bottom: 0.5em;
  }

  .pictureContainer {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(6, auto);
    align-items: center;
    justify-items: center;
  }

  .personName {
    white-space: nowrap;
    font-weight: 700;
    margin-bottom: 0;
  }

  .job {
    white-space: nowrap;
    font-style: italic;
  }

  img:last-of-type {
    margin-top: 2em;
  }

  @media (max-width: 799px) {
    .pictureContainer {
      width: 100%;
    }
  }
</style>

<div class="pictureContainer">
  <img class="portrait" src="/assets/steven.jpg" alt="Me, Steven Waterman"/>
  <p class="personName">Steven Waterman</p>
  <p class="job">Founder</p>

  <img class="portrait" src="/assets/goldie.jpg" alt="My cat Goldie"/>
  <p class="personName">Goldie</p>
  <p class="job">Background Noise</p>
</div>