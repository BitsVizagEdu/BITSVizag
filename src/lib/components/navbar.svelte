<script>
	import { page } from '$app/stores';
	import {
		setActiveTabValue,
		showNavBar,
		showNavBar2,
		toggleIsActiveTab,
		toggleNavBar,
		toggleNavBar2
	} from '../stores/store.js';
	import Nav from '$lib/components/navmenu.svelte';
	import { NavItems } from './navItem.js';
	import { replaceHyphenWithSpace } from '../../routes/aboutus/[slug]/components/utils.js';

	let nav3 = [
		{
			name: 'Staff',
			link: '/staff'
		},
		{
			name: 'AICTE',
			link: '/aicte'
		},
		{
			name: 'Alumni',
			link: '/alumni'
		},
		{
			name: 'Downloads',
			link: '/downloads'
		},
		{
			name: 'Placements',
			link: '/placements'
		},
		{
			name: 'Instagram',
			link: 'https://www.instagram.com/bits_vizag_official/'
		}
	];

	let nav2 = ['Staff', 'AICTE', 'Admission', 'Alumni', 'Downloads', 'Placements', 'Instagram'];
	/** @param {string} item */
	function onClick(item) {
		toggleIsActiveTab(true);
		setActiveTabValue(item);
	}

	$: isHomePage = $page.url.pathname === '/';
</script>

<!-- Production-Level Top Header Bar - BITS Vizag -->

{#if isHomePage}
	<div
		class="welcome-bottom-bar fixed left-0 right-0 bottom-0 z-[1200] w-full backdrop-blur-sm border-t border-yellow-300/20 overflow-hidden"
	>
		<div class="px-3 md:px-8 lg:px-12 py-1 h-9 md:h-10">
			<div class="flex items-center justify-between h-full gap-2 md:gap-6">
				<!-- Left: Welcome Message -->
				<div class="flex items-center h-full shrink-0">
					<span
						class="welcome-copy text-white text-[12px] md:text-[13px] font-inter tracking-[-0.2px] whitespace-nowrap"
					>
						<span>Welcome to</span>
						<span class="inline-flex items-center border-b-[1.5px] border-yellow-400/60 pb-0.5">
							<span class="bits-pill-row mr-1" aria-label="BITS">
								<span class="bits-pill bits-b">B</span>
								<span class="bits-pill bits-i">I</span>
								<span class="bits-pill bits-t">T</span>
								<span class="bits-pill bits-s">S</span>
							</span>
							<span class="text-slate-300 font-semibold tracking-[0.06em]">VIZAG</span>
						</span>
					</span>
				</div>

				<!-- Right: Contact Items with Proper Spacing -->
				<div class="flex items-center justify-end h-full gap-2 md:gap-4 flex-nowrap shrink-0">
					<!-- Email -->
					<a
						href="mailto:principal@bitsvizag.com"
						class="flex items-center h-full gap-1.5 md:gap-2 text-gray-400 hover:text-[#00FF00] transition-colors duration-300 group min-w-fit"
					>
						<!-- Email Icon -->
						<svg
							class="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[#00FF00] transition-colors flex-shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<rect x="2" y="4" width="20" height="16" rx="2"></rect>
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
						</svg>
						<!-- Hidden on mobile, visible on md+ -->
						<span class="hidden md:inline text-gray-300 text-xs font-inter tracking-[-0.2px]"
							>Email :</span
						>
						<span class="hidden md:inline text-white text-xs font-inter tracking-[-0.2px]"
							>principal@bitsvizag.com</span
						>
						<!-- Show only icon on mobile -->
						<span class="md:hidden text-gray-300 text-xs font-inter">Email</span>
					</a>

					<!-- Phone -->
					<a
						href="tel:+919121214313"
						class="flex items-center h-full gap-1.5 md:gap-2 text-gray-400 hover:text-[#facc15] transition-colors duration-300 group min-w-fit"
					>
						<!-- Phone Icon -->
						<svg
							class="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[#00FF00] transition-colors flex-shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
							></path>
						</svg>
						<!-- Hidden on mobile, visible on md+ -->
						<span class="hidden md:inline text-gray-300 text-xs font-inter tracking-[-0.2px]"
							>Call :</span
						>
						<span class="hidden md:inline text-white text-xs font-inter tracking-[-0.2px]"
							>+91 9121214313</span
						>
						<!-- Show only icon on mobile -->
						<span class="md:hidden text-gray-300 text-xs font-inter">Call</span>
					</a>

					<!-- Global Alumni Network with Dropdown -->
					<a
						href="/alumni-data"
						class="flex items-center h-full gap-1.5 md:gap-2 text-gray-400 hover:text-[#00FF00] transition-colors duration-300 group min-w-fit"
					>
						<!-- Globe Icon -->
						<svg
							class="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[#00FF00] transition-colors flex-shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="12" cy="12" r="10"></circle>
							<path
								d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
							></path>
						</svg>
						<!-- Hidden on mobile, visible on md+ -->
						<span class="hidden md:inline text-gray-300 text-xs font-inter tracking-[-0.2px]"
							>Global Alumni Network</span
						>
						<!-- Show only icon on mobile -->
						<span class="md:hidden text-gray-300 text-xs font-inter">Alumni</span>
						<!-- Dropdown Arrow -->
						<svg
							class="w-3.5 h-3.5 text-gray-400 group-hover:text-[#facc15] transition-all group-hover:translate-y-0.5 flex-shrink-0 hidden md:block"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Top Bar: Quick Links & Socials -->

<div
	id="header"
	class="border-b border-slate-800 flex flex-col items-center w-full relative z-[1001] shadow-2xl overflow-hidden"
>
	<div class="w-full py-2 md:py-3">
		<!-- Mobile Layout (Visible only on < md) -->
		<div class="flex md:hidden flex-col items-center px-2 gap-2">
			<!-- Centered Logos Row -->
			<div class="flex items-center justify-center gap-4 w-full border-b border-white/5 pb-2">
				<div class="flex items-center gap-1.5">
					<div class="h-[34px] w-auto">
						<img class="h-full w-auto object-contain" src="/2026.png" alt="2026 BITS" />
					</div>
					<div class="h-[30px] w-[75px]">
						<img class="h-full w-full object-contain" src="/1.png" alt="BITS Vizag" />
					</div>
				</div>
				<div class="h-6 w-[1px] bg-white/10 mx-1"></div>
				<div class="flex items-center gap-2">
					<div class="h-[32px] w-[32px] rounded-full overflow-hidden border border-white/20">
						<img class="h-full w-full object-cover" src="/bits.png" alt="BITS Logo" />
					</div>
					<div class="h-[30px] w-[30px]">
						<img class="h-full w-full object-contain" src="/naac.png" alt="NAAC" />
					</div>
				</div>
			</div>

			<!-- Center Content -->
			<div class="flex flex-col items-center text-center -mt-1">
				<h1
					class="text-[14.5px] xs:text-[16px] font-black text-white tracking-tight leading-tight uppercase font-satoshi"
				>
					Baba Institute of Technology and Sciences (A)
				</h1>
				<p
					class="text-[10px] font-bold text-yellow-400 tracking-[0.1em] uppercase mt-0.5 font-inter"
				>
					An Autonomous Institution
				</p>
				<p class="text-[9px] text-slate-300 font-medium mt-1 leading-tight font-inter">
					Accredited by <span class="text-white font-bold">NAAC</span> | Approved by
					<span class="text-white font-bold">AICTE</span>
					| Affiliated to <span class="text-white font-bold">JNTU-GV</span>
					<br />
					ISO 9001:2015 Certified | 18 Years of Excellence
				</p>
				<!-- Tight College Code Badge -->
				<div
					class="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800"
				>
					<span class="text-[9px] font-bold text-amber-500 uppercase tracking-widest font-inter"
						>Code :</span
					>
					<span class="baba-text font-black text-xs leading-none font-satoshi">BABA</span>
				</div>
			</div>
		</div>

		<!-- Desktop Layout (Visible only on md and above) -->
		<div class="hidden md:grid w-full px-8 lg:px-12 grid-cols-[1fr_auto_1fr] items-center gap-8">
			<!-- Left Logos -->
			<div class="flex items-center justify-start gap-0 shrink-0 h-full">
				<div class="h-[72px] lg:h-[90px]">
					<img
						class="h-full w-auto object-contain hover:scale-105 transition-transform"
						src="/2026.png"
						alt="2026 BITS"
					/>
				</div>
				<div class="h-[68px] w-[160px] lg:h-[94px] lg:w-[212px]">
					<img
						class="h-full w-full object-contain"
						src="/1.png"
						alt="BITS Vizag"
						style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
					/>
				</div>
			</div>

			<!-- Center Content -->
			<div class="flex flex-col justify-center items-center text-center px-2">
				<h1
					class="text-[22.5px] lg:text-[29px] font-extrabold text-white tracking-normal leading-snug filter drop-shadow-lg font-satoshi whitespace-nowrap"
				>
					BABA INSTITUTE OF TECHNOLOGY AND SCIENCES (A)
				</h1>
				<div class="flex items-center gap-1 mt-0.5">
					<div class="h-[1px] w-12 bg-yellow-400/50"></div>
					<h5
						class="text-[20px] font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-widest uppercase font-inter whitespace-nowrap"
					>
						An Autonomous Institution
					</h5>
					<div class="h-[1px] w-12 bg-yellow-400/50"></div>
				</div>
				<div class="mt-0.5 text-slate-300">
					<h6
						class="text-[13.5px] lg:text-[15px] font-medium leading-relaxed opacity-95 font-inter"
					>
						Accredited by NAAC | Approved by AICTE | Affiliated to JNTU-GV Vizianagaram
						<br />
						<span>ISO 9001:2015 Certified | 18 Years of Educational Excellence Foundation</span>
					</h6>
					<div
						class="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 border border-slate-800 shadow-2xl"
					>
						<span class="text-sm font-bold text-amber-500 uppercase tracking-wider"
							>College Code :</span
						>
						<span class="baba-text font-black text-[17px] leading-none font-satoshi">BABA</span>
					</div>
				</div>
			</div>

			<!-- Right Logos -->
			<div class="flex items-center justify-end gap-3 shrink-0 h-full">
				<div
					class="h-[68px] w-[68px] lg:h-[90px] lg:w-[90px] relative group rounded-full overflow-hidden"
				>
					<div
						class="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500"
					></div>
					<img
						class="relative h-full w-full object-cover scale-[1.03]"
						src="/bits.png"
						alt="BITS Logo"
					/>
				</div>
				<div class="h-[84px] w-[84px] lg:h-[102px] lg:w-[102px]">
					<img class="h-full w-full object-contain" src="/naac.png" alt="NAAC" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes gradient-x {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}
	.animate-gradient-x {
		animation: gradient-x 3s ease infinite;
		will-change: background-position;
		transform: translateZ(0);
	}

	.baba-text {
		background: linear-gradient(90deg, #fbbf24, #22c1c3);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 600;
		letter-spacing: 0.5px;
	}

	#header {
		background: linear-gradient(120deg, #0b1a2f, #071426);
		box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.4);
	}

	/* Optimize images for faster rendering */
	img {
		contain: layout style paint;
	}

	.welcome-bottom-bar {
		background: linear-gradient(90deg, #071426, #0b1a2f);
		box-shadow:
			inset 0 0 80px rgba(0, 0, 0, 0.35),
			0 -1px 0 rgba(250, 204, 21, 0.18);
		padding-bottom: env(safe-area-inset-bottom);
		will-change: transform;
		transform: translateZ(0);
	}

	.welcome-copy {
		display: inline-flex;
		align-items: center;
		gap: 0.42rem;
	}

	.bits-pill-row {
		display: inline-flex;
		align-items: center;
		gap: 0.2rem;
	}

	.bits-pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		font-size: 1rem;
		line-height: 1;
	}

	.bits-b {
		color: #ed1b60;
	}

	.bits-i {
		color: #95c11f;
	}

	.bits-t {
		color: #fbb034;
	}

	.bits-s {
		color: #00aeef;
	}

	@media screen and (max-width: 1024px) {
		.welcome-bottom-bar .h-9 {
			height: auto;
			min-height: 30px;
		}

		.welcome-bottom-bar .gap-2 {
			gap: 0.5rem;
		}

		.welcome-bottom-bar .px-3 {
			padding-left: 0.75rem;
			padding-right: 0.75rem;
		}

		.welcome-bottom-bar .py-1 {
			padding-top: 0.2rem;
			padding-bottom: 0.2rem;
		}

		.bits-pill {
			font-size: 0.85rem;
		}
	}
	@media screen and (max-width: 1080px) {
		/* Removed display:none for #bits to ensure visibility on mobile */
	}
</style>
