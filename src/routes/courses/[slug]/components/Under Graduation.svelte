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
		},
		
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
					<div class="card-top">
						<span class="order-chip">{String(index + 1).padStart(2, '0')}</span>
						<span class="intake-chip">Intake: {dept.intake}</span>
					</div>
					<h3>{dept.name}</h3>
					<div class="card-cta">
						<span>View Department</span>
						<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.undergrad-shell {
		position: relative;
		overflow: hidden;
		font-family: 'Roboto', 'Segoe UI', sans-serif;
		padding: 1.2rem;
		border-radius: 1.25rem;
		background:
			radial-gradient(1200px 500px at 8% -18%, rgba(244, 184, 42, 0.32), transparent 62%),
			radial-gradient(900px 480px at 100% -30%, rgba(34, 110, 235, 0.26), transparent 58%),
			linear-gradient(165deg, #eef2fb 0%, #dde6f7 48%, #e9eef8 100%);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85);
	}

	.content-wrap {
		position: relative;
		z-index: 2;
		padding: 1rem;
	}

	.hero-title {
		font-size: clamp(1.95rem, 3.8vw, 3.2rem);
		font-weight: 800;
		letter-spacing: -0.02em;
		text-align: center;
		color: #122748;
		margin: 0;
		animation: rise-in 650ms ease-out both;
	}

	.hero-tag {
		text-align: center;
		font-weight: 600;
		color: #8b5a00;
		margin: 0.9rem 0 2.1rem;
		animation: rise-in 700ms ease-out both;
	}

	.intro-layout {
		display: grid;
		gap: 1.25rem;
		align-items: center;
		grid-template-columns: 1fr;
		margin-bottom: 2rem;
	}

	.intro-copy {
		background: rgba(255, 255, 255, 0.72);
		border: 1px solid rgba(18, 39, 72, 0.08);
		border-radius: 1rem;
		padding: 1.2rem;
		backdrop-filter: blur(2px);
		animation: rise-in 800ms ease-out both;
	}

	.intro-copy h2 {
		margin: 0;
		font-size: clamp(1.3rem, 2.2vw, 1.9rem);
		color: #0f2e62;
	}

	.intro-copy p {
		margin: 0.85rem 0 0;
		line-height: 1.7;
		color: #324861;
	}

	.intro-media {
		animation: rise-in 880ms ease-out both;
	}

	.intro-media img {
		width: 100%;
		height: 100%;
		min-height: 260px;
		object-fit: cover;
		border-radius: 1rem;
		border: 1px solid rgba(18, 39, 72, 0.08);
		box-shadow: 0 16px 34px -18px rgba(16, 44, 97, 0.32);
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

	.dept-grid {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}

	.dept-card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-height: 200px;
		padding: 1.05rem;
		border-radius: 1rem;
		text-decoration: none;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 250, 255, 0.95));
		border: 1px solid rgba(24, 66, 136, 0.14);
		box-shadow: 0 12px 26px -18px rgba(25, 68, 140, 0.55);
		transition: transform 280ms ease, box-shadow 280ms ease, border-color 280ms ease;
		animation: card-in 620ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
		animation-delay: var(--delay);
	}

	.dept-card:hover {
		transform: translateY(-6px);
		border-color: rgba(193, 137, 0, 0.55);
		box-shadow: 0 20px 36px -18px rgba(9, 54, 126, 0.45);
	}

	.card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.order-chip {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem 0.56rem;
		border-radius: 999px;
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		color: #224e9a;
		background: rgba(34, 110, 235, 0.14);
	}

	.intake-chip {
		padding: 0.28rem 0.7rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		color: #7a5000;
		background: rgba(244, 184, 42, 0.2);
	}

	.dept-card h3 {
		margin: 0;
		font-size: 1.36rem;
		line-height: 1.35;
		font-weight: 800;
		color: #13284b;
		letter-spacing: -0.01em;
	}

	.card-cta {
		margin-top: auto;
		display: inline-flex;
		align-items: center;
		gap: 0.52rem;
		padding: 0.46rem 0.9rem;
		width: fit-content;
		border-radius: 999px;
		background: linear-gradient(100deg, #1c5ed2, #2f79ef);
		color: #fff;
		font-weight: 700;
		font-size: 0.83rem;
		box-shadow: 0 8px 18px -12px rgba(28, 94, 210, 0.85);
		transition: transform 220ms ease;
	}

	.dept-card:hover .card-cta {
		transform: translateX(3px);
	}

	.undergrad-glow {
		position: absolute;
		width: 360px;
		height: 360px;
		border-radius: 50%;
		filter: blur(35px);
		opacity: 0.4;
		pointer-events: none;
	}

	.undergrad-glow.one {
		top: -180px;
		left: -110px;
		background: rgba(255, 195, 64, 0.72);
	}

	.undergrad-glow.two {
		right: -120px;
		bottom: -200px;
		background: rgba(50, 134, 255, 0.52);
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
			padding: 1.6rem 1.4rem;
		}

		.intro-layout {
			grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
			gap: 1.4rem;
		}

		.dept-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (min-width: 700px) and (max-width: 1023px) {
		.dept-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 699px) {
		.undergrad-shell {
			padding: 0.72rem;
		}

		.content-wrap {
			padding: 0.8rem 0.5rem;
		}

		.intro-copy {
			padding: 1rem;
		}

		.dept-card {
			min-height: 188px;
		}

		.dept-card h3 {
			font-size: 1.18rem;
		}
	}
</style>
