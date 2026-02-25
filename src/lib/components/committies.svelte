<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		/** @type {any} */
		const g = gsap;
		g.registerPlugin(ScrollTrigger);

		// Header entrance
		g.from('.committees-header', {
			scrollTrigger: {
				trigger: '.committees-header',
				start: 'top 85%',
				toggleActions: 'play none none none'
			},
			opacity: 0,
			y: 30,
			duration: 1,
			ease: 'power3.out'
		});

		// Cards entrance staggered
		g.from('.committee-card', {
			scrollTrigger: {
				trigger: '.committees-grid',
				start: 'top 85%',
				toggleActions: 'play none none none'
			},
			opacity: 0,
			y: 50,
			stagger: 0.1,
			duration: 0.8,
			ease: 'back.out(1.2)'
		});
	});

	// Defined with a clean 'theme' property for human-readable code
	const items = [
		{
			title: 'Anti Ragging Committee',
			icon: 'fa-shield-halved',
			link: '/professional_commities/Anti ragging.pdf',
			category: 'Security',
			theme: 'rose'
		},
		{
			title: 'Research & Development',
			icon: 'fa-microscope',
			category: 'Academic',
			theme: 'indigo'
		},
		{
			title: 'EDC & IPR Committee',
			icon: 'fa-lightbulb',
			link: '/professional_commities/EDC_IPR.pdf',
			category: 'Innovation',
			theme: 'amber'
		},
		{
			title: "Women's Grievance Cell",
			icon: 'fa-person-dress-burst',
			category: 'Support',
			theme: 'purple'
		},
		{
			title: 'SC / ST Cell',
			icon: 'fa-users-viewfinder',
			category: 'Support',
			theme: 'blue'
		},
		{
			title: 'Training & Placement',
			icon: 'fa-briefcase',
			category: 'Career',
			theme: 'emerald'
		},
		{
			title: 'Student Welfare',
			icon: 'fa-hand-holding-heart',
			category: 'Life',
			theme: 'cyan'
		},
		{
			title: 'Disciplinary Committee',
			icon: 'fa-gavel',
			link: '/professional_commities/Discipline committee 2023-24.pdf',
			category: 'Governance',
			theme: 'slate'
		},
		{
			title: 'Cultural Committee',
			icon: 'fa-masks-theater',
			link: '/professional_commities/cultural.pdf',
			category: 'Life',
			theme: 'pink'
		},
		{
			title: 'Admissions Unit',
			icon: 'fa-user-plus',
			category: 'Administrative',
			theme: 'sky'
		},
		{
			title: 'NSS Unit',
			icon: 'fa-hands-helping',
			link: '/professional_commities/2023_2024 NSS COMMITTEE.pdf',
			category: 'Service',
			theme: 'orange'
		},
		{
			title: 'Sports Committee',
			icon: 'fa-trophy',
			category: 'Life',
			theme: 'yellow'
		},
		{
			title: 'Hostel Committee',
			icon: 'fa-building-user',
			category: 'Residential',
			theme: 'teal'
		},
		{
			title: 'Canteen Committee',
			icon: 'fa-utensils',
			link: '/professional_commities/canteen committie.pdf',
			category: 'Residential',
			theme: 'lime'
		},
		{
			title: 'Library Committee',
			icon: 'fa-book-open-reader',
			category: 'Academic',
			theme: 'violet'
		}
	];

	// Neat, human-readable color map for visibility and maintainability
	/** @type {Record<string, {text: string, bg: string, badge: string, cardBg: string}>} */
	const themes = {
		rose: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-rose-600'
		},
		indigo: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-indigo-600'
		},
		amber: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-amber-500'
		},
		purple: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-purple-600'
		},
		blue: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-blue-600'
		},
		emerald: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-emerald-600'
		},
		cyan: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-cyan-600'
		},
		slate: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-slate-600'
		},
		pink: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-pink-600'
		},
		sky: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-sky-500'
		},
		orange: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-orange-600'
		},
		yellow: {
			text: 'text-white',
			bg: 'bg-white/10 text-white',
			badge: 'bg-white/10 text-white',
			cardBg: 'bg-yellow-500'
		},
		teal: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-teal-600'
		},
		lime: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-lime-600'
		},
		violet: {
			text: 'text-white',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white',
			cardBg: 'bg-violet-600'
		}
	};
</script>

<section class="py-20 bg-[#fcfdfe] font-roboto overflow-hidden">
	<div class="w-full px-6 md:px-12 lg:px-16">
		<!-- Section Header -->
		<div class="committees-header text-center mb-16">
			<h3 class="text-2xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
				Operational <span class="text-red-600">Committees</span>
			</h3>
			<div class="h-1.5 w-32 bg-red-600 mx-auto mt-4 rounded-full"></div>
		</div>

		<!-- Cards Grid - Spread End-to-End -->
		<div
			class="committees-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
		>
			{#each items as item, i}
				{@const style = themes[item.theme]}
				<div class="committee-card h-full">
					<a
						href={item.link || '#'}
						target={item.link ? '_blank' : '_self'}
						class="group relative h-full {style.cardBg} border border-white/10 hover:border-white/30 transition-all duration-500 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col"
					>
						<div class="p-6 flex flex-col h-full text-white">
							<!-- Header: Icon and Category -->
							<div class="flex items-start justify-between mb-8">
								<div
									class="w-10 h-10 bg-white/20 {style.text} rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-white/30 duration-500 shadow-sm border border-white/10"
								>
									<i class={`fa-solid ${item.icon} text-xl`}></i>
								</div>
								<span
									class="px-3 py-1 {style.badge} rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10"
								>
									{item.category}
								</span>
							</div>

							<!-- Title -->
							<div class="mb-6">
								<h3
									class="text-lg font-bold text-white leading-tight transition-colors tracking-tight min-h-[3rem]"
								>
									{item.title}
								</h3>
							</div>

							<!-- Footer: Action Indicator -->
							<div class="mt-auto pt-4 flex items-center justify-between border-t border-white/10">
								{#if item.link}
									<div class="flex items-center gap-3">
										<i class="fa-solid fa-file-pdf text-white/80 text-sm"></i>
										<span class="text-[11px] font-bold text-white/90 uppercase tracking-widest"
											>Guidelines</span
										>
									</div>
									<div
										class="w-4 h-4 rounded-full bg-white text-slate-800 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-md"
									>
										<i class="fa-solid fa-arrow-right text-[10px]"></i>
									</div>
								{/if}
							</div>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	:global(.font-roboto) {
		font-family: 'Roboto', sans-serif !important;
	}
	.committee-card {
		will-change: transform, opacity;
	}
</style>
