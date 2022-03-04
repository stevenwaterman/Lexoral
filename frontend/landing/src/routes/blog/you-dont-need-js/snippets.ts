import type { SnippetConfig } from "$lib/blog/blogData";

const animation: SnippetConfig = {
  name: "Animation.svelte",
  language: "svelte",
  snippet: `<style>
  svg {
    height: 20em;
    width: 100%;
    background-color: darkslategrey;
    border-radius: 2em;
  }

  svg :global(*) {
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 10s;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .flight {
    stroke: gold;
    stroke-width: 2;
    stroke-dasharray: 10 100;
    stroke-dashoffset: 10;
    animation-name: flight;
    animation-timing-function: ease-in;
  }

  @keyframes flight {
    from { stroke-dashoffset: 10; }
    21%, to { stroke-dashoffset: -80; }
  }

  .explosion {
    fill: orangered;
    opacity: 0.8;
    filter: blur(1px);
    transform-origin: center;
    animation-name: explosion;
  }

  @keyframes explosion {
    from, 19% { transform: scale(0); }
    20% { transform: scale(1.5); }
    22% { transform: scale(0.5); }
    23% { transform: scale(0.8); }
    25% { transform: scale(0.2); }
    26% { transform: scale(0.4); }
    35%, to { transform: scale(0); }
  }

  .trail {
    stroke-width: 2;
    stroke-dasharray: 1 10 5 10 10 5 30 150;
    animation-name: trail;
    animation-timing-function: ease-out;
  }

  @keyframes trail {
    from, 20% { 
      stroke-width: 3;
      stroke-dashoffset: 80;
    }
    100%, to {
      stroke-width: 0.5;
      stroke-dashoffset: -150;
    }
  }
</style>

<svg viewBox="0 0 100 100">
  <path class="flight" d="M 0 100 C 35 92 49 76 50 50"/>
  <path class="trail" d="M 50 50 C 41 23 26 23 1 41" style="stroke: yellowgreen"/>
  <path class="trail" d="M 50 50 C 30 43 14 51 0 100" style="stroke: turquoise"/>
  <path class="trail" d="M 50 50 C 84 46 96 63 100 85" style="stroke: goldenrod"/>
  <path class="trail" d="M 50 50 C 71 31 95 43 100 63" style="stroke: mediumorchid"/>
  <path class="trail" d="M 50 50 C 61 -6 76 3 73 100" style="stroke: firebrick"/>
  <circle class="explosion" cx="50" cy="50" r="20"/>
</svg>
`
};

const sidebar: SnippetConfig = {
	name: "Sidebar.svelte",
	language: "svelte",
	snippet: `<style>
  .container {
    overflow: hidden;
    position: relative;
    height: 15em;
    max-width: 25em;
    margin: auto;
    border: 0.2em solid black;
  }

  nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 100%;
    padding: 1em;
    background-color: skyblue;

    transform: translateX(1em);
    transition: 0.2s transform;
  }

  nav:hover,
  nav:focus-within {
    transform: translateX(100%);
  }

  a {
    white-space: pre;
    color: black;
  }

  p {
    font-size: 2em;
    text-align: center;
  }
</style>

<div class="container">
  <nav>
    <a href=".">Option 1</a>
    <a href=".">Option 2</a>
    <a href=".">Option 3</a>
    <a href=".">Option 4</a>
  </nav>

  <p>← Hover</p>
  <p>(or use tab)</p>
</div>
`
};

const stickyPositioning: SnippetConfig = {
	name: "StickyPositioning.svelte",
	language: "svelte",
	snippet: `<style>
  .scroller {
    max-width: 25em;
    height: 10em;
    margin: auto;
    padding: 1em;
    border: 0.2em solid black;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  p {
    height: 5em;
  }

  .square {
    height: 5em;
    width: 5em;
    background-color: lightskyblue;
    margin-left: auto;

    position: sticky;
    top: 2em;
  }
</style>

<div class="scroller">
  <p>Scroll down the page</p>
  <p>And watch the blue square 🡖</p>
  <div class="square"/>
  <p>The blue square follows you</p>
  <p>As you scroll past it</p>
  <p>And if you scroll back up</p>
  <p>It goes back where it was</p>
</div>
`
};

const accordion: SnippetConfig = {
	name: "Accordion.svelte",
	language: "svelte",
	snippet: `
  <style>
  .container {
    padding: 1em 2em;
    border: 0.2em solid black;
    border-radius: 2em;
  }

  details {
    border: 0.1em solid black;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 1em;
  }

  summary {
    font-size: 1.2em;
    cursor: pointer;
  }
</style>

<div class="container">
  <h3>FAQ</h3>

  <details>
    <summary>Why is it called an accordion menu?</summary>
    <hr>
    <p>
      Because each part of it can expand and contract, like in an accordion.
      If you don't know what an accordion is, just imagine a cute fluffy cat.
      You still won't know what it is, but at least you'll feel better about not knowing.
    </p>
  </details>

  <details>
    <summary>Huh?</summary>
    <hr>
    <p>
      Huh.
    </p>
  </details>

  <details>
    <summary>If I use an accordion menu will it make me cool?</summary>
    <hr>
    <p>
      No, not unless you're designing a MySpace profile.
      The <code>{"<details>"}</code> element is cool though, and you can use that for a lot of things.
      I'm using it on this page right below here, to show the code for each example!
    </p>
  </details>
</div>
`
};

const darkMode: SnippetConfig = {
  name: "DarkMode.svelte",
  language: "svelte",
  snippet: `<style>
  .container {
    position: relative;
    border: 0.2em solid black;
    max-width: 25em;
    margin: auto;
  }

  .body {
    padding: 1em;
  }

  input, label {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    height: 1.8em;
  }

  label {
    padding-right: 1.2em;
    user-select: none;
  }

  .title {
    margin: 0;
  }


  .darkOverride {
    color: black;
  }

  #darkModeCheckbox:checked {
    color: whitesmoke;
  }

  #darkModeCheckbox:checked ~ label {
    color: whitesmoke;
  }


  .lightOverride {
    color: whitesmoke;
  }

  #lightModeCheckbox:checked {
    color: black;
  }

  #lightModeCheckbox:checked ~ label {
    color: black;
  }


  @media (prefers-color-scheme: dark) {
    .lightOverride {
      display: none;
    }

    .body {
      background-color: white;
      color: black;
    }
    
    #darkModeCheckbox:checked ~ .body {
      background-color: darkslategrey;
      color: whitesmoke;
    }
  }

  @media (prefers-color-scheme: light) {
    .darkOverride {
      display: none;
    }

    .body {
      background-color: darkslategrey;
      color: whitesmoke;
    }
    
    #lightModeCheckbox:checked ~ .body {
      background-color: white;
      color: black;
    }
  }
</style>

<div class="container">
  <input class="lightOverride" id="lightModeCheckbox" type="checkbox">
  <label class="lightOverride" for="lightModeCheckbox">Light Mode</label>

  <input class="darkOverride" id="darkModeCheckbox" type="checkbox">
  <label class="darkOverride" for="darkModeCheckbox">Dark Mode</label>

  <div class="body">
    <h3 class="title">My Website</h3>
  
    <p>This is some text</p>
    <p>
      This is my website where I put my text.
      I hope you like it.
      I have now used up my entire text budget and I have none left, goodbye.
    </p>
  </div>
</div>
`
}

export default {
  animation,
  sidebar,
  stickyPositioning,
  accordion,
  darkMode
} as const;
