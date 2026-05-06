<script>
	import { items } from './components/utils.js';
	import { setActiveTabValue, showNavBar } from '$lib/stores/store.js';
	import { toggleIsActiveTab } from '$lib/stores/store.js';
	import AboutShowcase from './components/AboutShowcase.svelte';
	import Seo from '$lib/components/Seo.svelte';

	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

	$: if (data && data.route) {
		setActiveTabValue(data.route);
		toggleIsActiveTab(false);
	}

	/** @param {string} slug */
	const getPageMetadata = (slug) => {
		const defaultTitle = 'About Us | BITS Vizag';
		const defaultDescription =
			'Learn more about Baba Institute of Technology and Science (BITS Vizag).';
		let title = defaultTitle;
		let description = defaultDescription;

		switch (slug) {
			case 'About-BITS':
				title = 'About BITS Vizag | Premier Engineering College';
				description =
					'Discover the mission, vision, and values of BITS Vizag, a leading institution for technical education.';
				break;
			case 'About-ABWEC':
				title = 'About ABWEC | BITS Vizag';
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
	let currentSlug;
	let structuredData;
	$: currentSlug = data?.route || $page.params.slug;
	$: meta = getPageMetadata(currentSlug);
	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		name: meta.title,
		description: meta.description,
		url: `https://bitsvizag.com/aboutus/${currentSlug}`,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://bitsvizag.com/aboutus/${currentSlug}`
		}
	};

	/** @type {Record<string, string>} */
	const tabLabels = {
		'About-ABWEC': 'About ABWEC',
		'About-BITS': 'About BITS',
		'Message-from-Secretary-&-Correspondent': 'Message from Secretary & Correspondent',
		'Message-from-Principal': 'Message from Principal'
	};

	/** @type {Record<string, {
		eyebrow: string;
		title: string;
		intro: string[];
		sections: { heading: string; text?: string; bullets?: string[] }[];
		imageSrc: string;
		imageAlt: string;
		personName?: string;
		personMeta?: string;
		personRole?: string;
		mediaFirst?: boolean;
		imageFit?: 'cover' | 'contain';
		disableImageMotion?: boolean;
		stickyMedia?: boolean;
	}>} */
	const aboutContent = {
		'About-BITS': {
			eyebrow: 'About Institution',
			title: 'About Our College',
			intro: [
				'Baba Institute of Technology and Sciences (BITS), established in 2008, is an autonomous, NAAC-accredited institution approved by AICTE and affiliated with JNTU-GV. Located in Visakhapatnam, BITS is committed to delivering value-based technical education through strong academics, modern infrastructure, and industry-oriented learning.',
				'The institute focuses on developing competent professionals with strong ethical values, leadership qualities, and a sense of social responsibility.'
			],
			sections: [
				{
					heading: 'Vision',
					text: 'To emerge as a leader in Engineering, Technology, Science, and Management education by transforming youth into dynamic professionals.'
				},
				{
					heading: 'Mission',
					bullets: [
						'Deliver quality, outcome-based technical education.',
						'Foster innovation, ethics, and professional competence.',
						'Strengthen industry-academia collaboration.',
						'Prepare students to be globally competitive and socially responsible.'
					]
				}
			],
			imageSrc: '/baba1.png',
			imageAlt: 'BITS Vizag campus building',
			personName: 'BITS Vizag',
			personRole: 'Excellence in Technical Education'
		},
		'About-ABWEC': {
			eyebrow: 'About Institution',
			title: 'About Dr. B.R. Ambedkar Welfare Educational Society',
			intro: [
				'Dr. B.R. Ambedkar Welfare Educational Society (ABWES) is a non-profit organization dedicated to promoting social justice through education. Guided by the ideals of Dr. B.R. Ambedkar, the trust views education as the most powerful tool for empowerment and inclusive development.',
				'In alignment with this vision, ABWES collaborates with BITS Vizag to strengthen access to quality higher education for students from diverse and underrepresented backgrounds.'
			],
			sections: [
				{
					heading: 'Strategic Support',
					text: 'Through this collaboration, ABWES has supported infrastructure development, scholarships, and academic enhancement at BITS Vizag. These efforts improve learning facilities, promote merit, and expand opportunities for deserving students.'
				},
				{
					heading: 'Shared Mission',
					text: 'The partnership reflects a shared commitment to academic excellence, ethical growth, social responsibility, and nation-building. It continues to create skilled, confident, and socially responsible professionals while honoring Dr. B.R. Ambedkar\'s enduring legacy.'
				}
			],
			imageSrc: '/header/trust1.png',
			imageAlt: 'Dr. B.R. Ambedkar Welfare Educational Society Logo',
			personName: 'ABWES Trust',
			personRole: 'Estd. 2008'
		},
		'Message-from-Secretary-&-Correspondent': {
			eyebrow: 'Leadership Message',
			title: 'Message From The Secretary & Correspondent',
			intro: [
				'Founded in 2008, BITS was built on a simple but powerful belief: knowledge is the only asset that never diminishes. What began as a shared vision has grown into an institution where the trust of students and parents remains our most valued achievement.',
				'My leadership approach is guided by discipline, responsibility, and a people-first mindset that values dignity, well-being, and long-term institutional commitment.'
			],
			sections: [
				{
					heading: 'Institutional Culture',
					text: 'Institutions do not grow through infrastructure alone. They grow through the people who build and sustain them. We remain focused on creating a secure, ethical, and motivated environment for faculty, staff, and students.'
				},
				{
					heading: 'Leadership Commitment',
					text: 'Our guiding principles are simple: walk the talk, embrace challenges, maintain transparency, and complete every responsibility with relentless effort. This commitment continues to shape young minds into capable and responsible citizens.'
				}
			],
			imageSrc: '/secmam-1.png',
			imageAlt: 'Portrait of Dr. K. Srilakshmi',
			personName: 'Dr. K. Srilakshmi',
			personRole: 'Secretary & Correspondent',
			imageFit: 'contain'
		},
		'Message-from-Principal': {
			eyebrow: 'Leadership Message',
			title: 'Message From The Principal',
			intro: [
				'It is my pleasure to welcome you to BITS Vizag, an institution driven by a clear vision: to evolve into a premier technical institute offering value-based education that nurtures competent and socially responsible technologists for a changing world.',
				'Since its inception, BITS Vizag has steadily evolved through a strong integration of state-of-the-art infrastructure and dedicated human resources.'
			],
			sections: [
				{
					heading: 'Academic Focus',
					text: 'We are committed to delivering professional education with creativity, innovation, and ethical values. Our dynamic academic environment supports knowledge creation, responsible application, and societal development through Outcome-Based Education and experiential learning.'
				},
				{
					heading: 'Student Transformation',
					text: 'At BITS Vizag, we shape students into skilled engineers and responsible citizens. Our holistic approach ensures every graduate is equipped with technical excellence, practical capability, and strong ethical grounding.'
				}
			],
			imageSrc: '/principal copy.jpg',
			imageAlt: 'Portrait of Dr. M. Rajan Babu',
			personName: 'Dr. M. Rajan Babu',
			personMeta: 'M.Tech, Ph.D.',
			personRole: 'Principal'
		}
	};

	let currentContent;
	$: currentContent = aboutContent[currentSlug] || aboutContent['About-BITS'];
</script>

<Seo
	title={meta.title}
	description={meta.description}
	url={`https://bitsvizag.com/aboutus/${currentSlug}`}
	imageUrl="/bits.jpg"
	siteName="BITS Vizag"
	{structuredData}
/>

{#if !$showNavBar}
	<div class="about-page-shell">
		<div class="about-layout">
			<nav class="about-top-tabs" aria-label="About pages navigation">
				<div class="about-top-tabs-inner">
					{#each items as item}
						<a
							href={`/aboutus/${item}`}
							class:active-tab={currentSlug === item}
							on:click={() => setActiveTabValue(item)}
							aria-current={currentSlug === item ? 'page' : undefined}
						>
							{tabLabels[item] || item}
						</a>
					{/each}
				</div>
			</nav>

			<main class="about-page-content">
				<AboutShowcase
					eyebrow={currentContent.eyebrow}
					title={currentContent.title}
					intro={currentContent.intro}
					sections={currentContent.sections}
					imageSrc={currentContent.imageSrc}
					imageAlt={currentContent.imageAlt}
					personName={currentContent.personName}
					personMeta={currentContent.personMeta}
					personRole={currentContent.personRole}
					mediaFirst={currentContent.mediaFirst || false}
					imageFit={currentContent.imageFit || 'cover'}
					disableImageMotion={currentContent.disableImageMotion || false}
					stickyMedia={currentContent.stickyMedia !== false}
				/>
			</main>
		</div>
	</div>
{/if}

<style>
	.about-page-shell {
		min-height: 100vh;
		background: linear-gradient(180deg, #f8fafc 0%, #ffffff 36%, #f8fafc 100%);
		font-family: 'Inter', 'Poppins', 'Segoe UI', sans-serif;
	}

	.about-layout {
		width: min(1300px, 96vw);
		margin: 0 auto;
		display: grid;
		grid-template-columns: 248px minmax(0, 1fr);
		gap: 1rem;
		align-items: start;
	}

	.about-top-tabs {
		position: sticky;
		top: 4.4rem;
		z-index: 20;
		align-self: start;
		border: 1px solid #e2e8f0;
		border-radius: 0.95rem;
		background: rgba(255, 255, 255, 0.86);
		backdrop-filter: blur(8px);
		box-shadow: 0 10px 24px -20px rgba(15, 23, 42, 0.4);
	}

	.about-top-tabs-inner {
		display: grid;
		gap: 0.45rem;
		padding: 0.65rem;
	}

	.about-top-tabs-inner a {
		display: block;
		text-decoration: none;
		font-size: 0.84rem;
		font-weight: 600;
		letter-spacing: 0.008em;
		color: #334155;
		padding: 0.62rem 0.78rem;
		border-radius: 0.7rem;
		border: 1px solid #dbe7f5;
		background: #ffffff;
		line-height: 1.35;
		transition:
			background-color 0.2s ease,
			color 0.2s ease,
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	.about-top-tabs-inner a:hover {
		color: #0f172a;
		border-color: #93c5fd;
		background: #f8fbff;
	}

	.about-top-tabs-inner a.active-tab {
		color: #ffffff;
		border-color: #0b4fb0;
		background: linear-gradient(90deg, #0b4fb0, #2563eb);
		box-shadow: 0 10px 22px -15px rgba(37, 99, 235, 0.75);
	}

	.about-page-content {
		padding: clamp(0.5rem, 0.95vw, 0.95rem) 0;
	}

	@media (max-width: 768px) {
		.about-layout {
			width: 100%;
			display: block;
		}

		.about-top-tabs {
			position: sticky;
			top: 3.4rem;
			border: none;
			border-radius: 0;
			background: rgba(248, 250, 252, 0.92);
			box-shadow: none;
		}

		.about-top-tabs-inner {
			display: flex;
			justify-content: flex-start;
			gap: 0.35rem;
			overflow-x: auto;
			padding: 0.5rem 0.1rem;
			scrollbar-width: thin;
			scroll-snap-type: x proximity;
		}

		.about-top-tabs-inner a {
			white-space: nowrap;
			font-size: 0.78rem;
			padding: 0.44rem 0.68rem;
			border-radius: 9999px;
			scroll-snap-align: start;
		}
	}
</style>
