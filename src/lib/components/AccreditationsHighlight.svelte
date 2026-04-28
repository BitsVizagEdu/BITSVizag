<script>
	export let isActive = false;

	const accreditations = [
		{
			name: 'UGC',
			subtitle: 'Autonomous',
			color: 'from-blue-500 to-indigo-600',
			logo: '/Accredation-logos/UGC.png'
		},
		{
			name: 'NAAC',
			subtitle: "'A' Grade",
			color: 'from-amber-400 to-amber-600',
			logo: '/naac.png'
		},
		{
			name: 'AICTE',
			subtitle: 'Approved',
			color: 'from-orange-400 to-red-500',
			logo: '/Accredation-logos/AICTE.png'
		},
		{
			name: 'JNTU-GV',
			subtitle: 'Affiliated',
			color: 'from-emerald-400 to-teal-600',
			logo: '/Accredation-logos/JNTUGV.jpg'
		},
		{
			name: 'NIRF',
			subtitle: 'Innovation',
			color: 'from-indigo-500 to-violet-600',
			logo: '/Accredation-logos/NIRF.png'
		},
		{
			name: 'IIC',
			subtitle: 'Recognized',
			color: 'from-rose-400 to-pink-600',
			logo: '/Accredation-logos/IIC.png'
		},
		{
			name: 'SIRO',
			subtitle: 'Recognized',
			color: 'from-red-500 to-rose-600',
			logo: '/Accredation-logos/SIRO.png'
		},
		{
			name: 'Careers360',
			subtitle: 'Rated',
			color: 'from-sky-400 to-blue-500',
			logo: '/Accredation-logos/Career360.png'
		},
		{
			name: "MOE's",
			subtitle: 'Innovation Cell',
			color: 'from-blue-600 to-indigo-800',
			logo: "/Accredation-logos/MOE'S.png"
		},
		{
			name: 'UGC',
			subtitle: '2(f) & 12(B)',
			color: 'from-blue-500 to-sky-600',
			logo: '/Accredation-logos/UGC1.png'
		},
		{
			name: 'APSSDC',
			subtitle: 'Partner',
			color: 'from-orange-400 to-amber-500',
			logo: '/Accredation-logos/APSSDC.png'
		},
		{
			name: 'MSME',
			subtitle: 'Recognized',
			color: 'from-slate-500 to-slate-700',
			logo: '/Accredation-logos/MSME.png'
		}
	];
</script>

<section
	class="relative h-[82vh] flex items-center justify-center w-full overflow-hidden bg-[#FFFDF5]"
>
	<!-- Premium Golden Background Glow -->
	<div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08)_0%,transparent_70%)]"
		></div>
		<div
			class="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-amber-200/20 rounded-full blur-[120px]"
		></div>
		<div
			class="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-amber-100/20 rounded-full blur-[120px]"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-6 md:px-10 w-full h-full flex flex-col justify-center gap-8 py-6">
			<!-- Premium Gold Lighting Header -->
			<div
				class="flex flex-col items-center text-center space-y-3 transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) {isActive
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-8'}"
			>
				<div
					class="inline-block rounded-full bg-amber-500/10 px-6 py-1 border border-amber-500/20 mb-2"
				>
					<p class="text-[10px] font-bold text-amber-700 tracking-[0.1em] uppercase">
						Mark of Distinction
					</p>
				</div>
				<h2 class="font-sans text-5xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
					Recognitions & <span class="relative inline-block">
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-800 gold-shimmer"
							>Accreditations</span
						>
						<span
							class="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
						></span>
					</span>
				</h2>
				<p
					class="max-w-xl text-sm md:text-base text-slate-700 font-medium leading-relaxed mt-6 opacity-90 italic"
				>
					“Quality is not an act, it is a habit.” — Validated by Excellence.
				</p>
			</div>

			<!-- Premium Grid -->
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
				{#each accreditations as item, i}
					<div
						class="group relative flex flex-col items-center justify-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-amber-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl {isActive
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'} min-h-[180px]"
						style="transition-delay: {100 + i * 50}ms;"
					>
						<!-- Hover Bold Color Touch (Gradient Border) -->
						<div
							class="absolute inset-0 rounded-2xl bg-gradient-to-br {item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1.5px] -z-10"
						>
							<div class="h-full w-full bg-white rounded-[15px]"></div>
						</div>

						<!-- Hover Top Bar Color Accent -->
						<div
							class="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-amber-50 group-hover:bg-gradient-to-r {item.color} transition-all duration-500"
						></div>

						<!-- Logo/Icon Container - REMOVED GRAYSCALE -->
						<div
							class="relative w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-200/50"
						>
							{#if item.logo}
								<img
									src={item.logo}
									alt={item.name}
									class="w-11 h-11 object-contain opacity-90 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply"
								/>
							{:else}
								<span
									class="text-2xl opacity-90 group-hover:opacity-100 transition-all duration-500"
								>
									{item.name.charAt(0)}
								</span>
							{/if}
						</div>

						<div class="flex flex-col items-center">
							<h4
								class="text-base font-semibold text-slate-800 text-center tracking-tight leading-tight transition-colors group-hover:text-amber-800"
							>
								{item.name}
							</h4>
							<p
								class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 text-center transition-colors group-hover:text-amber-700/70"
							>
								{item.subtitle}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
</section>

<style>
	/* Gold Shimmer Effect */
	.gold-shimmer {
		background-size: 200% auto;
		animation: shimmer 4s linear infinite;
	}

	@keyframes shimmer {
		0% {
			background-position: 0% center;
		}
		100% {
			background-position: 200% center;
		}
	}

	/* Background pattern */
	section {
		background-image: radial-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px);
		background-size: 30px 30px;
	}
</style>
