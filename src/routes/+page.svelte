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
	/** @type {number | null} */
	let animationFrameId = null;
	let y = 0;

	/** @param {number} newY */
	function onScroll(newY) {
		scaleLogo(newY);
	}

	onMount(() => {
		const handleScroll = () => {
			if (animationFrameId !== null) {
				cancelAnimationFrame(animationFrameId);
			}
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
	description="Baba Institute of Technology and Sciences (BITS Vizag),BITS Vizag is a best engineering college in Visakhapatnam, offering a world-class education in various disciplines."
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
	<section class="top-2026-section relative overflow-hidden px-4 pb-10 pt-6 md:pb-14 md:pt-8">
		<div class="pointer-events-none absolute inset-0">
			<div
				class="top-2026-orb top-2026-orb--left absolute -left-12 top-12 h-44 w-44 rounded-full blur-3xl"
			></div>
			<div
				class="top-2026-orb top-2026-orb--right top-2026-orb--delay absolute -right-10 bottom-10 h-56 w-56 rounded-full blur-3xl"
			></div>
		</div>

		<div class="relative mx-auto max-w-5xl" data-aos="fade-up" data-aos-delay="60">
			<div class="top-2026-shell rounded-[30px] border p-1.5">
				<div class="top-2026-inner rounded-[26px] px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
					<div class="grid gap-7 lg:grid-cols-[1.28fr_0.72fr]">
						<div>
							<div
								class="top-2026-badge inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]"
							>
								<span class="h-2 w-2 rounded-full bg-[#d42027]"></span>
								Admissions 2026
							</div>

							<h2
								class="top-2026-title mt-4 text-[28px] font-black leading-tight tracking-tight sm:text-4xl lg:text-[38px]"
							>
								Top Engineering Colleges in Vizag
								<span class="top-2026-title-highlight block">2026 Admissions Open</span>
							</h2>

							<p class="top-2026-copy mt-4 max-w-2xl text-[15px] leading-relaxed">
								A student-first campus with practical labs, mentor-led learning, and placement-ready
								training designed for real career outcomes.
							</p>

							<div class="mt-5 flex flex-wrap gap-2.5 text-[11px] font-semibold uppercase tracking-[0.12em]">
								<span class="top-2026-chip">Industry Aligned Curriculum</span>
								<span class="top-2026-chip">Placement Driven Training</span>
								<span class="top-2026-chip">Global Career Readiness</span>
							</div>

							<div class="mt-6 grid gap-3 sm:grid-cols-2">
								<article class="top-2026-card rounded-2xl p-4 sm:p-5">
									<h3 class="top-2026-subtitle text-base font-bold">Mission</h3>
									<p class="top-2026-copy mt-2 text-sm leading-relaxed">
										Create confident engineers through outcome-based learning, discipline, and
										industry immersion.
									</p>
								</article>
								<article class="top-2026-card rounded-2xl p-4 sm:p-5">
									<h3 class="top-2026-subtitle text-base font-bold">Goal</h3>
									<p class="top-2026-copy mt-2 text-sm leading-relaxed">
										Build employable graduates with technical depth, ethical values, and real-world
										problem solving skills.
									</p>
								</article>
							</div>
						</div>

						<aside class="top-2026-side rounded-2xl p-5 sm:p-6">
							<h3 class="top-2026-subtitle text-lg font-extrabold tracking-wide">Why BITS Vizag in 2026</h3>
							<ul class="top-2026-copy mt-4 space-y-3.5 text-sm leading-relaxed">
								<li class="flex items-start gap-3">
									<span class="top-2026-dot mt-1.5"></span>
									Modern labs and experienced faculty focused on concept clarity.
								</li>
								<li class="flex items-start gap-3">
									<span class="top-2026-dot mt-1.5"></span>
									Career pathway support with internships and placement mentoring.
								</li>
								<li class="flex items-start gap-3">
									<span class="top-2026-dot mt-1.5"></span>
									Student clubs and projects that build leadership and confidence.
								</li>
							</ul>

							<a
								href="/contactus"
								class="top-2026-cta mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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
	.top-2026-section {
		font-family: 'Roboto', 'Segoe UI', sans-serif;
		background:
			radial-gradient(980px 420px at -8% -20%, rgba(255, 171, 92, 0.28), transparent 57%),
			radial-gradient(900px 420px at 104% 112%, rgba(125, 226, 173, 0.22), transparent 58%),
			linear-gradient(135deg, #fffaf4 0%, #f8fffb 42%, #f5f9ff 100%);
	}

	.top-2026-shell {
		border-color: rgba(236, 168, 89, 0.45);
		background: linear-gradient(120deg, #ffc58a 0%, #78dba8 50%, #89b8ff 100%);
		background-size: 200% 200%;
		box-shadow: 0 24px 50px rgba(243, 163, 84, 0.22);
		animation: top2026-pan 18s ease-in-out infinite;
	}

	.top-2026-inner {
		background:
			radial-gradient(700px 300px at -4% -20%, rgba(255, 197, 129, 0.24), transparent 58%),
			linear-gradient(125deg, rgba(255, 255, 255, 0.96), rgba(249, 254, 255, 0.92));
	}

	.top-2026-orb {
		animation: top2026-float 8s ease-in-out infinite;
	}

	.top-2026-orb--left {
		background: rgba(255, 177, 110, 0.74);
	}

	.top-2026-orb--right {
		background: rgba(116, 222, 170, 0.72);
	}

	.top-2026-orb--delay {
		animation-delay: -4s;
	}

	.top-2026-badge {
		border-color: rgba(255, 159, 57, 0.42);
		background: rgba(255, 214, 166, 0.3);
		color: #954900;
		animation: top2026-pulse 4s ease-in-out infinite;
	}

	.top-2026-title {
		color: #17304e;
	}

	.top-2026-title-highlight {
		background: linear-gradient(90deg, #f68500 0%, #2ea76d 55%, #2c84df 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.top-2026-copy {
		color: #3e5874;
	}

	.top-2026-subtitle {
		color: #1d3c60;
	}

	.top-2026-chip {
		padding: 0.42rem 0.75rem;
		border-radius: 9999px;
		border: 1px solid rgba(240, 160, 86, 0.35);
		background: linear-gradient(145deg, rgba(255, 234, 207, 0.85), rgba(255, 255, 255, 0.95));
		color: #894400;
	}

	.top-2026-chip:nth-child(2) {
		border-color: rgba(76, 183, 132, 0.34);
		background: linear-gradient(145deg, rgba(220, 252, 235, 0.9), rgba(248, 255, 250, 0.95));
		color: #176a44;
	}

	.top-2026-chip:nth-child(3) {
		border-color: rgba(83, 155, 235, 0.35);
		background: linear-gradient(145deg, rgba(225, 240, 255, 0.9), rgba(247, 251, 255, 0.95));
		color: #1c518c;
	}

	.top-2026-card {
		border: 1px solid rgba(83, 155, 235, 0.22);
		background: linear-gradient(160deg, rgba(255, 255, 255, 0.86), rgba(244, 251, 255, 0.82));
		backdrop-filter: blur(4px);
		transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
	}

	.top-2026-card:hover {
		transform: translateY(-4px);
		border-color: rgba(81, 157, 235, 0.4);
		box-shadow: 0 16px 26px rgba(86, 160, 234, 0.2);
	}

	.top-2026-side {
		border: 1px solid rgba(77, 178, 129, 0.25);
		background: linear-gradient(160deg, rgba(234, 255, 243, 0.78), rgba(239, 248, 255, 0.82));
		backdrop-filter: blur(4px);
	}

	.top-2026-dot {
		height: 0.46rem;
		width: 0.46rem;
		flex-shrink: 0;
		border-radius: 9999px;
		background: #f79526;
		box-shadow: 0 0 0 3px rgba(247, 149, 38, 0.2);
	}

	.top-2026-cta {
		background: linear-gradient(100deg, #ff9d36, #31b978 58%, #3692ec);
		color: #ffffff;
		border: 1px solid rgba(255, 255, 255, 0.45);
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
			box-shadow: 0 0 0 0 rgba(255, 157, 54, 0.22);
		}
		70% {
			box-shadow: 0 0 0 8px rgba(255, 157, 54, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(255, 157, 54, 0);
		}
	}

	@media (max-width: 640px) {
		.top-2026-shell {
			border-radius: 22px;
		}

		.top-2026-inner {
			border-radius: 18px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.top-2026-shell,
		.top-2026-orb,
		.top-2026-badge {
			animation: none !important;
		}
	}
</style>
