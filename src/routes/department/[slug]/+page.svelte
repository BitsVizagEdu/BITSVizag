<script>
	import { items, replaceHyphenWithSpace } from './components/utils.js';
	import { activeTab, setActiveTabValue, showNavBar } from '$lib/stores/store.js';
	import { toggleIsActiveTab } from '$lib/stores/store.js';

	import DepartmentofBsh from './components/Department of BS&H.svelte';
	import DepartmentofCse from './components/Department of CSE.svelte';
	import DepartmentofCseAiMl from './components/Department of CSE (AI & ML).svelte';
	import DepartmentofCseCyber from './components/Department of CSE (Cyber Security).svelte';
	import DepartmentofEce from './components/Department of ECE.svelte';
	import DepartmentofEee from './components/Department of EEE.svelte';
	import DepartmentofCivil from './components/Department of CIVIL.svelte';
	import DepartmentofMech from './components/Department of MECH.svelte';
	import DepartmentofMba from './components/Department of MBA.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: if (data && data.route) {
		setActiveTabValue(data.route);
		toggleIsActiveTab(false);
	}
</script>

<svelte:head>
	<title>Departments | BITS Vizag</title>
</svelte:head>

{#if !$showNavBar}
	<div class="min-h-screen bg-slate-50/30 flex flex-col lg:flex-row">
		<!-- Main Content Sidebar -->
		<aside class="w-full lg:w-[350px] p-4 lg:p-6 lg:sticky lg:top-0 h-fit" aria-label="Sidebar">
			<div
				class="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 p-2 lg:p-3"
			>
				<div class="px-4 py-3 mb-2 border-b border-slate-50 hidden lg:block">
					<span class="text-[11px] font-bold text-slate-400 uppercase tracking-widest"
						>Departments</span
					>
				</div>

				<!-- Responsive Navigation: Scrollable on mobile, List on desktop -->
				<ul class="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 no-scrollbar p-1">
					{#each items as item}
						<li class="flex-shrink-0">
							<a
								href={`/department/${item}`}
								on:click={() => setActiveTabValue(item)}
								class="flex items-center px-5 py-3 lg:px-4 lg:py-3.5 text-[14px] font-semibold rounded-xl transition-all duration-300 whitespace-nowrap
								{$activeTab === item
									? 'bg-[#2672d5] text-white shadow-lg shadow-blue-100 lg:translate-x-1'
									: 'text-slate-600 hover:bg-slate-50 hover:text-[#2672d5]'} "
							>
								<i class="fa-solid fa-circle-info mr-3 text-[12px] opacity-70"></i>
								<span>{replaceHyphenWithSpace(item)}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</aside>

		<!-- Main Content Area -->
		<main class="flex-1 p-4 lg:p-6">
			<div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 lg:p-10 min-h-[600px]">
				{#if $activeTab === 'Department of BS&H'}
					<DepartmentofBsh />
				{/if}

				{#if $activeTab === 'Department of CSE'}
					<DepartmentofCse />
				{/if}

				{#if $activeTab === 'Department of CSE (AI & ML)'}
					<DepartmentofCseAiMl />
				{/if}

				{#if $activeTab === 'Department of CSE (Cyber Security)'}
					<DepartmentofCseCyber />
				{/if}
				{#if $activeTab === 'Department of ECE'}
					<DepartmentofEce />
				{/if}
				{#if $activeTab === 'Department of EEE'}
					<DepartmentofEee />
				{/if}
				{#if $activeTab === 'Department of CIVIL'}
					<DepartmentofCivil />
				{/if}
				{#if $activeTab === 'Department of MECH'}
					<DepartmentofMech />
				{/if}
				{#if $activeTab === 'Department of MBA'}
					<DepartmentofMba />
				{/if}
			</div>
		</main>
	</div>
{/if}

<style>
</style>
