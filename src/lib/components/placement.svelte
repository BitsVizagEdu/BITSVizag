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
	<!-- Top Area with Background Image -->
	<div class="hero-header-area">
		<div class="inner-shell">
			<div class="header-grid">
				<h2 class="main-title">
					Build careers with confidence<br />and lead the future
				</h2>
				
				<div class="sub-row">
					<div class="sub-col col-left">
						<p>Empowering talented students with premium industry partnerships, expanding opportunities, and securing records. <span class="arrow-indicator">→</span></p>
					</div>
					<div class="sub-col col-mid">
						<p>Comprehensive placement support, technical mentoring, and internships across all engineering disciplines.</p>
					</div>
					<div class="sub-col col-right">
						<p class="rating-box">
							<span class="rating-num">90% / 100%</span>
							<span class="stars">★★★★★</span>
							<span class="rating-label">Impartial placement record & MNC partners</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Logo Section -->
	<div class="logos-section">
		<div class="inner-shell">
			<p class="section-label">TRUSTED BY 100+ LEADING MULTINATIONAL COMPANIES & CORPORATE PARTNERS</p>
			
			<div class="marquee-wrapper">
				<div class="fade-edge left" aria-hidden="true"></div>
				<div class="fade-edge right" aria-hidden="true"></div>
				
				<div class="marquee-row marquee-row-left" aria-label="Recruiter logos row one">
					<div class="marquee-track">
						{#each [...firstRowLogos, ...firstRowLogos] as logo}
							<div class="logo-chip">
								<img src={encodeURI(logo)} alt="Recruiter logo" class="company-logo" loading="lazy" />
							</div>
						{/each}
					</div>
				</div>

				<div class="marquee-row marquee-row-right" aria-label="Recruiter logos row two">
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
	</div>

	<!-- Statement Section with Badges -->
	<div class="statement-section">
		<div class="inner-shell">
			<p class="colored-statement">
				We help <span class="dim">our students</span>
				<span class="badge blue">speed up</span>
				<span class="dim">career growth,</span>
				<span class="badge orange">modernize</span>
				<span class="dim">technical skills, and</span>
				<span class="badge sky">adopt AI</span>
				<span class="dim">so they can</span>
				<span class="badge pink">lead the future</span>
				<span class="dim">without compromising on academic excellence. That's our promise.</span>
			</p>
		</div>
	</div>
</section>

<AllInOneAssistance />

<style>
	.recruiters-premium {
		position: relative;
		overflow: hidden;
		background: #f8fafc;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		padding-bottom: 4rem;
	}

	.hero-header-area {
		padding: 5rem 0 3rem;
		background: 
			linear-gradient(to bottom, rgba(248, 250, 252, 0.1) 40%, rgba(248, 250, 252, 1) 100%),
			url('/place-back.png') no-repeat center top / cover;
		min-height: 380px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inner-shell {
		position: relative;
		z-index: 2;
		width: min(1240px, 88vw);
		margin: 0 auto;
	}

	.header-grid {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 2.5rem;
	}

	.main-title {
		font-size: clamp(2rem, 4vw, 3.8rem);
		font-weight: 700;
		line-height: 1.05;
		color: #0f172a;
		letter-spacing: -0.03em;
		margin: 0;
		text-align: center;
	}

	.sub-row {
		display: grid;
		grid-template-columns: 1.2fr 1fr 1fr;
		gap: 2.5rem;
		border-top: 1px solid rgba(15, 23, 42, 0.08);
		padding-top: 1.5rem;
		width: 100%;
	}

	.sub-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.sub-col p {
		margin: 0;
		font-size: clamp(0.85rem, 1.05vw, 1rem);
		line-height: 1.5;
		color: #475569;
		font-weight: 500;
		text-align: center;
	}

	.arrow-indicator {
		display: inline-block;
		margin-left: 0.5rem;
		font-weight: 700;
		color: #0f172a;
	}

	.rating-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.2rem;
	}

	.rating-num {
		font-size: 1.15rem;
		font-weight: 700;
		color: #0f172a;
	}

	.stars {
		color: #f59e0b;
		font-size: 1rem;
	}

	.rating-label {
		font-size: 0.8rem;
		color: #64748b;
		text-align: center;
	}

	/* Logos Area */
	.logos-section {
		padding: 2rem 0;
	}

	.section-label {
		text-align: center;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		color: #64748b;
		margin-bottom: 1.5rem;
	}

	.marquee-wrapper {
		position: relative;
		width: 100%;
		overflow: hidden;
		padding: 0.75rem 0;
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
		background: linear-gradient(to right, #f8fafc, transparent);
	}

	.fade-edge.right {
		right: 0;
		background: linear-gradient(to left, #f8fafc, transparent);
	}

	.marquee-row {
		display: flex;
		overflow: hidden;
		padding: 0.3rem 0;
	}

	.marquee-track {
		display: flex;
		width: max-content;
		gap: 1.5rem;
		will-change: transform;
	}

	.marquee-row-left .marquee-track {
		animation: scroll-left 38s linear infinite;
	}

	.marquee-row-right .marquee-track {
		animation: scroll-right 38s linear infinite;
	}

	.logo-chip {
		background: rgba(255, 255, 255, 0.7);
		border: 1px solid rgba(15, 23, 42, 0.05);
		border-radius: 8px;
		width: 150px;
		height: 68px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		padding: 0.5rem;
		transition: all 0.3s ease;
	}

	.logo-chip:hover {
		background: #ffffff;
		border-color: rgba(15, 23, 42, 0.15);
		box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
	}

	.company-logo {
		max-width: 100%;
		max-height: 36px;
		object-fit: contain;
		filter: grayscale(1) opacity(0.8);
		transition: all 0.3s ease;
	}

	.logo-chip:hover .company-logo {
		filter: grayscale(0) opacity(1);
	}

	/* Statement Section with Badges */
	.statement-section {
		padding: 2rem 0;
	}

	.colored-statement {
		font-size: clamp(1.2rem, 2vw, 2rem);
		font-weight: 700;
		line-height: 1.5;
		color: #0f172a;
		letter-spacing: -0.01em;
		margin: 0;
		text-align: center;
	}

	.dim {
		color: #94a3b8;
		font-weight: 600;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		padding: 0.1rem 0.5rem;
		border-radius: 6px;
		font-weight: 700;
		white-space: nowrap;
		font-size: 0.85em;
	}

	.badge.blue {
		background-color: rgba(99, 102, 241, 0.12);
		color: #6366f1;
	}

	.badge.orange {
		background-color: rgba(245, 158, 11, 0.12);
		color: #f59e0b;
	}

	.badge.sky {
		background-color: rgba(14, 165, 233, 0.12);
		color: #0ea5e9;
	}

	.badge.pink {
		background-color: rgba(236, 72, 153, 0.12);
		color: #ec4899;
	}

	@keyframes scroll-left {
		0% { transform: translate3d(0, 0, 0); }
		100% { transform: translate3d(-50%, 0, 0); }
	}

	@keyframes scroll-right {
		0% { transform: translate3d(-50%, 0, 0); }
		100% { transform: translate3d(0, 0, 0); }
	}

	@media (max-width: 992px) {
		.sub-row {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.hero-header-area {
			padding: 3rem 0 2rem;
		}
	}

	@media (max-width: 768px) {
		.header-grid {
			gap: 2rem;
		}

		.logo-chip {
			width: 130px;
			height: 60px;
		}

		.company-logo {
			max-height: 28px;
		}
	}

	@media (max-width: 480px) {
		.hero-header-area {
			padding: 2.5rem 0 1.5rem;
			min-height: auto;
		}

		.main-title {
			font-size: 1.8rem;
			line-height: 1.1;
		}

		.sub-row {
			gap: 1rem;
			padding-top: 1rem;
		}

		.sub-col p {
			font-size: 0.85rem;
		}

		.rating-num {
			font-size: 1rem;
		}

		.stars {
			font-size: 0.9rem;
		}

		.rating-label {
			font-size: 0.75rem;
		}

		.logo-chip {
			width: 110px;
			height: 52px;
			padding: 0.3rem;
		}

		.company-logo {
			max-height: 22px;
		}

		.statement-section {
			padding: 1.5rem 0;
		}

		.colored-statement {
			font-size: 1.15rem;
			line-height: 1.45;
		}

		.badge {
			padding: 0.05rem 0.35rem;
			border-radius: 4px;
		}
	}
</style>
