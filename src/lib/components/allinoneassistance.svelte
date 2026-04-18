<script>
	import { onMount } from 'svelte';

	/** @type {HTMLElement | null} */
	let sectionEl = null;

	const highlights = [
		{
			icon: 'fa-solid fa-lightbulb',
			title: 'Innovations',
			desc: 'Industry-linked learning that blends academics, labs, and real challenges.'
		},
		{
			icon: 'fa-solid fa-book-open',
			title: 'Research',
			desc: 'A focused R&D culture that supports innovation and academic excellence.'
		},
		{
			icon: 'fa-solid fa-flask',
			title: 'Real-time Projects',
			desc: 'Live projects that build teamwork, critical thinking, and execution skills.'
		},
		{
			icon: 'fa-solid fa-chalkboard-user',
			title: 'Practice-Based Teaching',
			desc: 'Learn-by-doing classrooms that connect concepts to practical outcomes.'
		}
	];

	onMount(() => {
		if (!sectionEl) {
			return;
		}

		const target = sectionEl;

		let ticking = false;

		const updateImageMotion = () => {
			const rect = target.getBoundingClientRect();
			const viewport = window.innerHeight || 1;
			const progress = Math.max(0, Math.min(1, (viewport - rect.top) / (viewport + rect.height)));

			const translateY = (progress - 0.5) * 26;
			const scale = 1.03 + progress * 0.035;

			target.style.setProperty('--bits-assist-scroll-y', `${translateY.toFixed(2)}px`);
			target.style.setProperty('--bits-assist-scroll-scale', scale.toFixed(3));
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(updateImageMotion);
			}
		};

		updateImageMotion();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	});
</script>


<section
	id="all-in-one-assistance"
	class="bits-assist"
	aria-labelledby="all-in-one-title"
	bind:this={sectionEl}
>
	<div class="bits-assist__container">
		<div class="bits-assist__left">
			
			<h2 id="all-in-one-title" class="bits-assist__title">ALL-IN-ONE CAREER ASSISTANCE</h2>
			<p class="bits-assist__subtitle">FOR STUDENT EXCELLENCE</p>
			<p class="bits-assist__tagline">Complete support for confident student growth.</p>

			<div class="bits-assist__grid">
				{#each highlights as item}
					<article class="bits-assist__item">
						<i class={`${item.icon} bits-assist__icon`} aria-hidden="true"></i>
						<h3>{item.title}</h3>
						<p>{item.desc}</p>
					</article>
				{/each}
			</div>
		</div>

		<div class="bits-assist__right">
			<div class="bits-assist__image-wrap">
				<img src="/maingall/e1.jpg" alt="BITS Vizag students in an interactive excellence session" loading="lazy" />
				<div class="bits-assist__badge">
					<strong>150+</strong>
					<span>Students trained every year for competitions and innovation programs</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.bits-assist {
		position: relative;
		overflow: hidden;
		display: block;
		width: 100%;
		--bits-assist-scroll-y: 0px;
		--bits-assist-scroll-scale: 1.03;
		padding: 1.8rem 0;
		background: linear-gradient(120deg, #72005e 0%, #7c0065 55%, #83006b 100%);
		font-family: 'Roboto', 'Segoe UI', sans-serif;
	}

	.bits-assist__container {
		width: min(1260px, 95vw);
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: 1.4rem;
		align-items: stretch;
	}

	.bits-assist__left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #fff;
		padding: 0.1rem 0.2rem 0.4rem;
	}

	.bits-assist__eyebrow {
		margin: 0;
		font-size: 0.68rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: rgba(255, 255, 255, 0.72);
	}

	.bits-assist__title {
		margin: 0.16rem 0 0;
		font-size: clamp(1.52rem, 2.2vw, 2.45rem);
		line-height: 1.05;
		font-weight: 900;
		white-space: nowrap;
		letter-spacing: -0.02em;
	}

	.bits-assist__subtitle {
		margin: 0.23rem 0 0;
		font-size: clamp(0.5rem, 1.1vw, 1.1rem);
		line-height: 1.15;
		font-weight: 600;
		letter-spacing: 0.01em;
	}

	.bits-assist__tagline {
		margin: 0.55rem 0 0;
		font-size: clamp(0.86rem, 0.95vw, 1rem);
		font-weight: 600;
		color: rgba(255, 255, 255, 0.86);
	}

	.bits-assist__grid {
		margin-top: 1.15rem;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.95rem 1.2rem;
	}

	.bits-assist__item h3 {
		margin: 0.4rem 0 0;
		font-size: clamp(0.98rem, 1.08vw, 1.22rem);
		font-weight: 800;
		line-height: 1.2;
	}

	.bits-assist__item p {
		margin: 0.28rem 0 0;
		font-size: clamp(0.82rem, 0.92vw, 0.95rem);
		line-height: 1.42;
		color: rgba(243, 236, 247, 0.88);
	}

	.bits-assist__icon {
		font-size: clamp(1.35rem, 1.55vw, 1.75rem);
		color: #fff;
	}

	.bits-assist__right {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 350px;
	}

	.bits-assist__image-wrap {
		position: relative;
		width: min(460px, 90%);
		height: 340px;
		border-radius: 1rem;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.22);
		box-shadow: 0 18px 40px rgba(20, 0, 18, 0.35);
	}

	.bits-assist__image-wrap::before {
		content: '';
		position: absolute;
		top: -20%;
		left: -65%;
		width: 52%;
		height: 140%;
		background: linear-gradient(
			105deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.14) 42%,
			rgba(255, 255, 255, 0.42) 50%,
			rgba(255, 255, 255, 0.12) 58%,
			rgba(255, 255, 255, 0) 100%
		);
		transform: rotate(12deg);
		animation: bits-assist-shine 3.8s ease-in-out infinite;
		pointer-events: none;
		z-index: 2;
	}

	.bits-assist__image-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		position: relative;
		z-index: 1;
		transform: translate3d(0, var(--bits-assist-scroll-y), 0) scale(var(--bits-assist-scroll-scale));
		transition: transform 180ms linear;
		will-change: transform;
	}

	.bits-assist__badge {
		position: absolute;
		right: 0.9rem;
		bottom: 0.9rem;
		z-index: 3;
		max-width: 215px;
		background: rgba(255, 255, 255, 0.94);
		color: #111827;
		padding: 0.8rem 0.9rem;
		border-radius: 0.85rem;
		box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
	}

	.bits-assist__badge strong {
		display: block;
		font-size: clamp(1.6rem, 2.4vw, 2.2rem);
		line-height: 1;
		font-weight: 900;
	}

	.bits-assist__badge span {
		display: block;
		margin-top: 0.3rem;
		font-size: 0.79rem;
		line-height: 1.4;
		font-weight: 500;
	}

	@keyframes bits-assist-shine {
		0% {
			left: -65%;
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		55% {
			left: 125%;
			opacity: 1;
		}
		100% {
			left: 125%;
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.bits-assist__image-wrap::before {
			animation: none;
		}
	}

	@media (max-width: 1100px) {
		.bits-assist__container {
			grid-template-columns: 1fr;
			gap: 1.2rem;
		}

		.bits-assist__title {
			white-space: normal;
		}

		.bits-assist__right {
			min-height: 300px;
		}

		.bits-assist__image-wrap {
			width: min(500px, 92%);
			height: 300px;
		}
	}

	@media (max-width: 720px) {
		.bits-assist {
			padding: 1.5rem 0;
		}

		.bits-assist__grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.bits-assist__right {
			min-height: 250px;
		}

		.bits-assist__image-wrap {
			width: 100%;
			height: 245px;
		}

		.bits-assist__badge {
			left: 0.7rem;
			right: 0.7rem;
			max-width: none;
		}
	}
</style>
