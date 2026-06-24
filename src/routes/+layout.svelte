<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { navigating } from '$app/stores';

	import '../app.css';
	import Nav from '$lib/components/navmenu.svelte';
	import BackToTop from '$lib/components/backtotop.svelte';
	import Hero from '$lib/components/navbar.svelte';
	import Middlenav from '$lib/components/middlenav.svelte';
	import ScrollProgressBar from '$lib/components/ScrollProgressBar.svelte';
	import LenisScroll from '$lib/components/LenisScroll.svelte';
	import 'aos/dist/aos.css';
	import { showNavBar } from '$lib/stores/store.js';
	import Footer from '$lib/components/footer.svelte';
	import MobileHeader from '$lib/components/MobileHeader.svelte';

	let aosInitialized = false;
	let showWelcomeOverlay = false;
	let welcomeTimer;
	let welcomeAnimationFrame = 0;
	let hideSocialRail = false;

	function handleScroll() {
		if (typeof window === 'undefined') return;
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = window.innerHeight;
		
		// Hide social rail when within 400px of the footer
		if (scrollHeight - scrollTop - clientHeight < 400) {
			hideSocialRail = true;
		} else {
			hideSocialRail = false;
		}
	}

	function closeWelcome() {
		showWelcomeOverlay = false;
		localStorage.setItem('bits_has_seen_welcome', 'true');
	}

	onMount(() => {
		// Only display welcome overlay if the user hasn't visited in this browser session
		const hasSeen = localStorage.getItem('bits_has_seen_welcome');
		if (!hasSeen && window.location.pathname === '/') {
			welcomeTimer = setTimeout(() => {
				showWelcomeOverlay = true;
			}, 1500);
		}

		if (!aosInitialized) {
			welcomeAnimationFrame = requestAnimationFrame(async () => {
				const { default: AOS } = await import('aos');
				AOS.init({
					once: true,
					duration: 650,
					offset: 80,
				});
				aosInitialized = true;
			});
		}

		return () => {
			if (welcomeTimer) {
				clearTimeout(welcomeTimer);
				welcomeTimer = undefined;
			}
			if (welcomeAnimationFrame) {
				cancelAnimationFrame(welcomeAnimationFrame);
				welcomeAnimationFrame = 0;
			}
		};
	});
</script>

<svelte:window on:scroll={handleScroll} />

<svelte:head>
	<!-- Font Preconnect for Performance -->
	<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="anonymous" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link rel="preconnect" href="https://api.fontshare.com" crossorigin="anonymous" />

	<!-- Non-blocking font load: media=print swapped to all onload -->
	<link
		rel="stylesheet"
		media="print"
		{...{ onload: "this.media='all'" }}
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Outfit:wght@400;600;700;800;900&family=Lato:wght@400;700&display=swap"
	/>
	<link
		rel="stylesheet"
		media="print"
		{...{ onload: "this.media='all'" }}
		href="https://api.fontshare.com/v2/css?f[]=satoshi@700,900,400,500&display=swap"
	/>

	<!-- Font Awesome CDN - Non-blocking -->
	<link
		rel="stylesheet"
		media="print"
		{...{ onload: "this.media='all'" }}
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
	/>

	<slot name="head" />
</svelte:head>

{#if $showNavBar}
	<Nav />
{/if}

<LenisScroll>
	<main>
		<!-- Scroll Progress Bar - Always on Top -->
		<ScrollProgressBar />

		<!-- Navigation Progress Bar -->
		{#if $navigating}
			<div class="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 z-[100000] animate-loading-bar" style="will-change: transform;"></div>
		{/if}

		{#if showWelcomeOverlay}
			<div
				out:fade={{ duration: 600 }}
				class="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050816]/95 backdrop-blur-2xl p-2 sm:p-4 select-none"
				style="will-change: opacity;"
			>
				<!-- Atmospheric Glows -->
				<div
					class="absolute -top-[20%] left-[20%] w-[500px] h-[500px] bg-[#7C4DFF]/10 blur-[120px] rounded-full pointer-events-none"
				></div>
				<div
					class="absolute -bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#FF4FD8]/10 blur-[120px] rounded-full pointer-events-none"
				></div>

				<div
					class="relative max-w-5xl md:max-w-6xl lg:max-w-[85vw] w-full flex flex-col items-center animate-fade-in px-2 sm:px-4"
				>
					<!-- Clickable Premium Image Container -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<div
						on:click={closeWelcome}
						class="relative group cursor-pointer rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_35px_80px_rgba(0,0,0,0.85)] hover:scale-[1.005] hover:border-amber-500/40 transition-all duration-500"
					>
						<!-- Neon Edge Glow -->
						<div
							class="absolute -inset-0.5 bg-gradient-to-br from-[#7C4DFF] via-[#FF4FD8] to-[#00D4FF] rounded-2xl sm:rounded-[2rem] blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500"
						></div>

						<div class="relative bg-[#080e1f] rounded-2xl sm:rounded-[2rem] overflow-hidden">
							<picture>
								<source media="(max-width: 768px)" srcset="/mobile-overlay.png" />
								<img
									src="/welcomr-overlay.png"
									alt="Welcome to BITS Vizag"
									class="w-full h-auto object-cover max-h-[90vh] sm:max-h-[85vh] lg:max-h-[90vh] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
								/>
							</picture>
						</div>
					</div>
				</div>
			</div>
		{/if}

		<div
			class="social-rail flex fixed right-3 bottom-20 z-[100] transition-all duration-300 {$showNavBar || hideSocialRail
				? 'opacity-0 pointer-events-none translate-y-4'
				: 'opacity-100 translate-y-0'}"
			aria-label="Social links"
		>
			<a
				class="social-btn maps scale-110"
				href="https://www.google.com/maps/search/?api=1&query=Baba+college+Lake+near+Pothinamallayyapalem+Pothinamallayya+Palem+Bakkanapalem+Andhra+Pradesh+530048"
				target="_blank"
				rel="noreferrer"
				aria-label="Google Maps"
			>
				<svg viewBox="0 0 256 394" aria-hidden="true">
					<path
						fill="#4285F4"
						d="M128 0C57.308 0 0 57.308 0 128c0 22.81 12.062 50.36 30.654 81.31l97.346 184.69 97.346-184.69c18.592-30.95 30.654-58.5 30.654-81.31C256 57.308 198.692 0 128 0z"
					/>
					<path
						fill="#EA4335"
						d="M128 0C78.432 0 35.808 28.16 16 69.12l81.92 104.96L128 128l30.08 46.08 81.92-104.96C220.192 28.16 177.568 0 128 0z"
					/>
					<path
						fill="#FBBC04"
						d="M16 69.12C5.888 88.064 0 107.52 0 128c0 22.81 12.062 50.36 30.654 81.31l97.346 42.69-30.08-78.08L16 69.12z"
					/>
					<path
						fill="#34A853"
						d="M240 69.12c10.112 18.944 16 38.4 16 58.88 0 22.81-12.062 50.36-30.654 81.31l-97.346 42.69 30.08-78.08L240 69.12z"
					/>
					<circle fill="#ffffff" cx="128" cy="128" r="48" />
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

		{#if !$showNavBar}
			<MobileHeader />
			<Hero />
			<Middlenav />

			<BackToTop />
			<slot />
			<Footer />
		{/if}
	</main>
</LenisScroll>

<style>
	:global(.social-rail) {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(8px);
		padding: 0.5rem 0.35rem;
		border-radius: 1.25rem;
		border: 1px solid rgba(255, 255, 255, 0.25);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
	}

	:global(.social-btn) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		color: #ffffff;
		border: 1px solid rgba(255, 255, 255, 0.4);
		border-radius: 50%;
		transition: all 0.3s ease;
		background: rgba(255, 255, 255, 0.1);
	}

	:global(.social-btn svg) {
		width: 1rem;
		height: 1rem;
		fill: #ffffff;
	}

	:global(.social-btn:hover) {
		transform: scale(1.1) translateX(-3px);
		background: #fbbf24 !important;
		border-color: #fbbf24 !important;
	}

	:global(.social-btn.maps) {
		background: rgba(255, 255, 255, 0.1) !important;
		border-color: rgba(255, 255, 255, 0.4);
	}
	:global(.social-btn.maps svg) {
		width: 1.7rem !important;
		height: 1.7rem !important;
	}
	:global(.social-btn.instagram) {
		background: linear-gradient(
			45deg,
			#f09433 0%,
			#e6683c 25%,
			#dc2743 50%,
			#cc2366 75%,
			#bc1888 100%
		);
	}
	:global(.social-btn.whatsapp) {
		background: #25d366;
	}
	:global(.social-btn.linkedin) {
		background: #0077b5;
	}
	:global(.social-btn.youtube) {
		background: #ff0000;
	}
	:global(.social-btn.x-twitter) {
		background: #000000;
	}

	:global(.social-btn.instagram:hover) {
		background: linear-gradient(
			45deg,
			#f09433 0%,
			#e6683c 25%,
			#dc2743 50%,
			#cc2366 75%,
			#bc1888 100%
		) !important;
	}

	@media (max-width: 768px) {
		:global(.social-rail) {
			right: 0.5rem !important;
			top: auto !important;
			bottom: 5.5rem !important;
			transform: none !important;
			scale: 0.85;
		}
	}

	@keyframes fadeInWelcome {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.animate-fade-in {
		animation: fadeInWelcome 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		will-change: transform, opacity;
	}

	@keyframes loading-bar {
		0% {
			transform: scaleX(0);
			transform-origin: left;
		}
		50% {
			transform: scaleX(0.7);
			transform-origin: left;
		}
		95% {
			transform: scaleX(0.95);
			transform-origin: left;
		}
		100% {
			transform: scaleX(0.98);
			transform-origin: left;
		}
	}

	.animate-loading-bar {
		animation: loading-bar 2.5s cubic-bezier(0.1, 0.8, 0.1, 1) forwards;
	}
</style>
