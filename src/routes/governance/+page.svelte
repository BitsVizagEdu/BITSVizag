<script>
	import { documentLinks } from '$lib/data/documents.js';

	const heroCards = [
		{
			label: 'Mandatory Disclosure',
			value: 'Compliance-ready web experience',
			icon: 'fa-solid fa-file-shield',
			href: '/governance/mandatory-disclosure'
		},
		{
			label: 'Strategic Plan',
			value: '2025-26 to 2029-30 roadmap',
			icon: 'fa-solid fa-compass',
			href: '/governance/strategic-plan-2025-30'
		},
		{
			label: 'Quality Systems',
			value: 'IQAC, ICC and GRC',
			icon: 'fa-solid fa-users-gear',
			href: '/governance/IQAC'
		}
	];

	const governanceCards = [
		{
			title: 'Administrative governance',
			description: 'Board structure, leadership roles, and policy documents that define how the institute is governed.',
			items: ['Board members', 'Strategic plan', 'Code of conduct']
		},
		{
			title: 'Quality assurance',
			description: 'The quality ecosystem that keeps teaching, compliance, and feedback loops aligned.',
			items: ['IQAC', 'Academic council', 'Best practices']
		},
		{
			title: 'Student protection',
			description: 'Committees and grievance channels that support student welfare and a safe campus.',
			items: ['ICC', 'GRC', 'Anti-ragging']
		}
	];

	const governanceLinks = [...documentLinks.governance, ...documentLinks.institutional].filter(
		(link, index, links) => links.findIndex((item) => item.href === link.href) === index
	);
</script>

<svelte:head>
	<title>Governance | BITS Vizag</title>
	<meta
		name="description"
		content="BITS Vizag governance hub with premium access to mandatory disclosure, quality systems, and institutional policy documents."
	/>
</svelte:head>

<section class="relative overflow-hidden bg-slate-950 text-white">
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.32),_transparent_30%),radial-gradient(circle_at_left,_rgba(14,165,233,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_48%,_#111827_100%)]"></div>
	<div class="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:42px_42px]"></div>

	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
		<div class="max-w-4xl">
			<div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200 backdrop-blur">
				<i class="fa-solid fa-landmark" aria-hidden="true"></i>
				Governance
			</div>
			<h1 class="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
				A premium governance hub for
				<span class="block bg-gradient-to-r from-orange-300 via-amber-100 to-sky-200 bg-clip-text text-transparent">
					compliance, quality, and trust
				</span>
			</h1>
			<p class="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
				Use this section to access the institute’s governance pages, disclosure documents, and quality systems from one polished entry point.
			</p>

			<div class="mt-8 flex flex-wrap gap-3">
				<a
					href="/governance/mandatory-disclosure"
					class="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400"
				>
					<i class="fa-solid fa-file-shield" aria-hidden="true"></i>
					Open Mandatory Disclosure
				</a>
				<a
					href="#governance-links"
					class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/14"
				>
					<i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
					Explore governance links
				</a>
			</div>
		</div>

		<div class="mt-12 grid gap-4 sm:grid-cols-3">
			{#each heroCards as card}
				<a href={card.href} class="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-xl shadow-[0_24px_80px_rgba(2,6,23,0.45)] transition-transform duration-200 hover:-translate-y-1">
					<div class="flex items-center gap-3 text-orange-200">
						<i class={card.icon} aria-hidden="true"></i>
						<span class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">{card.label}</span>
					</div>
					<p class="mt-4 text-lg font-semibold text-white">{card.value}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
			<div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
				<p class="text-sm font-bold uppercase tracking-[0.28em] text-orange-600">Why this page</p>
				<h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Governance that feels clear, current, and credible</h2>
				<p class="mt-5 text-slate-600 leading-8">
					The governance area now serves as an actual destination rather than a placeholder. It gives visitors a crisp path to the disclosure page, policy documents, and the quality-related institutional structure behind the college’s decisions.
				</p>
				<div class="mt-6 grid gap-3 sm:grid-cols-3">
					{#each ['Transparent', 'Documented', 'Student-centric'] as badge}
						<span class="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{badge}</span>
					{/each}
				</div>
			</div>

			<div class="rounded-[2rem] bg-slate-900 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
				<p class="text-sm font-bold uppercase tracking-[0.28em] text-orange-300">Quick structure</p>
				<div class="mt-6 space-y-3">
					{#each governanceCards as card}
						<div class="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
							<div class="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400"></div>
							<div>
								<h3 class="text-base font-bold text-white">{card.title}</h3>
								<p class="mt-1 text-sm leading-7 text-slate-300">{card.description}</p>
								<p class="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">{card.items.join(' • ')}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section id="governance-links" class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="max-w-3xl">
			<p class="text-sm font-bold uppercase tracking-[0.28em] text-sky-600">Governance links</p>
			<h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Navigate directly to the institutional pages</h2>
		</div>

		<div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
			{#each governanceLinks as link}
				<a href={link.href} class="group rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/20">
						<i class={link.icon} aria-hidden="true"></i>
					</div>
					<h3 class="mt-5 text-xl font-bold text-slate-900">{link.label}</h3>
					<p class="mt-3 text-sm leading-7 text-slate-600">
						{link.href === '/governance/mandatory-disclosure'
							? 'View the premium disclosure page with institutional data, committees, programs, and a PDF preview.'
							: link.href === '/governance/strategic-plan-2025-30'
								? 'Review the five-year direction for teaching, research, innovation, and student growth.'
								: 'Open the page or document in the governance stack.'}
					</p>
					<div class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition-transform duration-200 group-hover:translate-x-1">
						<span>Open</span>
						<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
