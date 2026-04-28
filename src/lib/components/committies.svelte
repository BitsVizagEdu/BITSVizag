<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	const colorStyles = {
		blue: {
			groupText: 'text-blue-600',
			groupIconBg: 'bg-blue-600',
			cardBg: 'bg-blue-50/60',
			cardBorder: 'border-blue-100',
			cardHoverBorder: 'hover:border-blue-300',
			iconText: 'text-blue-600',
			iconBg: 'bg-blue-100/70',
			pillBg: 'bg-blue-100/80',
			pillText: 'text-blue-700',
			pillDot: 'bg-blue-500',
			arrowBg: 'bg-blue-500'
		},
		green: {
			groupText: 'text-green-600',
			groupIconBg: 'bg-green-600',
			cardBg: 'bg-green-50/60',
			cardBorder: 'border-green-100',
			cardHoverBorder: 'hover:border-green-300',
			iconText: 'text-green-600',
			iconBg: 'bg-green-100/70',
			pillBg: 'bg-green-100/80',
			pillText: 'text-green-700',
			pillDot: 'bg-green-500',
			arrowBg: 'bg-green-500'
		},
		purple: {
			groupText: 'text-purple-600',
			groupIconBg: 'bg-purple-600',
			cardBg: 'bg-purple-50/60',
			cardBorder: 'border-purple-100',
			cardHoverBorder: 'hover:border-purple-300',
			iconText: 'text-purple-600',
			iconBg: 'bg-purple-100/70',
			pillBg: 'bg-purple-100/80',
			pillText: 'text-purple-700',
			pillDot: 'bg-purple-500',
			arrowBg: 'bg-purple-500'
		},
		amber: {
			groupText: 'text-amber-600',
			groupIconBg: 'bg-amber-600',
			cardBg: 'bg-amber-50/60',
			cardBorder: 'border-amber-100',
			cardHoverBorder: 'hover:border-amber-300',
			iconText: 'text-amber-600',
			iconBg: 'bg-amber-100/70',
			pillBg: 'bg-amber-100/80',
			pillText: 'text-amber-700',
			pillDot: 'bg-amber-500',
			arrowBg: 'bg-amber-500'
		},
		rose: {
			groupText: 'text-rose-600',
			groupIconBg: 'bg-rose-600',
			cardBg: 'bg-rose-50/60',
			cardBorder: 'border-rose-100',
			cardHoverBorder: 'hover:border-rose-300',
			iconText: 'text-rose-600',
			iconBg: 'bg-rose-100/70',
			pillBg: 'bg-rose-100/80',
			pillText: 'text-rose-700',
			pillDot: 'bg-rose-500',
			arrowBg: 'bg-rose-500'
		},
		emerald: {
			groupText: 'text-emerald-600',
			groupIconBg: 'bg-emerald-600',
			cardBg: 'bg-emerald-50/60',
			cardBorder: 'border-emerald-100',
			cardHoverBorder: 'hover:border-emerald-300',
			iconText: 'text-emerald-600',
			iconBg: 'bg-emerald-100/70',
			pillBg: 'bg-emerald-100/80',
			pillText: 'text-emerald-700',
			pillDot: 'bg-emerald-500',
			arrowBg: 'bg-emerald-500'
		},
		cyan: {
			groupText: 'text-cyan-600',
			groupIconBg: 'bg-cyan-600',
			cardBg: 'bg-cyan-50/60',
			cardBorder: 'border-cyan-100',
			cardHoverBorder: 'hover:border-cyan-300',
			iconText: 'text-cyan-600',
			iconBg: 'bg-cyan-100/70',
			pillBg: 'bg-cyan-100/80',
			pillText: 'text-cyan-700',
			pillDot: 'bg-cyan-500',
			arrowBg: 'bg-cyan-500'
		},
		orange: {
			groupText: 'text-orange-600',
			groupIconBg: 'bg-orange-600',
			cardBg: 'bg-orange-50/60',
			cardBorder: 'border-orange-100',
			cardHoverBorder: 'hover:border-orange-300',
			iconText: 'text-orange-600',
			iconBg: 'bg-orange-100/70',
			pillBg: 'bg-orange-100/80',
			pillText: 'text-orange-700',
			pillDot: 'bg-orange-500',
			arrowBg: 'bg-orange-500'
		},
		indigo: {
			groupText: 'text-indigo-600',
			groupIconBg: 'bg-indigo-600',
			cardBg: 'bg-indigo-50/60',
			cardBorder: 'border-indigo-100',
			cardHoverBorder: 'hover:border-indigo-300',
			iconText: 'text-indigo-600',
			iconBg: 'bg-indigo-100/70',
			pillBg: 'bg-indigo-100/80',
			pillText: 'text-indigo-700',
			pillDot: 'bg-indigo-500',
			arrowBg: 'bg-indigo-500'
		},
		teal: {
			groupText: 'text-teal-600',
			groupIconBg: 'bg-teal-600',
			cardBg: 'bg-teal-50/60',
			cardBorder: 'border-teal-100',
			cardHoverBorder: 'hover:border-teal-300',
			iconText: 'text-teal-600',
			iconBg: 'bg-teal-100/70',
			pillBg: 'bg-teal-100/80',
			pillText: 'text-teal-700',
			pillDot: 'bg-teal-500',
			arrowBg: 'bg-teal-500'
		},
		slate: {
			groupText: 'text-slate-600',
			groupIconBg: 'bg-slate-600',
			cardBg: 'bg-slate-50/60',
			cardBorder: 'border-slate-100',
			cardHoverBorder: 'hover:border-slate-300',
			iconText: 'text-slate-600',
			iconBg: 'bg-slate-100/70',
			pillBg: 'bg-slate-100/80',
			pillText: 'text-slate-700',
			pillDot: 'bg-slate-500',
			arrowBg: 'bg-slate-500'
		}
	};

	/** @param {string} color */
	const getColorStyle = (color) => {
		switch (color) {
			case 'blue':
				return colorStyles.blue;
			case 'green':
				return colorStyles.green;
			case 'purple':
				return colorStyles.purple;
			case 'amber':
				return colorStyles.amber;
			case 'rose':
				return colorStyles.rose;
			case 'emerald':
				return colorStyles.emerald;
			case 'cyan':
				return colorStyles.cyan;
			case 'orange':
				return colorStyles.orange;
			case 'indigo':
				return colorStyles.indigo;
			case 'teal':
				return colorStyles.teal;
			case 'slate':
			default:
				return colorStyles.slate;
		}
	};

	// Structured data grouped by meaningful clusters for better scanability
	const groups = [
		{
			id: 'governance',
			label: 'Governance & Ethics',
			description: 'Upholding integrity, transparency, and accountability.',
			icon: 'fa-shield-halved',
			color: 'blue',
			items: [
				{ name: 'Anti Ragging Committee', desc: 'Ensuring a safe and respectful environment', icon: 'fa-shield-halved', link: '/professional_commities/Anti ragging.pdf', color: 'blue' },
				{ name: 'Disciplinary Committee', desc: 'Maintaining discipline and institutional values', icon: 'fa-gavel', link: '/professional_commities/Discipline committee 2023-24.pdf', color: 'green' }
			]
		},
		{
			id: 'academic',
			label: 'Academic & Innovation',
			description: 'Driving academic excellence and fostering innovation.',
			icon: 'fa-graduation-cap',
			color: 'purple',
			items: [
				{ name: 'Research & Development', desc: 'Promoting research and innovation', icon: 'fa-microscope', color: 'purple' },
				{ name: 'EDC & IPR Committee', desc: 'Encouraging entrepreneurship & IP', icon: 'fa-lightbulb', link: '/professional_commities/EDC_IPR.pdf', color: 'amber' },
				{ name: 'Library Committee', desc: 'Enhancing learning resources', icon: 'fa-book-open-reader', color: 'rose' }
			]
		},
		{
			id: 'support',
			label: 'Student Support',
			description: 'Supporting student well-being and holistic development.',
			icon: 'fa-users',
			color: 'emerald',
			items: [
				{ name: "Women's Grievance Cell", desc: 'Ensuring safety and empowerment', icon: 'fa-person-dress-burst', color: 'cyan' },
				{ name: 'SC / ST Cell', desc: 'Supporting equity and inclusion', icon: 'fa-users-viewfinder', color: 'blue' },
				{ name: 'Student Welfare', desc: 'Supporting student well-being', icon: 'fa-hand-holding-heart', color: 'emerald' },
				{ name: 'NSS Unit', desc: 'Serving the community selflessly', icon: 'fa-hands-helping', link: '/professional_commities/2023_2024 NSS COMMITTEE.pdf', color: 'purple' },
				{ name: 'Sports Committee', desc: 'Promoting sports and fitness', icon: 'fa-trophy', color: 'orange' }
			]
		},
		{
			id: 'admin',
			label: 'Administrative & Campus',
			description: 'Ensuring smooth campus operations and facilities.',
			icon: 'fa-building',
			color: 'slate',
			items: [
				{ name: 'Admissions Unit', desc: 'Managing student admissions', icon: 'fa-user-plus', color: 'indigo' },
				{ name: 'Training & Placement', desc: 'Facilitating career opportunities', icon: 'fa-briefcase', color: 'blue' },
				{ name: 'Hostel Committee', desc: 'Overseeing residential facilities', icon: 'fa-building-user', color: 'teal' },
				{ name: 'Canteen Committee', desc: 'Ensuring quality food services', icon: 'fa-utensils', link: '/professional_commities/canteen committie.pdf', color: 'amber' }
			]
		}
	];
</script>

<section class="relative py-20 bg-white overflow-hidden">
	<!-- Decorative Abstract Shapes -->
	<div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
		<div class="absolute -top-32 -left-32 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
		<div class="absolute top-1/4 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-[80px] opacity-60"></div>
		<div class="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-50 rounded-full blur-[100px] opacity-60"></div>
		
		<!-- Dot Pattern overlay -->
		<div class="absolute top-12 right-12 opacity-[0.03]">
			<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
						<circle cx="2" cy="2" r="2" fill="currentColor"></circle>
					</pattern>
				</defs>
				<rect width="200" height="200" fill="url(#dotPattern)"></rect>
			</svg>
		</div>
	</div>

	<div class="relative max-w-[1280px] mx-auto px-6 z-10">
		<!-- Section Header -->
		<div class="text-center mb-20">
			<h2 class="text-4xl md:text-5xl font-bold text-[#1e293b] tracking-tight mb-4">
				Operational Committees
			</h2>
			<div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
			<p class="text-slate-500 text-lg max-w-2xl mx-auto">
				Empowering excellence through collaboration, oversight, and innovation.
			</p>
		</div>

		<!-- Grouped Sections -->
		<div class="space-y-14 md:space-y-16">
			{#each groups as group, groupIndex}
			<div class="group-section mb-6">
				<!-- Group Header -->
				<div class="flex items-start gap-3 mb-5 pb-3 border-b-2 border-slate-200">
					<div class="w-8 h-8 rounded-full {getColorStyle(group.color).groupIconBg} flex items-center justify-center text-white shadow-md shrink-0 mt-0.5">
						<i class="fa-solid {group.icon} text-[11px]"></i>
					</div>
					<div class="flex-1">
						<h3 class="text-lg md:text-xl font-bold {getColorStyle(group.color).groupText}">{group.label}</h3>
						<p class="text-slate-600 text-sm mt-1 max-w-2xl">{group.description}</p>
					</div>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
						{#each group.items as item, itemIndex}
							<a
								href={item.link || '#'}
								target={item.link ? '_blank' : '_self'}
							class="group relative flex h-full min-h-[170px] flex-col justify-between overflow-hidden rounded-2xl border p-4 md:p-5 {getColorStyle(item.color).cardBg} {getColorStyle(item.color).cardBorder} {getColorStyle(item.color).cardHoverBorder} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
						>
								<!-- Optional subtle glow effect on hover -->
								<div class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

								<div class="relative z-10 flex items-start justify-between gap-3">
									<div class="w-10 h-10 shrink-0 rounded-xl {getColorStyle(item.color).iconBg} {getColorStyle(item.color).iconText} flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
										<i class="fa-solid {item.icon} text-base"></i>
									</div>
									{#if item.link}
										<div class="inline-flex items-center gap-2 rounded-full px-2.5 py-1 {getColorStyle(item.color).pillBg}">
											<div class="h-2 w-2 rounded-full {getColorStyle(item.color).pillDot} animate-pulse"></div>
											<span class="text-[10px] font-bold tracking-wide {getColorStyle(item.color).pillText}">Guidelines</span>
										</div>
									{:else}
										<div class="inline-flex items-center gap-2 rounded-full px-2.5 py-1 {getColorStyle(item.color).pillBg}">
											<div class="h-2 w-2 rounded-full {getColorStyle(item.color).pillDot}"></div>
											<span class="text-[10px] font-bold tracking-wide {getColorStyle(item.color).pillText}">Active</span>
										</div>
									{/if}
								</div>

								<div class="relative z-10 mt-4 flex-1">
									<h4 class="text-sm md:text-[15px] font-bold text-slate-800 leading-snug group-hover:text-slate-950 transition-colors text-left">
										{item.name}
									</h4>
									<div class="mt-4 h-px w-full bg-white/45"></div>
								</div>

								<div class="relative z-10 mt-3 flex items-center justify-between">
									<p class="text-[11px] md:text-xs text-slate-600 leading-relaxed max-w-[82%] line-clamp-2">
										{item.desc}
									</p>
									<div class="w-7 h-7 rounded-full {getColorStyle(item.color).arrowBg} text-white flex items-center justify-center shadow-sm group-hover:translate-x-1 transition-transform duration-300 shrink-0">
										<i class="fa-solid fa-arrow-right text-[10px]"></i>
									</div>
								</div>
						</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
</section>

<style>
	:global(section) {
		font-family: 'Inter', system-ui, -apple-system, sans-serif;
	}
</style>
