<script>
	import { onMount } from 'svelte';

	export let title = '';
	export let eyebrow = '';
	/** @type {string[]} */
	export let intro = [];
	/** @type {{ heading: string; text?: string; bullets?: string[] }[]} */
	export let sections = [];
	export let imageSrc = '';
	export let imageAlt = '';
	export let personName = '';
	export let personMeta = '';
	export let personRole = '';
	export let mediaFirst = false;
	export let imageFit = 'cover';
	export let disableImageMotion = false;
	export let stickyMedia = true;

	/** @type {HTMLElement | null} */
	let sectionEl = null;

	onMount(() => {
		if (!sectionEl) {
			return;
		}

		const target = sectionEl;
		let ticking = false;

		const updateMediaMotion = () => {
			if (disableImageMotion) {
				target.style.setProperty('--about-image-y', '0px');
				target.style.setProperty('--about-image-scale', '1');
				ticking = false;
				return;
			}

			const rect = target.getBoundingClientRect();
			const viewport = window.innerHeight || 1;
			const progress = Math.max(0, Math.min(1, (viewport - rect.top) / (viewport + rect.height)));
			const y = (progress - 0.5) * 20;
			const scale = 1 + progress * 0.04;

			target.style.setProperty('--about-image-y', `${y.toFixed(2)}px`);
			target.style.setProperty('--about-image-scale', scale.toFixed(3));
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(updateMediaMotion);
			}
		};

		updateMediaMotion();

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	});
</script>

<section class="about-showcase" bind:this={sectionEl}>
	<div class="about-grid" class:media-first={mediaFirst}>
		<div class="about-copy">
			{#if eyebrow}
				<p class="about-eyebrow">{eyebrow}</p>
			{/if}

			<h1 class="about-title">{title}</h1>

			{#each intro as paragraph}
				<p class="about-paragraph">{paragraph}</p>
			{/each}

			{#each sections as section}
				<article class="about-section">
					<h2>{section.heading}</h2>
					{#if section.text}
						<p>{section.text}</p>
					{/if}
					{#if section.bullets}
						<ul>
							{#each section.bullets as bullet}
								<li>{bullet}</li>
							{/each}
						</ul>
					{/if}
				</article>
			{/each}
		</div>

		<aside class="about-media-wrap" class:static-media={!stickyMedia} aria-label="About page image section">
			<figure class="about-media">
				<div class="parallax-viewport">
					<img src={imageSrc} alt={imageAlt} loading="lazy" class:contain-fit={imageFit === 'contain'} />
				</div>
				{#if personName || personRole || personMeta}
					<figcaption class:align-center={mediaFirst}>
						{#if personName}
							<strong>{personName}</strong>
						{/if}
						{#if personMeta}
							<span class="meta">{personMeta}</span>
						{/if}
						{#if personRole}
							<span class="role">{personRole}</span>
						{/if}
					</figcaption>
				{/if}
			</figure>
		</aside>
	</div>
</section>

<style>
	.about-showcase {
		--about-image-y: 0px;
		--about-image-scale: 1;
		padding: clamp(0.65rem, 1.3vw, 1rem) 0 clamp(2rem, 3.4vw, 2.8rem);
		font-family: 'Inter', 'Poppins', 'Segoe UI', sans-serif;
	}

	.about-grid {
		width: min(1100px, 93vw);
		margin: 0 auto;
		display: grid;
		grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
		gap: clamp(1.4rem, 2.6vw, 2.4rem);
		align-items: start;
	}

	.about-grid.media-first {
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr);
	}

	.about-grid.media-first .about-media-wrap {
		order: 1;
	}

	.about-grid.media-first .about-copy {
		order: 2;
	}

	.about-copy {
		max-width: 650px;
	}

	.about-eyebrow {
		margin: 0 0 0.5rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #0b4fb0;
		text-align: left;
	}

	.about-title {
		margin: 0 0 0.95rem;
		font-size: clamp(1.72rem, 3vw, 2.45rem);
		line-height: 1.08;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: #0f172a;
		text-align: left;
	}

	.about-paragraph {
		margin: 0 0 0.9rem;
		font-size: clamp(0.95rem, 0.88vw, 1rem);
		line-height: 1.72;
		color: #4b5563;
		text-wrap: pretty;
		text-align: justify;
	}

	.about-section {
		margin-top: 1.35rem;
	}

	.about-section h2 {
		margin: 0;
		font-size: clamp(1.15rem, 1.7vw, 1.38rem);
		line-height: 1.2;
		font-weight: 700;
		color: #be123c;
		text-align: left;
	}

	.about-section p {
		margin: 0.66rem 0 0;
		font-size: 0.98rem;
		line-height: 1.72;
		color: #4b5563;
	}

	.about-section ul {
		margin: 0.7rem 0 0;
		padding-left: 1.3rem;
		display: grid;
		gap: 0.44rem;
		color: #4b5563;
	}

	.about-section li {
		line-height: 1.65;
		font-size: 0.97rem;
	}

	.about-media-wrap {
		position: sticky;
		top: 6.3rem;
		display: flex;
		justify-content: center;
	}

	.about-media-wrap.static-media {
		position: static;
	}

	.about-media {
		margin: 0;
		width: min(360px, 100%);
		border-radius: 1.2rem;
		overflow: hidden;
		background: #ffffff;
		box-shadow: 0 18px 36px -24px rgba(15, 23, 42, 0.32);
	}

	.parallax-viewport {
		position: relative;
		width: 100%;
		aspect-ratio: 4 / 5.2; /* Taller aspect ratio for institutional look */
		overflow: hidden;
	}

	.about-media img {
		position: absolute;
		top: -12.5%; /* Significant vertical bleed */
		left: 0;
		width: 100%;
		height: 125%; /* Large buffer to ensure NO CUTTING ever occurs */
		object-fit: cover;
		object-position: center;
		transform: translate3d(0, var(--about-image-y), 0) scale(var(--about-image-scale));
		transition: transform 300ms cubic-bezier(0.1, 0, 0.2, 1);
		will-change: transform;
	}

	.about-media img.contain-fit {
		object-fit: contain;
		background: #ffffff;
		padding: 0.85rem;
	}

	.about-media figcaption {
		padding: 0.8rem 0.85rem 0.92rem;
		display: grid;
		gap: 0.2rem;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0.98), #ffffff);
	}

	.about-media figcaption.align-center {
		text-align: center;
	}

	.about-media figcaption strong {
		font-size: 1.1rem;
		font-weight: 700;
		color: #111827;
	}

	.about-media figcaption .meta {
		font-size: 0.94rem;
		line-height: 1.45;
		color: #6b7280;
	}

	.about-media figcaption .role {
		font-size: 0.9rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #be123c;
	}

	@media (prefers-reduced-motion: reduce) {
		.about-media img {
			transform: none !important;
		}
	}

	@media (max-width: 1023px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: 1.05rem;
		}

		.about-grid.media-first .about-copy,
		.about-grid.media-first .about-media-wrap {
			order: initial;
		}

		.about-copy {
			max-width: none;
			text-align: left;
		}

		.about-eyebrow,
		.about-title,
		.about-section h2 {
			text-align: left;
		}

		.about-media-wrap {
			position: static;
			order: 2;
			justify-content: flex-start;
		}

		.about-copy {
			order: 1;
		}
	}

	@media (max-width: 640px) {
		.about-showcase {
			padding-top: 0.5rem;
		}

		.about-title {
			font-size: clamp(1.4rem, 6.8vw, 1.85rem);
		}

		.about-paragraph,
		.about-section p,
		.about-section li {
			font-size: 0.92rem;
			line-height: 1.66;
		}

		.about-media {
			width: min(320px, 100%);
		}
	}
</style>
