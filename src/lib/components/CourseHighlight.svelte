<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const courses = [
		{
			title: 'CSE',
			image: '/gallery/g2.jpg',
			desc: 'Computer Science & Engineering',
			tagline: 'Software Architecture, Cloud & Algorithms',
			duration: '4 Years',
			seats: '240 Seats',
			href: `/department/${encodeURIComponent('Department of CSE')}`,
			icon: '💻',
			color: '#ffb356',
			watermark: 'CSE'
		},
		{
			title: 'AI & ML',
			image: '/Course-highlight/newAI.jpg',
			desc: 'Artificial Intelligence & Machine Learning',
			tagline: 'Neural Networks, Deep Learning & Robotics',
			duration: '4 Years',
			seats: '120 Seats',
			href: `/department/${encodeURIComponent('Department of CSE (AI & ML)')}`,
			icon: '🤖',
			color: '#8ecdfa',
			watermark: 'AI·ML'
		},
		{
			title: 'Cyber Security',
			image: '/CS-Banners/CS-images/get4.jpg',
			desc: 'CSE (Cyber Security)',
			tagline: 'Network Defense, Forensics & Cryptography',
			duration: '4 Years',
			seats: '60 Seats',
			href: `/department/${encodeURIComponent('Department of CSE (Cyber Security)')}`,
			icon: '🛡️',
			color: '#c3b5ff',
			watermark: 'CYBER'
		},
		{
			title: 'ECE',
			image: '/Course-highlight/newece.jpg',
			desc: 'Electronics & Communication Engineering',
			tagline: 'VLSI, Embedded Systems & 5G Communications',
			duration: '4 Years',
			seats: '120 Seats',
			href: `/department/${encodeURIComponent('Department of ECE')}`,
			icon: '📡',
			color: '#e7b2ff',
			watermark: 'ECE'
		},
		{
			title: 'EEE',
			image: './Course-highlight/eeenew.png',
			desc: 'Electrical & Electronics Engineering',
			tagline: 'Power Systems, Renewable Energy & EV Tech',
			duration: '4 Years',
			seats: '60 Seats',
			href: `/department/${encodeURIComponent('Department of EEE')}`,
			icon: '⚡',
			color: '#ff9ebb',
			watermark: 'EEE'
		},
		{
			title: 'Mechanical',
			image: '/mechnew.png',
			desc: 'Mechanical Engineering',
			tagline: 'CAE Simulation, Robotics & Advanced Manufacturing',
			duration: '4 Years',
			seats: '60 Seats',
			href: `/department/${encodeURIComponent('Department of MECH')}`,
			icon: '🔧',
			color: '#a3e635',
			watermark: 'MECH'
		}
	];

	let active = 0;
	let paused = false;
	/** @type {ReturnType<typeof setInterval> | undefined} */
	let autoplayInterval;

	function startAutoplay() {
		if (autoplayInterval) clearInterval(autoplayInterval);
		autoplayInterval = setInterval(() => {
			if (!paused) {
				active = (active + 1) % courses.length;
			}
		}, 4500);
	}

	onMount(() => {
		startAutoplay();
		return () => {
			if (autoplayInterval) clearInterval(autoplayInterval);
		};
	});

	/** @param {number} i */
	function handleSelect(i) {
		active = i;
		paused = true;
	}

	function handleMouseLeave() {
		paused = false;
	}
</script>

<section class="pathways-section" on:mouseleave={handleMouseLeave} aria-label="Academic Pathways">
	<!-- Section Header -->
	<div class="pathways-header">
		<div class="header-badge">
			<span class="pulse-dot"></span>
			<span>Academic Excellence • BITS Vizag (Autonomous)</span>
		</div>
		<h2 class="header-title">Explore Academic Pathways</h2>
		<p class="header-desc">
			Discover our AICTE-approved, UGC-recognised engineering programmes crafted to align with
			global industry standards and build exceptional careers.
		</p>
	</div>

	<!-- Department Selector Tabs (Clean, quick switching) -->
	<div class="pathways-tabs-bar" role="tablist">
		{#each courses as course, i}
			<button
				type="button"
				role="tab"
				aria-selected={active === i}
				class="tab-pill {active === i ? 'active' : ''}"
				style="--tab-color: {course.color};"
				on:click={() => handleSelect(i)}
			>
				<span class="tab-icon">{course.icon}</span>
				<span class="tab-name">{course.title}</span>
				{#if active === i}
					<span class="tab-indicator" in:fade={{ duration: 200 }}></span>
				{/if}
			</button>
		{/each}
	</div>

	<!-- MAIN POSTER SHOWCASE (Inspired by reference design: Stacked Typography, Layered Card Frame, Pill Badge) -->
	<div class="showcase-shell" style="--course-color: {courses[active].color};">
		<!-- Soft Ambient Glow in Course's Native Color -->
		<div class="ambient-glow" aria-hidden="true"></div>

		<!-- Stacked Rhythmic Watermark Typography (Behind the frame, just like the reference mockup) -->
		<div class="watermark-stack" aria-hidden="true">
			<span class="watermark-line line-solid">{courses[active].watermark}</span>
			<span class="watermark-line line-stroke-1">{courses[active].watermark}</span>
			<span class="watermark-line line-stroke-2">{courses[active].watermark}</span>
			<span class="watermark-line line-stroke-3">{courses[active].watermark}</span>
		</div>

		<!-- Foreground Grid -->
		<div class="showcase-content">
			<!-- LEFT: Layered Framed Photo Card (Matching reference mockup's white card with rounded inner window) -->
			<div class="poster-card-col">
				<div class="poster-card-wrapper">
					<!-- Shadow Elevation Backdrop -->
					<div class="card-shadow-rim"></div>

					<!-- The Elevated White Poster Card -->
					<div class="poster-frame-card">
						<!-- Top Frame Accent -->
						<div class="frame-top-bar">
							<span class="frame-dept-code">{courses[active].title}</span>
							<span class="frame-tag">BITS VIZAG (A)</span>
						</div>

						<!-- Inner Rounded Photo Window -->
						<div class="frame-photo-window">
							{#key active}
								<img
									src={courses[active].image}
									alt={courses[active].desc}
									class="frame-photo-img"
									in:fade={{ duration: 350 }}
								/>
							{/key}
							<div class="photo-gradient-overlay"></div>
							<span class="photo-floating-icon">{courses[active].icon}</span>
						</div>

						<!-- Bottom Frame Strip -->
						<div class="frame-bottom-strip">
							<span class="strip-label">4-Year Degree Programme</span>
							<span class="strip-seats" style="color: {courses[active].color};">
								{courses[active].seats}
							</span>
						</div>
					</div>
				</div>
			</div>

			<!-- RIGHT: Editorial Detail & Typography Lockup (Matching reference layout) -->
			<div class="poster-info-col">
				<!-- Top Script Subtitle -->
				<div class="script-header-row">
					<span class="script-sub">Engineering Pathways</span>
					<span class="script-institution">Autonomous Institution</span>
				</div>

				<!-- Native Colored Pill Badge (e.g. "Placed as a" in reference -> "B.Tech Programme") -->
				<div class="badge-lockup">
					<span class="course-pill-badge" style="background-color: {courses[active].color};">
						B.Tech Programme • {courses[active].duration}
					</span>
				</div>

				<!-- Bold Designation-Style Department Titles -->
				<div class="title-lockup">
					{#key active}
						<div in:fade={{ duration: 300 }}>
							<h3 class="main-course-title">
								{courses[active].desc}
							</h3>
							<p class="course-tagline">
								{courses[active].tagline}
							</p>
						</div>
					{/key}
				</div>

				<!-- 3 Verified Academic Metrics (No AI gradients, clean and crisp) -->
				<div class="metrics-row">
					<div class="metric-card">
						<span class="metric-lbl">Duration</span>
						<strong class="metric-val">{courses[active].duration}</strong>
						<span class="metric-sub">Full-Time On Campus</span>
					</div>

					<div class="metric-card">
						<span class="metric-lbl">Intake Capacity</span>
						<strong class="metric-val" style="color: {courses[active].color};">
							{courses[active].seats}
						</strong>
						<span class="metric-sub">Annual Admissions</span>
					</div>

					<div class="metric-card">
						<span class="metric-lbl">Accreditation</span>
						<strong class="metric-val">AICTE / UGC</strong>
						<span class="metric-sub">JNTUK Affiliated</span>
					</div>
				</div>

				<!-- Bottom Action Row: Direct Department Link & Carousel Controls -->
				<div class="actions-row">
					<a
						href={courses[active].href}
						class="btn-explore-dept"
						style="--btn-color: {courses[active].color};"
					>
						<span>Explore Department & Curriculum</span>
						<span class="arrow-circle">
							<i class="fa-solid fa-arrow-right"></i>
						</span>
					</a>

					<!-- Quick Indicator Dots -->
					<div class="carousel-dots" aria-label="Course slides">
						{#each courses as _, i}
							<button
								type="button"
								class="dot {active === i ? 'active' : ''}"
								style="--dot-color: {courses[active].color};"
								on:click={() => handleSelect(i)}
								aria-label="View course {i + 1}"
							></button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.pathways-section {
		max-width: 1280px;
		margin: 0 auto;
		padding: 4.5rem 1.5rem 5.5rem;
		font-family: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif;
	}

	/* ── Header ──────────────────────────────────────────────────────────────── */
	.pathways-header {
		text-align: center;
		max-width: 760px;
		margin: 0 auto 2.5rem;
	}

	.header-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.35rem 0.9rem;
		border-radius: 9999px;
		background: #f1f5f9;
		border: 1px solid #e2e8f0;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #0f172a;
		margin-bottom: 0.85rem;
	}

	.pulse-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #0284c7;
		box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.2);
	}

	.header-title {
		font-size: clamp(2rem, 3.8vw, 3.25rem);
		font-weight: 800;
		color: #0f172a;
		letter-spacing: -0.025em;
		margin: 0 0 0.85rem;
		line-height: 1.12;
	}

	.header-desc {
		font-size: clamp(0.92rem, 1.2vw, 1.05rem);
		line-height: 1.65;
		color: #64748b;
		margin: 0;
		font-weight: 400;
	}

	/* ── Department Selector Tabs ───────────────────────────────────────────── */
	.pathways-tabs-bar {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin-bottom: 2rem;
	}

	.tab-pill {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.55rem 1.1rem;
		border-radius: 9999px;
		background: #ffffff;
		border: 1px solid #e2e8f0;
		font-size: 0.85rem;
		font-weight: 700;
		color: #475569;
		cursor: pointer;
		transition: all 0.25s ease;
		box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
	}

	.tab-pill:hover {
		color: #0f172a;
		border-color: #cbd5e1;
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
	}

	.tab-pill.active {
		color: #0f172a;
		background: #ffffff;
		border-color: var(--tab-color);
		box-shadow:
			0 4px 14px -2px rgba(15, 23, 42, 0.1),
			0 0 0 1px var(--tab-color);
	}

	.tab-icon {
		font-size: 1rem;
	}

	.tab-name {
		letter-spacing: -0.01em;
	}

	.tab-indicator {
		position: absolute;
		bottom: -2px;
		left: 20%;
		right: 20%;
		height: 3px;
		border-radius: 9999px;
		background: var(--tab-color);
	}

	/* ── Main Showcase Shell (Poster Composition) ───────────────────────────── */
	.showcase-shell {
		position: relative;
		border-radius: 2.25rem;
		background: #090d16;
		border: 1px solid rgba(255, 255, 255, 0.1);
		padding: clamp(2rem, 4vw, 3.5rem);
		overflow: hidden;
		box-shadow:
			0 25px 60px -15px rgba(15, 23, 42, 0.35),
			0 0 0 1px rgba(255, 255, 255, 0.05);
	}

	.ambient-glow {
		position: absolute;
		top: -10%;
		right: -10%;
		width: 500px;
		height: 500px;
		border-radius: 50%;
		background: radial-gradient(circle, var(--course-color) 0%, transparent 70%);
		opacity: 0.15;
		filter: blur(60px);
		pointer-events: none;
		transition: background 0.6s ease;
	}

	/* ── Stacked Rhythmic Watermark (Inspired by Reference) ──────────────────── */
	.watermark-stack {
		position: absolute;
		right: -1rem;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		line-height: 0.82;
		pointer-events: none;
		user-select: none;
		z-index: 1;
		opacity: 0.8;
	}

	.watermark-line {
		font-size: clamp(4.5rem, 11vw, 10.5rem);
		font-weight: 900;
		letter-spacing: -0.04em;
		text-transform: uppercase;
		display: block;
		text-align: right;
		transition: all 0.5s ease;
	}

	.line-solid {
		color: rgba(255, 255, 255, 0.08);
	}

	.line-stroke-1 {
		-webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.09);
		color: transparent;
	}

	.line-stroke-2 {
		-webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.05);
		color: transparent;
	}

	.line-stroke-3 {
		-webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.025);
		color: transparent;
	}

	/* ── Foreground Grid ─────────────────────────────────────────────────────── */
	.showcase-content {
		position: relative;
		z-index: 2;
		display: grid;
		grid-template-columns: 1fr 1.35fr;
		gap: clamp(2rem, 4vw, 4rem);
		align-items: center;
	}

	/* ── LEFT: Layered Framed Poster Card ───────────────────────────────────── */
	.poster-card-col {
		display: flex;
		justify-content: center;
	}

	.poster-card-wrapper {
		position: relative;
		width: 100%;
		max-width: 360px;
	}

	.card-shadow-rim {
		position: absolute;
		inset: -8px;
		border-radius: 2.2rem;
		background: radial-gradient(circle, var(--course-color) 0%, transparent 70%);
		opacity: 0.25;
		filter: blur(18px);
		pointer-events: none;
		transition: opacity 0.5s ease;
	}

	.poster-frame-card {
		position: relative;
		background: #ffffff;
		border-radius: 2rem;
		padding: 1rem 1rem 1.15rem;
		box-shadow:
			0 25px 50px -12px rgba(0, 0, 0, 0.65),
			0 4px 12px rgba(0, 0, 0, 0.2);
		transform: rotate(-1.5deg);
		transition:
			transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
			box-shadow 0.4s ease;
	}

	.poster-frame-card:hover {
		transform: rotate(0deg) scale(1.02);
		box-shadow:
			0 30px 60px -12px rgba(0, 0, 0, 0.75),
			0 8px 20px rgba(0, 0, 0, 0.25);
	}

	.frame-top-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.35rem 0.5rem 0.75rem;
		border-bottom: 1px solid #f1f5f9;
		font-size: 0.75rem;
		font-weight: 800;
		color: #0f172a;
	}

	.frame-dept-code {
		letter-spacing: 0.05em;
	}

	.frame-tag {
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		color: #64748b;
	}

	.frame-photo-window {
		position: relative;
		border-radius: 1.45rem;
		overflow: hidden;
		background: #0f172a;
		aspect-ratio: 4 / 4.4;
		margin: 0.75rem 0;
	}

	.frame-photo-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.8s ease;
	}

	.poster-frame-card:hover .frame-photo-img {
		transform: scale(1.05);
	}

	.photo-gradient-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(15, 23, 42, 0.45) 0%, transparent 60%);
		pointer-events: none;
	}

	.photo-floating-icon {
		position: absolute;
		bottom: 0.85rem;
		right: 0.85rem;
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: #ffffff;
		display: grid;
		place-items: center;
		font-size: 1.15rem;
		box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
	}

	.frame-bottom-strip {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.35rem 0.5rem 0.1rem;
		font-size: 0.78rem;
		font-weight: 700;
		color: #334155;
	}

	.strip-seats {
		font-weight: 800;
	}

	/* ── RIGHT: Editorial Detail & Typography Lockup ─────────────────────────── */
	.poster-info-col {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		text-align: left;
	}

	.script-header-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding-bottom: 0.75rem;
	}

	.script-sub {
		font-family: 'Playfair Display', Georgia, serif;
		font-style: italic;
		font-size: clamp(1.4rem, 2.4vw, 1.85rem);
		color: rgba(255, 255, 255, 0.9);
		letter-spacing: 0.01em;
	}

	.script-institution {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.5);
	}

	/* Pill Badge (Inspired by "Placed as a") */
	.badge-lockup {
		display: flex;
		align-items: center;
	}

	.course-pill-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.4rem 1.1rem;
		border-radius: 9999px;
		color: #0f172a;
		font-size: 0.8rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
		transition: background-color 0.4s ease;
	}

	/* Title Lockup */
	.title-lockup {
		min-height: 96px;
	}

	.main-course-title {
		font-size: clamp(1.8rem, 3.2vw, 2.75rem);
		font-weight: 900;
		color: #ffffff;
		letter-spacing: -0.025em;
		line-height: 1.15;
		margin: 0 0 0.45rem;
	}

	.course-tagline {
		font-size: clamp(0.95rem, 1.25vw, 1.1rem);
		color: #94a3b8;
		margin: 0;
		line-height: 1.5;
		font-weight: 500;
	}

	/* 3 Verified Metrics */
	.metrics-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.85rem;
		padding: 1rem 0;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}

	.metric-card {
		padding: 0.75rem 0.9rem;
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.07);
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.metric-lbl {
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #94a3b8;
	}

	.metric-val {
		font-size: 1.25rem;
		font-weight: 800;
		color: #ffffff;
		letter-spacing: -0.02em;
		line-height: 1.2;
	}

	.metric-sub {
		font-size: 0.68rem;
		color: #64748b;
	}

	/* Actions Row */
	.actions-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.btn-explore-dept {
		display: inline-flex;
		align-items: center;
		gap: 0.85rem;
		padding: 0.75rem 1.4rem;
		border-radius: 9999px;
		background: #ffffff;
		color: #0f172a;
		font-size: 0.88rem;
		font-weight: 800;
		letter-spacing: -0.01em;
		text-decoration: none;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
		transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.btn-explore-dept:hover {
		transform: translateY(-2px) scale(1.02);
		background: var(--btn-color);
		box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
	}

	.arrow-circle {
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background: #0f172a;
		color: #ffffff;
		display: grid;
		place-items: center;
		font-size: 0.7rem;
		transition: transform 0.3s ease;
	}

	.btn-explore-dept:hover .arrow-circle {
		transform: translateX(3px);
	}

	.carousel-dots {
		display: flex;
		align-items: center;
		gap: 0.45rem;
	}

	.dot {
		width: 9px;
		height: 9px;
		border-radius: 9999px;
		background: rgba(255, 255, 255, 0.2);
		border: none;
		padding: 0;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.dot:hover {
		background: rgba(255, 255, 255, 0.5);
	}

	.dot.active {
		width: 28px;
		background: var(--dot-color);
	}

	/* ── Responsive ──────────────────────────────────────────────────────────── */
	@media (max-width: 992px) {
		.showcase-content {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.poster-card-wrapper {
			max-width: 320px;
		}

		.poster-frame-card {
			transform: rotate(0deg);
		}

		.watermark-stack {
			right: 0;
			opacity: 0.35;
		}
	}

	@media (max-width: 640px) {
		.pathways-section {
			padding: 2.5rem 1rem 3.5rem;
		}

		.showcase-shell {
			padding: 1.5rem 1.15rem;
			border-radius: 1.75rem;
		}

		.pathways-tabs-bar {
			gap: 0.4rem;
		}

		.tab-pill {
			padding: 0.4rem 0.8rem;
			font-size: 0.76rem;
		}

		.metrics-row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}

		.main-course-title {
			font-size: 1.5rem;
		}

		.btn-explore-dept {
			width: 100%;
			justify-content: center;
		}

		.actions-row {
			flex-direction: column;
			align-items: stretch;
			gap: 1rem;
		}

		.carousel-dots {
			justify-content: center;
		}
	}
</style>
