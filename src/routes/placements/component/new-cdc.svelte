<script>
	import { onMount } from 'svelte';

	// ── Data ──────────────────────────────────────────────────────────────────
	const stats = [
		{ value: '30.6', label: 'LPA', sub: 'Highest Package till date' },
		{ value: '40+', label: 'Companies', sub: ' visited this Year (2025-2026)' },
		{ value: '80%', label: 'Eligible', sub: 'Students already placed' },
		{ value: '₹20k', label: 'Stipend', sub: 'during Final year Internships' }
	];

	const authorities = [
		{
			role: 'Secretary & Correspondent',
			image: '/t2.jpg',
			headline: 'Path to Success: Learn, Adapt, and Work with Passion and Integrity.',
			quote:
				'Embrace continuous learning, cultivate resilience, and work with passion and integrity on your path to success.',
			accent: '#38bdf8',
			glow: 'rgba(56,189,248,0.18)'
		},
		{
			role: 'Principal',
			image: '/principal copy.jpg',
			headline: 'Embracing Your Passion: Igniting a Path to Remarkable Future.',
			quote:
				'Let your passion ignite the path to a remarkable and rewarding future; stay true to yourself.',
			accent: '#818cf8',
			glow: 'rgba(129,140,248,0.18)'
		},
		{
			role: 'Training & Placement Officer',
			image: '/joshua-sir.jpeg',
			headline: 'Driving Greatness: Self-Motivation, Knowledge, and Resilience.',
			quote:
				'Self-motivation and a hunger for knowledge lead the way to greatness; overcome setbacks with resilience.',
			accent: '#34d399',
			glow: 'rgba(52,211,153,0.18)'
		}
	];

	const coordinators = [
		{ name: 'Mr. T. Mouli', dept: 'Computer Science & Engineering' },
		{ name: 'Mrs. T. Pavani', dept: 'Electronics & Communication Engineering' },
		{ name: 'Ms. G. Aliveni', dept: 'Electrical & Electronics Engineering' },
		{ name: 'Mr. V. Preetham', dept: 'Mechanical Engineering' },
		{ name: 'Mrs. K. Lavanya', dept: 'Civil Engineering' },
		{ name: 'Mrs. K Sireesha', dept: 'Basic Sciences & Humanities' },
		{ name: 'Mr. L. Sairama', dept: 'MBA' }
	];

	const events = [
		{
			date: '14/03/2025',
			name: 'Mega Job Fair 2026 – A Remarkable Success !!! ',
			image: '/pevents/megafair.jpg',
			description:
				'BITS Vizag (A), in association with Magic Bus Foundation, successfully organized a Mega Job Fair at the college premises on 10th March 2026, creating a powerful platform connecting talented youth with leading employers.'
		},
		{
			date: '10/08/2023',
			name: 'BITS Vizag and G-TEC DST GITAM Join Hands Through Meaningful MOU Signing Ceremony.',
			image: '/pevents/gitam.jpg',
			description:
				'BITS Vizag and G-TEC | DST GITAM join in impactful MOU for enhanced collaboration.'
		},
		{
			date: '22/07/2023',
			name: 'MOU Signing Ceremony — BITS Vizag and London School of Digital Business, UK',
			image: '/pevents/lsdb.jpg',
			description:
				'BITS Vizag and London School of Digital Business signed an MOU, enhancing digital education and opportunities.'
		},
		{
			date: '15/06/2023',
			name: 'MOU with i3 IT Solutionz and Rubicon Skill Development Pvt Ltd',
			image: '/g4.jpg',
			description:
				'i3 IT Solutionz and Rubicon Skill Development Pvt Ltd have signed an MOU for IT skill development collaboration.'
		},
		{
			date: '03/05/2023',
			name: 'Expert talks by Prakriti Shrivastava — Senior HR, Chegg India',
			image: '/pevents/1.jpg',
			description:
				'Prakriti Shrivastava, Senior HR at Chegg India, delivers expert talks on HR topics, offering practical insights.'
		},
		{
			date: '22/04/2023',
			name: 'JAVA Training Session by Imtihiyaz Ali',
			image: '/pevents/8.jpg',
			description:
				'The program aimed to equip students with the latest knowledge and skills in Java, providing a competitive edge.'
		},
		{
			date: '05/04/2023',
			name: 'Lumos Labs session about WEB3 Metaverse',
			image: '/pevents/2.jpg',
			description:
				'Tech talk on the Web3 Metaverse and Digital Life by Nikhil Aparjith and Anshita Soni from Lumos Lab.'
		},
		{
			date: '20/03/2023',
			name: 'Expert talks by Oliver Rayi, Director of Catherine Group',
			image: '/pevents/6.jpg',
			description:
				'Oliver Rayi, Director of Catherine Group, delivers expert talks providing valuable insights and practical guidance.'
		},
		{
			date: '04/03/2023',
			name: 'Motivational Speech by YouTube sensation Sudeer Sandra',
			image: '/pevents/4.jpg',
			description:
				'YouTube sensation Sudeer Sandra delivers captivating motivational speeches that empower individuals to pursue their dreams.'
		}
	];

	const logos = [
		...Array.from({ length: 40 }, (_, i) => `/company/image (${i + 1}).png`),
		'/company/image(41).jpg',
		'/company/image(42).jpg',
		'/company/[CITYPNG.COM]Google High Resolution Logo Icon G Suite - 4545x2054.png'
	];
	const additionalCompanyLogos = logos;

	// ── Scroll interactions ───────────────────────────────────────────────────
	let scrollY = 0;
	/** @type {HTMLDivElement | undefined} */
	let newsTrack;

	/** @param {number} dir */
	function scrollNews(dir) {
		if (newsTrack) newsTrack.scrollLeft += dir * 380;
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) =>
				entries.forEach((e) => {
					if (e.isIntersecting) e.target.classList.add('in-view');
				}),
			{ threshold: 0.12 }
		);
		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});
</script>

<svelte:window bind:scrollY />

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- HERO                                                                    -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<section class="hero">
	<!-- <div class="hero-bg" style="transform: translateY({scrollY * 0.24}px)" aria-hidden="true"></div>
	<div class="hero-overlay" aria-hidden="true"></div> -->
	<!-- <div class="hero-gridline" aria-hidden="true"></div> -->

	<div class="hero-inner">
		<div class="hero-copy">
			<span class="hero-kicker">Career Development Cell</span>
			<h1 class="hero-title">
				Build a Career with
				<span class="hero-bits" aria-label="BITS">
					<span class="bits-letter bits-b">B</span>
					<span class="bits-letter bits-i">I</span>
					<span class="bits-letter bits-t">T</span>
					<span class="bits-letter bits-s">S</span>
				</span>
				<em class="hero-gradient-text">Training & Placement</em>
			</h1>
			<p class="hero-desc">
				A clean, focused pathway for ambitious students: structured mentoring, recruiter-grade skill
				tracks, and outcomes backed by real placement momentum.
			</p>
			<div class="hero-pills">
				<span>Campus Placements</span>
				<span>Industry Linkages</span>
				<span>Skill Development</span>
			</div>
			<div class="hero-proof">
				<div class="hero-proof-item">
					<strong>40+</strong>
					<span>Active Recruiters</span>
				</div>
				<div class="hero-proof-item">
					<strong>50+</strong>
					<span>Hiring Partners</span>
				</div>
				<div class="hero-proof-item">
					<strong>20k+</strong>

					<span>Top Internship Stipend</span>
				</div>
			</div>
		</div>

		<div class="hero-visual">
			<div class="hero-card">
				<div class="hero-card-shine" aria-hidden="true"></div>
				<h3 class="hero-card-title">2026 Opportunity Window Is Live</h3>
				<div class="hero-card-img">
					<img src="/gallery/g1.jpg" alt="Top placement achiever" loading="lazy" />
				</div>
				<div class="hero-card-stats">
					<div>
						<span>Interview Readiness</span>
						<strong>Weekly Bootcamps</strong>
					</div>
					<div>
						<span>Industry Connect</span>
						<strong>Recruiter Networks</strong>
					</div>
				</div>
				<div class="hero-card-badge">
					<span class="badge-dot"></span>
					Admissions + Placements Open 2026
				</div>
			</div>
		</div>
	</div>

	<div class="hero-scroll-cue" aria-hidden="true">
		<span></span>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- STATS                                                                   -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<section class="stats-section">
	<div class="section-shell">
		<h2 class="section-title reveal">Placement Excellence</h2>
		<div class="stats-grid">
			{#each stats as s, i}
				<div class="stat-card reveal" style="animation-delay:{i * 80}ms">
					<div class="stat-value">{s.value}</div>
					<div class="stat-label">{s.label}</div>
					<div class="stat-sub">{s.sub}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- GRAPHS                                                                  -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<section class="graphs-section">
	<div class="section-shell">
		<h2 class="section-title reveal">Placement Insights 2026</h2>
		<div class="graphs-grid reveal">
			{#each ['/graph1.png', '/graph2.png', '/graph3.png', '/graph4.jpg'] as src, i}
				<div class="graph-card" style="animation-delay:{i * 60}ms">
					<img {src} alt="Placement graph {i + 1}" loading="lazy" />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- COMPANIES SLIDER                                                        -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<section class="companies-section">
	<div class="companies-backdrop" aria-hidden="true"></div>
	<div class="section-shell">
		<div class="companies-header">
			<div>
				<h2 class="section-title reveal">Trusted by Top Organizations</h2>
				<p class="companies-desc reveal">
					Connect with 300+ leading companies that value our graduates' skills, adaptability, and
					professional excellence.
				</p>
			</div>
		</div>
	</div>

	<div class="companies-carousel reveal">
		<div class="carousel-track">
			{#each [...logos, ...logos, ...logos] as src, i}
				<div class="company-item" style="animation-delay: {(i % logos.length) * 50}ms">
					<div class="company-badge">
						<img {src} alt="Recruiter company logo" loading="lazy" />
					</div>
				</div>
			{/each}
		</div>
		<div class="carousel-fade carousel-fade-left" aria-hidden="true"></div>
		<div class="carousel-fade carousel-fade-right" aria-hidden="true"></div>
	</div>

	<div class="companies-carousel secondary reveal">
		<div class="carousel-track reverse">
			{#each [...additionalCompanyLogos, ...additionalCompanyLogos, ...additionalCompanyLogos] as src, i}
				<div
					class="company-item"
					style="animation-delay: {(i % additionalCompanyLogos.length) * 45}ms"
				>
					<div class="company-badge">
						<img {src} alt="Recruiter partner logo" loading="lazy" />
					</div>
				</div>
			{/each}
		</div>
		<div class="carousel-fade carousel-fade-left" aria-hidden="true"></div>
		<div class="carousel-fade carousel-fade-right" aria-hidden="true"></div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- AUTHORITIES                                                             -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<section class="auth-section">
	<div class="section-shell">
		<div class="section-label reveal">Leadership</div>
		<h2 class="section-title reveal">Address from Academic Authorities</h2>
		<p class="section-sub reveal">
			Leadership messages that shape career readiness, professional values, and long-term student
			success.
		</p>
		<div class="auth-grid">
			{#each authorities as a, i}
				<article
					class="auth-card reveal"
					style="--accent:{a.accent}; --glow:{a.glow}; animation-delay:{i * 100}ms"
				>
					<div class="auth-head">
						<div class="auth-avatar-wrap">
							<img src={a.image} alt={a.role} loading="lazy" class="auth-avatar" />
							<div class="auth-avatar-ring" style="box-shadow: 0 0 0 2px {a.accent}40"></div>
						</div>
						<span class="auth-role" style="color:{a.accent}">{a.role}</span>
					</div>
					<div class="auth-body">
						<h3 class="auth-headline">{a.headline}</h3>
						<p class="auth-quote">{a.quote}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- PLACEMENT NEWS                                                          -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<section class="news-section">
	<div class="section-shell">
		<div class="news-header">
			<div>
				<div class="section-label reveal font-bold">Latest Updates</div>
				<h2 class="section-title reveal">Placement News</h2>
			</div>
			<div class="news-nav reveal">
				<button class="nav-btn" on:click={() => scrollNews(-1)} aria-label="Scroll left">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
						><polyline points="15 18 9 12 15 6"></polyline></svg
					>
				</button>
				<button class="nav-btn" on:click={() => scrollNews(1)} aria-label="Scroll right">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
						><polyline points="9 18 15 12 9 6"></polyline></svg
					>
				</button>
			</div>
		</div>
	</div>

	<div class="news-track-wrap">
		<div class="news-track" bind:this={newsTrack}>
			<div class="news-spacer" aria-hidden="true"></div>
			{#each events as ev, i}
				<article class="news-card reveal" style="animation-delay:{i * 60}ms">
					<div class="news-img-wrap">
						<img src={ev.image} alt={ev.name} loading="lazy" />
					</div>
					<div class="news-body">
						<time class="news-date">{ev.date}</time>
						<h3 class="news-title">{ev.name}</h3>
						<p class="news-desc">{ev.description}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- COORDINATORS                                                            -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<section class="coord-section">
	<div class="section-shell">
		<h2 class="section-title reveal">Placement Coordinators</h2>
		<p class="section-sub reveal">
			Department coordinators guide students with focused support for training, placements, and
			career readiness.
		</p>
		<div class="coord-grid">
			{#each coordinators as c, i}
				<article class="coord-card reveal" style="animation-delay:{i * 70}ms">
					<div class="coord-avatar-ring">
						<img src="/faculty.svg" alt={c.name} loading="lazy" class="coord-avatar" />
					</div>
					<h3 class="coord-name">{c.name}</h3>
					<span class="coord-role">Department Coordinator</span>
					<p class="coord-dept">{c.dept}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- FOOTER STRIP                                                            -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<footer class="cdc-footer">
	<div class="footer-inner">
		<p class="footer-name">Career Development Cell · BITS Vizag</p>
		<p class="footer-copy">© {new Date().getFullYear()} All rights reserved.</p>
	</div>
</footer>

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- STYLES                                                                  -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->
<style>
	/* ── Tokens ─────────────────────────────────────────────────────────────── */
	:global(:root) {
		--ink: #0a0f1e;
		--ink-soft: #1e2a42;
		--surface: #ffffff;
		--surf-alt: #f5f7fb;
		--muted: #64748b;
		--accent: #2563eb;
		--accent-2: #0ea5e9;
		--bits-b: #e91e8f;
		--bits-i: #8bc34a;
		--bits-t: #f2c230;
		--bits-s: #2aa8e0;
		--border: rgba(15, 23, 42, 0.09);
		--radius-lg: 1.25rem;
		--radius-xl: 1.75rem;
		--font-disp: 'Roboto Flex', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		--font-body: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
	}

	/* ── Reveal animation ───────────────────────────────────────────────────── */
	:global(.reveal) {
		opacity: 0;
		transform: translateY(22px);
		transition:
			opacity 0.65s var(--ease-out),
			transform 0.65s var(--ease-out);
	}
	:global(.reveal.in-view) {
		opacity: 1;
		transform: translateY(0);
	}

	/* ── Shared layout ───────────────────────────────────────────────────────── */
	.section-shell {
		max-width: 1240px;
		margin: 0 auto;
		padding: 0 clamp(1rem, 4vw, 3rem);
	}
	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.38rem 0.85rem;
		border-radius: 999px;
		font-family: var(--font-body);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--accent);
		background: rgba(37, 99, 235, 0.08);
		border: 1px solid rgba(37, 99, 235, 0.2);
		margin-bottom: 0.75rem;
		transition: all 0.4s var(--ease-out);
	}
	.section-label:hover {
		background: rgba(37, 99, 235, 0.12);
		border-color: rgba(37, 99, 235, 0.35);
		box-shadow: 0 8px 16px -4px rgba(37, 99, 235, 0.1);
	}
	.section-title {
		font-family: var(--font-disp);
		font-size: clamp(1.9rem, 4vw, 3rem);
		font-weight: 600;
		letter-spacing: -0.015em;
		color: var(--ink);
		margin: 0 0 0.5rem;
		line-height: 1.08;
	}
	.section-sub {
		font-family: var(--font-body);
		font-size: clamp(0.95rem, 1.5vw, 1.08rem);
		line-height: 1.7;
		color: var(--muted);
		max-width: 58ch;
		margin: 0 auto 3rem;
		text-align: center;
	}

	/* ══════════ HERO ══════════════════════════════════════════════════════════ */
	.hero {
		position: relative;
		isolation: isolate;
		overflow: hidden;
		min-height: 78vh;
		background: var(--svh);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: clamp(1rem, 2.8vw, 2rem) clamp(1rem, 5vw, 4rem) clamp(2.2rem, 4.5vw, 3.4rem);
		background: var(--ink);
	}
	.hero-inner {
		position: relative;
		z-index: 1;
		max-width: 1260px;
		margin: 0 auto;
		width: 100%;
		display: grid;
		grid-template-columns: 1.08fr 0.92fr;
		gap: clamp(2rem, 5vw, 5rem);
		align-items: center;
	}
	.hero-copy {
		animation: hero-up 0.85s var(--ease-out) both;
	}

	.hero-kicker {
		display: inline-flex;
		padding: 0.45rem 0.95rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.28);
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(8px);
		font-family: var(--font-body);
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(248, 250, 252, 0.9);
		margin-bottom: 1.3rem;
	}
	.hero-title {
		font-family: var(--font-disp);
		font-size: clamp(2.6rem, 5.4vw, 4.8rem);
		font-weight: 700;
		line-height: 1.02;
		letter-spacing: -0.02em;
		color: #f8fafc;
		text-shadow: 0 12px 40px rgba(2, 6, 23, 0.5);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
		margin: 0 0 1.4rem;
	}
	.hero-bits {
		display: inline-flex;
		align-items: center;
		gap: 0.28rem;
		margin-right: 0.12rem;
		position: relative;
		top: -0.02em;
	}
	.bits-letter {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: clamp(2rem, 3.2vw, 2.6rem);
		height: clamp(2rem, 3.2vw, 2.6rem);
		border-radius: 0.46rem;
		font-size: clamp(1.1rem, 1.95vw, 1.42rem);
		font-weight: 800;
		line-height: 1;
		color: #ffffff;
		box-shadow:
			0 12px 24px -14px rgba(2, 6, 23, 0.9),
			inset 0 1px 0 rgba(255, 255, 255, 0.35);
		border: 1px solid rgba(255, 255, 255, 0.25);
	}
	.bits-b {
		background: linear-gradient(145deg, #ff3ba6, var(--bits-b));
	}
	.bits-i {
		background: linear-gradient(145deg, #a2d94f, var(--bits-i));
	}
	.bits-t {
		background: linear-gradient(145deg, #ffd651, var(--bits-t));
		color: #14213d;
	}
	.bits-s {
		background: linear-gradient(145deg, #4ebcf0, var(--bits-s));
	}
	.hero-title em {
		font-style: normal;
	}
	.hero-gradient-text {
		font-style: normal;
		display: inline-block;
		white-space: nowrap;
		flex-shrink: 0;
		font-size: clamp(1.9rem, 6.8vw, 4.2rem);
		line-height: 1.08;
		background: linear-gradient(
			90deg,
			var(--bits-b) 0%,
			var(--bits-b) 23%,
			var(--bits-i) 23%,
			var(--bits-i) 48%,
			var(--bits-t) 48%,
			var(--bits-t) 72%,
			var(--bits-s) 72%,
			#1f6df0 100%
		);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		-webkit-box-decoration-break: clone;
		box-decoration-break: clone;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		color: transparent;
	}
	.hero-desc {
		font-family: var(--font-body);
		font-size: clamp(1rem, 1.3vw, 1.1rem);
		line-height: 1.72;
		color: rgba(226, 232, 240, 0.9);
		max-width: 54ch;
		margin: 0 0 1.3rem;
	}
	.hero-pills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin-bottom: 1.4rem;
	}
	.hero-pills span {
		padding: 0.46rem 0.9rem;
		border-radius: 999px;
		font-family: var(--font-body);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #dbeafe;
		background: rgba(15, 23, 42, 0.44);
		border: 1px solid rgba(148, 163, 184, 0.3);
	}
	.hero-proof {
		display: grid;
		grid-template-columns: repeat(3, minmax(120px, 1fr));
		gap: 0.85rem;
		max-width: 640px;
	}
	.hero-proof-item {
		padding: 0.9rem 0.95rem;
		border-radius: 0.85rem;
		border: 1px solid rgba(148, 163, 184, 0.26);
		background: rgba(2, 6, 23, 0.44);
		backdrop-filter: blur(6px);
		display: flex;
		flex-direction: column;
		gap: 0.22rem;
	}
	.hero-proof-item strong {
		font-family: var(--font-disp);
		font-size: 1.05rem;
		font-weight: 700;
		color: #e2e8f0;
	}
	.hero-proof-item span {
		font-family: var(--font-body);
		font-size: 0.76rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #93c5fd;
	}
	.hero-visual {
		animation: hero-up 1s 0.18s var(--ease-out) both;
	}
	.hero-card {
		position: relative;
		border-radius: var(--radius-xl);
		padding: 1rem;
		background: rgba(15, 23, 42, 0.6);
		border: 1px solid rgba(148, 163, 184, 0.28);
		backdrop-filter: blur(12px);
		box-shadow:
			0 40px 90px -34px rgba(2, 6, 23, 0.82),
			inset 0 1px 0 rgba(255, 255, 255, 0.15);
		overflow: hidden;
	}
	.hero-card-shine {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.18),
			transparent 40%,
			transparent 60%,
			rgba(59, 130, 246, 0.1)
		);
		pointer-events: none;
		z-index: 2;
	}
	.hero-card-title {
		margin: 0 0 0.95rem;
		font-family: var(--font-disp);
		font-size: clamp(1.1rem, 2vw, 1.45rem);
		font-weight: 650;
		line-height: 1.3;
		color: #f8fafc;
	}
	.hero-card-img {
		border-radius: calc(var(--radius-xl) - 6px);
		overflow: hidden;
		aspect-ratio: 5/3.5;
		position: relative;
		z-index: 1;
		border: 1px solid rgba(255, 255, 255, 0.14);
	}
	.hero-card-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}
	.hero-card-stats {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.8rem;
		margin-top: 0.9rem;
		margin-bottom: 1.8rem;
		position: relative;
		z-index: 3;
	}
	.hero-card-stats div {
		padding: 0.75rem;
		border-radius: 0.75rem;
		background: rgba(2, 6, 23, 0.54);
		border: 1px solid rgba(148, 163, 184, 0.2);
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.hero-card-stats span {
		font-family: var(--font-body);
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #94a3b8;
	}
	.hero-card-stats strong {
		font-family: var(--font-disp);
		font-size: 0.92rem;
		font-weight: 650;
		color: #e2e8f0;
	}
	.hero-card-badge {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		transform: none;
		z-index: 3;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.48rem 0.9rem;
		border-radius: 999px;
		background: rgba(2, 6, 23, 0.8);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(148, 163, 184, 0.3);
		font-family: var(--font-body);
		font-size: 0.74rem;
		font-weight: 700;
		color: #dbeafe;
		white-space: nowrap;
	}
	.badge-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #4ade80;
		box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.3);
		animation: pulse 2s ease-in-out infinite;
	}
	.hero-scroll-cue {
		position: absolute;
		bottom: 2.5rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;
	}
	.hero-scroll-cue span {
		display: block;
		width: 1.5px;
		height: 54px;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.55));
		animation: scroll-line 2s var(--ease-out) infinite;
	}

	/* ══════════ STATS ═════════════════════════════════════════════════════════ */
	.stats-section {
		padding: clamp(4rem, 8vw, 7rem) 0;
		background: var(--surface);
	}
	.stats-section .section-title {
		text-align: left;
	}
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem;
		margin-top: 2.5rem;
	}
	.stat-card {
		padding: 2rem 1.5rem;
		border-radius: var(--radius-lg);
		background: var(--surf-alt);
		border: 1px solid var(--border);
		transition:
			transform 0.28s var(--ease-out),
			box-shadow 0.28s var(--ease-out),
			border-color 0.28s;
		cursor: default;
	}
	.stat-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 24px 44px -20px rgba(37, 99, 235, 0.18);
		border-color: rgba(37, 99, 235, 0.28);
	}
	.stat-value {
		font-family: var(--font-disp);
		font-size: clamp(2.2rem, 4vw, 3.25rem);
		font-weight: 700;
		color: var(--ink);
		letter-spacing: -0.015em;
		line-height: 1;
		margin-bottom: 0.4rem;
	}
	.stat-label {
		font-family: var(--font-body);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.5rem;
	}
	.stat-sub {
		font-family: var(--font-body);
		font-size: 0.88rem;
		line-height: 1.5;
		color: var(--muted);
	}

	/* ══════════ GRAPHS ════════════════════════════════════════════════════════ */
	.graphs-section {
		padding: clamp(3rem, 6vw, 6rem) 0;
		background: var(--surf-alt);
	}
	.graphs-section .section-title {
		text-align: left;
	}
	.graphs-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.25rem;
		margin-top: 2.5rem;
	}
	.graph-card {
		border-radius: var(--radius-lg);
		overflow: hidden;
		border: 1px solid var(--border);
		background: var(--surface);
		transition:
			transform 0.3s var(--ease-out),
			box-shadow 0.3s var(--ease-out);
	}
	.graph-card:hover {
		transform: scale(1.018);
		box-shadow: 0 20px 48px -20px rgba(15, 23, 42, 0.18);
	}
	.graph-card img {
		width: 100%;
		height: auto;
		object-fit: cover;
		display: block;
	}

	/* ══════════ COMPANIES SLIDER ══════════════════════════════════════════════ */
	.companies-section {
		position: relative;
		padding: clamp(5rem, 9vw, 8rem) 0;
		background: var(--surface);
		overflow: hidden;
	}
	.companies-backdrop {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.08), transparent 40%),
			radial-gradient(circle at 80% 50%, rgba(14, 165, 233, 0.06), transparent 50%);
		pointer-events: none;
	}
	.companies-header {
		position: relative;
		z-index: 1;
		margin-bottom: 3.5rem;
	}
	.companies-header .section-title {
		text-align: left;
	}
	.companies-desc {
		font-family: var(--font-body);
		font-size: clamp(0.95rem, 1.3vw, 1.05rem);
		line-height: 1.65;
		color: var(--muted);
		max-width: 55ch;
		margin-top: 0.75rem;
		font-weight: 500;
	}
	.companies-carousel {
		position: relative;
		perspective: 1000px;
		z-index: 1;
	}
	.companies-carousel.secondary {
		margin-top: 1rem;
	}
	.carousel-track {
		display: flex;
		gap: 2rem;
		overflow: visible;
		width: 100%;
		padding: 1.5rem clamp(1rem, 4vw, 3rem);
		animation: carousel-scroll 35s linear infinite;
		will-change: transform;
	}
	.carousel-track:hover {
		animation-play-state: paused;
	}
	.carousel-track.reverse {
		animation-name: carousel-scroll-reverse;
		animation-duration: 38s;
	}
	.company-item {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		animation: fade-in 0.6s var(--ease-out) forwards;
	}
	.company-badge {
		display: flex;
		align-items: center;
		justify-content: center;
		width: clamp(100px, 12vw, 140px);
		height: clamp(100px, 12vw, 140px);
		border-radius: var(--radius-lg);
		background: var(--surf-alt);
		border: 1px solid var(--border);
		padding: 1.2rem;
		transition: all 0.4s var(--ease-out);
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.company-badge::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 30% 30%, rgba(37, 99, 235, 0.12), transparent 70%);
		opacity: 0;
		transition: opacity 0.4s var(--ease-out);
	}
	.company-badge:hover::before {
		opacity: 1;
	}
	.company-badge:hover {
		background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(14, 165, 233, 0.05));
		border-color: rgba(37, 99, 235, 0.2);
		transform: translateY(-8px) scale(1.08);
		box-shadow: 0 24px 48px -12px rgba(37, 99, 235, 0.15);
	}
	.company-badge img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: grayscale(1) brightness(0.9);
		transition: filter 0.4s var(--ease-out);
		position: relative;
		z-index: 1;
	}
	.company-badge:hover img {
		filter: grayscale(0) brightness(1);
	}
	.carousel-fade {
		position: absolute;
		top: 0;
		height: 100%;
		width: clamp(60px, 8vw, 120px);
		pointer-events: none;
		z-index: 2;
	}
	.carousel-fade-left {
		left: 0;
		background: linear-gradient(to right, var(--surface) 0%, transparent 100%);
	}
	.carousel-fade-right {
		right: 0;
		background: linear-gradient(to left, var(--surface) 0%, transparent 100%);
	}

	@keyframes carousel-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% / 3));
		}
	}
	@keyframes carousel-scroll-reverse {
		from {
			transform: translateX(calc(-100% / 3));
		}
		to {
			transform: translateX(0);
		}
	}
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: scale(0.92);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	/* ══════════ AUTHORITIES ═══════════════════════════════════════════════════ */
	.auth-section {
		padding: clamp(4rem, 8vw, 7rem) 0;
		background: var(--ink);
		color: #f8fafc;
		overflow: hidden;
		position: relative;
	}
	.auth-section::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(ellipse 55% 50% at 0% 0%, rgba(37, 99, 235, 0.22), transparent),
			radial-gradient(ellipse 45% 40% at 100% 100%, rgba(14, 165, 233, 0.14), transparent);
		pointer-events: none;
	}
	.auth-section .section-label {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.18);
		color: #93c5fd;
	}
	.auth-section .section-title {
		color: #f8fafc;
		text-align: left;
	}
	.auth-section .section-sub {
		color: rgba(148, 163, 184, 0.9);
		text-align: left;
		margin-left: 0;
		max-width: 62ch;
	}
	.auth-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.35rem;
		margin-top: 3rem;
		position: relative;
		z-index: 1;
	}
	.auth-card {
		position: relative;
		border-radius: var(--radius-xl);
		padding: 1.3rem 1.3rem 1.4rem;
		background: linear-gradient(170deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
		border: 1px solid rgba(255, 255, 255, 0.14);
		backdrop-filter: blur(10px);
		overflow: visible;
		transition:
			transform 0.3s var(--ease-out),
			box-shadow 0.3s,
			border-color 0.3s;
		text-align: left;
	}
	.auth-card::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background: var(--glow);
		opacity: 0;
		transition: opacity 0.3s;
		pointer-events: none;
	}
	.auth-card:hover {
		transform: translateY(-7px);
		border-color: rgba(255, 255, 255, 0.24);
		box-shadow: 0 26px 52px -30px rgba(2, 6, 23, 0.92);
	}
	.auth-card:hover::after {
		opacity: 1;
	}
	.auth-head {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	.auth-avatar-wrap {
		position: relative;
		flex-shrink: 0;
		width: 9rem;
		height: 9rem;
	}
	.auth-avatar {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		border-radius: 1rem;
		display: block;
		border: 2px solid rgba(255, 255, 255, 0.22);
	}
	.auth-avatar-ring {
		position: absolute;
		inset: -5px;
		border-radius: 1.15rem;
		pointer-events: none;
	}
	.auth-body {
		display: flex;
		flex-direction: column;
		gap: 0.72rem;
	}
	.auth-role {
		display: inline-flex;
		align-self: flex-start;
		padding: 0.3rem 0.65rem;
		border-radius: 999px;
		background: rgba(15, 23, 42, 0.55);
		border: 1px solid rgba(148, 163, 184, 0.28);
		font-family: var(--font-body);
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}
	.auth-headline {
		font-family: var(--font-disp);
		font-size: clamp(1rem, 1.45vw, 1.2rem);
		font-weight: 600;
		line-height: 1.3;
		color: #f8fafc;
		margin: 0;
	}
	.auth-quote {
		font-family: var(--font-body);
		font-size: 0.91rem;
		line-height: 1.68;
		color: rgba(148, 163, 184, 0.9);
		font-style: normal;
		margin: 0;
	}

	/* ══════════ NEWS ═══════════════════════════════════════════════════════════ */
	.news-section {
		padding: clamp(4rem, 8vw, 7rem) 0;
		background: var(--surf-alt);
	}
	.news-header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2.5rem;
	}
	.news-nav {
		display: flex;
		gap: 0.75rem;
	}
	.nav-btn {
		width: 46px;
		height: 46px;
		border-radius: 50%;
		border: 1.5px solid var(--border);
		background: var(--surface);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: var(--ink);
		font-family: var(--font-body);
		font-weight: 500;
		transition:
			background 0.2s,
			border-color 0.2s,
			transform 0.2s;
	}
	.nav-btn:hover {
		background: var(--ink);
		color: #f8fafc;
		border-color: var(--ink);
		transform: scale(1.06);
	}
	.nav-btn svg {
		width: 18px;
		height: 18px;
	}
	.news-track-wrap {
		overflow: hidden;
	}
	.news-track {
		display: flex;
		overflow-x: auto;
		scroll-behavior: smooth;
		scrollbar-width: none;
		gap: 1.25rem;
		padding-bottom: 1rem;
		-webkit-overflow-scrolling: touch;
	}
	.news-track::-webkit-scrollbar {
		display: none;
	}
	.news-spacer {
		flex-shrink: 0;
		width: clamp(1rem, 4vw, 3rem);
	}
	.news-card {
		flex-shrink: 0;
		width: clamp(280px, 30vw, 360px);
		border-radius: var(--radius-lg);
		background: var(--surface);
		border: 1px solid var(--border);
		overflow: hidden;
		transition:
			transform 0.3s var(--ease-out),
			box-shadow 0.3s;
		cursor: pointer;
	}
	.news-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 28px 56px -24px rgba(15, 23, 42, 0.22);
	}
	.news-img-wrap {
		height: 200px;
		overflow: hidden;
	}
	.news-img-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		transition: transform 0.6s var(--ease-out);
	}
	.news-card:hover .news-img-wrap img {
		transform: scale(1.08);
	}
	.news-body {
		padding: 1.25rem 1.35rem 1.5rem;
	}
	.news-date {
		font-family: var(--font-body);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		color: var(--accent);
		display: block;
		margin-bottom: 0.5rem;
	}
	.news-title {
		font-family: var(--font-disp);
		font-size: 1.02rem;
		font-weight: 600;
		line-height: 1.38;
		color: var(--ink);
		margin: 0 0 0.65rem;
	}
	.news-desc {
		font-family: var(--font-body);
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--muted);
		margin: 0;
		display: -webkit-box;
		line-clamp: 3;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* ══════════ COORDINATORS ══════════════════════════════════════════════════ */
	.coord-section {
		padding: clamp(4rem, 8vw, 7rem) 0;
		background: var(--surface);
	}
	.coord-section .section-sub {
		text-align: start;
		margin: 0 0 3rem;
	}
	.coord-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem;
		margin-top: 3rem;
	}
	.coord-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 2rem 1.25rem 1.5rem;
		border-radius: var(--radius-lg);
		border: 1px solid var(--border);
		background: var(--surf-alt);
		gap: 0.5rem;
		transition:
			transform 0.28s var(--ease-out),
			box-shadow 0.28s,
			border-color 0.28s;
	}
	.coord-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 22px 44px -20px rgba(37, 99, 235, 0.18);
		border-color: rgba(37, 99, 235, 0.25);
	}
	.coord-avatar-ring {
		width: 5.5rem;
		height: 5.5rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #eef5ff;
		border: 2px solid rgba(37, 99, 235, 0.2);
		margin-bottom: 0.5rem;
	}
	.coord-avatar {
		width: 3.5rem;
		height: 3.5rem;
		object-fit: contain;
		opacity: 0.85;
	}
	.coord-name {
		font-family: var(--font-disp);
		font-size: 1rem;
		font-weight: 600;
		color: var(--ink);
		margin: 0;
		line-height: 1.3;
	}
	.coord-role {
		font-family: var(--font-body);
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
	}
	.coord-dept {
		font-family: var(--font-body);
		font-size: 0.85rem;
		line-height: 1.5;
		color: var(--muted);
		margin: 0;
	}

	/* ══════════ FOOTER ════════════════════════════════════════════════════════ */
	.cdc-footer {
		background: var(--ink);
		padding: 1.75rem clamp(1rem, 4vw, 3rem);
	}
	.footer-inner {
		max-width: 1240px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.footer-name {
		font-family: var(--font-disp);
		font-size: 0.85rem;
		font-weight: 600;
		color: rgba(248, 250, 252, 0.9);
		margin: 0;
	}
	.footer-copy {
		font-family: var(--font-body);
		font-size: 0.78rem;
		color: rgba(148, 163, 184, 0.7);
		margin: 0;
	}

	/* ══════════ KEYFRAMES ═════════════════════════════════════════════════════ */
	@keyframes hero-up {
		from {
			opacity: 0;
			transform: translateY(24px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
	}
	@keyframes scroll-line {
		0% {
			transform: scaleY(0);
			transform-origin: top;
			opacity: 1;
		}
		50% {
			transform: scaleY(1);
			transform-origin: top;
		}
		51% {
			transform: scaleY(1);
			transform-origin: bottom;
		}
		100% {
			transform: scaleY(0);
			transform-origin: bottom;
			opacity: 0;
		}
	}

	/* ══════════ RESPONSIVE ════════════════════════════════════════════════════ */
	@media (max-width: 1024px) {
		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		.auth-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		.auth-card:last-child {
			grid-column: 1 / -1;
			max-width: 460px;
			margin: 0 auto;
		}
		.coord-grid {
			grid-template-columns: repeat(3, 1fr);
		}
		.coord-card:last-child {
			grid-column: 1 / -1;
			max-width: 300px;
			margin: 0 auto;
		}
		.company-badge {
			width: clamp(90px, 11vw, 130px);
			height: clamp(90px, 11vw, 130px);
		}
		.carousel-track {
			gap: 1.5rem;
			padding: 1.2rem clamp(1rem, 3vw, 2rem);
		}
	}
	@media (max-width: 768px) {
		.hero {
			padding-top: clamp(0.7rem, 2.2vw, 1.2rem);
			min-height: 72vh;
		}
		.hero-inner {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.hero-title {
			font-size: clamp(2.1rem, 9vw, 3rem);
		}
		.hero-bits {
			gap: 0.2rem;
		}
		.hero-proof {
			grid-template-columns: 1fr;
			max-width: 100%;
		}
		.hero-card-stats {
			grid-template-columns: 1fr;
			margin-bottom: 3.4rem;
		}
		.hero-card-badge {
			bottom: 0.8rem;
			left: 0.8rem;
		}
		.auth-grid {
			grid-template-columns: 1fr;
			gap: 1.2rem;
		}
		.auth-card:last-child {
			max-width: 100%;
		}
		.auth-head {
			gap: 0.85rem;
		}
		.auth-avatar-wrap {
			width: 7.8rem;
			height: 7.8rem;
		}
		.graphs-grid {
			grid-template-columns: 1fr;
		}
		.coord-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		.companies-header {
			margin-bottom: 2.5rem;
		}
		.companies-desc {
			max-width: 100%;
		}
		.company-badge {
			width: clamp(85px, 10vw, 120px);
			height: clamp(85px, 10vw, 120px);
		}
		.carousel-fade {
			width: clamp(40px, 6vw, 80px);
		}
	}
	@media (max-width: 560px) {
		.hero-bg {
			background-size: 100% auto;
		}
		.stats-grid {
			grid-template-columns: 1fr 1fr;
		}
		.coord-grid {
			grid-template-columns: 1fr;
		}
		.news-header {
			flex-direction: column;
			align-items: flex-start;
		}
		.company-badge {
			width: 80px;
			height: 80px;
			padding: 1rem;
		}
		.carousel-track {
			gap: 1rem;
			padding: 1rem;
		}
		.hero-pills span,
		.hero-card-badge {
			font-size: 0.68rem;
		}
		.section-title {
			font-size: clamp(1.5rem, 5vw, 2.5rem);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.hero-copy,
		.hero-visual,
		:global(.reveal),
		:global(.reveal.in-view) {
			animation: none !important;
			transition: none !important;
			opacity: 1 !important;
			transform: none !important;
		}
		.carousel-track,
		.company-item {
			animation: none !important;
		}
	}
</style>
