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
	import Seo from '$lib/components/Seo.svelte';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

	$: if (data && data.route) {
		setActiveTabValue(data.route);
		toggleIsActiveTab(false);
	}

	const getPageMetadata = (slug) => {
		const defaultTitle = 'About Us | BITS Vizag';
		const defaultDescription =
			'Learn more about Bhogawati Institute of Technology and Science (BITS Vizag).';
		let title = defaultTitle;
		let description = defaultDescription;

		switch (slug) {
			case 'About-BITS':
				title = 'About BITS Vizag | Premier Engineering College';
				description =
					'Discover the mission, vision, and values of BITS Vizag, a leading institution for technical education.';
				break;
			case 'About-ABWS':
				title = 'About ABWS | BITS Vizag';
				description = 'Learn about the trust behind BITS Vizag.';
				break;
			case 'Message-from-Secretary-&-Correspondent':
				title = 'Message from the Secretary & Correspondent | BITS Vizag';
				description = 'A message from the Secretary & Correspondent of BITS Vizag.';
				break;
			case 'Message-from-Principal':
				title = 'Message from the Principal | BITS Vizag';
				description = 'A message from the Principal of BITS Vizag.';
				break;
		}

		return { title, description };
	};

	let meta;
	$: meta = getPageMetadata($page.params.slug);

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		name: meta.title,
		description: meta.description,
		url: `https://bitsvizag.com/aboutus/${$page.params.slug}`,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://bitsvizag.com/aboutus/${$page.params.slug}`
		}
	};
</script>

<Seo
	title={meta.title}
	description={meta.description}
	url={`https://bitsvizag.com/aboutus/${$page.params.slug}`}
	siteName="BITS Vizag"
	{structuredData}
/>

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
