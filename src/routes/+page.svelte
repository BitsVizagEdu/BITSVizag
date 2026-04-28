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
				<div class="hero-copy text-white text-left items-start flex flex-col">
					<div class="hero-badges hidden md:flex items-center gap-4 mb-8">
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
					</div>

					<h1 class="text-6xl md:hero-title mb-6 font-semibold leading-tight">
						Shaping Future
						<span class="typewriter-container block text-[#fbbf24] font-black">
							{displayText}<span class="cursor">|</span>
						</span>
					</h1>

					<p class="text-sm md:text-lg text-slate-300 leading-relaxed max-w-xl mb-10 font-medium">
						A premier destination for engineering excellence, empowering innovation, research, and
						real-world impact.
					</p>

					<div class="flex flex-col gap-4 w-full md:flex-row md:items-center">
						<a
							href="/application-form"
							class="btn-primary-new w-full md:w-auto px-10 py-4 bg-[#fbbf24] text-[#080e1f] font-semibold rounded-full text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300"
							>Start Your Journey</a
						>
						<a
							href="/campus"
							class="btn-secondary-new w-full md:w-auto px-10 py-4 border-2 border-white/40 text-white font-semibold rounded-full text-center hover:bg-white/10 hover:border-white transition-all duration-300"
							>Explore Campus</a
						>
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

						<!-- Admissions Chip - Premium Shine -->
						<div class="absolute top-6 right-6 z-20">
							<div
								class="relative px-5 py-2 rounded-full bg-slate-950/90 backdrop-blur-xl border border-emerald-500/30 text-[10px] font-black uppercase tracking-[0.15em] text-emerald-400 flex items-center gap-2 shadow-xl"
							>
								<span
									class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"
								></span>
								Admissions Open 2026
								<!-- Shimmer Animation -->
								<div
									class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
								></div>
							</div>
						</div>

						<!-- NAAC Distinction Badge - 'Text Only' -->
						<div class="absolute bottom-6 left-6 z-20 w-fit">
							<div
								class="p-2 px-4 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/10 shadow-xl"
							>
								<div class="flex flex-col">
									<h3 class="text-[15px] font-black text-white leading-none mb-1">
										NAAC 'A' Grade
									</h3>
									<p class="text-[9px] text-white/60 font-bold uppercase tracking-wider">
										UGC Autonomous • AICTE
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="social-rail hidden md:flex" aria-label="Social links">
			<a
				class="social-btn maps"
				href="https://www.google.com/maps/search/?api=1&query=Baba+college+Lake+near+Pothinamallayyapalem+Pothinamallayya+Palem+Bakkanapalem+Andhra+Pradesh+530048"
				target="_blank"
				rel="noreferrer"
				aria-label="Google Maps"
			>
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path
						fill="#EA4335"
						d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
					/>
					<path
						fill="#FBBC04"
						d="M12 2C8.13 2 5 5.13 5 9c0 1.5.6 2.8 1.5 3.9l5.5 5.5 5.5-5.5c.9-1.1 1.5-2.4 1.5-3.9 0-3.87-3.13-7-7-7z"
					/>
					<path
						fill="#34A853"
						d="M12 22s-7-7.75-7-13c0-1.1.2-2.2.7-3.2l6.3 6.3 6.3-6.3c.5 1 .7 2.1.7 3.2 0 5.25-7 13-7 13z"
					/>
					<path fill="#4285F4" d="M12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
				</svg>
			</a>
			<a
				class="social-btn instagram"
				href="https://www.instagram.com/bits_vizag_official/"
				target="_blank"
				rel="noreferrer"
				aria-label="Instagram"
			>
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z"
					/>
				</svg>
			</a>
			<a
				class="social-btn whatsapp"
				href="https://whatsapp.com/channel/0029VaU1VjEJkK7Gz9iBjP1B"
				target="_blank"
				rel="noreferrer"
				aria-label="WhatsApp"
			>
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.886-.001 2.225.614 3.391 1.743 5.352l-1.014 3.704 3.763-.986zm11.387-5.477c-.301-.15-1.785-.881-2.06-.982-.276-.1-.476-.15-.676.15-.2.3-.775 1.002-.95 1.202-.175.2-.35.225-.65.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.497-1.783-1.672-2.083-.175-.3-.018-.462.13-.611.134-.133.301-.351.451-.526.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.628-.926-2.228-.244-.585-.491-.507-.676-.516-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.051 1.027-1.051 2.503s1.076 2.903 1.226 3.103c.15.2 2.117 3.232 5.128 4.534.715.311 1.273.497 1.708.635.719.227 1.373.195 1.89.117.577-.088 1.785-.73 2.035-1.434.25-.703.25-1.305.175-1.433-.075-.126-.275-.201-.576-.351z"
					/>
				</svg>
			</a>
			<a
				class="social-btn linkedin"
				href="https://www.linkedin.com/company/bits-vizag/"
				target="_blank"
				rel="noreferrer"
				aria-label="LinkedIn"
			>
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
					/>
				</svg>
			</a>
			<a
				class="social-btn youtube"
				href="https://youtube.com/@bitsmediacenter8449?si=JN_U0Jpt5ju3sLhL"
				target="_blank"
				rel="noreferrer"
				aria-label="YouTube"
			>
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
					/>
				</svg>
			</a>
			<a
				class="social-btn x-twitter"
				href="https://x.com/bits_vizag"
				target="_blank"
				rel="noreferrer"
				aria-label="X (Twitter)"
			>
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
					/>
				</svg>
			</a>
		</div>
	</section>

	<SectionTransition />

	<HighlightsSlider />

	<div class="celebrate-header-container py-10 md:py-16 bg-white overflow-hidden relative">
		<!-- Subtle decorative background element -->
		<div
			class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-amber-50/50 blur-[100px] rounded-full -z-0"
		></div>

		<div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
			<div class="inline-flex items-center gap-3 mb-4" data-aos="fade-down">
				<span class="h-[1px] w-6 bg-blue-400"></span>
				<span class="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px]"
					>Lifestyle & Culture</span
				>
				<span class="h-[1px] w-6 bg-blue-400"></span>
			</div>

			<h2
				class="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900/90 tracking-normal mb-6"
				data-aos="fade-up"
			>
				CELEBRATE LIFE AT
				<span class="text-blue-700">BITS VIZAG</span>
			</h2>

			<p
				class="max-w-xl mx-auto text-slate-500 font-medium text-xs md:text-base leading-relaxed mb-8"
				data-aos="fade-up"
				data-aos-delay="100"
			>
				Beyond academics, explore a vibrant ecosystem of events, clubs, and moments that define the
				unforgettable BITS experience.
			</p>

			<div class="flex items-center justify-center gap-2" data-aos="zoom-in" data-aos-delay="200">
				<div class="h-1 w-1 rounded-full bg-blue-400"></div>
				<div class="h-1 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
				<div class="h-1 w-1 rounded-full bg-blue-500"></div>
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

	.social-rail {
		position: absolute;
		right: 1.1rem;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		gap: 0.62rem;
		z-index: 4;
		background: rgba(255, 255, 255, 0.12);
		backdrop-filter: blur(6px);
		padding: 0.45rem 0.35rem;
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.22);
	}

	.social-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.28rem;
		height: 2.28rem;
		color: #ffffff;
		border: 1px solid rgba(255, 255, 255, 0.5);
		border-radius: 999px;
		transition:
			transform 0.22s ease,
			box-shadow 0.22s ease,
			filter 0.22s ease;
		animation: iconFloat 4s ease-in-out infinite;
	}

	.social-btn:nth-child(2) {
		animation-delay: 0.2s;
	}
	.social-btn:nth-child(3) {
		animation-delay: 0.4s;
	}
	.social-btn:nth-child(4) {
		animation-delay: 0.6s;
	}
	.social-btn:nth-child(5) {
		animation-delay: 0.8s;
	}
	.social-btn:nth-child(6) {
		animation-delay: 1s;
	}

	@keyframes iconFloat {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-6px);
		}
	}

	.social-btn.maps {
		background: #ffffff;
		border-color: #e2e8f0;
	}

	.social-btn.maps svg {
		width: 1.1rem;
		height: 1.1rem;
	}

	.social-btn.instagram {
		background: linear-gradient(
			45deg,
			#f09433 0%,
			#e6683c 25%,
			#dc2743 50%,
			#cc2366 75%,
			#bc1888 100%
		);
	}

	.social-btn.whatsapp {
		background: #25d366;
	}

	.social-btn.linkedin {
		background: #0077b5;
	}

	.social-btn.youtube {
		background: #ff0000;
	}

	.social-btn.x-twitter {
		background: #000000;
	}

	.social-btn svg {
		width: 1.1rem;
		height: 1.1rem;
		fill: #ffffff;
		transition: fill 0.3s ease;
	}

	.social-btn {
		filter: grayscale(1) opacity(0.8);
		background: rgba(255, 255, 255, 0.1) !important;
		border-color: rgba(255, 255, 255, 0.3) !important;
	}

	.social-btn:hover {
		filter: grayscale(0) opacity(1);
		transform: scale(1.1) translateY(-3px);
	}

	.social-btn.maps:hover {
		background: #ffffff !important;
	}
	.social-btn.instagram:hover {
		background: linear-gradient(
			45deg,
			#f09433 0%,
			#e6683c 25%,
			#dc2743 50%,
			#cc2366 75%,
			#bc1888 100%
		) !important;
	}
	.social-btn.whatsapp:hover {
		background: #25d366 !important;
	}
	.social-btn.linkedin:hover {
		background: #0077b5 !important;
	}
	.social-btn.youtube:hover {
		background: #ff0000 !important;
	}
	.social-btn.x-twitter:hover {
		background: #000000 !important;
	}

	.social-btn.maps svg {
		fill: none;
	}

	.content-visibility-auto {
		content-visibility: auto;
		contain-intrinsic-size: 1000px; /* Placeholder height to prevent scrollbar jumping */
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

	@media (max-width: 768px) {
		.social-rail {
			right: 0.35rem;
			gap: 0.4rem;
			padding: 0.3rem 0.2rem;
		}

		.social-btn {
			width: 1.9rem;
			height: 1.9rem;
		}

		.social-btn svg {
			width: 0.86rem;
			height: 0.86rem;
		}
	}
</style>
