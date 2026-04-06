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
	<div class="2xl:mx-auto py-2 xs:py-3 md:py-3.5 lg:px-12 w-full">
		<div class="flex flex-row justify-between items-center w-full px-1 xs:px-2.5 sm:px-4">
			<!-- Left Logo: NAAC -->
			<div class="flex flex-col justify-center items-start shrink-0">
				<div
					class="flex items-center justify-center h-[36px] w-[36px] 3xs:h-[40px] 3xs:w-[40px] 2xs:h-[48px] 2xs:w-[48px] xs:h-[58px] xs:w-[58px] md:h-[100px] md:w-[100px] lg:h-[125px] lg:w-[125px] drop-shadow-2xl"
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
					class="text-[10px] 3xs:text-[12px] 2xs:text-[14px] xs:text-[15.5px] sm:text-xl md:text-[22.5px] lg:text-[29px] font-extrabold text-white tracking-normal leading-snug filter drop-shadow-lg font-satoshi whitespace-nowrap"
				>
					BABA INSTITUTE OF TECHNOLOGY AND SCIENCES (A)
				</h1>

				<div class="flex items-center gap-1 mt-0.5 md:mt-1">
					<div class="h-[1px] w-1 xs:w-3 md:w-12 bg-yellow-400/50"></div>
					<h5
						class="text-[6px] 3xs:text-[7.5px] 2xs:text-[9.5px] xs:text-[10.5px] sm:text-lg md:text-[20px] font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-widest uppercase font-inter whitespace-nowrap"
					>
						An Autonomous Institution
					</h5>
					<div class="h-[1px] w-1 xs:w-3 md:w-12 bg-yellow-400/50"></div>
				</div>

				<div class="mt-0.5 md:mt-1 text-slate-300">
					<h6
						class="text-[6px] 3xs:text-[7.5px] 2xs:text-[9.5px] xs:text-[11.5px] md:text-[13.5px] lg:text-[15px] font-medium leading-relaxed opacity-95 max-w-[800px] mx-auto font-inter"
					>
						Accredited by NAAC | Approved by AICTE | Affiliated to JNTU-GV Vizianagaram
						<br class="hidden sm:block" />
						<span class="block">
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
					class="flex items-center justify-center h-[28px] w-[28px] 3xs:h-[32px] 3xs:w-[32px] 2xs:h-[38px] 2xs:w-[38px] xs:h-[48px] xs:w-[48px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px] relative group"
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
