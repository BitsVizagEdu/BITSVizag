<script>
	/**
	 * SubMenuItem.svelte
	 * A full-width list item for sub-menu panels.
	 */
	export let href = '';
	export let label = '';
	export let icon = '';
	export let external = false;
	export let onClick = () => {};
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'external noopener noreferrer' : undefined}
	on:click={onClick}
	class="flex w-full items-center justify-between border-b border-slate-50 bg-white px-6 py-4.5 transition-colors hover:bg-slate-50 active:bg-slate-100"
>
	<div class="flex items-center gap-4">
		{#if icon}
			<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
				<i class="{icon} fa-fw" aria-hidden="true" />
			</div>
		{/if}
		<span class="text-[16px] font-semibold text-slate-800">{label}</span>
	</div>
	<i class="fa-solid fa-chevron-right text-xs text-slate-300" aria-hidden="true" />
</a>

<style>
	.py-4\.5 {
		padding-top: 1.125rem;
		padding-bottom: 1.125rem;
	}
</style>
