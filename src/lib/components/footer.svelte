<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const socialLinks = [
		{ name: 'instagram', href: 'https://www.instagram.com/bits_vizag_official/' },
		{ name: 'whatsapp', href: 'https://wa.me/918008844699' },
		{ name: 'linkedin-in', href: 'https://www.linkedin.com/company/bits-vizag/' },
		{ name: 'youtube', href: 'https://www.youtube.com/@bitsmediacenter8449/videos' },
		{ name: 'x-twitter', href: 'https://x.com/bits_vizag' }
	];

	const quickLinks = [
		{ name: 'About Us', href: '/aboutus/About-BITS' },
		{ name: 'Courses Offered', href: '/courses/Offered-Courses' },
		{ name: 'Admissions', href: '/application-form' },
		{ name: 'Placements / CDC', href: '/placements' },
		{ name: 'Gallery', href: '/gallery' },
		{ name: 'Contact Us', href: '/contactus' }
	];

	const exploreLinks = [
		{
			name: 'EAPCET 2026 ↗',
			href: 'https://cets.apsche.ap.gov.in/EAPCET/Eapcet/EAPCET_HomePage.aspx',
			external: true
		},
		{ name: 'Facilities', href: '/facilities/Knowledge-Resource-Center' },
		{ name: 'Faculty', href: '/faculty' },
		{ name: 'Governance', href: '/governance/mandatory-disclosure' },
		{ name: 'Research', href: '/governance/best-practices' },
		{ name: 'IQAC', href: '/governance/IQAC' }
	];

	const portals = [
		{ name: 'Admission 2026-27', icon: 'fa-graduation-cap', href: '/application-form' },
		{ name: 'Alumni Association', icon: 'fa-users', href: '#' },
		{ name: 'BITS CMS Portal', icon: 'fa-desktop', href: '#' },
		{ name: 'Pay Tuition Fees', icon: 'fa-credit-card', href: '#' }
	];

	let visitorCount = 0;
	let liveUsers = 12;

	onMount(() => {
		// Fetch count from localStorage, start from 0 if null, increment by 1
		const storedCount = localStorage.getItem('bits_visitor_count');
		if (storedCount === null) {
			visitorCount = 1;
		} else {
			visitorCount = parseInt(storedCount, 10) + 1;
		}
		localStorage.setItem('bits_visitor_count', visitorCount.toString());

		// Simulate real-time fluctuating active viewers
		const interval = setInterval(() => {
			const fluctuation = Math.floor(Math.random() * 5) - 2; // fluctuates -2 to +2
			liveUsers = Math.max(8, Math.min(32, liveUsers + fluctuation));
		}, 5000);

		return () => clearInterval(interval);
	});

	$: formattedCount = visitorCount.toString().padStart(6, '0');
</script>

<footer class="bg-[#080e1f] text-white pt-12 pb-8 overflow-hidden relative">
	<!-- Background Pattern -->
	<div
		class="absolute inset-0 opacity-[0.03] pointer-events-none"
		style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 30px 30px;"
	></div>

	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
			<!-- Column 1: Brand & Identity -->
			<div
				class="lg:col-span-4 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
			>
				<div class="flex items-center justify-center lg:justify-start w-full">
					<img
						src="/1.png"
						alt="BITS Logo"
						class="h-16 w-auto bg-white p-2 rounded-xl"
					/>
				</div>

				<div class="space-y-4 pt-2 w-full max-w-sm">
					<div class="flex items-start lg:items-center gap-4 text-sm group">
						<i class="fa-solid fa-location-dot text-amber-500 mt-1 lg:mt-0"></i>
						<span class="text-slate-300 text-[11px] md:text-sm leading-snug"
							>Baba college, Visakhapatnam, AP - 530048</span
						>
					</div>
					<div class="flex items-center gap-4 text-sm group">
						<i class="fa-solid fa-phone text-amber-500"></i>
						<span class="text-slate-300 text-[11px] md:text-sm">+91 80088 44699 / 91212 14313</span>
					</div>
					<div class="flex items-center gap-4 text-sm group">
						<i class="fa-solid fa-envelope text-amber-500"></i>
						<span class="text-slate-300 text-[11px] md:text-sm lowercase"
							>principal@bitsvizag.com</span
						>
					</div>
				</div>
			</div>

			<!-- Quick & Explore Links (Compact Grid on Mobile) -->
			<div class="lg:col-span-4 grid grid-cols-2 gap-6">
				<div class="space-y-4">
					<h4 class="text-[11px] md:text-sm font-black uppercase tracking-[0.15em] text-slate-300">
						Quick Links
					</h4>
					<ul class="space-y-2">
						{#each quickLinks as link}
							<li>
								<a
									href={link.href}
									class="text-slate-400 hover:text-amber-500 text-[11px] md:text-[13px] flex items-center gap-2 transition-all"
								>
									<i class="fa-solid fa-chevron-right text-[8px] text-amber-500/40"></i>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<div class="space-y-4">
					<h4 class="text-[11px] md:text-sm font-black uppercase tracking-[0.15em] text-slate-300">
						Explore
					</h4>
					<ul class="space-y-2">
						{#each exploreLinks as link}
							<li>
								<a
									href={link.href}
									{...link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
									class="text-slate-400 hover:text-amber-500 text-[11px] md:text-[13px] flex items-center gap-2 transition-all {link.external
										? 'text-amber-400/80 hover:text-amber-400'
										: ''}"
								>
									<i class="fa-solid fa-chevron-right text-[8px] text-amber-500/40"></i>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- Social & Connect -->
			<div class="lg:col-span-4 space-y-6">
				<h4 class="text-[11px] md:text-sm font-black uppercase tracking-[0.2em] text-slate-300">
					Connect With Us
				</h4>
				<div class="flex flex-wrap gap-3">
					{#each socialLinks as social}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="w-10 h-10 md:w-9 md:h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-[#080e1f] hover:border-amber-500 transition-all shadow-lg"
						>
							<i class="fa-brands fa-{social.name} text-base md:text-sm"></i>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div
			class="mt-12 pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-6 footer-bottom-bar pb-4"
		>
			<!-- Premium Visitor Counter & Live Status -->
			<div
				class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
			>
				<!-- Live Users Indicator -->
				<div class="flex items-center gap-2">
					<span class="relative flex h-2.5 w-2.5">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
						></span>
						<span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
					</span>
				</div>

				<div class="hidden sm:block h-4 w-[1px] bg-white/10"></div>

				<!-- Total Page Views -->

				<div class="text-center space-y-2">
					<p class="text-slate-500 text-[12px] md:text-[13px] tracking-wide">
						© 2026 <span class="text-white font-bold">bitsvizag.edu.in</span>. All Rights Reserved.
					</p>
				</div>
				<div class="text-center">
					<p
						class="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-black text-slate-400"
					>
						DEVELOPED BY <span class="text-amber-500 border-b border-amber-500/30 pb-0.5"
							>BITS STUDENTS</span
						>
					</p>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	@media (max-width: 768px) {
		footer {
			padding-top: 3rem !important;
			padding-bottom: 2rem !important;
		}
	}
</style>
