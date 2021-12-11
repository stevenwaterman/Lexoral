<script lang="ts">
  export let label: string;
  export let topLink: string;
  export let menuItems: Record<string, string> = {}

  let menuEntries: Array<[string, string]>;
  $: menuEntries = Object.entries(menuItems);

  let showMenu: boolean;
  $: showMenu = menuEntries.length > 0;
</script>

<style>
  .label {
    position: relative;
  }

  .label:hover a {
    color: var(--grey-5);
  }

  .label:focus-within a {
    color: var(--grey-5);
  }

  .label a {
    color: var(--page-background);
    text-decoration: none;
  }

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 100%;
    left: 50%;
    z-index: 2;

    color: var(--text);

    transform-origin: 50% 0;
    transform: translateX(-50%) scale(0);

    transition-property: transform;
    transition-duration: 0.2s;

    filter: drop-shadow(-0.1em 0.1em 0 var(--form-border));
  }

  .label:hover .menu {
    transform: translateX(-50%) scale(100%);
  }

  .label:focus-within .menu {
    transform: translateX(-50%) scale(100%);
  }

  .menu-arrow {
    background-color: var(--page-background);
    height: 2em;
    width: 1.5em;
    clip-path: polygon(
      0% 50%,
      0% 100%,
      100% 100%,
      100% 50%,
      50% 0%
    );
  }

  .menu-content {
    margin-top: -1em;
    padding: 1em;
    padding-top: 0.75em;
    border-radius: 1em;
    background-color: var(--page-background);
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    white-space: nowrap;
  }

  li a {
    color: var(--blue-1) !important;
  }

  li:hover a {
    color: var(--blue-2) !important;
  }
</style>

<span class="label">
  <a href={topLink}>{label}</a>
  {#if showMenu}
    <div class="menu">
      <div class="menu-arrow"/>
      <div class="menu-content">
        <ul>
          {#each menuEntries as [menuLabel, menuLink] (menuLink)}
            <li>
              <a href={menuLink}>{menuLabel}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</span>