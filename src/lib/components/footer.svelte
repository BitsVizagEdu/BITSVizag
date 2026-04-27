<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const socialLinks = [
		{ name: 'facebook-f', href: 'https://www.facebook.com/BITSVizagOfficial/' },
		{ name: 'instagram', href: 'https://www.instagram.com/bits_vizag_official/' },
		{ name: 'whatsapp', href: 'https://wa.me/918008844699' },
		{ name: 'linkedin-in', href: 'https://www.linkedin.com/company/bits-vizag/' },
		{ name: 'youtube', href: 'https://www.youtube.com/@bitsmediacenter8449/videos' },
		{ name: 'x-twitter', href: '#' }
	];

	const quickLinks = [
		{ name: 'About Us', href: '/aboutus/About-BITS' },
		{ name: 'Courses Offered', href: '/department/Department of BS&H' },
		{ name: 'Admissions', href: '/admission-procedure' },
		{ name: 'Placements', href: '/placement' },
		{ name: 'Gallery', href: '/gallery' },
		{ name: 'Events', href: '/events' },
		{ name: 'BITS Holidays 2026', href: '#' }
	];

	const usefulLinks = [
		{ name: 'IQAC', href: '#' },
		{ name: 'IIC', href: '#' },
		{ name: 'NIRF', href: '#' },
		{ name: 'IPR Cell', href: '#' },
		{ name: 'Mandatory Disclosure', href: '#' },
		{ name: 'AICTE Feedback', href: '#' },
		{ name: 'Social Media', href: '#' }
	];

	const portals = [
		{ name: 'Admission 2026-27', icon: 'fa-graduation-cap', href: '/application-form' },
		{ name: 'Alumni Association', icon: 'fa-users', href: '#' },
		{ name: 'BITS CMS Portal', icon: 'fa-desktop', href: '#' },
		{ name: 'Pay Tuition Fees', icon: 'fa-credit-card', href: '#' }
	];
</script>

<footer class="bg-[#080e1f] text-white pt-12 pb-8 overflow-hidden relative">
	<!-- Background Pattern -->
	<div
		class="absolute inset-0 opacity-[0.03] pointer-events-none"
		style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 30px 30px;"
	></div>

	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
			<!-- Column 1: Brand & Identity -->
			<div class="lg:col-span-4 space-y-8">
				<div class="flex items-center gap-4">
					<img src="/1.png" alt="BITS Logo" class="h-16 w-auto bg-white p-2 rounded-xl" />
					<div>
						<h2 class="text-3xl font-black tracking-normal">
							BITS <span class="text-amber-500">VIZAG</span>
						</h2>
						<div
							class="mt-1 inline-flex items-center px-3 py-0.5 rounded-full bg-amber-500 text-[#080e1f] text-[10px] font-black uppercase tracking-widest shadow-lg shadow-amber-500/20"
						>
							NAAC 'A' Grade
						</div>
					</div>
				</div>

				<p class="text-slate-400 text-sm leading-relaxed max-w-sm">
					Empowering students to build the future through excellence in engineering education and
					innovation since 2008.
				</p>

				<div class="space-y-4 pt-4">
					<div class="flex items-start gap-4 text-sm group">
						<i
							class="fa-solid fa-location-dot text-amber-500 mt-1 transition-transform group-hover:scale-125"
						></i>
						<span class="text-slate-300"
							>Baba college, Lake, near Pothinamallayyapalem, Visakhapatnam, AP - 530048</span
						>
					</div>
					<div class="flex items-center gap-4 text-sm group">
						<i class="fa-solid fa-phone text-amber-500 transition-transform group-hover:scale-125"
						></i>
						<span class="text-slate-300">+91 80088 44699 / 91212 14313</span>
					</div>
					<div class="flex items-center gap-4 text-sm group">
						<i
							class="fa-solid fa-envelope text-amber-500 transition-transform group-hover:scale-125"
						></i>
						<span class="text-slate-300 lowercase">principal@bitsvizag.com</span>
					</div>
				</div>
			</div>

			<!-- Column 2: Quick Links -->
			<div class="lg:col-span-2 space-y-6">
				<h4 class="text-sm font-black uppercase tracking-[0.15em] text-slate-300">Quick Links</h4>
				<ul class="space-y-3">
					{#each quickLinks as link}
						<li>
							<a
								href={link.href}
								class="text-slate-400 hover:text-amber-500 text-[13px] flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
							>
								<i class="fa-solid fa-chevron-right text-[10px] text-amber-500/50"></i>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Column 3: Useful Links -->
			<div class="lg:col-span-2 space-y-6">
				<h4 class="text-sm font-black uppercase tracking-[0.15em] text-slate-300">Useful Links</h4>
				<ul class="space-y-3">
					{#each usefulLinks as link}
						<li>
							<a
								href={link.href}
								class="text-slate-400 hover:text-amber-500 text-[13px] flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
							>
								<i class="fa-solid fa-chevron-right text-[10px] text-amber-500/50"></i>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Column 4: Portals & Social -->
			<div class="lg:col-span-4 space-y-8">
				<div class="space-y-4">
					<h4 class="text-sm font-black uppercase tracking-[0.15em] text-slate-300">
						Connect With Us
					</h4>
					<p class="text-slate-500 text-[11px]">Follow us for latest updates</p>
					<div class="flex flex-wrap gap-3">
						{#each socialLinks as social}
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-[#080e1f] hover:border-amber-500 transition-all duration-300 shadow-lg"
							>
								<i class="fa-brands fa-{social.name} text-sm"></i>
							</a>
						{/each}
					</div>
				</div>

				<div class="space-y-4 pt-4">
					<h4
						class="text-sm font-black uppercase tracking-[0.15em] text-slate-300 flex items-center gap-3"
					>
						Institutional Portals
					</h4>
					<div class="grid grid-cols-1 gap-3">
						{#each portals as portal}
							<a
								href={portal.href}
								class="group bg-white/5 border border-white/10 hover:border-amber-500/50 p-3.5 rounded-xl flex items-center justify-between transition-all duration-300 hover:bg-white/10 shadow-sm"
							>
								<div class="flex items-center gap-3">
									<div
										class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 transition-colors"
									>
										<i
											class="fa-solid {portal.icon} text-amber-500 group-hover:text-[#080e1f] text-xs"
										></i>
									</div>
									<span class="text-xs font-bold text-slate-300 group-hover:text-white"
										>{portal.name}</span
									>
								</div>
								<i
									class="fa-solid fa-arrow-right text-[10px] text-slate-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all"
								></i>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-12 pt-8 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6 text-[12px] font-bold text-slate-600 tracking-normal">
			<!-- Copyright -->
			<div class="lg:w-1/3 text-center lg:text-left">
				<p>© {new Date().getFullYear()} <span class="text-white">BITS VIZAG</span>. All Rights Reserved.</p>
			</div>

			<!-- Center Credit -->
			<div class="lg:w-1/3 text-center">
				<p class="text-slate-500">
					Developed in-house by <span class="text-amber-500"> BITS STUDENTS</span>
				</p>
			</div>

			<!-- Links -->
			<div class="lg:w-1/3 flex items-center justify-center lg:justify-end gap-8">
				<a href="#" class="hover:text-white transition-colors">Privacy</a>
				<a href="#" class="hover:text-white transition-colors">Terms</a>
				<a href="#" class="hover:text-white transition-colors">Sitemap</a>
			</div>
		</div>
	</div>
</footer>

<style>
	:global(body) {
		background-color: #f8faff;
	}
</style>
