<script>
	import Seo from '$lib/components/Seo.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				'@id': 'https://bitsvizag.edu.in/best-engineering-college-in-vizag',
				url: 'https://bitsvizag.edu.in/best-engineering-college-in-vizag',
				name: 'Best Engineering College in Vizag | BITS Vizag B.Tech Admissions 2026',
				description: 'Discover why BITS Vizag is recognized as the best engineering college in Visakhapatnam. Offering NAAC accredited B.Tech degrees, 90%+ placements, state-of-the-art labs, and expert faculty.',
				isPartOf: {
					'@type': 'WebSite',
					'@id': 'https://bitsvizag.edu.in/#website',
					url: 'https://bitsvizag.edu.in',
					name: 'BITS Vizag'
				}
			},
			{
				'@type': 'FAQPage',
				mainEntity: [
					{
						'@type': 'Question',
						name: 'Why is BITS Vizag considered the best engineering college in Vizag?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'BITS Vizag (Baba Institute of Technology and Sciences) stands out due to its NAAC accreditation, AICTE approval, JNTUK affiliation, 90%+ campus placement record, advanced research labs, and experienced faculty dedicated to outcome-based education.'
						}
					},
					{
						'@type': 'Question',
						name: 'What B.Tech courses are offered at BITS Vizag?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'BITS Vizag offers B.Tech programs in Computer Science & Engineering (CSE), Artificial Intelligence & Machine Learning (AI&ML), Cyber Security, Electronics & Communication Engineering (ECE), Electrical & Electronics Engineering (EEE), Mechanical Engineering, and Civil Engineering.'
						}
					},
					{
						'@type': 'Question',
						name: 'How are campus placements at BITS Vizag?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'BITS Vizag maintains a stellar placement record with over 90% eligible students placed in top multinational companies like TCS, Infosys, Wipro, Accenture, Cognizant, Tech Mahindra, and HCL.'
						}
					},
					{
						'@type': 'Question',
						name: 'How can I apply for B.Tech admission at BITS Vizag for 2026?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Admissions are conducted through AP EAPCET (EAMCET) counseling for Category-A seats. Category-B (Management Quota) seats can be applied for directly through the official website or by visiting the PM Palem campus in Visakhapatnam.'
						}
					}
				]
			}
		]
	};

	let openFaq = null;
	function toggleFaq(index) {
		openFaq = openFaq === index ? null : index;
	}

	const faqs = [
		{
			q: 'Why is BITS Vizag considered the best engineering college in Vizag?',
			a: 'BITS Vizag (Baba Institute of Technology and Sciences) stands out due to its NAAC accreditation, AICTE approval, JNTUK affiliation, 90%+ campus placement record, advanced research labs, and experienced faculty dedicated to outcome-based education.'
		},
		{
			q: 'What B.Tech courses are offered at BITS Vizag?',
			a: 'BITS Vizag offers B.Tech programs in Computer Science & Engineering (CSE), Artificial Intelligence & Machine Learning (AI&ML), Cyber Security, Electronics & Communication Engineering (ECE), Electrical & Electronics Engineering (EEE), Mechanical Engineering, and Civil Engineering.'
		},
		{
			q: 'How are campus placements at BITS Vizag?',
			a: 'BITS Vizag maintains a stellar placement record with over 90% eligible students placed in top multinational companies like TCS, Infosys, Wipro, Accenture, Cognizant, Tech Mahindra, and HCL with competitive package offers.'
		},
		{
			q: 'Is BITS Vizag AICTE approved and affiliated with JNTUK?',
			a: 'Yes, BITS Vizag is fully approved by AICTE (New Delhi), accredited by NAAC, recognized by the Government of Andhra Pradesh, and permanently affiliated with JNTU Kakinada.'
		},
		{
			q: 'How can I apply for B.Tech admission at BITS Vizag for 2026?',
			a: 'Admissions are conducted through AP EAPCET (EAMCET) counseling for Category-A seats. Category-B (Management Quota) seats can be applied for directly through the official website or by visiting the PM Palem campus in Visakhapatnam.'
		}
	];
	const breadcrumbs = [
		{ name: 'Home', item: 'https://bitsvizag.edu.in' },
		{ name: 'Best Engineering College in Vizag', item: 'https://bitsvizag.edu.in/best-engineering-college-in-vizag' }
	];
</script>

<Seo
	title="Best Engineering College in Vizag | BITS Vizag B.Tech Admissions 2026"
	description="Looking for the best engineering college in Vizag? BITS Vizag offers AICTE approved B.Tech programs in CSE, AI/ML, ECE, EEE & Mech with 90%+ placements & modern campus."
	url="https://bitsvizag.edu.in/best-engineering-college-in-vizag"
	imageUrl="https://bitsvizag.edu.in/hero-bits.png"
	siteName="BITS Vizag"
	{structuredData}
	{breadcrumbs}
/>

<main class="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
	<!-- Hero Section -->
	<div class="max-w-5xl mx-auto text-center space-y-6">
		<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold tracking-wide uppercase">
			<i class="fa-solid fa-award"></i> NAAC Accredited & AICTE Approved Campus
		</div>
		<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
			Best Engineering College in Vizag – <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-500">BITS Vizag</span>
		</h1>
		<p class="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
			Empowering future technological leaders in Visakhapatnam with world-class engineering education, state-of-the-art laboratories, industry-aligned curriculum, and exceptional career placements.
		</p>
		<div class="flex flex-wrap items-center justify-center gap-4 pt-4">
			<a
				href="/application-form-2"
				class="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-lg shadow-lg hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300"
			>
				Apply for 2026 Admissions <i class="fa-solid fa-arrow-right ml-2"></i>
			</a>
			<a
				href="/placements"
				class="px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-lg hover:border-amber-500/50 hover:text-white transition-all duration-300"
			>
				View Placement Report
			</a>
		</div>
	</div>

	<!-- Key Highlights Grid -->
	<section class="max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		<div class="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center hover:border-amber-500/40 transition-all">
			<div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl font-bold">
				90%+
			</div>
			<h3 class="text-lg font-bold text-white mb-2">Campus Placements</h3>
			<p class="text-slate-400 text-sm">Consistently placing graduates in premier MNCs with top CTC packages.</p>
		</div>
		<div class="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center hover:border-amber-500/40 transition-all">
			<div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl">
				<i class="fa-solid fa-microchip"></i>
			</div>
			<h3 class="text-lg font-bold text-white mb-2">Cutting-Edge R&D Labs</h3>
			<p class="text-slate-400 text-sm">Advanced computer centers, AI/ML hubs, and specialized engineering facilities.</p>
		</div>
		<div class="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center hover:border-amber-500/40 transition-all">
			<div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl">
				<i class="fa-solid fa-user-graduate"></i>
			</div>
			<h3 class="text-lg font-bold text-white mb-2">Expert Ph.D. Faculty</h3>
			<p class="text-slate-400 text-sm">Mentorship by experienced professors focused on hands-on practical learning.</p>
		</div>
		<div class="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center hover:border-amber-500/40 transition-all">
			<div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl">
				<i class="fa-solid fa-building-columns"></i>
			</div>
			<h3 class="text-lg font-bold text-white mb-2">JNTUK Affiliation</h3>
			<p class="text-slate-400 text-sm">Rigorous academic standards aligned with national technical guidelines.</p>
		</div>
	</section>

	<!-- Comprehensive Content Section -->
	<section class="max-w-4xl mx-auto mt-20 space-y-12 text-slate-300 leading-relaxed">
		<article class="space-y-6">
			<h2 class="text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-4">
				Why BITS Vizag is Recognized as the Best Engineering College in Visakhapatnam
			</h2>
			<p>
				Choosing the right technical institution is the single most critical step in shaping a successful engineering career. <strong>Baba Institute of Technology and Sciences (BITS Vizag)</strong>, established under the visionary management of ABWEC, has earned its reputation as one of the <em>best engineering colleges in Vizag</em> by offering transformative education, cutting-edge research facilities, and incredible placement opportunities.
			</p>
			<p>
				Located in the scenic environment near Pothinamallayya Palem (PM Palem), Visakhapatnam, BITS Vizag provides a serene yet vibrant campus atmosphere conducive to innovation, analytical thinking, and holistic personality development. Approved by the <strong>All India Council for Technical Education (AICTE)</strong> and permanently affiliated with <strong>JNTU Kakinada</strong>, BITS Vizag strictly adheres to outcome-based education (OBE) paradigms.
			</p>
		</article>

		<article class="space-y-6">
			<h2 class="text-2xl font-bold text-white tracking-tight border-b border-slate-800 pb-4">
				Popular B.Tech Programs Offered at BITS Vizag
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
				<div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
					<h3 class="text-xl font-bold text-amber-400 mb-2">Computer Science & Engineering (CSE)</h3>
					<p class="text-sm text-slate-300">Focusing on full-stack development, cloud computing, software engineering, and data structures. Highly demanded by top tech MNCs during recruitment.</p>
				</div>
				<div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
					<h3 class="text-xl font-bold text-amber-400 mb-2">CSE (Artificial Intelligence & Machine Learning)</h3>
					<p class="text-sm text-slate-300">Specialized degree program designed for future AI engineers, data scientists, and automation specialists working on modern neural networks.</p>
				</div>
				<div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
					<h3 class="text-xl font-bold text-amber-400 mb-2">Electronics & Communication (ECE)</h3>
					<p class="text-sm text-slate-300">Covers VLSI design, embedded systems, IoT, and wireless communication with hands-on hardware laboratory training.</p>
				</div>
				<div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
					<h3 class="text-xl font-bold text-amber-400 mb-2">Electrical & Electronics (EEE) & Mechanical</h3>
					<p class="text-sm text-slate-300">Core engineering branches backed by heavy machinery labs, power electronics workstations, CAD/CAM design tools, and green energy research.</p>
				</div>
			</div>
		</article>

		<article class="space-y-6">
			<h2 class="text-2xl font-bold text-white tracking-tight border-b border-slate-800 pb-4">
				Industry Placements & Career Readiness Cell
			</h2>
			<p>
				At BITS Vizag, education extends beyond textbook theories. Our Training and Placement Cell works tirelessly throughout the academic year to equip engineering students with critical coding skills, aptitude mastery, soft skills training, and mock interview preparations.
			</p>
			<p>
				Top multinational corporations including TCS, Wipro, Infosys, Accenture, Cognizant, Tech Mahindra, HCL, and prominent core engineering firms regularly conduct recruitment drives on campus, offering rewarding job opportunities to B.Tech graduates.
			</p>
		</article>

		<!-- Internal Links Hub -->
		<div class="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-amber-500/20 space-y-4">
			<h3 class="text-xl font-bold text-white">Explore More About BITS Vizag</h3>
			<p class="text-sm text-slate-300">Navigate to our dedicated department portals and campus facility guides:</p>
			<div class="flex flex-wrap gap-3 pt-2">
				<a href="/cse-college-vizag" class="px-4 py-2 rounded-lg bg-slate-800 text-amber-400 text-sm font-semibold hover:bg-slate-700">Top CSE College in Vizag</a>
				<a href="/b-tech-admissions-vizag" class="px-4 py-2 rounded-lg bg-slate-800 text-amber-400 text-sm font-semibold hover:bg-slate-700">B.Tech Admissions 2026</a>
				<a href="/placements" class="px-4 py-2 rounded-lg bg-slate-800 text-amber-400 text-sm font-semibold hover:bg-slate-700">Placement Record</a>
				<a href="/infrastructure" class="px-4 py-2 rounded-lg bg-slate-800 text-amber-400 text-sm font-semibold hover:bg-slate-700">Campus Infrastructure</a>
				<a href="/contactus" class="px-4 py-2 rounded-lg bg-slate-800 text-amber-400 text-sm font-semibold hover:bg-slate-700">Contact Us</a>
			</div>
		</div>

		<!-- Interactive FAQ Section -->
		<article class="space-y-6 pt-6">
			<h2 class="text-3xl font-bold text-white tracking-tight border-b border-slate-800 pb-4">
				Frequently Asked Questions (FAQs)
			</h2>
			<div class="space-y-4">
				{#each faqs as faq, i}
					<div class="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60">
						<button
							on:click={() => toggleFaq(i)}
							class="w-full p-5 text-left font-semibold text-lg text-white flex items-center justify-between gap-4 hover:bg-slate-800/50 transition-colors"
						>
							<span>{faq.q}</span>
							<i class="fa-solid fa-chevron-down text-amber-400 transition-transform duration-300 {openFaq === i ? 'rotate-180' : ''}"></i>
						</button>
						{#if openFaq === i}
							<div class="p-5 pt-0 text-slate-300 text-base leading-relaxed border-t border-slate-800/50">
								{faq.a}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</article>
	</section>
</main>
