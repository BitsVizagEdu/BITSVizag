<script>
	import { onMount, onDestroy } from 'svelte';

	const slides = [
		{
			src: '/header/T10main.webp',
			href: 'https://www.instagram.com/p/DQuOMxUE_qx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			alt: 'T10 Cricket Championship'
		},
		{
			src: '/header/pitchathon.png',
			href: '/placements',
			alt: 'Pitchathon'
		},
		{
			src: '/header/ViceChancellor-Banner.png',
			href: 'https://www.instagram.com/p/DQvtjDijfWw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			alt: 'Vice Chancellor'
		}
	];

	let current = 0;
	let isAnimating = false;
	let paused = false;

	/** @type {HTMLElement[]} */
	let slideEls = [];
	/** @type {any} */
	let gsap;
	/** @type {any} */
	let timer;

	/** @param {number} index */
	function goTo(index) {
		if (isAnimating || index === current || !gsap) return;
		const gsapInstance = gsap;

		const outEl = slideEls[current];
		const inEl = slideEls[index];

		// Direction: 1 for right-to-left, -1 for left-to-right
		const direction = index > current ? 1 : index === 0 && current === slides.length - 1 ? 1 : -1;

		isAnimating = true;

		// Setup incoming slide
		gsapInstance.set(inEl, {
			autoAlpha: 1,
			zIndex: 2,
			x: direction * 100 + '%'
		});
		gsapInstance.set(outEl, { zIndex: 1 });

		// Elastic Spring Animation
		gsapInstance.to(inEl, {
			x: '0%',
			duration: 1.0,
			ease: 'elastic.out(1, 0.85)',
			onComplete() {
				gsapInstance.set(outEl, { autoAlpha: 0, x: '0%' });
				current = index;
				isAnimating = false;
				if (!paused) scheduleNext();
			},
			force3D: true
		});

		// Slide Out current slide slightly
		gsapInstance.to(outEl, {
			x: -direction * 30 + '%',
			autoAlpha: 0.5,
			duration: 0.8,
			ease: 'power2.inOut'
		});
	}

	function next() {
		if (isAnimating) return;
		pause();
		goTo((current + 1) % slides.length);
	}

	function prev() {
		if (isAnimating) return;
		pause();
		goTo((current - 1 + slides.length) % slides.length);
	}

	function scheduleNext() {
		clearTimeout(timer);
		timer = setTimeout(() => {
			if (!paused) goTo((current + 1) % slides.length);
		}, 2000);
	}

	function pause() {
		paused = true;
		clearTimeout(timer);
	}
	function resume() {
		paused = false;
		scheduleNext();
	}

	// Touch Support
	let touchX = 0;
	function onTouchStart(e) {
		touchX = e.touches[0].clientX;
		pause();
	}
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
			gsap.set(el, {
				autoAlpha: i === 0 ? 1 : 0,
				zIndex: i === 0 ? 2 : 1,
				x: '0%'
			});
		});

		scheduleNext();
	});

	onDestroy(() => {
		if (typeof clearTimeout !== 'undefined') clearTimeout(timer);
	});
</script>

<div
	class="autonomous-slider"
	on:mouseenter={pause}
	on:mouseleave={resume}
	on:touchstart={onTouchStart}
	on:touchend={onTouchEnd}
	role="region"
	aria-label="Autonomous Banner Slider"
>
	{#each slides as slide, i}
		<div class="sl-slide" bind:this={slideEls[i]} aria-hidden={i !== current}>
			<a
				href={slide.href}
				target={slide.href.startsWith('http') ? '_blank' : '_self'}
				rel="noopener noreferrer"
				tabindex={i === current ? 0 : -1}
			>
				<img
					class="sl-img"
					src={slide.src}
					alt={slide.alt}
					draggable="false"
					loading={i === 0 ? 'eager' : 'lazy'}
					decoding="async"
				/>
			</a>
		</div>
	{/each}

	<!-- Navigation Arrows -->
	<button class="arrow-btn arrow-btn--left" on:click={prev} aria-label="Previous">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
			<polyline points="15 18 9 12 15 6" />
		</svg>
	</button>

	<button class="arrow-btn arrow-btn--right" on:click={next} aria-label="Next">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
			<polyline points="9 18 15 12 9 6" />
		</svg>
	</button>

	<!-- Indicators -->
	<div class="dots-wrap">
		{#each slides as _, i}
			<button
				class="dot-btn"
				class:active={current === i}
				on:click={() => goTo(i)}
				aria-label={`Go to slide ${i + 1}`}
			></button>
		{/each}
	</div>
</div>

<style>
	.autonomous-slider {
		position: relative;
		width: 100%;
		display: grid;
		overflow: hidden;
		background: #000;
		aspect-ratio: 1920 / 600;
	}

	@media (max-width: 768px) {
		.autonomous-slider {
			aspect-ratio: 16 / 9;
		}
	}

	.sl-slide {
		grid-area: 1 / 1;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.sl-slide a {
		display: block;
		width: 100%;
		height: 100%;
	}

	.sl-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		color: transparent;
		text-indent: -9999px;
	}

	.arrow-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		width: 46px;
		height: 46px;
		background: rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		opacity: 0;
	}

	.autonomous-slider:hover .arrow-btn {
		opacity: 1;
	}

	.arrow-btn:hover {
		background: rgba(0, 0, 0, 0.5);
		transform: translateY(-50%) scale(1.1);
	}

	.arrow-btn svg {
		width: 18px;
		height: 18px;
	}
	.arrow-btn--left {
		left: 20px;
	}
	.arrow-btn--right {
		right: 20px;
	}

	.dots-wrap {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 8px;
		z-index: 10;
	}

	.dot-btn {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.4);
		border: none;
		cursor: pointer;
		padding: 0;
		transition: all 0.3s ease;
	}

	.dot-btn.active {
		background: #fff;
		transform: scale(1.6);
		box-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
	}

	@media (max-width: 640px) {
		.arrow-btn {
			width: 36px;
			height: 36px;
		}
		.arrow-btn--left {
			left: 10px;
		}
		.arrow-btn--right {
			right: 10px;
		}
		.dots-wrap {
			bottom: 12px;
		}
	}
</style>
