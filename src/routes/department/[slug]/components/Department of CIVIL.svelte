<script>
	import HodMessage from '$lib/components/HodMessage.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let mounted = false;
	let heroReady = false;

	const labs = [
		{ name: 'Basic Civil Engineering Workshop', icon: '🏗️' },
		{ name: 'Building Planning & CAD Lab', icon: '📐' },
		{ name: 'Concrete Technology Lab', icon: '🧱' },
		{ name: 'Highway Engineering Lab', icon: '🛣️' },
		{ name: 'Surveying Lab', icon: '🔭' },
		{ name: 'Environmental Engineering Lab', icon: '🌿' },
		{ name: 'Strength of Materials Lab', icon: '⚙️' },
		{ name: 'Fluid Mechanics & Hydraulics Lab', icon: '💧' },
		{ name: 'Geotechnical Engineering Lab', icon: '⛏️' },
		{ name: 'Engineering Geology Lab', icon: '🪨' }
	];

	const stats = [
		{ num: '10+', label: 'Laboratories', sub: 'State-of-the-art' },
		{ num: '100+', label: 'Students', sub: 'Enrolled annually' },
		{ num: '20+', label: 'Faculty', sub: 'Expert engineers' },
		{ num: '90%', label: 'Placements', sub: 'Year on year' }
	];

	function reveal(node, delay = 0) {
		node.style.cssText += `
			opacity:0;
			transform:translateY(24px);
			transition:opacity .72s ${delay}ms cubic-bezier(.22,1,.36,1),
			           transform .72s ${delay}ms cubic-bezier(.22,1,.36,1);
		`;
		const io = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'none';
					io.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		io.observe(node);
		return { destroy: () => io.disconnect() };
	}

	onMount(() => {
		mounted = true;
		requestAnimationFrame(() => setTimeout(() => (heroReady = true), 90));
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="page" class:mounted>
	<!-- HERO -->
	<section class="hero">
		<div class="logo-strip">
			<img src="/header/civil.png" alt="Civil Engineering header" />
		</div>

		<div class="hero-stage">
			<img src="/civil.jpg" alt="Civil Engineering Department" class="hero-img" />
			<div class="scrim" />
			<div class="hero-grid-overlay" />

			<div class="hero-body" class:ready={heroReady}>
				<div class="eyebrow">
					<span class="live-dot" />
					Structural &nbsp;·&nbsp; Geotechnical &nbsp;·&nbsp; Environmental &nbsp;·&nbsp; Transportation
				</div>
				<h1 class="hero-h1">
					Civil<br />
					<span class="hero-accent">Engineering</span>
				</h1>
				<p class="hero-tagline">BITS Vizag Engineering College</p>
				<div class="hero-chips">
					<span class="hero-chip">JNTU Affiliated</span>
					<span class="hero-chip">AICTE Approved</span>
					<span class="hero-chip">NBA Accredited</span>
					<span class="hero-chip">Infrastructure Focus</span>
				</div>
			</div>

			<div class="hero-badge">
				<div class="badge-dot" />
				Est. 2008
			</div>
		</div>
	</section>

	<!-- ABOUT -->
	<section class="s-about">
		<div class="shell">
			<div class="about-inner" use:reveal={0}>
				<div class="about-lhs">
					<span class="eyebrow-pill">About</span>
					<h2 class="s-heading">
						Building the<br />world around us.
					</h2>
					<div class="accent-line" />
				</div>
				<div class="about-rhs">
					<p class="body-text">
						The Department of Civil Engineering at BITS Vizag Engineering College is a prominent
						academic unit committed to providing comprehensive education and research opportunities.
						We produce skilled civil engineers who contribute to infrastructure development,
						construction, environmental sustainability, and urban planning.
					</p>
					<p class="body-text" style="margin-top:1rem;">
						Our well-structured curriculum spans structural engineering, geotechnical engineering,
						transportation, environmental engineering, water resources, and construction management
						— backed by modern infrastructure and state-of-the-art facilities for both academic and
						research activities.
					</p>
					<div class="pill-row" style="margin-top:1.75rem;">
						<span class="pill-tag bits-b">Structural Engineering</span>
						<span class="pill-tag bits-i">Geotechnical</span>
						<span class="pill-tag bits-t">Water Resources</span>
						<span class="pill-tag bits-s">Urban Planning</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- STATS -->
	<section class="s-stats">
		<div class="shell">
			<div class="stats-card" use:reveal={0}>
				{#each stats as s, i}
					<div class="stat-cell" use:reveal={i * 70}>
						<div class="stat-number">{s.num}</div>
						<div class="stat-label">{s.label}</div>
						<div class="stat-sub">{s.sub}</div>
					</div>
					{#if i < stats.length - 1}
						<div class="stat-div" />
					{/if}
				{/each}
			</div>
		</div>
	</section>

	<!-- FACILITIES -->
	<section class="s-fac">
		<div class="shell">
			<div class="s-header" use:reveal={0}>
				<span class="eyebrow-pill">Our Campus</span>
				<h2 class="s-heading">Facilities &amp; Infrastructure</h2>
			</div>

			<div class="mosaic" use:reveal={60}>
				<div class="m-hero m-tile">
					<img src="/civil4.JPG" alt="Civil Engineering Hub" loading="lazy" />
					<div class="m-label">Main Civil Engineering Hub</div>
				</div>
				<div class="m-grid">
					<div class="m-tile"><img src="/civil1.png" alt="Concrete Lab" loading="lazy" /></div>
					<div class="m-tile"><img src="/civil5.JPG" alt="Surveying Lab" loading="lazy" /></div>
					<div class="m-tile"><img src="/civil3.JPG" alt="Materials Lab" loading="lazy" /></div>
					<div class="m-tile"><img src="/civil2.png" alt="Hydraulics Lab" loading="lazy" /></div>
				</div>
			</div>

			<div class="s-header" use:reveal={0} style="margin-top:4rem">
				<span class="eyebrow-pill">Laboratories</span>
				<h3 class="s-subheading">10 Specialised Civil Engineering Labs</h3>
			</div>

			<div class="labs-grid">
				{#each labs as lab, i}
					<div class="lab-card" use:reveal={i * 30}>
						<div class="lab-icon-wrap">{lab.icon}</div>
						<span class="lab-name">{lab.name}</span>
						<svg class="lab-arr" width="13" height="13" viewBox="0 0 24 24" fill="none">
							<path
								d="M7 17L17 7M17 7H7M17 7V17"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="round"
							/>
						</svg>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- HOD Message - Upgraded with Impactful Motion -->
	<section
		id="hod"
		class="dept-section-card hod-premium-card"
		style="--section-accent: #b45309"
	>
		<div class="hod-container">
			<div class="hod-visual" in:fly={{ x: -40, duration: 800 }}>
				<div class="hod-image-glow"></div>
				<img src="/civil-hod.jpg" alt="Prof. M. Mohan" loading="lazy" />
				<div class="hod-badge satoshi">15+ Years Exp</div>
			</div>
			<div class="hod-content" in:fly={{ x: 40, duration: 800 }}>
				<div class="quote-icon">
					<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" opacity="0.1">
						<path
							d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.01701 21L6.01701 18C6.01701 16.8954 6.91244 16 8.01701 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.01701C7.46473 8 7.01701 8.44772 7.01701 9V12C7.01701 12.5523 6.56929 13 6.01701 13H5.01701V21H6.01701Z"
						></path>
					</svg>
				</div>
				<h2 class="satoshi">Prof. M. Mohan</h2>
				<p class="hod-designation inter">
					Head of Department | Civil Engineering
				</p>
				<div class="hod-message-body">
					<p class="inter">
						"Welcome to the Department of Civil Engineering at BITS Vizag. My profound expertise and industry connections enable us to foster strong collaborations with leading construction companies and research organisations. Driven by a passion for excellence, I inspire our students to excel academically and participate in research that addresses real-world engineering challenges — producing skilled and responsible civil engineers poised to make a positive impact on society."
					</p>
					<p class="inter signature">Prof. M. Mohan</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	/* Variables */
	:global(:root) {
		--am-900: #78350f;
		--am-700: #b45309;
		--am-500: #f59e0b;
		--am-300: #fcd34d;
		--ink: #0d1117;
		--ink-2: #1e2836;
		--ink-3: #334155;
		--border: #e2e8f0;
		--surface: #f8fafc;
		--white: #ffffff;
		--radius-card: 18px;
		--radius-sm: 10px;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.page {
		font-family:
			'Plus Jakarta Sans',
			-apple-system,
			BlinkMacSystemFont,
			sans-serif;
		background: var(--surface);
		color: var(--ink);
		-webkit-font-smoothing: antialiased;
		opacity: 0;
		transition: opacity 0.45s ease;
	}
	.page.mounted {
		opacity: 1;
	}

	.shell {
		max-width: 1140px;
		margin: 0 auto;
		padding: 0 2.25rem;
	}

	.eyebrow-pill {
		display: inline-flex;
		align-items: center;
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--am-700);
		background: rgba(180, 83, 9, 0.08);
		border: 1px solid rgba(180, 83, 9, 0.2);
		padding: 0.28rem 0.85rem;
		border-radius: 999px;
		margin-bottom: 0.9rem;
	}

	.s-heading {
		font-size: clamp(1.7rem, 3vw, 2.5rem);
		font-weight: 800;
		line-height: 1.1;
		letter-spacing: -0.028em;
		color: var(--ink);
	}
	.s-subheading {
		font-size: 1.4rem;
		font-weight: 700;
		color: var(--ink);
		letter-spacing: -0.02em;
	}
	.s-header {
		margin-bottom: 2.5rem;
	}

	/* HERO */
	.hero {
		background: #000;
	}
	.logo-strip {
		background: var(--white);
		line-height: 0;
	}
	.logo-strip img {
		width: 100%;
		height: auto;
		display: block;
	}

	.hero-stage {
		position: relative;
		width: 100%;
		height: clamp(340px, 52vw, 570px);
		overflow: hidden;
	}

	.hero-img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		animation: heroZoom 16s ease-out forwards;
		transform-origin: center;
	}
	@keyframes heroZoom {
		from {
			transform: scale(1.08);
		}
		to {
			transform: scale(1);
		}
	}

	.scrim {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(
				to top,
				rgba(20, 10, 4, 0.94) 0%,
				rgba(20, 10, 4, 0.36) 52%,
				transparent 100%
			),
			linear-gradient(to right, rgba(20, 10, 4, 0.28) 0%, transparent 60%);
	}
	.hero-grid-overlay {
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
		background-size: 28px 28px;
		pointer-events: none;
	}

	.hero-body {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 2.75rem 3.5rem;
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
			transform 1s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.hero-body.ready {
		opacity: 1;
		transform: none;
	}

	.eyebrow {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		font-size: 0.67rem;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.55);
		margin-bottom: 0.85rem;
	}
	.live-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #fbbf24;
		animation: livePulse 2.4s ease-in-out infinite;
		flex-shrink: 0;
	}
	@keyframes livePulse {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.35;
			transform: scale(1.6);
		}
	}

	.hero-h1 {
		font-size: clamp(1.8rem, 5vw, 3.6rem);
		font-weight: 800;
		color: var(--white);
		line-height: 1.06;
		letter-spacing: -0.028em;
	}
	.hero-accent {
		color: #fbbf24;
	}

	.hero-tagline {
		margin-top: 0.8rem;
		font-size: 0.8rem;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.42);
		letter-spacing: 0.06em;
	}

	.hero-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1.2rem;
	}
	.hero-chip {
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		color: rgba(255, 255, 255, 0.82);
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		padding: 0.3rem 0.8rem;
		border-radius: 999px;
	}

	.hero-badge {
		position: absolute;
		top: 1.75rem;
		right: 1.75rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.18);
		border-radius: 999px;
		padding: 0.45rem 1rem;
		font-size: 0.67rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		color: rgba(255, 255, 255, 0.9);
		animation: fadeDown 1s 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
	}
	@keyframes fadeDown {
		from {
			opacity: 0;
			transform: translateY(-12px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	.badge-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #fbbf24;
	}

	/* ABOUT */
	.s-about {
		background: var(--white);
		padding: 6rem 0;
		border-bottom: 1px solid var(--border);
	}
	.about-inner {
		display: grid;
		grid-template-columns: 1fr 1.55fr;
		gap: 5rem;
		align-items: start;
	}
	.accent-line {
		width: 36px;
		height: 3px;
		background: linear-gradient(90deg, var(--am-700), var(--am-300));
		border-radius: 2px;
		margin-top: 1.25rem;
	}
	.body-text {
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.92;
		color: var(--ink-3);
	}
	.pill-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.pill-tag {
		font-size: 0.7rem;
		font-weight: 600;
		color: #2672d5;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 0.3rem 0.85rem;
		letter-spacing: 0.02em;
	}
	.bits-b {
		color: #e91e8c;
	}
	.bits-i {
		color: #cbdc20;
	}
	.bits-t {
		color: #f59e0b;
	}
	.bits-s {
		color: #2672d5;
	}

	/* STATS */
	.s-stats {
		background: var(--surface);
		padding: 4.5rem 0;
	}
	.stats-card {
		display: flex;
		align-items: stretch;
		background: linear-gradient(128deg, #78350f 0%, #b45309 56%, #92400e 100%);
		border-radius: 22px;
		overflow: hidden;
		box-shadow:
			0 2px 4px rgba(0, 0, 0, 0.06),
			0 16px 48px rgba(180, 83, 9, 0.28),
			inset 0 1px 0 rgba(255, 255, 255, 0.09);
		position: relative;
	}
	.stats-card::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(ellipse at 10% 60%, rgba(251, 191, 36, 0.2), transparent 52%),
			radial-gradient(ellipse at 90% 30%, rgba(120, 53, 15, 0.4), transparent 50%);
		pointer-events: none;
	}
	.stat-cell {
		flex: 1;
		padding: 2.5rem 1.5rem;
		text-align: center;
		position: relative;
		z-index: 1;
	}
	.stat-number {
		font-size: clamp(2rem, 3.6vw, 3rem);
		font-weight: 900;
		color: #fff;
		letter-spacing: -0.04em;
		line-height: 1;
	}
	.stat-label {
		font-size: 0.78rem;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.85);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		margin-top: 0.45rem;
	}
	.stat-sub {
		font-size: 0.65rem;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.38);
		letter-spacing: 0.04em;
		margin-top: 0.2rem;
	}
	.stat-div {
		width: 1px;
		background: rgba(255, 255, 255, 0.1);
		flex-shrink: 0;
		margin: 1.5rem 0;
	}

	/* FACILITIES */
	.s-fac {
		background: var(--white);
		padding: 6rem 0;
		border-top: 1px solid var(--border);
	}
	.mosaic {
		display: grid;
		grid-template-columns: 1.65fr 1fr;
		gap: 10px;
		height: 460px;
		border-radius: 18px;
		overflow: hidden;
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.09);
	}
	.m-hero {
		position: relative;
	}
	.m-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 10px;
	}
	.m-tile {
		overflow: hidden;
		background: #e2e8f0;
		position: relative;
	}
	.m-tile img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.m-tile:hover img {
		transform: scale(1.07);
	}
	.m-label {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 2rem 1.4rem 1rem;
		background: linear-gradient(to top, rgba(20, 10, 4, 0.72), transparent);
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.82);
	}

	.labs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(252px, 1fr));
		gap: 9px;
	}
	.lab-card {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		padding: 0.85rem 1rem;
		cursor: default;
		transition:
			background 0.2s ease,
			border-color 0.2s ease,
			box-shadow 0.2s ease,
			transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.lab-card:hover {
		background: var(--white);
		border-color: var(--am-500);
		box-shadow: 0 4px 20px rgba(245, 158, 11, 0.15);
		transform: translateY(-2px);
	}
	.lab-icon-wrap {
		font-size: 1.15rem;
		width: 34px;
		height: 34px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--white);
		border-radius: var(--radius-sm);
		box-shadow: 0 1px 6px rgba(0, 0, 0, 0.07);
		flex-shrink: 0;
	}
	.lab-name {
		font-size: 0.825rem;
		font-weight: 500;
		color: var(--ink-2);
		flex: 1;
		line-height: 1.35;
	}
	.lab-arr {
		color: #cbd5e1;
		flex-shrink: 0;
		transition:
			color 0.18s,
			transform 0.18s;
	}
	.lab-card:hover .lab-arr {
		color: var(--am-700);
		transform: translate(2px, -2px);
	}

	/* HOD Premium Card */
	/* HOD Premium Card */
	.hod-premium-card {
		padding: 0 !important;
		overflow: hidden;
		background: #0f172a !important;
		border: none !important;
		margin: 5.5rem 0 6.5rem;
		border-radius: 32px;
	}

	.hod-container {
		display: grid;
		grid-template-columns: 320px 1fr;
		min-height: 480px;
	}

	.hod-visual {
		position: relative;
		overflow: hidden;
	}

	.hod-visual img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	}

	.hod-visual:hover img {
		transform: scale(1.05);
	}

	.hod-image-glow {
		position: absolute;
		inset: 0;
		background: linear-gradient(to right, transparent 60%, #0f172a 100%);
		z-index: 1;
	}

	.hod-badge {
		position: absolute;
		bottom: 32px;
		left: 32px;
		background: var(--section-accent);
		color: white;
		padding: 10px 20px;
		border-radius: 12px;
		font-weight: 800;
		font-size: 0.9rem;
		z-index: 2;
		box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.3);
	}

	.hod-content {
		padding: 48px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		color: white;
	}

	.quote-icon {
		margin-bottom: 24px;
		color: var(--section-accent);
	}

	.hod-content h2 {
		font-size: 2.2rem;
		font-weight: 900;
		margin: 0;
		color: #ffffff;
		letter-spacing: -0.04em;
	}

	.hod-designation {
		font-size: 1rem;
		color: #94a3b8;
		font-weight: 600;
		margin: 8px 0 24px;
		text-align: left;
	}

	.hod-message-body p {
		font-size: 1.15rem;
		line-height: 1.6;
		color: #e2e8f0;
		font-weight: 500;
		font-style: italic;
		text-align: left;
	}

	.signature {
		margin-top: 24px !important;
		font-size: 1rem !important;
		font-style: normal !important;
		font-weight: 800 !important;
		color: var(--section-accent) !important;
		letter-spacing: 0.02em;
		text-align: left;
	}

	/* RESPONSIVE */
	@media (max-width: 980px) {
		.about-inner {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.mosaic {
			grid-template-columns: 1fr;
			height: auto;
		}
		.m-hero {
			height: 260px;
		}
		.m-grid {
			height: 210px;
		}
	}
	@media (max-width: 640px) {
		.hero-body {
			padding: 2rem 1.5rem;
		}
		.hero-badge {
			top: 1rem;
			right: 1rem;
		}
		.s-about,
		.s-fac {
			padding: 4rem 0;
		}
		.s-stats {
			padding: 3.5rem 0;
		}
		.stats-card {
			flex-wrap: wrap;
		}
		.stat-div {
			display: none;
		}
		.stat-cell {
			flex: 0 0 50%;
			padding: 1.75rem 1rem;
		}
		.m-grid {
			grid-template-columns: 1fr 1fr;
			height: 180px;
		}
		.labs-grid {
			grid-template-columns: 1fr;
		}
		.shell {
			padding: 0 1.25rem;
		}
	}
	@media (max-width: 380px) {
		.hero-h1 {
			font-size: 1.65rem;
		}
		.s-heading {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		/* HOD Section Mobile - Minimal & Compact */
		.hod-container {
			grid-template-columns: 1fr;
		}

		.hod-visual {
			height: 180px;
			order: 1;
		}

		.hod-content {
			padding: 24px 16px;
			order: 2;
			text-align: center;
			align-items: center;
		}

		.quote-icon {
			margin-bottom: 12px;
			display: flex;
			justify-content: center;
		}

		.quote-icon svg {
			width: 32px;
			height: 32px;
		}

		.hod-content h2 {
			font-size: 1.5rem;
			margin-top: 4px;
		}

		.hod-designation {
			font-size: 0.85rem;
			margin-bottom: 16px;
			text-align: center;
		}

		.hod-message-body p {
			font-size: 0.95rem;
			max-width: 100%;
			line-height: 1.5;
			text-align: center;
		}

		.signature {
			margin-top: 16px !important;
			font-size: 0.9rem !important;
			text-align: center;
		}

		.hod-badge {
			bottom: 10px;
			left: 50%;
			transform: translateX(-50%);
			padding: 4px 10px;
			font-size: 0.7rem;
		}
	}
</style>
