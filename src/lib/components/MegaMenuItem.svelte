<script>
	/**
	 * MegaMenuItem.svelte
	 * Premium Dropdown Item styled exactly like the green-tinted rounded list in the screenshot.
	 */
	export let href = '';
	export let label = '';
	export let icon = '';
	export let iconColorClass = ''; // Ignored to ensure unified aesthetic matching the image
	export let iconBgClass = ''; // Ignored to ensure unified aesthetic matching the image
	export let external = false;
	export let onClick = () => {};
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'external noopener noreferrer' : undefined}
	on:click={onClick}
	class="nav-dropdown-item group"
>
	<!-- Left Icon: Grey by default, morphs to Leaf Green on hover -->
	{#if icon}
		<div class="nav-dropdown-icon-box">
			<i class="{icon} fa-fw" aria-hidden="true" />
		</div>
	{/if}

	<!-- Right Text: Muted slate by default, morphs to Dark Charcoal on hover -->
	<span class="nav-dropdown-label">
		{label}
	</span>
</a>

<style>
	.nav-dropdown-item {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		border-radius: 0.8rem; /* Smooth rounded corners matching screenshot */
		background: #ffffff;
		padding: 0.7rem 0.95rem;
		text-align: left;
		text-decoration: none;
		transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
		cursor: pointer;
		border: 1px solid transparent;
	}

	.nav-dropdown-icon-box {
		display: flex;
		height: 34px;
		width: 34px;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		border-radius: 8px;
		color: #94a3b8; /* Muted grey by default, exactly like screenshot */
		background: transparent;
		transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.nav-dropdown-icon-box i {
		font-size: 1.15rem;
	}

	.nav-dropdown-label {
		font-size: 0.94rem;
		font-weight: 500;
		color: #556277; /* Muted corporate text matching screenshot default state */
		transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
		font-family: 'Inter', 'Satoshi', sans-serif;
	}

	/* Elegant selector styles reflecting hovered/selected item in screenshot */
	.nav-dropdown-item:hover {
		background: #f0fdf4 !important; /* Soft pastel green background */
	}

	.nav-dropdown-item:hover .nav-dropdown-icon-box {
		color: #16a34a !important; /* Beautiful green icon */
	}

	.nav-dropdown-item:hover .nav-dropdown-label {
		color: #1e293b !important; /* Deep charcoal black text */
		font-weight: 600;
	}
</style>
