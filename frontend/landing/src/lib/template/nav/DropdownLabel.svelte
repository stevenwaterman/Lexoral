<script lang="ts">
  export let topEntry: {label: string; link: string; external?: true};
  export let menuEntries: Array<{label: string; link: string; external?: true}> = []

  let showMenu: boolean;
  $: showMenu = menuEntries.length > 0;
</script>

<style>
  .label {
    position: relative;
  }

  .topLink {
    color: var(--page-background);
    text-decoration: none;
    padding-left: 1.5em;
    padding-right: 1.5em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }

  .topLink:hover {
    color: var(--yellow-1);
  }

  .label:focus-within .topLink {
    color: var(--yellow-4);
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
    text-decoration: none;
    white-space: nowrap;
    padding: 0.1em;
    color: var(--text);
  }

  .menuEntry:hover .menuLink {
    color: var(--blue-1) !important;
  }

  @media (max-width: 1199px) {
    .menu {
      display: contents;
      position: static;
      transform: none;
      margin: 0;
    }

    .menu-arrow {
      display: none;
    }

    .menuLink {
      font-weight: 300;
      /* font-size: 0.8em; */
      color: unset;
    }

    .menu-content {
      background-color: none;
      border: none;
      display: contents;
      padding: 0;
      margin: 0;
    }

    .label {
      display: contents;
    }
  }
</style>

<span class="label">
  <a class="topLink" href={topEntry.link} rel={topEntry.external ? "external" : undefined}>{topEntry.label}</a>
  {#if showMenu}
    <div class="menu">
      <div class="menu-arrow">
        <div class="menu-arrow-fill"/>
      </div>
      <div class="menu-content">
        <ul>
          {#each menuEntries as {label, link, external} (link)}
            <li class="menuEntry">
              <a class="menuLink" href={link} rel={external ? "external" : undefined}>{label}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</span>