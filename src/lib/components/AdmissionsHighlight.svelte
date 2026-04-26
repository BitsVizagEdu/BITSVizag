<script>
	export let isActive = false;

	const stats = [
		{
			label: 'Years of Excellence',
			value: '18+',
			color: 'text-orange-600',
			borderColor: 'border-orange-500'
		},
		{
			label: 'Students Enrolled',
			value: '3500+',
			color: 'text-emerald-600',
			borderColor: 'border-emerald-500'
		},
		{
			label: 'Expert Faculty',
			value: '150+',
			color: 'text-indigo-900',
			borderColor: 'border-indigo-900'
		},
		{
			label: 'Top Recruiters',
			value: '500+',
			color: 'text-purple-600',
			borderColor: 'border-purple-500'
		}
	];
</script>

<section class="relative min-h-[75vh] flex items-center w-full overflow-hidden py-16 lg:py-24">
	<!-- Premium Background Layer -->
	<div class="absolute inset-0 z-0">
		<img
			src="/baba.png"
			alt="Campus Background"
			class="h-full w-full object-cover object-center opacity-40"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-br from-emerald-50/95 via-emerald-50/80 to-transparent backdrop-blur-[2px]"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-6 md:px-10 w-full">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
			<!-- LEFT SIDE: CONTENT -->
			<div
				class="flex flex-col space-y-6 transition-all duration-[1000ms] cubic-bezier(0.23, 1, 0.32, 1) {isActive
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-12 pointer-events-none'}"
			>
				<!-- Heading Group -->
				<div class="space-y-3">
					<h2 class="font-sans text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
						Admissions <br />
						<span class="text-emerald-600">Open!</span>
					</h2>
					<div class="inline-block rounded-lg bg-emerald-600/10 px-4 py-1.5">
						<p class="text-base font-bold text-emerald-900 sm:text-xl">Academic Year 2026–27</p>
					</div>
				</div>

				<!-- Info Bar -->
				<div
					class="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600 sm:text-base"
				>
					<div
						class="flex items-center gap-2 rounded-md bg-white/50 px-3 py-1.5 backdrop-blur-sm border border-white/40 shadow-sm"
					>
						<span class="text-emerald-600">Counselling Code:</span>
						<span class="premium-gold-text font-black tracking-widest">BABA</span>
					</div>
					<span class="hidden text-slate-300 sm:block">|</span>
					<div class="flex items-center gap-2">
						<span class="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-white"
							>NAAC 'A' Grade</span
						>
						<span class="text-slate-800">Autonomous</span>
					</div>
				</div>

				<!-- Education Pathway Card -->
				<div
					class="max-w-xl rounded-2xl border border-white/60 bg-white/40 p-5 shadow-xl shadow-emerald-900/5 backdrop-blur-md"
				>
					<p class="mb-3 text-[10px] font-bold tracking-widest text-emerald-800 uppercase">
						Complete Education Pathway
					</p>
					<div class="flex flex-wrap items-center gap-4">
						<div
							class="flex items-center gap-2 rounded-2xl bg-indigo-50/60 px-4 py-2 text-indigo-600 shadow-sm"
						>
							<span class="text-base font-bold">UG</span>
							<span class="text-sm font-normal text-indigo-400">(B.Tech)</span>
						</div>
						<svg
							class="h-4 w-4 text-slate-300"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<polyline points="9 18 15 12 9 6" />
						</svg>
						<div
							class="flex items-center gap-2 rounded-2xl bg-purple-50/60 px-4 py-2 text-purple-600 shadow-sm"
						>
							<span class="text-base font-bold">PG</span>
							<span class="text-sm font-normal text-purple-400">(M.Tech)</span>
						</div>
					</div>
					<!-- Key Branches Accent Bar -->
					<div
						class="mt-6 flex items-center gap-3 rounded-full border-l-4 border-orange-500 bg-slate-50/80 py-2.5 pl-4 pr-6 backdrop-blur-sm shadow-sm"
					>
						<svg class="h-4 w-4 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						<p class="text-[13px] leading-none text-slate-600">
							Key Branches: <span class="font-bold text-slate-900"
								>CSE, AIML, Cyber Security, ECE</span
							> & more.
						</p>
					</div>
				</div>

				<!-- Bottom Message & CTA -->
				<div class="space-y-4">
					<div class="flex items-center gap-3 text-emerald-800">
						<p class="text-xs font-semibold tracking-tight">
							Start your professional journey with BITS Vizag today.
						</p>
					</div>

					<a
						href="/application-form"
						class="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-2xl hover:shadow-emerald-900/30"
					>
						<span class="relative z-10">Explore your journey with BITS</span>
						<div
							class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"
						></div>
					</a>
				</div>
			</div>

			<!-- RIGHT SIDE: CARDS -->
			<div
				class="grid grid-cols-2 gap-4 sm:gap-6 transition-all duration-[1000ms] cubic-bezier(0.23, 1, 0.32, 1) delay-200 {isActive
					? 'opacity-100 translate-x-0'
					: 'opacity-0 translate-x-12 pointer-events-none'}"
			>
				{#each stats as stat, i}
					<div
						class="group relative flex flex-col items-center justify-center rounded-2xl border-t-[3px] bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl {stat.borderColor}"
					>
						<p class="text-4xl font-bold tracking-normal {stat.color}">
							{stat.value}
						</p>
						<p class="mt-3 text-[14px] font-bold tracking-normal text-slate-700">
							{stat.label}
						</p>
					</div>
				{/each}

				<!-- QR Card -->
				<div
					class="col-span-2 flex items-center gap-6 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-emerald-900/5 backdrop-blur-xl transition-all hover:bg-white hover:shadow-2xl"
				>
					<div class="hidden shrink-0 rounded-2xl bg-white p-2.5 shadow-inner sm:block">
						<div class="h-20 w-20 bg-slate-100 p-2">
							<!-- Placeholder QR -->
							<div
								class="flex h-full w-full items-center justify-center border-2 border-dashed border-slate-300 text-[10px] font-bold text-slate-400"
							>
								QR CODE
							</div>
						</div>
					</div>
					<div class="space-y-2">
						<p class="gold-label text-[10px] font-bold tracking-[0.05em] uppercase">
							Smart Application
						</p>
						<h3 class="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
							Apply Instantly <br />
							<span class="text-emerald-600 text-lg font-semibold">from Mobile</span>
						</h3>
						<div class="flex items-center gap-2 text-[10px] font-semibold text-slate-500">
							<!-- Premium iPhone Icon -->
							<svg
								class="h-4 w-4 text-slate-400"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
								<path d="M12 18h.01" />
								<path d="M11 5h2" />
							</svg>
							Scan to Start Application
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.premium-gold-text {
		color: #b45309;
		background: linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #b45309 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 900;
	}

	.gold-label {
		color: #d97706;
		background: linear-gradient(to right, #f59e0b, #a9624b, #d97706);
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
