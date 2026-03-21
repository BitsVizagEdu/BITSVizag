<script>
	/** @type {any[]} */
	export let items = [];
	/** @type {string} */
	export let activeTab = '';
	/** @type {string} */
	export let title = 'Navigation';
	/** @type {string} */
	export let basePath = '';
	/** @type {boolean} */
	export let useButtons = false;
	/** @type {function(any): void} */
	export let onSelect = (item) => {};

	import { replaceHyphenWithSpace } from '../utils.js';

	/** @param {any} item */
	function handleSelect(item) {
		activeTab = item;
		onSelect(item);
	}

	/** @param {string} item */
	function getItemHref(item) {
		return `${basePath}/${encodeURIComponent(item)}`;
	}
</script>

<!-- Centered Premium Sidebar - Top Navigation Style -->
<div class="w-full bg-gradient-to-b from-white to-slate-50/50 py-8 px-4 border-b border-slate-200">
	<div class="max-w-6xl mx-auto">
		<!-- Title -->
		<div class="mb-6">
			<h2 class="text-[18px] font-bold text-slate-900 text-center">{title}</h2>
			<div class="h-1 w-16 bg-[#2672d5] rounded-full mx-auto mt-2"></div>
		</div>

		<!-- Premium Grid Navigation -->
		<div class="flex flex-wrap justify-center gap-3 lg:gap-4">
			{#each items as item}
				<li style="list-style: none;">
					{#if useButtons}
						<button
							on:click={() => handleSelect(item)}
							class="group relative px-5 lg:px-6 py-3 lg:py-3.5 text-[13px] lg:text-[14px] font-bold rounded-lg transition-all duration-300 whitespace-nowrap overflow-hidden
                            {activeTab === item
								? 'bg-[#2672d5] text-white shadow-lg shadow-blue-300/40'
								: 'bg-white text-slate-800 border border-slate-200 hover:border-[#2672d5] hover:bg-slate-50'}"
						>
							<span class="relative z-10">{item}</span>
							{#if activeTab === item}
								<div class="absolute inset-0 bg-gradient-to-r from-[#2672d5] to-[#1e5ba8] opacity-0 group-hover:opacity-10 transition-opacity"></div>
							{/if}
						</button>
					{:else}
						<a
							href={getItemHref(item)}
							on:click={() => handleSelect(item)}
							class="group relative inline-flex items-center px-5 lg:px-6 py-3 lg:py-3.5 text-[13px] lg:text-[14px] font-bold rounded-lg transition-all duration-300 whitespace-nowrap overflow-hidden
                            {activeTab === item
								? 'bg-[#2672d5] text-white shadow-lg shadow-blue-300/40'
								: 'bg-white text-slate-800 border border-slate-200 hover:border-[#2672d5] hover:bg-slate-50'}"
						>
							<span class="relative z-10">{replaceHyphenWithSpace(item)}</span>
							{#if activeTab === item}
								<div class="absolute inset-0 bg-gradient-to-r from-[#2672d5] to-[#1e5ba8] opacity-0 group-hover:opacity-10 transition-opacity"></div>
							{/if}
						</a>
					{/if}
				</li>
			{/each}
		</div>
	</div>
</div>

<style>
	span,
	a,
	button {
		font-family: 'Roboto', 'Outfit', sans-serif;
	}
	button,
	a {
		font-weight: 700;
	}
</style>
