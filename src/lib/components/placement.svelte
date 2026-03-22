<section class="recruiters-premium">
	<div class="ambient one" aria-hidden="true"></div>
	<div class="ambient two" aria-hidden="true"></div>

	<div class="inner-shell">
		<div class="heading" data-aos="fade-up">
			<p class="eyebrow">Industry Network</p>
			<h2>
				Top <span>Recruiters</span>
			</h2>
			<p class="subtitle">
				Trusted hiring partners that create strong career outcomes and real student impact.
			</p>
		</div>

		<div class="marquee-wrapper">
			<div class="fade-edge left" aria-hidden="true"></div>
			<div class="fade-edge right" aria-hidden="true"></div>

			<div class="marquee-content">
				<div class="marquee-track">
					{#each [...Array(10), ...Array(10)] as _, i}
						{@const logoNum = (i % 10) + 1}
						<div class="logo-card group" data-aos="zoom-in" data-aos-delay={Math.min(i * 20, 200)}>
							<div class="logo-inner">
								<img src="/logo-150/{logoNum}.png" alt="Recruiter {logoNum}" class="company-logo" />
							</div>
							<div class="logo-glow" aria-hidden="true"></div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.recruiters-premium {
		position: relative;
		overflow: hidden;
		padding: 5rem 0;
		font-family: 'Roboto', 'Segoe UI', sans-serif;
		background:
			radial-gradient(1150px 500px at -8% -28%, rgba(255, 193, 126, 0.22), transparent 58%),
			radial-gradient(900px 450px at 102% 112%, rgba(116, 177, 255, 0.2), transparent 58%),
			linear-gradient(128deg, #061430 0%, #091f47 46%, #0b2858 100%);
	}

	.ambient {
		position: absolute;
		width: 320px;
		height: 320px;
		border-radius: 50%;
		filter: blur(52px);
		opacity: 0.45;
		pointer-events: none;
	}

	.ambient.one {
		top: -180px;
		left: -90px;
		background: rgba(255, 174, 84, 0.52);
	}

	.ambient.two {
		right: -120px;
		bottom: -190px;
		background: rgba(121, 169, 255, 0.48);
	}

	.inner-shell {
		position: relative;
		z-index: 2;
		width: min(1500px, 95vw);
		margin: 0 auto;
		padding: 2rem clamp(1rem, 2vw, 2rem);
		border-radius: 1.7rem;
		border: 1px solid rgba(180, 209, 255, 0.22);
		background: linear-gradient(120deg, rgba(8, 24, 59, 0.85), rgba(15, 38, 81, 0.74));
		box-shadow: 0 26px 70px -36px rgba(0, 0, 0, 0.75);
	}

	.heading {
		text-align: center;
		margin-bottom: 1.7rem;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.75rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		font-weight: 700;
		color: #9bc0ff;
	}

	.heading h2 {
		margin: 0.42rem 0 0;
		font-size: clamp(2rem, 4vw, 3.25rem);
		line-height: 1.05;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: #f8fcff;
	}

	.heading h2 span {
		background: linear-gradient(90deg, #7ec2ff 0%, #b7d8ff 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.subtitle {
		margin: 0.72rem auto 0;
		max-width: 42rem;
		font-size: 1.01rem;
		line-height: 1.6;
		font-weight: 500;
		color: #d3e2ff;
	}

	.marquee-wrapper {
		width: 100%;
		overflow: hidden;
		padding: 20px 0 26px;
		mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
		-webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
		border-radius: 1rem;
	}

	.fade-edge {
		position: absolute;
		inset-block: 0;
		width: 6.2rem;
		z-index: 5;
		pointer-events: none;
	}

	.fade-edge.left {
		left: 0;
		background: linear-gradient(to right, rgba(10, 29, 68, 1), rgba(10, 29, 68, 0));
	}

	.fade-edge.right {
		right: 0;
		background: linear-gradient(to left, rgba(10, 29, 68, 1), rgba(10, 29, 68, 0));
	}

	.marquee-content {
		display: flex;
		width: max-content;
	}

	.marquee-track {
		display: flex;
		gap: 1.2rem;
		animation: scroll 36s linear infinite;
		padding: 12px;
	}

	.marquee-track:hover {
		animation-play-state: paused;
	}

	.logo-card {
		position: relative;
		width: 190px;
		height: 98px;
		background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(244, 250, 255, 0.92));
		border: 1px solid rgba(179, 204, 244, 0.62);
		border-radius: 1.1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.1rem;
		box-shadow:
			0 16px 34px -22px rgba(14, 40, 91, 0.42),
			0 8px 16px -16px rgba(0, 0, 0, 0.28);
		transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
		cursor: pointer;
		flex-shrink: 0;
	}

	.logo-card:hover {
		transform: translateY(-6px) scale(1.03);
		box-shadow:
			0 24px 36px -22px rgba(16, 58, 128, 0.45),
			0 14px 20px -14px rgba(0, 0, 0, 0.22);
		border-color: rgba(54, 123, 233, 0.75);
	}

	.logo-inner {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	.company-logo {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		filter: drop-shadow(0 2px 4px rgba(2, 18, 47, 0.15));
		transition: transform 0.35s ease;
	}

	.logo-card:hover .company-logo {
		transform: scale(1.03);
	}

	.logo-glow {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background: radial-gradient(circle at 50% 120%, rgba(104, 167, 255, 0.34), transparent 55%);
		opacity: 0;
		transition: opacity 0.35s ease;
	}

	.logo-card:hover .logo-glow {
		opacity: 1;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-50% - 1rem)); /* Accounting for half the track + gap adjustment */
		}
	}

	@media (max-width: 768px) {
		.recruiters-premium {
			padding: 3.6rem 0;
		}

		.inner-shell {
			padding: 1.4rem 0.95rem;
		}

		.logo-card {
			width: 150px;
			height: 82px;
			padding: 1rem;
		}

		.marquee-track {
			gap: 0.85rem;
		}

		.fade-edge {
			width: 3.2rem;
		}

		@keyframes scroll {
			0% {
				transform: translateX(0);
			}
			100% {
				transform: translateX(calc(-50% - 0.425rem));
			}
		}
	}
</style>
