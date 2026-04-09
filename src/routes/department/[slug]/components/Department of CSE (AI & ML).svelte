<script>
	import HodMessage from '$lib/components/HodMessage.svelte';
	import { onMount } from 'svelte';

	let mounted = false;
	let heroReady = false;

	const labs = [
		{ name: 'Artificial Intelligence Lab', icon: '🤖' },
		{ name: 'Machine Learning Lab', icon: '🧠' },
		{ name: 'Deep Learning & Neural Networks Lab', icon: '🔬' },
		{ name: 'Data Science & Analytics Lab', icon: '📊' },
		{ name: 'Python Programming for AI Lab', icon: '🐍' },
		{ name: 'Natural Language Processing Lab', icon: '💬' },
		{ name: 'Computer Vision Lab', icon: '👁️' },
		{ name: 'Big Data Analytics Lab', icon: '🗄️' },
		{ name: 'Cognitive Computing Lab', icon: '⚡' },
		{ name: 'AI & IoT Integration Lab', icon: '🌐' }
	];

	const stats = [
		{ num: '10+', label: 'AI/ML Labs', sub: 'Cutting-edge' },
		{ num: '100+', label: 'Students', sub: 'Enrolled annually' },
		{ num: '25+', label: 'Faculty', sub: 'AI specialists' },
		{ num: '92%', label: 'Placements', sub: 'Year on year' }
	];

	// Svelte action — scoped scroll reveal (bypasses CSS hash scoping)
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

<!-- ═══════════════════════════════════════════════════════════
     PAGE
═══════════════════════════════════════════════════════════ -->
<div class="page" class:mounted>
	<!-- ╭─────────────────────────────────────╮
	     │            H E R O                  │
	     ╰─────────────────────────────────────╯ -->
	<section class="hero">
		<div class="logo-strip">
			<img src="/CS-Banners/image.png" alt="AI & ML header" />
		</div>

		<div class="hero-stage">
			<img src="/CS-Banners/image copy.png" alt="AI & ML Department" class="hero-img" />

			<div class="scrim" />
			<div class="hero-grid-overlay" />

			<div class="hero-body" class:ready={heroReady}>
				<div class="eyebrow">
					<span class="live-dot" />
					B.Tech &nbsp;·&nbsp; M.Tech &nbsp;·&nbsp; Ph.D
				</div>
				<h1 class="hero-h1">
					Artificial Intelligence<br />
					<span class="hero-accent">&amp; Machine Learning</span>
				</h1>
				<p class="hero-tagline">BITS Vizag Engineering College</p>
				<div class="hero-chips">
					<span class="hero-chip">JNTU Affiliated</span>
					<span class="hero-chip">AICTE Approved</span>
					<span class="hero-chip">NBA Accredited</span>
					<span class="hero-chip">AI Specialisation</span>
				</div>
			</div>

			<div class="hero-badge">
				<div class="badge-dot" />
				Est. 2024
			</div>
		</div>
	</section>

	<!-- ╭─────────────────────────────────────╮
	     │            A B O U T                │
	     ╰─────────────────────────────────────╯ -->
	<section class="s-about">
		<div class="shell">
			<div class="about-inner" use:reveal={0}>
				<div class="about-lhs">
					<span class="eyebrow-pill">About</span>
					<h2 class="s-heading">
						Shaping tomorrow's<br />AI innovators.
					</h2>
					<div class="accent-line" />
				</div>
				<div class="about-rhs">
					<p class="body-text">
						The Department of Computer Science at BITS Vizag is evolving alongside the digital
						revolution, focusing on Artificial Intelligence and Machine Learning to prepare students
						for a tech-driven future. AI is the science of creating smart systems that can think and
						decide like humans, while ML allows these systems to learn and improve automatically
						from data.
					</p>
					<p class="body-text" style="margin-top:1rem;">
						By integrating these technologies into our core curriculum, we move beyond traditional
						coding to teach students how to build autonomous systems that solve real-world problems
						in healthcare, finance, and global sustainability — bridging the gap between complex
						mathematical theories and practical industry applications.
					</p>
					<div class="pill-row" style="margin-top:1.75rem;">
						<span class="pill-tag bits-b">AI-Powered Education</span>
						<span class="pill-tag bits-i">Deep Learning</span>
						<span class="pill-tag bits-t">Data Science</span>
						<span class="pill-tag bits-s">Neural Networks</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ╭─────────────────────────────────────╮
	     │            S T A T S                │
	     ╰─────────────────────────────────────╯ -->
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

	<!-- ╭─────────────────────────────────────╮
	     │       F A C I L I T I E S           │
	     ╰─────────────────────────────────────╯ -->
	<section class="s-fac">
		<div class="shell">
			<div class="s-header" use:reveal={0}>
				<span class="eyebrow-pill">Our Campus</span>
				<h2 class="s-heading">Facilities &amp; Infrastructure</h2>
			</div>

			<!-- main 5-photo mosaic -->
			<div class="mosaic" use:reveal={60}>
				<div class="m-hero m-tile">
					<img src="/CS-Banners/CS-images/AI-1.png" alt="AI Innovation Hub" loading="lazy" />
					<div class="m-label">AI Innovation Hub</div>
				</div>
				<div class="m-grid">
					<div class="m-tile">
						<img src="/CS-Banners/CS-images/AI-2.png" alt="AI Research Lab" loading="lazy" />
					</div>
					<div class="m-tile">
						<img src="/CS-Banners/CS-images/AI-3.png" alt="ML Studio" loading="lazy" />
					</div>
					<div class="m-tile">
						<img src="/CS-Banners/CS-images/AI-4.png" alt="GPU Compute Centre" loading="lazy" />
					</div>
					<div class="m-tile">
						<img src="/CS-Banners/CS-images/AI-5.png" alt="Data Lab" loading="lazy" />
					</div>
				</div>
			</div>

			<!-- secondary wide row — AI-6 & AI-7 -->
			<div class="mosaic-row" use:reveal={80}>
				<div class="m-tile">
					<img src="/CS-Banners/CS-images/AI-6.png" alt="Research Studio" loading="lazy" />
				</div>
				<div class="m-tile mr-wide">
					<img
						src="/CS-Banners/CS-images/AI-7.png"
						alt="High-Performance GPU Centre"
						loading="lazy"
					/>
				</div>
			</div>

			<!-- labs -->
			<div class="s-header" use:reveal={0} style="margin-top:4rem">
				<span class="eyebrow-pill">Laboratories</span>
				<h3 class="s-subheading">10 Specialised AI &amp; ML Labs</h3>
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

	<!-- ╭─────────────────────────────────────╮
	     │          L E A D E R S H I P        │
	     ╰─────────────────────────────────────╯ -->
	<section class="s-hod">
		<div class="shell">
			<div class="s-header" use:reveal={0}>
				<span class="eyebrow-pill">Leadership</span>
				<h2 class="s-heading">Head of Department</h2>
			</div>
			<div use:reveal={80}>
				<HodMessage
					hodName="Prof. S. Durga Prasad"
					designation="Head of Department"
					department="CSE — Artificial Intelligence & ML"
					hodMessage="Welcome to the AI & ML specialisation at BITS Vizag. This cutting-edge program is designed to equip students with advanced knowledge and practical expertise in Artificial Intelligence and Machine Learning. Our curriculum blends theoretical foundations with intensive laboratory work, ensuring comprehensive understanding of AI/ML principles. Through collaborative learning and industry partnerships, we prepare graduates who drive technological innovation and create meaningful solutions using AI and ML technologies."
					hodImage="/cse hod.jpg"
				/>
			</div>
		</div>
	</section>
</div>

<!-- ═══════════════════════════════════════════════════════════
     STYLES
═══════════════════════════════════════════════════════════ -->
<style>
	/* ── CSS Variables ─────────────────────────────────────────── */
	:global(:root) {
		--teal-900: #042f2e;
		--teal-700: #0d9488;
		--teal-500: #14b8a6;
		--teal-300: #5eead4;
		--ink: #0d1117;
		--ink-2: #1e2836;
		--ink-3: #334155;
		--muted: #64748b;
		--soft: #94a3b8;
		--border: #e2e8f0;
		--surface: #f8fafc;
		--white: #ffffff;
		--radius-card: 18px;
		--radius-sm: 10px;
	}

	/* ── Reset / Base ──────────────────────────────────────────── */
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

	/* ── Eyebrow pill ──────────────────────────────────────────── */
	.eyebrow-pill {
		display: inline-flex;
		align-items: center;
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--teal-700);
		background: rgba(13, 148, 136, 0.08);
		border: 1px solid rgba(13, 148, 136, 0.2);
		padding: 0.28rem 0.85rem;
		border-radius: 999px;
		margin-bottom: 0.9rem;
	}

	/* ── Section heading ───────────────────────────────────────── */
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

	/* ════════════════════════════════════════════════════════════
   HERO
════════════════════════════════════════════════════════════ */
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
				rgba(4, 10, 26, 0.94) 0%,
				rgba(4, 10, 26, 0.36) 52%,
				transparent 100%
			),
			linear-gradient(to right, rgba(4, 10, 26, 0.28) 0%, transparent 60%);
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
		background: #2dd4bf;
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
		color: #2dd4bf;
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
		background: #2dd4bf;
	}

	/* ════════════════════════════════════════════════════════════
   ABOUT
════════════════════════════════════════════════════════════ */
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
		background: linear-gradient(90deg, var(--teal-700), var(--teal-300));
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

	/* ════════════════════════════════════════════════════════════
   STATS
════════════════════════════════════════════════════════════ */
	.s-stats {
		background: var(--surface);
		padding: 4.5rem 0;
	}

	.stats-card {
		display: flex;
		align-items: stretch;
		background: linear-gradient(128deg, #042f2e 0%, #0d9488 56%, #0f766e 100%);
		border-radius: 22px;
		overflow: hidden;
		box-shadow:
			0 2px 4px rgba(0, 0, 0, 0.06),
			0 16px 48px rgba(13, 148, 136, 0.28),
			inset 0 1px 0 rgba(255, 255, 255, 0.09);
		position: relative;
	}
	.stats-card::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(ellipse at 10% 60%, rgba(45, 212, 191, 0.2), transparent 52%),
			radial-gradient(ellipse at 90% 30%, rgba(4, 47, 46, 0.35), transparent 50%);
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

	/* ════════════════════════════════════════════════════════════
   FACILITIES
════════════════════════════════════════════════════════════ */
	.s-fac {
		background: var(--white);
		padding: 6rem 0;
		border-top: 1px solid var(--border);
	}

	/* primary mosaic */
	.mosaic {
		display: grid;
		grid-template-columns: 1.65fr 1fr;
		gap: 10px;
		height: 460px;
		border-radius: 18px;
		overflow: hidden;
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.09);
		margin-bottom: 10px;
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

	/* secondary row for AI-6 & AI-7 */
	.mosaic-row {
		display: grid;
		grid-template-columns: 1fr 2.4fr;
		gap: 10px;
		height: 190px;
		border-radius: 18px;
		overflow: hidden;
		box-shadow: 0 8px 28px rgba(0, 0, 0, 0.07);
		margin-bottom: 0;
	}
	.mr-wide {
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
		background: linear-gradient(to top, rgba(4, 10, 26, 0.72), transparent);
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.82);
	}

	/* labs */
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
		border-color: var(--teal-700);
		box-shadow: 0 4px 20px rgba(13, 148, 136, 0.12);
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
		color: var(--teal-700);
		transform: translate(2px, -2px);
	}

	/* ════════════════════════════════════════════════════════════
   HOD
════════════════════════════════════════════════════════════ */
	.s-hod {
		background: var(--surface);
		padding: 5.5rem 0 6.5rem;
		border-top: 1px solid var(--border);
	}

	/* ════════════════════════════════════════════════════════════
   RESPONSIVE
════════════════════════════════════════════════════════════ */
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
		.mosaic-row {
			grid-template-columns: 1fr;
			height: auto;
		}
		.mosaic-row .m-tile {
			height: 180px;
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
		.s-hod {
			padding: 4rem 0 5rem;
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
</style>
