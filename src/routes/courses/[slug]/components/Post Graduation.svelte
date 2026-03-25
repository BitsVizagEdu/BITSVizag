<script>
	const offeredCourses = [
		{
			name: 'Master of Technology (M.Tech)',
			href: '#m-tech'
		},
		{
			name: 'Master of Business Administration (MBA)',
			href: '#mba'
		}
	];

	const programs = [
		{
			name: 'Master of Technology (M.Tech Duration - 2 Years)',
			id: 'm-tech',
			code: 'M.Tech',
			image: '/pg1.jpg',
			alt: 'M.Tech Program',
			description:
				'Take your technical expertise to the next level through advanced specialization, research opportunities, and collaboration with academic and industry experts.',
			eligibility:
				'Admissions are through GATE or equivalent B.E/B.Tech qualifications, AMIE/AMIETE, and APPGECET as per AP State Government norms.'
		},
		{
			name: 'Master of Business Administration (MBA Duration - 2 Years)',
			id: 'mba',
			code: 'MBA',
			image: '/pg.jpg',
			alt: 'MBA Program',
			description:
				'Build strong leadership and strategic thinking with industry-oriented business education, practical case studies, and corporate exposure.',
			eligibility:
				'Admissions are offered through AP-iCET for convener quota seats and also through management quota.'
		}
	];
</script>

<section class="postgrad-shell">
	<div class="postgrad-glow one" aria-hidden="true"></div>
	<div class="postgrad-glow two" aria-hidden="true"></div>

	<div class="content-wrap">
		<h1 class="hero-title">Post Graduation Programme</h1>
		<p class="hero-tag">Premium Pathways for Future Specialists and Leaders</p>

		<div class="section-head">
			<h2>Courses Offered</h2>
			<p>M.Tech and MBA tracks</p>
		</div>

		<div class="offered-grid">
			{#each offeredCourses as course, index}
				<a href={course.href} class="offered-card" style={`--delay: ${index * 90}ms`}>
					<span class="order-chip">{String(index + 1).padStart(2, '0')}</span>
					<h3>{course.name}</h3>
					<div class="offered-cta">
						<span>View Details</span>
						<i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
					</div>
				</a>
			{/each}
		</div>

		<div class="program-grid">
			{#each programs as program, index}
				<article id={program.id} class="program-card" style={`--delay: ${index * 120}ms`}>
					<div class="media-wrap">
						<img src={program.image} alt={program.alt} loading="lazy" />
						<span class="code-chip">{program.code}</span>
					</div>

					<div class="card-content">
						<div class="card-top">
							<span class="order-chip">{String(index + 1).padStart(2, '0')}</span>
							<span class="track-chip">Post Graduate Track</span>
						</div>
						<h2>{program.name}</h2>
						<p>{program.description}</p>
						<div class="eligibility-box">
							<h3>Eligibility and Admission</h3>
							<p>{program.eligibility}</p>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.postgrad-shell {
		position: relative;
		overflow: hidden;
		font-family: 'Roboto', 'Segoe UI', sans-serif;
		padding: 1.2rem;
		border-radius: 1.25rem;
		background:
			radial-gradient(1200px 480px at -5% -22%, rgba(255, 162, 53, 0.26), transparent 62%),
			radial-gradient(1100px 520px at 100% -25%, rgba(18, 103, 230, 0.24), transparent 58%),
			linear-gradient(160deg, #edf2fd 0%, #dce8fb 46%, #eaf0fb 100%);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.88);
	}

	.content-wrap {
		position: relative;
		z-index: 2;
		padding: 1rem;
	}

	.hero-title {
		font-size: clamp(1.95rem, 3.8vw, 3rem);
		font-weight: 800;
		letter-spacing: -0.02em;
		text-align: center;
		color: #112949;
		margin: 0;
		animation: rise-in 650ms ease-out both;
	}

	.hero-tag {
		text-align: center;
		font-weight: 600;
		color: #865502;
		margin: 0.82rem 0 2rem;
		animation: rise-in 740ms ease-out both;
	}

	.section-head {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.8rem;
		align-items: end;
		margin-bottom: 1rem;
	}

	.section-head h2 {
		font-size: clamp(1.25rem, 1.8vw, 1.7rem);
		font-weight: 700;
		color: #122748;
		margin: 0;
	}

	.section-head p {
		margin: 0;
		color: #4f6783;
		font-weight: 500;
	}

	.offered-grid {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 0.95rem;
		margin-bottom: 1rem;
	}

	.offered-card {
		display: flex;
		flex-direction: column;
		gap: 0.72rem;
		padding: 0.92rem;
		border-radius: 0.92rem;
		text-decoration: none;
		background: rgba(255, 255, 255, 0.8);
		border: 1px solid rgba(18, 69, 150, 0.12);
		box-shadow: 0 12px 24px -18px rgba(18, 61, 128, 0.45);
		animation: card-in 620ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
		animation-delay: var(--delay);
		transition: transform 260ms ease, border-color 260ms ease;
	}

	.offered-card:hover {
		transform: translateY(-4px);
		border-color: rgba(193, 137, 0, 0.55);
	}

	.offered-card h3 {
		margin: 0;
		font-size: 1.08rem;
		font-weight: 700;
		color: #13284b;
	}

	.offered-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.48rem;
		font-size: 0.84rem;
		font-weight: 700;
		color: #1f5fd0;
	}

	.program-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.program-card {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		padding: 0.9rem;
		border-radius: 1rem;
		border: 1px solid rgba(18, 69, 150, 0.14);
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(247, 250, 255, 0.95));
		box-shadow: 0 14px 26px -18px rgba(18, 61, 128, 0.58);
		animation: card-in 620ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
		animation-delay: var(--delay);
	}

	.media-wrap {
		position: relative;
		border-radius: 0.8rem;
		overflow: hidden;
		border: 1px solid rgba(18, 69, 150, 0.1);
	}

	.media-wrap img {
		width: 100%;
		height: 100%;
		min-height: 220px;
		max-height: 310px;
		object-fit: cover;
	}

	.code-chip {
		position: absolute;
		top: 0.7rem;
		left: 0.7rem;
		padding: 0.3rem 0.7rem;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 700;
		background: rgba(10, 46, 104, 0.85);
		color: #fff;
	}

	.card-content {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.6rem;
	}

	.order-chip {
		padding: 0.25rem 0.58rem;
		border-radius: 999px;
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		color: #25549f;
		background: rgba(37, 84, 159, 0.14);
	}

	.track-chip {
		padding: 0.28rem 0.68rem;
		border-radius: 999px;
		font-size: 0.75rem;
		font-weight: 700;
		color: #7a5000;
		background: rgba(244, 184, 42, 0.22);
	}

	.card-content h2 {
		margin: 0;
		font-size: clamp(1.3rem, 2.1vw, 1.86rem);
		line-height: 1.3;
		font-weight: 800;
		color: #112948;
		letter-spacing: -0.01em;
	}

	.card-content p {
		margin: 0;
		line-height: 1.68;
		color: #334b65;
	}

	.eligibility-box {
		margin-top: 0.15rem;
		padding: 0.86rem;
		border-radius: 0.82rem;
		background: rgba(238, 244, 255, 0.9);
		border: 1px solid rgba(18, 69, 150, 0.11);
	}

	.eligibility-box h3 {
		margin: 0 0 0.36rem;
		font-size: 0.92rem;
		font-weight: 800;
		color: #173a71;
	}

	.eligibility-box p {
		margin: 0;
		font-size: 0.95rem;
	}

	.postgrad-glow {
		position: absolute;
		width: 340px;
		height: 340px;
		border-radius: 50%;
		filter: blur(36px);
		opacity: 0.4;
		pointer-events: none;
	}

	.postgrad-glow.one {
		top: -176px;
		left: -100px;
		background: rgba(255, 190, 60, 0.62);
	}

	.postgrad-glow.two {
		right: -130px;
		bottom: -190px;
		background: rgba(66, 144, 255, 0.54);
	}

	@keyframes rise-in {
		from {
			opacity: 0;
			transform: translateY(14px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes card-in {
		from {
			opacity: 0;
			transform: translateY(20px) scale(0.98);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (min-width: 1024px) {
		.content-wrap {
			padding: 1.5rem 1.35rem;
		}

		.offered-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.program-card {
			grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
			gap: 1.1rem;
			align-items: stretch;
		}

		.program-card:nth-child(even) {
			grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
		}

		.program-card:nth-child(even) .media-wrap {
			order: 2;
		}

		.program-card:nth-child(even) .card-content {
			order: 1;
		}
	}

	@media (max-width: 699px) {
		.postgrad-shell {
			padding: 0.72rem;
		}

		.content-wrap {
			padding: 0.78rem 0.5rem;
		}

		.media-wrap img {
			min-height: 205px;
		}

		.card-content h2 {
			font-size: 1.25rem;
		}
	}
</style>
