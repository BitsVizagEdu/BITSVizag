<script>
	const stories = [
		{
			name: 'Priyanka R',
			program: 'B.Tech ECE',
			batch: '2022-2026',
			placement: 'Cognizant',
			initial: 'P',
			theme: 'blue',
			quote:
				'The specialized Data Science labs equipped with high-end backend GPUs gave me pure, hands-on architectural training that instantly put my technical skills years ahead of my peers.'
		},
		{
			name: 'Ajay Kumar T.',
			program: 'M.Tech CSE',
			batch: '2022-2024',
			placement: 'TCS Digital',
			initial: 'A',
			theme: 'amber',
			quote:
				'The M.Tech program at BITS offers an incredibly deep dive into advanced algorithms and data pipelines. The research facilities and publication support allowed me to present my paper at an international conference.'
		},
		{
			name: 'Priya D.',
			program: 'B.Tech CSE',
			batch: '2022-2026',
			placement: 'Tech Mahindra',
			initial: 'P',
			theme: 'emerald',
			quote:
				'The Artificial Intelligence hubs in our college are phenomenal. I was fully funded and mentored to publish my first major research paper thanks to the dedicated R&D wing!'
		},
		{
			name: 'Rahul Vinni',
			program: 'B.Tech ECE',
			batch: '2021-2025',
			placement: 'Infosys',
			initial: 'R',
			theme: 'indigo',
			quote:
				'The electronics curriculum is perfectly balanced between theory and industry-grade VLSI design. The faculty encouraged me to push beyond textbooks and build real-world IoT solutions.'
		},
		{
			name: 'Kalyan G',
			program: 'B.Tech MECH',
			batch: '2020-2024',
			placement: 'L&T',
			initial: 'K',
			theme: 'orange',
			quote:
				'Our mechanical labs and CNC centers are at par with industrial standards. The hands-on training on modern machinery made my transition to L&T seamless and confident.'
		},
		{
			name: 'Chandrika C',
			program: 'B.Tech EEE',
			batch: '2019-2023',
			placement: 'NTPC',
			initial: 'C',
			theme: 'rose',
			quote:
				'The electrical engineering department provided me with strong fundamental knowledge and hands-on experience in power systems, which helped me clear the NTPC exams with flying colors.'
		}
	];

	const themeColors = {
		blue: {
			border: 'hover:border-blue-400/80',
			accentBg: 'bg-blue-600',
			avatarBg: 'bg-blue-50 text-blue-600 border-blue-100',
			badge: 'bg-blue-50 border-blue-100 text-blue-700'
		},
		amber: {
			border: 'hover:border-amber-400/80',
			accentBg: 'bg-amber-500',
			avatarBg: 'bg-amber-50 text-amber-600 border-amber-100',
			badge: 'bg-amber-50 border-amber-100 text-amber-700'
		},
		emerald: {
			border: 'hover:border-emerald-400/80',
			accentBg: 'bg-emerald-600',
			avatarBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
			badge: 'bg-emerald-50 border-emerald-100 text-emerald-700'
		},
		indigo: {
			border: 'hover:border-indigo-400/80',
			accentBg: 'bg-indigo-600',
			avatarBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
			badge: 'bg-indigo-50 border-indigo-100 text-indigo-700'
		},
		orange: {
			border: 'hover:border-orange-400/80',
			accentBg: 'bg-orange-600',
			avatarBg: 'bg-orange-50 text-orange-600 border-orange-100',
			badge: 'bg-orange-50 border-orange-100 text-orange-700'
		},
		rose: {
			border: 'hover:border-rose-400/80',
			accentBg: 'bg-rose-600',
			avatarBg: 'bg-rose-50 text-rose-600 border-rose-100',
			badge: 'bg-rose-50 border-rose-100 text-rose-700'
		}
	};
</script>

<section class="py-16 md:py-24 bg-gradient-to-b from-[#fbfdff] via-[#f5f8ff] to-[#f8faff] overflow-hidden border-t border-slate-100">
	<div class="max-w-6xl mx-auto px-4 sm:px-6">
		<!-- Header -->
		<div class="text-center mb-12 md:mb-16 px-6" data-aos="fade-up">
			<div
				class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-4"
			>
				<i class="fa-solid fa-graduation-cap text-indigo-600 text-[10px]"></i>
				<span class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] text-indigo-600"
					>Success Stories</span
				>
			</div>

			<h2 class="text-3xl md:text-5xl font-semibold tracking-normal text-[#1a233e] mb-4">
				Real Stories, <span class="relative inline-block">
					<span
						class="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-lg opacity-60 animate-shimmer-glow"
						>Real Success</span
					>
					<span
						class="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer-text"
						>Real Success</span
					>
				</span>
			</h2>

			<p class="max-w-2xl mx-auto text-slate-500 font-medium text-xs md:text-base leading-relaxed">
				Discover how BITS students are transforming their potential into professional excellence.
			</p>
		</div>

		<!-- 🎴 Responsive 2-in-one Row Grid Layout -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each stories as story, i}
				<div
					class="premium-card bg-white rounded-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] {themeColors[story.theme].border} overflow-hidden flex flex-col justify-between"
					data-aos="fade-up"
					data-aos-delay={i * 50}
				>
					<!-- Theme color bar at the top of the card -->
					<div class="h-1.5 w-full {themeColors[story.theme].accentBg}"></div>

					<div class="p-6 md:p-8 flex flex-col justify-between flex-1">
						<div>
							<!-- Student Profile Header -->
							<div class="flex items-center justify-between gap-4 mb-6">
								<div class="flex items-center gap-4">
									<!-- Avatar Container -->
									<div class="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center font-black text-sm md:text-base border {themeColors[story.theme].avatarBg} shadow-sm">
										{story.initial}
									</div>
									<!-- Name & Batch -->
									<div class="flex flex-col min-w-0">
										<h4 class="font-bold text-slate-800 text-sm md:text-base tracking-tight truncate">{story.name}</h4>
										<p class="text-[10px] md:text-xs text-slate-400 font-semibold truncate mt-0.5">
											{story.program} &bull; {story.batch}
										</p>
									</div>
								</div>

								<!-- Placed Badge -->
								<div
									class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-wider {themeColors[story.theme].badge} shadow-sm"
								>
									<i class="fa-solid fa-briefcase text-[10px]"></i>
									<span>{story.placement}</span>
								</div>
							</div>

							<!-- Quote Text with giant decorative quote mark -->
							<div class="relative pl-6">
								<i class="fa-solid fa-quote-left absolute left-0 top-1 text-slate-200/80 text-xl"></i>
								<p class="text-slate-600 leading-relaxed font-medium text-xs md:text-[14px] italic">
									"{story.quote}"
								</p>
							</div>
						</div>

						<!-- Rating Star Line -->
						<div class="flex gap-0.5 mt-6 pt-4 border-t border-slate-50">
							{#each Array(5) as _}
								<i class="fa-solid fa-star text-amber-400 text-[10px]"></i>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Premium card subtle animations */
	.premium-card {
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.01);
		will-change: transform, box-shadow, border-color;
	}

	/* Premium Animated Gradient Text */
	@keyframes shimmer-text {
		0% {
			background-position: 0% center;
		}
		50% {
			background-position: 100% center;
		}
		100% {
			background-position: 0% center;
		}
	}

	@keyframes shimmer-glow {
		0% {
			background-position: 0% center;
			filter: blur(12px) brightness(0.8);
		}
		50% {
			background-position: 100% center;
			filter: blur(8px) brightness(1.2);
		}
		100% {
			background-position: 0% center;
			filter: blur(12px) brightness(0.8);
		}
	}

	.animate-shimmer-text {
		background-size: 200% auto;
		animation: shimmer-text 3s ease-in-out infinite;
		font-weight: 800;
		letter-spacing: -0.02em;
		background-image: linear-gradient(
			90deg,
			#6366f1 0%,
			#a855f7 25%,
			#ec4899 50%,
			#a855f7 75%,
			#6366f1 100%
		);
	}

	.animate-shimmer-glow {
		background-size: 200% auto;
		animation: shimmer-glow 3s ease-in-out infinite;
		background-image: linear-gradient(
			90deg,
			#6366f1 0%,
			#a855f7 25%,
			#ec4899 50%,
			#a855f7 75%,
			#6366f1 100%
		);
	}

	@media (max-width: 768px) {
		.animate-shimmer-text {
			animation: shimmer-text 2.5s ease-in-out infinite;
		}

		.animate-shimmer-glow {
			animation: shimmer-glow 2.5s ease-in-out infinite;
		}
	}
</style>
