<script>
	export let isActive = false;

	const accreditations = [
		{
			name: 'UGC',
			subtitle: 'Autonomous',
			logo: '/Accredation-logos/UGC.png'
		},
		{
			name: 'NAAC',
			subtitle: "'A' Grade",
			logo: '/naac.png'
		},
		{
			name: 'AICTE',
			subtitle: 'Approved',
			logo: '/Accredation-logos/AICTE.png'
		},
		{
			name: 'JNTU-GV',
			subtitle: 'Affiliated',
			logo: '/Accredation-logos/JNTUGV.jpg?v=2'
		},
		{
			name: 'IIC',
			subtitle: 'Recognized',
			logo: '/Accredation-logos/IIC.png'
		},
		{
			name: 'SIRO',
			subtitle: 'Recognized',
			logo: '/Accredation-logos/SIRO.png'
		},
		{
			name: 'Careers360',
			subtitle: 'Rated',
			logo: '/Accredation-logos/Career360.png'
		},
		{
			name: "MOE's",
			subtitle: 'Innovation Cell',
			logo: "/Accredation-logos/MOE'S.png"
		},
		{
			name: 'APSSDC',
			subtitle: 'Partner',
			logo: '/Accredation-logos/APSSDC.png'
		},
		{
			name: 'MSME',
			subtitle: 'Recognized',
			logo: '/Accredation-logos/MSME.png'
		}
	];
</script>

<section class="relative min-h-full w-full flex items-center justify-center overflow-hidden bg-[#FAF6F0] py-4 sm:py-12 md:py-16 px-2 sm:px-10 md:px-20 border-t border-[#e2d8c0]/20 select-none">
	<!-- Left Decorative Column (Hidden on mobile for space) -->
	<div class="absolute left-0 top-0 bottom-0 h-full w-20 hidden xl:block pointer-events-none opacity-85">
		<svg class="w-full h-full text-[#DFD5C6]" fill="currentColor" viewBox="0 0 100 800" preserveAspectRatio="none">
			<!-- Capital (Top) -->
			<rect x="10" y="20" width="80" height="15" rx="2" fill="#EADFCF" />
			<rect x="5" y="35" width="90" height="20" rx="3" fill="#DED0BC" />
			<path d="M5 55 C 20 65, 80 65, 95 55 L 90 70 L 10 70 Z" fill="#CBBBA4" />
			
			<!-- Shaft (Body with vertical grooves/flutes) -->
			<rect x="15" y="70" width="70" height="660" fill="url(#left-column-grad)" />
			<rect x="22" y="70" width="6" height="660" fill="#B3A28C" opacity="0.35" />
			<rect x="34" y="70" width="6" height="660" fill="#B3A28C" opacity="0.35" />
			<rect x="46" y="70" width="8" height="660" fill="#B3A28C" opacity="0.35" />
			<rect x="60" y="70" width="6" height="660" fill="#B3A28C" opacity="0.35" />
			<rect x="72" y="70" width="6" height="660" fill="#B3A28C" opacity="0.35" />
			
			<!-- Base (Bottom) -->
			<path d="M10 730 C 20 720, 80 720, 90 730 L 95 745 L 5 745 Z" fill="#CBBBA4" />
			<rect x="5" y="745" width="90" height="20" rx="3" fill="#DED0BC" />
			<rect x="10" y="765" width="80" height="15" rx="2" fill="#EADFCF" />
			
			<defs>
				<linearGradient id="left-column-grad" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stop-color="#E8DDD0" />
					<stop offset="50%" stop-color="#FAF5EE" />
					<stop offset="100%" stop-color="#D9CBB6" />
				</linearGradient>
			</defs>
		</svg>
	</div>

	<!-- Right Decorative Column (Hidden on mobile, mirrored) -->
	<div class="absolute right-0 top-0 bottom-0 h-full w-20 hidden xl:block pointer-events-none opacity-85 transform scale-x-[-1]">
		<svg class="w-full h-full text-[#DFD5C6]" fill="currentColor" viewBox="0 0 100 800" preserveAspectRatio="none">
			<!-- Capital (Top) -->
			<rect x="10" y="20" width="80" height="15" rx="2" fill="#EADFCF" />
			<rect x="5" y="35" width="90" height="20" rx="3" fill="#DED0BC" />
			<path d="M5 55 C 20 65, 80 65, 95 55 L 90 70 L 10 70 Z" fill="#CBBBA4" />
			
			<!-- Shaft (Body with vertical grooves/flutes) -->
			<rect x="15" y="70" width="70" height="660" fill="url(#right-column-grad)" />
			<rect x="22" y="70" width="6" height="660" fill="#B3A28C" opacity="0.35" />
			<rect x="34" y="70" width="6" height="660" fill="#B3A28C" opacity="0.35" />
			<rect x="46" y="70" width="8" height="660" fill="#B3A28C" opacity="0.35" />
			<rect x="60" y="70" width="6" height="660" fill="#B3A28C" opacity="0.35" />
			<rect x="72" y="70" width="6" height="660" fill="#B3A28C" opacity="0.35" />
			
			<!-- Base (Bottom) -->
			<path d="M10 730 C 20 720, 80 720, 90 730 L 95 745 L 5 745 Z" fill="#CBBBA4" />
			<rect x="5" y="745" width="90" height="20" rx="3" fill="#DED0BC" />
			<rect x="10" y="765" width="80" height="15" rx="2" fill="#EADFCF" />
			
			<defs>
				<linearGradient id="right-column-grad" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stop-color="#E8DDD0" />
					<stop offset="50%" stop-color="#FAF5EE" />
					<stop offset="100%" stop-color="#D9CBB6" />
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div class="relative z-10 mx-auto max-w-6xl w-full flex flex-col items-center justify-center">
		<!-- Laurel Tagline -->
		<div class="flex items-center gap-1 sm:gap-2.5 text-[#b5945b] mb-0.5 sm:mb-1.5">
			<!-- Left Laurel -->
			<svg class="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M2 21c4.5-1.5 7.5-5.5 8-10-.5-.5-1.5-1-2.5-1-3 0-5.5 2-6 5-.5 2 .5 4.5.5 6zm6-14c1.5.5 2.5 1.5 3 2.5.5-2 .5-4.5-.5-6-1.5.5-2.5 1.5-3 2.5-.5 1.5-.5 3 .5 4.5zM15 4c-.5 1.5-1 3-.5 4.5 1.5-.5 2.5-1.5 3-2.5.5-2 .5-4.5-.5-6-1.5.5-2.5 1.5-3 2.5zm-5 8c.5 4.5 3.5 8.5 8 10 .5-1.5.5-4-.5-6-.5-3-3-5-6-5-1 0-2 .5-2.5 1z" />
			</svg>
			<span class="text-[8px] sm:text-xs font-bold uppercase tracking-[0.25em] font-serif">Mark of Distinction</span>
			<!-- Right Laurel -->
			<svg class="w-3.5 h-3.5 sm:w-5 sm:h-5 transform scale-x-[-1]" fill="currentColor" viewBox="0 0 24 24">
				<path d="M2 21c4.5-1.5 7.5-5.5 8-10-.5-.5-1.5-1-2.5-1-3 0-5.5 2-6 5-.5 2 .5 4.5.5 6zm6-14c1.5.5 2.5 1.5 3 2.5.5-2 .5-4.5-.5-6-1.5.5-2.5 1.5-3 2.5-.5 1.5-.5 3 .5 4.5zM15 4c-.5 1.5-1 3-.5 4.5 1.5-.5 2.5-1.5 3-2.5.5-2 .5-4.5-.5-6-1.5.5-2.5 1.5-3 2.5zm-5 8c.5 4.5 3.5 8.5 8 10 .5-1.5.5-4-.5-6-.5-3-3-5-6-5-1 0-2 .5-2.5 1z" />
			</svg>
		</div>

		<!-- Title -->
		<h2 class="font-serif text-lg sm:text-4xl md:text-5xl font-normal text-slate-900 text-center leading-tight mb-1 sm:mb-2">
			Recognitions & <span class="text-[#b5945b] font-serif">Accreditations</span>
		</h2>

		<!-- Divider Ornament -->
		<div class="flex items-center justify-center gap-2.5 sm:gap-4 w-full max-w-[180px] sm:max-w-md my-1 sm:my-3">
			<div class="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[#b5945b]/60"></div>
			<svg class="w-3 h-3 sm:w-5 sm:h-5 text-[#b5945b]" fill="currentColor" viewBox="0 0 24 24">
				<path d="M4 10h16v2H4zm3 3h2v7H7zm8 0h2v7h-2zm-4 0h2v7h-2zM2 22h20v2H2zm0-16l10-5 10 5v2H2z"/>
			</svg>
			<div class="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[#b5945b]/60"></div>
		</div>

		<!-- Subtitle (Hidden on mobile to save vertical space) -->
		<p class="hidden sm:block text-[9px] sm:text-sm text-slate-500 font-serif max-w-xl text-center leading-relaxed mb-4 sm:mb-8 px-2 sm:px-4">
			A legacy of excellence. Recognized by leading bodies for our commitment to quality education.
		</p>

		<!-- Cards Grid (2-columns on mobile, 5-columns on desktop) -->
		<div class="w-full grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-5 md:gap-6 px-2 sm:px-6 mb-2 sm:mb-0">
			{#each accreditations as item, i}
				<div class="relative flex flex-col items-center justify-center p-2 sm:p-5 bg-[#FCFAF7] rounded-xl border border-[#e5dcc6]/80 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_28px_rgba(181,148,91,0.1)] hover:-translate-y-1 hover:border-[#b5945b]/50 transition-all duration-300 select-none">
					<!-- Golden Rivets / Screws in Corners (Desktop only) -->
					<span class="hidden sm:block absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-gradient-to-br from-[#f3e7c4] via-[#c5a265] to-[#8d6a2f] shadow-[0_0.5px_1px_rgba(0,0,0,0.1)]"></span>
					<span class="hidden sm:block absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-gradient-to-br from-[#f3e7c4] via-[#c5a265] to-[#8d6a2f] shadow-[0_0.5px_1px_rgba(0,0,0,0.1)]"></span>
					<span class="hidden sm:block absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-gradient-to-br from-[#f3e7c4] via-[#c5a265] to-[#8d6a2f] shadow-[0_0.5px_1px_rgba(0,0,0,0.1)]"></span>
					<span class="hidden sm:block absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-gradient-to-br from-[#f3e7c4] via-[#c5a265] to-[#8d6a2f] shadow-[0_0.5px_1px_rgba(0,0,0,0.1)]"></span>

					<!-- Centered Circular Logo Frame -->
					<div class="w-9 h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-[#b5945b]/25 bg-white flex items-center justify-center p-1.5 sm:p-2 mb-1.5 sm:mb-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)] transition-transform duration-300 hover:scale-105">
						<img src={item.logo} alt={item.name} class="w-full h-full object-contain mix-blend-multiply" />
					</div>

					<!-- Title -->
					<h3 class="font-serif text-[9px] sm:text-base font-bold text-slate-800 tracking-tight leading-none text-center">
						{item.name}
					</h3>

					<!-- Subtitle Tag -->
					<p class="text-[7px] sm:text-[9.5px] font-bold text-[#b5945b] uppercase tracking-wider mt-1 sm:mt-2 leading-none text-center">
						{item.subtitle}
					</p>
				</div>
			{/each}
		</div>

		<!-- Footer Delimiter (Hidden on mobile to save vertical space) -->
		<div class="hidden sm:flex items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm mt-8 sm:mt-12 text-[#b5945b]">
			<div class="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[#b5945b]/40"></div>
			<div class="flex items-center gap-2">
				<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2L1 21h22L12 2zm0 4l7.5 13H4.5L12 6z"/>
				</svg>
				<span class="text-[10px] sm:text-xs font-serif italic tracking-wide text-slate-500 whitespace-nowrap">Building futures. Inspiring excellence.</span>
			</div>
			<div class="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[#b5945b]/40"></div>
		</div>
	</div>
</section>

<style>
</style>
