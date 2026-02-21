<script>
	let activeTab = 'AICTE Approval';

	let items = ['AICTE Approval', 'University Affilation Letter', 'Accredation & Ranking'];

	import Aecte from './components/aicte.svelte';
	import Univesirty from './components/univesirty.svelte';
	import Acceredation from './components/acceredation.svelte';

	import { showNavBar } from '$lib/stores/store.js';
</script>

<svelte:head>
	<title>Mandatory Disclosure | BITS Vizag</title>
</svelte:head>

{#if !$showNavBar}
	<div class="min-h-screen bg-slate-50/30 flex flex-col lg:flex-row">
		<!-- Main Content Sidebar -->
		<aside class="w-full lg:w-[320px] p-4 lg:p-6 lg:sticky lg:top-0 h-fit" aria-label="Sidebar">
			<div
				class="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 p-2 lg:p-3"
			>
				<div class="px-4 py-3 mb-2 border-b border-slate-50 hidden lg:block">
					<span class="text-[11px] font-black text-slate-400 uppercase tracking-widest"
						>Disclosure</span
					>
				</div>

				<!-- Responsive Navigation: Scrollable on mobile, List on desktop -->
				<ul class="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 no-scrollbar p-1">
					{#each items as item}
						<li class="flex-shrink-0">
							<button
								on:click={() => (activeTab = item)}
								class="flex items-center px-5 py-3 lg:px-4 lg:py-3.5 text-[14px] font-bold rounded-xl transition-all duration-300 whitespace-nowrap text-left
								{activeTab === item
									? 'bg-[#2672d5] text-white shadow-lg shadow-blue-100 lg:translate-x-1'
									: 'text-slate-600 hover:bg-slate-50 hover:text-[#2672d5]'} "
							>
								<i class="fa-solid fa-file-contract mr-3 text-[12px] opacity-70"></i>
								<span>{item}</span>
							</button>
						</li>
					{/each}
				</ul>
			</div>
		</aside>

		<!-- Main Content Area -->
		<main class="flex-1 p-4 lg:p-6">
			<div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 lg:p-10 min-h-[600px]">
				{#if activeTab === 'AICTE Approval'}
					<Aecte />
				{/if}
				{#if activeTab === 'University Affilation Letter'}
					<Univesirty />
				{/if}
				{#if activeTab === 'Accredation & Ranking'}
					<Acceredation />
				{/if}
			</div>
		</main>
	</div>
{/if}

<style>
</style>
