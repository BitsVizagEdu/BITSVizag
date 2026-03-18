<script>
	import { onMount, onDestroy } from 'svelte';

	const images = [
		{ webp: '/CS-Banners/1.webp', fallback: '/CS-Banners/1.png', alt: 'CS Banner 1' },
		{ webp: '/CS-Banners/2.webp', fallback: '/CS-Banners/2.png', alt: 'CS Banner 2' },
		{ webp: '/CS-Banners/3.webp', fallback: '/CS-Banners/3.png', alt: 'CS Banner 3' },
		{ webp: '/CS-Banners/4.webp', fallback: '/CS-Banners/4.png', alt: 'CS Banner 4' }
	];

	const sequence = [0, 1, 0, 2, 0, 3];

	let seqIdx    = 0;
	let current   = 0;
	let isAnimating = false;
	let paused    = false;

	/** @type {HTMLElement[]} */
	let slideEls = [];
	/** @type {HTMLElement[]} */
	let imgEls   = [];
	let gsap;
	let timer;
	let shineEl;

	function goTo(index) {
		if (isAnimating || index === current || !gsap) return;

		const outEl  = slideEls[current];
		const inEl   = slideEls[index];
		const inImg  = imgEls[index];

		isAnimating = true;
		gsap.set(inEl,  { autoAlpha: 0, zIndex: 2 });
		gsap.set(outEl, { zIndex: 1 });

		// Zoom in: incoming image starts slightly zoomed, eases to normal
		gsap.set(inImg, { scale: 1.08, transformOrigin: 'center center' });

		gsap.timeline({
			defaults: { duration: 0.7, ease: 'power1.inOut' },
			onComplete() {
				gsap.set(outEl, { autoAlpha: 0, zIndex: 1 });
				current = index;
				isAnimating = false;
				triggerShine();
				if (!paused) scheduleNext();
			}
		})
			.to(inEl,  { autoAlpha: 1 }, 0)
			.to(inImg, { scale: 1, duration: 1.8, ease: 'power1.out' }, 0)
			.to(outEl, { autoAlpha: 0 }, 0);
	}

	function triggerShine() {
		if (!gsap || !shineEl) return;
		gsap.fromTo(
			shineEl,
			{ x: '-100%', autoAlpha: 0 },
			{
				x: '110%',
				autoAlpha: 1,
				duration: 1.1,
				ease: 'power2.inOut',
				onComplete: () => gsap.set(shineEl, { autoAlpha: 0 })
			}
		);
	}

	// Auto-advance — always in sync, only called from onComplete
	function advanceAuto() {
		seqIdx = (seqIdx + 1) % sequence.length;
		goTo(sequence[seqIdx]);
	}

	// Manual arrows — stops auto-play; resumes on mouse leave / touch end
	function next() {
		if (isAnimating) return;
		pause();
		seqIdx = (seqIdx + 1) % sequence.length;
		goTo(sequence[seqIdx]);
	}

	function prev() {
		if (isAnimating) return;
		pause();
		seqIdx = (seqIdx - 1 + sequence.length) % sequence.length;
		goTo(sequence[seqIdx]);
	}

	function scheduleNext() {
		clearTimeout(timer);
		timer = setTimeout(advanceAuto, 5000);
	}

	function pause()  { paused = true;  clearTimeout(timer); }
	function resume() { paused = false; scheduleNext(); }

	// Touch swipe
	let touchX = 0;
	function onTouchStart(e) { touchX = e.touches[0].clientX; pause(); }
	function onTouchEnd(e) {
		const dx = e.changedTouches[0].clientX - touchX;
		if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
		resume();
	}

	onMount(async () => {
		if (typeof window === 'undefined') return;
		const mod = await import('gsap');
		gsap = mod.gsap;

		slideEls.forEach((el, i) => {
			gsap.set(el, { autoAlpha: i === 0 ? 1 : 0, zIndex: i === 0 ? 2 : 1 });
		});
		// Kick off zoom on the first visible image
		if (imgEls[0]) gsap.fromTo(imgEls[0],
			{ scale: 1.08 },
			{ scale: 1, duration: 2.2, ease: 'power1.out' }
		);

		scheduleNext();
	});

	onDestroy(() => clearTimeout(timer));
</script>

<!-- CS Department Banner Slider -->
<div
	class="cb-wrap"
	on:mouseenter={pause}
	on:mouseleave={resume}
	on:touchstart={onTouchStart}
	on:touchend={onTouchEnd}
	role="region"
	aria-label="CS Banner Slider"
>
	{#each images as slide, i}
		<div class="cb-slide" bind:this={slideEls[i]} aria-hidden={i !== current}>
			<picture>
				<source srcset={slide.webp} type="image/webp" />
				<img
					class="cb-img"
					src={slide.fallback}
					alt={slide.alt}
					draggable="false"
					loading={i === 0 ? 'eager' : 'lazy'}
					fetchpriority={i === 0 ? 'high' : 'auto'}
					sizes="100vw"
					bind:this={imgEls[i]}
					decoding="async"
				/>
			</picture>
		</div>
	{/each}

	<!-- Horizontal glass shine sweep -->
	<div class="cb-shine" bind:this={shineEl} aria-hidden="true"></div>

	<!-- Left / Right glass arrows -->
	<button class="cb-arrow cb-arrow--left"  on:click={prev} aria-label="Previous slide">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
			stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
			<polyline points="15 18 9 12 15 6" />
		</svg>
	</button>

	<button class="cb-arrow cb-arrow--right" on:click={next} aria-label="Next slide">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
			stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
			<polyline points="9 18 15 12 9 6" />
		</svg>
	</button>

	<nav class="cb-dots" aria-label="Banner indicator">
		{#each images as _, i}
			<span
				class="cb-dot"
				class:cb-dot--active={current === i}
				aria-label={`Slide ${i + 1}`}
			></span>
		{/each}
	</nav>
</div>

<style>
	.cb-wrap {
		position: relative;
		width: 100%;
		display: grid;
		overflow: hidden;
	}

	.cb-slide {
		grid-area: 1 / 1;
		width: 100%;
		will-change: opacity;
		overflow: hidden;
	}

	.cb-img {
		width: 100%;
		height: auto;
		display: block;
		user-select: none;
		will-change: transform;
	}

	/* Horizontal glass shimmer strip */
	.cb-shine {
		position: absolute;
		inset: 0;
		width: 38%;
		height: 100%;
		background: linear-gradient(
			105deg,
			transparent 20%,
			rgba(255, 255, 255, 0.12) 38%,
			rgba(255, 255, 255, 0.35) 50%,
			rgba(255, 255, 255, 0.12) 62%,
			transparent 80%
		);
		backdrop-filter: blur(2px);
		-webkit-backdrop-filter: blur(2px);
		pointer-events: none;
		z-index: 8;
		opacity: 0;
	}

	/* Glass arrows */
	.cb-arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.45);
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: 0 4px 18px rgba(0, 0, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.4);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
	}

	.cb-arrow svg {
		width: 18px;
		height: 18px;
		filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.45));
	}

	.cb-arrow--left  { left:  clamp(0.6rem, 2vw, 1.25rem); }
	.cb-arrow--right { right: clamp(0.6rem, 2vw, 1.25rem); }

	.cb-arrow:hover {
		background: rgba(255, 255, 255, 0.3);
		box-shadow: 0 6px 26px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5);
		transform: translateY(-50%) scale(1.08);
	}

	.cb-arrow:active { transform: translateY(-50%) scale(0.94); }

	/* Dots */
	.cb-dots {
		position: absolute;
		bottom: 0.75rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		gap: 0.55rem;
		z-index: 10;
	}

	.cb-dot {
		display: block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.4);
		border: 1.5px solid rgba(255, 255, 255, 0.6);
		transition: transform 0.3s ease, background 0.3s ease;
	}

	.cb-dot--active {
		transform: scale(1.75);
		background: #fff;
		border-color: #fff;
	}

	@media (max-width: 640px) {
		.cb-arrow { width: 34px; height: 34px; }
		.cb-arrow svg { width: 14px; height: 14px; }
		.cb-dots { bottom: 0.5rem; }
	}
</style>
