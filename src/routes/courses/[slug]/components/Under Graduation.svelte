<script>
	const departments = [
		{
			name: 'Computer Science & Engineering',
			intake: 180,
			href: '/department/Department%20of%20CSE'
		},
		{
			name: 'CSE - AI & Machine Learning',
			intake: 60,
			href: '/department/Department%20of%20CSE%20(AI%20%26%20ML)'
		},
		{
			name: 'CSE - Cyber Security',
			intake: 60,
			href: '/department/Department%20of%20CSE%20(Cyber%20Security)'
		},
		{
			name: 'Electronics & Communication Engineering',
			intake: 120,
			href: '/department/Department%20of%20ECE'
		},
		{
			name: 'Electrical & Electronic Engineering',
			intake: 60,
			href: '/department/Department%20of%20EEE'
		},
		{
			name: 'Mechanical Engineering',
			intake: 60,
			href: '/department/Department%20of%20MECH'
		}
	];
</script>

<section class="undergrad-shell">
	<div class="undergrad-glow one" aria-hidden="true"></div>
	<div class="undergrad-glow two" aria-hidden="true"></div>

	<div class="content-wrap">
		<h1 class="hero-title">Under Graduation Programme</h1>
		<p class="hero-tag">Premium B.Tech Tracks for High-Impact Careers</p>

		<div class="intro-layout">
			<div class="intro-copy">
				<h2>Bachelor of Technology</h2>
				<p><strong>Bachelor Degree (Duration: 4 Years)</strong></p>
				<p>
					Bachelor of Technology (B.Tech): Build a strong technical foundation through specialized
					programs in Computer Science, AI and Machine Learning, Cyber Security, ECE, EEE,
					Mechanical, and Civil Engineering. The curriculum blends academic depth with practical,
					industry-oriented learning.
				</p>
				<p>
					BITS Engineering College admits candidates through EAPCET conducted by AP State
					Government, based on eligibility criteria and management quota admissions.
				</p>
			</div>

			<div class="intro-media">
				<img src="/ug.jpg" alt="Under graduation students at BITS Vizag" loading="lazy" />
			</div>
		</div>

		<div class="section-head">
			<h2>Courses Offered</h2>
			<p>Core Under Graduation B.Tech departments</p>
		</div>

		<div class="dept-grid">
			{#each departments as dept, index}
				<a
					href={dept.href}
					class="dept-card"
					style={`--delay: ${index * 95}ms`}
					aria-label={`Open ${dept.name} department`}
				>
					<div class="card-bg-glow"></div>
					
					<div class="card-content-inner">
						<div class="card-top">
							<div class="index-pill">
								<span class="index-num">{String(index + 1).padStart(2, '0')}</span>
								<div class="pulse-dot"></div>
							</div>
							<div class="intake-badge">
								<i class="fa-solid fa-users-viewfinder"></i>
								<span>Intake: {dept.intake}</span>
							</div>
						</div>

						<h3 class="dept-name">{dept.name}</h3>

						<div class="card-footer">
							<div class="view-btn">
								<span class="btn-text">Explore Department</span>
								<div class="btn-icon">
									<i class="fa-solid fa-chevron-right"></i>
								</div>
							</div>
						</div>
					</div>

					<!-- Decorative elements -->
					<div class="card-orb"></div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.undergrad-shell {
		position: relative;
		overflow: hidden;
		font-family: 'Manrope', sans-serif;
		padding: 2rem;
		border-radius: 2rem;
		background: #ffffff;
		border: 1px solid #e2e8f0;
		box-shadow: 
			0 10px 15px -3px rgba(0, 0, 0, 0.05),
			0 4px 6px -2px rgba(0, 0, 0, 0.02);
	}

	.content-wrap {
		position: relative;
		z-index: 2;
		max-width: 1200px;
		margin: 0 auto;
	}

	.hero-title {
		font-size: clamp(2.25rem, 5vw, 3.5rem);
		font-weight: 900;
		letter-spacing: -0.04em;
		text-align: center;
		color: #0f172a;
		margin: 0;
		line-height: 1.1;
		animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	.hero-tag {
		text-align: center;
		font-weight: 500;
		font-size: 1.125rem;
		color: #64748b;
		margin: 1rem 0 3.5rem;
		letter-spacing: 0.01em;
		animation: revealUp 0.8s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	.intro-layout {
		display: grid;
		gap: 3rem;
		align-items: center;
		grid-template-columns: 1.2fr 1fr;
		margin-bottom: 5rem;
	}

	.intro-copy {
		background: #f8fafc;
		border: 1px solid #f1f5f9;
		border-radius: 2rem;
		padding: 3rem;
		position: relative;
		overflow: hidden;
		animation: revealUp 0.8s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	.intro-copy h2 {
		margin: 0;
		font-size: 2rem;
		font-weight: 800;
		color: #0f172a;
		letter-spacing: -0.02em;
	}

	.intro-copy p {
		margin: 1.25rem 0 0;
		line-height: 1.8;
		color: #475569;
		font-size: 1.0625rem;
	}

	.intro-media {
		position: relative;
		animation: revealUp 0.8s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	.intro-media img {
		width: 100%;
		aspect-ratio: 4/3;
		object-fit: cover;
		border-radius: 2rem;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
	}

	.section-head {
		margin-bottom: 2.5rem;
		text-align: left;
	}

	.section-head h2 {
		font-size: 1.75rem;
		font-weight: 800;
		color: #0f172a;
		letter-spacing: -0.02em;
		margin: 0;
	}

	.section-head p {
		margin: 0.5rem 0 0;
		color: #94a3b8;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 0.75rem;
	}

	/* Premium Card Grid */
	.dept-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
	}

	.dept-card {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 280px;
		padding: 2.5rem;
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 2rem;
		text-decoration: none;
		transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
		overflow: hidden;
		animation: revealUp 0.8s both;
		animation-delay: var(--delay);
	}

	.dept-card:hover {
		transform: translateY(-8px);
		border-color: #2672d5;
		box-shadow: 0 20px 40px -12px rgba(38, 114, 213, 0.15);
	}

	.card-bg-glow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background: linear-gradient(90deg, #2672d5, #3b82f6);
		opacity: 0;
		transition: opacity 0.3s;
	}

	.dept-card:hover .card-bg-glow {
		opacity: 1;
	}

	.card-content-inner {
		position: relative;
		z-index: 2;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	.index-pill {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 1rem;
		background: #f1f5f9;
		border-radius: 999px;
	}

	.index-num {
		font-size: 0.875rem;
		font-weight: 800;
		color: #2672d5;
		font-family: 'Outfit', sans-serif;
	}

	.pulse-dot {
		width: 6px;
		height: 6px;
		background: #2672d5;
		border-radius: 50%;
		box-shadow: 0 0 0 0 rgba(38, 114, 213, 0.4);
		animation: pulse 2s infinite;
	}

	.intake-badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.75rem;
		font-weight: 700;
		color: #64748b;
		padding: 0.5rem 1rem;
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 999px;
	}

	.dept-name {
		margin: 0;
		font-size: 1.5rem;
		line-height: 1.25;
		font-weight: 800;
		color: #0f172a;
		letter-spacing: -0.02em;
		font-family: 'Outfit', sans-serif;
	}

	.card-footer {
		margin-top: auto;
		padding-top: 2rem;
	}

	.view-btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 1.25rem;
		background: #f8fafc;
		border-radius: 1rem;
		transition: all 0.3s ease;
	}

	.btn-text {
		font-size: 0.875rem;
		font-weight: 700;
		color: #475569;
	}

	.btn-icon {
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #ffffff;
		border-radius: 0.75rem;
		color: #2672d5;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.dept-card:hover .view-btn {
		background: #2672d5;
	}

	.dept-card:hover .btn-text {
		color: #ffffff;
	}

	.dept-card:hover .btn-icon {
		transform: translateX(4px);
		color: #2672d5;
	}

	/* Decorative Orb */
	.card-orb {
		position: absolute;
		bottom: -20px;
		right: -20px;
		width: 100px;
		height: 100px;
		background: radial-gradient(circle, rgba(38, 114, 213, 0.05) 0%, transparent 70%);
		border-radius: 50%;
		transition: transform 0.6s ease;
	}

	.dept-card:hover .card-orb {
		transform: scale(1.5);
	}

	@keyframes revealUp {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@keyframes pulse {
		0% { box-shadow: 0 0 0 0 rgba(38, 114, 213, 0.4); }
		70% { box-shadow: 0 0 0 10px rgba(38, 114, 213, 0); }
		100% { box-shadow: 0 0 0 0 rgba(38, 114, 213, 0); }
	}

	@media (max-width: 1024px) {
		.intro-layout {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.intro-copy {
			padding: 2rem;
		}
	}

	@media (max-width: 640px) {
		.undergrad-shell {
			padding: 1rem;
		}
		.dept-grid {
			grid-template-columns: 1fr;
		}
		.hero-title {
			font-size: 2.25rem;
		}
	}
</style>

