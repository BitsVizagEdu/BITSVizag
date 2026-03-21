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
		<!-- Course Navigation Tabs -->
		<div class="w-full bg-white border-b border-slate-200">
			<div class="max-w-6xl mx-auto px-4 lg:px-6 py-6">
				<h1 class="text-3xl font-bold text-slate-900 mb-6">Engineering Courses</h1>
				<div class="flex gap-3 flex-wrap">
					<a
						href="/courses/Under-Graduation"
						class="px-6 py-3 rounded-lg font-bold transition-all duration-200
						{currentSlug === 'Under-Graduation'
							? 'bg-[#2672d5] text-white shadow-lg'
							: 'bg-slate-100 text-slate-700 hover:bg-slate-200'}"
					>
						<i class="fa-solid fa-scroll mr-2"></i>
						Under Graduation
					</a>
					<a
						href="/courses/Post-Graduation"
						class="px-6 py-3 rounded-lg font-bold transition-all duration-200
						{currentSlug === 'Post-Graduation'
							? 'bg-[#2672d5] text-white shadow-lg'
							: 'bg-slate-100 text-slate-700 hover:bg-slate-200'}"
					>
						<i class="fa-solid fa-award mr-2"></i>
						Post Graduation
					</a>
				</div>
			</div>
		</div>

		<!-- Main Content Area - Full Width Centered -->
		<main class="w-full max-w-6xl mx-auto p-4 lg:p-6">
			<div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 lg:p-10 min-h-[600px]">
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
</style>
