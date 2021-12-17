<script lang="ts">
  import DropdownLabel from "$lib/DropdownLabel.svelte";
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

    margin: auto;
    gap: 3em;

    padding: 0;

    font-size: 1.2em;
    font-weight: 500;
  }

  nav :global(.LinkButton) {
    --bgColor: rgba(0, 0, 0, 0.15);
    font-size: 1.3em;
  }
</style>

<nav>
  <a href="/">
    <img class="logo" src="assets/smallBrand_white.svg" alt="The Lexoral logo"/>
  </a>
  <ul class="navList">
    <li><DropdownLabel
      label="How it Works"
      topLink="#how-it-works"
    /></li>

    <li><DropdownLabel
      label="Use Cases"
      topLink="#use-cases"
    /></li>

    <li><DropdownLabel
      label="Community"
      topLink="#community"
      menuItems={{
        Slack: "https://join.slack.com/t/lexoral-users/shared_invite/zt-yk0j76n5-KcQwnmCJ7FKkLsj_ik05Pw"
      }}
    /></li>

    <li><DropdownLabel
      label="Pricing"
      topLink="#pricing"
    /></li>
  </ul>
  <LinkButton link="/dashboard">Sign in</LinkButton>
</nav>