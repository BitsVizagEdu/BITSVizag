<script>
	import { items, replaceHyphenWithSpace } from './components/utils.js';
	import {
		activeTab,
		setActiveTabValue,
		showNavBar,
		toggleIsActiveTab
	} from '$lib/stores/store.js';

	import Library from './components/library.svelte';
	import Sports from './components/sports.svelte';
	import Laboratory from './components/laboratory.svelte';
	import Cafeteria from './components/cafeteria.svelte';
	import Hostel from './components/hostel.svelte';
	import Transport from './components/transport.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: if (data && data.route) {
		setActiveTabValue(data.route);
		toggleIsActiveTab(false);
	}
</script>

<svelte:head>
	<title>Facilities | BITS Vizag</title>
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
						>Campus Amenities</span
					>
					<i class="fa-solid fa-building-circle-check text-[#2672d5] lg:hidden"></i>
				</div>

				<!-- Mobile Navigation: Pills -->
				<div class="lg:hidden p-3 bg-white">
					<div class="flex overflow-x-auto gap-2 no-scrollbar pb-1">
						{#each items as item}
							<a
								href={`/facilities/${item}`}
								on:click={() => setActiveTabValue(item)}
								class="flex-shrink-0 flex items-center px-4 py-2.5 text-[13px] font-bold rounded-xl transition-all whitespace-nowrap
								{$activeTab === item
									? 'bg-[#2672d5] text-white shadow-md'
									: 'bg-slate-50 text-slate-600 border border-slate-100'} "
							>
								{replaceHyphenWithSpace(item)}
							</a>
						{/each}
					</div>
				</div>

				<!-- Desktop Navigation: List -->
				<ul class="hidden lg:flex lg:flex-col gap-1 p-2">
					{#each items as item}
						<li>
							<a
								href={`/facilities/${item}`}
								on:click={() => setActiveTabValue(item)}
								class="flex items-center px-4 py-3.5 text-[14px] font-semibold rounded-xl transition-all duration-300
								{$activeTab === item
									? 'bg-[#2672d5] text-white shadow-lg shadow-blue-100 translate-x-1'
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
				{#if $activeTab === 'Knowledge-Resource-Center'}
					<Library />
				{/if}
				{#if $activeTab === 'Sports'}
					<Sports />
				{/if}
				{#if $activeTab === 'Laboratories'}
					<Laboratory />
				{/if}
				{#if $activeTab === 'Cafeteria'}
					<Cafeteria />
				{/if}
				{#if $activeTab === 'Accomidation'}
					<Hostel />
				{/if}
				{#if $activeTab === 'Transport'}
					<Transport />
				{/if}
			</div>
		</main>
	</div>
{/if}

<style>
</style>
