<script lang="ts">
  import DropdownLabel from "$lib/template/nav/DropdownLabel.svelte";
  import LinkButton from "$lib/LinkButton.svelte";
</script>

<style>
  nav {
    width: 100%;
    height: 4em;

    padding-top: 0.5em;
    margin-bottom: 4em;

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
    max-width: 100%;
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

  @media (max-width: 799px) {
    .navList {
      display: none;
    }

    nav :global(.LinkButton) {
      font-size: 1em;
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
        topEntry={{label: "About", link: "/#how-it-works"}}
        menuEntries={[
          {
            label: "How it Works",
            link: "/#how-it-works"
          },
          {
            label: "Use Cases",
            link: "/#use-cases",
          },
          {
            label: "History",
            link: "/#community"
          },
          {
            label: "Try a Demo",
            link: "/demo",
            external: true
          }
        ]}
      />
    </li>

    <li>
      <DropdownLabel
        topEntry={{label: "Community", link: "/#community"}}
        menuEntries={[
          {label: "Slack", link: "https://join.slack.com/t/lexoral-users/shared_invite/zt-yk0j76n5-KcQwnmCJ7FKkLsj_ik05Pw", external: true},
          {label: "Twitter", link: "https://twitter.com/lexoral/", external: true},
          {label: "GitHub", link: "https://github.com/stevenwaterman/Lexoral/", external: true},
          {label: "Twitch", link:"https://www.twitch.tv/stewaterman/", external: true}
        ]}
      />
    </li>

    <li>
      <DropdownLabel
        topEntry={{label: "Blog", link: "/blog"}}
      />
    </li>

    <li>
      <DropdownLabel
        topEntry={{label: "Pricing", link: "/#pricing"}}
      />
    </li>
  </ul>

  <LinkButton link="/dashboard" external>Sign in</LinkButton>
</nav>