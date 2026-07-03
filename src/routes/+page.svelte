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
		<!-- Smooth Gradient Vignette Overlay for Premium Contrast -->
		<div class="hero-vignette-overlay"></div>

		<picture class="absolute inset-0 h-full w-full block">
			<source media="(max-width: 768px)" srcset="/bits-hero-mob.png" />
			<img
				src="/hero-bits.png"
				alt="BITS Vizag Campus"
				loading="eager"
				decoding="async"
				fetchpriority="high"
				class="absolute inset-0 h-full w-full object-cover object-bottom z-0 animate-hero-premium"
			/>
		</picture>
	</section>

	<SectionTransition />

	<div id="explore">
		<HighlightsSlider />
	</div>

	<!-- Placements Highlights Banner Section -->
	<section
		class="w-full bg-white py-6 md:py-12 flex items-center justify-center"
		data-aos="fade-up"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 w-full">
			<div
				class="relative group w-full rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 transition-all duration-500 hover:scale-[1.002]"
			>
				<!-- Subtle shine overlay -->
				<div
					class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none"
				></div>
				<a href="/placements">
					<picture class="w-full h-auto block">
						<source media="(max-width: 768px)" srcset="/mob-placements-2.png" />
						<img
							src="/placed-com.png"
							alt="Placements Highlights"
							class="w-full h-auto object-contain block mx-auto rounded-2xl"
						/>
					</picture>
				</a>
			</div>
		</div>
	</section>

	<div class="celebrate-header-container">
		<!-- Soft ambient glows -->
		<div class="ambient-glow top-right-glow"></div>
		<div class="ambient-glow bottom-left-glow"></div>
		
		<div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
			<!-- Premium Badged Eyebrow -->
			<div class="eyebrow-container" data-aos="fade-down">
				<span class="lifestyle-badge">
					<span class="badge-dot"></span>
					STUDENT LIFE
				</span>
			</div>

			<!-- Main Headline -->
			<h2 class="celebrate-title-main" data-aos="fade-up">
				Experience <span class="premium-gradient">Campus Life</span>
			</h2>

			<!-- Description with lines -->
			<div class="description-row" data-aos="fade-up" data-aos-delay="100">
				<span class="side-fade-line left-fade"></span>
				<p class="celebrate-desc">
					Beyond academics, explore a vibrant ecosystem of events, clubs, and moments that define the unforgettable BITS experience.
				</p>
				<span class="side-fade-line right-fade"></span>
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
	@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

	.celebrate-header-container {
		background: #fdfdfd;
		padding: 3rem 0 3rem; /* Reduced top padding by 60-80px */
		overflow: hidden;
		position: relative;
	}

	/* Soft Ambient Glow Elements */
	.ambient-glow {
		position: absolute;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.55;
		pointer-events: none;
		z-index: 1;
	}

	.top-right-glow {
		top: -10%;
		right: -10%;
		width: 450px;
		height: 450px;
		background: radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%);
	}

	.bottom-left-glow {
		bottom: -15%;
		left: -10%;
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%);
	}

	.eyebrow-container {
		margin-bottom: 1.25rem;
	}

	/* Frosted Glass Badge */
	.lifestyle-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(37, 99, 235, 0.06);
		border: 1px solid rgba(37, 99, 235, 0.12);
		padding: 0.45rem 1rem;
		border-radius: 9999px;
		color: #2563eb;
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
	}

	.badge-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: #2563eb;
		animation: pulse-dot 2s infinite;
	}

	@keyframes pulse-dot {
		0%, 100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.2);
			opacity: 0.6;
		}
	}

	.celebrate-title-main {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: clamp(2rem, 3.8vw, 3.8rem);
		font-weight: 800;
		color: #0f172a;
		letter-spacing: -0.02em;
		margin: 0 0 1.75rem;
		line-height: 1.1;
	}

	/* Premium Saturated Blue-Indigo-Violet Palette */
	.premium-gradient {
		background: linear-gradient(135deg, #2563eb 0%, #6366f1 50%, #8b5cf6 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.description-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2.5rem;
		max-width: 860px; /* Widened to read in 2 balanced lines */
		margin: 0 auto;
		width: 100%;
	}

	.celebrate-desc {
		margin: 0;
		font-size: clamp(0.9rem, 1.1rem, 1.1rem);
		line-height: 1.65;
		color: #475569;
		font-weight: 500;
		flex: 1;
		text-align: center;
	}

	.side-fade-line {
		flex: 0 1 120px;
		height: 1px;
	}

	.left-fade {
		background: linear-gradient(to left, rgba(71, 85, 105, 0.25), transparent);
	}

	.right-fade {
		background: linear-gradient(to right, rgba(71, 85, 105, 0.25), transparent);
	}

	@media (max-width: 640px) {
		.celebrate-header-container {
			padding: 2.5rem 0 1.5rem;
		}

		.lifestyle-badge {
			padding: 0.35rem 0.85rem;
			font-size: 0.7rem;
		}

		.celebrate-title-main {
			font-size: 2.1rem;
			margin: 0 0 1rem;
			line-height: 1.15;
			padding: 0 1rem;
		}

		.description-row {
			gap: 1rem;
			padding: 0 1rem;
		}

		.celebrate-desc {
			font-size: 0.9rem;
			line-height: 1.55;
			padding: 0;
		}

		.side-fade-line {
			display: none;
		}

		.hidden-mobile {
			display: none;
		}

		.top-right-glow {
			width: 250px;
			height: 250px;
		}

		.bottom-left-glow {
			width: 250px;
			height: 250px;
		}
	}

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

	/* Compact Metrics Panel Styling - Hidden by default on desktop, shown only on mobile/tablet */
	.metrics-panel {
		display: none;
	}

	@media (max-width: 1023px) {
		.metrics-panel {
			display: grid;
			grid-template-columns: 1fr; /* Stacked: one item per row */
			gap: 12px;
			padding: 16px 24px;
			background: rgba(255, 255, 255, 0.02);
			border: 1.5px solid rgba(255, 255, 255, 0.05);
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
			border-radius: 14px;
			width: 100%;
			max-width: 320px;
			margin: 44px auto 0; /* Pushed down for breathing room */
			box-shadow:
				0 4px 20px rgba(255, 255, 255, 0.01),
				inset 0 1px 1px rgba(255, 255, 255, 0.03),
				inset 0 -1px 1px rgba(255, 255, 255, 0.02);
		}
	}

	.metric-item {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 24px;
	}

	/* Zinc colored text with shining text animation */
	.shine-text {
		font-size: 13.5px; /* Larger font size since they are stacked */
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-shadow: 0 0 10px rgba(255, 255, 255, 0.25);
		background: linear-gradient(90deg, #a1a1aa 30%, #ffffff 50%, #a1a1aa 70%);
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: textShine 4s ease-in-out infinite;
	}

	/* Sequential shine sweeps from 0% to 100% position, then remains static */
	@keyframes textShine {
		0% {
			background-position: 150% center;
		}
		30%,
		100% {
			background-position: -50% center;
		}
	}

	@keyframes heroKenBurns {
		0% {
			opacity: 0;
			transform: scale(1.05) translateY(12px);
		}
		100% {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}
	.animate-hero-premium {
		animation: heroKenBurns 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		will-change: transform, opacity;
	}
	.hero-vignette-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 25%);
		z-index: 1;
		pointer-events: none;
	}
</style>
