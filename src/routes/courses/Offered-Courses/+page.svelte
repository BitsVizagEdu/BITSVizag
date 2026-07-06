<script>
	import Seo from '$lib/components/Seo.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';

	const bTechPrograms = [
		{
			sno: 1,
			estd: 2008,
			name: 'Computer Science & Engineering',
			intake: 240,
			slug: 'Department of CSE',
			icon: 'fa-desktop',
			desc: 'Master software engineering, algorithms, systems design, and full-stack development.'
		},
		{
			sno: 2,
			estd: 2024,
			name: 'AI & Machine Learning',
			intake: 120,
			slug: 'Department of CSE (AI & ML)',
			icon: 'fa-brain',
			desc: 'Build intelligent systems, neural networks, predictive models, and data intelligence solutions.'
		},
		{
			sno: 3,
			estd: 2024,
			name: 'Cyber Security',
			intake: 60,
			slug: 'Department of CSE (Cyber Security)',
			icon: 'fa-shield-halved',
			desc: 'Protect networks, data, and critical systems from cyber threats and security vulnerabilities.'
		},
		{
			sno: 4,
			estd: 2008,
			name: 'Electronics & Comm. Engineering',
			intake: 120,
			slug: 'Department of ECE',
			icon: 'fa-microchip',
			desc: 'Design semiconductor chips, communication networks, IoT nodes, and signal processors.'
		},
		{
			sno: 5,
			estd: 2008,
			name: 'Electrical & Electronic Engineering',
			intake: 60,
			slug: 'Department of EEE',
			icon: 'fa-bolt',
			desc: 'Develop clean energy systems, smart grids, power electronics, and automation systems.'
		},
		{
			sno: 6,
			estd: 2008,
			name: 'Mechanical Engineering',
			intake: 60,
			slug: 'Department of MECH',
			icon: 'fa-gears',
			desc: 'Innovate robotics, automotive design, thermodynamics, and manufacturing systems.'
		}
	];

	const pgPrograms = [
		{
			sno: 1,
			duration: '2 Years',
			name: 'Master of Technology (M.Tech)',
			slug: null,
			icon: 'fa-graduation-cap',
			desc: 'Advanced research and specialization across core tech streams.'
		},
		{
			sno: 2,
			duration: '2 Years',
			name: 'Master of Business Administration (MBA)',
			slug: 'Department of MBA',
			icon: 'fa-briefcase',
			desc: 'Develop leadership, scale marketing, finance operations, and entrepreneurial strategy.'
		}
	];

	let visible = false;

	onMount(() => {
		visible = true;
	});

	/** @param {string | null} slug */
	async function navigateToCourse(slug) {
		if (!slug) return;
		await goto('/department/' + encodeURIComponent(slug));
	}
</script>

<Seo
	title="Courses Offered - BITS Vizag"
	description="Explore the comprehensive range of academic programs offered at BITS Vizag. Join us to shape your future."
	url="https://bitsvizag.com/courses/Offered-Courses"
	imageUrl="/bits.png"
	siteName="BITS Vizag"
/>

<div class="highnote-root">
	{#if visible}
		<!-- HERO SECTION -->
		<section class="hero-section" in:fade={{ duration: 600 }}>
			<div class="hero-container">
				<div class="hero-left" in:fly={{ x: -40, duration: 800 }}>
					<span class="hero-tag">ACADEMIC OFFERINGS</span>
					<h1 class="hero-title">The Region's Most Modern Engineering Academy</h1>
					<p class="hero-subtitle">
						BITS Vizag is the premier all-in-one platform for engineering, technology, and management education, preparing students for next-generation industrial demands.
					</p>
					<div class="hero-actions">
						<a href="/application-form" class="btn-green-pill">
							Apply for Admissions <span class="arrow">→</span>
						</a>
					</div>
				</div>

				<div class="hero-right" in:fly={{ x: 40, duration: 800 }}>
					<!-- Interactive Floating Card Graphic (Highnote Credit Card Style mockup for BITS Student ID) -->
					<div class="card-mockup-wrapper">
						<div class="floating-card accent-green">
							<div class="card-glow"></div>
							<div class="card-logo">
								<svg class="h-6" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
								</svg>
								<span class="logo-text">BITS VIZAG</span>
							</div>
							<div class="card-chip"></div>
							<div class="card-number">4147 834 6763 8008</div>
							<div class="card-footer-info">
								<div class="card-holder">
									<span class="label">STUDENT</span>
									<span class="value">CSE SPECIALIST</span>
								</div>
								<div class="card-valid">
									<span class="label">BATCH</span>
									<span class="value">2026 - 2030</span>
								</div>
							</div>
						</div>
						
						<!-- Sub decorative card -->
						<div class="floating-card sub-card">
							<div class="card-header-sub">
								<span class="dot red"></span>
								<span class="dot yellow"></span>
								<span class="dot green"></span>
							</div>
							<div class="sub-card-content">
								<span class="label">EAPCET CODE</span>
								<strong class="value">BABA</strong>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- THREE COLUMN VALUE PROPOSITION ("Experiences built for tomorrow") -->
		<section class="value-proposition-section">
			<div class="container">
				<div class="section-header-centered">
					<h2 class="title-large">Educational pathways built for tomorrow, not yesterday</h2>
					<a href="/aboutus" class="btn-outline-pill">
						Learn About BITS <span class="arrow">→</span>
					</a>
				</div>

				<div class="three-col-grid">
					<!-- B.Tech Tech Specializations -->
					<div class="value-col">
						<div class="value-icon-box">
							<i class="fa-solid fa-laptop-code"></i>
						</div>
						<h3 class="value-title">Streamlined B.Tech Tech</h3>
						<p class="value-desc">
							Accelerated technology paths covering CSE, Artificial Intelligence, and Cyber Security with dedicated sandbox labs and continuous product development models.
						</p>
					</div>

					<!-- Core Engineering -->
					<div class="value-col">
						<div class="value-icon-box">
							<i class="fa-solid fa-microchip"></i>
						</div>
						<h3 class="value-title">Core Engineering & Hardware</h3>
						<p class="value-desc">
							Comprehensive design systems covering ECE chip architecture, EEE electrical networks, and Mechanical systems engineering. Built for high-frequency deployment.
						</p>
					</div>

					<!-- Postgraduate Studies -->
					<div class="value-col">
						<div class="value-icon-box">
							<i class="fa-solid fa-graduation-cap"></i>
						</div>
						<h3 class="value-title">Built for Global Growth</h3>
						<p class="value-desc">
							Advanced MBA & M.Tech business frameworks and specialization research. Designed to scale management strategies from single-user to global platforms.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- SEAT ALLOCATION SYSTEM -->
		<section class="allocation-section">
			<div class="container">
				<div class="allocation-grid">
					<div class="allocation-left">
						<h2 class="title-large">Complete allocation structure for seats</h2>
						<p class="section-desc-light">
							Admissions to BITS Vizag are regulated under strict institutional standards, split into government quota channels and direct management seats.
						</p>
						<ul class="checklist-items">
							<li>
								<div class="check-icon">
									<i class="fa-solid fa-circle-check"></i>
								</div>
								<div class="check-text">
									<strong>EAPCET / ECET Quota:</strong> 70% seats allotted through the state counseling platform.
								</div>
							</li>
							<li>
								<div class="check-icon">
									<i class="fa-solid fa-circle-check"></i>
								</div>
								<div class="check-text">
									<strong>PGECET / ICET Quota:</strong> Direct PG counseling routes for M.Tech and MBA streams.
								</div>
							</li>
							<li>
								<div class="check-icon">
									<i class="fa-solid fa-circle-check"></i>
								</div>
								<div class="check-text">
									<strong>Management Quota:</strong> 30% seats earmarked for direct institutional selection.
								</div>
							</li>
							<li>
								<div class="check-icon">
									<i class="fa-solid fa-circle-check"></i>
								</div>
								<div class="check-text">
									<strong>Lateral Entry Option:</strong> Seamless admission to the second year of engineering for diploma holders.
								</div>
							</li>
						</ul>
						<div class="hero-actions">
							<a href="/application-form" class="btn-black-pill">
								Apply Online Now <span class="arrow">→</span>
							</a>
						</div>
					</div>

					<div class="allocation-right">
						<!-- Custom diagram representation of Seat Division -->
						<div class="seat-division-diagram">
							<div class="diagram-header">
								<span>Allocation Division Matrix</span>
								<span class="badge">Live Schema</span>
							</div>
							<div class="diagram-flow">
								<div class="flow-node active">
									<span class="label">Total Seats</span>
									<strong class="value">100%</strong>
								</div>
								<div class="flow-lines">
									<div class="line branch-left"></div>
									<div class="line branch-right"></div>
								</div>
								<div class="flow-destinations">
									<div class="dest-card gov-quota">
										<i class="fa-solid fa-building-columns"></i>
										<span class="label">Govt Quota</span>
										<strong class="value">70%</strong>
										<span class="subtext">Counseling Entrance</span>
									</div>
									<div class="dest-card mgt-quota">
										<i class="fa-solid fa-id-card"></i>
										<span class="label">Mgt Quota</span>
										<strong class="value">30%</strong>
										<span class="subtext">Direct Admission</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- INTERACTIVE B.TECH SPECIALIZATIONS LIST -->
		<section class="specializations-section">
			<div class="container">
				<div class="section-title-wrap">
					<h2 class="title-large">Undergraduate Program Matrix (B.Tech)</h2>
					<span class="duration-tag">
						<i class="fa-solid fa-calendar-days"></i> Duration: 4 Years
					</span>
				</div>

				<div class="specializations-grid">
					{#each bTechPrograms as course}
						<div class="spec-card" on:click={() => navigateToCourse(course.slug)}>
							<div class="card-top">
								<div class="icon-bubble">
									<i class="fa-solid {course.icon}"></i>
								</div>
								<span class="estd-text">Estd. {course.estd}</span>
							</div>
							<div class="card-mid">
								<h3 class="spec-title">{course.name}</h3>
								<p class="spec-desc">{course.desc}</p>
							</div>
							<div class="card-bottom">
								<div class="intake-info">
									<span class="label">Intake Capacity</span>
									<span class="value">{course.intake} Seats</span>
								</div>
								<div class="action-arrow">
									<span class="explore-text">Explore</span>
									<i class="fa-solid fa-arrow-right"></i>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- INTERACTIVE POSTGRADUATE SPECIALIZATIONS LIST -->
		<section class="pg-section">
			<div class="container">
				<div class="section-title-wrap">
					<h2 class="title-large">Postgraduate & Business Programs (PG)</h2>
					<span class="duration-tag">
						<i class="fa-solid fa-calendar-days"></i> Duration: 2 Years
					</span>
				</div>

				<div class="pg-grid">
					{#each pgPrograms as course}
						<div class="pg-card {course.slug ? 'is-clickable' : ''}" on:click={() => navigateToCourse(course.slug)}>
							<div class="card-top">
								<div class="icon-bubble">
									<i class="fa-solid {course.icon}"></i>
								</div>
								<span class="estd-text">{course.duration}</span>
							</div>
							<div class="card-mid">
								<h3 class="spec-title">{course.name}</h3>
								<p class="spec-desc">{course.desc}</p>
							</div>
							<div class="card-bottom">
								{#if course.slug}
									<div class="intake-info">
										<span class="label">Status</span>
										<span class="value active">Open to Explore</span>
									</div>
									<div class="action-arrow">
										<span class="explore-text">Explore</span>
										<i class="fa-solid fa-arrow-right"></i>
									</div>
								{:else}
									<div class="intake-info">
										<span class="label">Status</span>
										<span class="value static">Information Only</span>
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- ACCREDITATION FOOTER & CODE BLOCK -->
		<section class="code-accreditation-section">
			<div class="container">
				<div class="counselling-code-card">
					<div class="code-glow"></div>
					<div class="code-details">
						<span class="tag">EAPCET / ICET COUNSELLING CODE</span>
						<h3 class="code-title">BABA</h3>
						<p class="code-sub">Select Baba Institute of Technology & Sciences during college selection options</p>
					</div>
					<a href="/Online-Grievances" class="btn-green-pill shrink-on-mobile">
						Student Portal Login <span class="arrow">→</span>
					</a>
				</div>

				<div class="accreditation-footer">
					<div class="footer-pills">
						<span class="pill-badge">UGC Autonomous</span>
						<span class="separator">|</span>
						<span class="pill-badge">NAAC 'A' Grade</span>
						<span class="separator">|</span>
						<span class="pill-badge">JNTU-GV Affiliated</span>
					</div>
				</div>
			</div>
		</section>
	{/if}
</div>

<style>
	.highnote-root {
		font-family: 'Inter', sans-serif;
		background-color: #fafaf9;
		color: #1c1c1e;
		min-height: 100vh;
		overflow-x: hidden;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 24px;
	}

	/* Hero Section */
	.hero-section {
		padding: 120px 24px 80px 24px;
		background: radial-gradient(circle at 100% 0%, #f0fdf4 0%, #fafaf9 60%);
	}

	.hero-container {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 60px;
		align-items: center;
	}

	.hero-tag {
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #16a34a;
		margin-bottom: 16px;
	}

	.hero-title {
		font-family: 'Outfit', sans-serif;
		font-size: clamp(2.5rem, 5vw, 4.2rem);
		font-weight: 800;
		color: #0f172a;
		line-height: 1.1;
		letter-spacing: -0.03em;
		margin: 0 0 24px 0;
	}

	.hero-subtitle {
		font-size: 1.15rem;
		line-height: 1.6;
		color: #475569;
		margin: 0 0 36px 0;
		max-width: 540px;
	}

	/* Buttons styling */
	.btn-green-pill {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background-color: #10b981;
		color: #ffffff;
		padding: 14px 28px;
		border-radius: 9999px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s ease;
		box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
	}

	.btn-green-pill:hover {
		background-color: #059669;
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
	}

	.btn-outline-pill {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		border: 1.5px solid #0f172a;
		color: #0f172a;
		padding: 12px 24px;
		border-radius: 9999px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.btn-outline-pill:hover {
		background-color: #0f172a;
		color: #ffffff;
	}

	.btn-black-pill {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background-color: #0f172a;
		color: #ffffff;
		padding: 14px 28px;
		border-radius: 9999px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.btn-black-pill:hover {
		background-color: #1e293b;
		transform: translateY(-2px);
	}

	.arrow {
		transition: transform 0.2s ease;
	}

	.btn-green-pill:hover .arrow,
	.btn-outline-pill:hover .arrow,
	.btn-black-pill:hover .arrow {
		transform: translateX(4px);
	}

	/* Hero Right - Card Graphic */
	.card-mockup-wrapper {
		position: relative;
		width: 100%;
		height: 380px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.floating-card {
		position: absolute;
		width: 320px;
		height: 200px;
		border-radius: 20px;
		padding: 24px;
		color: #ffffff;
		box-shadow: 0 20px 40px rgba(0,0,0,0.12);
		overflow: hidden;
		transition: transform 0.3s ease;
	}

	.accent-green {
		background: linear-gradient(135deg, #10b981 0%, #059669 100%);
		transform: rotate(-8deg) translate(-20px, -20px);
		z-index: 2;
	}

	.sub-card {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		color: #0f172a;
		width: 240px;
		height: 140px;
		transform: rotate(6deg) translate(80px, 60px);
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card-glow {
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%);
		pointer-events: none;
	}

	.card-logo {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 24px;
	}

	.logo-text {
		font-size: 0.85rem;
		font-weight: 800;
		letter-spacing: 0.05em;
	}

	.card-chip {
		width: 40px;
		height: 30px;
		background: linear-gradient(135deg, #ffe066 0%, #f5c400 100%);
		border-radius: 6px;
		margin-bottom: 16px;
	}

	.card-number {
		font-family: monospace;
		font-size: 1.1rem;
		letter-spacing: 0.15em;
		margin-bottom: 20px;
		opacity: 0.9;
	}

	.card-footer-info {
		display: flex;
		justify-content: space-between;
	}

	.card-holder, .card-valid {
		display: flex;
		flex-direction: column;
	}

	.label {
		font-size: 0.55rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		opacity: 0.6;
		margin-bottom: 4px;
	}

	.value {
		font-size: 0.75rem;
		font-weight: 700;
	}

	.card-header-sub {
		display: flex;
		gap: 6px;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.dot.red { background-color: #ef4444; }
	.dot.yellow { background-color: #eab308; }
	.dot.green { background-color: #10b981; }

	.sub-card-content .label {
		color: #64748b;
	}

	.sub-card-content .value {
		font-size: 1.6rem;
		font-weight: 900;
		color: #0f172a;
	}

	/* Value Proposition Section */
	.value-proposition-section {
		padding: 80px 0;
		background-color: #ffffff;
		border-bottom: 1px solid #f1f5f9;
	}

	.section-header-centered {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 60px;
		gap: 40px;
	}

	.title-large {
		font-family: 'Outfit', sans-serif;
		font-size: clamp(1.8rem, 3.5vw, 2.5rem);
		font-weight: 800;
		color: #0f172a;
		line-height: 1.2;
		letter-spacing: -0.02em;
		margin: 0;
		max-width: 600px;
	}

	.three-col-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 40px;
	}

	.value-col {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.value-icon-box {
		width: 56px;
		height: 56px;
		border-radius: 16px;
		background-color: #f0fdf4;
		color: #16a34a;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.4rem;
	}

	.value-title {
		font-size: 1.25rem;
		font-weight: 700;
		color: #0f172a;
		margin: 0;
	}

	.value-desc {
		font-size: 0.95rem;
		line-height: 1.6;
		color: #64748b;
		margin: 0;
	}

	/* Allocation Section */
	.allocation-section {
		padding: 100px 0;
		background-color: #fafaf9;
		border-bottom: 1px solid #f1f5f9;
	}

	.allocation-grid {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 80px;
		align-items: center;
	}

	.section-desc-light {
		font-size: 1.05rem;
		line-height: 1.6;
		color: #475569;
		margin: 16px 0 36px 0;
	}

	.checklist-items {
		list-style: none;
		padding: 0;
		margin: 0 0 40px 0;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.checklist-items li {
		display: flex;
		gap: 14px;
		align-items: flex-start;
	}

	.check-icon {
		color: #10b981;
		font-size: 1.2rem;
		line-height: 1;
		margin-top: 2px;
	}

	.check-text {
		font-size: 0.98rem;
		line-height: 1.5;
		color: #475569;
	}

	.check-text strong {
		color: #0f172a;
	}

	/* Diagram Representation */
	.seat-division-diagram {
		background-color: #ffffff;
		border: 1.5px solid #e2e8f0;
		border-radius: 24px;
		padding: 30px;
		box-shadow: 0 10px 30px rgba(0,0,0,0.02);
	}

	.diagram-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1.5px solid #f1f5f9;
		padding-bottom: 16px;
		margin-bottom: 24px;
		font-weight: 700;
		font-size: 0.9rem;
		color: #0f172a;
	}

	.diagram-header .badge {
		background-color: #e2e8f0;
		color: #475569;
		font-size: 0.72rem;
		font-weight: 700;
		padding: 4px 8px;
		border-radius: 9999px;
		text-transform: uppercase;
	}

	.diagram-flow {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.flow-node {
		background-color: #0f172a;
		color: #ffffff;
		border-radius: 12px;
		padding: 12px 24px;
		text-align: center;
		display: flex;
		flex-direction: column;
		min-width: 140px;
	}

	.flow-node .label {
		color: rgba(255,255,255,0.6);
	}

	.flow-node .value {
		font-size: 1.2rem;
	}

	.flow-lines {
		position: relative;
		width: 100%;
		height: 40px;
	}

	.line {
		position: absolute;
		top: 0;
		height: 100%;
		border-top: 1.5px solid #cbd5e1;
		width: 25%;
	}

	.line.branch-left {
		right: 50%;
		border-right: 1.5px solid #cbd5e1;
		border-radius: 0 8px 0 0;
	}

	.line.branch-right {
		left: 50%;
		border-left: 1.5px solid #cbd5e1;
		border-radius: 8px 0 0 0;
	}

	.flow-destinations {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		width: 100%;
	}

	.dest-card {
		border: 1px solid #e2e8f0;
		border-radius: 16px;
		padding: 20px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.dest-card.gov-quota {
		background-color: #f0fdf4;
		border-color: #bbf7d0;
		color: #16a34a;
	}

	.dest-card.mgt-quota {
		background-color: #f8fafc;
		border-color: #e2e8f0;
		color: #0f172a;
	}

	.dest-card i {
		font-size: 1.3rem;
		margin-bottom: 8px;
	}

	.dest-card .value {
		font-size: 1.5rem;
		font-weight: 800;
	}

	.dest-card .subtext {
		font-size: 0.72rem;
		font-weight: 600;
		margin-top: 4px;
		opacity: 0.8;
	}

	/* Specializations Section */
	.specializations-section {
		padding: 100px 0;
		background-color: #ffffff;
		border-bottom: 1px solid #f1f5f9;
	}

	.section-title-wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 48px;
		border-bottom: 1px solid #f1f5f9;
		padding-bottom: 24px;
	}

	.duration-tag {
		font-size: 0.88rem;
		font-weight: 700;
		background-color: #f8fafc;
		border: 1px solid #e2e8f0;
		padding: 6px 14px;
		border-radius: 9999px;
		color: #475569;
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.specializations-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}

	.spec-card {
		border: 1.5px solid #e2e8f0;
		background-color: #ffffff;
		border-radius: 24px;
		padding: 30px;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 280px;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.spec-card:hover {
		transform: translateY(-6px);
		border-color: #0f172a;
		box-shadow: 0 20px 40px rgba(0,0,0,0.03);
	}

	.spec-card .card-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.icon-bubble {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		background-color: #f8fafc;
		color: #0f172a;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.15rem;
		transition: all 0.2s ease;
	}

	.spec-card:hover .icon-bubble {
		background-color: #0f172a;
		color: #ffffff;
	}

	.estd-text {
		font-size: 0.72rem;
		font-weight: 700;
		color: #94a3b8;
		letter-spacing: 0.05em;
	}

	.spec-title {
		font-size: 1.25rem;
		font-weight: 700;
		color: #0f172a;
		margin: 0 0 10px 0;
		line-height: 1.3;
	}

	.spec-desc {
		font-size: 0.88rem;
		line-height: 1.5;
		color: #64748b;
		margin: 0;
	}

	.spec-card .card-bottom {
		border-top: 1px solid #f1f5f9;
		padding-top: 20px;
		margin-top: 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.intake-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.intake-info .label {
		color: #94a3b8;
		font-size: 0.65rem;
	}

	.intake-info .value {
		font-size: 0.88rem;
		font-weight: 700;
		color: #0f172a;
	}

	.intake-info .value.active {
		color: #16a34a;
	}

	.intake-info .value.static {
		color: #64748b;
	}

	.action-arrow {
		display: flex;
		align-items: center;
		gap: 6px;
		color: #0f172a;
		font-weight: 700;
		font-size: 0.82rem;
		opacity: 0;
		transform: translateX(-10px);
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.spec-card:hover .action-arrow,
	.pg-card:hover .action-arrow {
		opacity: 1;
		transform: translateX(0);
	}

	/* PG Section */
	.pg-section {
		padding: 100px 0;
		background-color: #fafaf9;
		border-bottom: 1px solid #f1f5f9;
	}

	.pg-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
	}

	.pg-card {
		border: 1.5px solid #e2e8f0;
		background-color: #ffffff;
		border-radius: 24px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 260px;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.pg-card.is-clickable {
		cursor: pointer;
	}

	.pg-card.is-clickable:hover {
		transform: translateY(-6px);
		border-color: #0f172a;
		box-shadow: 0 20px 40px rgba(0,0,0,0.03);
	}

	.pg-card .card-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.pg-card .card-bottom {
		border-top: 1px solid #f1f5f9;
		padding-top: 20px;
		margin-top: 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/* Counselling code & accreditation footer */
	.code-accreditation-section {
		padding: 80px 0;
		background-color: #ffffff;
	}

	.counselling-code-card {
		background-color: #0f172a;
		color: #ffffff;
		border-radius: 28px;
		padding: 48px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		overflow: hidden;
		margin-bottom: 60px;
	}

	.code-glow {
		position: absolute;
		top: -40%;
		right: -10%;
		width: 300px;
		height: 300px;
		background: radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0) 70%);
		pointer-events: none;
	}

	.code-details {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.code-details .tag {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		color: #10b981;
	}

	.code-title {
		font-family: 'Outfit', sans-serif;
		font-size: 3rem;
		font-weight: 900;
		letter-spacing: 0.05em;
		margin: 0;
		line-height: 1;
	}

	.code-sub {
		font-size: 0.88rem;
		color: #94a3b8;
		margin: 0;
	}

	.accreditation-footer {
		border-top: 1.5px solid #f1f5f9;
		padding-top: 40px;
		text-align: center;
	}

	.footer-pills {
		display: inline-flex;
		align-items: center;
		gap: 16px;
		background-color: #f8fafc;
		border: 1px solid #e2e8f0;
		padding: 8px 20px;
		border-radius: 9999px;
	}

	.pill-badge {
		font-size: 0.8rem;
		font-weight: 700;
		color: #475569;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.separator {
		color: #cbd5e1;
		font-size: 0.8rem;
	}

	/* Responsive Media Queries */
	@media (max-width: 1024px) {
		.hero-container {
			gap: 40px;
		}

		.three-col-grid {
			gap: 30px;
		}

		.specializations-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.hero-container {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 50px;
		}

		.hero-left {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.hero-actions {
			display: flex;
			justify-content: center;
			width: 100%;
		}

		.three-col-grid {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.allocation-grid {
			grid-template-columns: 1fr;
			gap: 50px;
		}

		.specializations-grid {
			grid-template-columns: 1fr;
		}

		.pg-grid {
			grid-template-columns: 1fr;
		}

		.counselling-code-card {
			flex-direction: column;
			text-align: center;
			gap: 30px;
			padding: 30px 20px;
		}

		.shrink-on-mobile {
			width: 100%;
			justify-content: center;
		}
	}

	@media (max-width: 480px) {
		.hero-section {
			padding-top: 80px;
		}

		.card-mockup-wrapper {
			height: 320px;
		}

		.floating-card {
			width: 280px;
			height: 175px;
		}

		.sub-card {
			width: 200px;
			height: 120px;
			transform: rotate(6deg) translate(60px, 50px);
		}

		.sub-card-content .value {
			font-size: 1.3rem;
		}

		.footer-pills {
			flex-direction: column;
			gap: 8px;
			border-radius: 16px;
			width: 100%;
		}

		.separator {
			display: none;
		}
	}
</style>
