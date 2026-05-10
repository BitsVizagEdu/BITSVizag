<script>
	import { NavItems } from '$lib/components/navItem.js';
	import { replaceHyphenWithSpace } from '../aboutus/[slug]/components/utils.js';

	const moreItems = $NavItems.find(item => item.name === 'More')?.items || [];

	function getItemHref(item) {
		return `/${encodeURIComponent(item)}`;
	}
</script>

<svelte:head>
	<title>More Links | BITS Vizag</title>
</svelte:head>

<div class="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
	<div class="max-w-4xl mx-auto">
		<header class="mb-12 text-center">
			<h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
				Quick <span class="text-amber-500">Links</span>
			</h1>
			<p class="text-slate-600 max-w-xl mx-auto">
				Access all institutional resources, committees, and mandatory disclosures from one centralized location.
			</p>
		</header>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each moreItems as item}
				<a
					href={getItemHref(item)}
					class="group p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-500 transition-all duration-500 flex items-center justify-between"
				>
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
							<i class="fa-solid fa-link text-amber-500 group-hover:text-white"></i>
						</div>
						<span class="text-lg font-bold text-slate-800 capitalize group-hover:text-amber-600 transition-colors">
							{replaceHyphenWithSpace(item)}
						</span>
					</div>
					<i class="fa-solid fa-arrow-right text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all"></i>
				</a>
			{/each}
		</div>
	</div>
</div>
