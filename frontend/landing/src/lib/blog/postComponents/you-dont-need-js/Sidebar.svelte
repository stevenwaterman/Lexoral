<style>
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
