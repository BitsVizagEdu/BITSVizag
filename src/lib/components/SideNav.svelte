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
</script>

<aside class="w-full lg:w-[320px] p-4 lg:p-6 lg:sticky lg:top-0 h-fit z-10" aria-label="Sidebar">
	<div
		class="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden"
	>
		<div
			class="px-5 py-4 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between lg:block"
		>
			<span class="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{title}</span>
			<i class="fa-solid fa-list-ul text-[#2672d5] lg:hidden"></i>
		</div>

		<!-- Mobile Navigation: Responsive Grid/Scroll -->
		<div class="lg:hidden p-3 bg-white">
			<div class="flex overflow-x-auto gap-2 no-scrollbar pb-1">
				{#each items as item}
					{#if useButtons}
						<button
							on:click={() => handleSelect(item)}
							class="flex-shrink-0 flex items-center px-4 py-2.5 text-[13px] font-bold rounded-xl transition-all whitespace-nowrap
                            {activeTab === item
								? 'bg-[#2672d5] text-white shadow-md'
								: 'bg-slate-50 text-slate-600 border border-slate-100'}"
						>
							{item}
						</button>
					{:else}
						<a
							href={`${basePath}/${item}`}
							on:click={() => handleSelect(item)}
							class="flex-shrink-0 flex items-center px-4 py-2.5 text-[13px] font-bold rounded-xl transition-all whitespace-nowrap
                            {activeTab === item
								? 'bg-[#2672d5] text-white shadow-md'
								: 'bg-slate-50 text-slate-600 border border-slate-100'}"
						>
							{replaceHyphenWithSpace(item)}
						</a>
					{/if}
				{/each}
			</div>
		</div>

		<!-- Desktop Navigation: Vertical List -->
		<ul class="hidden lg:flex lg:flex-col gap-1 p-2">
			{#each items as item}
				<li>
					{#if useButtons}
						<button
							on:click={() => handleSelect(item)}
							class="w-full group flex items-center px-4 py-3 text-[14px] font-semibold rounded-xl transition-all duration-300 text-left
                            {activeTab === item
								? 'bg-[#2672d5] text-white shadow-lg shadow-blue-100'
								: 'text-slate-600 hover:bg-slate-50 hover:text-[#2672d5]'}"
						>
							<div
								class="flex items-center justify-center w-6 h-6 mr-2 rounded-lg transition-colors
                                {activeTab === item
									? 'bg-white/20'
									: 'bg-slate-100 group-hover:bg-blue-100'}"
							>
								<i
									class="fa-solid fa-chevron-right text-[10px] {activeTab === item
										? 'text-white'
										: 'text-[#2672d5]'} transition-transform group-hover:translate-x-0.5"
								></i>
							</div>
							<span class="flex-1">{item}</span>
						</button>
					{:else}
						<a
							href={`${basePath}/${item}`}
							on:click={() => handleSelect(item)}
							class="w-full group flex items-center px-4 py-3 text-[14px] font-semibold rounded-xl transition-all duration-300
                            {activeTab === item
								? 'bg-[#2672d5] text-white shadow-lg shadow-blue-100'
								: 'text-slate-600 hover:bg-slate-50 hover:text-[#2672d5]'}"
						>
							<div
								class="flex items-center justify-center w-6 h-6 mr-2 rounded-lg transition-colors
                                {activeTab === item
									? 'bg-white/20'
									: 'bg-slate-100 group-hover:bg-blue-100'}"
							>
								<i
									class="fa-solid fa-chevron-right text-[10px] {activeTab === item
										? 'text-white'
										: 'text-[#2672d5]'} transition-transform group-hover:translate-x-0.5"
								></i>
							</div>
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
		font-family: 'Roboto', sans-serif;
	}
	.uppercase {
		font-family: 'Roboto', sans-serif;
		font-weight: 700;
		letter-spacing: 0.1em;
	}
	.font-semibold {
		font-family: 'Roboto', sans-serif;
	}
</style>
