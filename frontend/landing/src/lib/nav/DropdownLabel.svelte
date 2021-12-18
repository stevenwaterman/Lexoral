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
    padding: auto;
  }

  .topLink {
    color: var(--page-background);
    text-decoration: none;
    padding: 1.5em;
  }

  .label:hover .topLink {
    color: var(--grey-5);
  }

  .label:focus-within .topLink {
    color: var(--grey-5);
  }


  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 100%;
    left: 50%;
    z-index: 100;
    margin-top: 0.3em;

    transform-origin: 50% 0;
    transform: translateX(-50%) scale(0);

    transition-property: transform;
    transition-duration: 0.2s;
  }

  .menu-arrow-fill {
    background-color: var(--grey-5);
    height: 100%;
    width: 100%;
  }

  .label:hover .menu {
    transform: translateX(-50%) scale(100%);
  }

  .label:focus-within .menu {
    transform: translateX(-50%) scale(100%);
  }

  .menu-arrow {
    height: 1.5em;
    width: 1.5em;
    transform: rotate(45deg);

    border-color: var(--form-border);
    border-width: 0.15em;
    border-style: solid none none solid;

    box-sizing: border-box;
  }

  .menu-content {
    padding: 1em;

    margin-top: -0.8em;
    border-radius: 1em;
    background-color: var(--grey-5);

    border: 0.15em solid var(--form-border);
  }

  ul {
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: column;
  }

  .menuEntry {
    display: contents;
  }

  .menuLink {
    color: var(--text) !important;
    text-decoration: none;
    white-space: nowrap;
    padding: 0.1em;
  }

  .menuEntry:hover .menuLink {
    color: var(--blue-1) !important;
  }
</style>

<span class="label">
  <a class="topLink" href={topLink}>{label}</a>
  {#if showMenu}
    <div class="menu">
      <div class="menu-arrow">
        <div class="menu-arrow-fill"/>
      </div>
      <div class="menu-content">
        <ul>
          {#each menuEntries as [menuLabel, menuLink] (menuLink)}
            <li class="menuEntry">
              <a class="menuLink" href={menuLink}>{menuLabel}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</span>