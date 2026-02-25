<script>
	import { onMount } from 'svelte';
	import AOS from 'aos';

	onMount(() => {
		AOS.init();
	});

	let items = [
		{
			title: 'Anti Ragging Committee',
			icon: 'fa-shield-halved',
			link: '/professional_commities/Anti ragging.pdf',
			category: 'Security',
			color: 'bg-rose-500/10 text-rose-500'
		},
		{
			title: 'Research & Development',
			icon: 'fa-microscope',
			category: 'Academic',
			color: 'bg-indigo-500/10 text-indigo-500'
		},
		{
			title: 'EDC & IPR Committee',
			icon: 'fa-lightbulb',
			link: '/professional_commities/EDC_IPR.pdf',
			category: 'Innovation',
			color: 'bg-amber-500/10 text-amber-500'
		},
		{
			title: "Women's Grievance Cell",
			icon: 'fa-person-dress-burst',
			category: 'Support',
			color: 'bg-purple-500/10 text-purple-500'
		},
		{
			title: 'SC / ST Cell',
			icon: 'fa-users-viewfinder',
			category: 'Support',
			color: 'bg-blue-500/10 text-blue-500'
		},
		{
			title: 'Training & Placement',
			icon: 'fa-briefcase',
			category: 'Career',
			color: 'bg-emerald-500/10 text-emerald-500'
		},
		{
			title: 'Student Welfare',
			icon: 'fa-hand-holding-heart',
			category: 'Life',
			color: 'bg-cyan-500/10 text-cyan-500'
		},
		{
			title: 'Disciplinary Committee',
			icon: 'fa-gavel',
			link: '/professional_commities/Discipline committee 2023-24.pdf',
			category: 'Governance',
			color: 'bg-slate-500/10 text-slate-500'
		},
		{
			title: 'Cultural Committee',
			icon: 'fa-masks-theater',
			link: '/professional_commities/cultural.pdf',
			category: 'Life',
			color: 'bg-pink-500/10 text-pink-500'
		},
		{
			title: 'Admissions Unit',
			icon: 'fa-user-plus',
			category: 'Administrative',
			color: 'bg-sky-500/10 text-sky-500'
		},
		{
			title: 'NSS Unit',
			icon: 'fa-hands-helping',
			link: '/professional_commities/2023_2024 NSS COMMITTEE.pdf',
			category: 'Service',
			color: 'bg-orange-500/10 text-orange-500'
		},
		{
			title: 'Sports Committee',
			icon: 'fa-trophy',
			category: 'Life',
			color: 'bg-yellow-500/10 text-yellow-500'
		},
		{
			title: 'Hostel Committee',
			icon: 'fa-building-user',
			category: 'Residential',
			color: 'bg-teal-500/10 text-teal-500'
		},
		{
			title: 'Canteen Committee',
			icon: 'fa-utensils',
			link: '/professional_commities/canteen committie.pdf',
			category: 'Residential',
			color: 'bg-lime-500/10 text-lime-500'
		},
		{
			title: 'Library Committee',
			icon: 'fa-book-open-reader',
			category: 'Academic',
			color: 'bg-violet-500/10 text-violet-500'
		}
	];

	/** @type {Record<string, string>} */
	const themedColors = {
		rose: 'border-rose-100/60 hover:border-rose-400 bg-rose-50/10 hover:bg-rose-50/80 shadow-rose-500/5',
		indigo:
			'border-indigo-100/60 hover:border-indigo-400 bg-indigo-50/10 hover:bg-indigo-50/80 shadow-indigo-500/5',
		amber:
			'border-amber-100/60 hover:border-amber-400 bg-amber-50/10 hover:bg-amber-50/80 shadow-amber-500/5',
		purple:
			'border-purple-100/60 hover:border-purple-400 bg-purple-50/10 hover:bg-purple-50/80 shadow-purple-500/5',
		blue: 'border-blue-100/60 hover:border-blue-400 bg-blue-50/10 hover:bg-blue-50/80 shadow-blue-500/5',
		emerald:
			'border-emerald-100/60 hover:border-emerald-400 bg-emerald-50/10 hover:bg-emerald-50/80 shadow-emerald-500/5',
		cyan: 'border-cyan-100/60 hover:border-cyan-400 bg-cyan-50/10 hover:bg-cyan-50/80 shadow-cyan-500/5',
		slate:
			'border-slate-100/60 hover:border-slate-400 bg-slate-50/10 hover:bg-slate-50/80 shadow-slate-500/5',
		pink: 'border-pink-100/60 hover:border-pink-400 bg-pink-50/10 hover:bg-pink-50/80 shadow-pink-500/5',
		sky: 'border-sky-100/60 hover:border-sky-400 bg-sky-50/10 hover:bg-sky-50/80 shadow-sky-500/5',
		orange:
			'border-orange-100/60 hover:border-orange-400 bg-orange-50/10 hover:bg-orange-50/80 shadow-orange-500/5',
		yellow:
			'border-yellow-100/60 hover:border-yellow-400 bg-yellow-50/10 hover:bg-yellow-50/80 shadow-yellow-500/5',
		teal: 'border-teal-100/60 hover:border-teal-400 bg-teal-50/10 hover:bg-teal-50/80 shadow-teal-500/5',
		lime: 'border-lime-100/60 hover:border-lime-400 bg-lime-50/10 hover:bg-lime-50/80 shadow-lime-500/5',
		violet:
			'border-violet-100/60 hover:border-violet-400 bg-violet-50/10 hover:bg-violet-50/80 shadow-violet-500/5'
	};

	/** @param {string} classStr */
	function extractColorShort(classStr) {
		const match = classStr.match(/text-(\w+)-500/);
		return match ? match[1] : 'blue';
	}
</script>

<section class="py-20 bg-[#f8fafc] font-sans">
	<div class="max-w-7xl mx-auto px-6">
		<!-- Section Header -->
		<div class="text-center mb-12" data-aos="fade-up">
			<div class="space-y-3">
				<h2 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
					Operational <span class="text-red-600">Committees</span>
				</h2>
				<p class="text-base text-slate-800 max-w-xl mx-auto font-normal leading-relaxed opacity-90">
					Ensuring excellence and integrity through specialized governance and student support.
				</p>
			</div>
		</div>

		<!-- Cards Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
			{#each items as item, i}
				{@const colorTheme = themedColors[extractColorShort(item.color)]}
				<div data-aos="fade-up" data-aos-delay={i * 40}>
					<a
						href={item.link || '#'}
						target={item.link ? '_blank' : '_self'}
						class="group relative block h-full p-6 border border-black transition-all duration-300 hover:-translate-y-1 overflow-hidden rounded-2xl shadow-sm hover:shadow-md {colorTheme}"
					>
						<!-- Background Pattern Sparkle -->
						<div
							class="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"
						>
							<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
								<pattern id="cardPattern" width="20" height="20" patternUnits="userSpaceOnUse">
									<circle
										cx="1"
										cy="1"
										r="0.5"
										fill="currentColor"
										class={item.color.split(' ')[1]}
									/>
								</pattern>
								<rect width="100%" height="100%" fill="url(#cardPattern)" />
							</svg>
						</div>

						<div class="relative z-10 flex flex-col h-full">
							<div class="flex items-center justify-between mb-4">
								<div
									class={`w-9 h-9 ${item.color.split(' ')[0]} ${item.color.split(' ')[1]} rounded-lg flex items-center justify-center transition-all group-hover:scale-105 duration-300 shadow-sm`}
								>
									<i class={`fa-solid ${item.icon} text-sm`}></i>
								</div>
								<div
									class="px-2 py-0.5 bg-white/60 backdrop-blur-sm text-slate-500 group-hover:text-slate-900 rounded-md text-[8px] font-bold uppercase tracking-wider transition-colors border border-black/5"
								>
									{item.category}
								</div>
							</div>

							<h3
								class="text-sm font-bold text-slate-800 leading-snug mb-auto group-hover:text-blue-700 transition-colors"
							>
								{item.title}
							</h3>

							{#if item.link}
								<div class="mt-4 flex items-center justify-between">
									<span class="text-[8px] font-bold text-blue-600 uppercase tracking-wider"
										>Guidelines</span
									>
									<div
										class="w-6 h-6 rounded-full bg-white text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm border border-blue-100"
									>
										<i class="fa-solid fa-arrow-right text-[8px]"></i>
									</div>
								</div>
							{:else}
								<div class="mt-4 flex items-center gap-1.5">
									<div class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
									<span class="text-[8px] font-bold text-slate-500 uppercase tracking-wider"
										>Active Unit</span
									>
								</div>
							{/if}
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	:global(.group) {
		will-change: transform, shadow, border-color;
	}
</style>
