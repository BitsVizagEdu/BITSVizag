<script>
	import { onMount, onDestroy } from 'svelte';

	const slides = [
		{
			img: '/header/T10main.png',
			href: 'https://www.instagram.com/p/DQuOMxUE_qx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			alt: 'T10 Cricket Championship'
		},
		{
			img: '/header/pitchathon.png',
			href: '/placements',
			alt: 'Pitchathon'
		},
		{
			img: '/header/ViceChancellor-Banner.png',
			href: 'https://www.instagram.com/p/DQvtjDijfWw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			alt: 'Vice Chancellor'
		}
	];

	let current = 0;
	let isAnimating = false;
	let autoTimer;

	/** @type {HTMLElement[]} */
	let slideEls = [];
	let gsap;

	function goTo(index) {
		if (isAnimating || index === current || !gsap) return;

		const outEl = slideEls[current];
		const inEl  = slideEls[index];

		isAnimating = true;
		gsap.set(inEl, { autoAlpha: 0, zIndex: 2 });
		gsap.set(outEl, { zIndex: 1 });

		gsap.timeline({
			defaults: { duration: 0.65, ease: 'power1.inOut' },
			onComplete() {
				gsap.set(outEl, { autoAlpha: 0, zIndex: 1 });
				current = index;
				isAnimating = false;
				scheduleAuto();
			}
		})
			.to(inEl,  { autoAlpha: 1 }, 0)
			.to(outEl, { autoAlpha: 0 }, 0);
	}

	function next() { goTo((current + 1) % slides.length); }
	function prev() { goTo((current - 1 + slides.length) % slides.length); }

	function scheduleAuto() {
		clearTimeout(autoTimer);
		autoTimer = setTimeout(next, 4000);
	}

	let touchX = 0;
	function onTouchStart(e) { touchX = e.touches[0].clientX; }
	function onTouchEnd(e) {
		const dx = e.changedTouches[0].clientX - touchX;
		if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
	}

	function onKey(e) {
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft')  prev();
	}

	onMount(async () => {
		if (typeof window === 'undefined') return;
		const mod = await import('gsap');
		gsap = mod.gsap;

		slideEls.forEach((el, i) => {
			gsap.set(el, { autoAlpha: i === 0 ? 1 : 0, zIndex: i === 0 ? 2 : 1 });
		});

		scheduleAuto();
		window.addEventListener('keydown', onKey);
	});

	onDestroy(() => {
		clearTimeout(autoTimer);
		if (typeof window !== 'undefined') window.removeEventListener('keydown', onKey);
	});
</script>

<div
	class="sl-wrap"
	on:touchstart={onTouchStart}
	on:touchend={onTouchEnd}
	role="region"
	aria-label="Image banner slider"
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
					src={slide.img}
					alt={slide.alt}
					draggable="false"
					loading={i === 0 ? 'eager' : 'lazy'}
					decoding="async"
				/>
			</a>
		</div>
	{/each}

	<button class="sl-arrow sl-arrow--left" on:click={prev} aria-label="Previous slide">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
			stroke-linecap="round" stroke-linejoin="round">
			<polyline points="15 18 9 12 15 6" />
		</svg>
	</button>

	<button class="sl-arrow sl-arrow--right" on:click={next} aria-label="Next slide">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
			stroke-linecap="round" stroke-linejoin="round">
			<polyline points="9 18 15 12 9 6" />
		</svg>
	</button>

	<nav class="sl-dots" aria-label="Slide navigation">
		{#each slides as _, i}
			<button
				class="sl-dot"
				class:sl-dot--active={current === i}
				on:click={() => goTo(i)}
				aria-label={`Go to slide ${i + 1}`}
			></button>
		{/each}
	</nav>
</div>

<style>
	/* Grid stacking — container height equals the image's natural height exactly */
	.sl-wrap {
		position: relative;
		width: 100%;
		display: grid;
	}

	.sl-slide {
		grid-area: 1 / 1;
		width: 100%;
		will-change: opacity;
	}

	.sl-slide a {
		display: block;
		width: 100%;
	}

	.sl-img {
		width: 100%;
		height: auto;
		display: block;
		user-select: none;
		pointer-events: none;
	}

	/* Arrows */
	.sl-arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: none;
		background: rgba(0, 0, 0, 0.38);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background 0.2s ease, transform 0.2s ease;
	}

	.sl-arrow svg    { width: 17px; height: 17px; }
	.sl-arrow--left  { left:  clamp(0.6rem, 2vw, 1.4rem); }
	.sl-arrow--right { right: clamp(0.6rem, 2vw, 1.4rem); }

	.sl-arrow:hover  { background: rgba(0, 0, 0, 0.62); transform: translateY(-50%) scale(1.08); }
	.sl-arrow:active { transform: translateY(-50%) scale(0.94); }

	/* Dots */
	.sl-dots {
		position: absolute;
		bottom: 0.85rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		gap: 0.55rem;
		z-index: 10;
	}

	.sl-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		border: 1.5px solid rgba(255, 255, 255, 0.7);
		background: rgba(255, 255, 255, 0.2);
		cursor: pointer;
		padding: 0;
		transition: transform 0.3s ease, background 0.3s ease;
	}

	.sl-dot--active {
		transform: scale(1.75);
		background: #fff;
		border-color: #fff;
	}

	@media (max-width: 640px) {
		.sl-arrow { width: 32px; height: 32px; }
		.sl-arrow svg { width: 14px; height: 14px; }
		.sl-dots { bottom: 0.5rem; }
	}
</style>
