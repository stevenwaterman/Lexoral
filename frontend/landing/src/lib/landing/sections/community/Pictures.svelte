<style>
  .portrait {
    border-radius: 50% 50% 10% 10%;
    height: 10em;
    max-height: 500px;
    margin-bottom: 0.5em;
  }

  .pictureContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .personName {
    white-space: nowrap;
    font-weight: 700;
  }

  .job {
    white-space: nowrap;
    font-style: italic;
  }
</style>

<div class="pictureContainer">
  <img class="portrait" src="/assets/steven.jpg" alt="Me, Steven Waterman"/>
  <p class="personName">Steven Waterman</p>
  <p class="job" style="margin-bottom: 1em;">Founder</p>

  <img class="portrait" src="/assets/goldie.jpg" alt="My cat Goldie" style="margin-top: 1em;"/>
  <p class="personName">Goldie</p>
  <p class="job">Background Noise</p>
</div>