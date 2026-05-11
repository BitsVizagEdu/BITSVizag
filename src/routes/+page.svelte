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
	<section class="hero-wrap relative min-h-[78vh] md:min-h-[88vh] overflow-hidden bg-[#14204a]">
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
						class="text-4xl sm:text-5xl md:text-6xl mb-4 font-medium md:font-semibold leading-[1.1] text-center md:text-left"
					>
						Shaping Future
						<span class="typewriter-container block text-[#fbbf24]">
							{displayText}<span class="cursor">|</span>
						</span>
					</h1>

					<p
						class="text-[13px] md:text-lg text-slate-300 leading-relaxed max-w-xl mb-8 font-medium text-center md:text-left px-4 md:px-0"
					>
						Baba Institute of Technology and Sciences is a premier destination for engineering
						excellence. NAAC 'A' accredited, empowering tomorrow's innovators today.
					</p>

					<div class="flex flex-col gap-4 w-full md:flex-row md:items-center">
						<a
							href="https://bitsvizageamcetexamportal1.vercel.app/"
							target="_blank"
							class="btn-primary-new w-full md:w-auto px-8 py-4 bg-[#fbbf24] text-[#080e1f] font-black rounded-xl md:rounded-full text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 flex items-center justify-center gap-3 group"
						>
							EAMCET Portal
							<i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
						</a>
					</div>
				</div>

				<div class="mt-8 w-full lg:mt-0 lg:flex lg:justify-end">
					<div
						class="hero-card relative w-full max-w-lg rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] group cursor-pointer"
					>
						<!-- Deep Vignette Overlay -->
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-70"
						></div>

						<img
							src="/baba.png"
							alt="BITS Vizag Campus"
							class="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
							loading="eager"
						/>

						<!-- Admissions Chip - New Premium Navy & Emerald Design -->
						<div class="absolute top-6 right-6 z-20">
							<div
								class="relative px-6 py-2.5 rounded-full bg-slate-950/70 backdrop-blur-[20px] border border-emerald-500/40 text-[11px] font-black uppercase tracking-[0.15em] text-white flex items-center gap-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.4)] animate-float-glow"
							>
								<span
									class="w-2.5 h-2.5 rounded-full bg-[#34D399] shadow-[0_0_15px_rgba(52,211,153,0.9)] animate-pulse"
								></span>
								Admissions Open 2026
								<!-- High-Impact Shimmer -->
								<div
									class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer-sweep"
								></div>
							</div>
						</div>

						<!-- NAAC Distinction Badge - Premium Navy Glass -->
						<div class="absolute bottom-6 left-6 z-20 w-fit animate-fade-up-reveal">
							<div
								class="p-4 px-6 rounded-2xl bg-slate-950/70 backdrop-blur-[18px] border border-white/12 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
							>
								<div class="flex flex-col">
									<h3 class="text-[17px] font-bold text-white tracking-[0.03em] leading-tight mb-1">
										NAAC 'A' Grade
									</h3>
									<p
										class="text-[11px] text-[#CBD5E1] font-medium uppercase tracking-widest opacity-85"
									>
										UGC Autonomous • AICTE
									</p>
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
			linear-gradient(
				95deg,
				rgba(8, 14, 31, 0.9) 10%,
				rgba(20, 32, 74, 0.7) 50%,
				rgba(20, 32, 74, 0.3) 100%
			),
			radial-gradient(circle at 15% 30%, rgba(251, 191, 36, 0.22), transparent 50%);
	}

	.hero-copy {
		animation: fade-up 0.7s ease-out both;
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
		border-radius: 1.5rem;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.4);
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(12px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
		transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
		z-index: 5;
	}

	.hero-card:hover {
		transform: scale(1.05) translateY(-8px);
		z-index: 10;
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
		border-color: rgba(251, 191, 36, 0.8);
	}

	.hero-card img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 16 / 10;
		transition: transform 0.8s ease;
	}

	.hero-card:hover img {
		transform: scale(1.1);
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
