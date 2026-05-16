<script>
	import { fade, fly } from 'svelte/transition';
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
	export let bgColor = '#e67e22';
	export let actionText = ''; // New prop for custom action text
	export let actionLink = '#'; // New prop for custom action link
	export let overlayText = 'Quality First'; // New prop for custom overlay text
	export let customClass = '';
</script>

<section class="facility-premium {customClass}">
	<!-- Modern Hero Section -->
	<div class="hero-container" in:fade={{ duration: 800 }}>
		<div
			class="info-sidebar"
			style="background-color: {bgColor};"
			in:fly={{ x: -50, duration: 800, delay: 200 }}
		>
			<div class="info-content">
				<div class="kicker-wrapper" in:fly={{ y: 20, duration: 600, delay: 400 }}>
					<div class="accent-bar"></div>
					<p class="facility-kicker">{kicker}</p>
				</div>
				<h2 class="hidden-title">{title}</h2>
				<div class="intro-wrapper" in:fly={{ y: 20, duration: 600, delay: 500 }}>
					<p class="facility-intro">{intro}</p>
				</div>

				<div in:fly={{ y: 20, duration: 600, delay: 600 }}>
					{#if actionText}
						<a href={actionLink} class="btn-action">
							{actionText}
							<i class="fa-solid fa-arrow-right-long"></i>
						</a>
					{:else}
						<div class="status-indicator">
							<span class="dot"></span>
							Available for Students
						</div>
					{/if}
				</div>
			</div>
		</div>

		<div class="gallery-wrapper">
			<div class="gallery-layout grid-{galleryImages.length > 0 ? galleryImages.length : 1}">
				{#if galleryImages.length > 0}
					{#each galleryImages as image, i}
						<div
							class="img-container item-{i + 1}"
							in:fly={{ scale: 0.95, opacity: 0, duration: 800, delay: 300 + i * 150 }}
						>
							<img src={image} alt={`${title} visual ${i + 1}`} />
							{#if i === 0}
								<div class="img-overlay" in:fade={{ delay: 1000 }}>
									<span class="overlay-text">{overlayText}</span>
								</div>
							{/if}
						</div>
					{/each}
				{:else}
					<div class="img-container item-1" in:fade={{ delay: 300 }}>
						<img src={imageSrc} alt={imageAlt || title} />
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Compact Sub-content Section -->
	<div class="sub-content-container">
		{#if features.length > 0}
			<div class="content-block">
				<div class="block-header" in:fade={{ delay: 800 }}>
					<h3>Facility Highlights</h3>
					<div class="h-line"></div>
				</div>
				<div class="feature-grid">
					{#each features as feature, i}
						<div class="feature-item" in:fly={{ y: 20, duration: 600, delay: 900 + i * 100 }}>
							<div class="feature-icon"><i class="fa-solid fa-circle-dot"></i></div>
							<div class="feature-text">
								<h4>{feature.title}</h4>
								<p>{feature.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		{#if metrics.length > 0}
			<div class="content-block">
				<div class="block-header" in:fade={{ delay: 1100 }}>
					<h3>Key Specifications</h3>
					<div class="h-line"></div>
				</div>
				<div class="metric-grid">
					{#each metrics as metric, i}
						<div class="metric-item" in:fly={{ y: 20, duration: 600, delay: 1200 + i * 80 }}>
							<span class="metric-label">{metric.label}</span>
							<span class="metric-value">{metric.value}</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.facility-premium {
		font-family: 'Inter', sans-serif;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		background: #ffffff;
		padding-bottom: 2rem;
	}

	/* Hero Section Styles */
	.hero-container {
		display: flex;
		min-height: 520px;
		background: #ffffff;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.04);
		border: 1px solid #f1f5f9;
	}

	.info-sidebar {
		flex: 0 0 35%;
		padding: 3rem 2.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #ffffff;
		position: relative;
	}

	.kicker-wrapper {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 1.5rem;
	}

	.accent-bar {
		width: 3px;
		height: 28px;
		background: #ffffff;
		border-radius: 2px;
	}

	.facility-kicker {
		font-size: 1.6rem;
		font-weight: 500;
		letter-spacing: -0.01em;
		opacity: 0.98;
		line-height: 1.2;
	}

	.hidden-title {
		display: none;
	}

	.intro-wrapper {
		margin-bottom: 2.5rem;
	}

	.facility-intro {
		font-size: 0.95rem;
		line-height: 1.6;
		opacity: 0.85;
		font-weight: 400;
		max-width: 35ch;
	}

	.btn-action {
		display: flex;
		align-items: center;
		gap: 10px;
		background: #ffffff;
		color: #1e293b;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.85rem;
		width: fit-content;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
	}

	.btn-action:hover {
		transform: translateX(4px);
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
	}

	.status-indicator {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.85rem;
		font-weight: 600;
		color: #ffffff;
		opacity: 0.9;
		background: rgba(255, 255, 255, 0.15);
		padding: 0.5rem 1rem;
		border-radius: 99px;
		width: fit-content;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.status-indicator .dot {
		width: 8px;
		height: 8px;
		background: #4ade80;
		border-radius: 50%;
		box-shadow: 0 0 8px #4ade80;
	}

	/* Gallery Styles */
	.gallery-wrapper {
		flex: 1;
		padding: 2rem;
		background: #ffffff;
	}

	.gallery-layout {
		display: grid;
		gap: 10px;
		height: 100%;
	}

	.img-container {
		position: relative;
		border-radius: 6px;
		overflow: hidden;
	}

	.img-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	.img-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
		display: flex;
		align-items: flex-end;
		padding: 1.5rem;
	}

	.overlay-text {
		color: #ffffff;
		font-size: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.02em;
	}

	/* Grid Variations */
	.grid-5 {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}
	.grid-5 .item-1 {
		grid-column: 1;
		grid-row: 1;
	}
	.grid-5 .item-2 {
		grid-column: 1;
		grid-row: 2;
	}
	.grid-5 .item-3 {
		grid-column: 2;
		grid-row: 1 / span 2;
	}
	.grid-5 .item-4 {
		grid-column: 3;
		grid-row: 1;
	}
	.grid-5 .item-5 {
		grid-column: 3;
		grid-row: 2;
	}

	.grid-4 {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}

	.grid-2 {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
		gap: 15px;
	}
	.grid-2 .img-container {
		height: 250px;
	}

	/* Transport specific layout fix */
	.transport-layout .grid-2 {
		grid-template-rows: auto auto;
	}

	.transport-layout .grid-2 .item-2 {
		height: 320px; /* Significantly expanded height for the second transport image (likely a tall bus shot) */
	}

	.transport-layout .grid-2 .item-1 {
		height: 300px;
	}

	.grid-1 {
		grid-template-columns: 1fr;
	}

	/* Sub-content Styles (Tight & Aligned) */
	.sub-content-container {
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.content-block {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.block-header {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.block-header h3 {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 700;
		color: #94a3b8;
		white-space: nowrap;
	}

	.h-line {
		flex: 1;
		height: 1px;
		background: #f1f5f9;
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1rem;
	}

	.feature-item {
		display: flex;
		gap: 1rem;
		padding: 1.25rem;
		background: #fcfcfc;
		border-radius: 12px;
		border: 1px solid #f1f5f9;
		transition: all 0.3s ease;
	}

	.feature-item:hover {
		border-color: #e2e8f0;
		background: #ffffff;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
	}

	.feature-icon {
		color: #cbd5e1;
		font-size: 0.6rem;
		margin-top: 0.2rem;
	}

	.feature-text h4 {
		font-size: 0.95rem;
		font-weight: 700;
		color: #1e293b;
		margin-bottom: 0.35rem;
	}

	.feature-text p {
		font-size: 0.85rem;
		line-height: 1.5;
		color: #64748b;
	}

	.metric-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 0.75rem;
	}

	.metric-item {
		padding: 1rem;
		background: #f8fafc;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		border: 1px solid #f1f5f9;
	}

	.metric-label {
		font-size: 0.7rem;
		font-weight: 600;
		color: #94a3b8;
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}

	.metric-value {
		font-size: 1rem;
		font-weight: 700;
		color: #1e293b;
	}

	@media (max-width: 1024px) {
		.hero-container {
			flex-direction: column;
			min-height: auto;
			border-radius: 12px;
		}
		.info-sidebar {
			flex: 1;
			padding: 2.5rem 1.5rem;
			text-align: center;
			align-items: center;
		}
		.kicker-wrapper {
			justify-content: center;
		}
		.facility-intro {
			max-width: 100%;
			margin: 0 auto;
		}
		.btn-action,
		.status-indicator {
			margin: 0 auto;
		}
		.gallery-wrapper {
			padding: 1rem;
		}
		.gallery-layout {
			min-height: auto;
			gap: 8px;
		}
	}

	@media (max-width: 640px) {
		.facility-premium {
			gap: 1.5rem;
		}
		.hero-container {
			margin: 0 -0.5rem; /* Slight overflow to give it more 'full-width' feel on tiny screens */
			border-radius: 8px;
		}
		.facility-kicker {
			font-size: 1.25rem;
		}
		.gallery-layout {
			grid-template-columns: 1fr; /* One image per row as requested */
		}
		/* For all grids on mobile, keep it single column */
		.grid-5,
		.grid-4,
		.grid-2 {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
		}
		.img-container {
			height: 240px; /* Slightly taller for a better view of each image */
		}
		.transport-layout .img-container.item-1 {
			height: 300px;
		}
		.transport-layout .img-container.item-2 {
			height: 480px;
		}
		.img-container.item-1,
		.img-container.item-2,
		.img-container.item-3,
		.img-container.item-4,
		.img-container.item-5 {
			grid-column: span 1;
			grid-row: auto;
		}
		.overlay-text {
			font-size: 1rem;
		}
		.sub-content-container {
			padding: 0;
			gap: 2rem;
		}
		.feature-grid {
			grid-template-columns: 1fr;
		}
		.metric-grid {
			grid-template-columns: 1fr 1fr; /* 2 columns for metrics looks neater */
		}
	}
</style>
