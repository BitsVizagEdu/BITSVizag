<script>
	/** @type {'circular' | 'selection' | null} */
	let activeModal = null;
</script>

<section
	id="eleation-drive-highlight"
	class="eleation-shell relative w-full py-10 sm:py-16 text-white font-sans overflow-hidden border-b border-white/10"
>
	<!-- Engineering Simulation Subtle Backdrop (Existing Wireframe Car Background) -->
	<div class="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
		<img
			src="/bg/image.png"
			alt="CAE Simulation Wireframe"
			class="w-full h-full object-cover object-right md:object-center opacity-25 mix-blend-screen scale-105"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-[#020b1d] via-[#020b1d]/90 to-[#020b1d]/60"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-[#020b1d] via-transparent to-[#020b1d]/85"></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<!-- Section Header -->
		<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
			<div class="space-y-1">
				<div class="flex items-center gap-2">
					<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
					<span class="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
						Placement Milestone • Mechanical Engineering
					</span>
				</div>
				<h2 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
					ELEATION Virtual Campus Drive 2027
				</h2>
			</div>

			<!-- Verification Action Pills -->
			<div class="flex items-center flex-wrap gap-2.5 shrink-0">
				<a
					href="https://www.instagram.com/p/De9O-03hf2i/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold tracking-wide uppercase shadow-lg shadow-blue-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
				>
					<i class="fa-brands fa-instagram text-sm"></i>
					<span>Official Post</span>
				</a>

				<button
					type="button"
					on:click={() => (activeModal = 'selection')}
					class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-200 text-xs font-semibold backdrop-blur-md hover:border-cyan-400/40 transition-all hover:scale-[1.02]"
				>
					<i class="fa-solid fa-award text-amber-400"></i>
					<span>Selection Poster</span>
				</button>

				<button
					type="button"
					on:click={() => (activeModal = 'circular')}
					class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-200 text-xs font-semibold backdrop-blur-md hover:border-cyan-400/40 transition-all hover:scale-[1.02]"
				>
					<i class="fa-solid fa-file-lines text-sky-400"></i>
					<span>Drive Circular</span>
				</button>
			</div>
		</div>

		<!-- MAIN SHOWCASE: POSTER COMPOSITION (Inspired by reference mockup) -->
		<div class="mt-8 rounded-3xl bg-slate-900/70 border border-white/10 p-6 sm:p-10 relative overflow-hidden backdrop-blur-md shadow-2xl">
			<!-- TOP BAR: Brand Logo + Italic Script "Successfully" -->
			<div class="flex items-center justify-between relative z-20 mb-4 sm:mb-6">
				<!-- ELEATION Logo Badge -->
				<div class="bg-white px-4 py-2 rounded-xl shadow-md flex items-center justify-center">
					<img
						src="/eleation/eleation-logo.png"
						alt="ELEATION"
						class="h-5 sm:h-6 w-auto object-contain"
					/>
				</div>

				<!-- Elegant Serif Italic Script -->
				<div class="text-right">
					<span class="poster-script text-2xl sm:text-3xl lg:text-4xl text-white/90">
						Successfully
					</span>
				</div>
			</div>

			<!-- POSTER BODY: Stacked Giant PLACED Typography + Layered Candidate Frame -->
			<div class="relative min-h-[440px] sm:min-h-[500px] flex flex-col justify-center">
				<!-- GIANT STACKED "PLACED" WATERMARK TYPOGRAPHY (Layer behind candidate) -->
				<div class="absolute inset-0 flex flex-col justify-center items-end sm:items-center pointer-events-none select-none z-0 overflow-hidden pr-2 sm:pr-0">
					<div class="poster-watermark-col flex flex-col leading-[0.82] tracking-tighter text-right sm:text-center w-full">
						<span class="poster-watermark-row row-solid">PLACED</span>
						<span class="poster-watermark-row row-stroke-1">PLACED</span>
						<span class="poster-watermark-row row-stroke-2">PLACED</span>
						<span class="poster-watermark-row row-stroke-3">PLACED</span>
					</div>
				</div>

				<!-- FOREGROUND GRID: Candidate Framed Card + Editorial Detail Lockup -->
				<div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
					<!-- CANDIDATE PHOTO FRAME (Tilted white card with rounded inner window) -->
					<div class="lg:col-span-6 flex justify-center lg:justify-start">
						<div class="poster-card-wrapper relative group">
							<!-- Background Offset Card Accent -->
							<div class="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/30 to-blue-600/20 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>

							<!-- Layered White Poster Frame -->
							<div class="relative bg-white p-3 sm:p-4 rounded-[2.2rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform -rotate-1 sm:-rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[320px] sm:max-w-[350px]">
								<!-- Inner Rounded Photo Container -->
								<div class="rounded-[1.8rem] overflow-hidden bg-slate-900 border border-slate-200/60 aspect-[3.8/4.6] relative">
									<img
										src="/eleation/durga-vara-prasad.jpg"
										alt="Mr. Durga Vara Prasad Uddavolu"
										class="w-full h-full object-cover object-top filter brightness-[1.02]"
										loading="eager"
									/>
									<!-- Subtle Photo Gradient -->
									<div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
								</div>

								<!-- Corner Accent Detail on Frame -->
								<div class="pt-2 px-1 flex items-center justify-between text-[11px] font-bold text-slate-800">
									<span class="tracking-wider uppercase">ELEATION Drive 2027</span>
									<span class="text-emerald-600 font-extrabold flex items-center gap-1">
										<i class="fa-solid fa-circle-check"></i>
										<span>Verified</span>
									</span>
								</div>
							</div>
						</div>
					</div>

					<!-- EDITORIAL DETAIL LOCKUP (Directly matching reference image layout) -->
					<div class="lg:col-span-6 text-left space-y-5">
						<!-- Green Pill "Placed as a" -->
						<div>
							<span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md">
								Placed as a
							</span>
						</div>

						<!-- Big Bold Appointed Designation -->
						<div class="space-y-1">
							<h3 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.05]">
								CAE Project Engineer
							</h3>
							<h4 class="text-2xl sm:text-3xl font-extrabold text-cyan-300 tracking-tight">
								Mr. Durga Vara Prasad Uddavolu
							</h4>
							<p class="text-sm sm:text-base text-slate-300 font-medium">
								Final Year • B.Tech in Mechanical Engineering
							</p>
						</div>

						<!-- Core Verified Package Badges -->
						<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
							<div class="p-3.5 rounded-2xl bg-white/5 border border-white/10">
								<span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Package</span>
								<strong class="text-xl sm:text-2xl font-black text-white block mt-0.5">₹9.6 LPA</strong>
								<span class="text-[11px] text-slate-400">Fixed Corporate CTC</span>
							</div>

							<div class="p-3.5 rounded-2xl bg-white/5 border border-white/10">
								<span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">In-Hand</span>
								<strong class="text-xl sm:text-2xl font-black text-emerald-400 block mt-0.5">₹60,000<span class="text-xs text-slate-400 font-normal">/mo</span></strong>
								<span class="text-[11px] text-slate-400">₹7.2 LPA Net</span>
							</div>

							<div class="p-3.5 rounded-2xl bg-white/5 border border-white/10">
								<span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Workplace</span>
								<strong class="text-base sm:text-lg font-black text-white flex items-center gap-1.5 mt-1">
									<i class="fa-solid fa-house-laptop text-cyan-400 text-xs"></i>
									<span>100% Remote</span>
								</strong>
								<span class="text-[11px] text-slate-400">Laptop Provided</span>
							</div>
						</div>

						<!-- 3 Selection Rounds Cleared -->
						<div class="pt-2">
							<div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
								<i class="fa-solid fa-check-double text-emerald-400"></i>
								<span>Selection Stages Cleared</span>
							</div>
							<div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
								<div class="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
									<strong class="text-white block">Round 1: ANSYS</strong>
									<span class="text-[11px] text-slate-400">FEM & FEA Exam</span>
								</div>
								<div class="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
									<strong class="text-white block">Round 2: HyperWorks</strong>
									<span class="text-[11px] text-slate-400">HyperMesh Simulation</span>
								</div>
								<div class="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
									<strong class="text-white block">Round 3: Technical Viva</strong>
									<span class="text-[11px] text-slate-400">Core Mechanics Panel</span>
								</div>
							</div>
						</div>

						<!-- Official Verification URL Footnote -->
						<div class="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
							<span class="font-mono text-cyan-300">www.bitsvizag.com</span>
							<span>The Training and Placement Cell, BITS Vizag (A)</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- LIGHTBOX MODAL FOR VERIFICATION POSTERS -->
	{#if activeModal}
		<div
			class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
			on:click={() => (activeModal = null)}
			on:keydown={(e) => e.key === 'Escape' && (activeModal = null)}
			role="dialog"
			tabindex="-1"
		>
			<div
				class="relative max-w-2xl w-full bg-slate-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
				on:click|stopPropagation
				role="document"
			>
				<!-- Modal Header -->
				<div class="p-4 bg-slate-900 border-b border-white/10 flex items-center justify-between gap-3 shrink-0">
					<div class="inline-flex p-1 rounded-xl bg-black/40 text-xs">
						<button
							type="button"
							on:click={() => (activeModal = 'selection')}
							class="px-3.5 py-1.5 rounded-lg font-bold transition-all {activeModal === 'selection'
								? 'bg-blue-600 text-white'
								: 'text-slate-400 hover:text-white'}"
						>
							Selection Poster
						</button>
						<button
							type="button"
							on:click={() => (activeModal = 'circular')}
							class="px-3.5 py-1.5 rounded-lg font-bold transition-all {activeModal === 'circular'
								? 'bg-blue-600 text-white'
								: 'text-slate-400 hover:text-white'}"
						>
							Drive Circular
						</button>
					</div>

					<button
						type="button"
						class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors"
						on:click={() => (activeModal = null)}
						aria-label="Close modal"
					>
						✕
					</button>
				</div>

				<!-- Modal Image Body -->
				<div class="flex-1 overflow-auto bg-black p-3 flex items-center justify-center min-h-[300px]">
					{#if activeModal === 'selection'}
						<img
							src="/event-photos/JOB.png"
							alt="Durga Vara Prasad Uddavolu - Eleation Selection"
							class="max-h-[72vh] w-auto object-contain rounded-lg"
						/>
					{:else}
						<img
							src="/eleation/eleation-drive-poster.jpg"
							alt="ELEATION Virtual Campus Recruitment Drive Circular"
							class="max-h-[72vh] w-auto object-contain rounded-lg"
						/>
					{/if}
				</div>

				<!-- Modal Footer -->
				<div class="p-3.5 bg-slate-900 border-t border-white/10 flex items-center justify-between gap-2 text-xs shrink-0">
					<span class="text-slate-300 text-xs truncate">
						{activeModal === 'selection'
							? 'Mr. Durga Vara Prasad Uddavolu — ₹9.6 LPA Milestone'
							: 'ELEATION Virtual Campus Recruitment Drive'}
					</span>
					<a
						href="https://www.instagram.com/p/De9O-03hf2i/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs"
					>
						<i class="fa-brands fa-instagram text-xs"></i>
						<span>Instagram</span>
					</a>
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	.eleation-shell {
		background:
			radial-gradient(circle at top left, rgba(14, 116, 144, 0.15), transparent 35%),
			radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.12), transparent 35%),
			linear-gradient(135deg, #020b1d 0%, #071529 45%, #08192d 100%);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
	}

	.poster-script {
		font-family: 'Playfair Display', Georgia, Cambria, 'Times New Roman', serif;
		font-style: italic;
		font-weight: 400;
		letter-spacing: 0.02em;
	}

	.poster-watermark-col {
		font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
		font-weight: 900;
	}

	.poster-watermark-row {
		font-size: clamp(3.8rem, 9.5vw, 8rem);
		user-select: none;
		display: block;
	}

	.row-solid {
		color: rgba(147, 197, 253, 0.22);
	}

	.row-stroke-1 {
		-webkit-text-stroke: 1.5px rgba(147, 197, 253, 0.18);
		color: transparent;
	}

	.row-stroke-2 {
		-webkit-text-stroke: 1.5px rgba(147, 197, 253, 0.11);
		color: transparent;
	}

	.row-stroke-3 {
		-webkit-text-stroke: 1.5px rgba(147, 197, 253, 0.05);
		color: transparent;
	}
</style>
