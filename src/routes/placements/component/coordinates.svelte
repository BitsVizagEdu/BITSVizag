<script>
	const items = [
		{
			name: 'Mr. T. Mouli',
			department: 'Computer Science & Engineering'
		},
		{
			name: 'Mrs. T. Pavani',
			department: 'Electronics & Communication Engineering'
		},
		{
			name: 'Mrs. G. Aliveni',
			department: 'Electrical & Electronics Engineering'
		},
		{
			name: 'Mr. V. Preetham',
			department: 'Mechanical Engineering'
		},
		{
			name: 'Mrs. K. Lavanya',
			department: 'Civil Engineering'
		},
		{
			name: 'Mrs. K Sireesha',
			department: 'Basic Sciences & Humanities'
		},
		{
			name: 'Mr. L. Sairama',
			department: 'MBA'
		}
	];
</script>

<section class="coord-section" aria-labelledby="coord-heading">
	<div class="coord-shell">
		<header class="coord-header">
			<p class="coord-kicker">Career Development Cell</p>
			<h2 id="coord-heading">Department Coordinators</h2>
			<p class="coord-subtitle">
				Department coordinators guide students with focused support for training, placements, and
				career readiness.
			</p>
		</header>

		<div class="coord-grid">
			{#each items as item, index}
				<article class="coord-card" style={`animation-delay: ${index * 70}ms;`}>
					<div class="coord-avatar">
						<img src="/faculty.svg" alt={item.name} loading="lazy" />
					</div>

					<h3>{item.name}</h3>
					<p class="coord-main-line">Department Coordinator</p>
					<p class="coord-description">{item.department}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.coord-section {
		padding: clamp(2rem, 5vw, 4rem) 1rem;
		font-family: 'Roboto', sans-serif;
	}

	.coord-shell {
		max-width: 1200px;
		margin: 0 auto;
	}

	.coord-header {
		max-width: 760px;
		margin: 0 auto;
		text-align: center;
	}

	.coord-kicker {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.42rem 0.88rem;
		border-radius: 999px;
		margin: 0;
		background: #cfe1ff;
		border: 1px solid #9cc0ff;
		color: #1e3a8a;
		font-size: 0.74rem;
		font-weight: 900;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.coord-header h2 {
		margin: 1rem 0 0;
		font-size: clamp(1.9rem, 4vw, 3rem);
		line-height: 1.05;
		font-weight: 900;
		letter-spacing: -0.02em;
		color: #0b1220;
		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
	}

	.coord-subtitle {
		margin: 0.85rem 0 0;
		font-size: clamp(0.95rem, 1.6vw, 1.06rem);
		line-height: 1.65;
		font-weight: 600;
		color: #334155;
	}

	.coord-grid {
		margin-top: clamp(1.9rem, 4vw, 3rem);
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(1rem, 2vw, 1.5rem);
	}

	.coord-card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.5rem;
		padding: 1.35rem 1rem 1.25rem;
		border-radius: 1.1rem;
		border: 1px solid rgba(148, 163, 184, 0.25);
		background: linear-gradient(180deg, #ffffff, #f8fbff);
		box-shadow: 0 18px 28px -24px rgba(15, 23, 42, 0.45);
		transition: transform 0.25s ease, box-shadow 0.25s ease;
		opacity: 0;
		animation: coord-enter 0.55s ease forwards;
	}

	.coord-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 24px 34px -23px rgba(37, 99, 235, 0.34);
	}

	.coord-avatar {
		width: 5.9rem;
		height: 5.9rem;
		border-radius: 999px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #eef5ff;
		border: 1px solid #bfdbfe;
		box-shadow: 0 10px 24px -18px rgba(37, 99, 235, 0.5);
		margin-bottom: 0.5rem;
	}

	.coord-avatar img {
		width: 4rem;
		height: 4rem;
		object-fit: contain;
		opacity: 0.9;
	}

	.coord-card h3 {
		margin: 0;
		font-size: clamp(1rem, 2vw, 1.24rem);
		font-weight: 800;
		line-height: 1.35;
		color: #0f172a;
	}

	.coord-main-line {
		margin: 0;
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #2563eb;
	}

	.coord-description {
		margin: 0;
		font-size: 0.96rem;
		font-weight: 500;
		line-height: 1.55;
		color: #475569;
	}

	@keyframes coord-enter {
		from {
			opacity: 0;
			transform: translateY(14px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 1024px) {
		.coord-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 640px) {
		.coord-section {
			padding-inline: 0.85rem;
		}

		.coord-grid {
			grid-template-columns: 1fr;
		}

		.coord-avatar {
			width: 6.3rem;
			height: 6.3rem;
		}

		.coord-avatar img {
			width: 4.25rem;
			height: 4.25rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.coord-card {
			animation: none;
			opacity: 1;
		}

		.coord-card:hover {
			transform: none;
		}
	}
</style>
