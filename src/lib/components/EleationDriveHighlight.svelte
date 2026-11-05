<script>
	let activeModalPoster = null; // 'circular' | 'selection' | null
	let activeStage = 1; // 0, 1, 2, 3

	const hiringSteps = [
		{
			num: '01',
			name: 'Eligibility & Registration',
			focus: 'Final Year Mechanical & Core Engineering students',
			summary: 'Initial screening and profile validation for the core engineering drive.'
		},
		{
			num: '02',
			name: 'ANSYS Technical Test',
			focus: 'FEM, FEA & Computational Simulation',
			summary: 'Rigorous computational examination assessing stress analysis and structural fundamentals.'
		},
		{
			num: '03',
			name: 'HyperWorks Technical Test',
			focus: 'HyperMesh & OptiStruct Optimization',
			summary: 'Advanced engineering test on meshing algorithms and simulation workflows.'
		},
		{
			num: '04',
			name: 'Technical Interview & Selection',
			focus: 'One-on-One Panel Evaluation',
			summary: 'Comprehensive viva on core mechanics, leading to direct appointment as CAE Project Engineer.'
		}
	];
</script>

<section id="eleation-drive-highlight" class="relative w-full py-10 sm:py-14 text-white font-sans overflow-hidden border-b border-white/10 bg-slate-950">
	<!-- 3D CAE WIREFRAME SIMULATION CAR BACKGROUND -->
	<div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
		<img
			src="/bg/image.png"
			alt="CAE Simulation Wireframe"
			class="w-full h-full object-cover object-right md:object-center opacity-30 mix-blend-screen scale-105"
		/>
		<!-- Multi-stop Dark Vignette Gradient for Clean Text Legibility -->
		<div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70"></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<!-- Simple & Elegant Header -->
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
			<div class="space-y-1.5 max-w-2xl">
				<div class="flex items-center gap-2">
					<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
					<span class="text-xs font-bold uppercase tracking-widest text-emerald-400">
						Campus Placement Milestone • BITS Vizag (A)
					</span>
				</div>

				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight flex items-baseline flex-wrap gap-2.5">
					<span>ELEATION Campus Recruitment</span>
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 font-extrabold text-xl sm:text-2xl lg:text-3xl">
						₹9.6 LPA
					</span>
				</h2>

				<p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
					Hearty Congratulations to <strong class="text-white font-semibold">Mr. Durga Vara Prasad Uddavolu</strong> (Final Year – Mechanical Engineering) on securing appointment as <strong class="text-sky-300 font-semibold">CAE Project Engineer</strong> at <strong class="text-white font-semibold">ELEATION</strong>.
				</p>
			</div>

			<!-- Compact Action Pills -->
			<div class="flex items-center flex-wrap gap-2.5 shrink-0">
				<a
					href="https://www.instagram.com/p/De9O-03hf2i/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-bold shadow-lg shadow-rose-950/40 hover:scale-105 active:scale-95 transition-all"
				>
					<i class="fa-brands fa-instagram text-sm"></i>
					<span>Official Post</span>
				</a>

				<button
					type="button"
					on:click={() => (activeModalPoster = 'selection')}
					class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold backdrop-blur-md transition-all hover:scale-105"
				>
					<i class="fa-solid fa-trophy text-amber-400"></i>
					<span>Selection Poster</span>
				</button>

				<button
					type="button"
					on:click={() => (activeModalPoster = 'circular')}
					class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold backdrop-blur-md transition-all hover:scale-105"
				>
					<i class="fa-solid fa-file-lines text-sky-400"></i>
					<span>Drive Circular</span>
				</button>
			</div>
		</div>

		<!-- Main Showcase: Open Fluid Layout with Large Photo -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-8 items-center">
			
			<!-- PROMINENT LARGE CANDIDATE PORTRAIT (4 cols) -->
			<div class="lg:col-span-4 flex justify-center lg:justify-start">
				<div class="relative group w-full max-w-[320px] sm:max-w-[340px]">
					<!-- Soft Ambient Glow Rim Behind Photo -->
					<div class="absolute -inset-1.5 bg-gradient-to-tr from-sky-500/40 via-cyan-400/20 to-emerald-500/30 rounded-[2.2rem] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

					<!-- Large Portrait Card -->
					<div class="relative rounded-[2rem] overflow-hidden bg-slate-900 border border-white/15 shadow-2xl">
						<!-- Floating Company Logo Badge -->
						<div class="absolute top-3.5 left-3.5 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
							<img
								src="/eleation/eleation-logo.png"
								alt="ELEATION"
								class="h-4 sm:h-5 w-auto object-contain"
							/>
						</div>

						<!-- Verified Checkmark Pill -->
						<div class="absolute top-3.5 right-3.5 z-20 bg-emerald-500 text-slate-950 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1">
							<i class="fa-solid fa-check"></i>
							<span>Selected</span>
						</div>

						<!-- Large High-Res Studio Portrait Image -->
						<div class="w-full aspect-[3/4] relative overflow-hidden bg-slate-950">
							<img
								src="/eleation/durga-vara-prasad.jpg"
								alt="Mr. Durga Vara Prasad Uddavolu"
								class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-[1.02] contrast-[1.03]"
							/>
							<!-- Subtle Bottom Gradient for Overlay Readability -->
							<div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
						</div>

						<!-- Integrated Name & Degree Overlay -->
						<div class="absolute bottom-0 inset-x-0 p-4 text-left z-20">
							<span class="text-[10px] font-bold uppercase tracking-widest text-sky-400 block mb-0.5">
								Star Placement
							</span>
							<h3 class="text-lg sm:text-xl font-black text-white leading-tight">
								Mr. Durga Vara Prasad Uddavolu
							</h3>
							<p class="text-xs text-slate-300 font-medium mt-0.5">
								Final Year • B.Tech Mechanical Engineering
							</p>
							<p class="text-[11px] text-sky-300 font-semibold mt-1">
								Position: CAE Project Engineer
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- RELEVANT CONTENT & HIGHLIGHTS (8 cols - Open, Non-Boxy Design) -->
			<div class="lg:col-span-8 space-y-6 text-left">
				<!-- Clean Key Metrics (Pure Bold Numbers, No Nested Boxes) -->
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-white/10">
					<div class="space-y-1">
						<span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Annual Compensation</span>
						<strong class="text-3xl sm:text-4xl font-black text-white tracking-tight">
							₹9.6 <span class="text-sky-400 text-lg sm:text-xl font-bold">LPA</span>
						</strong>
						<span class="text-xs text-slate-400 block">Fixed Corporate CTC</span>
					</div>

					<div class="space-y-1">
						<span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Monthly Take-Home</span>
						<strong class="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
							₹60,000<span class="text-xs text-slate-400 font-normal"> / mo</span>
						</strong>
						<span class="text-xs text-slate-400 block">₹7.2 LPA Net In-Hand</span>
					</div>

					<div class="space-y-1">
						<span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Workplace Model</span>
						<strong class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2 mt-1">
							<i class="fa-solid fa-house-laptop text-sky-400 text-base"></i>
							<span>100% Remote</span>
						</strong>
						<span class="text-xs text-slate-400 block">Official Laptop & Hardware Provided</span>
					</div>
				</div>

				<!-- Streamlined Selection Journey (Interactive, Clean & Fluid) -->
				<div class="space-y-3">
					<div class="flex items-center justify-between">
						<span class="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
							<i class="fa-solid fa-list-check text-sky-400"></i>
							<span>Selection Process Overview</span>
						</span>
						<span class="text-[11px] text-sky-300 font-medium">Click step to view focus</span>
					</div>

					<!-- Fluid Connected Steps -->
					<div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
						{#each hiringSteps as step, i}
							<button
								type="button"
								on:click={() => (activeStage = i)}
								class="text-left p-3 rounded-2xl transition-all duration-300 flex flex-col justify-between {activeStage === i
									? 'bg-sky-500/20 border border-sky-400/80 shadow-lg shadow-sky-950/50'
									: 'bg-white/5 hover:bg-white/10 border border-white/10'}"
							>
								<div class="flex items-center justify-between w-full mb-1">
									<span class="text-[10px] font-black font-mono {activeStage === i ? 'text-sky-300' : 'text-slate-400'}">
										Step {step.num}
									</span>
									<span class="w-1.5 h-1.5 rounded-full {activeStage === i ? 'bg-sky-400 animate-ping' : 'bg-slate-600'}"></span>
								</div>
								<div>
									<strong class="text-xs font-bold block leading-snug {activeStage === i ? 'text-white' : 'text-slate-300'}">
										{step.name}
									</strong>
									<span class="text-[11px] text-slate-400 block truncate mt-0.5">
										{step.focus}
									</span>
								</div>
							</button>
						{/each}
					</div>

					<!-- Active Step Summary Line -->
					<div class="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-slate-300">
						<i class="fa-solid fa-circle-info text-sky-400 text-sm mt-0.5 shrink-0"></i>
						<div>
							<strong class="text-white font-semibold">{hiringSteps[activeStage].name}:</strong>
							<span class="ml-1 text-slate-300">{hiringSteps[activeStage].summary}</span>
						</div>
					</div>
				</div>

				<!-- Tools & Institutional Credits -->
				<div class="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
					<div class="flex items-center gap-1.5 flex-wrap">
						<span class="font-bold text-slate-300 mr-1">CAE Toolchain:</span>
						{#each ['ANSYS', 'HyperWorks', 'HyperMesh', 'OptiStruct', 'CREO', 'FEA'] as tool}
							<span class="px-2.5 py-0.5 rounded-full bg-white/5 text-sky-300 text-[11px] font-mono">
								{tool}
							</span>
						{/each}
					</div>

					<a
						href="/placements"
						class="text-sky-400 hover:text-white font-semibold inline-flex items-center gap-1 transition-colors shrink-0"
					>
						<span>Explore Training & Placement Cell</span>
						<i class="fa-solid fa-arrow-right text-[10px]"></i>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- FULLSCREEN POSTER MODAL -->
	{#if activeModalPoster}
		<div
			class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
			on:click={() => (activeModalPoster = null)}
			on:keydown={(e) => e.key === 'Escape' && (activeModalPoster = null)}
			role="dialog"
			tabindex="-1"
		>
			<div
				class="relative max-w-2xl w-full bg-slate-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
				on:click|stopPropagation
				role="document"
			>
				<!-- Modal Header -->
				<div class="p-4 bg-slate-900 border-b border-white/10 flex items-center justify-between gap-3 shrink-0">
					<div class="inline-flex p-1 rounded-full bg-black/40 text-xs">
						<button
							type="button"
							on:click={() => (activeModalPoster = 'selection')}
							class="px-4 py-1.5 rounded-full font-bold transition-all {activeModalPoster === 'selection' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'}"
						>
							Selection Poster
						</button>
						<button
							type="button"
							on:click={() => (activeModalPoster = 'circular')}
							class="px-4 py-1.5 rounded-full font-bold transition-all {activeModalPoster === 'circular' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'}"
						>
							Drive Circular
						</button>
					</div>

					<button
						type="button"
						class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors"
						on:click={() => (activeModalPoster = null)}
						aria-label="Close modal"
					>
						✕
					</button>
				</div>

				<!-- Modal Image Body -->
				<div class="flex-1 overflow-auto bg-black p-3 flex items-center justify-center min-h-[300px]">
					{#if activeModalPoster === 'selection'}
						<img
							src="/event-photos/JOB.png"
							alt="Durga Vara Prasad Uddavolu - Eleation Selection"
							class="max-h-[72vh] w-auto object-contain rounded-xl"
						/>
					{:else}
						<img
							src="/eleation/eleation-drive-poster.jpg"
							alt="ELEATION Virtual Campus Recruitment Drive Circular"
							class="max-h-[72vh] w-auto object-contain rounded-xl"
						/>
					{/if}
				</div>

				<!-- Modal Footer -->
				<div class="p-3.5 bg-slate-900 border-t border-white/10 flex items-center justify-between gap-2 text-xs shrink-0">
					<span class="text-slate-300 text-xs truncate">
						{activeModalPoster === 'selection' ? 'Mr. Durga Vara Prasad Uddavolu — ₹9.6 LPA Milestone' : 'ELEATION Virtual Campus Recruitment Drive'}
					</span>
					<a
						href="https://www.instagram.com/p/De9O-03hf2i/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
						target="_blank"
						rel="noopener noreferrer"
						class="px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-xs"
					>
						Instagram
					</a>
				</div>
			</div>
		</div>
	{/if}
</section>
