<style>
  .container {
    position: relative;
    border: 0.2em solid black;
    width: 25em;
    margin: auto;
  }

  .body {
    padding: 1em;
  }

  input, label {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    height: 2em;
  }

  label {
    padding-right: 1.2em;
  }

  .title {
    margin: 0;
  }

  #exampleCheckbox:checked {
    color: whitesmoke;
  }

  #exampleCheckbox:checked ~ label {
    color: whitesmoke;
  }

  #exampleCheckbox:checked ~ .body {
    background-color: darkslategrey;
    color: whitesmoke;
  }
</style>

<div class="container">
  <input id="exampleCheckbox" type="checkbox">
  <label for="exampleCheckbox">Dark Mode</label>

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
