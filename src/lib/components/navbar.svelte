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

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
/>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
	rel="stylesheet"
/>
<link
	href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
	rel="stylesheet"
/>
<!-- Top Bar: Quick Links & Socials -->

<div
	id="header"
	class="bg-slate-900 border-b border-slate-800 flex flex-col items-center w-full relative z-[1001] shadow-2xl"
>
	<div class="2xl:mx-auto py-2 md:py-3 lg:px-12 w-full">
		<div class="flex flex-row justify-between items-center w-full px-4">
			<!-- Left Logo: NAAC -->
			<div class="flex flex-col justify-center items-start shrink-0">
				<div
					class="flex items-center justify-center h-[50px] w-[50px] xs:h-[80px] xs:w-[80px] md:h-[105px] md:w-[105px] lg:h-[135px] lg:w-[135px] drop-shadow-2xl"
				>
					<img
						class="bg-transparent p-1 h-full w-full object-contain filter"
						src="/naac.png"
						alt="NAAC Accredited"
					/>
				</div>
			</div>

			<!-- Center Content -->
			<div
				class="flex flex-col justify-center items-center text-center px-1 xs:px-4 flex-1 max-w-[1050px]"
			>
				<h1
					class="text-[13px] 2xs:text-[15px] xs:text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-[0.02em] xs:tracking-[0.05em] leading-tight filter drop-shadow-lg"
				>
					BABA INSTITUTE OF TECHNOLOGY AND SCIENCES (A)
				</h1>

				<div class="flex items-center gap-1.5 xs:gap-2 mt-0 md:mt-1">
					<div class="h-[1px] w-3 md:w-12 bg-yellow-400/50"></div>
					<h5
						class="text-[9px] 2xs:text-[11px] xs:text-xs sm:text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-widest uppercase"
					>
						An Autonomous Institution
					</h5>
					<div class="h-[1px] w-3 md:w-12 bg-yellow-400/50"></div>
				</div>

				<div class="mt-0.5 md:mt-1 text-slate-300">
					<h6
						class="text-[7.5px] 2xs:text-[9px] xs:text-[10px] md:text-xs lg:text-sm font-medium leading-relaxed opacity-80 max-w-[600px] mx-auto"
					>
						( Accredited by NAAC | Approved by AICTE, New Delhi | Affiliated to JNTU-Kakinada, GV )
						<br class="hidden sm:block" />
						<span class="block sm:inline">(An ISO 9001:2015 Certified Educational Institution)</span
						>
					</h6>
					<div
						class="mt-2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-slate-950/90 border border-slate-800 shadow-2xl"
					>
						<span class="text-[11px] md:text-xs font-bold text-amber-500 uppercase tracking-wider">
							College Code :
						</span>
						<span
							class="inline-block animate-gradient-x bg-gradient-to-r from-[#ed1b60] via-[#95c11f] via-[#fbb034] to-[#00aeef] bg-[length:200%_auto] bg-clip-text text-transparent font-black tracking-normal text-sm md:text-base leading-none"
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
					class="flex items-center justify-center h-[40px] w-[40px] xs:h-[65px] xs:w-[65px] md:h-[85px] md:w-[85px] lg:h-[105px] lg:w-[105px] relative group"
				>
					<div
						class="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500"
					></div>
					<img
						class="relative bg-white rounded-full p-2 h-full w-full object-contain shadow-2xl border-2 border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-500"
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
	}
	a {
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		text-transform: capitalize;
		letter-spacing: 0.02em;
	}
	/* Converted #bits hiding rule to keeping it visible but ensuring standard sizing if needed.
       Actually, removing the hide rule completely is safer. */
	@media screen and (max-width: 1023px) {
		/* Removed display:none for #bits to ensure visibility on mobile */
	}
</style>
