<style>
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


  @media (prefers-color-scheme: light) {
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

  @media (prefers-color-scheme: dark) {
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
