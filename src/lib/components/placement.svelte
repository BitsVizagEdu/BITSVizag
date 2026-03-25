<script>
	const recruiterLogos = [
		...Array.from({ length: 40 }, (_, i) => `/company/image (${i + 1}).png`),
		'/company/image(41).jpg',
		'/company/image(42).jpg'
	];

	const splitPoint = Math.ceil(recruiterLogos.length / 2);
	const firstRowLogos = recruiterLogos.slice(0, splitPoint);
	const secondRowLogos = recruiterLogos.slice(splitPoint);
</script>

<section class="recruiters-premium">
	<div class="ambient one" aria-hidden="true"></div>
	<div class="ambient two" aria-hidden="true"></div>

	<div class="inner-shell">
		<div class="heading" data-aos="fade-up">
			<p class="eyebrow">Industry Network</p>
			<h2>
				Our <span>Recruiters</span> <span>	Till Date</span>
			</h2>
			<p class="subtitle">
				Trusted hiring partners that create strong career outcomes and real student impact.
			</p>
		</div>

		<div class="marquee-wrapper">
			<div class="fade-edge left" aria-hidden="true"></div>
			<div class="fade-edge right" aria-hidden="true"></div>

			<div class="marquee-grid">
				<div class="marquee-content">
					<div class="marquee-track marquee-track-ltr">
						{#each [...firstRowLogos, ...firstRowLogos] as logo, i}
							<div class="logo-card" data-aos="zoom-in" data-aos-delay={Math.min(i * 20, 220)}>
								<div class="logo-inner">
									<img src={encodeURI(logo)} alt="Recruiter logo" class="company-logo" />
								</div>
								<div class="logo-glow" aria-hidden="true"></div>
							</div>
						{/each}
					</div>
				</div>

				<div class="marquee-content">
					<div class="marquee-track marquee-track-rtl">
						{#each [...secondRowLogos, ...secondRowLogos] as logo, i}
							<div class="logo-card" data-aos="zoom-in" data-aos-delay={Math.min(i * 20, 220)}>
								<div class="logo-inner">
									<img src={encodeURI(logo)} alt="Recruiter logo" class="company-logo" />
								</div>
								<div class="logo-glow" aria-hidden="true"></div>
							</div>
						{/each}
					</div>
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
			radial-gradient(980px 420px at -10% -24%, rgba(94, 176, 255, 0.2), transparent 56%),
			radial-gradient(920px 420px at 108% 115%, rgba(122, 208, 255, 0.19), transparent 57%),
			linear-gradient(125deg, #ffffff 0%, #f8fcff 46%, #eef7ff 100%);
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
		background: rgba(111, 196, 255, 0.34);
	}

	.ambient.two {
		right: -120px;
		bottom: -190px;
		background: rgba(153, 214, 255, 0.32);
	}

	.inner-shell {
		position: relative;
		z-index: 2;
		width: min(1500px, 95vw);
		margin: 0 auto;
		padding: 2rem clamp(1rem, 2vw, 2rem);
		border-radius: 1.7rem;
		border: 1px solid rgba(122, 183, 255, 0.3);
		background: linear-gradient(132deg, rgba(255, 255, 255, 0.96), rgba(242, 250, 255, 0.9));
		box-shadow:
			0 28px 70px -38px rgba(48, 137, 233, 0.28),
			inset 0 1px 0 rgba(255, 255, 255, 0.9);
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
		color: #3dc82b;
	}

	.heading h2 {
		margin: 0.42rem 0 0;
		font-size: clamp(2rem, 4vw, 3.25rem);
		line-height: 1.05;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: #03172a;
	}

	.heading h2 span {
		background: linear-gradient(90deg, #000000 0%, #000000 100%);
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
		color: #356ca2;
	}

	.marquee-wrapper {
		position: relative;
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
		background: linear-gradient(to right, rgba(245, 251, 255, 1), rgba(245, 251, 255, 0));
	}

	.fade-edge.right {
		right: 0;
		background: linear-gradient(to left, rgba(245, 251, 255, 1), rgba(245, 251, 255, 0));
	}

	.marquee-grid {
		display: grid;
		gap: 0.95rem;
	}

	.marquee-content {
		display: flex;
		width: max-content;
	}

	.marquee-track {
		display: flex;
		gap: 1.2rem;
		padding: 12px;
	}

	.marquee-track-ltr {
		animation: scroll-ltr 34s linear infinite;
	}

	.marquee-track-rtl {
		animation: scroll-rtl 34s linear infinite;
	}

	.marquee-track:hover {
		animation-play-state: paused;
	}

	.logo-card {
		position: relative;
		width: 190px;
		height: 98px;
		background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(241, 249, 255, 0.95));
		border: 1px solid rgba(137, 192, 255, 0.42);
		border-radius: 1.1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.1rem;
		box-shadow:
			0 18px 32px -24px rgba(63, 152, 240, 0.26),
			0 8px 16px -16px rgba(77, 155, 229, 0.2);
		transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
		cursor: pointer;
		flex-shrink: 0;
	}

	.logo-card:hover {
		transform: translateY(-6px) scale(1.03);
		box-shadow:
			0 24px 36px -22px rgba(40, 140, 236, 0.34),
			0 14px 20px -14px rgba(54, 150, 241, 0.22);
		border-color: rgba(61, 145, 228, 0.85);
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
		filter: drop-shadow(0 2px 4px rgba(39, 126, 211, 0.2));
		transition: transform 0.35s ease;
	}

	.logo-card:hover .company-logo {
		transform: scale(1.03);
	}

	.logo-glow {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background: radial-gradient(circle at 50% 120%, rgba(90, 179, 255, 0.28), transparent 55%);
		opacity: 0;
		transition: opacity 0.35s ease;
	}

	.logo-card:hover .logo-glow {
		opacity: 1;
	}

	@keyframes scroll-ltr {
		0% {
			transform: translateX(calc(-50% - 0.6rem));
		}
		100% {
			transform: translateX(0);
		}
	}

	@keyframes scroll-rtl {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-50% - 0.6rem));
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

		.marquee-grid {
			gap: 0.65rem;
		}

		.fade-edge {
			width: 3.2rem;
		}

		@keyframes scroll-ltr {
			0% {
				transform: translateX(calc(-50% - 0.425rem));
			}
			100% {
				transform: translateX(0);
			}
		}

		@keyframes scroll-rtl {
			0% {
				transform: translateX(0);
			}
			100% {
				transform: translateX(calc(-50% - 0.425rem));
			}
		}
	}
</style>
