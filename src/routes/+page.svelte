<script>
	import Events from '$lib/components/events.svelte';
	import Strength from '$lib/components/strength.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import HighlightsSlider from '$lib/components/HighlightsSlider.svelte';
	import Gallery from '$lib/components/gallery.svelte';
	import Placement from '$lib/components/placement.svelte';
	import { showNavBar } from '$lib/stores/store.js';

	import Notification from '$lib/components/notification.svelte';
	import SectionTransition from '$lib/components/SectionTransition.svelte';
	import CourseHighlight from '$lib/components/CourseHighlight.svelte';
	import StudentStories from '$lib/components/StudentStories.svelte';
	import { onMount } from 'svelte';

	let words = ['Tech Leaders', 'Innovators', 'Engineers', 'Visionaries'];
	let displayText = '';
	let wordIndex = 0;
	let isDeleting = false;
	let typeSpeed = 150;

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

		setTimeout(handleTyping, typeSpeed);
	}

	onMount(() => {
		handleTyping();
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
	title="BITS Vizag - Top Engineering College in Visakhapatnam"
	description="Baba Institute of Technology and Sciences (BITS Vizag),BITS Vizag is a best engineering college in Visakhapatnam, offering a world-class education in various disciplines."
	url="https://bitsvizag.com"
	imageUrl="https://bitsvizag.com/logo-150-2/logo-150-2.png"
	siteName="BITS Vizag"
	{structuredData}
/>

<svelte:head>
	<title>Home</title>
	<link rel="preload" as="image" href="/baba.png" />
	<link rel="preload" as="image" href="/header/T10main.webp" />
</svelte:head>
{#if !$showNavBar}
	<Notification />
	<section class="hero-wrap relative min-h-[78vh] md:min-h-[88vh] overflow-hidden bg-[#050816]">
		<video playsinline autoplay muted loop class="absolute inset-0 h-full w-full object-cover z-0">
			<source src="/baba.webm" type="video/webm" />
			<source src="/baba.mp4" type="video/mp4" />
		</video>

		<div class="absolute inset-0 z-[1] hero-overlay"></div>

		<div
			class="hero-content-anim relative z-[2] mx-auto flex min-h-[78vh] md:min-h-[88vh] w-full max-w-screen-sm md:max-w-7xl items-start px-4 py-10 md:px-12 md:py-20"
		>
			<div
				class="flex flex-col gap-5 w-full lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12"
			>
				<div
					class="hero-copy text-white text-center items-center flex flex-col w-full md:text-left md:items-start"
				>
					<div class="hero-badges-mobile md:hidden mb-8 w-full flex flex-col items-center gap-4">
						<!-- Combined Badge Row -->
						<div
							class="inline-flex items-stretch rounded-lg border border-[#fbbf24] overflow-hidden shadow-lg shadow-amber-500/10"
						>
							<!-- UGC Autonomous -->
							<div
								class="px-3 py-2 bg-[#fbbf24]/10 flex items-center gap-2 border-r border-[#fbbf24]/30"
							>
								<i class="fa-solid fa-sun text-[#fbbf24] text-[11px]"></i>
								<span class="text-[#fbbf24] text-[10px] font-black uppercase tracking-wider"
									>UGC Autonomous</span
								>
							</div>
							<!-- College Code -->
							<div class="px-3 py-2 bg-white/5 flex items-center gap-2">
								<i class="fa-solid fa-building-columns text-white/70 text-[11px]"></i>
								<span class="text-white/90 text-[10px] font-black uppercase tracking-wider"
									>Code: <span class="text-[#fbbf24]">BABA</span></span
								>
							</div>
						</div>

						<div class="text-[11px] font-black tracking-[0.2em] text-white/60 uppercase">
							EST. 2008 • VIZAG, AP
						</div>
					</div>

					<!-- Desktop-only Badges (STRICTLY HIDDEN ON MOBILE) -->
					<!-- <div class="hero-badges hidden lg:flex items-center gap-4 mb-8">
						<div
							class="badge-pill est uppercase tracking-widest text-[10px] font-black border border-[#fbbf24] px-4 py-1 rounded-full text-[#fbbf24] bg-[#fbbf24]/5"
						>
							Established in 2008
						</div>
						<div
							class="badge-pill code uppercase tracking-widest text-[10px] font-black text-white/80"
						>
							College Code: <span class="text-[#fbbf24]">BABA</span>
						</div>
					</div> -->

					<h1
						class="hero-title text-5xl md:text-7xl lg:text-7xl mb-6 font-semibold tracking-tighter leading-[0.85] text-center md:text-left"
					>
						<span class="block">Shaping Future</span>
						<span class="relative inline-block">
							<span class="gradient-text">Engineers</span>
							<!-- Creative Neon Stroke - Now under Engineers -->
							<svg
								class="absolute -bottom-4 left-0 w-full h-8 opacity-80 -z-10"
								viewBox="0 0 400 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 25C100 5 300 5 395 25"
									stroke="#7C4DFF"
									stroke-width="4"
									stroke-linecap="round"
									class="neon-path"
								/>
							</svg>
						</span>
					</h1>

					<p
						class="text-base md:text-lg text-[#B8C0D9]/80 leading-relaxed max-w-lg mb-10 font-medium text-center md:text-left"
					>
						Baba Institute of Technology and Sciences is a premier destination for engineering
						excellence. NAAC 'A' accredited, empowering tomorrow's innovators today with world-class
						facilities.
					</p>

					<div class="flex flex-col gap-5 w-full md:flex-row md:items-center mb-12">
						<a href="/courses/Offered-Courses" class="btn-yellow-glow">
							Explore Courses
							<i class="fa-solid fa-arrow-right"></i>
						</a>
						<a
							href="https://bitsvizageamcetexamportal1.vercel.app/"
							target="_blank"
							class="btn-glass-premium"
						>
							Admission Portal
							<i class="fa-solid fa-graduation-cap"></i>
						</a>
					</div>

					<!-- Premium Statistics Row -->
					<div class="stats-row grid grid-cols-2 sm:flex items-center gap-6 md:gap-10">
						<div class="stat-item">
							<span class="stat-num">150+</span>
							<span class="stat-label">Expert Faculty</span>
						</div>
						<div class="stat-item">
							<span class="stat-num">50+</span>
							<span class="stat-label">Programs</span>
						</div>
						<div class="stat-item">
							<span class="stat-num">6000+</span>
							<span class="stat-label">Alumni</span>
						</div>
						<div class="stat-item">
							<span class="stat-num">18+</span>
							<span class="stat-label">Years</span>
						</div>
					</div>
				</div>

				<div class="mt-16 w-full lg:mt-12 lg:flex lg:justify-end lg:items-center">
					<div class="relative group">
						<!-- Atmospheric Bloom -->
						<div
							class="absolute -inset-10 bg-[#7C4DFF]/10 blur-[100px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-1000"
						></div>

						<!-- Enhanced Pink/Purple Neon Edge Glow -->
						<div
							class="absolute -inset-1 bg-gradient-to-br from-[#7C4DFF] via-[#FF4FD8] via-[#FF4FD8] to-[#00D4FF] rounded-[2rem] md:rounded-[32px] blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-700"
						></div>

						<div
							class="hero-card-ultra relative w-full max-w-lg rounded-[2rem] md:rounded-[32px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] cursor-pointer"
						>
							<!-- Glassmorphism Container Layer -->
							<div
								class="absolute inset-0 bg-gradient-to-tr from-[#050816]/10 via-transparent to-white/5 z-10 pointer-events-none"
							></div>

							<!-- Cinematic Grading Overlay (Lightened) -->
							<div
								class="absolute inset-0 bg-gradient-to-t from-[#050816]/10 via-transparent to-transparent z-10 opacity-30"
							></div>
							<!-- Quality & Blend Overlays -->
							<div
								class="absolute inset-0 bg-gradient-to-tr from-[#050816]/20 via-transparent to-amber-500/5 z-10 pointer-events-none"
							></div>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent z-10"
							></div>

							<!-- Main Animated Image -->
							<img
								src="/bitsvizag.png"
								alt="BITS Vizag Campus"
								class="hero-img-animated w-full h-full object-cover"
								loading="eager"
							/>

							<!-- Moving Shine Effect -->
							<div class="absolute inset-0 z-15 glass-shine pointer-events-none"></div>

							<!-- Floating Pill Badge -->
							<div class="absolute top-5 right-5 z-20">
								<div class="minimal-pill">
									<span class="pill-dot-small"></span>
									Admissions 2026
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<SectionTransition />

	<HighlightsSlider />

	<div class="celebrate-header-container py-12 md:py-20 bg-white overflow-hidden relative">
		<!-- Subtle decorative background element -->
		<div
			class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-50/50 blur-[100px] rounded-full -z-0"
		></div>

		<div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
			<div class="inline-flex items-center gap-3 mb-6" data-aos="fade-down">
				<span class="h-[1px] w-8 bg-blue-400"></span>
				<span class="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px]"
					>Lifestyle & Culture</span
				>
				<span class="h-[1px] w-8 bg-blue-400"></span>
			</div>

			<h2
				class="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 uppercase"
				data-aos="fade-up"
			>
				Celebrate Life at
				<span class="text-blue-700 block md:inline mt-2 md:mt-0">BITS Vizag</span>
			</h2>

			<p
				class="max-w-2xl mx-auto text-slate-500 font-medium text-sm md:text-lg leading-relaxed mb-10 px-4"
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

	<div class="bg-white pb-20">
		<div class="content-visibility-auto">
			<Gallery />
		</div>

		<div class="content-visibility-auto mt-12">
			<Events />
		</div>

		<div class="content-visibility-auto mt-20">
			<CourseHighlight />
		</div>
	</div>
	<div class="content-visibility-auto">
		<Strength />
	</div>

	<div class="content-visibility-auto">
		<Placement />
	</div>

	<div class="content-visibility-auto">
		<StudentStories />
	</div>

	<!-- <a
	href="/application-form" 
	class="cbg fixed  font-bold top-[60%] right-8 transform -translate-y-1/2 translate-x-1/2 -rotate-90 bg-yellow-300 hover:bg-[#02ADEE] hover:text-white text-black px-10 py-4 md:py-8 md:rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
  >
	APPLY NOW
  </a> -->
{/if}

<style>
	.hero-overlay {
		background:
			radial-gradient(circle at 10% 20%, rgba(26, 20, 67, 0.8) 0%, transparent 50%),
			radial-gradient(circle at 90% 80%, rgba(124, 77, 255, 0.2) 0%, transparent 50%),
			linear-gradient(to bottom, #050816 0%, rgba(5, 8, 22, 0.8) 50%, #050816 100%);
		position: relative;
	}

	.hero-overlay::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
		opacity: 0.03;
		pointer-events: none;
	}

	.hero-title {
		font-family: 'Clash Display', 'Inter', sans-serif;
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
		@apply flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl backdrop-blur-md transition-all duration-300;
	}

	.btn-glass-premium:hover {
		@apply bg-white/10 border-white/20 -translate-y-1;
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

	.cursor {
		display: inline-block;
		color: #fbbf24;
		margin-left: 2px;
		animation: blink 1s step-end infinite;
		font-weight: 300;
	}

	@keyframes blink {
		from,
		to {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
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

	@media (max-width: 768px) {
		.hero-wrap {
			min-height: 82vh !important; /* Slightly tighter for 'best' view */
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.hero-content-anim {
			min-height: auto !important;
			padding-top: 1.5rem !important;
			padding-bottom: 2.5rem !important;
			align-items: center !important;
			justify-content: center !important;
		}

		.hero-copy {
			text-align: center !important;
			align-items: center !important;
		}

		.hero-copy h1 {
			font-family: 'Satoshi', sans-serif !important;
			font-size: 3.2rem !important;
			font-weight: 900 !important;
			line-height: 1.05 !important;
			letter-spacing: -0.04em !important;
			margin-bottom: 1.2rem !important;
		}

		.hero-copy p {
			font-family: 'Inter', sans-serif !important;
			font-size: 0.95rem !important;
			font-weight: 500 !important;
			line-height: 1.6 !important;
			color: rgba(255, 255, 255, 0.85) !important;
			max-width: 95% !important;
			margin-bottom: 2rem !important;
			text-align: center !important;
		}

		.hero-badges-mobile div {
			font-family: 'Satoshi', sans-serif !important;
			font-weight: 800 !important; /* Bolder for 'best weighted' */
			letter-spacing: 0.05em !important;
			border-radius: 4px !important; /* Even sharper 'shapred' look */
		}

		.hero-card {
			display: block !important;
			margin-top: 2rem !important;
			width: 100% !important;
			max-width: 320px !important;
			border-radius: 12px !important;
			transform: none !important;
			box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4) !important;
		}

		.hero-overlay {
			background: linear-gradient(
				to bottom,
				rgba(8, 14, 31, 0.7) 0%,
				rgba(8, 14, 31, 0.3) 50%,
				rgba(8, 14, 31, 0.6) 100%
			) !important; /* Reduced transparency for clearer video */
		}

		.btn-primary-new {
			font-family: 'Satoshi', sans-serif !important;
			font-weight: 900 !important;
			font-size: 1.05rem !important;
			padding: 1rem 2.2rem !important;
			border-radius: 8px !important; /* Match 'shapred' style */
			letter-spacing: 0.02em !important;
		}
	}

	@media (max-width: 640px) {
		/* Mobile Scaling for Hero Badges */
		.hero-card .absolute.top-6 {
			top: 0.65rem !important;
			right: 0.65rem !important;
		}

		.hero-card .absolute.bottom-6 {
			bottom: 0.65rem !important;
			left: 0.65rem !important;
		}

		.hero-card .px-6,
		.hero-card .px-5 {
			padding-left: 0.75rem !important;
			padding-right: 0.75rem !important;
		}

		.hero-card .py-2\.5 {
			padding-top: 0.35rem !important;
			padding-bottom: 0.35rem !important;
		}

		.hero-card .p-4 {
			padding: 0.6rem 0.8rem !important;
		}

		.hero-card h3 {
			font-size: 13px !important;
			margin-bottom: 0.1rem !important;
		}

		.hero-card p {
			font-size: 8px !important;
			letter-spacing: 0.04em !important;
		}

		.hero-card .text-\[11px\] {
			font-size: 8px !important;
			letter-spacing: 0.08em !important;
		}

		.hero-card .w-2\.5 {
			width: 6px !important;
			height: 6px !important;
		}
	}

	@media (max-width: 400px) {
		.hero-copy h1 {
			font-size: 2.4rem !important;
		}
	}
</style>
