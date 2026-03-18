<script>
	import { items, replaceHyphenWithSpace } from './components/utils.js';
	import { activeTab, setActiveTabValue, showNavBar } from '$lib/stores/store.js';
	import { toggleIsActiveTab } from '$lib/stores/store.js';
	import Seo from '$lib/components/Seo.svelte';
	import { page } from '$app/stores';

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

	const getDepartmentMetadata = (slug) => {
		const defaultTitle = 'Engineering Departments | BITS Vizag';
		const defaultDescription =
			'Explore engineering and management departments at BITS Vizag including CSE, ECE, EEE, Civil, Mechanical, MBA and specialized programs in AI & ML and Cyber Security.';
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
			case 'Department of CIVIL':
				title = 'Civil Engineering Department | Infrastructure at BITS Vizag';
				description =
					'Civil Engineering department focusing on construction, structural design, environmental engineering, and sustainable infrastructure development.';
				break;
			case 'Department of MECH':
				title = 'Mechanical Engineering Department | BITS Vizag';
				description =
					'Mechanical Engineering department offering programs in thermal systems, design engineering, manufacturing, and mechanical innovations.';
				break;
			case 'Department of MBA':
				title = 'MBA Program | Management Studies at BITS Vizag';
				description =
					'MBA program at BITS Vizag providing management education in finance, marketing, operations, and business strategy for industry leadership.';
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
	$: meta = getDepartmentMetadata($page.params.slug);

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'EducationalOrganization',
		name: meta.title,
		description: meta.description,
		url: `https://bitsvizag.com/department/${$page.params.slug}`,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://bitsvizag.com/department/${$page.params.slug}`
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
	url={`https://bitsvizag.com/department/${$page.params.slug}`}
	imageUrl="https://bitsvizag.com/logo-150-2/logo-150-2.png"
	siteName="BITS Vizag"
	{structuredData}
/>

{#if !$showNavBar}
	<div class="min-h-screen bg-slate-50/30 flex flex-col lg:flex-row">
		<!-- Main Content Sidebar -->
		<aside
			class="w-full lg:w-[350px] p-4 lg:p-6 lg:sticky lg:top-0 h-fit"
			aria-label="Sidebar"
			style="font-family: 'Roboto', sans-serif;"
		>
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
