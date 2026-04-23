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
			text: 'text-rose-100',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#f43f5e] to-[#be123c]'
		},
		indigo: {
			text: 'text-indigo-100',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#6366f1] to-[#4338ca]'
		},
		amber: {
			text: 'text-amber-50',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#f59e0b] to-[#d97706]'
		},
		purple: {
			text: 'text-purple-100',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#a855f7] to-[#7e22ce]'
		},
		blue: {
			text: 'text-blue-100',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8]'
		},
		emerald: {
			text: 'text-emerald-100',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#10b981] to-[#047857]'
		},
		cyan: {
			text: 'text-cyan-100',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#06b6d4] to-[#0e7490]'
		},
		slate: {
			text: 'text-slate-100',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#64748b] to-[#334155]'
		},
		pink: {
			text: 'text-pink-100',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#ec4899] to-[#be185d]'
		},
		sky: {
			text: 'text-sky-100',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#0ea5e9] to-[#0369a1]'
		},
		orange: {
			text: 'text-orange-100',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#f97316] to-[#c2410c]'
		},
		yellow: {
			text: 'text-yellow-50',
			bg: 'bg-white/10 text-white',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#eab308] to-[#a16207]'
		},
		teal: {
			text: 'text-teal-100',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#14b8a6] to-[#0f766e]'
		},
		lime: {
			text: 'text-lime-50',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#84cc16] to-[#4d7c0f]'
		},
		violet: {
			text: 'text-violet-100',
			bg: 'bg-white/20',
			badge: 'bg-white/20 text-white shadow-sm backdrop-blur-sm',
			cardBg: 'bg-gradient-to-br from-[#8b5cf6] to-[#5b21b6]'
		}
	};
</script>

<section class="py-20 bg-[#fcfdfe] font-roboto overflow-hidden">
	<div class="w-full px-6 md:px-12 lg:px-16">
		<!-- Section Header -->
		<div class="committees-header text-center mb-10 md:mb-16">
			<h3 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
				Operational <span class="text-red-600">Committees</span>
			</h3>
			<div class="h-1.5 w-16 md:w-32 bg-red-600 mx-auto mt-2 md:mt-4 rounded-full"></div>
		</div>

		<!-- Cards Grid - Spread End-to-End -->
		<div
			class="committees-grid grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
		>
			{#each items as item, i}
				{@const style = themes[item.theme]}
				<div class="committee-card h-full">
					<a
						href={item.link || '#'}
						target={item.link ? '_blank' : '_self'}
						class="group relative h-full {style.cardBg} border border-white/10 hover:border-white/30 transition-all duration-500 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2 flex flex-col"
					>
						<div class="p-4 md:p-6 flex flex-col h-full text-white">
							<!-- Header: Icon and Category -->
							<div class="flex items-start justify-between mb-4 md:mb-8">
								<div
									class="w-8 h-8 md:w-10 md:h-10 bg-white/20 {style.text} rounded-[10px] md:rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-white/30 duration-500 shadow-sm border border-white/10"
								>
									<i class={`fa-solid ${item.icon} text-base md:text-xl`}></i>
								</div>
								<span
									class="px-2 py-0.5 md:px-3 md:py-1 {style.badge} rounded-full text-[8.5px] md:text-[10px] font-black uppercase tracking-widest border border-white/10"
								>
									{item.category}
								</span>
							</div>

							<!-- Title -->
							<div class="mb-4 md:mb-6">
								<h3
									class="text-[15px] md:text-lg font-bold text-white leading-tight transition-colors tracking-tight min-h-[2.5rem] md:min-h-[3rem]"
								>
									{item.title}
								</h3>
							</div>

							<!-- Footer: Action Indicator -->
							<div
								class="mt-auto pt-3 md:pt-4 flex items-center justify-between border-t border-white/10"
							>
								{#if item.link}
									<div class="flex items-center gap-2 md:gap-3">
										<i class="fa-solid fa-file-pdf text-white/80 text-[10px] md:text-sm"></i>
										<span
											class="text-[9px] md:text-[11px] font-bold text-white/90 uppercase tracking-widest"
											>Guidelines</span
										>
									</div>
									<div
										class="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-white text-slate-800 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-md"
									>
										<i class="fa-solid fa-arrow-right text-[7px] md:text-[10px]"></i>
									</div>
								{:else}
									<div class="min-h-[14px] md:min-h-[16px]"></div>
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
