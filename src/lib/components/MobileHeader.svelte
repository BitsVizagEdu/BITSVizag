<script>
	import { showNavBar } from '$lib/stores/store.js';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let isScrolled = false;
	let lastScrollY = 0;
	let isHeaderHidden = false;
	let scrollProgress = 0;

	$: isHome = $page.url.pathname === '/';

	onMount(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			
			// Check if page has been scrolled
			isScrolled = currentScrollY > 10;
			
			// Interpolate scroll progress over 120px for pixel-perfect transitions
			scrollProgress = Math.min(currentScrollY / 120, 1);
			
			// Smart sticky header behavior: hide on scroll down, reveal on scroll up
			if (currentScrollY > lastScrollY && currentScrollY > 80) {
				isHeaderHidden = true;
			} else {
				isHeaderHidden = false;
			}
			
			lastScrollY = currentScrollY;
		};
		
		window.addEventListener('scroll', handleScroll, /** @type {any} */ ({ passive: true }));
		return () =>
			window.removeEventListener('scroll', handleScroll, /** @type {any} */ ({ passive: true }));
	});

	function toggleNav() {
		showNavBar.set(!$showNavBar);
	}
</script>

<div class="mobile-header-container lg:hidden">
	<!-- Smart sticky header transitioning background styles dynamically -->
	<header 
		class="main-header {isScrolled ? 'scrolled' : ''} {isHeaderHidden ? 'hidden-header' : ''} {!isHome ? 'subpage-header' : ''}"
		style={isHome ? `
			background: ${scrollProgress > 0.05 ? `rgba(255, 255, 255, ${scrollProgress * 0.8})` : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 100%)'}; 
			backdrop-filter: blur(${scrollProgress * 16}px); 
			-webkit-backdrop-filter: blur(${scrollProgress * 16}px); 
			box-shadow: 0 4px 20px rgba(0, 0, 0, ${scrollProgress * 0.04}); 
			--hamburger-color: rgb(${Math.round(255 - scrollProgress * (255 - 15))}, ${Math.round(255 - scrollProgress * (255 - 23))}, ${Math.round(255 - scrollProgress * (255 - 42))});
		` : ''}
	>
		<div class="header-inner">
			<div class="left-section">
				<!-- Elegant Back to Home Button shown only on subpages (Replaces logo completely on subpages) -->
				{#if !isHome}
					<a href="/" class="back-link" aria-label="Back to Home">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
						</svg>
						<span>Home</span>
					</a>
				{:else}
					<a href="/" class="brand">
						<!-- Official BITS Vizag Logo (Only visible on home page) -->
						<img src="/1.png" alt="BITS Vizag Logo" class="logo" />
					</a>
				{/if}
			</div>

			<!-- Minimal Hamburger Icon (Right) -->
			<button class="menu-toggle" on:click={toggleNav} aria-label="Toggle Menu">
				<div class="hamburger" class:dark={!isHome}>
					<span class="line-1"></span>
					<span class="line-2"></span>
					<span class="line-3"></span>
				</div>
			</button>
		</div>
	</header>
</div>

<style>
	.mobile-header-container {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		font-family: 'Inter', sans-serif;
		pointer-events: none;
	}

	.main-header {
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 100%);
		height: 72px;
		display: flex;
		align-items: center;
		padding: 0 12px;
		width: 100%;
		pointer-events: auto;
		transform: translateY(0);
		transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.1s linear, box-shadow 0.1s linear, backdrop-filter 0.1s linear;
		will-change: transform, background, box-shadow, backdrop-filter;
	}

	/* Hidden state on scroll down: slides out slowly and smoothly */
	.main-header.hidden-header {
		transform: translateY(-100%);
	}

	/* Subpage styling (Neat glassmorphism white instead of black) */
	.main-header.subpage-header {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
	}

	.header-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.left-section {
		display: flex;
		align-items: center;
	}

	/* Back link styling for subpages */
	.back-link {
		display: flex;
		align-items: center;
		gap: 4px;
		color: #0f172a;
		text-decoration: none;
		font-size: 14px;
		font-weight: 600;
		padding: 6px 12px;
		border-radius: 8px;
		background: rgba(15, 23, 42, 0.05);
		border: 1px solid rgba(15, 23, 42, 0.08);
		transition: all 0.2s ease;
	}

	.back-link:active {
		background: rgba(15, 23, 42, 0.1);
		transform: scale(0.96);
	}

	.brand {
		display: flex;
		align-items: center;
		text-decoration: none;
		min-width: 0;
	}

	.logo {
		height: 48px;
		width: auto;
		object-fit: contain;
		filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35));
	}

	.menu-toggle {
		background: #0f172a; /* Dark circle background */
		border: none;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.menu-toggle:active {
		transform: scale(0.92);
	}

	.hamburger {
		width: 16px;
		height: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.hamburger span {
		display: block;
		height: 1.5px;
		width: 100%;
		background: #ffffff; /* Always crisp white inside the dark circle button */
		border-radius: 1px;
		transition: background 0.3s ease;
	}
</style>
