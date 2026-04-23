<script>
	import Counter from './Counter.svelte';

	const excellenceStats = [
		{
			value: '10000+',
			label: 'Engineers graduated so far',
			icon: 'M12 14.25c2.761 0 5-2.015 5-4.5s-2.239-4.5-5-4.5-5 2.015-5 4.5 2.239 4.5 5 4.5zM4.5 20.25a7.5 7.5 0 0115 0v.75h-15v-.75z'
		},
		{
			value: '17+',
			label: 'Years of academic excellence',
			icon: 'M12 3l2.7 5.47 6.03.87-4.37 4.26 1.03 6.01L12 16.86l-5.39 2.75 1.03-6.01-4.37-4.26 6.03-.87L12 3z'
		},
		{
			value: '250+',
			label: 'Experienced faculty members',
			icon: 'M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM4.5 21a7.5 7.5 0 0115 0v.75h-15V21z'
		},
		{
			value: '1000+',
			label: 'Placement offers every year',
			icon: 'M3.75 7.5h5.25v9h-5.25v-9zM15 7.5h5.25v9H15v-9zM9 12h6m-3-3v6'
		}
	];

	const infoCards = [
		{
			title: 'Academics',
			colorClass: 'card-academics',
			items: [
				{ value: '1500+', text: 'Undergraduate Students' },
				{ value: '200+', text: 'Postgraduate Students' },
				{ value: '8500+', text: 'Alumni' }
			]
		},
		{
			title: 'Placements',
			colorClass: 'card-placements',
			items: [
				{ value: '750+', text: 'Interns' },
				{ value: '90%', text: 'Placement' },
				{ value: '200+', text: 'Staff' }
			]
		},
		{
			title: 'Research',
			colorClass: 'card-research',
			items: [
				{ value: '200+', text: 'Staff' },
				{ value: '3200+', text: 'Projects' },
				{ value: '10+', text: 'Patents' }
			]
		}
	];
</script>

<section class="strength-shell" data-aos="fade-up">
	<div class="strength-container">
		<div class="excellence-panel" data-aos="fade-up" data-aos-delay="40">
			<h2 class="excellence-title">
				<svg
					class="title-icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						d="M12 3L1.5 8.25 12 13.5l8.58-4.29v5.58H22.5V8.25L12 3zm-7.5 9.3V15c0 2.49 3.36 4.5 7.5 4.5s7.5-2.01 7.5-4.5v-2.7L12 16.5 4.5 12.3z"
					/>
				</svg>
				ACADEMIC EXCELLENCE
			</h2>
			<div class="title-divider"></div>

			<div class="excellence-grid">
				{#each excellenceStats as stat, idx}
					<article class="excellence-item" data-aos="fade-up" data-aos-delay={80 + idx * 60}>
						<div class="item-icon-wrap">
							<svg
								class="item-icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d={stat.icon} />
							</svg>
						</div>
						<div class="item-copy">
							<p class="item-value"><Counter value={stat.value} /></p>
							<p class="item-label">{stat.label}</p>
						</div>
					</article>
				{/each}
			</div>
		</div>

		<div class="info-cards" data-aos="fade-up" data-aos-delay="120">
			{#each infoCards as card, idx}
				<article
					class={`info-card ${card.colorClass}`}
					data-aos="zoom-in"
					data-aos-delay={140 + idx * 70}
				>
					<h3 class="card-title">{card.title}</h3>
					<div class="card-lines">
						{#each card.items as line}
							<p class="card-line"><strong><Counter value={line.value} /></strong> {line.text}</p>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.strength-shell {
		padding: 2rem 0 3rem;
		background: #eceff2;
		font-family: 'Roboto', 'Segoe UI', sans-serif;
	}

	.strength-container {
		width: min(1360px, 98vw);
		margin: 0 auto;
	}

	.excellence-panel {
		border-radius: 14px;
		padding: 2.4rem 1.6rem 2.2rem;
		background: linear-gradient(180deg, #0d0f14 0%, #0b0c11 100%);
		color: #fff;
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.26);
	}

	.excellence-title {
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.68rem;
		font-size: clamp(1.75rem, 3vw, 3.2rem);
		font-weight: 900;
		letter-spacing: -0.01em;
		text-align: center;
	}

	.title-icon {
		width: clamp(2rem, 3vw, 3rem);
		height: clamp(2rem, 3vw, 3rem);
	}

	.title-divider {
		height: 1px;
		margin: 2rem auto 1.8rem;
		max-width: 86%;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0.24),
			rgba(255, 255, 255, 0)
		);
	}

	.excellence-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1.2rem;
	}

	.excellence-item {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.9rem;
		padding: 0.7rem 0.4rem;
	}

	.item-icon-wrap {
		display: grid;
		place-items: center;
		flex-shrink: 0;
		width: 52px;
		height: 52px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.06);
	}

	.item-icon {
		width: 28px;
		height: 28px;
		color: #fff;
	}

	.item-copy {
		min-width: 0;
	}

	.item-value {
		margin: 0;
		font-size: clamp(1.8rem, 2.3vw, 2.75rem);
		font-weight: 800;
		line-height: 1;
		color: #ffffff;
	}

	.item-label {
		margin: 0.38rem 0 0;
		font-size: clamp(0.92rem, 1.05vw, 1.45rem);
		line-height: 1.35;
		color: rgba(255, 255, 255, 0.9);
	}

	.info-cards {
		margin-top: 1.1rem;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	.info-card {
		border-radius: 10px;
		padding: 1.45rem 1.5rem 1.6rem;
		color: #fff;
		box-shadow: 0 12px 26px rgba(18, 26, 40, 0.18);
	}

	.card-title {
		margin: 0;
		font-size: clamp(2rem, 2.3vw, 2.25rem);
		line-height: 1.05;
		font-weight: 800;
		letter-spacing: -0.01em;
	}

	.card-lines {
		margin-top: 1.1rem;
		display: grid;
		gap: 0.65rem;
	}

	.card-line {
		margin: 0;
		font-size: clamp(1.5rem, 1.75vw, 2rem);
		line-height: 1.18;
		font-weight: 500;
	}

	.card-line strong {
		font-weight: 800;
	}

	.card-academics {
		background: #5aa80f;
	}

	.card-placements {
		background: #f7851b;
	}

	.card-research {
		background: #a01987;
	}

	@media (max-width: 1024px) {
		.excellence-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 0.9rem;
		}

		.info-cards {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 640px) {
		.strength-shell {
			padding: 1.5rem 0 2.5rem;
		}

		.excellence-panel {
			padding: 1.6rem 1rem 1.4rem;
			border-radius: 12px;
		}

		.excellence-title {
			font-size: clamp(1.2rem, 6vw, 1.8rem);
			gap: 0.5rem;
		}

		.title-divider {
			margin: 1.1rem auto 0.9rem;
			max-width: 90%;
		}

		.excellence-grid {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}

		.excellence-item {
			justify-content: flex-start;
			padding: 0.6rem 0.5rem;
			background: rgba(255, 255, 255, 0.03);
			border-radius: 8px;
		}

		.item-icon-wrap {
			width: 40px;
			height: 40px;
		}

		.item-icon {
			width: 20px;
			height: 20px;
		}

		.item-value {
			font-size: 1.75rem;
		}

		.item-label {
			font-size: 0.88rem;
			margin-top: 0.2rem;
		}

		.info-cards {
			margin-top: 1rem;
			gap: 0.8rem;
		}

		.info-card {
			padding: 1.25rem 1.2rem 1.4rem;
		}

		.card-title {
			font-size: 1.85rem;
		}

		.card-lines {
			margin-top: 0.9rem;
			gap: 0.5rem;
		}

		.card-line {
			font-size: 1.35rem;
		}
	}
</style>
