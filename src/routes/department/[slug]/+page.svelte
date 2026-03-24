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
	import DepartmentofCivil from './components/Department of CIVIL.svelte';
	import DepartmentofMech from './components/Department of MECH.svelte';
	import DepartmentofMba from './components/Department of MBA.svelte';

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

	/** @type {Record<string, string[]>} */
	const facultyOrderByDepartment = {
		'Department of CSE': [
			'B.POORNASATYANARAYANA',
			'U. Padma Mohan',
			'D. Kanakeswara',
			'P. T. S. Priya',
			'P. Joshua Raju',
			'T. CHAITANYA',
			'S. Samyukta',
			'G. Kishore',
			'P.Gayathri',
			'M.Sai prasanna',
			'D.Sriya Rani',
			'G. Sushma',
			'S. Harshini',
			'S. MOULI',
			'N. Vineeth',
			'N. Raju',
			'B. PRASAD',
			'K. Sravani Reddy',
			'R. Mallika',
			'K. Jeevitha',
			'D. Sailaxmi',
			'S.Madhu Latha'
		],
		'Department of ECE': [
			'Dr. B. Kiranmai',
			'K. Pradeep',
			'Dr. Y. V. Bhaskara Lakshmi',
			'H. Ravi Kishore',
			'G. Arjun Kumar',
			'T. Vishnu Murthy',
			'CH. M. M. KOMALI',
			'Ch. SANTOSHI KUMARI',
			'T. Pavani'
		],
		'Department of EEE': [
			'U. KAMARAJU',
			'G. Anil Kumar',
			'P. Arun Tez',
			'B. U. S. PREM SAGAR',
			'D. Sudharnitha',
			'G. Alirani',
			'V. Madhava Rao'
		],
		'Department of MECH': [
			'P. UMA CHAITHANYA',
			'Dr. A. S. Bhanu Prasanna',
			'FATHIMUNNISA BEGUM',
			'H. SATYANARAYANA',
			'Vikas Ranjan',
			'Reddy Ramesh',
			'V. Preetham Kumar',
			'Parameswar Rao'
		],
		'Department of CIVIL': [
			'Pavani',
			'Dr. Shahazadi Begum',
			'P. LAVANYA',
			'P. Saranya',
			'K. Lavanya'
		],
		'Department of MBA': [
			'K. SIVEESHA',
			'H. Vasudeva Rao',
			'B. G. S. Prasad',
			'K. NARESH KUMAR',
			'B. Santoshi Kumari',
			'L. Srinivasa'
		],
		'Department of BS&H': [
			'Dr. P. JAYARANGARAO',
			'Dr. Paromita Mukherjee',
			'Dr.T.Suneetha Rani',
			'P. V. Murali',
			'Dr. Piyali Varma',
			'P. MAHESH',
			'P.Surya Kumari',
			'G. JYOTHI',
			'K .Serisha',
			'B. V. KAVITHA',
			'L. Priyanka',
			'Dr. M. Mounika',
			'V. Jyothi',
			'A. PYDIRAJU'
		]
	};

	let meta;
	/** @type {string} */
	let currentSlug = '';
	let structuredData;
	let orderedFaculty;
	$: currentSlug = data?.route || $page.params.slug;
	$: meta = getDepartmentMetadata(currentSlug);
	$: orderedFaculty = facultyOrderByDepartment[currentSlug] || [];
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
				{#if currentSlug === 'Department of BS&H'}
					<DepartmentofBsh />
				{/if}
				{#if currentSlug === 'Department of CSE'}
					<DepartmentofCse />
				{/if}
				{#if currentSlug === 'Department of CSE (AI & ML)'}
					<DepartmentofCseAiMl />
				{/if}
				{#if currentSlug === 'Department of CSE (Cyber Security)'}
					<DepartmentofCseCyber />
				{/if}
				{#if currentSlug === 'Department of ECE'}
					<DepartmentofEce />
				{/if}
				{#if currentSlug === 'Department of EEE'}
					<DepartmentofEee />
				{/if}
				{#if currentSlug === 'Department of CIVIL'}
					<DepartmentofCivil />
				{/if}
				{#if currentSlug === 'Department of MECH'}
					<DepartmentofMech />
				{/if}
				{#if currentSlug === 'Department of MBA'}
					<DepartmentofMba />
				{/if}

				{#if orderedFaculty.length > 0}
					<section class="mt-10 border-t border-slate-200 pt-8">
						<h3 class="text-xl md:text-2xl font-semibold text-slate-900 mb-4">Faculty Order</h3>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
							{#each orderedFaculty as facultyName, index}
								<div class="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800">
									<span class="font-semibold text-slate-600 mr-2">{index + 1}.</span>
									{facultyName}
								</div>
							{/each}
						</div>
					</section>
				{/if}
			</div>
		</main>
	</div>
{/if}
<style>
</style>
