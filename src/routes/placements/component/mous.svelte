<!-- <script>
	const authorityMessages = [
		{
			role: 'Secretary & Correspondent',
			image: '/t2.jpg',
			headline: 'Path to Success: Learn, Adapt, and Work with Passion and Integrity.',
			quote:
				'Embrace continuous learning, cultivate resilience, and work with passion and integrity on your path to success.',
			accent: '#0284c7',
			tint: 'rgba(14, 165, 233, 0.10)',
			border: 'rgba(56, 189, 248, 0.35)'
		},
		{
			role: 'Principal',
			image: '/principal copy.jpg',
			headline: 'Embracing Your Passion: Igniting a Path to Remarkable Future.',
			quote:
				'Let your passion ignite the path to a remarkable and rewarding future; stay true to yourself.',
			accent: '#1d4ed8',
			tint: 'rgba(59, 130, 246, 0.10)',
			border: 'rgba(96, 165, 250, 0.35)'
		},
		{
			role: 'Training & Placement Officer',
			image: '/t5.jpg',
			headline: 'Driving Greatness: Self-Motivation, Knowledge, and Resilience.',
			quote:
				'Self-motivation and a hunger for knowledge lead the way to greatness; overcome setbacks with resilience.',
			accent: '#7c3aed',
			tint: 'rgba(168, 85, 247, 0.10)',
			border: 'rgba(196, 181, 253, 0.38)'
		}
	];
</script>

<section class="authorities-section" aria-labelledby="authorities-heading">
	<div class="authorities-shell">
		<header class="authorities-header">
			<p class="authorities-kicker">Career Development Cell</p>
			<h2 id="authorities-heading">Address from Academic Authorities</h2>
			<p class="authorities-subtitle">
				Guidance from leadership that helps students build confidence, discipline, and career-ready
				mindset.
			</p>
		</header>

		<div class="authorities-grid">
			{#each authorityMessages as item, index}
				<article
					class="authority-card"
					style={`--accent: ${item.accent}; --tint: ${item.tint}; --card-border: ${item.border}; animation-delay: ${
						index * 90
					}ms;`}
				>
					<div class="authority-avatar">
						<img src={item.image} alt={item.role} loading="lazy" />
					</div>

					<div class="authority-content">
						<p class="authority-role">{item.role}</p>
						<h3>{item.headline}</h3>
						<p class="authority-quote">"{item.quote}"</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.authorities-section {
		padding: clamp(2rem, 5vw, 4rem) 1rem;
	}

	.authorities-shell {
		max-width: 1200px;
		margin: 0 auto;
	}

	.authorities-header {
		text-align: center;
		max-width: 760px;
		margin: 0 auto;
		font-family: 'Roboto', sans-serif;
	}

	.authorities-kicker {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.42rem 0.9rem;
		border-radius: 999px;
		font-size: 0.74rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: #1d4ed8;
		background: #dbeafe;
		border: 1px solid #bfdbfe;
		margin: 0;
		font-family: 'Roboto', sans-serif;
		font-style: normal;
	}

	.authorities-header h2 {
		margin: 1rem 0 0;
		font-family: 'Roboto', sans-serif;
		font-size: clamp(1.8rem, 4vw, 3rem);
		line-height: 1.05;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: #0f172a;
	}

	.authorities-subtitle {
		margin: 0.85rem auto 0;
		font-size: clamp(0.95rem, 1.5vw, 1.06rem);
		line-height: 1.65;
		color: #475569;
	}

	.authorities-grid {
		margin-top: clamp(3rem, 5vw, 4.25rem);
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(1.2rem, 2.5vw, 1.8rem);
	}

	.authority-card {
		position: relative;
		overflow: visible;
		border-radius: 1.25rem;
		border: 1px solid var(--card-border);
		background: linear-gradient(180deg, #ffffff, var(--tint));
		padding: 5.85rem 1.2rem 1.35rem;
		box-shadow: 0 20px 38px -25px rgba(15, 23, 42, 0.42);
		transition: transform 0.28s ease, box-shadow 0.28s ease;
		opacity: 0;
		animation: card-enter 0.6s ease forwards;
	}

	.authority-card::before {
		content: '';
		position: absolute;
		left: 1.2rem;
		right: 1.2rem;
		top: 4.7rem;
		height: 1px;
		background: rgba(148, 163, 184, 0.25);
	}

	.authority-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 28px 44px -26px rgba(15, 23, 42, 0.52);
	}

	.authority-avatar {
		position: absolute;
		top: -2.35rem;
		left: 50%;
		transform: translateX(-50%);
		width: 7rem;
		height: 7rem;
		padding: 4px;
		border-radius: 1.15rem;
		background: #ffffff;
		border: 1px solid var(--card-border);
		box-shadow: 0 16px 30px -18px rgba(15, 23, 42, 0.48);
	}

	.authority-avatar img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		border-radius: 0.98rem;

	}

	.authority-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.9rem;
	}

	.authority-role {
		margin: 0;
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
	}

	.authority-content h3 {
		margin: 0;
		font-family: 'Roboto', sans-serif;
		font-size: clamp(1rem, 2vw, 1.28rem);
		line-height: 1.35;
		font-weight: 800;
		color: #111827;
	}

	.authority-quote {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
		color: #475569;
		font-style: italic;
	}

	@keyframes card-enter {
		from {
			opacity: 0;
			transform: translateY(18px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 1024px) {
		.authorities-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.authority-card:last-child {
			grid-column: 1 / -1;
			max-width: 520px;
			margin: 0 auto;
		}
	}

	@media (max-width: 680px) {
		.authorities-section {
			padding-inline: 0.85rem;
		}

		.authorities-grid {
			margin-top: 2.6rem;
			grid-template-columns: 1fr;
			gap: 2.7rem;
		}

		.authority-card,
		.authority-card:last-child {
			grid-column: auto;
			max-width: 100%;
			margin: 0;
			padding-top: 5.45rem;
		}

		.authority-card::before {
			top: 4.35rem;
		}

		.authority-avatar {
			width: 6.35rem;
			height: 6.35rem;
			top: -2.15rem;
		}

		.authority-content h3 {
			font-size: 1.05rem;
		}

		.authority-quote {
			font-size: 0.92rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.authority-card {
			animation: none;
			opacity: 1;
		}

		.authority-card:hover {
			transform: none;
		}
	}
</style> -->
