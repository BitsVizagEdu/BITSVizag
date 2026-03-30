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
		gap: 1.5rem;
		background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
		padding: 2rem;
		border-radius: 1.5rem;
		color: #f8fafc;
		animation: riseIn 0.72s ease;
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}

	.hero-card > div {
		display: grid;
		gap: 0.75rem;
		align-content: start;
	}

	.facility-kicker {
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: 600;
		color: #94a3b8;
		margin-bottom: 0;
	}

	h2 {
		font-family: 'Satoshi', sans-serif;
		font-size: clamp(1.5rem, 5vw, 2.5rem);
		font-weight: 800;
		line-height: 1.1;
		margin-bottom: 0.25rem;
	}

	.facility-intro {
		line-height: 1.6;
		font-size: 1.05rem;
		max-width: 60ch;
		color: #cbd5e1;
	}

	img {
		width: 100%;
		height: clamp(250px, 40vw, 400px);
		object-fit: cover;
		border-radius: 1.25rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.gallery-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(6, 1fr);
		align-items: stretch;
	}

	.gallery-grid img {
		height: auto;
		aspect-ratio: 4 / 3;
		display: block;
		border-radius: 1rem;
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
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.25rem;
	}

	.feature-card,
	.metric-card {
		border-radius: 1.25rem;
		padding: 1.5rem;
		border: 1px solid #f1f5f9;
		background: #ffffff;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		animation: riseIn 0.7s ease both;
		animation-delay: var(--delay);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.feature-card:hover,
	.metric-card:hover {
		transform: translateY(-4px);
		border-color: #e2e8f0;
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}

	h3 {
		font-family: 'Satoshi', sans-serif;
		font-size: 1.15rem;
		font-weight: 700;
		color: #0f172a;
		margin-bottom: 0.75rem;
	}

	.feature-card p {
		color: #475569;
		line-height: 1.6;
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
