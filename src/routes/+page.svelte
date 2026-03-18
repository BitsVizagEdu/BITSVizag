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
</svelte:head>

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
	<div class="h-8 md:h-6 bg-white"></div>
	<CSBanner />
	<div class="h-4 md:h-6 bg-white"></div>
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
	<!-- <a
	href="/application-form" 
	class="cbg fixed  font-bold top-[60%] right-8 transform -translate-y-1/2 translate-x-1/2 -rotate-90 bg-yellow-300 hover:bg-[#02ADEE] hover:text-white text-black px-10 py-4 md:py-8 md:rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
  >
	APPLY NOW
  </a> -->
{/if}

<style>
	.cbg {
		background: linear-gradient(
			to bottom right,
			#dfff00,
			#fd746c,
			#ff8235,
			#ffff1c,
			#92fe9d,
			#00c9ff,
			#a044ff,
			#e73827
		);
		background-repeat: no-repeat;
		background-size: 1000% 1000%;
		animation: gradient 15s ease infinite;
	}
	@keyframes gradient {
		0% {
			background-position: 0% 0%;
		}
		50% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0% 0%;
		}
	}
</style>
