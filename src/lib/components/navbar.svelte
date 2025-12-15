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
	function onClick(item) {
		toggleIsActiveTab(true);
		setActiveTabValue(item);
	}
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
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
<div id="header" class="bg-gray-800 flex flex-col items-center w-full">
	<div class="2xl:mx-auto py-2 md:py-4 lg:px-7 w-full">
		<div class="flex flex-row justify-between items-center w-full">
			<!-- Left Logo: NAAC -->
			<div class="flex flex-col justify-center">
				<div
					class="flex items-center justify-center h-[60px] w-[60px] xs:h-[80px] xs:w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px]"
				>
					<img
						class="bg-transparent p-1 h-full w-full object-contain"
						src="/naac.png"
						alt="NAAC Accredited"
					/>
				</div>
			</div>
			<div class="flex flex-row justify-center items-center px-1">
				<div class="flex flex-col justify-center items-center text-center">
					<h1
						class="text-4xl 3xs:text-sm 2xs:text-base xs:text-lg sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide text-center px-2"
					>
						BABA INSTITUTE OF TECHNOLOGY AND SCIENCES (A)
					</h1>

					<h5
						class="mt-1 text-2xl 3xs:text-xs 2xs:text-sm xs:text-base sm:text-xl md:text-xl font-bold text-yellow-400 tracking-wide text-center"
					>
						An Autonomous Institution
					</h5>

					<div class="mt-1">
						<div class="mt-2 text-white text-center opacity-90">
							<h6
								class="text-sm 3xs:text-[9px] 2xs:text-[10px] xs:text-xs md:text-sm leading-tight"
							>
								( Accredited by NAAC | Approved by AICTE, New Delhi | Affiliated to JNTU-Kakinada,
								GV )
								<br class="hidden sm:block" />
								<span class="block sm:inline"
									>(An ISO 9001:2015 Certified Educational Institution)</span
								>
							</h6>
							<p
								class="text-yellow-400 font-semibold uppercase text-sm md:text-lg mt-1 tracking-wider"
							>
								College Code : Baba
							</p>
						</div>
					</div>
				</div>
			</div>
			<!-- Right Logo: College Logo -->
			<div class="flex flex-col justify-center items-center">
				<div
					id="bits"
					class="flex items-center justify-center h-[45px] w-[45px] xs:h-[65px] xs:w-[65px] md:h-[85px] md:w-[85px] lg:h-[120px] lg:w-[120px]"
				>
					<img
						class="bg-white rounded-full p-1 h-full w-full object-contain"
						src="/bits.jpg"
						alt="BITS Vizag Logo"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	button {
		font-family: 'Lato', sans-serif;
		font-weight: 900;
	}

	a {
		font-family: 'Roboto', sans-serif;
		font-weight: 500;
	}
	/* Converted #bits hiding rule to keeping it visible but ensuring standard sizing if needed.
       Actually, removing the hide rule completely is safer. */
	@media screen and (max-width: 1023px) {
		/* Removed display:none for #bits to ensure visibility on mobile */
	}
</style>
