<script>
	import DiagonalSection from "../DiagonalSection.svelte";
  import Creation from "./creation/Creation.svelte";
  import Research from "./research/Research.svelte";
</script>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		width: 100%;

		justify-items: center;
		align-items: flex-start;

    margin-bottom: -2em;
	}

  .divider {
    width: 1em;
    height: 100%;
    margin: 1em;
    border-left-style: solid;
    border-right-style: solid;
    border-color: var(--blue-0);
    border-width: 0.3em;
  }

  @media (max-width: 1199px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      gap: 6em;
    }

    .divider {
      display: none;
    }
  }

  
</style>

<DiagonalSection
	id="use-cases"
	title="Use Cases"
	subtitleTop="Here's some examples"
	subtitleBottom="of how we can help"
>
	<div class="grid">
		<Research/>
    <div class="divider"/>
		<Creation/>
	</div>
</DiagonalSection>
