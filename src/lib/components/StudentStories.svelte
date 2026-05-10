<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const stories = [
		{
			name: 'Manasa Reddy',
			program: 'B.Tech Data Science',
			batch: '2022-2026',
			placement: 'Cognizant',
			initial: 'M',
			color: 'bg-blue-100 text-blue-600',
			quote:
				'The specialized Data Science labs equipped with high-end backend GPUs gave me pure, hands-on architectural training that instantly put my technical skills years ahead of my peers.'
		},
		{
			name: 'Ajay Kumar T.',
			program: 'M.Tech CSE',
			batch: '2022-2024',
			placement: 'TCS Digital',
			initial: 'A',
			color: 'bg-amber-100 text-amber-600',
			quote:
				'The M.Tech program at BITS offers an incredibly deep dive into advanced algorithms and data pipelines. The research facilities and publication support allowed me to present my paper at an international conference.'
		},
		{
			name: 'Priya D.',
			program: 'B.Tech AI & ML',
			batch: '2022-2026',
			placement: 'Tech Mahindra',
			initial: 'P',
			color: 'bg-emerald-100 text-emerald-600',
			quote:
				'The Artificial Intelligence hubs in our college are phenomenal. I was fully funded and mentored to publish my first major research paper thanks to the dedicated R&D wing!'
		},
		{
			name: 'Rahul Verma',
			program: 'B.Tech ECE',
			batch: '2021-2025',
			placement: 'Infosys',
			initial: 'R',
			color: 'bg-indigo-100 text-indigo-600',
			quote:
				'The electronics curriculum is perfectly balanced between theory and industry-grade VLSI design. The faculty encouraged me to push beyond textbooks and build real-world IoT solutions.'
		},
		{
			name: 'Suresh Raina',
			program: 'B.Tech MECH',
			batch: '2020-2024',
			placement: 'L&T',
			initial: 'S',
			color: 'bg-orange-100 text-orange-600',
			quote:
				'Our mechanical labs and CNC centers are at par with industrial standards. The hands-on training on modern machinery made my transition to L&T seamless and confident.'
		},
		{
			name: 'Neha Sharma',
			program: 'B.Tech EEE',
			batch: '2019-2023',
			placement: 'NTPC',
			initial: 'N',
			color: 'bg-rose-100 text-rose-600',
			quote:
				'The electrical engineering department provided me with strong fundamental knowledge and hands-on experience in power systems, which helped me clear the NTPC exams with flying colors.'
		}
	];

	// Doubling the stories for a seamless infinite marquee effect
	const marqueeStories = [...stories, ...stories];
</script>

<section class="py-12 md:py-24 bg-[#f8faff] overflow-hidden border-t border-slate-100">
	<div class="w-full">
		<!-- Header -->
		<div class="text-center mb-10 md:mb-16 px-6" data-aos="fade-up">
			<div
				class="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4 md:mb-6"
			>
				<i class="fa-solid fa-star text-amber-600 text-[10px]"></i>
				<span class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] text-amber-600"
					>Success Stories</span
				>
			</div>

			<h2
				class="text-3xl md:text-5xl font-semibold tracking-normal text-[#1a233e] mb-4 md:mb-6"
			>
				Real Stories, <span
					class="relative inline-block"
				>
					<span
						class="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 bg-clip-text text-transparent blur-lg opacity-60 animate-shimmer-glow"
					>Real Success</span>
					<span
						class="relative bg-gradient-to-z from-amber-400 via-amber-500 to-amber-300 bg-clip-text text-transparent animate-shimmer-text"
					>Real Success</span>
				</span>
			</h2>

			<p class="max-w-3xl mx-auto text-slate-500 font-medium text-xs md:text-lg leading-relaxed">
				Discover how BITS students are transforming their potential into professional excellence.
			</p>
		</div>

		<!-- 🏎️ SLOWLY MOVING MARQUEE (Moves Right) -->
		<div class="relative flex overflow-hidden group">
			<div class="flex animate-marquee-reverse hover:pause gap-5 md:gap-8 py-4">
				{#each marqueeStories as story, i}
					<div
						class="flex-shrink-0 w-[280px] md:w-[450px] bg-white rounded-[1.75rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-100 relative transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
					>
						<!-- Quote Icon -->
						<div
							class="absolute top-10 right-10 opacity-[0.03] transform scale-[4] pointer-events-none transition-opacity"
						>
							<i class="fa-solid fa-quote-right text-[#1a233e]"></i>
						</div>

						<!-- Stars -->
						<div class="flex gap-1 mb-6">
							{#each Array(5) as _}
								<i class="fa-solid fa-star text-amber-400 text-[10px]"></i>
							{/each}
						</div>

						<!-- Quote -->
						<blockquote
							class="text-slate-600 italic leading-relaxed mb-6 md:mb-8 text-[13px] md:text-[15px] relative z-10 line-clamp-3 md:line-clamp-4"
						>
							"{story.quote}"
						</blockquote>

						<!-- Student Info -->
						<div class="flex items-center gap-3 md:gap-4 border-t border-slate-50 pt-6 md:pt-8">
							<div
								class="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-base md:text-lg flex-shrink-0 {story.color}"
							>
								{story.initial}
							</div>
							<div class="flex flex-col min-w-0">
								<h4 class="font-bold text-[#1a233e] truncate">{story.name}</h4>
								<p class="text-[10px] text-slate-400 font-medium truncate">
									{story.program} ({story.batch})
								</p>

								<div
									class="mt-2 inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-100 w-fit"
								>
									<i class="fa-solid fa-briefcase text-emerald-600 text-[10px]"></i>
									<span class="text-[8px] font-black uppercase tracking-wider text-emerald-700"
										>Placed @ {story.placement}</span
									>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* 🏎️ Infinite Marquee Animation (Reverse for moving RIGHT) */
	@keyframes marquee-reverse {
		0% {
			transform: translateX(-50%);
		}
		100% {
			transform: translateX(0%);
		}
	}

	.animate-marquee-reverse {
		display: flex;
		width: max-content;
		animation: marquee-reverse 60s linear infinite;
	}

	.hover\:pause:hover {
		animation-play-state: paused;
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
		font-weight: 700;
		letter-spacing: -0.02em;
		background-image: linear-gradient(
			90deg,
			#fbbf24 0%,
			#f59e0b 25%,
			#d97706 50%,
			#f59e0b 75%,
			#fbbf24 100%
		);
	}

	.animate-shimmer-glow {
		background-size: 200% auto;
		animation: shimmer-glow 3s ease-in-out infinite;
		background-image: linear-gradient(
			90deg,
			#fbbf24 0%,
			#f59e0b 25%,
			#d97706 50%,
			#f59e0b 75%,
			#fbbf24 100%
		);
	}

	@media (max-width: 768px) {
		.animate-marquee-reverse {
			animation-duration: 40s;
		}

		.animate-shimmer-text {
			animation: shimmer-text 2.5s ease-in-out infinite;
		}

		.animate-shimmer-glow {
			animation: shimmer-glow 2.5s ease-in-out infinite;
		}
	}
</style>
