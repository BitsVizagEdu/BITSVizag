<script>
	import { onMount } from 'svelte';

	let activeIndex = 0;

	const strengths = [
		{
			id: '01',
			title: 'ACADEMIC EXCELLENCE',
			description:
				'Over 18 years of academic excellence driven by 150+ experienced faculty members, nurturing 1,500+ undergraduate and 200+ postgraduate minds.',
			color: '#ffb356', // Orange
			textColor: '#1a1a1a'
		},
		{
			id: '02',
			title: 'PREMIUM PLACEMENTS',
			description:
				'Securing 200+ placement offers annually with a 90% placement rate. Empowering 5,000+ placed students and 1,000+ interns in leading global companies.',
			color: '#8ecdfa', // Light Blue
			textColor: '#1a1a1a'
		},
		{
			id: '03',
			title: 'RESEARCH & INNOVATION',
			description:
				'Fostering future-ready research with 20+ international publications, 200+ successfully executed projects, and 10+ filed patents.',
			color: '#c3b5ff', // Soft Purple
			textColor: '#1a1a1a'
		},
		{
			id: '04',
			title: 'GLOBAL ALUMNI NETWORK',
			description:
				'Connecting over 10,000+ graduated engineers and 8,500+ active alumni who are making an impact in technology and leadership globally.',
			color: '#e7b2ff', // Soft Pink/Magenta
			textColor: '#1a1a1a'
		}
	];

	function setActive(index) {
		activeIndex = index;
	}
</script>

<section class="strength-shell" data-aos="fade-up">
	<div class="strength-container">
		<!-- Header Section -->
		<div class="strength-header">
			<h4 class="main-title">See tangible outcomes</h4>
			<span class="sub-title">OUR STRENGTHS</span>
		</div>

		<!-- Accordion Section -->
		<div class="accordion-list">
			{#each strengths as item, idx}
				<button
					class="accordion-item {activeIndex === idx ? 'active' : ''}"
					style="--item-bg: {item.color}; --item-color: {item.textColor};"
					on:click={() => setActive(idx)}
					aria-expanded={activeIndex === idx}
				>
					{#if activeIndex === idx}
						<div class="active-content">
							<div class="text-side">
								<h3 class="item-title">
									<span class="id-num">{item.id}</span>
									<span class="arrow-symbol">→</span>
									<span class="title-text">{item.title}</span>
								</h3>
								<p class="item-desc">{item.description}</p>
							</div>
							<div class="arrow-side">
								<svg
									class="large-arrow"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<line x1="5" y1="12" x2="19" y2="12"></line>
									<polyline points="12 5 19 12 12 19"></polyline>
								</svg>
							</div>
						</div>
					{:else}
						<div class="collapsed-content">
							<h3 class="item-title collapsed">
								<span class="id-num">{item.id}</span>
								<span class="arrow-symbol">→</span>
								<span class="title-text">{item.title}</span>
							</h3>
						</div>
					{/if}
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	.strength-shell {
		padding: 6rem 0;
		background: #ffffff;
		font-family:
			'Inter',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			sans-serif;
	}

	.strength-container {
		width: min(1280px, 92vw);
		margin: 0 auto;
	}

	.strength-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 4rem;
	}

	.main-title {
		font-size: clamp(2rem, 3.5vw, 3.5rem);
		font-weight: 700;
		line-height: 0.95;
		color: #1a1a1a;
		letter-spacing: -0.03em;
		margin: 0;
	}

	.sub-title {
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #1a1a1a;
		text-transform: uppercase;
		margin-top: 1rem;
	}

	.accordion-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.accordion-item {
		width: 100%;
		border: none;
		outline: none;
		cursor: pointer;
		text-align: left;
		background-color: var(--item-bg);
		color: var(--item-color);
		border-radius: 4px;
		padding: 0;
		transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
		overflow: hidden;
	}

	.accordion-item:focus-visible {
		outline: 3px solid #1a1a1a;
		outline-offset: 2px;
	}

	/* Collapsed Styles */
	.collapsed-content {
		padding: 1.5rem 2rem;
		display: flex;
		align-items: center;
	}

	.item-title {
		display: flex;
		align-items: center;
		margin: 0;
		font-size: clamp(1.1rem, 2vw, 1.6rem);
		font-weight: 600;
		letter-spacing: -0.01em;
	}

	.item-title.collapsed {
		opacity: 0.9;
	}

	.id-num {
		font-variant-numeric: tabular-nums;
		margin-right: 0.75rem;
	}

	.arrow-symbol {
		margin-right: 1.25rem;
		opacity: 0.7;
	}

	/* Active Styles */
	.accordion-item.active {
		cursor: default;
	}

	.active-content {
		display: grid;
		grid-template-columns: 1fr 200px;
		min-height: 260px;
	}

	.text-side {
		padding: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.text-side .item-title {
		font-size: clamp(1.4rem, 2.5vw, 2.2rem);
		font-weight: 600;
		margin-bottom: 2rem;
	}

	.item-desc {
		margin: 0;
		font-size: clamp(1rem, 1.3vw, 1.4rem);
		line-height: 1.5;
		max-width: 680px;
		opacity: 0.85;
		font-weight: 500;
	}

	.arrow-side {
		border-left: 1px solid rgba(0, 0, 0, 0.1);
		display: grid;
		place-items: center;
	}

	.large-arrow {
		width: 44px;
		height: 44px;
		opacity: 0.85;
		stroke-width: 2.2;
		transition: transform 0.3s ease;
	}

	.accordion-item:hover .large-arrow {
		transform: translateX(4px);
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.strength-shell {
			padding: 2.5rem 0;
		}

		.strength-header {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			gap: 0.5rem;
			margin-bottom: 1.5rem;
		}

		.main-title {
			font-size: 1.6rem;
		}

		.sub-title {
			margin-top: 0;
			font-size: 0.75rem;
		}

		.active-content {
			grid-template-columns: 1fr;
			min-height: auto;
		}

		.text-side {
			padding: 1.25rem 1rem;
		}

		.text-side .item-title {
			font-size: 1.1rem;
			margin-bottom: 0.75rem;
		}

		.item-desc {
			font-size: 0.85rem;
			line-height: 1.45;
		}

		.arrow-side {
			display: none; /* Hide arrow side to save vertical height on mobile */
		}

		.collapsed-content {
			padding: 0.85rem 1rem;
		}

		.item-title {
			font-size: 1rem;
		}
	}
</style>
