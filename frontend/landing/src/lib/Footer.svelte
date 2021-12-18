<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: var(--grey-1);
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

    font-size: 1.2em;
  }

  .logo {
    margin-bottom: 1em;
    height: 5em;
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
</style>

<footer>
  <img class="logo" src="assets/smallBrand.svg" alt="The Lexoral Logo"/>
  <div class="outerGrid">
    <h3>Product</h3>
    <ul>
      <li><a rel="external" href="/dashboard">Dashboard</a></li>
      <li><a rel="external" href="/dashboard/auth/signup">Sign Up</a></li>
      <li><a rel="external" href="/demo">Demo</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>

    <h3>Community</h3>
    <ul>
      <li><a href="/blog">Blog</a></li>
      <li><a rel="external" href="https://join.slack.com/t/lexoral-users/shared_invite/zt-yk0j76n5-KcQwnmCJ7FKkLsj_ik05Pw">Slack</a></li>
      <li><a rel="external" href="https://twitter.com/lexoral/">Twitter</a></li>
      <li><a rel="external" href="https://github.com/stevenwaterman/Lexoral/">GitHub</a></li>
      <li><a rel="external" href="https://www.twitch.tv/stewaterman">Twitch</a></li>
    </ul>

    <h3>Contact</h3>
    <div>
      <p>Email: <a href="mailto:steven@lexoral.com">steven@lexoral.com</a></p>
      <p>Lexoral is Open-Source Software<br>published under the <a rel="external" href="https://github.com/stevenwaterman/Lexoral/blob/stage/LICENSE">GPL License</a></p>
      <p>© Lexoral 2021</p>
    </div>
  </div>
</footer>
