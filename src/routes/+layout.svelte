<script>
	import { onMount } from 'svelte';

	import '../app.css';
	import Nav from '$lib/components/navmenu.svelte';
	import BackToTop from '$lib/components/backtotop.svelte';
	import Hero from '$lib/components/navbar.svelte';
	import AOS from 'aos';
	import Middlenav from '$lib/components/middlenav.svelte';
	import ScrollProgressBar from '$lib/components/ScrollProgressBar.svelte';
	import LenisScroll from '$lib/components/LenisScroll.svelte';
	import 'aos/dist/aos.css';
	import { showNavBar } from '$lib/stores/store.js';
	import Footer from '$lib/components/footer.svelte';

	let aosInitialized = false;

	onMount(() => {
		// Defer AOS initialization to next frame to avoid blocking render
		if (!aosInitialized) {
			requestAnimationFrame(() => {
				AOS.init();
				aosInitialized = true;
			});
		}
	});
</script>

<svelte:head>
	<!-- Font Preloading for Performance -->
	<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="anonymous" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="preload"
		as="style"
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Noto+Serif:wght@400;600&family=Lato:wght@400;700&family=Roboto:wght@500&display=swap"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Noto+Serif:wght@400;600&family=Lato:wght@400;700&family=Roboto:wght@500&display=swap"
	/>

	<!-- Font Awesome CDN - Async Load -->
	<link
		rel="preload"
		as="style"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
	/>

	<slot name="head" />
</svelte:head>

<LenisScroll>
	<main>
		<!-- Scroll Progress Bar - Always on Top -->
		<ScrollProgressBar />

		{#if $showNavBar}
			<Nav />
		{:else}
			<Hero />
			<Middlenav />

			<BackToTop />
			<slot />
			<Footer />
		{/if}
	</main>
</LenisScroll>
