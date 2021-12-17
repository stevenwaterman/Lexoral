<script>
	import DiagonalSection from "../DiagonalSection.svelte";
  import Creation from "./creation/Creation.svelte";
  import Research from "./research/Research.svelte";
</script>

<style>
	.divider {
		background-color: var(--blue-0);
		height: calc(100% - 12em);
		border-radius: 0.5em;
		width: 0.5em;
		position: absolute;
		bottom: 4em;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		gap: 4em;

		justify-items: center;
		align-items: flex-start;
	}

	.grid :global(h3) {
		font-weight: 600;
		font-size: 1.75em;
		color: var(--blue-1);

    margin-top: 0.5em;
    margin-bottom: 0;
	}

	.grid :global(.panel) {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.grid :global(p) {
		margin-top: 1em;
		max-width: 30em;
	}

	.grid :global(.conclusion) {
		font-weight: 700;
		text-align: center;
	}
</style>

<DiagonalSection
	id="use-cases"
	title="Use Cases"
	subtitleTop="Here's some examples"
	subtitleBottom="of how we can help"
>
	<div slot="bg" class="divider" />

	<div class="grid">
		<div class="panel"><Research/></div>
		<div class="panel"><Creation/></div>
	</div>
</DiagonalSection>
