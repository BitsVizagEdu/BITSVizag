<script>
	let activeTab = 'obe'; // 'obe' or 'esep'

	const obeObjectives = [
		{ text: 'Set high academic standards', icon: 'fa-solid fa-graduation-cap' },
		{ text: 'Ensure better execution of course delivery', icon: 'fa-solid fa-chalkboard-user' },
		{ text: 'Maintain full transparency in student assessments', icon: 'fa-solid fa-eye' },
		{ text: 'Provide core support and essential autonomy for students', icon: 'fa-solid fa-users-gear' }
	];

	const nominationCriteria = [
		{ title: 'Courses Taught', desc: 'Prior experience and success in teaching the courses multiple times.', icon: 'fa-solid fa-history' },
		{ title: 'Domain Expertise', desc: 'Possession of strong domain knowledge and academic qualifications.', icon: 'fa-solid fa-book-open' },
		{ title: 'Department Seniority', desc: 'Seniority and active contribution to departmental activities and administration.', icon: 'fa-solid fa-users' },
		{ title: 'Emerging Area Knowledge', desc: 'Continuous updating of technical knowledge in cutting-edge, emerging areas.', icon: 'fa-solid fa-bolt' },
		{ title: 'Team Spirit', desc: 'Possession of an amicable nature, team spirit, and capability for conflict resolution.', icon: 'fa-solid fa-handshake' }
	];

	const ccActivities = [
		{
			title: 'Course Materials & Delivery',
			desc: 'Prepare common course materials detailing the syllabus, session contents, and adopted teaching methods.',
			icon: 'fa-solid fa-file-invoice'
		},
		{
			title: 'Structured Lesson Plans',
			desc: 'Create lesson plans that allocate specific times for subtopics to ensure uniform syllabus coverage as per the academic calendar.',
			icon: 'fa-solid fa-calendar-alt'
		},
		{
			title: 'Advanced Resources & PPTs',
			desc: 'Prepare advanced PPTs, suggest textbooks, reference materials, online resources, and video lectures. Address run-time delivery hassles.',
			icon: 'fa-solid fa-tv'
		},
		{
			title: 'Weekly Progress Monitoring',
			desc: 'Conduct weekly meetings to monitor course progress and discuss/approve topics to be delivered in the upcoming week.',
			icon: 'fa-solid fa-comments'
		},
		{
			title: 'Pedagogical Support',
			desc: 'Provide practical solutions to issues expressed regarding course delivery and syllabus coverage during regular course meetings.',
			icon: 'fa-solid fa-lightbulb'
		},
		{
			title: 'Internal Assessment Quality',
			desc: 'Set question papers for internal examinations, discuss the question bank, and prepare detailed schemes of evaluation.',
			icon: 'fa-solid fa-list-check'
		}
	];

	const esepModules = [
		{ name: 'Verbal Skills', icon: 'fa-solid fa-comment-dots' },
		{ name: 'Speaking / Writing / Reading', icon: 'fa-solid fa-pen-nib' },
		{ name: 'Aptitude & Quantitative Logic', icon: 'fa-solid fa-calculator' },
		{ name: 'Technical Training & Coding', icon: 'fa-solid fa-code' },
		{ name: 'Cutting-Edge Technologies', icon: 'fa-solid fa-microchip' },
		{ name: 'Basic Reading Comprehension', icon: 'fa-solid fa-book-reader' },
		{ name: 'Effective Active Listening', icon: 'fa-solid fa-ear-listen' },
		{ name: 'Professional Body Language', icon: 'fa-solid fa-user-tie' },
		{ name: 'Versant Voice Assessment Training', icon: 'fa-solid fa-microphone' }
	];

	const esepSuccess = [
		{ title: 'Report Writing', desc: 'Significantly improved student capabilities in compiling individual reports and formal project documentation.', icon: 'fa-solid fa-file-contract' },
		{ title: 'Confidence & Presentations', desc: 'Enhanced student personality development, group discussion abilities, and public speaking confidence.', icon: 'fa-solid fa-display' },
		{ title: 'Mock Interviews & Placements', desc: 'Mock interviews built real-world readiness, leading to high placement rates with premium packages.', icon: 'fa-solid fa-circle-check' }
	];
</script>

<svelte:head>
	<title>Institutional Best Practices | BITS Vizag</title>
	<meta
		name="description"
		content="Explore the institutional best practices of Baba Institute of Technology and Sciences (BITS Vizag), featuring Outcome-Based Education (OBE) and our Employability Skills Enhancement Program (ESEP)."
	/>
</svelte:head>

<!-- Hero Banner -->
<section class="relative overflow-hidden bg-slate-950 text-white">
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.32),_transparent_30%),radial-gradient(circle_at_left,_rgba(14,165,233,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_48%,_#111827_100%)]"></div>
	<div class="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:42px_42px]"></div>

	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
		<div class="max-w-4xl">
			<div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200 backdrop-blur">
				<i class="fa-solid fa-award" aria-hidden="true"></i>
				Governance / Best Practices
			</div>
			<h1 class="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
				Institutional
				<span class="block bg-gradient-to-r from-orange-300 via-amber-100 to-sky-200 bg-clip-text text-transparent">
					Best Practices
				</span>
			</h1>
			<p class="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
				How we align academic rigor, learner-centered pedagogy, and rigorous industry preparation to ensure comprehensive student growth and professional success.
			</p>

			<div class="mt-8 flex flex-wrap gap-3">
				<button
					on:click={() => activeTab = 'obe'}
					class="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-200 {activeTab === 'obe' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 -translate-y-0.5' : 'border border-white/15 bg-white/8 text-slate-200 hover:bg-white/14'}"
				>
					<i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>
					Practice I: OBE Mechanism
				</button>
				<button
					on:click={() => activeTab = 'esep'}
					class="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-200 {activeTab === 'esep' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 -translate-y-0.5' : 'border border-white/15 bg-white/8 text-slate-200 hover:bg-white/14'}"
				>
					<i class="fa-solid fa-laptop-code" aria-hidden="true"></i>
					Practice II: Employability Skills
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Institutional Stats Bar -->
<section class="border-y border-slate-200 bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<div class="flex items-start gap-4">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
					<i class="fa-solid fa-university text-xl" aria-hidden="true"></i>
				</div>
				<div>
					<p class="text-xs font-bold uppercase tracking-wider text-slate-400">Affiliation & Codes</p>
					<p class="mt-1 text-sm font-bold text-slate-800">Affiliated to JNTU GV</p>
					<p class="text-xs text-slate-500">University Code: NR | Admission: BABA</p>
				</div>
			</div>
			<div class="flex items-start gap-4">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
					<i class="fa-solid fa-ribbon text-xl" aria-hidden="true"></i>
				</div>
				<div>
					<p class="text-xs font-bold uppercase tracking-wider text-slate-400">Accreditations</p>
					<p class="mt-1 text-sm font-bold text-slate-800">Approved by AICTE</p>
					<p class="text-xs text-slate-500">NAAC Accredited | ISO 9001-2015</p>
				</div>
			</div>
			<div class="flex items-start gap-4">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
					<i class="fa-solid fa-phone text-xl" aria-hidden="true"></i>
				</div>
				<div>
					<p class="text-xs font-bold uppercase tracking-wider text-slate-400">Contact Details</p>
					<p class="mt-1 text-sm font-bold text-slate-800">Off: 0891-2569933</p>
					<p class="text-xs text-slate-500">principal@bitsvizag.com | Fax: 2568811</p>
				</div>
			</div>
			<div class="flex items-start gap-4">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
					<i class="fa-solid fa-location-dot text-xl" aria-hidden="true"></i>
				</div>
				<div>
					<p class="text-xs font-bold uppercase tracking-wider text-slate-400">Location & Estd</p>
					<p class="mt-1 text-sm font-bold text-slate-800">Visakhapatnam, AP</p>
					<p class="text-xs text-slate-500">Bakkannapalem Village | Estd: 2008</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Content Sections based on Active Tab -->
<main class="bg-white">
	{#if activeTab === 'obe'}
		<!-- Practice 1: Outcome Based Education -->
		<section class="px-4 py-16 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-7xl">
				
				<!-- Objectives Grid -->
				<div class="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
					<div class="flex flex-col justify-center">
						<span class="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">Best Practice - I</span>
						<h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
							Outcome-Based Education (OBE) Mechanism
						</h2>
						<p class="mt-5 text-base leading-8 text-slate-600">
							Outcome Based Education (OBE) is a student-centred instruction mechanism for the evaluation of student performance across Knowledge, Skills, and Attitudes. It ensures that our programs meet the quality standards required to prepare graduates for a successful career.
						</p>
						<p class="mt-4 text-base leading-8 text-slate-600">
							The Academic Coordinator monitors class work, registers entry, course file maintenance, and syllabus coverage, while tracking mid-exam progress to identify Weak, Average, and Bright students for personalized follow-up.
						</p>
					</div>

					<div class="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
						<div class="flex items-center gap-3 text-orange-300">
							<i class="fa-solid fa-bullseye text-xl" aria-hidden="true"></i>
							<h3 class="text-xl font-bold tracking-tight">Objectives of the Practice</h3>
						</div>
						<div class="mt-8 space-y-4">
							{#each obeObjectives as obj}
								<div class="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4.5 items-center transition-all hover:bg-white/8">
									<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-orange-300">
										<i class={obj.icon} aria-hidden="true"></i>
									</div>
									<p class="text-sm font-semibold leading-relaxed text-slate-200">{obj.text}</p>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Context Flow -->
				<div class="mt-20 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
					<div class="grid gap-6 lg:grid-cols-3 lg:gap-12">
						<div class="lg:col-span-1">
							<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
								<i class="fa-solid fa-sitemap text-xl" aria-hidden="true"></i>
							</div>
							<h3 class="mt-4 text-2xl font-black tracking-tight text-slate-900">The Context of OBE</h3>
							<p class="mt-3 text-sm leading-relaxed text-slate-500">
								Effective implementation of Outcome-Based Education relies on coordination between multiple academic roles to translate program outcomes to day-to-day class rhythm.
							</p>
						</div>
						<div class="grid gap-6 sm:grid-cols-2 lg:col-span-2">
							<div class="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
								<span class="inline-block rounded-lg bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-600">Program Coordinator (PC)</span>
								<p class="mt-4 text-sm leading-relaxed text-slate-600">
									Heads of the Departments act as PCs, monitoring all years of the program, nominating Course Coordinators (CCs), and organizing academic alignment meetings.
								</p>
							</div>
							<div class="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
								<span class="inline-block rounded-lg bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-600">Course & Class Coordinators</span>
								<p class="mt-4 text-sm leading-relaxed text-slate-600">
									CCs, ACs, and Class Teachers plan and deliver syllabus, maintain pedagogy alignment with Course Outcomes (COs), and conduct student performance assessments.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Practice Details -->
				<div class="mt-20">
					<div class="max-w-3xl">
						<span class="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">Execution Framework</span>
						<h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">CC Nomination Criteria & Activities</h2>
						<p class="mt-4 text-base text-slate-600">
							Course Coordinators are carefully chosen based on criteria that prioritize domain authority, seniority, and team synergy. Once nominated, they direct core academic operations.
						</p>
					</div>

					<!-- Nomination Grid -->
					<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
						{#each nominationCriteria as crit}
							<div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
								<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
									<i class={crit.icon} aria-hidden="true"></i>
								</div>
								<h4 class="mt-4 font-bold text-slate-900">{crit.title}</h4>
								<p class="mt-2 text-xs leading-relaxed text-slate-500">{crit.desc}</p>
							</div>
						{/each}
					</div>

					<!-- CC Activities -->
					<h3 class="mt-16 text-2xl font-black text-slate-900 tracking-tight">Key Coordinator Responsibilities</h3>
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{#each ccActivities as act}
							<div class="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6.5 relative overflow-hidden group hover:bg-white hover:shadow-lg transition-all duration-300">
								<div class="flex items-center gap-4">
									<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-orange-50 group-hover:text-orange-600">
										<i class={act.icon} aria-hidden="true"></i>
									</div>
									<h4 class="font-bold text-slate-900 leading-tight">{act.title}</h4>
								</div>
								<p class="mt-4 text-sm leading-relaxed text-slate-600">{act.desc}</p>
							</div>
						{/each}
					</div>
				</div>

				<!-- Success & Problems Grid -->
				<div class="mt-20 grid gap-8 lg:grid-cols-2">
					<!-- Evidence of Success -->
					<div class="rounded-[2.2rem] border border-emerald-150 bg-emerald-50/50 p-8.5">
						<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
							<i class="fa-solid fa-chart-line text-xl" aria-hidden="true"></i>
						</div>
						<h3 class="mt-5 text-2xl font-black tracking-tight text-slate-900">Evidence of Success</h3>
						<p class="mt-4 text-base leading-relaxed text-slate-600">
							Through regular meetings of PCs, ACs, CCs, and teachers, the attainment of Course Outcomes (COs) and Program Outcomes (POs) is calculated collectively.
						</p>
						<ul class="mt-6 space-y-3">
							<li class="flex gap-3 items-start bg-white rounded-xl p-4 border border-emerald-100">
								<i class="fa-solid fa-check-circle mt-1 text-emerald-600" aria-hidden="true"></i>
								<p class="text-sm text-slate-600 leading-relaxed"><strong class="text-slate-800">Clear Outcomes</strong>: Direct visibility of learning gaps, letting course teachers build customized follow-ups.</p>
							</li>
							<li class="flex gap-3 items-start bg-white rounded-xl p-4 border border-emerald-100">
								<i class="fa-solid fa-check-circle mt-1 text-emerald-600" aria-hidden="true"></i>
								<p class="text-sm text-slate-600 leading-relaxed"><strong class="text-slate-800">Continuous Attainment</strong>: Tangible academic improvement among learners and streamlined pedagogy for educators.</p>
							</li>
						</ul>
					</div>

					<!-- Problems Encountered -->
					<div class="rounded-[2.2rem] border border-orange-150 bg-orange-50/30 p-8.5">
						<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
							<i class="fa-solid fa-circle-exclamation text-xl" aria-hidden="true"></i>
						</div>
						<h3 class="mt-5 text-2xl font-black tracking-tight text-slate-900">Challenges & Resources Required</h3>
						<p class="mt-4 text-base leading-relaxed text-slate-600">
							Adopting modern OBE mechanisms requires shifting traditional mindsets and aligning human resources effectively.
						</p>
						<ul class="mt-6 space-y-3">
							<li class="flex gap-3 items-start bg-white rounded-xl p-4 border border-orange-100">
								<i class="fa-solid fa-circle-info mt-1 text-orange-600" aria-hidden="true"></i>
								<p class="text-sm text-slate-600 leading-relaxed"><strong class="text-slate-800">Faculty Pre-requisites & Convincing Skills</strong>: Identifying qualified coordinators who have the motivation and conflict-resolution skills to guide teams in new systems.</p>
							</li>
							<li class="flex gap-3 items-start bg-white rounded-xl p-4 border border-orange-100">
								<i class="fa-solid fa-circle-info mt-1 text-orange-600" aria-hidden="true"></i>
								<p class="text-sm text-slate-600 leading-relaxed"><strong class="text-slate-800">FDP & Training Slots</strong>: Regular Faculty Development Programs are critical to continuously update course teachers on OBE structures.</p>
							</li>
						</ul>
					</div>
				</div>

			</div>
		</section>
	{:else}
		<!-- Practice 2: Employability Skills Enhancement Program -->
		<section class="px-4 py-16 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-7xl">
				
				<!-- Top Block -->
				<div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
					<div class="flex flex-col justify-center">
						<span class="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">Best Practice - II</span>
						<h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
							Employability Skills Enhancement Program (ESEP)
						</h2>
						<p class="mt-5 text-base leading-8 text-slate-600">
							An innovative training framework providing systematic capabilities enhancement from the 2nd year up to the final year during semester breaks. By combining internal expertise and external specialized trainers, the program guarantees job-readiness.
						</p>
						<p class="mt-4 text-base leading-8 text-slate-600">
							The training covers verbal competency, quantitative aptitude, active listening, body language, and cutting-edge software technologies, preparing students for multi-dimensional recruitment requirements.
						</p>
					</div>

					<div class="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
						<div class="flex items-center gap-3 text-orange-300">
							<i class="fa-solid fa-compass-drafting text-xl" aria-hidden="true"></i>
							<h3 class="text-xl font-bold tracking-tight">Focus & Context</h3>
						</div>
						<p class="mt-5 text-sm leading-7 text-slate-300">
							Engineering and management careers require more than pure classroom theories. ESEP targets core interactive abilities:
						</p>
						<div class="mt-6 grid gap-3 grid-cols-2">
							<div class="rounded-xl bg-white/5 p-3.5 border border-white/5">
								<span class="text-orange-300 font-bold block text-sm">Communication</span>
								<span class="text-xs text-slate-400 mt-1 block">Articulate ideas clearly in project teams.</span>
							</div>
							<div class="rounded-xl bg-white/5 p-3.5 border border-white/5">
								<span class="text-orange-300 font-bold block text-sm">Team Leadership</span>
								<span class="text-xs text-slate-400 mt-1 block">Take initiative and guide peer groups.</span>
							</div>
							<div class="rounded-xl bg-white/5 p-3.5 border border-white/5">
								<span class="text-orange-300 font-bold block text-sm">Tech Capability</span>
								<span class="text-xs text-slate-400 mt-1 block">Master cutting-edge software & tools.</span>
							</div>
							<div class="rounded-xl bg-white/5 p-3.5 border border-white/5">
								<span class="text-orange-300 font-bold block text-sm">Innovation</span>
								<span class="text-xs text-slate-400 mt-1 block">Drive practical answers for real problems.</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Program Structure Stats -->
				<div class="mt-20 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
					<h3 class="text-2xl font-black text-slate-900 tracking-tight text-center sm:text-left">Program Format & Modules</h3>
					
					<div class="mt-8 grid gap-6 sm:grid-cols-3">
						<div class="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 text-center">
							<div class="text-4xl font-extrabold text-orange-600">300 hrs</div>
							<p class="mt-2 text-sm font-semibold text-slate-800">Total Program Duration</p>
							<p class="text-xs text-slate-500 mt-1">Conducted in collaboration with top external agencies.</p>
						</div>
						<div class="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 text-center">
							<div class="text-4xl font-extrabold text-orange-600">2 Parts</div>
							<p class="mt-2 text-sm font-semibold text-slate-800">11 & 14 Modules</p>
							<p class="text-xs text-slate-500 mt-1">11 for Communication/Aptitude, 14 for Tech & Tools.</p>
						</div>
						<div class="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 text-center">
							<div class="text-4xl font-extrabold text-orange-600">5 Batches</div>
							<p class="mt-2 text-sm font-semibold text-slate-800">6 sessions / week</p>
							<p class="text-xs text-slate-500 mt-1">Final years get 150 dedicated hours of instruction.</p>
						</div>
					</div>

					<!-- Training Modules Grid -->
					<h4 class="mt-12 text-lg font-bold text-slate-800">Syllabus Components Included</h4>
					<div class="mt-4 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
						{#each esepModules as mod}
							<div class="flex items-center gap-3 bg-white p-4.5 rounded-xl border border-slate-200">
								<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 text-sm">
									<i class={mod.icon} aria-hidden="true"></i>
								</div>
								<span class="text-xs font-bold text-slate-700 leading-tight">{mod.name}</span>
							</div>
						{/each}
					</div>
				</div>

				<!-- Success & Problems Grid -->
				<div class="mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
					
					<!-- Evidence of Success -->
					<div class="rounded-[2.2rem] border border-slate-250 bg-slate-50 p-8.5">
						<span class="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">Program Outcomes</span>
						<h3 class="mt-3 text-2xl font-black tracking-tight text-slate-900">Evidence of Success</h3>
						<p class="mt-4 text-base leading-relaxed text-slate-600">
							Assessment of students post-program indicates measurable achievements in placement performance and communication confidence.
						</p>

						<div class="mt-8 grid gap-4 sm:grid-cols-3">
							{#each esepSuccess as item}
								<div class="bg-white p-5 rounded-2xl border border-slate-200">
									<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-4">
										<i class={item.icon} aria-hidden="true"></i>
									</div>
									<h4 class="font-bold text-slate-900 text-sm">{item.title}</h4>
									<p class="mt-2 text-xs leading-relaxed text-slate-500">{item.desc}</p>
								</div>
							{/each}
						</div>
					</div>

					<!-- Problems Encountered -->
					<div class="rounded-[2.2rem] border border-orange-150 bg-orange-50/20 p-8.5 flex flex-col justify-between">
						<div>
							<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
								<i class="fa-solid fa-clock-pulse text-xl" aria-hidden="true"></i>
							</div>
							<h3 class="mt-5 text-2xl font-black tracking-tight text-slate-900">Challenges & Solutions</h3>
							<p class="mt-4 text-sm leading-relaxed text-slate-600">
								Conducting large scale interactive skill drills introduces unique operational constraints:
							</p>

							<div class="mt-6 space-y-4">
								<div class="flex gap-3">
									<div class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 text-xs font-bold">1</div>
									<div>
										<h5 class="text-xs font-bold text-slate-800 uppercase">Regular Time Slots</h5>
										<p class="text-xs text-slate-500 mt-1">Normal academic slots are full, making it hard to squeeze 300 hours into regular college timings.</p>
									</div>
								</div>
								<div class="flex gap-3">
									<div class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 text-xs font-bold">2</div>
									<div>
										<h5 class="text-xs font-bold text-slate-800 uppercase">Coordinating Large Groups</h5>
										<p class="text-xs text-slate-500 mt-1">Adjusting time slots for multi-branch batches was resolved by modifying Laboratory and work schedules accordingly.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>

			</div>
		</section>
	{/if}
</main>

<!-- Download & Document Section -->
<section class="border-t border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
			<div class="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
				<p class="text-sm font-bold uppercase tracking-[0.28em] text-orange-300">Official Certification</p>
				<h2 class="mt-3 text-3xl font-black tracking-tight">Institutional Credibility</h2>
				<p class="mt-4 text-slate-300 leading-relaxed text-sm">
					Baba Institute of Technology and Sciences maintains a strict focus on standardizing policy documents in full compliance with AICTE and affiliating university guidelines. This web page acts as an accessible, readable transcript of our official Best Practices audit.
				</p>
				<div class="mt-6 grid grid-cols-2 gap-4">
					<div class="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
						<span class="text-orange-200 text-xl font-bold block">2008</span>
						<span class="text-xs text-slate-400 mt-1 block">Establishment Year</span>
					</div>
					<div class="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
						<span class="text-orange-200 text-xl font-bold block">ISO 9001-2015</span>
						<span class="text-xs text-slate-400 mt-1 block">Quality Certified</span>
					</div>
				</div>
			</div>

			<div class="rounded-[2rem] bg-gradient-to-br from-orange-500 to-amber-400 p-8 text-white shadow-xl flex flex-col justify-between">
				<div>
					<p class="text-sm font-bold uppercase tracking-[0.24em] text-orange-50">Document Access</p>
					<h3 class="mt-3 text-2xl font-black leading-snug">Need the original PDF document?</h3>
					<p class="mt-4 text-sm leading-relaxed text-orange-50">
						For compliance reviews, NAAC audits, and offline study, you can open or download the official signed Institutional Best Practices PDF document anytime.
					</p>
				</div>
				<a
					href="/pdfs/Institutional-Best-Practices.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4.5 text-sm font-bold text-orange-600 transition-transform duration-200 hover:-translate-y-0.5"
				>
					<i class="fa-solid fa-file-pdf text-base" aria-hidden="true"></i>
					Open Official PDF
				</a>
			</div>
		</div>
	</div>
</section>
