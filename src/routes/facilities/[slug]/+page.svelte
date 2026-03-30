<script>
	import { items, getFacilityLabel } from './components/utils.js';
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

	/** @param {string} slug */
	const getFacilityMetadata = (slug) => {
		let title = 'Campus Facilities | BITS Vizag';
		let description =
			'Explore world-class campus facilities at BITS Vizag including modern hostels, laboratories, library, sports facilities, cafeteria, and transport services.';

		switch (slug) {
			case 'Knowledge-Resource-Center':
				title = 'Knowledge Center | BITS Vizag';
				description =
					'Modern library with extensive books, digital resources, and quiet study spaces.';
				break;
			case 'Sports':
				title = 'Sports Facilities | BITS Vizag';
				description =
					'Well-equipped outdoor and indoor facilities for sports, fitness, and teamwork.';
				break;
			case 'Laboratories':
				title = 'Laboratories | BITS Vizag';
				description =
					'Modern labs for engineering education with hands-on technical training.';
				break;
			case 'Cafeteria':
				title = 'Cafeteria | BITS Vizag';
				description =
					'Clean and spacious cafeteria offering healthy multi-cuisine food options.';
				break;
			case 'Accommdation':
			case 'Accomidation':
				title = 'Accommodation | BITS Vizag';
				description =
					'Comfortable and secure on-campus hostels for safe and convenient student living.';
				break;
			case 'Transport':
				title = 'Transport | BITS Vizag';
				description =
					'Reliable bus services covering all major city routes for safe commute.';
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
	<div class="premium-facilities-shell min-h-screen flex flex-col lg:flex-row">
		<!-- Main Content Sidebar -->
		<aside
			class="w-full lg:w-[320px] p-4 lg:p-6 lg:sticky lg:top-0 h-fit z-10"
			aria-label="Sidebar"
		>
			<div
				class="bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_-20px_rgba(3,28,71,0.35)] border border-slate-100 overflow-hidden"
			>
				<div
					class="px-5 py-4 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-100 flex items-center justify-between"
				>
					<span class="text-[11px] font-bold text-slate-500 uppercase tracking-[0.22em]"
						>Campus Facilities</span
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
								class="flex-shrink-0 flex items-center px-4 py-2.5 text-[13px] font-bold rounded-xl transition-all duration-300 whitespace-nowrap
								{$activeTab === item
									? 'bg-[#1e293b] text-white shadow-lg'
									: 'bg-slate-50 text-slate-600 border border-slate-100 hover:border-slate-300'} "
							>
								{getFacilityLabel(item)}
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
								class="flex items-center px-4 py-3.5 text-[14px] font-bold rounded-xl transition-all duration-300
								{$activeTab === item
									? 'bg-[#1e293b] text-white shadow-md translate-x-1'
									: 'text-slate-600 hover:bg-slate-50 hover:text-[#1e293b] hover:translate-x-[2px]'} "
							>
								<i class="fa-solid fa-chevron-right mr-3 text-[10px] opacity-70"></i>
								<span>{getFacilityLabel(item)}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</aside>

		<!-- Main Content Area -->
		<main class="flex-1 p-4 lg:p-6">
			<div
				class="premium-main-panel bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-100 p-6 lg:p-10 min-h-[600px]"
			>
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
				{#if currentSlug === 'Accommdation'}
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
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

	.premium-facilities-shell {
		font-family: 'Roboto', 'SF Pro Text', 'SF Pro Display', -apple-system, BlinkMacSystemFont,
			'Segoe UI', sans-serif;
		background:
			radial-gradient(circle at 0% 0%, rgba(15, 77, 168, 0.1), transparent 35%),
			radial-gradient(circle at 100% 0%, rgba(12, 132, 201, 0.08), transparent 35%),
			linear-gradient(180deg, #f8fbff 0%, #eef4fa 100%);
	}

	.premium-main-panel {
		animation: premiumRise 0.7s ease;
		box-shadow: 0 20px 48px -24px rgba(3, 28, 71, 0.35);
	}

	@keyframes premiumRise {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
