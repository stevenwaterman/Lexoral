<script lang="ts">
  export let title: string;
</script>

<style>
  .panel {
    display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

    max-width: 28em;
  }

  h3 {
    font-weight: 600;
		font-size: 1.75em;
		color: var(--blue-1);

    margin-top: 0.5em;
    margin-bottom: 0;
  }
  
  .panel :global(p) {
    margin-top: 1em;
    font-size: 0.9em;
  }

  .panel :global(:last-child) {
    font-weight: 700;
		text-align: center;
    font-size: 1.1em;
  }
</style>

<div class="panel">
  <slot name="icon"></slot>

  <h3>{title}</h3>
  
  <slot></slot>
</div>
