<script lang="ts">
  import DropdownLabel from "$lib/nav/DropdownLabel.svelte";
  import LinkButton from "$lib/LinkButton.svelte";
</script>

<style>
  nav {
    width: 100%;
    height: 4em;

    padding-top: 0.5em;

    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-items: center;
    align-items: center;

    color: var(--page-background);
    z-index: 100;
  }

  .logo {
    height: 100%;
    max-height: 3em;
  }
  
  .navList {
    list-style: none;

    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-items: center;
    align-items: center;

    padding: 0;

    font-size: 1.25em;
    font-weight: 600;

    height: 100%;
  }

  nav :global(.LinkButton) {
    --bgColor: rgba(0, 0, 0, 0.15);
    font-size: 1.3em;
    justify-self: flex-end;
  }

  li {
    display: contents;
  }

  @media (max-width: 1199px) {
    .navList {
      display: none;
    }
  }
</style>

<nav>
  <a href="/">
    <img class="logo" src="assets/smallBrand_white.svg" alt="The Lexoral logo"/>
  </a>
  
  <ul class="navList">
    <li>
      <DropdownLabel
        label="About"
        topLink="#how-it-works"
        menuItems={{
          "How it Works": "#how-it-works",
          "Use Cases": "#use-cases",
          History: "#community",
          "Try a Demo": "/demo"
        }}
      />
    </li>

    <li>
      <DropdownLabel
        label="Community"
        topLink="#community"
        menuItems={{
          Slack: "https://join.slack.com/t/lexoral-users/shared_invite/zt-yk0j76n5-KcQwnmCJ7FKkLsj_ik05Pw",
          Twitter: "https://twitter.com/lexoral/",
          GitHub: "https://github.com/stevenwaterman/Lexoral/",
          Twitch: "https://www.twitch.tv/stewaterman/"
        }}
      />
    </li>

    <li>
      <DropdownLabel
        label="Blog"
        topLink="/blog"
      />
    </li>

    <li>
      <DropdownLabel
        label="Pricing"
        topLink="#pricing"
      />
    </li>
  </ul>

  <LinkButton link="/dashboard">Sign in</LinkButton>
</nav>