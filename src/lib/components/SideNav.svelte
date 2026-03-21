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

<aside class="w-full lg:w-[280px] p-3 lg:p-0 lg:pr-4 lg:sticky lg:top-20 h-fit z-10" aria-label="Sidebar">
	<div class="bg-transparent rounded-lg overflow-hidden">
		<!-- Header -->
		<div class="px-0 py-2 flex items-center justify-between lg:block">
			<span class="text-[11px] font-bold text-slate-600 uppercase tracking-wider hidden lg:block">{title}</span>
			<i class="fa-solid fa-bars text-[#2672d5] text-sm lg:hidden"></i>
		</div>

		<!-- Mobile Navigation: Horizontal Scroll -->
		<div class="lg:hidden p-2 bg-white rounded-lg">
			<div class="flex overflow-x-auto gap-2 no-scrollbar pb-2">
				{#each items as item}
					{#if useButtons}
						<button
							on:click={() => handleSelect(item)}
							class="flex-shrink-0 px-3 py-2 text-[12px] font-bold rounded-lg transition-all whitespace-nowrap
                            {activeTab === item
								? 'bg-[#2672d5] text-white shadow-sm'
								: 'bg-slate-100 text-slate-700 hover:bg-slate-200'}"
						>
							{item}
						</button>
					{:else}
						<a
							href={getItemHref(item)}
							on:click={() => handleSelect(item)}
							class="flex-shrink-0 px-3 py-2 text-[12px] font-bold rounded-lg transition-all whitespace-nowrap
                            {activeTab === item
								? 'bg-[#2672d5] text-white shadow-sm'
								: 'bg-slate-100 text-slate-700 hover:bg-slate-200'}"
						>
							{replaceHyphenWithSpace(item)}
						</a>
					{/if}
				{/each}
			</div>
		</div>

		<!-- Desktop Navigation: Vertical List -->
		<ul class="hidden lg:flex lg:flex-col gap-2 p-0">
			{#each items as item}
				<li>
					{#if useButtons}
						<button
							on:click={() => handleSelect(item)}
							class="w-full flex items-center px-5 py-3.5 text-[13px] font-bold rounded-xl transition-all duration-300 text-left
                            {activeTab === item
								? 'bg-[#2672d5] text-white shadow-md hover:shadow-lg'
								: 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-[#2672d5] hover:text-[#2672d5]'}"
						>
							<span class="flex-1">{item}</span>
						</button>
					{:else}
						<a
							href={getItemHref(item)}
							on:click={() => handleSelect(item)}
							class="w-full flex items-center px-5 py-3.5 text-[13px] font-bold rounded-xl transition-all duration-300
                            {activeTab === item
								? 'bg-[#2672d5] text-white shadow-md hover:shadow-lg'
								: 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-[#2672d5] hover:text-[#2672d5]'}"
						>
							<span class="flex-1">
								{replaceHyphenWithSpace(item)}
							</span>
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</aside>

<style>
	span,
	i,
	a,
	button {
		font-family: 'Roboto', 'Outfit', sans-serif;
	}
	.uppercase {
		font-family: 'Roboto', 'Outfit', sans-serif;
		font-weight: 700;
		letter-spacing: 0.05em;
	}
	button,
	a {
		font-weight: 700;
	}
</style>
