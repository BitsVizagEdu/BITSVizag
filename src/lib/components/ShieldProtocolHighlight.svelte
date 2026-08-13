<script>
	const photos = [
		{
			id: 'sp1',
			src: '/Shield-protocol/sp1.jpg',
			caption: 'Inaugural Podcast Session',
			tag: 'Behind The Firewall'
		},
		{
			id: 'sp5',
			src: '/Shield-protocol/sp5.jpg',
			caption: 'Leadership Keynote Speech',
			tag: 'Cyber Leadership'
		},
		{
			id: 'sp11',
			src: '/Shield-protocol/sp11.jpg',
			caption: 'Live Hackathon Challenge',
			tag: 'Student Arena'
		},
		{
			id: 'sp8',
			src: '/Shield-protocol/sp8.jpg',
			caption: 'Official Protocol Launch',
			tag: 'Grand Inauguration'
		}
	];

	let selectedPhoto = null;
</script>

<section id="shield-protocol" class="cyber-shell w-full py-16 sm:py-20 relative overflow-hidden text-white border-y border-white/10">
	<div class="cyber-grid absolute inset-0 pointer-events-none"></div>
	<div class="cyber-orb cyber-orb-left absolute left-[-8%] top-10 w-72 h-72 rounded-full"></div>
	<div class="cyber-orb cyber-orb-right absolute right-[-6%] bottom-0 w-80 h-80 rounded-full"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_38%)] pointer-events-none"></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
		<div class="glass-header flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6 pb-8">
			<div class="space-y-4 max-w-4xl">
				<div class="event-kicker text-cyan-200/90 text-[11px] font-medium uppercase tracking-[0.34em]">
					Cyber Security Flagship Event
				</div>

				<h2 class="hero-title text-[2.4rem] sm:text-[3rem] lg:text-[4.8rem] leading-[0.9] tracking-[-0.06em] font-black text-white">
					The Shield Protocol <span class="accent-slab">’26</span>
				</h2>

				<div class="meta-row flex flex-wrap items-center gap-3 pt-2">
					<div class="name-chip flex items-center gap-2.5 px-3 py-2 rounded-xl border border-white/10 bg-slate-900/55">
						<span class="meta-label text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">Guest</span>
						<strong class="meta-name text-white">Mr. Santosh Chaluvadi</strong>
						<span class="text-slate-400 text-xs">CEO, Supraja Tech</span>
					</div>
					<div class="name-chip flex items-center gap-2.5 px-3 py-2 rounded-xl border border-white/10 bg-slate-900/55">
						<span class="meta-label text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300">Host</span>
						<strong class="meta-name text-white">Mr. P. Joshua Raju</strong>
						<span class="text-slate-400 text-xs">Head, Cyber Security</span>
					</div>
				</div>
			</div>

			<div class="shield-panel flex shrink-0 items-center justify-center">
				<div class="shield-wrap">
					<div class="shield-inner">
						<div class="shield-check">
							<i class="fa-solid fa-check"></i>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="cta-row mt-4 flex justify-start lg:justify-end">
			<a
				href="https://www.instagram.com/p/Db8WPtKl1x4/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==&igsi=NTc4MTIwNjQ2YQ=="
				target="_blank"
				rel="noopener noreferrer"
				class="cta-button inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 text-white font-extrabold text-xs sm:text-sm tracking-[0.12em] uppercase transition-all shadow-[0_12px_30px_rgba(34,211,238,0.28)] hover:scale-[1.02]"
			>
				<i class="fa-brands fa-instagram text-base"></i>
				More on Instagram
			</a>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each photos as photo}
				<div
					class="feature-card group relative rounded-2xl overflow-hidden bg-slate-900/65 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-[0_18px_48px_rgba(0,0,0,0.35)] cursor-pointer flex flex-col"
					on:click={() => (selectedPhoto = photo)}
					on:keydown={(e) => e.key === 'Enter' && (selectedPhoto = photo)}
					role="button"
					tabindex="0"
				>
					<div class="w-full aspect-[4/3] relative overflow-hidden bg-slate-950">
						<img
							src={photo.src}
							alt={photo.caption}
							class="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent"></div>

						<div class="absolute inset-x-0 bottom-0 z-10 p-3 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-transparent">
							<h3 class="text-sm sm:text-base font-bold text-white truncate">
								{photo.caption}
							</h3>
						</div>

						<div class="absolute top-3 right-3 z-10">
							<span class="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-slate-900/55 text-cyan-300 shadow-md backdrop-blur-sm">
								<i class="fa-solid fa-expand text-[10px]"></i>
							</span>
						</div>

						<div class="absolute inset-0 bg-slate-950/10 transition-opacity duration-300 group-hover:bg-slate-950/15"></div>
					</div>

					<div class="p-4 bg-slate-950/80 border-t border-white/10 hidden">
						<h3 class="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
							{photo.caption}
						</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>

	{#if selectedPhoto}
		<div
			class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
			on:click={() => (selectedPhoto = null)}
			on:keydown={(e) => e.key === 'Escape' && (selectedPhoto = null)}
			role="dialog"
			tabindex="-1"
		>
			<div
				class="relative max-w-4xl w-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
				on:click|stopPropagation
				role="document"
			>
				<button
					class="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700 text-white flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-colors"
					on:click={() => (selectedPhoto = null)}
					aria-label="Close modal"
				>
					✕
				</button>
				<div class="w-full bg-black flex items-center justify-center min-h-[300px]">
					<img src={selectedPhoto.src} alt={selectedPhoto.caption} class="w-full max-h-[75vh] object-contain" />
				</div>
				<div class="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4">
					<div>
						<span class="text-[10px] text-cyan-400 font-extrabold uppercase tracking-[0.2em]">{selectedPhoto.tag}</span>
						<h4 class="text-base font-bold text-white">{selectedPhoto.caption}</h4>
					</div>
					<a
						href="https://www.instagram.com/p/Db8WPtKl1x4/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==&igsi=NTc4MTIwNjQ2YQ=="
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl text-xs hover:from-blue-500 hover:to-cyan-400 transition-colors shrink-0 shadow-md"
					>
						<i class="fa-brands fa-instagram text-sm"></i>
						More on Instagram
					</a>
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	.cyber-shell {
		background:
			radial-gradient(circle at top left, rgba(14, 116, 144, 0.16), transparent 28%),
			radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.12), transparent 30%),
			linear-gradient(135deg, #020b1d 0%, #08192d 30%, #091827 100%);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
	}

	.cyber-grid {
		background-image:
			linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
			linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
		background-size: 38px 38px;
		mask-image: radial-gradient(circle at center, black 40%, transparent 90%);
		animation: driftGrid 18s linear infinite;
	}

	.cyber-orb {
		filter: blur(52px);
		opacity: 0.72;
		background: radial-gradient(circle, rgba(56, 189, 248, 0.66) 0%, rgba(59, 130, 246, 0.18) 35%, transparent 75%);
		animation: pulseGlow 8s ease-in-out infinite;
	}

	.cyber-orb-left {
		transform: translate3d(0, 0, 0);
	}

	.cyber-orb-right {
		animation-delay: 1.6s;
	}

	.glass-header {
		border-bottom: 1px solid rgba(148, 163, 184, 0.25);
		backdrop-filter: blur(10px);
	}

	.hero-title {
		font-family: 'Plus Jakarta Sans', 'Satoshi', 'Segoe UI', sans-serif;
		text-shadow: 0 0 18px rgba(103, 232, 249, 0.18);
	}

	.accent-slab {
		background: linear-gradient(135deg, #dff7ff 0%, #8ddafc 24%, #7aa7ff 52%, #d9d7ff 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		text-shadow: 0 0 22px rgba(125, 211, 252, 0.18);
	}

	.event-kicker {
		font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
		letter-spacing: 0.3em;
		font-weight: 500;
		opacity: 0.94;
		text-shadow: 0 0 12px rgba(125, 211, 252, 0.12);
	}

	.meta-row {
		font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
	}

	.name-chip {
		backdrop-filter: blur(8px);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
		transition: border-color 0.2s ease, transform 0.2s ease;
	}

	.name-chip:hover {
		border-color: rgba(103, 232, 249, 0.28);
		transform: translateY(-1px);
	}

	.meta-label {
		font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
	}

	.meta-name {
		font-weight: 700;
		letter-spacing: -0.02em;
		background: linear-gradient(135deg, #f8fafc 0%, #bae6fd 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.cta-row {
		padding-top: 0.5rem;
	}

	.cta-button {
		font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
		letter-spacing: 0.12em;
		border: 1px solid rgba(125, 211, 252, 0.35);
		box-shadow: 0 0 25px rgba(59, 130, 246, 0.18);
	}

	.feature-card {
		backdrop-filter: blur(8px);
	}

	.shield-panel {
		padding-right: 0.5rem;
	}

	.shield-wrap {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 210px;
		height: 210px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(59, 130, 246, 0.16), rgba(2, 6, 23, 0.2) 58%, transparent 100%);
		box-shadow: inset 0 0 25px rgba(125, 211, 252, 0.12);
	}

	.shield-inner {
		position: relative;
		width: 170px;
		height: 170px;
		border-radius: 28% 28% 32% 32% / 20% 20% 40% 40%;
		background: linear-gradient(180deg, rgba(7, 20, 34, 0.96), rgba(10, 35, 58, 0.98));
		border: 2px solid rgba(103, 232, 249, 0.65);
		box-shadow:
			0 0 0 3px rgba(96, 165, 250, 0.12),
			0 0 26px rgba(56, 189, 248, 0.25),
			inset 0 0 18px rgba(96, 165, 250, 0.12);
		clip-path: polygon(50% 0%, 86% 12%, 100% 48%, 88% 78%, 50% 100%, 12% 78%, 0% 48%, 14% 12%);
	}

	.shield-inner::before {
		content: '';
		position: absolute;
		inset: 14px;
		border-radius: 26% 26% 30% 30% / 18% 18% 38% 38%;
		border: 1px solid rgba(125, 211, 252, 0.28);
		background: linear-gradient(180deg, rgba(12, 31, 49, 0.9), rgba(2, 6, 23, 0.7));
	}

	.shield-check {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
		color: rgba(125, 211, 252, 0.95);
		font-size: 5rem;
		text-shadow: 0 0 18px rgba(125, 211, 252, 0.35);
	}

	.shield-check i {
		transform: scale(1.1);
	}

	@keyframes pulseGlow {
		0%,
		100% {
			opacity: 0.5;
			transform: scale(0.96);
		}
		50% {
			opacity: 0.9;
			transform: scale(1.08);
		}
	}

	@keyframes driftGrid {
		0% {
			transform: translate3d(0, 0, 0);
		}
		50% {
			transform: translate3d(0, -14px, 0);
		}
		100% {
			transform: translate3d(0, 0, 0);
		}
	}
</style>
