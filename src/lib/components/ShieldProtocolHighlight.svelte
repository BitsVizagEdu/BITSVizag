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

<section id="shield-protocol" class="cyber-shell w-full py-8 sm:py-16 relative overflow-hidden text-white border-y border-white/10 font-sans">
	<div class="cyber-grid absolute inset-0 pointer-events-none"></div>
	<div class="cyber-orb cyber-orb-left absolute left-[-8%] top-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full"></div>
	<div class="cyber-orb cyber-orb-right absolute right-[-6%] bottom-0 w-56 sm:w-80 h-56 sm:h-80 rounded-full"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_38%)] pointer-events-none"></div>

	<div class="max-w-7xl mx-auto px-3 sm:px-6 relative z-10 font-sans">
		<!-- Header Section -->
		<div class="glass-header flex flex-col md:flex-row md:items-center justify-between mb-5 sm:mb-8 gap-4 pb-4 sm:pb-6">
			<div class="space-y-2 sm:space-y-3 flex-1 min-w-0">
				<div class="flex items-center justify-between gap-2">
					<span class="event-kicker text-cyan-300 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.3em]">
						Cyber Security Flagship Event
					</span>
					<!-- Compact Shield Icon on Mobile -->
					<div class="md:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs shrink-0">
						<i class="fa-solid fa-shield-halved"></i>
					</div>
				</div>

				<h2 class="hero-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
					The Shield Protocol <span class="accent-slab">’26</span>
				</h2>

				<!-- Guest & Host: Neat 2-Column Grid on Mobile -->
				<div class="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch sm:items-center gap-2 pt-1 font-sans">
					<!-- Guest Card -->
					<div class="name-chip flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl border border-white/10 bg-slate-900/70">
						<div class="flex items-center gap-1">
							<span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
							<span class="meta-label text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">Guest</span>
						</div>
						<div class="min-w-0">
							<strong class="meta-name text-xs sm:text-sm text-white block truncate">Mr. Santosh Chaluvadi</strong>
							<span class="text-slate-400 text-[10px] sm:text-xs block truncate">CEO, Supraja Tech</span>
						</div>
					</div>

					<!-- Host Card -->
					<div class="name-chip flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl border border-white/10 bg-slate-900/70">
						<div class="flex items-center gap-1">
							<span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
							<span class="meta-label text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">Host</span>
						</div>
						<div class="min-w-0">
							<strong class="meta-name text-xs sm:text-sm text-white block truncate">Mr. P. Joshua Raju</strong>
							<span class="text-slate-400 text-[10px] sm:text-xs block truncate">Head, Cyber Security</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Desktop Shield Graphic -->
			<div class="hidden md:flex shield-panel shrink-0 items-center justify-center">
				<div class="shield-wrap">
					<div class="shield-inner">
						<div class="shield-check">
							<i class="fa-solid fa-check"></i>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Action Bar / Instagram CTA -->
		<div class="flex items-center justify-between gap-3 mb-3.5 sm:mb-5 font-sans">
			<div class="flex items-center gap-1.5 text-xs text-cyan-300/80">
				<i class="fa-solid fa-camera text-[11px]"></i>
				<span class="text-[11px] sm:text-xs font-semibold tracking-wide uppercase text-slate-300">Event Highlights</span>
			</div>

			<a
				href="https://www.instagram.com/p/Db8WPtKl1x4/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==&igsi=NTc4MTIwNjQ2YQ=="
				target="_blank"
				rel="noopener noreferrer"
				class="cta-button inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 text-white font-bold text-[10px] sm:text-xs tracking-[0.08em] uppercase transition-all shadow-[0_8px_20px_rgba(34,211,238,0.22)] hover:scale-[1.02] shrink-0"
			>
				<i class="fa-brands fa-instagram text-xs sm:text-sm"></i>
				<span>More on Instagram</span>
			</a>
		</div>

		<!-- 2-Column Grid on Mobile, 4-Column on Large Screens -->
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 font-sans">
			{#each photos as photo}
				<div
					class="feature-card group relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900/70 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)] cursor-pointer flex flex-col"
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
						<div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

						<!-- Caption at Bottom -->
						<div class="absolute inset-x-0 bottom-0 z-10 p-2 sm:p-3 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent">
							<span class="text-[8px] sm:text-[9px] font-bold text-cyan-400 uppercase tracking-widest block truncate mb-0.5">
								{photo.tag}
							</span>
							<h3 class="text-[11px] sm:text-sm font-bold text-white line-clamp-1 leading-snug">
								{photo.caption}
							</h3>
						</div>

						<!-- Expand Icon Badge -->
						<div class="absolute top-2 right-2 z-10">
							<span class="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-white/20 bg-slate-900/60 text-cyan-300 shadow-md backdrop-blur-sm">
								<i class="fa-solid fa-expand text-[8px] sm:text-[10px]"></i>
							</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Fullscreen Photo Modal -->
	{#if selectedPhoto}
		<div
			class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 font-sans"
			on:click={() => (selectedPhoto = null)}
			on:keydown={(e) => e.key === 'Escape' && (selectedPhoto = null)}
			role="dialog"
			tabindex="-1"
		>
			<div
				class="relative max-w-4xl w-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)]"
				on:click|stopPropagation
				role="document"
			>
				<button
					class="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-slate-900/90 border border-slate-700 text-white flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-colors"
					on:click={() => (selectedPhoto = null)}
					aria-label="Close modal"
				>
					✕
				</button>
				<div class="w-full bg-black flex items-center justify-center min-h-[260px] sm:min-h-[340px]">
					<img src={selectedPhoto.src} alt={selectedPhoto.caption} class="w-full max-h-[70vh] object-contain" />
				</div>
				<div class="p-3 sm:p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
					<div class="min-w-0">
						<span class="text-[9px] sm:text-[10px] text-cyan-400 font-extrabold uppercase tracking-[0.2em] block">{selectedPhoto.tag}</span>
						<h4 class="text-xs sm:text-base font-bold text-white truncate">{selectedPhoto.caption}</h4>
					</div>
					<a
						href="https://www.instagram.com/p/Db8WPtKl1x4/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==&igsi=NTc4MTIwNjQ2YQ=="
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg text-[10px] sm:text-xs hover:from-blue-500 hover:to-cyan-400 transition-colors shrink-0 shadow-md"
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
		border-bottom: 1px solid rgba(148, 163, 184, 0.2);
	}

	.hero-title {
		font-family: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
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
		font-family: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
		opacity: 0.94;
		text-shadow: 0 0 12px rgba(125, 211, 252, 0.12);
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

	.meta-name {
		font-weight: 700;
		letter-spacing: -0.01em;
		background: linear-gradient(135deg, #f8fafc 0%, #bae6fd 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.cta-button {
		font-family: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
		border: 1px solid rgba(125, 211, 252, 0.35);
		box-shadow: 0 0 20px rgba(59, 130, 246, 0.18);
	}

	.feature-card {
		backdrop-filter: blur(8px);
	}

	.shield-wrap {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 140px;
		height: 140px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(59, 130, 246, 0.16), rgba(2, 6, 23, 0.2) 58%, transparent 100%);
		box-shadow: inset 0 0 20px rgba(125, 211, 252, 0.12);
	}

	.shield-inner {
		position: relative;
		width: 110px;
		height: 110px;
		border-radius: 28% 28% 32% 32% / 20% 20% 40% 40%;
		background: linear-gradient(180deg, rgba(7, 20, 34, 0.96), rgba(10, 35, 58, 0.98));
		border: 2px solid rgba(103, 232, 249, 0.65);
		box-shadow:
			0 0 0 3px rgba(96, 165, 250, 0.12),
			0 0 22px rgba(56, 189, 248, 0.25),
			inset 0 0 14px rgba(96, 165, 250, 0.12);
		clip-path: polygon(50% 0%, 86% 12%, 100% 48%, 88% 78%, 50% 100%, 12% 78%, 0% 48%, 14% 12%);
	}

	.shield-inner::before {
		content: '';
		position: absolute;
		inset: 10px;
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
		font-size: 3.2rem;
		text-shadow: 0 0 14px rgba(125, 211, 252, 0.35);
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
