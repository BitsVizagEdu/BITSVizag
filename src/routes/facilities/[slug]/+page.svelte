<script>
	import { items, replaceHyphenWithSpace } from './components/utils.js';
	import {
		activeTab,
		setActiveTabValue,
		showNavBar,
		toggleIsActiveTab
	} from '$lib/stores/store.js';
	import Seo from '$lib/components/Seo.svelte';
	import { page } from '$app/stores';

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

	const getFacilityMetadata = (slug) => {
		let title = 'Campus Facilities | BITS Vizag';
		let description =
			'Explore world-class campus facilities at BITS Vizag including modern hostels, laboratories, library, sports facilities, cafeteria, and transport services.';

		switch (slug) {
			case 'Knowledge-Resource-Center':
				title = 'Library & Knowledge Resource Center | BITS Vizag';
				description =
					'State-of-the-art library and knowledge resource center at BITS Vizag with extensive book collection, digital resources, and learning commons.';
				break;
			case 'Sports':
				title = 'Sports Facilities | Athletic Center at BITS Vizag';
				description =
					'Comprehensive sports facilities at BITS Vizag including indoor/outdoor courts, gymnasium, swimming pool, and athletic training center.';
				break;
			case 'Laboratories':
				title = 'Laboratories & Technical Facilities | BITS Vizag';
				description =
					'Well-equipped laboratories at BITS Vizag for engineering, science, and research work with modern instruments and software tools.';
				break;
			case 'Cafeteria':
				title = 'Cafeteria & Dining Facilities | BITS Vizag';
				description =
					'Multi-cuisine cafeteria at BITS Vizag offering hygienic food options, dining halls, and recreational spaces for students and staff.';
				break;
			case 'Accomidation':
				title = 'Hostels & Accommodation | Residential Facilities at BITS Vizag';
				description =
					'Comfortable hostel accommodation at BITS Vizag with modern amenities, Wi-Fi, recreational facilities, and 24/7 security for resident students.';
				break;
			case 'Transport':
				title = 'Campus Transport Services | BITS Vizag';
				description =
					'Comprehensive transport services at BITS Vizag with buses for campus commute, pick-up/drop facilities, and convenient scheduling.';
				break;
		}

		return { title, description };
	};

	let meta;
	let currentSlug;
	let structuredData;
	$: currentSlug = data?.route || $page.params.slug;
	$: meta = getFacilityMetadata(currentSlug);
	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Place',
		name: meta.title,
		description: meta.description,
		url: `https://bitsvizag.com/facilities/${currentSlug}`,
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'India'
		},
		containedInPlace: {
			'@type': 'EducationalOrganization',
			name: 'BITS Vizag',
			url: 'https://bitsvizag.com'
		}
	};
</script>

<Seo
	title={meta.title}
	description={meta.description}
	url={`https://bitsvizag.com/facilities/${currentSlug}`}
	imageUrl="https://bitsvizag.com/logo-150-2/logo-150-2.png"
	siteName="BITS Vizag"
	{structuredData}
/>

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
								href={`/facilities/${encodeURIComponent(item)}`}
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
								href={`/facilities/${encodeURIComponent(item)}`}
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
				{#if currentSlug === 'Knowledge-Resource-Center'}
					<Library />
				{/if}
				{#if currentSlug === 'Sports'}
					<Sports />
				{/if}
				{#if currentSlug === 'Laboratories'}
					<Laboratory />
				{/if}
				{#if currentSlug === 'Cafeteria'}
					<Cafeteria />
				{/if}
				{#if currentSlug === 'Accomidation'}
					<Hostel />
				{/if}
				{#if currentSlug === 'Transport'}
					<Transport />
				{/if}
			</div>
		</main>
	</div>
{/if}

<style>
</style>
