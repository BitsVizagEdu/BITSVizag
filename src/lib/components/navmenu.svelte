<script>
	import {
		activeTab,
		setActiveTabValue,
		tempTabValue,
		toggleIsActiveTab,
		toggleNavBar
	} from '../stores/store.js';
	import { dropdown, NavItems } from './navItem.js';
	import { replaceHyphenWithSpace } from '../../routes/aboutus/[slug]/components/utils.js';

	let nav2 = ['Staff', 'AICTE', 'Admission', 'Alumni', 'Downloads', 'Placements', 'Instagram'];

	/** @param {number} index */
	function dropdown_toggle(index) {
		dropdown.update((val) => {
			val[index] = !val[index];
			return val;
		});
	}

	/** @param {string} item */
	function onClick(item) {
		toggleIsActiveTab(true);
		setActiveTabValue(item);
		toggleNavBar();
	}

	/** @param {string} folder
	 * @param {string} item
	 */
	function getItemHref(folder, item) {
		return `${folder}/${encodeURIComponent(item)}`;
	}
</script>

<div
	id="menu"
	on:click={toggleNavBar}
	on:keydown={(e) => e.key === 'Enter' && toggleNavBar()}
	role="button"
	tabindex="0"
	class=" bg-sortwhite lg:hidden p-3 hover:cursor-pointer ml-auto"
>
	<a href="#menu" class=" ">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-9 h-9 ml-auto mr-0 text-black"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	</a>
</div>

<div id="navf1" class="md:block lg:hidden">
	<div id="navf" class="bg-white border-t border-slate-100">
		<div class="con py-4 h-screen overflow-y-auto pb-32">
			{#each $NavItems as navName, index}
				<div class="border-b border-slate-50 last:border-0">
					<div
						class="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors"
					>
						<div class="flex-1 flex items-center justify-between">
							{#if navName.folder && navName.folder !== ''}
								<a
									href={navName.folder}
									on:click={(e) => {
										if (navName.items.length === 0) toggleNavBar();
									}}
									class="text-slate-900 font-bold text-lg capitalize tracking-tight block flex-1"
								>
									{navName.name}
								</a>
							{:else}
								<span 
									on:click={() => dropdown_toggle(index)}
									on:keydown={(e) => e.key === 'Enter' && dropdown_toggle(index)}
									role="button"
									tabindex="0"
									class="text-slate-900 font-bold text-lg capitalize tracking-tight flex-1 cursor-pointer"
								>
									{navName.name}
								</span>
							{/if}

							{#if navName.items.length > 0}
								<button
									on:click|stopPropagation={() => dropdown_toggle(index)}
									class="p-2 -mr-2"
									aria-label="Toggle Submenu"
								>
									<svg
										class="h-5 w-5 text-slate-400 transition-transform duration-300 {$dropdown[index]
											? 'rotate-180 text-amber-500'
											: ''}"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
							{/if}
						</div>
					</div>

					{#if $dropdown[index] && navName.items.length > 0}
						<div class="bg-slate-50/50 pb-2">
							{#each navName.items as item, i}
								<a
									on:click={() => {
										toggleNavBar();
										onClick(item);
									}}
									href={getItemHref(navName.folder, item)}
									class="flex items-center px-10 py-3 text-slate-600 hover:text-amber-600 transition-colors border-l-2 border-transparent hover:border-amber-500"
								>
									<span class="text-base font-semibold capitalize"
										>{replaceHyphenWithSpace(item)}</span
									>
								</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.con {
		font-family: 'Inter', sans-serif;
		-webkit-overflow-scrolling: touch;
	}
</style>
