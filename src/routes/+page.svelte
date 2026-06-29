<script>
	import Seo from '$lib/components/Seo.svelte';
	import HighlightsSlider from '$lib/components/HighlightsSlider.svelte';
	import { showNavBar } from '$lib/stores/store.js';

	import Notification from '$lib/components/notification.svelte';
	import SectionTransition from '$lib/components/SectionTransition.svelte';
	import OptimizedImage from '$lib/components/OptimizedImage.svelte';
	import { onDestroy, onMount } from 'svelte';

	let EventsComp = null;
	let StrengthComp = null;
	let GalleryComp = null;
	let PlacementComp = null;
	let CourseHighlightComp = null;
	let StudentStoriesComp = null;

	let words = ['Tech Leaders', 'Innovators', 'Engineers', 'Visionaries'];
	let displayText = '';
	let wordIndex = 0;
	let isDeleting = false;
	let typeSpeed = 150;
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let typingTimer = undefined;
	let shouldUseVideo = true;
	/** @type {HTMLVideoElement | undefined} */
	let heroVideo = undefined;

	function handleTyping() {
		const currentWord = words[wordIndex];

		if (isDeleting) {
			displayText = currentWord.substring(0, displayText.length - 1);
			typeSpeed = 75;
		} else {
			displayText = currentWord.substring(0, displayText.length + 1);
			typeSpeed = 150;
		}

		if (!isDeleting && displayText === currentWord) {
			isDeleting = true;
			typeSpeed = 2000;
		} else if (isDeleting && displayText === '') {
			isDeleting = false;
			wordIndex = (wordIndex + 1) % words.length;
			typeSpeed = 500;
		}

		typingTimer = setTimeout(handleTyping, typeSpeed);
	}

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const saveData = Boolean(/** @type {any} */ (navigator).connection?.saveData);
		shouldUseVideo = !prefersReducedMotion && !saveData;

		if (shouldUseVideo && heroVideo) {
			try {
				heroVideo.play?.();
			} catch (e) {}
		}

		handleTyping();

		// Dynamic imports for below-the-fold components to speed up initial load
		import('$lib/components/events.svelte').then((m) => (EventsComp = m.default));
		import('$lib/components/strength.svelte').then((m) => (StrengthComp = m.default));
		import('$lib/components/gallery.svelte').then((m) => (GalleryComp = m.default));
		import('$lib/components/placement.svelte').then((m) => (PlacementComp = m.default));
		import('$lib/components/CourseHighlight.svelte').then((m) => (CourseHighlightComp = m.default));
		import('$lib/components/StudentStories.svelte').then((m) => (StudentStoriesComp = m.default));
	});

	onDestroy(() => {
		if (typingTimer) {
			clearTimeout(typingTimer);
			typingTimer = undefined;
		}
	});

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'CollegeOrUniversity',
		name: 'BITS Vizag',
		url: 'https://bitsvizag.com',
		logo: 'https://bitsvizag.com/logo-150-2/logo-150-2.png',
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+91-8886634502',
			contactType: 'customer service'
		},
		sameAs: [
			'https://www.facebook.com/bits.vizag/',
			'https://twitter.com/bitsvizag',
			'https://www.instagram.com/bitsvizag/',
			'https://www.youtube.com/channel/UC_Bw_s-l_x9_x_x_x_x_x'
		],
		potentialAction: {
			'@type': 'SearchAction',
			target: 'https://bitsvizag.com/search?q={search_term_string}',
			'query-input': 'required name=search_term_string'
		}
	};
</script>

<Seo
	title="BITS Vizag - Top Engineering Colleges in Visakhapatnam"
	description="Baba Institute of Technology and Sciences (BITS Vizag),BITS Vizag is a best engineering college in Visakhapatnam, offering a world-class education in various disciplines."
	url="https://bitsvizag.com"
	imageUrl="https://bitsvizag.com/logo-150-2/logo-150-2.png"
	siteName="BITS Vizag"
	{structuredData}
/>

<svelte:head>
	<title>Home</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Teko:wght@300..700&family=Lobster&family=Graduate&family=VT323&family=Press+Start+2P&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
{#if !$showNavBar}
	<Notification />
	<section
		class="hero-wrap relative min-h-[92vh] md:min-h-screen overflow-hidden bg-[#050816] flex items-center justify-center"
	>
		<!-- Background Image occupying full Hero section -->
		<img
			src="/bitsvizag.png"
			alt="BITS Vizag campus"
			loading="eager"
			decoding="async"
			fetchpriority="high"
			class="absolute inset-0 h-full w-full object-cover z-0 hero-bg-img"
		/>

		<!-- High quality gradient overlay for contrast and readability -->
		<div class="absolute inset-0 z-[1] hero-gradient-overlay"></div>

		<!-- Centered content block -->
		<div
			class="hero-content-anim relative z-[2] mx-auto flex w-full max-w-7xl items-center justify-center px-6 pt-16 pb-24 md:pt-20 md:pb-28"
		>
			<div
				class="flex flex-col items-center text-center w-full max-w-5xl gap-2 md:gap-5 pt-6 md:pt-6 -translate-y-14 md:translate-y-0"
			>
				<!-- Intro phrase above title -->
				<p
					class="text-[9px] sm:text-xs md:text-sm font-bold uppercase animate-fade-up-reveal mt-0 sm:mt-2 -translate-y-8 sm:translate-y-0 translate-x-1 sm:translate-x-2 md:translate-x-3"
					style="font-family: 'Press Start 2P', monospace; letter-spacing: 0.02em; background: #FFD84D; -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 2px 8px rgba(255, 216, 77, 0.4));"
				>
					Start your journey with
				</p>

				<!-- Main Title: BITS VIZAG (Satoshi Sans-Serif Style, shifted upper) -->
				<h1
					class="hero-main-title text-6xl sm:text-8xl md:text-9xl font-bold text-white leading-none drop-shadow-lg translate-x-2 sm:translate-x-2 md:translate-x-4 mt-3 sm:mt-0"
				>
					Bits Vizag
				</h1>

				<!-- Subtitle (typing and premium tagline) -->
				<p
					class="text-base md:text-xl text-[#f8fafc] max-w-3xl leading-relaxed font-bold drop-shadow hero-subtitle animate-fade-up-reveal mt-6 md:mt-2"
				>
					Empowering tomorrow's <span class="typing-text-accent">{displayText}</span><span
						class="custom-cursor"
					></span>
				</p>

				<!-- CTA Buttons -->
				<div
					class="flex flex-row items-center justify-center gap-2 sm:gap-2.5 w-full max-w-[350px] sm:max-w-none mx-auto mt-24 sm:mt-28 md:mt-36 px-1.5 translate-x-1 sm:translate-x-2 md:translate-x-3"
				>
					<a
						href="/courses/Offered-Courses"
						class="font-cta text-[10px] sm:text-xs md:text-sm font-bold text-white bg-[#c8960c] px-3 sm:px-8 py-2 sm:py-4 rounded-lg hover:bg-[#b0820a] transition-all duration-200 uppercase tracking-wider text-center flex items-center justify-center gap-1 sm:gap-2 shadow-[0_4px_15px_rgba(200,150,12,0.3)] flex-1 sm:flex-initial whitespace-nowrap"
					>
						Start Your Journey &rarr;
					</a>
					<a
						href="https://cets.apsche.ap.gov.in/EAPCET/Eapcet/EAPCET_HomePage.aspx"
						target="_blank"
						rel="noopener noreferrer"
						class="font-cta text-[10px] sm:text-xs md:text-sm font-bold text-white bg-[#0d1b3e] px-3 sm:px-8 py-2.5 sm:py-4 rounded-lg hover:bg-[#152857] transition-all duration-200 uppercase tracking-wider text-center flex items-center justify-center gap-1 sm:gap-2 shadow-[0_4px_15px_rgba(13,27,62,0.3)] flex-1 sm:flex-initial whitespace-nowrap"
					>
						Admissions 2026 🎓
					</a>
				</div>

				<!-- Glassmorphic Key Points Grid (Hidden on Mobile) -->
				<div class="hidden md:grid grid-cols-3 gap-6 w-full mt-14 px-4 animate-fade-up-reveal">
					<!-- Card 1: Foundation -->
					<div
						class="relative group p-5 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[18px] transition-all duration-300 hover:bg-white/[0.05] hover:border-amber-400/40 hover:-translate-y-1 text-left shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
					>
						<div
							class="absolute -top-2.5 left-5 px-3 py-0.5 bg-amber-400 text-black font-extrabold text-[9px] uppercase rounded-full tracking-wider shadow-[0_0_12px_rgba(251,191,36,0.3)]"
						>
							Foundation
						</div>
						<div class="flex items-start gap-4 mt-1.5">
							<div
								class="w-11 h-11 shrink-0 flex items-center justify-center rounded-[12px] bg-amber-400/10 text-amber-400 text-lg border border-amber-400/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-all duration-300 group-hover:scale-105"
							>
								<i class="fa-solid fa-book-open group-hover:animate-pulse"></i>
							</div>
							<div>
								<h3
									class="text-white font-extrabold text-sm md:text-base tracking-tight group-hover:text-amber-400 transition-colors duration-200"
								>
									Engineering Foundation
								</h3>
								<p
									class="text-slate-300/80 text-[11px] md:text-[11.5px] mt-1 leading-relaxed font-medium"
								>
									Experienced faculty, modern laboratories, outcome-based learning, and
									industry-aligned curriculum.
								</p>
							</div>
						</div>
					</div>

					<!-- Card 2: Innovation -->
					<div
						class="relative group p-5 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[18px] transition-all duration-300 hover:bg-white/[0.05] hover:border-cyan-400/40 hover:-translate-y-1 text-left shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
					>
						<div
							class="absolute -top-2.5 left-5 px-3 py-0.5 bg-cyan-400 text-black font-extrabold text-[9px] uppercase rounded-full tracking-wider shadow-[0_0_12px_rgba(34,211,238,0.3)]"
						>
							Innovation
						</div>
						<div class="flex items-start gap-4 mt-1.5">
							<div
								class="w-11 h-11 shrink-0 flex items-center justify-center rounded-[12px] bg-cyan-400/10 text-cyan-400 text-lg border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300 group-hover:scale-105"
							>
								<i class="fa-solid fa-lightbulb group-hover:animate-bounce"></i>
							</div>
							<div>
								<h3
									class="text-white font-extrabold text-sm md:text-base tracking-tight group-hover:text-cyan-400 transition-colors duration-200"
								>
									Practical Learning
								</h3>
								<p
									class="text-slate-300/80 text-[11px] md:text-[11.5px] mt-1 leading-relaxed font-medium"
								>
									Hands-on experience through project-based learning, technical clubs, workshops,
									and research.
								</p>
							</div>
						</div>
					</div>

					<!-- Card 3: Career Development -->
					<div
						class="relative group p-5 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[18px] transition-all duration-300 hover:bg-white/[0.05] hover:border-emerald-400/40 hover:-translate-y-1 text-left shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
					>
						<div
							class="absolute -top-2.5 left-5 px-3 py-0.5 bg-emerald-400 text-black font-extrabold text-[9px] uppercase rounded-full tracking-wider shadow-[0_0_12px_rgba(52,211,153,0.3)]"
						>
							Careers
						</div>
						<div class="flex items-start gap-4 mt-1.5">
							<div
								class="w-11 h-11 shrink-0 flex items-center justify-center rounded-[12px] bg-emerald-400/10 text-emerald-400 text-lg border border-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.15)] transition-all duration-300 group-hover:scale-105"
							>
								<i class="fa-solid fa-briefcase group-hover:animate-pulse"></i>
							</div>
							<div>
								<h3
									class="text-white font-extrabold text-sm md:text-base tracking-tight group-hover:text-emerald-400 transition-colors duration-200"
								>
									Career Development
								</h3>
								<p
									class="text-slate-300/80 text-[11px] md:text-[11.5px] mt-1 leading-relaxed font-medium"
								>
									Dedicated career preparation, industry collaborations, internships, and placement
									assistance.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Crimson Red Bottom Bar (Explore BITS Vizag style like Explore Stanford) -->
		<a
			href="#explore"
			class="absolute bottom-0 left-0 right-0 z-10 bg-[#8c1515] hover:bg-[#a31a1a] text-white flex items-center justify-center gap-2 py-3.5 transition-colors duration-300 font-bold uppercase tracking-wider text-[11px] md:text-xs shadow-[0_-4px_20px_rgba(0,0,0,0.3)] cursor-pointer animate-fade-in"
		>
			Explore BITS Vizag <i class="fa-solid fa-chevron-down animate-bounce text-[9px] mt-0.5"></i>
		</a>
	</section>

	<SectionTransition />

	<div id="explore">
		<HighlightsSlider />
	</div>

	<div class="celebrate-header-container pt-16 pb-6 md:py-20 bg-white overflow-hidden relative">
		<!-- Subtle decorative background element -->
		<div
			class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-50/50 blur-[100px] rounded-full -z-0"
		></div>

		<div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
			<div class="inline-flex items-center gap-3 mb-3 md:mb-6" data-aos="fade-down">
				<span class="h-[1px] w-8 bg-blue-400"></span>
				<span class="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px]"
					>Lifestyle & Culture</span
				>
				<span class="h-[1px] w-8 bg-blue-400"></span>
			</div>

			<h2
				class="celebrate-title text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-3 md:mb-6 uppercase"
				data-aos="fade-up"
			>
				Celebrate Life at <span class="text-blue-700">BITS Vizag</span>
			</h2>

			<p
				class="max-w-2xl mx-auto text-slate-500 font-medium text-sm md:text-lg leading-relaxed mb-4 md:mb-10 px-4"
				data-aos="fade-up"
				data-aos-delay="100"
			>
				Beyond academics, explore a vibrant ecosystem of events, clubs, and moments that define the
				unforgettable BITS experience.
			</p>

			<div class="flex items-center justify-center gap-3" data-aos="zoom-in" data-aos-delay="200">
				<div class="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
				<div class="h-1.5 w-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
				<div class="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
			</div>
		</div>
	</div>

	<div class="bg-white pb-10 md:pb-20">
		<div class="content-visibility-auto">
			{#if GalleryComp}
				<svelte:component this={GalleryComp} />
			{/if}
		</div>

		<div class="content-visibility-auto mt-3 md:mt-12">
			{#if EventsComp}
				<svelte:component this={EventsComp} />
			{/if}
		</div>

		<div class="content-visibility-auto mt-4 md:mt-20">
			{#if CourseHighlightComp}
				<svelte:component this={CourseHighlightComp} />
			{/if}
		</div>
	</div>
	<div class="content-visibility-auto">
		{#if StrengthComp}
			<svelte:component this={StrengthComp} />
		{/if}
	</div>

	<div class="content-visibility-auto">
		{#if PlacementComp}
			<svelte:component this={PlacementComp} />
		{/if}
	</div>

	<div class="content-visibility-auto">
		{#if StudentStoriesComp}
			<svelte:component this={StudentStoriesComp} />
		{/if}
	</div>

	<!-- <a
	href="/application-form" 
	class="cbg fixed  font-bold top-[60%] right-8 transform -translate-y-1/2 translate-x-1/2 -rotate-90 bg-yellow-300 hover:bg-[#02ADEE] hover:text-white text-black px-10 py-4 md:py-8 md:rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
  >
	APPLY NOW
  </a> -->
{/if}

<style>
	.hero-bg-img {
		filter: brightness(0.92) contrast(1.02);
		transition: transform 12s cubic-bezier(0.16, 1, 0.3, 1);
		animation: zoom-slow 20s ease-in-out infinite alternate;
	}

	@keyframes zoom-slow {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.08);
		}
	}

	.hero-gradient-overlay {
		background:
			radial-gradient(circle at center, rgba(5, 8, 22, 0.45) 0%, rgba(5, 8, 22, 0.8) 100%),
			linear-gradient(
				to bottom,
				rgba(5, 8, 22, 0.75) 0%,
				transparent 20%,
				transparent 80%,
				rgba(5, 8, 22, 0.9) 100%
			);
		position: absolute;
		inset: 0;
	}

	.hero-main-title {
		font-family: 'Lobster', cursive;
		font-weight: 500;
		letter-spacing: normal;
		text-transform: none;
		color: #ffffff;
		text-shadow:
			0 0 25px rgba(255, 255, 255, 0.3),
			0 10px 45px rgba(0, 0, 0, 0.85);
		margin-top: -14px;
		margin-bottom: 6px;
	}

	@media (max-width: 768px) {
		.celebrate-title {
			font-family: 'Lobster', cursive !important;
			text-transform: none !important;
			font-size: 6.2vw !important;
			font-weight: normal !important;
			letter-spacing: normal !important;
			line-height: 1.25 !important;
			white-space: nowrap !important;
		}
	}

	.gradient-text {
		background: linear-gradient(90deg, #ffd84d 0%, #ff4fd8 50%, #7c4dff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 200% auto;
		animation: textShine 5s linear infinite;
	}

	@keyframes textShine {
		to {
			background-position: 200% center;
		}
	}

	.neon-path {
		stroke-dasharray: 400;
		stroke-dashoffset: 400;
		animation: drawLine 2s ease-out forwards 1s;
	}

	@keyframes drawLine {
		to {
			stroke-dashoffset: 0;
		}
	}

	.btn-yellow-glow {
		@apply flex items-center justify-center gap-3 px-8 py-4 bg-[#FFD84D] text-[#050816] font-black rounded-xl transition-all duration-300;
		box-shadow: 0 0 30px rgba(255, 216, 77, 0.2);
	}

	.btn-yellow-glow:hover {
		@apply -translate-y-1;
		box-shadow: 0 10px 40px rgba(255, 216, 77, 0.4);
	}

	.btn-glass-premium {
		@apply flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-extrabold rounded-xl transition-all duration-300;
	}

	.btn-glass-premium:hover {
		@apply bg-white text-[#050816] -translate-y-1;
		box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
	}

	.stat-item {
		@apply flex flex-col items-center md:items-start;
	}

	.stat-num {
		@apply text-2xl md:text-3xl font-bold text-white tracking-tighter;
	}

	.stat-label {
		@apply text-[10px] md:text-xs text-[#B8C0D9] font-bold uppercase tracking-[0.1em];
	}

	.hero-card-ultra {
		@apply relative transition-all duration-1000 ease-out;
		animation: float-ultra 8s ease-in-out infinite;
		will-change: transform;
		transform: translateZ(0);
	}

	.hero-card-ultra img {
		@apply w-full h-full object-cover transition-all duration-1000;
		filter: contrast(1) brightness(1) saturate(1);
	}

	.hero-card-ultra:hover img {
		transform: scale(1.05);
		filter: contrast(1.15) brightness(1) saturate(1.3);
	}

	.minimal-pill {
		@apply px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-[0.15em] text-white flex items-center gap-2;
	}

	.pill-dot-small {
		@apply w-1.5 h-1.5 rounded-full bg-[#34D399] shadow-[0_0_8px_#34D399];
	}

	.minimal-glass-card {
		@apply p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl;
	}

	.grade-indicator {
		@apply w-10 h-10 flex items-center justify-center bg-[#FFD84D] text-[#050816] font-black rounded-lg text-sm shadow-lg;
	}

	@keyframes float-ultra {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-30px) rotate(0.5deg);
		}
	}

	@keyframes pulse-emerald {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(1.2);
		}
	}

	.typing-text-accent {
		color: #f59e0b; /* Amber 400 */
		text-shadow: 0 0 15px rgba(245, 158, 11, 0.45);
		font-weight: 800;
	}

	.custom-cursor {
		display: inline-block;
		width: 3px;
		height: 1.25em;
		background-color: #f59e0b;
		margin-left: 4px;
		vertical-align: middle;
		box-shadow:
			0 0 8px #f59e0b,
			0 0 16px #f59e0b;
		animation: pulse-cursor 0.8s step-end infinite;
	}

	@keyframes pulse-cursor {
		from,
		to {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	@keyframes spin-slow {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.animate-spin-slow {
		animation: spin-slow 8s linear infinite;
	}

	.hero-badges {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 0.75rem; /* Reduced from 1.5rem for tighter alignment */
		animation: fade-up 0.8s ease-out forwards;
	}

	.badge-pill {
		height: 30px;
		display: flex;
		align-items: center;
		padding: 0 14px;
		border-radius: 99px;
		font-family: 'Inter', sans-serif;
		font-size: 11px;
		font-weight: 800;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		white-space: nowrap;
		vertical-align: middle; /* Ensure vertical alignment */
	}

	.badge-pill.code {
		background: rgba(15, 23, 42, 0.6);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: rgba(255, 255, 255, 0.85);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
	}

	.badge-pill.code:hover {
		background: rgba(251, 191, 36, 0.15);
		border-color: #fbbf24;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(251, 191, 36, 0.25);
		color: #ffffff;
	}

	.badge-pill.est {
		background: rgba(251, 191, 36, 0.12);
		border: 1px solid #fbbf24;
		color: #fbbf24;
		backdrop-filter: blur(8px);
	}

	.hero-card {
		position: relative;
		width: min(100%, 30rem);
		border-radius: 2.5rem;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.15);
		background: rgba(15, 23, 42, 0.4);
		backdrop-filter: blur(8px);
		box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.6);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
		animation: floating-card 6s ease-in-out infinite;
	}

	.hero-card:hover {
		transform: scale(1.02) translateY(-10px) rotate(1deg);
		border-color: rgba(251, 191, 36, 0.5);
		box-shadow:
			0 40px 80px -20px rgba(0, 0, 0, 0.8),
			0 0 20px rgba(251, 191, 36, 0.1);
	}

	.hero-img-animated {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 16 / 10;
		filter: contrast(1.1) brightness(1.05) saturate(1.15);
		animation: ken-burns 30s ease-in-out infinite alternate;
		transition: filter 0.5s ease;
		will-change: transform;
		transform: translateZ(0);
	}

	.hero-card:hover .hero-img-animated {
		filter: contrast(1.15) brightness(1.1) saturate(1.2);
	}

	.glass-shine {
		background: linear-gradient(
			135deg,
			transparent 0%,
			rgba(255, 255, 255, 0) 40%,
			rgba(255, 255, 255, 0.15) 50%,
			rgba(255, 255, 255, 0) 60%,
			transparent 100%
		);
		background-size: 200% 200%;
		animation: shine-sweep 8s linear infinite;
	}

	@keyframes ken-burns {
		0% {
			transform: scale(1) translate(0, 0);
		}
		100% {
			transform: scale(1.2) translate(-2%, -2%);
		}
	}

	@keyframes floating-card {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-15px) rotate(-0.5deg);
		}
	}

	@keyframes shine-sweep {
		0% {
			background-position: -200% -200%;
		}
		100% {
			background-position: 200% 200%;
		}
	}

	.content-visibility-auto {
		content-visibility: auto;
		contain-intrinsic-size: 800px;
		will-change: transform, opacity;
		render-strategy: auto;
	}

	@keyframes fade-up {
		0% {
			opacity: 0;
			transform: translateY(24px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes float-glow {
		0%,
		100% {
			transform: translateY(0);
			box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
		}
		50% {
			transform: translateY(-6px);
			box-shadow: 0 15px 35px rgba(0, 0, 0, 0.22);
		}
	}

	@keyframes fade-up-reveal {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes shimmer-sweep {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	.animate-float-glow {
		animation: float-glow 4s ease-in-out infinite;
	}

	.animate-fade-up-reveal {
		animation: fade-up-reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}

	.animate-shimmer-sweep {
		animation: shimmer-sweep 3s linear infinite;
	}

	.hero-wrap {
		will-change: transform;
		transform: translateZ(0); /* Force GPU acceleration */
	}

	.hero-bg-img {
		object-fit: cover;
		object-position: center;
		transition: transform 0.5s ease;
	}

	@media (max-width: 768px) {
		.hero-wrap {
			min-height: 85vh !important;
		}

		.hero-bg-img {
			object-fit: cover !important;
			object-position: 50% 25% !important;
		}

		.hero-content-anim {
			padding-top: 0rem !important;
			padding-bottom: 5rem !important;
		}

		.hero-main-title {
			font-size: 5.5rem !important;
		}

		.hero-content-anim p {
			font-size: 0.95rem !important;
			line-height: 1.5 !important;
			max-width: 100% !important;
		}
	}

	@media (max-width: 480px) {
		.hero-main-title {
			font-size: 4.2rem !important;
		}
	}

	:global(.hero-content-anim) {
		will-change: transform, opacity;
		transform: translateZ(0);
	}
</style>
