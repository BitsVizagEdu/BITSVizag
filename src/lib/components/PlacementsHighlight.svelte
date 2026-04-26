<script>
	export let isActive = false;

	const stats = [
		{
			label: 'Total Offers',
			value: '1000+',
			color: 'text-blue-600',
			borderColor: 'border-blue-500'
		},
		{
			label: 'Highest Package',
			value: '30.50 LPA',
			color: 'text-amber-600',
			borderColor: 'border-amber-500'
		},
		{
			label: 'Average Package',
			value: '4.6 LPA',
			color: 'text-emerald-600',
			borderColor: 'border-emerald-500'
		},
		{
			label: 'Fortune 500 Partners',
			value: '50+',
			color: 'text-indigo-900',
			borderColor: 'border-indigo-900'
		}
	];

	const recruiters = [
		{ name: 'Deloitte', logo: '/company/2560px-Deloitte.svg.png' },
		{ name: 'TCS', logo: '/logo-150/4.png' },
		{ name: 'Infosys', logo: '/logo-150/2.png' },
		{ name: 'Wipro', logo: '/logo-150/Wipro.png' },
		{ name: 'Capgemini', logo: '/logo-150/Capgemini.png' },
		{ name: 'HCL', logo: '/company/HCL-Logo.png' },
		{ name: 'Tech Mahindra', logo: '/company/image (4).png' },
		{ name: 'Augur', logo: '/company/image (22).png' },
		{ name: 'The Placement Park', logo: '/company/image (37).png' },
		{ name: 'Deloitte', logo: 'company/image (13).png' }
	];
</script>

<section class="relative min-h-[75vh] flex items-center w-full overflow-hidden py-16 lg:py-24">
	<!-- Premium Background Layer -->
	<div class="absolute inset-0 z-0">
		<img
			src="/maingall/e5.jpg"
			alt="Placements Background"
			class="h-full w-full object-cover object-center opacity-30"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-br from-blue-50/95 via-indigo-50/80 to-transparent backdrop-blur-[2px]"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-6 md:px-10 w-full">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
			<!-- LEFT SIDE: PLACEMENT CONTENT -->
			<div
				class="flex flex-col space-y-6 transition-all duration-[1000ms] cubic-bezier(0.23, 1, 0.32, 1) {isActive
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-12 pointer-events-none'}"
			>
				<!-- Badge -->
				<div class="flex">
					<span
						class="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/50 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-800 uppercase"
					>
						<span class="relative flex h-2 w-2">
							<span
								class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"
							></span>
							<span class="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
						</span>
						Now Hiring: Batch 2026
					</span>
				</div>

				<!-- Heading Group -->
				<div class="space-y-3">
					<h2 class="font-sans text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
						Elite <br />
						<span class="text-blue-600">Placements</span>
					</h2>
					<div class="inline-block rounded-lg bg-blue-600/10 px-4 py-1.5">
						<p class="text-base font-semibold text-blue-900 sm:text-xl">
							Empowering Professional Journeys
						</p>
					</div>
				</div>

				<!-- Message -->
				<p class="max-w-md text-sm leading-relaxed text-slate-600">
					Our students are consistently recruited by world-class organizations, reflecting the
					quality and rigor of BITS Vizag's academic ecosystem.
				</p>

				<!-- Recruiters Minimal Marquee -->
				<div class="space-y-4">
					<p class="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
						Our Elite Hiring Partners
					</p>
					<div
						class="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
					>
						{#each recruiters as company}
							<img
								src={company.logo}
								alt={company.name}
								class="h-8 w-auto min-w-[60px] max-w-[100px] object-contain"
							/>
						{/each}
					</div>
				</div>

				<!-- CTA -->
				<div class="pt-4">
					<a
						href="/placements"
						class="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-900/30"
					>
						<span class="relative z-10">View Placement Gallery</span>
						<div
							class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"
						></div>
					</a>
				</div>
			</div>

			<!-- RIGHT SIDE: IMAGE + SMALL STATS -->
			<div
				class="relative flex flex-col gap-6 transition-all duration-[1000ms] cubic-bezier(0.23, 1, 0.32, 1) delay-200 {isActive
					? 'opacity-100 translate-x-0'
					: 'opacity-0 translate-x-12 pointer-events-none'}"
			>
				<div
					class="relative overflow-hidden rounded-3xl border border-white/40 bg-white/10 shadow-2xl backdrop-blur-sm"
				>
					<img src="/placee.png" alt="Placement Success" class="h-full w-full object-cover" />
				</div>

				<div class="grid grid-cols-2 gap-3 sm:gap-4">
					{#each stats as stat, i}
						<div
							class="group relative flex flex-col items-center justify-center rounded-xl border-t-[2px] bg-white/90 p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl {stat.borderColor}"
						>
							<p class="text-2xl font-bold tracking-tight {stat.color}">
								{stat.value}
							</p>
							<p class="mt-1 text-[11px] font-bold tracking-normal text-slate-600">
								{stat.label}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.gold-label {
		color: #d97706;
		background: linear-gradient(to right, #f59e0b, #fbbf24, #d97706);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: goldFade 4s ease-in-out infinite;
	}

	@keyframes goldFade {
		0%,
		100% {
			filter: brightness(1) drop-shadow(0 0 0 rgba(251, 191, 36, 0));
		}
		50% {
			filter: brightness(1.2) drop-shadow(0 0 2px rgba(251, 191, 36, 0.4));
		}
	}

	:global(body) {
		font-family: 'Inter', sans-serif;
	}
</style>
