<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: var(--grey-0);
    border-top: 0.2em solid var(--blue-1);
    color: var(--page-background);

    text-align: center;
    padding-top: 2em;
    padding-bottom: 2em;
  }

  .outerGrid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    grid-auto-flow: column;

    justify-items: center;
    align-items: flex-start;
    gap: 0em 2em;

    /* font-size: 1.2em; */
  }

  .logo {
    margin-bottom: 1em;
    height: 5em;
    max-width: 100%;
  }

  ul {
    padding: 0;
    list-style: none;
    width: fit-content;
    margin: 0;
  }

  li {
    color: var(--blue-3);
    margin-bottom: 0.5em;
  }

  a {
    color: var(--blue-3);
    font-weight: 500;
  }

  p {
    margin-bottom: 1em;
  }

  @media (max-width: 1199px) {
    .outerGrid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto auto;
    }

    .contactHeader {
      margin-top: 2em;
      grid-column: 1 / 3;
      grid-row: 3;
    }

    .contactBody {
      grid-column: 1 / 3;
      grid-row: 4;
    }
  }

  @media (max-width: 799px) {
    .outerGrid {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, auto);
    }

    h3 {
      margin-top: 2em;
    }

    .contactHeader {
      grid-column: unset;
      grid-row: unset;
    }

    .contactBody {
      grid-column: unset;
      grid-row: unset;
    }
  }
</style>

<footer>
  <img class="logo" src="/assets/smallBrand.svg" alt="The Lexoral Logo"/>
  <div class="outerGrid">
    <h3>Product</h3>
    <ul>
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/dashboard/auth/signup">Sign Up</a></li>
      <li><a href="/demo">Demo</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>

    <h3>Community</h3>
    <ul>
      <li><a href="/blog">Blog</a></li>
      <li><a href="https://join.slack.com/t/lexoral-users/shared_invite/zt-yk0j76n5-KcQwnmCJ7FKkLsj_ik05Pw">Slack</a></li>
      <li><a href="https://twitter.com/lexoral/">Twitter</a></li>
      <li><a href="https://github.com/stevenwaterman/Lexoral/">GitHub</a></li>
      <li><a href="https://www.twitch.tv/lexoral">Twitch</a></li>
    </ul>

    <h3 class="contactHeader">Contact</h3>
    <div class="contactBody">
      <p>Email: <a href="mailto:steven@lexoral.com">steven@lexoral.com</a></p>
      <p>Lexoral is Open-Source Software<br>published under the <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/LICENSE">GPL License</a></p>
      <p>© Lexoral 2021</p>
    </div>
  </div>
</footer>
