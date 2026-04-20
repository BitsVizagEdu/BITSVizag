<script>
	import { onMount } from 'svelte';
	import Lenis from 'lenis';

	let lenisInstance = null;

	onMount(() => {
		// Initialize Lenis with optimal settings for smooth scroll
		lenisInstance = new Lenis({
			duration: 1.2, // Smoothness factor (higher = smoother)
			easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth easing function
			smooth: true,
			wheelMultiplier: 1, // Adjust scroll speed
			touchMultiplier: 2, // Adjust touch scroll speed
			infinite: false,
		});

		// RAF loop for continuous smooth scrolling
		function raf(time) {
			lenisInstance.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		// Cleanup
		return () => {
			if (lenisInstance) {
				lenisInstance.destroy();
			}
		};
	});
</script>

<!-- Lenis Smooth Scroll Handler -->
<slot />
