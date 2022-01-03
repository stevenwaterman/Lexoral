<script>
  import LinkButton from "$lib/components/LinkButton.svelte";
  import TextContainer from "$lib/template/TextContainer.svelte";
</script>

<style>
  .container {
    max-width: 25em;
    margin: auto;
  }

  .buttonRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

<div class="container">
  <TextContainer>
    <h2>Try Lexoral</h2>

    <p>
      Lexoral helps you transcribe audio into text without the pain.
      Our AI transcribes your data automatically, asking for help where needed.
      All the quality of doing it by hand, in a fraction of the time.
    </p>
    
    <p>
      Simple pay-as-you-go pricing: just £6 per hour, with bulk discounts available.
    </p>

    <p>
      New users get 15 minutes of free credit, with no card required, so you can try it risk-free.
    </p>

    <div class="buttonRow">
      <LinkButton link="/">Learn more</LinkButton>
      <LinkButton link="/dashboard/auth/signup" external>Sign up</LinkButton>
    </div>
  </TextContainer>
</div>