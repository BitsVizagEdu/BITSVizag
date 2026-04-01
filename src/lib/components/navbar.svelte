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
	class="bg-slate-900 border-b border-slate-800 flex flex-col items-center w-full relative z-[1001] shadow-2xl overflow-hidden"
>
	<div class="2xl:mx-auto py-1 xs:py-1.5 md:py-3 lg:px-12 w-full">
		<div class="flex flex-row justify-between items-center w-full px-1 xs:px-2.5 sm:px-4">
			<!-- Left Logo: NAAC -->
			<div class="flex flex-col justify-center items-start shrink-0">
				<div
					class="flex items-center justify-center h-[30px] w-[30px] 3xs:h-[34px] 3xs:w-[34px] 2xs:h-[40px] 2xs:w-[40px] xs:h-[50px] xs:w-[50px] md:h-[105px] md:w-[105px] lg:h-[135px] lg:w-[135px] drop-shadow-2xl"
				>
					<img
						class="bg-transparent p-0.5 h-full w-full object-contain filter"
						src="/naac.png"
						alt="NAAC Accredited"
					/>
				</div>
			</div>

			<!-- Center Content -->
			<div
				class="flex flex-col justify-center items-center text-center px-0.5 xs:px-2 flex-1 min-w-0 max-w-[1050px]"
			>
				<h1
					class="text-[7.2px] 3xs:text-[8.5px] 2xs:text-[10.5px] xs:text-[13px] sm:text-base md:text-2xl lg:text-3xl font-extrabold text-white tracking-tighter 2xs:tracking-tight xs:tracking-normal leading-none filter drop-shadow-lg font-satoshi whitespace-nowrap"
				>
					BABA INSTITUTE OF TECHNOLOGY AND SCIENCES (A)
				</h1>

				<div class="flex items-center gap-1 mt-0.5 md:mt-1">
					<div class="h-[1px] w-1 xs:w-3 md:w-12 bg-yellow-400/50"></div>
					<h5
						class="text-[6px] 3xs:text-[7.5px] 2xs:text-[8.5px] xs:text-[10.5px] sm:text-base md:text-xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-widest uppercase font-inter whitespace-nowrap"
					>
						An Autonomous Institution
					</h5>
					<div class="h-[1px] w-1 xs:w-3 md:w-12 bg-yellow-400/50"></div>
				</div>

				<div class="mt-0.5 md:mt-1 text-slate-300">
					<h6
						class="text-[5px] 3xs:text-[6px] 2xs:text-[7.5px] xs:text-[9.5px] md:text-[11px] lg:text-sm font-medium leading-none opacity-80 max-w-[800px] mx-auto font-inter"
					>
						Accredited by NAAC | Approved by AICTE | Affiliated to JNTU-GV Vizianagaram
						<br class="hidden sm:block" />
						<span class="block sm:inline">
							ISO 9001:2015 Certified | 18 Years of Educational Excellence Foundation</span
						>
					</h6>
					<div
						class="mt-0.5 xs:mt-1.5 inline-flex items-center gap-1 xs:gap-1.5 px-1.5 xs:px-3 py-0.5 rounded-full bg-slate-950/90 border border-slate-800 shadow-2xl"
					>
						<span
							class="text-[7.5px] 2xs:text-[9px] md:text-sm font-bold text-amber-500 uppercase tracking-wider"
						>
							College Code :
						</span>
						<span
							class="inline-block animate-gradient-x bg-gradient-to-r from-[#ed1b60] via-[#95c11f] via-[#fbb034] to-[#00aeef] bg-[length:200%_auto] bg-clip-text text-transparent font-black tracking-normal text-[9px] 2xs:text-[11px] xs:text-base md:text-lg leading-none font-satoshi"
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
					class="flex items-center justify-center h-[28px] w-[28px] 3xs:h-[32px] 3xs:w-[32px] 2xs:h-[38px] 2xs:w-[38px] xs:h-[48px] xs:w-[48px] md:h-[85px] md:w-[85px] lg:h-[105px] lg:w-[105px] relative group"
				>
					<div
						class="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500"
					></div>
					<img
						class="relative bg-white rounded-full p-0.5 xs:p-1 h-full w-full object-contain shadow-2xl border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-500"
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
	/* Optimize images for faster rendering */
	img {
		contain: layout style paint;
	}
	@media screen and (max-width: 1080px) {
		/* Removed display:none for #bits to ensure visibility on mobile */
	}
</style>
