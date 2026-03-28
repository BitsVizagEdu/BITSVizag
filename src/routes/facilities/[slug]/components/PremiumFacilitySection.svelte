<script>
	/** @typedef {{ title: string; description: string }} Feature */
	/** @typedef {{ label: string; value: string }} Metric */

	export let title = '';
	export let kicker = 'Signature Campus Amenities';
	export let intro = '';
	export let imageSrc = '';
	export let imageAlt = '';
	/** @type {Feature[]} */
	export let features = [];
	/** @type {Metric[]} */
	export let metrics = [];
	/** @type {string[]} */
	export let galleryImages = [];
</script>

<section class="facility-premium">
	<div class="hero-card">
		<div>
			<p class="facility-kicker">{kicker}</p>
			<h2>{title}</h2>
			<p class="facility-intro">{intro}</p>
		</div>
		{#if galleryImages.length > 0}
			<div class="gallery-grid">
				{#each galleryImages as image, i}
					<img src={image} alt={`${title} visual ${i + 1}`} style={`--delay:${i * 100}ms`} />
				{/each}
			</div>
		{:else}
			<img src={imageSrc} alt={imageAlt || title} />
		{/if}
	</div>

	{#if features.length > 0}
		<div class="feature-grid">
			{#each features as feature, i}
				<article class="feature-card" style={`--delay:${i * 120}ms`}>
					<h3>{feature.title}</h3>
					<p>{feature.description}</p>
				</article>
			{/each}
		</div>
	{/if}

	{#if metrics.length > 0}
		<div class="metric-grid">
			{#each metrics as metric, i}
				<div class="metric-card" style={`--delay:${i * 80}ms`}>
					<span>{metric.label}</span>
					<strong>{metric.value}</strong>
				</div>
			{/each}
		</div>
	{/if}
</section>

<style>
	.facility-premium {
		font-family: 'Roboto', 'SF Pro Text', 'SF Pro Display', -apple-system, BlinkMacSystemFont,
			'Segoe UI', sans-serif;
		display: grid;
		gap: 1.1rem;
	}

	.hero-card {
		display: grid;
		gap: 1rem;
		background: linear-gradient(130deg, #0f4da8 0%, #0d7cbf 100%);
		padding: 1.35rem;
		border-radius: 1.2rem;
		color: #f8fafc;
		animation: riseIn 0.72s ease;
		box-shadow: 0 26px 40px -28px rgba(15, 77, 168, 0.85);
	}

	.hero-card > div {
		display: grid;
		gap: 0.45rem;
		align-content: start;
		padding-right: 0.2rem;
	}

	.facility-kicker {
		font-size: 0.72rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		font-weight: 700;
		opacity: 0.9;
		margin-bottom: 0;
	}

	h2 {
		font-size: clamp(1.35rem, 4vw, 2rem);
		font-weight: 800;
		line-height: 1.18;
		margin-bottom: 0.15rem;
	}

	.facility-intro {
		line-height: 1.7;
		font-size: 0.98rem;
		max-width: 56ch;
		opacity: 0.95;
	}

	img {
		width: 100%;
		height: clamp(220px, 34vw, 360px);
		object-fit: cover;
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.28);
	}

	.gallery-grid {
		display: grid;
		gap: 0.75rem;
		grid-template-columns: repeat(6, 1fr);
		align-items: stretch;
	}

	.gallery-grid img {
		height: auto;
		aspect-ratio: 4 / 3;
		display: block;
	}

	.gallery-grid img {
		animation: riseIn 0.6s ease both;
		animation-delay: var(--delay);
	}

	.gallery-grid img:nth-child(1) {
		grid-column: span 4;
		grid-row: span 2;
		aspect-ratio: 16 / 10;
	}

	.gallery-grid img:nth-child(2),
	.gallery-grid img:nth-child(3),
	.gallery-grid img:nth-child(4),
	.gallery-grid img:nth-child(5) {
		grid-column: span 2;
	}

	.gallery-grid img:nth-child(2) {
		grid-row: span 1;
	}

	.gallery-grid img:nth-child(3) {
		grid-row: span 1;
	}

	.gallery-grid img:nth-child(4) {
		grid-row: span 1;
		grid-column: span 2;
		aspect-ratio: 16 / 9;
	}

	@media (max-width: 860px) {
		.gallery-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.gallery-grid img:nth-child(1),
		.gallery-grid img:nth-child(2),
		.gallery-grid img:nth-child(3),
		.gallery-grid img:nth-child(4),
		.gallery-grid img:nth-child(5) {
			grid-column: span 1;
			grid-row: span 1;
			aspect-ratio: 4 / 3;
		}
	}

	.feature-grid,
	.metric-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 0.9rem;
	}

	.feature-card,
	.metric-card {
		border-radius: 1rem;
		padding: 1rem;
		border: 1px solid #e2e8f0;
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(3px);
		animation: riseIn 0.7s ease both;
		animation-delay: var(--delay);
		transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
	}

	.feature-card:hover,
	.metric-card:hover {
		transform: translateY(-4px);
		border-color: #93c5fd;
		box-shadow: 0 18px 30px -24px rgba(15, 77, 168, 0.75);
	}

	h3 {
		font-size: 1rem;
		font-weight: 700;
		color: #0f172a;
		margin-bottom: 0.45rem;
	}

	.feature-card p {
		color: #334155;
		line-height: 1.65;
		font-size: 0.95rem;
	}

	.metric-card span {
		display: block;
		font-size: 0.8rem;
		letter-spacing: 0.09em;
		text-transform: uppercase;
		color: #64748b;
		margin-bottom: 0.45rem;
	}

	.metric-card strong {
		font-size: 1.1rem;
		font-weight: 800;
		color: #0f4da8;
	}

	@keyframes riseIn {
		from {
			opacity: 0;
			transform: translateY(14px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (min-width: 860px) {
		.hero-card {
			grid-template-columns: 1.05fr 1fr;
			align-items: start;
			padding: 1.9rem;
			gap: 1.25rem;
		}
	}
</style>
