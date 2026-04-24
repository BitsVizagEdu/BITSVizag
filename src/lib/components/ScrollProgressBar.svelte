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

<!-- Perfect Minimalist Side Scroll Indicator -->
{#if mounted}
	<div class="fixed top-0 right-0 w-[4px] h-full z-[9999] pointer-events-none">
		<div
			class="w-full origin-top"
			style="
				height: {scrollProgress * 100}%;
				background-color: #2563eb; 
				transition: height 0.15s cubic-bezier(0.23, 1, 0.32, 1);
				will-change: height;
			"
		></div>
	</div>
{/if}

<style>
	:global {
		/* Disable native scroll smoothing (Lenis takes over) */
		html {
			scroll-behavior: auto;
		}
	}
</style>
