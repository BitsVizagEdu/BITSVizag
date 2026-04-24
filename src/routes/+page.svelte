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
	import Notification from '$lib/components/notification.svelte';
	import Autonomous from '$lib/components/autonomous.svelte';
	import CSHeader from '$lib/components/csheader.svelte';

	let y = 0;

	// Optimized reactive scaling for better performance
	$: logoScale = 1 + y / 700;
	$: logoOpacity = Math.max(0, 1 - y / 900);

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
	<link rel="preload" as="image" href="/CS-Banners/CS-images/1.png" />
	<link rel="preload" as="image" href="/header/T10main.png" />
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
			class="vidlogo absolute flex flex-col sm:flex-row justify-center items-center h-full w-full z-[1] gap-4 sm:gap-0 px-4 will-change-transform-opacity"
			style="transform: scale({logoScale}); opacity: {logoOpacity};"
		>
			<img
				src="/logow.svg"
				alt="BITS Vizag Logo"
				class="w-auto h-20 2xs:h-24 xs:h-32 sm:h-36 md:h-44 lg:h-52 sm:mr-[-20px] md:mr-[-35px] sm:pb-6 md:pb-10 mb-4 sm:mb-24 transition-none"
				decoding="async"
			/>
			<img
				src="/sq-1.svg"
				alt=""
				class="w-auto h-20 2xs:h-24 xs:h-32 sm:h-36 md:h-44 lg:h-60 mb-8 sm:mb-24 transition-none"
				decoding="async"
			/>
		</div>
	</div>

	<CSHeader />
	<Autonomous />

	<h1 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-center py-6 md:py-12 bg-white text-slate-900 tracking-tight">
		CELEBRATE LIFE AT BITS VIZAG
	</h1>

	<div class="content-visibility-auto">
		<Gallery />
	</div>
	<div class="content-visibility-auto">
		<Events />
	</div>
	<div class="content-visibility-auto">
		<Strength />
	</div>

	<div class="content-visibility-auto">
		<Placement />
	</div>
	<div class="content-visibility-auto">
		<Committies />
	</div>
	<!-- <a
	href="/application-form" 
	class="cbg fixed  font-bold top-[60%] right-8 transform -translate-y-1/2 translate-x-1/2 -rotate-90 bg-yellow-300 hover:bg-[#02ADEE] hover:text-white text-black px-10 py-4 md:py-8 md:rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
  >
	APPLY NOW
  </a> -->
{/if}

<style>
	.will-change-transform-opacity {
		will-change: transform, opacity;
		backface-visibility: hidden;
		transform: translateZ(0); /* Force GPU acceleration */
	}
	.content-visibility-auto {
		content-visibility: auto;
		contain-intrinsic-size: 1000px; /* Placeholder height to prevent scrollbar jumping */
	}
</style>
