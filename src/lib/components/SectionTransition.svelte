<!-- Pure CSS smooth gradient transition between dark hero and light content -->
<div class="transition-bridge"></div>

<style>
	.transition-bridge {
		width: 100%;
		height: 48px; /* Tighter area for compact design */
		background: linear-gradient(to bottom, #050816 0%, #ffffff 100%);
		margin-top: -2px; /* Pulls up slightly to prevent any potential gaps or color tearing */
		position: relative;
		z-index: 5;
	}
</style>
