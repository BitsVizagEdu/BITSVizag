<script>
	const stories = [
		{
			name: 'Rahul Vinni',
			program: 'B.Tech ECE',
			placement: 'Infosys',
			initial: 'R',
			theme: 'indigo',
			quote: 'Getting placed in Infosys gave the perfect foundation for my professional journey.'
		},
		{
			name: 'Priyanka R',
			program: 'B.Tech CSE',
			placement: 'Cognizant',
			initial: 'P',
			theme: 'blue',
			quote: 'The faculty is incredibly supportive and works in complete unity with the students.'
		},
		{
			name: 'Kalyan G',
			program: 'B.Tech ECE',
			placement: 'L&T',
			initial: 'K',
			theme: 'orange',
			quote: 'The campus environment is peaceful and the infrastructure facilities are the best.'
		},
		{
			name: 'Priya D.',
			program: 'B.Tech CSE',
			placement: 'Tech Mahindra',
			initial: 'P',
			theme: 'emerald',
			quote:
				'The quality of teaching and study environment here is exceptional and exactly as expected.'
		},
		{
			name: 'Ajay Kumar T.',
			program: 'M.Tech CSE',
			placement: 'TCS Digital',
			initial: 'A',
			theme: 'amber',
			quote:
				'Modern lab facilities and experienced teachers made my learning experience highly rewarding.'
		},
		{
			name: 'Chandrika C',
			program: 'B.Tech EEE',
			placement: 'NTPC',
			initial: 'C',
			theme: 'rose',
			quote: 'Excellent classroom instructions and placement guidance helped launch my career.'
		}
	];

	const themeColors = {
		blue: {
			avatarBg: 'bg-blue-50 text-blue-600 border-blue-100',
			badgeBg: 'bg-blue-50/70 border-blue-100 text-blue-700'
		},
		amber: {
			avatarBg: 'bg-amber-50 text-amber-600 border-amber-100',
			badgeBg: 'bg-amber-50/70 border-amber-100 text-amber-700'
		},
		emerald: {
			avatarBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
			badgeBg: 'bg-emerald-50/70 border-emerald-100 text-emerald-700'
		},
		indigo: {
			avatarBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
			badgeBg: 'bg-indigo-50/70 border-indigo-100 text-indigo-700'
		},
		orange: {
			avatarBg: 'bg-orange-50 text-orange-600 border-orange-100',
			badgeBg: 'bg-orange-50/70 border-orange-100 text-orange-700'
		},
		rose: {
			avatarBg: 'bg-rose-50 text-rose-600 border-rose-100',
			badgeBg: 'bg-rose-50/70 border-rose-100 text-rose-700'
		}
	};
</script>

<section
	class="py-8 bg-gradient-to-b from-[#fbfdff] via-[#f5f8ff] to-[#f8faff] overflow-hidden border-t border-slate-100"
>
	<div class="max-w-7xl mx-auto px-4">
		<!-- Compact Section Title -->
		<div class="text-center mb-6">
			<div
				class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full mb-2"
				style="background-color: #EEF4FF; border: 1px solid rgba(37, 99, 235, 0.15);"
			>
				<i class="fa-solid fa-graduation-cap text-[9px]" style="color: #2563EB;"></i>
				<span class="text-[10px] font-black uppercase tracking-wider" style="color: #1D4ED8;"
					>Success Stories</span
				>
			</div>
			<h2 class="text-base md:text-xl font-bold tracking-tight">
				<span style="color: #0F172A;">Real Stories,</span>
				<span style="color: #0B5FFF;">Real Success</span>
			</h2>
		</div>

		<!-- Horizontal Infinite Scrolling Marquee -->
		<div class="relative w-full overflow-hidden mask-fade-edges">
			<div class="marquee-track flex gap-4 animate-marquee py-2">
				<!-- Double the array to enable seamless looping -->
				{#each [...stories, ...stories] as story}
					<div
						class="mini-story-card bg-white border border-slate-100 rounded-xl px-5 py-4 flex flex-col justify-between shrink-0 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-200"
					>
						<!-- Info Column -->
						<div class="flex flex-col text-left min-w-0">
							<div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
								<span class="font-bold text-slate-800 text-xs truncate">{story.name}</span>
								<span class="text-[9px] text-slate-400 font-semibold shrink-0">{story.program}</span
								>
								<span
									class="px-1.5 py-0.5 rounded-full border text-[9px] font-black uppercase tracking-wider {themeColors[
										story.theme
									].badgeBg} shrink-0"
								>
									{story.placement}
								</span>
							</div>
							<p
								class="text-slate-500 text-[10.5px] mt-2 font-medium italic leading-relaxed line-clamp-2"
							>
								"{story.quote}"
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Smooth CSS gradient bridge to blend into the dark footer background -->
<div class="footer-transition"></div>

<style>
	/* Gradient masking for soft edges on the screen boundaries */
	.mask-fade-edges {
		mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 8%,
			black 92%,
			transparent 100%
		);
	}

	.marquee-track {
		width: max-content;
		will-change: transform;
	}

	.mini-story-card {
		width: 320px;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-marquee {
		animation: marquee 28s linear infinite;
	}

	/* Pause scrolling on hover for accessibility and UX */
	.marquee-track:hover {
		animation-play-state: paused;
	}

	/* Transition bridge to blend into the footer background (#080e1f) */
	.footer-transition {
		width: 100%;
		height: 48px;
		background: linear-gradient(to bottom, #f8faff 0%, #080e1f 100%);
		margin-bottom: -2px; /* Pulls together to prevent gaps */
		position: relative;
		z-index: 5;
	}
</style>
