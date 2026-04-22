<script>
	import { onMount, onDestroy } from 'svelte';

	const images = [
		{ src: '/CS-Banners/CS-images/1.png', alt: 'Computer Science Department Image 1' },
		{ src: '/CS-Banners/CS-images/2.png', alt: 'Computer Science Department Image 2' },
		{ src: '/CS-Banners/CS-images/3.png', alt: 'Computer Science Department Image 3' },
		{ src: '/CS-Banners/CS-images/4.png', alt: 'Computer Science Department Image 4' }
	];

	let current = 0;
	let isAnimating = false;
	let paused = false;

	/** @type {HTMLElement[]} */
	let slideEls = [];
	/** @type {HTMLElement[]} */
	let imgEls = [];
	/** @type {any} */
	let gsap;
	/** @type {any} */
	let timer;
	/** @type {HTMLElement | undefined} */
	let shineEl;

	/** @param {number} index */
	function goTo(index) {
		if (isAnimating || index === current || !gsap || !shineEl) return;
		const gsapInstance = gsap;

		const outEl = slideEls[current];
		const inEl = slideEls[index];
		const inImg = imgEls[index];

		isAnimating = true;
		gsapInstance.set(inEl, { autoAlpha: 0, zIndex: 2 });
		gsapInstance.set(outEl, { zIndex: 1 });

		// Zoom effect for a premium feel
		gsapInstance.set(inImg, { scale: 1.1, transformOrigin: 'center center' });

		gsapInstance
			.timeline({
				defaults: { duration: 0.7, ease: 'power4.inOut', force3D: true },
				onComplete() {
					gsapInstance.set(outEl, { autoAlpha: 0, zIndex: 1 });
					current = index;
					isAnimating = false;
					triggerShine();
					if (!paused) scheduleNext();
				}
			})
			.to(inEl, { autoAlpha: 1 }, 0)
			.to(inImg, { scale: 1, duration: 4.0, ease: 'power1.out' }, 0) // Slow, continuous zoom
			.to(outEl, { autoAlpha: 0 }, 0);
	}

	function triggerShine() {
		if (!gsap || !shineEl) return;
		const gsapInstance = gsap;
		gsapInstance.fromTo(
			shineEl,
			{ x: '-100%', autoAlpha: 0 },
			{
				x: '110%',
				autoAlpha: 1,
				duration: 1.2,
				ease: 'power2.inOut',
				onComplete() {
					gsapInstance.set(shineEl, { autoAlpha: 0 });
				}
			}
		);
	}

	function next() {
		if (isAnimating) return;
		pause();
		goTo((current + 1) % images.length);
	}

	function prev() {
		if (isAnimating) return;
		pause();
		goTo((current - 1 + images.length) % images.length);
	}

	function scheduleNext() {
		clearTimeout(timer);
		timer = setTimeout(() => {
			if (!paused) goTo((current + 1) % images.length);
		}, 2300);
	}

	function pause() {
		paused = true;
		clearTimeout(timer);
	}
	function resume() {
		paused = false;
		scheduleNext();
	}

	// Swipe Support
	let touchX = 0;
	/** @param {TouchEvent} e */
	function onTouchStart(e) {
		touchX = e.touches[0].clientX;
		pause();
	}
	/** @param {TouchEvent} e */
	function onTouchEnd(e) {
		const dx = e.changedTouches[0].clientX - touchX;
		if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
		resume();
	}

	onMount(async () => {
		if (typeof window === 'undefined') return;
		const mod = await import('gsap');
		gsap = mod.gsap;

		slideEls.forEach((el, i) => {
			gsap.set(el, { autoAlpha: i === 0 ? 1 : 0, zIndex: i === 0 ? 2 : 1 });
		});

		if (imgEls[0]) {
			gsap.fromTo(imgEls[0], { scale: 1.1 }, { scale: 1, duration: 2.5, ease: 'power2.out' });
		}

		scheduleNext();
	});

	onDestroy(() => {
		if (typeof clearTimeout !== 'undefined') clearTimeout(timer);
	});
</script>

<div
	class="cs-slider-wrap"
	on:mouseenter={pause}
	on:mouseleave={resume}
	on:touchstart={onTouchStart}
	on:touchend={onTouchEnd}
	role="region"
	aria-label="CS Header Slider"
>
	{#each images as slide, i}
		<div class="cs-slide" bind:this={slideEls[i]} aria-hidden={i !== current}>
			<img
				class="cs-slide-img"
				src={slide.src}
				alt={slide.alt}
				draggable="false"
				loading={i === 0 ? 'eager' : 'lazy'}
				decoding="async"
				bind:this={imgEls[i]}
			/>
		</div>
	{/each}

	<div class="cs-shine" bind:this={shineEl}></div>

	<!-- Navigation Arrows -->
	<button class="nav-btn nav-btn--left" on:click={prev} aria-label="Previous">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
			<polyline points="15 18 9 12 15 6" />
		</svg>
	</button>

	<button class="nav-btn nav-btn--right" on:click={next} aria-label="Next">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
			<polyline points="9 18 15 12 9 6" />
		</svg>
	</button>

	<!-- Indicators -->
	<div class="indicators">
		{#each images as _, i}
			<button
				class="dot"
				class:active={current === i}
				on:click={() => goTo(i)}
				aria-label={`Go to slide ${i + 1}`}
			></button>
		{/each}
	</div>
</div>

<style>
	.cs-slider-wrap {
		position: relative;
		width: 100%;
		height: auto;
		display: grid;
		overflow: hidden;
		aspect-ratio: 1920 / 650; /* Adjust according to banner aspect ratio */
		background: #000;
	}

	@media (max-width: 768px) {
		.cs-slider-wrap {
			aspect-ratio: 16 / 9;
		}
	}

	.cs-slide {
		grid-area: 1 / 1;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.cs-slide-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		color: transparent; /* Hide alt text if broken */
		text-indent: -9999px; /* Extra precaution to hide text */
	}

	.cs-shine {
		position: absolute;
		inset: 0;
		width: 40%;
		height: 100%;
		background: linear-gradient(
			105deg,
			transparent 20%,
			rgba(255, 255, 255, 0.15) 40%,
			rgba(255, 255, 255, 0.4) 50%,
			rgba(255, 255, 255, 0.15) 60%,
			transparent 80%
		);
		pointer-events: none;
		z-index: 5;
		opacity: 0;
	}

	.nav-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		width: 50px;
		height: 50px;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		opacity: 0; /* Hidden by default, show on hover */
	}

	.cs-slider-wrap:hover .nav-btn {
		opacity: 1;
	}

	.nav-btn:hover {
		background: rgba(255, 255, 255, 0.25);
		transform: translateY(-50%) scale(1.1);
	}

	.nav-btn svg {
		width: 20px;
		height: 20px;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.nav-btn--left {
		left: 20px;
	}
	.nav-btn--right {
		right: 20px;
	}

	.indicators {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 10px;
		z-index: 10;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.3);
		border: none;
		cursor: pointer;
		padding: 0;
		transition: all 0.3s ease;
	}

	.dot.active {
		background: #fff;
		transform: scale(1.5);
		box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
	}

	@media (max-width: 640px) {
		.nav-btn {
			width: 40px;
			height: 40px;
		}
		.nav-btn--left {
			left: 10px;
		}
		.nav-btn--right {
			right: 10px;
		}
		.indicators {
			bottom: 10px;
		}
		.dot {
			width: 8px;
			height: 8px;
		}
	}
</style>
