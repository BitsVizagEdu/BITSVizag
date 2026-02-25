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
		<aside
			class="w-full lg:w-[320px] p-4 lg:p-6 lg:sticky lg:top-0 h-fit z-10"
			aria-label="Sidebar"
		>
			<div
				class="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden"
			>
				<div
					class="px-5 py-4 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between"
				>
					<span class="text-[11px] font-bold text-slate-400 uppercase tracking-widest"
						>Criteria</span
					>
					<i class="fa-solid fa-list-check text-[#2672d5] lg:hidden"></i>
				</div>

				<!-- Mobile Navigation: Pills -->
				<div class="lg:hidden p-3 bg-white">
					<div class="flex overflow-x-auto gap-2 no-scrollbar pb-1">
						{#each items as item}
							<button
								on:click={() => (activeTab = item)}
								class="flex-shrink-0 flex items-center px-4 py-2.5 text-[13px] font-bold rounded-xl transition-all whitespace-nowrap
								{activeTab === item
									? 'bg-[#2672d5] text-white shadow-md'
									: 'bg-slate-50 text-slate-600 border border-slate-100'} "
							>
								{item}
							</button>
						{/each}
					</div>
				</div>

				<!-- Desktop Navigation: List -->
				<ul class="hidden lg:flex lg:flex-col gap-1 p-2">
					{#each items as item}
						<li>
							<button
								on:click={() => (activeTab = item)}
								class="w-full flex items-center px-4 py-3.5 text-[14px] font-semibold rounded-xl transition-all duration-300 text-left
								{activeTab === item
									? 'bg-[#2672d5] text-white shadow-lg shadow-blue-100 translate-x-1'
									: 'text-slate-600 hover:bg-slate-50 hover:text-[#2672d5]'} "
							>
								<i class="fa-solid fa-circle-check mr-3 text-[12px] opacity-70"></i>
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
