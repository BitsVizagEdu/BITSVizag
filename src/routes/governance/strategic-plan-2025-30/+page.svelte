<script>
	const quickFacts = [
		{ label: 'Planning Horizon', value: '2025-26 to 2029-30', icon: 'fa-solid fa-calendar-days' },
		{ label: 'Core Lens', value: 'SWOC-driven growth', icon: 'fa-solid fa-compass-drafting' },
		{ label: 'Outcome Focus', value: 'Quality, innovation, employability', icon: 'fa-solid fa-chart-line' },
		{ label: 'Institutional Goal', value: 'Autonomy and excellence', icon: 'fa-solid fa-building-columns' }
	];

	const swoc = [
		{
			title: 'Strengths',
			icon: 'fa-solid fa-shield-heart',
			accent: 'emerald',
			items: [
				'Visionary and proactive management',
				'Dynamic leadership and clear organizational structure',
				'Qualified faculty, ICT-enabled pedagogy, and state-of-the-art infrastructure',
				'Industry and international collaborations with strong mentoring'
			]
		},
		{
			title: 'Weaknesses',
			icon: 'fa-solid fa-triangle-exclamation',
			accent: 'amber',
			items: [
				'Limited focus on higher education pathways',
				'Entry-level gaps in language and critical thinking',
				'Need for stronger outcome consistency across programs'
			]
		},
		{
			title: 'Opportunities',
			icon: 'fa-solid fa-lightbulb',
			accent: 'sky',
			items: [
				'Evolve into a university and self-sustaining model',
				'Academic exchange with foreign universities',
				'MOUs with institutes of national importance',
				'Alumni engagement, networking, and faculty development'
			]
		},
		{
			title: 'Challenges',
			icon: 'fa-solid fa-route',
			accent: 'rose',
			items: [
				'Rising cost of education',
				'Shrinking core-job opportunities',
				'High competition from nearby colleges',
				'Faculty exposure gaps in industry and research'
			]
		}
	];

	const pillars = [
		{
			head: 'Teaching, Learning and Assessment',
			summary: 'Modern curriculum, better pedagogy, and measurable student outcomes.',
			icon: 'fa-solid fa-chalkboard-user',
			points: [
				'Outcome-based education and experiential learning',
				'Internships, MOOCs, industrial training, and ICT tools',
				'Stronger mentoring and student support systems',
				'Continuous curriculum refinement with stakeholder input'
			]
		},
		{
			head: 'Skill Development and Entrepreneurship',
			summary: 'Build employability, social responsibility, and startup readiness.',
			icon: 'fa-solid fa-briefcase',
			points: [
				'Structured training and placement support',
				'Language, communication, and confidence-building programs',
				'Incubation, alumni mentoring, and entrepreneurship exposure',
				'Community projects, NSS, NCC, and rural immersion'
			]
		},
		{
			head: 'Research, Innovation and Higher Education',
			summary: 'Advance research culture, consultancy, and global academic pathways.',
			icon: 'fa-solid fa-flask-vial',
			points: [
				'Centres of excellence and industry-supported labs',
				'Publications, patents, sponsored projects, and consultancy',
				'Faculty development and industrial exposure programs',
				'GATE, IELTS, and international study-abroad guidance'
			]
		}
	];

	const highlights = [
		'Curriculum revision cycles aligned to UG and PG needs',
		'Faculty recruitment with strong academic credentials',
		'Learning management systems and digital-first delivery',
		'Industry interface through visits, internships, and experts',
		'Quality assurance through IQAC, audits, and feedback loops',
		'R&D, consultancy, and global collaboration pipelines'
	];

	const visionPoints = [
		'Lead in engineering, technology, science, and management education.',
		'Build dynamic professionals through talent, discipline, and innovation.',
		'Position BITS Vizag as a center of excellence with sustainable growth.'
	];
</script>

<svelte:head>
	<title>Strategic Plan 2025-30 | BITS Vizag</title>
	<meta
		name="description"
		content="BITS Vizag Strategic Plan 2025-26 to 2029-30 presented as a premium institutional page with SWOC analysis, focus areas, and vision goals."
	/>
</svelte:head>

<section class="relative overflow-hidden bg-slate-950 text-white">
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.28),_transparent_32%),radial-gradient(circle_at_left,_rgba(14,165,233,0.18),_transparent_28%),linear-gradient(135deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]"></div>
	<div class="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:44px_44px]"></div>

	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
		<div class="max-w-4xl">
			<div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200 backdrop-blur">
				<i class="fa-solid fa-compass" aria-hidden="true"></i>
				Governance / Strategic Plan
			</div>
			<h1 class="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
				Strategic Plan
				<span class="block bg-gradient-to-r from-orange-300 via-amber-100 to-sky-200 bg-clip-text text-transparent">
					2025-26 to 2029-30
				</span>
			</h1>
			<p class="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
				A premium, readable version of the institute’s strategic roadmap. This page turns the plan into a structured experience with clear priorities, decision points, and measurable direction.
			</p>

			<div class="mt-8 flex flex-wrap gap-3">
				<a
					href="/pdfs/Strategic-Plan-2025-30.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400"
				>
					<i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
					Open PDF
				</a>
				<a
					href="#pillars"
					class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/14"
				>
					<i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
					Explore the plan
				</a>
			</div>
		</div>

		<div class="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
			{#each quickFacts as fact}
				<div class="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-xl shadow-[0_24px_80px_rgba(2,6,23,0.45)]">
					<div class="flex items-center gap-3 text-orange-200">
						<i class={fact.icon} aria-hidden="true"></i>
						<span class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">{fact.label}</span>
					</div>
					<p class="mt-4 text-lg font-semibold text-white">{fact.value}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
			<div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
				<div class="flex items-center gap-3 text-orange-600">
					<i class="fa-solid fa-book-open text-xl" aria-hidden="true"></i>
					<h2 class="text-2xl font-black tracking-tight text-slate-900">Preamble at a glance</h2>
				</div>
				<p class="mt-5 text-slate-600 leading-8">
					BITS Vizag, founded in 2008, uses this plan to align its growth with academic excellence, confidence-building education, and industry-ready outcomes. The institution builds on strong accreditation, autonomous progress, active placements, and a culture of student care.
				</p>
				<p class="mt-4 text-slate-600 leading-8">
					The five-year roadmap is designed to strengthen teaching-learning quality, research and consultancy, entrepreneurship, and higher education pathways while sustaining a balanced, future-focused campus environment.
				</p>
				<div class="mt-6 flex flex-wrap gap-2">
					{#each ['Autonomy-ready', 'Outcome-driven', 'Industry-linked', 'Student-centric', 'Research aware'] as badge}
						<span class="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{badge}</span>
					{/each}
				</div>
			</div>

			<div class="rounded-[2rem] bg-slate-900 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
				<div class="flex items-center gap-3 text-orange-300">
					<i class="fa-solid fa-star text-xl" aria-hidden="true"></i>
					<h2 class="text-2xl font-black tracking-tight">Key highlights</h2>
				</div>
				<div class="mt-6 space-y-3">
					{#each highlights as point}
						<div class="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
							<div class="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400"></div>
							<p class="text-sm leading-7 text-slate-200">{point}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section id="swoc" class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="max-w-3xl">
			<p class="text-sm font-bold uppercase tracking-[0.28em] text-orange-600">SWOC analysis</p>
			<h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">The strategic logic behind the plan</h2>
			<p class="mt-4 text-slate-600 leading-8">
				The roadmap is built on a full internal and external assessment so that strengths are leveraged, weaknesses are fixed, opportunities are expanded, and real-world challenges are addressed with practical actions.
			</p>
		</div>

		<div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
			{#each swoc as card}
				<div class="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
					<div class="flex items-center gap-3">
						<div class={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.accent === 'emerald' ? 'bg-emerald-100 text-emerald-700' : card.accent === 'amber' ? 'bg-amber-100 text-amber-700' : card.accent === 'sky' ? 'bg-sky-100 text-sky-700' : 'bg-rose-100 text-rose-700'}`}>
							<i class={card.icon} aria-hidden="true"></i>
						</div>
						<h3 class="text-xl font-bold text-slate-900">{card.title}</h3>
					</div>
					<ul class="mt-5 space-y-3 text-sm leading-7 text-slate-600">
						{#each card.items as item}
							<li class="flex gap-3">
								<span class={`mt-2 h-2 w-2 shrink-0 rounded-full ${card.accent === 'emerald' ? 'bg-emerald-500' : card.accent === 'amber' ? 'bg-amber-500' : card.accent === 'sky' ? 'bg-sky-500' : 'bg-rose-500'}`}></span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="pillars" class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="max-w-3xl">
			<p class="text-sm font-bold uppercase tracking-[0.28em] text-sky-600">Strategic focus areas</p>
			<h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Three pillars that shape the next five years</h2>
		</div>

		<div class="mt-10 grid gap-6 lg:grid-cols-3">
			{#each pillars as pillar}
				<div class="group rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.07)] transition-transform duration-200 hover:-translate-y-1">
					<div class="flex items-start justify-between gap-4">
						<div>
							<div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/20">
								<i class={pillar.icon} aria-hidden="true"></i>
							</div>
							<h3 class="mt-5 text-2xl font-bold tracking-tight text-slate-900">{pillar.head}</h3>
						</div>
					</div>
					<p class="mt-4 text-sm leading-7 text-slate-600">{pillar.summary}</p>
					<div class="mt-6 space-y-3">
						{#each pillar.points as point}
							<div class="flex gap-3 rounded-2xl bg-slate-50 px-4 py-3">
								<div class="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500"></div>
								<p class="text-sm leading-6 text-slate-700">{point}</p>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
			<div class="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
				<p class="text-sm font-bold uppercase tracking-[0.28em] text-orange-300">Vision 2029-30</p>
				<h2 class="mt-3 text-3xl font-black tracking-tight">A roadmap to excellence</h2>
				<p class="mt-4 text-slate-300 leading-8">
					The final outcome of this plan is a stronger institutional identity built on quality teaching, meaningful research, global linkages, and long-term sustainability.
				</p>
				<div class="mt-6 space-y-4">
					{#each visionPoints as item}
						<div class="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
							<i class="fa-solid fa-circle-check mt-1 text-orange-300" aria-hidden="true"></i>
							<p class="text-sm leading-7 text-slate-200">{item}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="grid gap-6 md:grid-cols-2">
				<div class="rounded-[2rem] bg-white p-7 text-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
					<p class="text-sm font-bold uppercase tracking-[0.24em] text-orange-600">Implementation style</p>
					<p class="mt-4 text-lg font-semibold leading-8">
						Stakeholder-driven, measurable, and built for continuous improvement.
					</p>
				</div>
				<div class="rounded-[2rem] bg-gradient-to-br from-orange-500 to-amber-400 p-7 text-white shadow-[0_24px_60px_rgba(249,115,22,0.22)]">
					<p class="text-sm font-bold uppercase tracking-[0.24em] text-orange-50">Download</p>
					<p class="mt-4 text-lg font-semibold leading-8">
						Need the original file? Open the official PDF anytime.
					</p>
					<a
						href="/pdfs/Strategic-Plan-2025-30.pdf"
						target="_blank"
						rel="noopener noreferrer"
						class="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-orange-600 transition-transform duration-200 hover:-translate-y-0.5"
					>
						<i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
						Open PDF
					</a>
				</div>
			</div>
		</div>
	</div>
</section>