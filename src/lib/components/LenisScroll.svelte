<script>
	import { onMount } from 'svelte';

	let lenisInstance = null;
	let animationFrameId = 0;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const connection = /** @type {any} */ (navigator).connection;
		const saveData = connection?.saveData;

		if (prefersReducedMotion || saveData) {
			return;
		}

		let cancelled = false;

		import('lenis').then(({ default: Lenis }) => {
			if (cancelled) {
				return;
			}

			lenisInstance = new Lenis({
				duration: 1.1,
				easing: (t) => 1 - Math.pow(1 - t, 3),
				smoothWheel: true,
				wheelMultiplier: 1,
				touchMultiplier: 1.5,
				infinite: false,
			});

			const raf = (time) => {
				if (!lenisInstance || cancelled) {
					return;
				}

				lenisInstance.raf(time);
				animationFrameId = requestAnimationFrame(raf);
			};

			animationFrameId = requestAnimationFrame(raf);
		});

		return () => {
			cancelled = true;
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
				animationFrameId = 0;
			}

			if (lenisInstance) {
				lenisInstance.destroy();
				lenisInstance = null;
			}
		};
	});
</script>

<!-- Lenis Smooth Scroll Handler -->
<slot />
