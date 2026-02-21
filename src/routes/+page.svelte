<script>
	import Events from '$lib/components/events.svelte';
	import Strength from '$lib/components/strength.svelte';
	import Committies from '$lib/components/committies.svelte';

	import Gallery from '$lib/components/gallery.svelte';
	import Placement from '$lib/components/placement.svelte';
	import { showNavBar, toggleNavBar } from '$lib/stores/store.js';
	import Video from '$lib/components/video.svelte';

	import { onMount } from 'svelte';
	import Placementheader from '$lib/components/placementheader.svelte';
	import Notification from '$lib/components/notification.svelte';
	import Autonomous from '$lib/components/autonomous.svelte';

	function scaleLogo(y) {
		if (typeof y !== 'undefined') {
			document.getElementById('scale-logo').style.transform = `scale(${1 + y / 700})`;
			document.getElementById('scale-logo').style.opacity = `${1 - y / 900}`;
		}
	}

	onMount(() => {});

	let y;
	$: scaleLogo(y);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<svelte:window bind:scrollY={y} />
{#if !$showNavBar}
	<Notification />
	<div id="overlay" class="overlay overflow-hidden relative min-h-[75vh] bg-black">
		<video
			playsinline
			autoplay
			muted
			loop
			style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:0;"
		>
			<source src="/baba.webm" type="video/webm" />
			<source src="/baba.mp4" type="video/mp4" />
		</video>

		<div
			id="scale-logo"
			class="vidlogo absolute flex justify-center items-center h-full w-full"
			style="z-index:1;"
		>
			<img
				src="/logow.svg"
				class="mb-24 w-auto lg:h-52 md:h-44 mr-[-35px] pb-10 3xs:h-24 xs:h-32"
			/>
			<img src="/sq-1.svg" class=" w-auto mb-24 lg:h-60 h-72 md:h-44 3xs:h-24 xs:h-32" />
		</div>
	</div>
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
