<script>
	export let isActive = false;

	const ugPrograms = [
		{ name: 'B.Tech in Computer Science & Engg. (CSE)', intake: '180', icon: '💻' },
		{ name: 'B.Tech in CSE (AI & Machine Learning)', intake: '120', icon: '🤖' },
		{ name: 'B.Tech in CSE (Cyber Security)', intake: '60', icon: '🛡️' },
		{ name: 'B.Tech in Electronics & Comm. (ECE)', intake: '120', icon: '📡' },
		{ name: 'B.Tech in Electrical & Electronics (EEE)', intake: '60', icon: '⚡' },
		{ name: 'B.Tech in Mechanical Engineering', intake: '60', icon: '⚙️' }
	];

	const pgPrograms = [
		{ name: 'Master of Business Administration (MBA)', intake: '120', icon: '📊' },
		{ name: 'M.Tech in Computer Science & Engg.', intake: '18', icon: '🖥️' },
		{ name: 'M.Tech in Power Systems (EEE)', intake: '18', icon: '🔌' }
	];
</script>

<section
	class="relative h-[82vh] flex items-center justify-center w-full overflow-hidden bg-white"
>
	<!-- Premium Background Layer -->
	<div class="absolute inset-0 z-0 pointer-events-none">
		<!-- Full Screen Campus Background (Low Opacity) -->
		<img
			src="/maingall/img-13.jpg"
			alt="Campus Background"
			class="absolute inset-0 h-full w-full object-cover opacity-[0.04] grayscale"
		/>

		<!-- Large Transparent AI Image Overlay (Accent) -->
		<img
			src="/CS-Banners/CS-images/AI-1.png"
			alt="Background Accent"
			class="absolute right-[-5%] top-1/2 -translate-y-1/2 h-[100%] w-auto object-contain opacity-[0.08] grayscale blur-[0.5px]"
		/>

		<!-- Soft Gradient Overlay -->
		<div class="absolute inset-0 bg-gradient-to-tr from-rose-50/60 via-white/40 to-white"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-6xl px-4 md:px-10 w-full h-full py-6">
		<div
			class="flex flex-col gap-8 transition-all duration-[1000ms] cubic-bezier(0.23, 1, 0.32, 1) {isActive
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-12 pointer-events-none'} h-full justify-center"
		>
			<!-- Top Header -->
			<div class="flex flex-col items-center text-center space-y-2 pt-2">
				<div class="inline-block rounded-full bg-rose-600/10 px-6 py-1.5 border border-rose-200">
					<p class="text-xs font-bold text-rose-800 tracking-widest uppercase">
						Courses Offered at BITS Vizag
					</p>
				</div>
				<h2 class="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
					Academic <span class="text-rose-600">Excellence</span>
				</h2>
			</div>

			<!-- Main Content Grid -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 items-center h-full">
				<!-- LEFT: UG PROGRAMS -->
					<div class="space-y-6">
					<div class="flex items-center gap-3 mb-2 border-b border-rose-100 pb-3">
						<span class="text-rose-600 text-2xl">🎓</span>
						<h3 class="text-sm font-black tracking-[0.2em] text-rose-900 uppercase">
							Undergraduate Programs
						</h3>
					</div>
					<div class="space-y-2">
						{#each ugPrograms as program}
							<div
								class="group flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300"
							>
								<div class="flex items-center gap-3">
									<span
										class="w-8 h-8 rounded bg-rose-50 flex items-center justify-center text-base shadow-sm group-hover:scale-110 transition-transform"
									>
										{program.icon}
									</span>
									<span class="text-sm font-bold text-slate-700 tracking-tight">{program.name}</span
									>
								</div>
								<div class="flex items-center gap-2">
									<span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest"
										>Intake</span
									>
									<span class="text-base font-black text-rose-600 w-10 text-right"
										>{program.intake}</span
									>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- RIGHT: PG PROGRAMS -->
					<div class="space-y-6">
					<div class="flex items-center gap-3 mb-2 border-b border-rose-100 pb-3">
						<span class="text-rose-600 text-2xl">🏛️</span>
						<h3 class="text-sm font-black tracking-[0.2em] text-rose-900 uppercase">
							Postgraduate Programs
						</h3>
					</div>
					<div class="space-y-2">
						{#each pgPrograms as program}
							<div
								class="group flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300"
							>
								<div class="flex items-center gap-3">
									<span
										class="w-8 h-8 rounded bg-rose-50 flex items-center justify-center text-base shadow-sm group-hover:scale-110 transition-transform"
									>
										{program.icon}
									</span>
									<span class="text-sm font-bold text-slate-700 tracking-tight">{program.name}</span
									>
								</div>
								<div class="flex items-center gap-2">
									<span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest"
										>Intake</span
									>
									<span class="text-base font-black text-rose-600 w-10 text-right"
										>{program.intake}</span
									>
								</div>
							</div>
						{/each}
					</div>

					<!-- Bottom Accents -->
					<div class="pt-6 grid grid-cols-1 gap-4">
						<div
							class="flex items-center justify-between p-3.5 rounded-xl bg-rose-50 border border-rose-100 shadow-sm"
						>
							<div class="flex items-center gap-3">
								<span class="text-xl">🎓</span>
								<span class="text-xs font-bold text-rose-900 uppercase tracking-widest"
									>Counselling Code:</span
								>
							</div>
							<span class="text-2xl font-black text-rose-600 tracking-widest uppercase">BABA</span>
						</div>
						<div
							class="flex items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200"
						>
							<span class="text-[11px] font-bold text-slate-500 tracking-normal text-center"
								>UGC Autonomous • NAAC 'A' Grade • JNTU-GV Affiliated</span
							>
						</div>
					</div>
				</div>
			</div>

			<!-- Explore Button -->
			<div class="flex justify-center pt-8">
				<a
					href="/department/Department%20of%20CSE"
					class="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-rose-600 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-900/30"
				>
					<span class="relative z-10 flex items-center gap-2">
						Explore Our Departments
						<svg
							class="w-5 h-5 group-hover:translate-x-1 transition-transform"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</span>
					<div
						class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"
					></div>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}
</style>
