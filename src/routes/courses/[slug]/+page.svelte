<script>
	import { items } from './components/utils.js';
	import {
		activeTab,
		setActiveTabValue,
		showNavBar,
		toggleIsActiveTab
	} from '$lib/stores/store.js';
	import Seo from '$lib/components/Seo.svelte';
	import { page } from '$app/stores';

	import PostGraduation from './components/Post Graduation.svelte';
	import UnderGraduation from './components/Under Graduation.svelte';
	import PremiumSideNav from '$lib/components/PremiumSideNav.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: if (data && data.route) {
		setActiveTabValue(data.route);
		toggleIsActiveTab(false);
	}

	const getCourseMetadata = (slug) => {
		let title = 'Engineering Courses | BITS Vizag';
		let description =
			'Explore B.Tech, MBA, and M.Tech programs at BITS Vizag offering world-class engineering education in multiple specializations.';

		switch (slug) {
			case 'Under-Graduation':
				title = 'B.Tech Programs | Engineering Courses at BITS Vizag';
				description =
					'B.Tech (Under-Graduate) programs at BITS Vizag in CSE, ECE, EEE, Mechanical, Civil and specialized branches with 4-year curriculum.';
				break;
			case 'Post-Graduation':
				title = 'M.Tech & MBA Programs | Post-Graduation at BITS Vizag';
				description =
					'M.Tech and MBA post-graduation programs at BITS Vizag offering advanced technical and management education for career advancement.';
				break;
		}

		return { title, description };
	};

	let meta;
	let currentSlug;
	let structuredData;
	$: currentSlug = data?.route || $page.params.slug;
	$: meta = getCourseMetadata(currentSlug);
	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'EducationalOccupationalProgram',
		name: meta.title,
		description: meta.description,
		url: `https://bitsvizag.com/courses/${currentSlug}`,
		provider: {
			'@type': 'EducationalOrganization',
			name: 'BITS Vizag',
			url: 'https://bitsvizag.com'
		}
	};
</script>

<Seo
	title={meta.title}
	description={meta.description}
	url={`https://bitsvizag.com/courses/${currentSlug}`}
	imageUrl="https://bitsvizag.com/logo-150-2/logo-150-2.png"
	siteName="BITS Vizag"
	{structuredData}
/>



{#if !$showNavBar}
	<div class="min-h-screen bg-slate-50/30">
		<!-- Premium Navigation -->
		<PremiumSideNav
			items={['Under-Graduation', 'Post-Graduation']}
			activeTab={currentSlug}
			title="Engineering Courses"
			basePath="/courses"
		/>

		<!-- Main Content Area - Full Width Centered -->
		<main class="w-full max-w-6xl mx-auto p-4 lg:p-6">
			<div class="content-container">
				{#if currentSlug === 'Under-Graduation'}
					<UnderGraduation />
				{/if}

				{#if currentSlug === 'Post-Graduation'}
					<PostGraduation />
				{/if}
			</div>
		</main>
	</div>
{/if}

<style>
	.content-container {
		background: #ffffff;
		border-radius: 2.5rem;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
		border: 1px solid #f1f5f9;
		padding: 1.5rem;
		min-height: 600px;
	}

	@media (min-width: 1024px) {
		.content-container {
			padding: 2.5rem;
		}
	}
</style>

