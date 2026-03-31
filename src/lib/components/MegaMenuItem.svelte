<script>
	/**
	 * MegaMenuItem.svelte
	 * Premium Dropdown Item with strict alignment and hover effects.
	 */
	export let href = '';
	export let label = '';
	export let icon = '';
	export let iconColorClass = 'text-blue-600';
	export let iconBgClass = 'bg-blue-50';
	export let external = false;
	export let onClick = () => {};
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'external noopener noreferrer' : undefined}
	on:click={onClick}
	class="group flex w-full items-center gap-3 rounded-lg border border-transparent bg-white px-4 py-3 text-left transition-all duration-200 hover:scale-[1.01] hover:bg-slate-50 hover:border-slate-100 hover:shadow-sm cursor-pointer"
>
	<!-- Left: Fixed Icon Box -->
	<div
		class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-200 {iconBgClass} group-hover:bg-slate-200"
	>
		<i class="{icon} {iconColorClass} text-base fa-fw" aria-hidden="true" />
	</div>

	<!-- Right: Text Label -->
	<span class="text-[15px] font-medium text-slate-800 transition-colors group-hover:text-blue-600">
		{label}
	</span>
</a>
