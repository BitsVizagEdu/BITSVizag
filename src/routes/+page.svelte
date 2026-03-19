<script>
	import Events from '$lib/components/events.svelte';
	import Strength from '$lib/components/strength.svelte';
	import Committies from '$lib/components/committies.svelte';
	import Seo from '$lib/components/Seo.svelte';

	import Gallery from '$lib/components/gallery.svelte';
	import Placement from '$lib/components/placement.svelte';
	import { showNavBar, toggleNavBar } from '$lib/stores/store.js';
	import Video from '$lib/components/video.svelte';

	import { onMount } from 'svelte';
	import Placementheader from '$lib/components/placementheader.svelte';
	import Notification from '$lib/components/notification.svelte';
	import Autonomous from '$lib/components/autonomous.svelte';
	import CSBanner from '$lib/components/csbanner.svelte';

	/** @param {number} y */
	function scaleLogo(y) {
		if (typeof y !== 'undefined' && typeof document !== 'undefined') {
			const logoElement = document.getElementById('scale-logo');
			if (logoElement) {
				logoElement.style.transform = `scale(${1 + y / 700})`;
				logoElement.style.opacity = `${1 - y / 900}`;
			}
		}
	}

	let lastScrollY = 0;
	let animationFrameId = null;
	let y = 0;

	function onScroll(newY) {
		scaleLogo(newY);
	}

	onMount(() => {
		const handleScroll = () => {
			cancelAnimationFrame(animationFrameId);
			animationFrameId = requestAnimationFrame(() => {
				onScroll(window.scrollY);
			});
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
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
	description="Bhogawati Institute of Technology and Science (BITS Vizag), a premier engineering college in Visakhapatnam, offering a world-class education in various disciplines."
	url="https://bitsvizag.com"
	imageUrl="https://bitsvizag.com/logo-150-2/logo-150-2.png"
	siteName="BITS Vizag"
	{structuredData}
/>

<svelte:head>
	<title>Home</title>
	<link rel="preload" as="image" href="/CS-Banners/1.webp" type="image/webp" />
	<link rel="preload" as="image" href="/header/T10main.webp" type="image/webp" />
</svelte:head>

<svelte:window bind:scrollY={y} />
{#if !$showNavBar}
	<Notification />
	<div
		id="overlay"
		class="overlay overflow-hidden relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[75vh] bg-black"
	>
		<video
			playsinline
			autoplay
			muted
			loop
			class="absolute top-0 left-0 w-full h-full object-cover z-0"
		>
			<source src="/baba.webm" type="video/webm" />
			<source src="/baba.mp4" type="video/mp4" />
		</video>
		<div
			id="scale-logo"
			class="vidlogo absolute flex flex-col sm:flex-row justify-center items-center h-full w-full z-[1] gap-4 sm:gap-0 px-4"
		>
			<img
				src="/logow.svg"
				alt="BITS Vizag Logo"
				class="w-auto h-20 2xs:h-24 xs:h-32 sm:h-36 md:h-44 lg:h-52 sm:mr-[-20px] md:mr-[-35px] sm:pb-6 md:pb-10 mb-4 sm:mb-24 drop-shadow-2xl"
			/>
			<img
				src="/sq-1.svg"
				alt=""
				class="w-auto h-20 2xs:h-24 xs:h-32 sm:h-36 md:h-44 lg:h-60 mb-8 sm:mb-24 drop-shadow-2xl"
			/>
		</div>
	</div>
	<!-- <div class="h-4 md:h-12 bg-white"></div>
	<div class="bg-black">
		<video
			playsinline
			autoplay
			muted
			loop
			preload="auto"
			class="w-full h-auto block pointer-events-none select-none"
		>
			<source
				src="/gallery/Black%20White%20Welcome%20To%20My%20Chanel%20YouTube%20Intro%20(online-video-cutter.com).mp4"
				type="video/mp4"
			/>
			Your browser does not support the video tag.
		</video>
	</div> -->

	<div class="h-4 md:h-12 bg-white"></div>
	<CSBanner />
	<div class="h-4 md:h-12 bg-white"></div>
	<Autonomous />
	<Placementheader />
	

	<h1 class="3xs:text-lg xs:text-xl md:text-4xl font-bold text-center p-4 md:p-10 bg-white">
		CELEBRATE LIFE AT BITS VIZAG
	</h1>

	<Gallery />
	<Events />
	<Strength />

	<Placement />
	<Committies />
	<section
		class="relative overflow-hidden bg-white px-4 pb-16 pt-8 md:pb-24 font-roboto"
		style="font-family: 'Roboto', sans-serif;"
	>
		<div class="pointer-events-none absolute inset-0">
			<div
				class="top-2026-orb absolute -left-12 top-12 h-44 w-44 rounded-full bg-blue-100/80 blur-3xl"
			></div>
			<div
				class="top-2026-orb top-2026-orb--delay absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-sky-100/80 blur-3xl"
			></div>
		</div>

		<div class="relative mx-auto max-w-6xl" data-aos="fade-up" data-aos-delay="60">
			<div class="top-2026-shell rounded-[30px] border border-[#1b376d] p-1.5 shadow-[0_24px_60px_rgba(12,22,55,0.22)]">
				<div class="rounded-[26px] bg-[#0f1f4a] px-6 py-7 text-white sm:px-8 sm:py-8 lg:px-10 lg:py-10">
					<div class="grid gap-7 lg:grid-cols-[1.28fr_0.72fr]">
						<div>
							<div
								class="top-2026-badge inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-100"
							>
								<span class="h-2 w-2 rounded-full bg-[#d42027]"></span>
								Admissions 2026
							</div>

							<h2 class="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
								Top Engineering Colleges in Vizag
								<span class="block text-[#9fd3ff]">2026 Admissions Open</span>
							</h2>

							<p class="mt-4 max-w-2xl text-[15px] leading-relaxed text-blue-100">
								BITS Vizag empowers future engineers with academic excellence, practical innovation,
								and value-based mentoring. Study in a campus where ambition, discipline, and career
								outcomes move together.
							</p>

							<div class="mt-5 flex flex-wrap gap-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-100">
								<span class="top-2026-chip">Industry Aligned Curriculum</span>
								<span class="top-2026-chip">Placement Driven Training</span>
								<span class="top-2026-chip">Leadership and Values</span>
							</div>

							<div class="mt-7 grid gap-4 sm:grid-cols-2">
								<article class="top-2026-card rounded-2xl p-5">
									<h3 class="text-base font-bold text-white">Mission</h3>
									<p class="mt-2 text-sm leading-relaxed text-blue-100">
										To deliver world-class technical education through innovation, research mindset,
										and industry exposure that transforms students into competent professionals.
									</p>
								</article>
								<article class="top-2026-card rounded-2xl p-5">
									<h3 class="text-base font-bold text-white">Goal</h3>
									<p class="mt-2 text-sm leading-relaxed text-blue-100">
										To shape every learner into a confident engineer with strong employability,
										ethical values, and the ability to create meaningful impact in society.
									</p>
								</article>
							</div>
						</div>

						<aside class="top-2026-side rounded-2xl p-5 sm:p-6">
							<h3 class="text-lg font-extrabold tracking-wide text-white">Why BITS Vizag in 2026</h3>
							<ul class="mt-4 space-y-3.5 text-sm leading-relaxed text-blue-100">
								<li class="flex items-start gap-3">
									<span class="top-2026-dot mt-1.5"></span>
									Modern labs, experienced faculty, and consistent academic mentoring.
								</li>
								<li class="flex items-start gap-3">
									<span class="top-2026-dot mt-1.5"></span>
									Career-focused ecosystem with internships, placement training, and guidance.
								</li>
								<li class="flex items-start gap-3">
									<span class="top-2026-dot mt-1.5"></span>
									Student life that nurtures leadership, confidence, and real-world readiness.
								</li>
							</ul>

							<a
								href="/contactus"
								class="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0c1637] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
							>
								Start Your Journey
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
									<path
										d="M5 12h14m0 0-6-6m6 6-6 6"
										stroke="currentColor"
										stroke-width="1.8"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
						</aside>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- <a
	href="/application-form" 
	class="cbg fixed  font-bold top-[60%] right-8 transform -translate-y-1/2 translate-x-1/2 -rotate-90 bg-yellow-300 hover:bg-[#02ADEE] hover:text-white text-black px-10 py-4 md:py-8 md:rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
  >
	APPLY NOW
  </a> -->
{/if}

<style>
	.top-2026-shell {
		background: linear-gradient(120deg, #0a1942 0%, #1f4f9e 50%, #0a1942 100%);
		background-size: 200% 200%;
		animation: top2026-pan 16s ease-in-out infinite;
	}

	.top-2026-orb {
		animation: top2026-float 9s ease-in-out infinite;
	}

	.top-2026-orb--delay {
		animation-delay: -4s;
	}

	.top-2026-badge {
		animation: top2026-pulse 4s ease-in-out infinite;
	}

	.top-2026-chip {
		padding: 0.42rem 0.75rem;
		border-radius: 9999px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.1);
	}

	.top-2026-card {
		border: 1px solid rgba(255, 255, 255, 0.24);
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(4px);
		transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
	}

	.top-2026-card:hover {
		transform: translateY(-4px);
		border-color: rgba(255, 255, 255, 0.35);
		box-shadow: 0 16px 26px rgba(4, 12, 34, 0.25);
	}

	.top-2026-side {
		border: 1px solid rgba(255, 255, 255, 0.26);
		background: linear-gradient(160deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.07));
		backdrop-filter: blur(4px);
	}

	.top-2026-dot {
		height: 0.46rem;
		width: 0.46rem;
		flex-shrink: 0;
		border-radius: 9999px;
		background: #64ccff;
		box-shadow: 0 0 0 3px rgba(100, 204, 255, 0.2);
	}

	@keyframes top2026-pan {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes top2026-float {
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

	@keyframes top2026-pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(212, 32, 39, 0.14);
		}
		70% {
			box-shadow: 0 0 0 8px rgba(212, 32, 39, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(212, 32, 39, 0);
		}
	}
</style>
