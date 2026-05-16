<script>
	export let isActive = false;

	const stats = [
		{
			value: '15+ Acres',
			label: 'Sprawling green campus',
			color: 'text-[#1F6F8B]',
			icon: '🏫'
		},
		{
			value: '30,000+',
			label: 'Library Books & Journals',
			color: 'text-[#8A2BE2]',
			icon: '📚'
		},
		{
			value: '10+',
			label: 'Cutting-edge labs',
			color: 'text-[#10B981]',
			icon: '🔬'
		},
		{
			value: 'Hostels',
			label: 'Boys & Girls separate',
			color: 'text-[#D97706]',
			icon: '🏠'
		},
		{
			value: '1200+',
			label: 'Computers & Workstations',
			color: 'text-[#DC2626]',
			icon: '💻'
		},
		{
			value: '5+',
			label: 'Transport Services',
			color: 'text-[#F59E0B]',
			icon: '🚌'
		}
	];
</script>

<section class="relative h-[82vh] flex items-center w-full overflow-hidden bg-[#fdf8f4]">
	<!-- Premium Background Overlay -->
	<div class="absolute inset-0 z-0">
		<img
			src="/infrastructure_bg.png"
			alt="Campus Background"
			class="h-full w-full object-cover object-center opacity-10"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-tr from-[#fdf8f4]/80 via-transparent to-transparent"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-6 md:px-10 w-full h-full py-6">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center h-full items-center">
			<div
				class="flex flex-col space-y-4 transition-all duration-[1000ms] cubic-bezier(0.23, 1, 0.32, 1) {isActive
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-12 pointer-events-none'}"
			>
				<div class="flex">
					<span
						class="inline-flex items-center gap-2 rounded-full border border-[#1F6F8B]/20 bg-[#1F6F8B]/5 px-3 py-1 text-[10px] font-bold tracking-widest text-[#1F6F8B] uppercase"
					>
						<span class="relative flex h-2 w-2">
							<span
								class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1F6F8B]/40 opacity-75"
							></span>
							<span class="relative inline-flex h-2 w-2 rounded-full bg-[#1F6F8B]"></span>
						</span>
						Specialized Infrastructure
					</span>
				</div>

				<!-- Heading Group -->
				<div class="space-y-2">
					<h2
						class="font-sans text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
					>
						Built for <br />
						<span class="text-[#1F6F8B]">Innovation</span>
					</h2>
					<div class="inline-block rounded-lg bg-[#1F6F8B]/10 px-3 py-1">
						<p class="text-xs font-semibold text-[#1F6F8B] sm:text-base md:text-lg">
							A Hub for Academic Excellence
						</p>
					</div>
				</div>

				<!-- Message -->
				<p class="max-w-md text-xs leading-relaxed text-slate-600">
					A sprawling 15+ acre campus equipped with cutting-edge laboratories, a massive library,
					and modern facilities designed to foster innovation and academic excellence.
				</p>

				<!-- Scholarship Highlight Box -->
				<div
					class="group relative overflow-hidden rounded-xl border-l-4 border-amber-400 bg-white p-4 shadow-md transition-all hover:shadow-lg"
				>
					<div class="relative z-10 flex items-center gap-4">
						<div
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600"
						>
							<svg
								class="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="12" cy="8" r="7" /><polyline
									points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
								/>
							</svg>
						</div>
						<div>
							<h4 class="text-2xl font-black tracking-tight text-slate-800">Smart Learning</h4>
							<p class="text-[9px] font-bold tracking-widest text-slate-400 uppercase">
								Building Intelligent Learning Environments
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- RIGHT SIDE: STATS GRID -->
			<div
				class="relative flex flex-col gap-6 transition-all duration-[1000ms] cubic-bezier(0.23, 1, 0.32, 1) delay-200 {isActive
					? 'opacity-100 translate-x-0'
					: 'opacity-0 translate-x-12 pointer-events-none'} h-full justify-center"
			>
				<!-- Stats Grid -->
				<div class="grid grid-cols-2 gap-3 sm:gap-4">
					{#each stats as stat}
						<div
							class="group relative flex flex-col items-start justify-center rounded-2xl bg-white p-4 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
						>
							<div class="text-xl sm:text-2xl mb-1 sm:mb-2">{stat.icon}</div>
							<p class="text-lg font-bold tracking-tight {stat.color} sm:text-2xl md:text-3xl">
								{stat.value}
							</p>
							<p
								class="mt-0.5 text-[8px] sm:text-[11px] capitalize font-bold tracking-normal text-slate-600"
							>
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
	:global(body) {
		font-family: 'Inter', sans-serif;
	}
</style>
