<script>
	import AllInOneAssistance from '$lib/components/allinoneassistance.svelte';

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
		<div class="heading performance-layer">
			<p class="eyebrow">Industry Network</p>
			<h2>
				<span class="headline-strong">Our Recruiters</span>
				<span class="headline-muted">Till Date</span>
			</h2>
			<p class="subtitle">
				A trusted network of companies driving placements, innovation, and real-world impact for our
				students.
			</p>
		</div>

		<div class="marquee-wrapper">
			<div class="fade-edge left" aria-hidden="true"></div>
			<div class="fade-edge right" aria-hidden="true"></div>
			<div class="marquee-row marquee-row-left" aria-label="Recruiter logos moving left to right">
				<div class="marquee-track">
					{#each [...firstRowLogos, ...firstRowLogos] as logo}
						<div class="logo-chip">
							<img src={encodeURI(logo)} alt="Recruiter logo" class="company-logo" loading="lazy" />
						</div>
					{/each}
				</div>
			</div>

			<div class="marquee-row marquee-row-right" aria-label="Recruiter logos moving right to left">
				<div class="marquee-track">
					{#each [...secondRowLogos, ...secondRowLogos] as logo}
						<div class="logo-chip">
							<img src={encodeURI(logo)} alt="Recruiter logo" class="company-logo" loading="lazy" />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<AllInOneAssistance />

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

	.performance-layer {
		content-visibility: auto;
		contain-intrinsic-size: 500px;
		transform: translateZ(0);
		opacity: 1 !important;
		visibility: visible !important;
	}

	.inner-shell {
		position: relative;
		z-index: 2;
		width: min(1500px, 94vw);
		margin: 0 auto;
		padding: 0 0.25rem;
	}

	.heading {
		text-align: center;
		margin-bottom: 1.65rem;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.82rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		font-weight: 800;
		color: #0ea55a;
	}

	.eyebrow::after {
		content: '';
		display: block;
		width: 74px;
		height: 2px;
		margin: 0.55rem auto 0;
		background: linear-gradient(90deg, rgba(14, 165, 90, 0.15), rgba(14, 165, 90, 0.95));
	}

	.heading h2 {
		margin: 1.2rem 0 0;
		font-size: clamp(2.2rem, 5vw, 3.5rem);
		line-height: 1.1;
		font-weight: 700;
		letter-spacing: -0.04em;
		color: #03172a;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.15rem;
	}

	.heading h2 .headline-strong {
		color: #020617;
	}

	.heading h2 .headline-muted {
		font-size: 0.7em;
		font-weight: 600;
		color: #fff705;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.subtitle {
		margin: 1rem auto 0;
		max-width: 40rem;
		font-size: 1.04rem;
		line-height: 1.65;
		font-weight: 500;
		color: #5f6b7b;
	}

	.marquee-wrapper {
		position: relative;
		width: 100%;
		overflow: hidden;
		padding: 0.25rem 0 0.4rem;
		mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
		-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
	}

	.fade-edge {
		position: absolute;
		inset-block: 0;
		width: 5rem;
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

	.marquee-row {
		display: flex;
		overflow: hidden;
		padding: 0.55rem 0;
	}

	.marquee-track {
		display: flex;
		width: max-content;
		gap: 2.5rem;
		padding: 0.25rem 0;
		will-change: transform;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
	}

	.marquee-row-left .marquee-track {
		animation: scroll-left 32s linear infinite;
	}

	.marquee-row-right .marquee-track {
		animation: scroll-right 32s linear infinite;
	}

	.marquee-row:hover .marquee-track {
		animation-play-state: paused;
	}

	.logo-chip {
		position: relative;
		width: 188px;
		height: 84px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		cursor: pointer;
		flex-shrink: 0;
	}

	.company-logo {
		max-width: 100%;
		max-height: 48px;
		width: auto;
		object-fit: contain;
		filter: grayscale(1) contrast(0.95) opacity(0.78);
		transition:
			transform 0.28s ease,
			filter 0.28s ease,
			opacity 0.28s ease;
		transform: translateZ(0);
	}

	.logo-chip:hover .company-logo {
		filter: grayscale(0) contrast(1) opacity(1);
		transform: scale(1.05);
	}

	@keyframes scroll-left {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(-50%, 0, 0);
		}
	}

	@keyframes scroll-right {
		0% {
			transform: translate3d(-50%, 0, 0);
		}
		100% {
			transform: translate3d(0, 0, 0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation: none !important;
			transform: none !important;
		}
	}

	@media (max-width: 768px) {
		.recruiters-premium {
			padding: 2.5rem 0;
		}

		.heading {
			margin-bottom: 1.5rem;
		}

		.heading h2 {
			flex-direction: column;
			gap: 0.1rem;
			font-size: clamp(1.8rem, 8vw, 2.4rem);
		}

		.subtitle {
			font-size: 0.95rem;
			line-height: 1.5;
			max-width: 90%;
			margin-top: 0.6rem;
		}

		.marquee-track {
			gap: 1.8rem;
		}

		.logo-chip {
			width: 142px;
			height: 68px;
		}

		.company-logo {
			max-height: 38px;
		}

		.fade-edge {
			width: 2.5rem;
		}

		.marquee-row {
			padding: 0.35rem 0;
		}
	}
</style>
