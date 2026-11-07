<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const courses = [
		{
			title: 'CSE',
			shortName: 'CSE',
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
			shortName: 'AI·ML',
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
			shortName: 'Cyber',
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
			shortName: 'ECE',
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
			shortName: 'EEE',
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
			shortName: 'Mech',
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

	function handlePrev() {
		active = (active - 1 + courses.length) % courses.length;
		paused = true;
	}

	function handleNext() {
		active = (active + 1) % courses.length;
		paused = true;
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

	<!-- Department Selector Tabs: Neat Responsive Grid Structure (3 cols on mobile, 6 cols on desktop) -->
	<div class="pathways-tabs-grid" role="tablist" aria-label="Engineering Departments">
		{#each courses as course, i}
			<button
				type="button"
				role="tab"
				aria-selected={active === i}
				class="tab-card {active === i ? 'active' : ''}"
				style="--tab-color: {course.color};"
				on:click={() => handleSelect(i)}
			>
				<span class="tab-icon-wrap" style="--accent: {course.color}">
					<span class="tab-icon">{course.icon}</span>
				</span>
				<div class="tab-text-wrap">
					<span class="tab-name-desktop">{course.title}</span>
					<span class="tab-name-mobile">{course.shortName}</span>
					<span class="tab-seats-tag">{course.seats.replace(' Seats', '')} seats</span>
				</div>
				{#if active === i}
					<span class="tab-active-indicator" in:fade={{ duration: 150 }}></span>
				{/if}
			</button>
		{/each}
	</div>

	<!-- MAIN POSTER SHOWCASE (Inspired by reference mockup: Layered Card Frame, Stacked Typography, Pill Badge) -->
	<div class="showcase-shell" style="--course-color: {courses[active].color};">
		<!-- Soft Ambient Glow in Course's Native Color -->
		<div class="ambient-glow" aria-hidden="true"></div>

		<!-- Stacked Rhythmic Watermark Typography -->
		<div class="watermark-stack" aria-hidden="true">
			<span class="watermark-line line-solid">{courses[active].watermark}</span>
			<span class="watermark-line line-stroke-1">{courses[active].watermark}</span>
			<span class="watermark-line line-stroke-2">{courses[active].watermark}</span>
			<span class="watermark-line line-stroke-3">{courses[active].watermark}</span>
		</div>

		<!-- Foreground Responsive Grid -->
		<div class="showcase-content">
			<!-- POSTER PHOTO CARD (Layered White Frame with Rounded Inner Window) -->
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
									in:fade={{ duration: 300 }}
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

			<!-- EDITORIAL DETAIL & TYPOGRAPHY LOCKUP -->
			<div class="poster-info-col">
				<!-- Top Script Subtitle -->
				<div class="script-header-row">
					<span class="script-sub">Engineering Pathways</span>
					<span class="script-institution">Autonomous Institution</span>
				</div>

				<!-- Native Colored Pill Badge -->
				<div class="badge-lockup">
					<span class="course-pill-badge" style="background-color: {courses[active].color};">
						B.Tech Programme • {courses[active].duration}
					</span>
				</div>

				<!-- Bold Designation-Style Department Titles -->
				<div class="title-lockup">
					{#key active}
						<div in:fade={{ duration: 250 }}>
							<h3 class="main-course-title">
								{courses[active].desc}
							</h3>
							<p class="course-tagline">
								{courses[active].tagline}
							</p>
						</div>
					{/key}
				</div>

				<!-- 3 Verified Academic Metrics (Neat 3-Column Grid on both Desktop and Mobile) -->
				<div class="metrics-grid">
					<div class="metric-card">
						<span class="metric-lbl">Duration</span>
						<strong class="metric-val">{courses[active].duration}</strong>
						<span class="metric-sub">Full-Time</span>
					</div>

					<div class="metric-card">
						<span class="metric-lbl">Capacity</span>
						<strong class="metric-val" style="color: {courses[active].color};">
							{courses[active].seats.replace(' Seats', '')}
						</strong>
						<span class="metric-sub">Annual Seats</span>
					</div>

					<div class="metric-card">
						<span class="metric-lbl">Accredited</span>
						<strong class="metric-val">AICTE</strong>
						<span class="metric-sub">UGC Autonomous</span>
					</div>
				</div>

				<!-- Bottom Action Row: Direct Department Link & Mobile Slider Arrows -->
				<div class="actions-row">
					<a
						href={courses[active].href}
						class="btn-explore-dept"
						style="--btn-color: {courses[active].color};"
					>
						<span>Explore Department & Syllabus</span>
						<span class="arrow-circle">
							<i class="fa-solid fa-arrow-right"></i>
						</span>
					</a>

					<!-- Carousel Controls: Prev/Next & Dots -->
					<div class="carousel-nav-group">
						<button
							type="button"
							class="nav-arrow-btn"
							on:click={handlePrev}
							aria-label="Previous department"
						>
							<i class="fa-solid fa-chevron-left"></i>
						</button>

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

						<button
							type="button"
							class="nav-arrow-btn"
							on:click={handleNext}
							aria-label="Next department"
						>
							<i class="fa-solid fa-chevron-right"></i>
						</button>
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
		font-family:
			'Plus Jakarta Sans',
			'Inter',
			system-ui,
			-apple-system,
			sans-serif;
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
		font-size: clamp(1.85rem, 3.8vw, 3.25rem);
		font-weight: 800;
		color: #0f172a;
		letter-spacing: -0.025em;
		margin: 0 0 0.85rem;
		line-height: 1.12;
	}

	.header-desc {
		font-size: clamp(0.9rem, 1.2vw, 1.05rem);
		line-height: 1.65;
		color: #64748b;
		margin: 0;
		font-weight: 400;
	}

	/* ── Department Selector Tabs: Neat Responsive Column Grid ──────────────── */
	.pathways-tabs-grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 0.65rem;
		margin-bottom: 2rem;
		max-width: 1100px;
		margin-left: auto;
		margin-right: auto;
	}

	.tab-card {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.65rem;
		padding: 0.65rem 0.85rem;
		border-radius: 1.15rem;
		background: #ffffff;
		border: 1px solid #e2e8f0;
		cursor: pointer;
		text-align: left;
		transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);
		box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
	}

	.tab-card:hover {
		border-color: #cbd5e1;
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
	}

	.tab-card.active {
		background: #ffffff;
		border-color: var(--tab-color);
		box-shadow:
			0 8px 20px -4px rgba(15, 23, 42, 0.12),
			0 0 0 1.5px var(--tab-color);
		transform: translateY(-2px);
	}

	.tab-icon-wrap {
		width: 36px;
		height: 36px;
		border-radius: 0.75rem;
		background: #f8fafc;
		border: 1px solid #f1f5f9;
		display: grid;
		place-items: center;
		flex-shrink: 0;
		transition: all 0.25s ease;
	}

	.tab-card.active .tab-icon-wrap {
		background: var(--accent);
		border-color: transparent;
	}

	.tab-icon {
		font-size: 1.15rem;
		line-height: 1;
	}

	.tab-text-wrap {
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	.tab-name-desktop {
		font-size: 0.82rem;
		font-weight: 800;
		color: #0f172a;
		letter-spacing: -0.01em;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tab-name-mobile {
		display: none;
		font-size: 0.78rem;
		font-weight: 800;
		color: #0f172a;
		letter-spacing: -0.01em;
	}

	.tab-seats-tag {
		font-size: 0.65rem;
		font-weight: 600;
		color: #64748b;
	}

	.tab-active-indicator {
		position: absolute;
		bottom: -1px;
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
		padding: clamp(1.75rem, 4vw, 3.5rem);
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

	/* ── Foreground Responsive Grid ─────────────────────────────────────────── */
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

	/* Pill Badge */
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
		min-height: auto;
	}

	.main-course-title {
		font-size: clamp(1.75rem, 3.2vw, 2.75rem);
		font-weight: 900;
		color: #ffffff;
		letter-spacing: -0.025em;
		line-height: 1.15;
		margin: 0 0 0.45rem;
	}

	.course-tagline {
		font-size: clamp(0.92rem, 1.25vw, 1.1rem);
		color: #94a3b8;
		margin: 0;
		line-height: 1.5;
		font-weight: 500;
	}

	/* 3 Verified Academic Metrics (Neat 3-Column Grid) */
	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.85rem;
		padding: 0.85rem 0;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}

	.metric-card {
		padding: 0.75rem 0.85rem;
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.07);
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.metric-lbl {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #94a3b8;
	}

	.metric-val {
		font-size: clamp(1.05rem, 2vw, 1.25rem);
		font-weight: 800;
		color: #ffffff;
		letter-spacing: -0.02em;
		line-height: 1.2;
	}

	.metric-sub {
		font-size: 0.65rem;
		color: #64748b;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* Actions Row */
	.actions-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem;
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

	/* Carousel Navigation Controls */
	.carousel-nav-group {
		display: flex;
		align-items: center;
		gap: 0.65rem;
	}

	.nav-arrow-btn {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.12);
		color: #ffffff;
		display: grid;
		place-items: center;
		font-size: 0.72rem;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.nav-arrow-btn:hover {
		background: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.3);
		transform: scale(1.08);
	}

	.carousel-dots {
		display: flex;
		align-items: center;
		gap: 0.45rem;
	}

	.dot {
		width: 8px;
		height: 8px;
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
		width: 24px;
		background: var(--dot-color);
	}

	/* ── Tablet Breakpoint (max-width: 992px) ────────────────────────────────── */
	@media (max-width: 992px) {
		.pathways-tabs-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 0.55rem;
		}

		.showcase-content {
			grid-template-columns: 1fr;
			gap: 2.25rem;
		}

		.poster-card-wrapper {
			max-width: 340px;
		}

		.poster-frame-card {
			transform: rotate(0deg);
		}

		.watermark-stack {
			right: 0;
			opacity: 0.25;
		}
	}

	/* ── Mobile Breakpoint (max-width: 640px) ────────────────────────────────── */
	@media (max-width: 640px) {
		.pathways-section {
			padding: 2.5rem 1rem 3.5rem;
		}

		.pathways-header {
			margin-bottom: 1.75rem;
		}

		.header-title {
			font-size: 1.55rem;
			margin-bottom: 0.5rem;
		}

		.header-desc {
			font-size: 0.82rem;
			line-height: 1.55;
		}

		/* Neat 3-Column Mobile Tab Grid */
		.pathways-tabs-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 0.4rem;
			margin-bottom: 1.5rem;
		}

		.tab-card {
			flex-direction: column;
			align-items: center;
			text-align: center;
			padding: 0.5rem 0.35rem;
			gap: 0.35rem;
			border-radius: 0.9rem;
		}

		.tab-icon-wrap {
			width: 32px;
			height: 32px;
			border-radius: 0.65rem;
		}

		.tab-icon {
			font-size: 1rem;
		}

		.tab-name-desktop {
			display: none;
		}

		.tab-name-mobile {
			display: block;
			font-size: 0.72rem;
		}

		.tab-seats-tag {
			font-size: 0.6rem;
		}

		/* Showcase Mobile Card */
		.showcase-shell {
			padding: 1.35rem 1rem 1.6rem;
			border-radius: 1.75rem;
		}

		.ambient-glow {
			width: 280px;
			height: 280px;
		}

		.watermark-stack {
			right: -0.5rem;
			opacity: 0.18;
		}

		.watermark-line {
			font-size: clamp(3.5rem, 18vw, 5.5rem);
		}

		.showcase-content {
			gap: 1.5rem;
		}

		.poster-card-wrapper {
			max-width: 100%;
		}

		.poster-frame-card {
			border-radius: 1.5rem;
			padding: 0.75rem 0.75rem 0.9rem;
			box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.6);
		}

		.frame-photo-window {
			aspect-ratio: 16 / 11;
			border-radius: 1.15rem;
			margin: 0.5rem 0;
		}

		.photo-floating-icon {
			width: 32px;
			height: 32px;
			font-size: 0.95rem;
			bottom: 0.65rem;
			right: 0.65rem;
		}

		.frame-top-bar,
		.frame-bottom-strip {
			font-size: 0.72rem;
			padding-left: 0.25rem;
			padding-right: 0.25rem;
		}

		/* Typography Lockup Mobile */
		.poster-info-col {
			gap: 0.95rem;
		}

		.script-header-row {
			padding-bottom: 0.5rem;
		}

		.script-sub {
			font-size: 1.25rem;
		}

		.script-institution {
			font-size: 0.62rem;
		}

		.course-pill-badge {
			padding: 0.35rem 0.85rem;
			font-size: 0.72rem;
		}

		.main-course-title {
			font-size: 1.35rem;
			line-height: 1.2;
			margin-bottom: 0.35rem;
		}

		.course-tagline {
			font-size: 0.82rem;
			line-height: 1.45;
		}

		/* Neat 3-Column Metrics Grid on Mobile */
		.metrics-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 0.4rem;
			padding: 0.65rem 0;
		}

		.metric-card {
			padding: 0.55rem 0.4rem;
			border-radius: 0.75rem;
			text-align: center;
			align-items: center;
		}

		.metric-lbl {
			font-size: 0.58rem;
		}

		.metric-val {
			font-size: 0.95rem;
		}

		.metric-sub {
			font-size: 0.56rem;
		}

		/* Actions Mobile */
		.actions-row {
			flex-direction: column;
			align-items: stretch;
			gap: 0.85rem;
		}

		.btn-explore-dept {
			width: 100%;
			justify-content: center;
			padding: 0.7rem 1.15rem;
			font-size: 0.82rem;
		}

		.carousel-nav-group {
			justify-content: center;
			width: 100%;
			gap: 0.85rem;
		}
	}
</style>
