<script>
	import Seo from '$lib/components/Seo.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				'@id': 'https://bitsvizag.edu.in/b-tech-admissions-vizag',
				url: 'https://bitsvizag.edu.in/b-tech-admissions-vizag',
				name: 'B.Tech Admissions Vizag 2026 | AP EAPCET Cutoffs & Management Seats - BITS Vizag',
				description: 'Complete guide for B.Tech Admissions 2026 at BITS Vizag. Check AP EAPCET (EAMCET) counseling process, management quota eligibility, fee structure & scholarships.'
			},
			{
				'@type': 'FAQPage',
				mainEntity: [
					{
						'@type': 'Question',
						name: 'What is the eligibility criteria for B.Tech admission at BITS Vizag?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Candidates must have passed 10+2 (Intermediate) with Physics, Chemistry, and Mathematics (MPC) securing at least 45% aggregate marks (40% for reserved categories) and qualify in AP EAPCET (EAMCET).'
						}
					},
					{
						'@type': 'Question',
						name: 'How can I apply for Category-B (Management Quota) seats?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Category-B management quota seats are allotted based on merit in 10+2 marks or AP EAPCET ranks. Candidates can apply online through the BITS Vizag admission portal or directly visit the campus.'
						}
					}
				]
			}
		]
	};
</script>

<Seo
	title="B.Tech Admissions Vizag 2026 | AP EAPCET Cutoffs & Fee Structure - BITS Vizag"
	description="Apply for B.Tech admissions 2026 in Visakhapatnam at BITS Vizag. Information on AP EAPCET counseling, management seats in CSE, AI/ML, ECE, EEE, and scholarships."
	url="https://bitsvizag.edu.in/b-tech-admissions-vizag"
	imageUrl="https://bitsvizag.edu.in/hero-bits.png"
	siteName="BITS Vizag"
	{structuredData}
/>

<main class="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
	<div class="max-w-5xl mx-auto text-center space-y-6">
		<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold tracking-wide uppercase">
			<i class="fa-solid fa-graduation-cap"></i> Admissions Open 2026 - 2027
		</div>
		<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
			B.Tech Admissions Vizag 2026 – <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-500">BITS Vizag</span>
		</h1>
		<p class="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
			Secure your seat at one of Visakhapatnam’s leading engineering institutes. Step-by-step admission guide for AP EAPCET (EAMCET) Category-A and Category-B Management Quota.
		</p>
		<div class="pt-4">
			<a
				href="/application-form-2"
				class="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-lg shadow-lg hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300 inline-block"
			>
				Start B.Tech Application 2026 <i class="fa-solid fa-arrow-right ml-2"></i>
			</a>
		</div>
	</div>

	<section class="max-w-4xl mx-auto mt-16 space-y-10 text-slate-300 leading-relaxed">
		<div class="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
			<h2 class="text-2xl font-bold text-white">B.Tech Admission Pathways at BITS Vizag</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
				<div class="p-5 rounded-xl bg-slate-950 border border-slate-800">
					<h3 class="text-lg font-bold text-amber-400 mb-2">Category-A (Convenor Quota - 70%)</h3>
					<p class="text-sm">Allotted based on merit rank achieved in AP EAPCET (EAMCET) entrance examination through web counseling conducted by APSCHE.</p>
				</div>
				<div class="p-5 rounded-xl bg-slate-950 border border-slate-800">
					<h3 class="text-lg font-bold text-amber-400 mb-2">Category-B (Management Quota - 30%)</h3>
					<p class="text-sm">Filled directly by the college management based on 10+2 (Intermediate) marks and JEE Main / AP EAPCET scores as per state guidelines.</p>
				</div>
			</div>
		</div>

		<div class="space-y-6">
			<h2 class="text-2xl font-bold text-white">Eligibility & Documents Required</h2>
			<ul class="space-y-3 list-disc list-inside bg-slate-900 p-6 rounded-2xl border border-slate-800">
				<li>Passed 10+2 / Intermediate with Physics, Chemistry, and Mathematics (MPC).</li>
				<li>Valid AP EAPCET 2026 Rank Card & Hall Ticket.</li>
				<li>SSC Marks Memo / 10th Standard Certificate.</li>
				<li>Intermediate Marks Memo & Pass Certificate.</li>
				<li>Transfer Certificate (TC) & Study/Bonafide Certificates (6th to 12th).</li>
				<li>Aadhaar Card copy & recent passport-size photographs.</li>
			</ul>
		</div>

		<!-- Internal Navigation Links -->
		<div class="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap gap-4 items-center justify-between">
			<span class="font-bold text-white">Explore BITS Vizag Engineering Branches:</span>
			<div class="flex flex-wrap gap-2">
				<a href="/cse-college-vizag" class="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 text-sm font-semibold hover:bg-amber-500/20">CSE & AI/ML</a>
				<a href="/best-engineering-college-in-vizag" class="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 text-sm font-semibold hover:bg-amber-500/20">Why BITS Vizag</a>
				<a href="/placements" class="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 text-sm font-semibold hover:bg-amber-500/20">Placements</a>
			</div>
		</div>
	</section>
</main>
