<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	// Structured data grouped by meaningful clusters for better scanability
	const groups = [
		{
			id: 'governance',
			label: 'Governance & Ethics',
			items: [
				{ name: 'Anti Ragging Committee', icon: 'fa-shield-halved', link: '/professional_commities/Anti ragging.pdf' },
				{ name: 'Disciplinary Committee', icon: 'fa-gavel', link: '/professional_commities/Discipline committee 2023-24.pdf' }
			]
		},
		{
			id: 'academic',
			label: 'Academic & Innovation',
			items: [
				{ name: 'Research & Development', icon: 'fa-microscope' },
				{ name: 'EDC & IPR Committee', icon: 'fa-lightbulb', link: '/professional_commities/EDC_IPR.pdf' },
				{ name: 'Library Committee', icon: 'fa-book-open-reader' }
			]
		},
		{
			id: 'support',
			label: 'Student Support',
			items: [
				{ name: "Women's Grievance Cell", icon: 'fa-person-dress-burst' },
				{ name: 'SC / ST Cell', icon: 'fa-users-viewfinder' },
				{ name: 'Student Welfare', icon: 'fa-hand-holding-heart' },
				{ name: 'NSS Unit', icon: 'fa-hands-helping', link: '/professional_commities/2023_2024 NSS COMMITTEE.pdf' },
				{ name: 'Sports Committee', icon: 'fa-trophy' }
			]
		},
		{
			id: 'admin',
			label: 'Administrative & Campus',
			items: [
				{ name: 'Admissions Unit', icon: 'fa-user-plus' },
				{ name: 'Training & Placement', icon: 'fa-briefcase' },
				{ name: 'Hostel Committee', icon: 'fa-building-user' },
				{ name: 'Canteen Committee', icon: 'fa-utensils', link: '/professional_commities/canteen committie.pdf' }
			]
		}
	];
</script>

<section class="py-24 bg-[#fcfdfe] overflow-hidden">
	<div class="max-w-[1200px] mx-auto px-6">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl font-semibold text-[#111827] tracking-tight mb-3">
				Operational Committees
			</h2>
			<div class="w-10 h-0.5 bg-[#1d4ed8] mx-auto rounded-full"></div>
		</div>

		<!-- Grouped Sections -->
		<div class="space-y-16">
			{#each groups as group}
				<div class="group-section">
					<!-- Group Header -->
					<div class="flex items-center gap-4 mb-8">
						<h3 class="text-[11px] font-bold uppercase tracking-[0.15em] text-[#6b7280] whitespace-nowrap">
							{group.label}
						</h3>
						<div class="h-px w-full bg-[#f1f5f9]"></div>
					</div>

					<!-- Grid -->
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{#each group.items as item}
							<a
								href={item.link || '#'}
								target={item.link ? '_blank' : '_self'}
								class="group flex items-center gap-4 p-4 bg-white border border-[#e5e7eb] rounded-xl transition-all duration-300 hover:-translate-y-[3px] hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300"
							>
								<!-- Minimal Icon -->
								<div class="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-50 text-slate-500 group-hover:bg-[#1d4ed8]/5 group-hover:text-[#1d4ed8] transition-colors border border-slate-100">
									<i class="fa-solid {item.icon} text-sm"></i>
								</div>

								<!-- Content -->
								<div class="flex flex-col min-w-0">
									<h4 class="text-[14px] font-medium text-[#111827] leading-tight truncate group-hover:text-[#1d4ed8] transition-colors">
										{item.name}
									</h4>
									{#if item.link}
										<div class="flex items-center gap-1.5 mt-1">
											<div class="w-1 h-1 rounded-full bg-emerald-500"></div>
											<span class="text-[10px] text-[#6b7280] font-medium">Guidelines Available</span>
										</div>
									{:else}
										<span class="text-[10px] text-slate-400 font-medium mt-1">Active Council</span>
									{/if}
								</div>
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Use Satoshi/Inter feel with system defaults */
	:global(section) {
		font-family: 'Inter', system-ui, -apple-system, sans-serif;
	}
</style>
