<script>
	import { items } from './components/utils.js';
	import { replaceHyphenWithSpace } from '$lib/utils.js';
	import { activeTab, setActiveTabValue, showNavBar } from '$lib/stores/store.js';
	import { toggleIsActiveTab } from '$lib/stores/store.js';
	import SideNav from '$lib/components/SideNav.svelte';

	import Bits from './components/bits.svelte';
	import Principal from './components/principal.svelte';
	import Chairman from './components/chairman.svelte';
	import Trust from './components/trust.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: if (data && data.route) {
		setActiveTabValue(data.route);
		toggleIsActiveTab(false);
	}
</script>

<svelte:head>
	<title>About Us | BITS Vizag</title>
</svelte:head>

{#if !$showNavBar}
	<div class="min-h-screen bg-slate-50/30 flex flex-col lg:flex-row">
		<SideNav
			{items}
			activeTab={$activeTab}
			title="About Institution"
			basePath="/aboutus"
			onSelect={(item) => setActiveTabValue(item)}
		/>

		<!-- Main Content Area -->
		<main class="flex-1 p-4 lg:p-6">
			<div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 lg:p-10 min-h-[600px]">
				{#if $activeTab === 'About-ABWS'}
					<Trust />
				{/if}
				{#if $activeTab === 'About-BITS'}
					<Bits />
				{/if}
				{#if $activeTab === 'Message-from-Secretary' || $activeTab === 'Message-from-Secretary-&-Correspondent'}
					<Chairman />
				{/if}
				{#if $activeTab === 'Message-from-Principal'}
					<Principal />
				{/if}
			</div>
		</main>
	</div>
{/if}

<style>
</style>
