<script>
	import { items, replaceHyphenWithSpace } from './components/utils.js';
	import { activeTab, setActiveTabValue, showNavBar } from '$lib/stores/store.js';
	import { toggleIsActiveTab } from '$lib/stores/store.js';
	import Seo from '$lib/components/Seo.svelte';
	import PremiumSideNav from '$lib/components/PremiumSideNav.svelte';
	import { page } from '$app/stores';

	import DepartmentofBsh from './components/Department of BS&H.svelte';
	import DepartmentofCse from './components/Department of CSE.svelte';
	import DepartmentofCseAiMl from './components/Department of CSE (AI & ML).svelte';
	import DepartmentofCseCyber from './components/Department of CSE (Cyber Security).svelte';
	import DepartmentofEce from './components/Department of ECE.svelte';
	import DepartmentofEee from './components/Department of EEE.svelte';
	import DepartmentofMech from './components/Department of MECH.svelte';
	// import DepartmentofMba from './components/Department of MBA.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: if (data && data.route) {
		setActiveTabValue(data.route);
		toggleIsActiveTab(false);
	}

	/** @param {string} slug */
	const getDepartmentMetadata = (slug) => {
		const defaultTitle = 'Engineering Departments | BITS Vizag';
		const defaultDescription =
			'Explore engineering and management departments at BITS Vizag including CSE, ECE, EEE, Mechanical, MBA and specialized programs in AI & ML and Cyber Security.';
		let title = defaultTitle;
		let description = defaultDescription;

		switch (slug) {
			case 'Department of CSE':
				title = 'CSE Department | Computer Science & Engineering at BITS Vizag';
				description =
					'CSE Department at BITS Vizag offers innovative Computer Science & Engineering curriculum with focus on modern programming, software development, and IT trends.';
				break;
			case 'Department of CSE (AI & ML)':
				title = 'CSE AI & ML Department | Artificial Intelligence at BITS Vizag';
				description =
					'Specialized CSE department focusing on Artificial Intelligence and Machine Learning with hands-on training in AI/ML technologies and applications.';
				break;
			case 'Department of CSE (Cyber Security)':
				title = 'Cyber Security Department | Information Security at BITS Vizag';
				description =
					'Dedicated Cyber Security program at BITS Vizag providing in-depth knowledge in network security, cryptography, and ethical hacking.';
				break;
			case 'Department of ECE':
				title = 'ECE Department | Electronics & Communication Engineering at BITS Vizag';
				description =
					'Electronics and Communication Engineering department offering comprehensive curriculum in signal processing, wireless communication, and embedded systems.';
				break;
			case 'Department of EEE':
				title = 'EEE Department | Electrical & Electronics Engineering at BITS Vizag';
				description =
					'Electrical & Electronics Engineering department with programs in power systems, electrical machines, and modern power generation technologies.';
				break;
			case 'Department of MECH':
				title = 'Mechanical Engineering Department | BITS Vizag';
				description =
					'Mechanical Engineering department at BITS Vizag offering advanced programs in thermal systems, CAD/CAM design, manufacturing, and automotive innovations.';
				break;

			case 'Department of BS&H':
				title = 'Humanities Department | Basic Sciences at BITS Vizag';
				description =
					'Department of Basic Sciences & Humanities providing foundational knowledge in physics, chemistry, mathematics, and soft skills development.';
				break;
		}

		return { title, description };
	};

	let meta;
	/** @type {string} */
	let currentSlug = '';
	let structuredData;
	$: currentSlug = data?.route || $page.params.slug;
	$: meta = getDepartmentMetadata(currentSlug);
	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'EducationalOrganization',
		name: meta.title,
		description: meta.description,
		url: `https://bitsvizag.com/department/${currentSlug}`,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://bitsvizag.com/department/${currentSlug}`
		},
		parentOrganization: {
			'@type': 'EducationalOrganization',
			name: 'BITS Vizag',
			url: 'https://bitsvizag.com'
		}
	};
</script>

<Seo
	title={meta.title}
	description={meta.description}
	url={`https://bitsvizag.com/department/${currentSlug}`}
	imageUrl="https://bitsvizag.com/logo-150-2/logo-150-2.png"
	siteName="BITS Vizag"
	{structuredData}
/>

{#if !$showNavBar}
	{#if currentSlug === 'Department of CSE' || currentSlug === 'Department of CSE (AI & ML)' || currentSlug === 'Department of CSE (Cyber Security)' || currentSlug === 'Department of ECE' || currentSlug === 'Department of EEE' || currentSlug === 'Department of MECH' || currentSlug === 'Department of BS&H'}
		{#if currentSlug === 'Department of CSE'}
			<DepartmentofCse />
		{:else if currentSlug === 'Department of CSE (AI & ML)'}
			<DepartmentofCseAiMl />
		{:else if currentSlug === 'Department of CSE (Cyber Security)'}
			<DepartmentofCseCyber />
		{:else if currentSlug === 'Department of ECE'}
			<DepartmentofEce />
		{:else if currentSlug === 'Department of EEE'}
			<DepartmentofEee />
		{:else if currentSlug === 'Department of MECH'}
			<DepartmentofMech />
		{:else if currentSlug === 'Department of BS&H'}
			<DepartmentofBsh />
		{/if}
	{:else}
		<!-- Premium Centered Navigation -->
		<PremiumSideNav
			{items}
			activeTab={currentSlug}
			title="Our Departments"
			basePath="/department"
			onSelect={(item) => setActiveTabValue(item)}
		/>

		<div class="min-h-screen bg-slate-50/30">
			<!-- Main Content Area -->
			<main class="w-full max-w-6xl mx-auto p-4 lg:p-6">
				<div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 lg:p-10 min-h-[600px]">
					{#if currentSlug === 'Department of MBA'}
						<DepartmentofMba />
					{/if}
					{#if currentSlug === 'Department of CSE (AI & ML)'}
						<DepartmentofCseAiMl />
					{/if}
					{#if currentSlug === 'Department of CSE (Cyber Security)'}
						<DepartmentofCseCyber />
					{/if}
					{#if currentSlug === 'Department of EEE'}
						<DepartmentofEee />
					{/if}
					<!-- Removed Civil department rendering per requested cleanup -->
				</div>
			</main>
		</div>
	{/if}
{/if}

<style>
</style>
