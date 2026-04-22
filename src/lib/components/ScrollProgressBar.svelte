<script>
	import { onMount } from 'svelte';

	let scrollProgress = 0;
	let mounted = false;

	onMount(() => {
		mounted = true;

		// High-performance scroll progress calculation
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			
			// Ensure we get 0-1 range
			scrollProgress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
		};

		// Passive listener for optimal scroll performance
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<!-- Ultra-Smooth Gradient Progress Bar (Synced with Lenis) -->
{#if mounted}
	<div
		class="fixed top-0 left-0 right-0 h-1 origin-left z-50 pointer-events-none"
		style="
			transform: scaleX({scrollProgress});
			background: linear-gradient(to right, #22c55e 0%, #10b981 25%, #059669 50%, #10b981 75%, #22c55e 100%);
			box-shadow: 
				0 0 12px rgba(34, 197, 94, 0.7),
				0 0 24px rgba(16, 185, 129, 0.4),
				inset 0 0 8px rgba(255, 255, 255, 0.1);
			filter: blur(0.5px);
			will-change: transform;
			backface-visibility: hidden;
			-webkit-font-smoothing: antialiased;
		"
	></div>
{/if}

<style>
	:global {
		/* Disable native scroll smoothing (Lenis takes over) */
		html {
			scroll-behavior: auto;
		}
	}
</style>
