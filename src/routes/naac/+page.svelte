<script>
	let activeTab = 'Criteria 1';

	let items = [
		'Criteria 1',
		'Criteria 2',
		'Criteria 3',
		'Criteria 4',
		'Criteria 5',
		'Criteria 6',
		'Criteria 7'
	];

	import Criteria1 from './components/criteria1.svelte';
	import Criteria2 from './components/criteria2.svelte';
	import Criteria3 from './components/criteria3.svelte';
	import Criteria4 from './components/criteria4.svelte';
	import Criteria5 from './components/criteria5.svelte';
	import Criteria6 from './components/criteria6.svelte';
	import Criteria7 from './components/criteria7.svelte';

	import { showNavBar } from '$lib/stores/store.js';
</script>

<svelte:head>
	<title>NAAC | BITS Vizag</title>
</svelte:head>

{#if !$showNavBar}
	<div class="min-h-screen bg-slate-50/30 flex flex-col lg:flex-row">
		<!-- Main Content Sidebar -->
		<aside class="w-full lg:w-[320px] p-4 lg:p-6 lg:sticky lg:top-0 h-fit" aria-label="Sidebar">
			<div
				class="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 p-2 lg:p-3"
			>
				<div class="px-4 py-3 mb-2 border-b border-slate-50 hidden lg:block">
					<span class="text-[11px] font-bold text-slate-400 uppercase tracking-widest"
						>Criteria</span
					>
				</div>

				<!-- Responsive Navigation: Scrollable on mobile, List on desktop -->
				<ul class="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 no-scrollbar p-1">
					{#each items as item}
						<li class="flex-shrink-0">
							<button
								on:click={() => (activeTab = item)}
								class="flex items-center px-5 py-3 lg:px-4 lg:py-3.5 text-[14px] font-semibold rounded-xl transition-all duration-300 whitespace-nowrap text-left
								{activeTab === item
									? 'bg-[#2672d5] text-white shadow-lg shadow-blue-100 lg:translate-x-1'
									: 'text-slate-600 hover:bg-slate-50 hover:text-[#2672d5]'} "
							>
								<i class="fa-solid fa-circle-info mr-3 text-[12px] opacity-70"></i>
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
				{#if activeTab === 'Criteria 1'}
					<Criteria1 />
				{/if}
				{#if activeTab === 'Criteria 2'}
					<Criteria2 />
				{/if}
				{#if activeTab === 'Criteria 3'}
					<Criteria3 />
				{/if}
				{#if activeTab === 'Criteria 4'}
					<Criteria4 />
				{/if}
				{#if activeTab === 'Criteria 5'}
					<Criteria5 />
				{/if}
				{#if activeTab === 'Criteria 6'}
					<Criteria6 />
				{/if}
				{#if activeTab === 'Criteria 7'}
					<Criteria7 />
				{/if}
			</div>
		</main>
	</div>
{/if}

<style>
</style>
