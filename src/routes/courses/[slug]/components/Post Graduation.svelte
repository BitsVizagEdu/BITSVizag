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
			<span class="eyebrow">Programs</span>
			<h2>Courses Offered</h2>
		</div>

		<div class="offered-grid">
			{#each offeredCourses as course, index}
				<a href={course.href} class="offered-card" style={`--delay: ${index * 90}ms`}>
					<div class="offered-content">
						<span class="offered-num">{String(index + 1).padStart(2, '0')}</span>
						<h3 class="offered-name">{course.name}</h3>
					</div>
					<div class="offered-icon">
						<i class="fa-solid fa-arrow-right"></i>
					</div>
				</a>
			{/each}
		</div>

		<div class="program-grid">
			{#each programs as program, index}
				<article id={program.id} class="program-card" style={`--delay: ${index * 120}ms`}>
					<div class="card-glow"></div>
					
					<div class="media-container">
						<img src={program.image} alt={program.alt} loading="lazy" />
						<div class="code-overlay">
							<span class="code-text">{program.code}</span>
						</div>
					</div>

					<div class="details-container">
						<div class="details-header">
							<div class="track-pill">
								<i class="fa-solid fa-graduation-cap"></i>
								<span>PG Track</span>
							</div>
							<span class="index-box">{String(index + 1).padStart(2, '0')}</span>
						</div>

						<h2 class="program-title">{program.name}</h2>
						<p class="program-desc">{program.description}</p>

						<div class="eligibility-card">
							<div class="eligibility-head">
								<div class="eligibility-icon">
									<i class="fa-solid fa-clipboard-check"></i>
								</div>
								<h3>Admission & Eligibility</h3>
							</div>
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
		padding: 2rem;
		border-radius: 2.5rem;
		background: #ffffff;
		border: 1px solid #e2e8f0;
		box-shadow: 
			0 20px 25px -5px rgba(0, 0, 0, 0.05),
			0 10px 10px -5px rgba(0, 0, 0, 0.02);
	}

	.content-wrap {
		position: relative;
		z-index: 2;
		max-width: 1200px;
		margin: 0 auto;
	}

	.hero-title {
		font-size: clamp(2.25rem, 5vw, 3.5rem);
		font-weight: 950;
		letter-spacing: -0.04em;
		text-align: center;
		color: #0f172a;
		margin: 0;
		line-height: 1;
		animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	.hero-tag {
		text-align: center;
		font-weight: 500;
		font-size: 1.125rem;
		color: #64748b;
		margin: 1.25rem 0 4rem;
		letter-spacing: 0.01em;
		animation: revealUp 0.8s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	.section-head {
		margin-bottom: 2rem;
	}

	.eyebrow {
		font-size: 0.75rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: #2672d5;
		margin-bottom: 0.5rem;
		display: block;
	}

	.section-head h2 {
		font-size: 1.75rem;
		font-weight: 800;
		color: #0f172a;
		letter-spacing: -0.02em;
		margin: 0;
	}

	/* Quick Access Grid */
	.offered-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-bottom: 4rem;
	}

	.offered-card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem;
		background: #f8fafc;
		border: 1px solid #f1f5f9;
		border-radius: 1.5rem;
		text-decoration: none;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		animation: revealUp 0.8s both;
		animation-delay: var(--delay);
	}

	.offered-card:hover {
		background: #ffffff;
		border-color: #2672d5;
		transform: translateY(-4px);
		box-shadow: 0 15px 30px -10px rgba(38, 114, 213, 0.15);
	}

	.offered-content {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.offered-num {
		font-size: 0.875rem;
		font-weight: 800;
		color: #94a3b8;
		font-family: 'Outfit', sans-serif;
	}

	.offered-name {
		font-size: 1rem;
		font-weight: 700;
		color: #1e293b;
		margin: 0;
	}

	.offered-icon {
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #ffffff;
		border-radius: 50%;
		border: 1px solid #e2e8f0;
		color: #2672d5;
		transition: all 0.3s ease;
	}

	.offered-card:hover .offered-icon {
		background: #2672d5;
		color: #ffffff;
		border-color: #2672d5;
		transform: rotate(-45deg);
	}

	/* Large Program Cards */
	.program-grid {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.program-card {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 3rem;
		background: #ffffff;
		border: 1px solid #f1f5f9;
		border-radius: 2.5rem;
		padding: 2.5rem;
		overflow: hidden;
		animation: revealUp 1s both;
		animation-delay: var(--delay);
		transition: border-color 0.4s ease;
	}

	.program-card:hover {
		border-color: #2672d5;
	}

	.card-glow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(circle at 0% 0%, rgba(38, 114, 213, 0.03) 0%, transparent 60%);
		pointer-events: none;
	}

	.media-container {
		position: relative;
		height: 100%;
		min-height: 340px;
		overflow: hidden;
		border-radius: 2rem;
		box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
	}

	.media-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.program-card:hover .media-container img {
		transform: scale(1.05);
	}

	.code-overlay {
		position: absolute;
		top: 1.5rem;
		left: 1.5rem;
		padding: 0.625rem 1.25rem;
		background: rgba(15, 23, 42, 0.8);
		backdrop-filter: blur(12px);
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.code-text {
		color: #ffffff;
		font-weight: 800;
		font-size: 0.875rem;
		letter-spacing: 0.05em;
	}

	.details-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.details-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	.track-pill {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		padding: 0.5rem 1rem;
		background: #eff6ff;
		color: #2672d5;
		border-radius: 999px;
		font-size: 0.75rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.index-box {
		font-family: 'Outfit', sans-serif;
		font-size: 1.25rem;
		font-weight: 900;
		color: #e2e8f0;
	}

	.program-title {
		font-size: 2rem;
		font-weight: 900;
		color: #0f172a;
		letter-spacing: -0.03em;
		line-height: 1.2;
		margin: 0;
	}

	.program-desc {
		font-size: 1.125rem;
		line-height: 1.7;
		color: #64748b;
		margin: 1.5rem 0 2rem;
	}

	.eligibility-card {
		padding: 2rem;
		background: #f8fafc;
		border-radius: 1.5rem;
		border: 1px solid #f1f5f9;
	}

	.eligibility-head {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.eligibility-icon {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #ffffff;
		border-radius: 0.75rem;
		color: #2672d5;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
	}

	.eligibility-head h3 {
		margin: 0;
		font-size: 1.125rem;
		font-weight: 800;
		color: #1e293b;
	}

	.eligibility-card p {
		margin: 0;
		font-size: 1rem;
		line-height: 1.6;
		color: #475569;
	}

	@keyframes revealUp {
		from { opacity: 0; transform: translateY(30px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@media (max-width: 1024px) {
		.program-card {
			grid-template-columns: 1fr;
			gap: 2rem;
			padding: 2rem;
		}
		.media-container {
			min-height: 280px;
		}
	}

	@media (max-width: 640px) {
		.postgrad-shell {
			padding: 1rem;
		}
		.hero-title {
			font-size: 2.25rem;
		}
		.program-title {
			font-size: 1.75rem;
		}
		.eligibility-card {
			padding: 1.5rem;
		}
	}
</style>

