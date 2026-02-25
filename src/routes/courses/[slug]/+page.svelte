<script>
	import { items } from './components/utils.js';
	import { replaceHyphenWithSpace } from '$lib/utils.js';
	import {
		activeTab,
		setActiveTabValue,
		showNavBar,
		toggleIsActiveTab
	} from '$lib/stores/store.js';
	import SideNav from '$lib/components/SideNav.svelte';

	import PostGraduation from './components/Post Graduation.svelte';
	import UnderGraduation from './components/Under Graduation.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: if (data && data.route) {
		setActiveTabValue(data.route);
		toggleIsActiveTab(false);
	}
</script>

<svelte:head>
	<title>Courses Offered | BITS Vizag</title>
</svelte:head>

{#if !$showNavBar}
	<div class="min-h-screen bg-slate-50/30 flex flex-col lg:flex-row">
		<SideNav
			{items}
			activeTab={$activeTab}
			title="Academic Levels"
			basePath="/courses"
			onSelect={(item) => setActiveTabValue(item)}
		/>

		<!-- Main Content Area -->
		<main class="flex-1 p-4 lg:p-6">
			<div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 lg:p-10 min-h-[600px]">
				{#if $activeTab === 'Under-Graduation'}
					<UnderGraduation />
				{/if}

				{#if $activeTab === 'Post-Graduation'}
					<PostGraduation />
				{/if}
			</div>
		</main>
	</div>
{/if}

<style>
</style>
