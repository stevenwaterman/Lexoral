<script lang="ts">

</script>

<style>
  .border {
    width: 90%;
    margin-left: 10%;
    height: 30em;
    border: 0.2em solid var(--form-border);
    border-radius: 1em;
    box-shadow: 0em 0em 1em -0.2em var(--page-background);
    transition: box-shadow 0.2s;
    box-sizing: border-box;
    overflow: hidden;
    background-color: var(--page-background);
  }

  .border:hover {
    box-shadow: 0.2em 0.2em 1em 0em var(--yellow-3);
  }

  .demo {
    padding-top: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;

    margin-top: -1.5em;
    margin-left: -1.5em;
    width: calc(100% + 3em);
    height: calc(100% + 1.5em);
  }
</style>

<div class="border">
  <iframe class="demo" src="https://lexoral.com/demo" title="A live demo of the Lexoral editor"/>
</div>