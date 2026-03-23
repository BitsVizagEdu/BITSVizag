<section class="cdc-hero">
	<div class="cdc-hero-bg" aria-hidden="true"></div>
	<div class="cdc-hero-shade" aria-hidden="true"></div>

	<div class="cdc-hero-grid">
		<div class="cdc-copy">
			<p class="cdc-kicker">Career Development Cell</p>
			<h1>Training And Placement Cell</h1>
			<p class="cdc-description">
				We prepare students for high-impact careers through focused training, industry-aligned
				programs, and strong recruiter engagement.
			</p>
			<div class="cdc-pill-row">
				<span>Campus Placements</span>
				<span>Industry Linkages</span>
				<span>Skill Development</span>
			</div>
		</div>

		<div class="cdc-media-wrap">
			<div class="cdc-media-card">
				<div class="cdc-media-sheen" aria-hidden="true"></div>
				<div class="cdc-media-inner">
					<img
						src="/gallery/g1.jpg"
						alt="Top placement achiever at BITS Vizag"
						loading="lazy"
					/>
				</div>
			</div>
			<!-- <p class="cdc-media-caption">Highest Package Achiever Spotlight</p> -->
		</div>
	</div>
</section>

<style>
	.cdc-hero {
		position: relative;
		isolation: isolate;
		overflow: hidden;
		padding: clamp(1.75rem, 4vw, 4.25rem) 1rem;
		background:
			radial-gradient(circle at 82% 10%, rgba(16, 185, 129, 0.18), transparent 32%),
			radial-gradient(circle at 8% 0%, rgba(59, 130, 246, 0.22), transparent 36%),
			#030a1f;
	}

	.cdc-hero-bg {
		position: absolute;
		inset: -1.5rem;
		background-image: url('/header/tnp.png');
		background-size: cover;
		background-position: center;
		filter: saturate(1.15) brightness(0.38);
		transform: scale(1.08);
		animation: cdc-pan 16s ease-in-out infinite alternate;
	}

	.cdc-hero-shade {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 14% 22%, rgba(37, 99, 235, 0.34), transparent 44%),
			linear-gradient(112deg, rgba(2, 6, 23, 0.9), rgba(2, 6, 23, 0.56));
	}

	.cdc-hero-grid {
		position: relative;
		z-index: 1;
		max-width: 1260px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.85fr);
		gap: clamp(1.25rem, 3vw, 3.2rem);
		align-items: center;
	}

	.cdc-copy {
		animation: cdc-enter-up 0.7s ease both;
	}

	.cdc-kicker {
		display: inline-flex;
		align-items: center;
		padding: 0.4rem 0.78rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.22);
		background: rgba(15, 23, 42, 0.38);
		backdrop-filter: blur(8px);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(248, 250, 252, 0.94);
		margin: 0 0 1rem;
	}

	.cdc-copy h1 {
		margin: 0;
		font-family: 'Sora', 'Montserrat', 'Roboto', sans-serif;
		font-weight: 900;
		font-size: clamp(2.1rem, 5.8vw, 5rem);
		line-height: 0.96;
		letter-spacing: -0.02em;
		text-transform: uppercase;
		color: #f8fafc;
		text-shadow: 0 10px 25px rgba(2, 6, 23, 0.45);
		max-width: 13ch;
	}

	.cdc-description {
		margin: 1.1rem 0 0;
		max-width: 54ch;
		font-size: clamp(0.95rem, 1.2vw, 1.08rem);
		line-height: 1.65;
		color: rgba(226, 232, 240, 0.94);
	}

	.cdc-pill-row {
		margin-top: 1.15rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem;
	}

	.cdc-pill-row span {
		padding: 0.43rem 0.8rem;
		border-radius: 999px;
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: #d1fae5;
		background: rgba(15, 118, 110, 0.28);
		border: 1px solid rgba(94, 234, 212, 0.38);
	}

	.cdc-media-wrap {
		animation: cdc-enter-up 0.8s 0.15s ease both;
	}

	.cdc-media-card {
		position: relative;
		overflow: hidden;
		border-radius: 1.35rem;
		padding: 0.72rem;
		background:
			linear-gradient(148deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.05) 46%, rgba(15, 23, 42, 0.24)),
			rgba(2, 6, 23, 0.48);
		border: 1px solid rgba(255, 255, 255, 0.3);
		box-shadow:
			0 30px 55px -26px rgba(2, 6, 23, 0.82),
			inset 0 1px 0 rgba(255, 255, 255, 0.28);
		backdrop-filter: blur(8px);
	}

	.cdc-media-sheen {
		position: absolute;
		inset: 0;
		background: linear-gradient(130deg, rgba(255, 255, 255, 0.25), transparent 38%, transparent 62%, rgba(255, 255, 255, 0.16));
		pointer-events: none;
		z-index: 2;
	}

	.cdc-media-inner {
		position: relative;
		z-index: 1;
		border-radius: 0.95rem;
		overflow: hidden;
		aspect-ratio: 5 / 4;
		background:
			radial-gradient(circle at 20% 0%, rgba(147, 197, 253, 0.26), transparent 42%),
			linear-gradient(180deg, rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.24));
	}

	.cdc-media-card img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.cdc-media-caption {
		margin: 0.72rem 0 0;
		text-align: center;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(230, 255, 246, 0.92);
		text-shadow: 0 2px 16px rgba(16, 185, 129, 0.32);
	}

	@keyframes cdc-enter-up {
		from {
			opacity: 0;
			transform: translateY(18px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes cdc-pan {
		from {
			transform: scale(1.06) translateX(-1.2%);
		}
		to {
			transform: scale(1.1) translateX(1.2%);
		}
	}

	@media (max-width: 1024px) {
		.cdc-hero-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.cdc-copy h1 {
			max-width: 100%;
		}

		.cdc-description {
			max-width: 100%;
		}
	}

	@media (max-width: 640px) {
		.cdc-hero {
			padding: 1.4rem 0.88rem 1.6rem;
		}

		.cdc-copy {
			text-align: center;
		}

		.cdc-kicker {
			margin-inline: auto;
		}

		.cdc-pill-row {
			justify-content: center;
		}

		.cdc-description {
			font-size: 0.9rem;
		}

		.cdc-media-card {
			border-radius: 1.05rem;
			padding: 0.58rem;
		}

		.cdc-media-inner {
			aspect-ratio: 4 / 3;
		}
	}
</style>
