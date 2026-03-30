<script>
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
</script>

<!-- Top Bar: Quick Links & Socials -->

<div
	id="header"
	class="bg-slate-900 border-b border-slate-800 flex flex-col items-center w-full relative z-[1001] shadow-2xl"
>
	<div class="2xl:mx-auto py-2 md:py-3 lg:px-12 w-full">
		<div class="flex flex-row justify-between items-center w-full px-2 sm:px-4">
			<!-- Left Logo: NAAC -->
			<div class="flex flex-col justify-center items-start shrink-0">
				<div
					class="flex items-center justify-center h-[40px] w-[40px] 2xs:h-[50px] 2xs:w-[50px] xs:h-[70px] xs:w-[70px] md:h-[105px] md:w-[105px] lg:h-[135px] lg:w-[135px] drop-shadow-2xl"
				>
					<img
						class="bg-transparent p-0.5 xs:p-1 h-full w-full object-contain filter"
						src="/naac.png"
						alt="NAAC Accredited"
					/>
				</div>
			</div>

			<!-- Center Content -->
			<div
				class="flex flex-col -p-1 justify-center items-center text-center px-2 xs:px-1 flex-1 max-w-[1050px]"
			>
				<h1
					class="text-[10px] 3xs:text-[12px] 2xs:text-[14px] xs:text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-[0.01em] xs:tracking-[0.05em] leading-tight filter drop-shadow-lg font-satoshi"
				>
					BABA INSTITUTE OF TECHNOLOGY AND SCIENCES (A)
				</h1>

				<div class="flex items-center gap-1 xs:gap-2 mt-0 md:mt-1">
					<div class="h-[1px] w-2 xs:w-3 md:w-12 bg-yellow-400/50"></div>
					<h5
						class="text-[7.5px] 3xs:text-[8px] 2xs:text-[10px] xs:text-xs sm:text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-widest uppercase font-inter"
					>
						An Autonomous Institution
					</h5>
					<div class="h-[1px] w-2 xs:w-3 md:w-12 bg-yellow-400/50"></div>
				</div>

				<div class="mt-0.5 md:mt-1 text-slate-300">
					<h6
						class="text-[6.5px] 3xs:text-[7px] 2xs:text-[8.5px] xs:text-[10px] md:text-xs lg:text-sm font-medium leading-relaxed opacity-80 max-w-[800px] mx-auto font-inter"
					>
						Accredited by NAAC | Approved by AICTE, New Delhi | Affiliated to JNTU-GV Vizianagaram
						<br class="hidden sm:block" />
						<span class="block sm:inline">
							An ISO 9001:2015 Certified Educational Institution | 18 Years of Educational
							Excellence Foundation</span>
					</h6>
					<div
						class="mt-1 xs:mt-2 inline-flex items-center gap-1 xs:gap-1.5 px-2.5 xs:px-4 py-0.5 xs:py-1 rounded-full bg-slate-950/90 border border-slate-800 shadow-2xl"
					>
						<span
							class="text-[10px] 2xs:text-[11px] md:text-sm font-bold text-amber-500 uppercase tracking-wider"
						>
							College Code :
						</span>
						<span
							class="inline-block animate-gradient-x bg-gradient-to-r from-[#ed1b60] via-[#95c11f] via-[#fbb034] to-[#00aeef] bg-[length:200%_auto] bg-clip-text text-transparent font-black tracking-normal text-xs xs:text-base md:text-lg leading-none font-satoshi"
						>
							BABA
						</span>
					</div>
				</div>
			</div>

			<!-- Right Logo: College Logo -->
			<div class="flex flex-col justify-center items-end shrink-0">
				<div
					id="bits"
					class="flex items-center justify-center h-[35px] w-[35px] 2xs:h-[45px] 2xs:w-[45px] xs:h-[60px] xs:w-[60px] md:h-[85px] md:w-[85px] lg:h-[105px] lg:w-[105px] relative group"
				>
					<div
						class="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500"
					></div>
					<img
						class="relative bg-white rounded-full p-1 xs:p-2 h-full w-full object-contain shadow-2xl border-2 border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-500"
						src="/bits.jpg"
						alt="BITS Vizag Logo"
					/>
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
	a {
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		text-transform: capitalize;
		letter-spacing: 0.02em;
	}
	/* Optimize images for faster rendering */
	img {
		contain: layout style paint;
	}
	@media screen and (max-width: 1023px) {
		/* Removed display:none for #bits to ensure visibility on mobile */
	}
</style>
