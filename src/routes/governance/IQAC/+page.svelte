<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;
	onMount(() => {
		visible = true;
	});

	const objectives = [
		'Fulfil the vision and mission of the institute in the light of its quality policy.',
		'Develop a system for conscious, consistent and catalytic action to improve academic performance.',
		'Promote quality culture and implementation of best practices.',
		'Implement sustainable Quality Management System to enhance Quality in Education.'
	];

	const functions = [
		'Development and application of quality benchmarks/parameters for academic and administrative activities.',
		'Arrangement for feedback responses from students, parents and other stakeholders.',
		'Dissemination of information on the various quality parameters of higher education.',
		'Organization of inter and intra institutional workshops and seminars on quality related themes.',
		'Documentation of the various programmes/activities leading to quality improvement.',
		'Acting as a nodal agency for coordinating quality-related activities and good practices.',
		'Development and maintenance of Institutional database through MIS.',
		'Development of Quality Culture in the Institute.',
		'Preparation of the Annual Quality Assurance Report (AQAR) based on NAAC/NBA criteria.'
	];
</script>

<svelte:head>
	<title>IQAC | BITS Vizag</title>
</svelte:head>

{#if visible}
	<main class="iqac-container" in:fade={{ duration: 400 }}>
		<!-- Header -->
		<header class="page-header" in:fly={{ y: -20, duration: 600 }}>
			<div class="header-gradient"></div>
			<div class="container">
				<div class="header-inner">
					<div class="breadcrumb">Governance / Internal Quality Assurance</div>
					<h1>IQAC</h1>
					<p class="tagline">Commitment to Excellence in Education</p>
				</div>
			</div>
		</header>

		<div class="container">
			<!-- Institution Info (Main Card) -->
			<section class="bento-card institution-card" in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<div class="card-content">
					<span class="badge">Institutional Profile</span>
					<h2 class="college-name">BABA INSTITUTE OF TECHNOLOGY AND SCIENCES (A)</h2>
					<p class="sub-heading">An Autonomous Institution</p>
					<div class="meta-row">
						<span class="meta-item">NAAC Accredited</span>
						<span class="dot"></span>
						<span class="meta-item">AICTE Approved</span>
						<span class="dot"></span>
						<span class="meta-item">ISO 9001:2015</span>
					</div>
					<div class="divider"></div>
					<p class="desc">
						IQAC is established to review and develop a system of conscious, regular and catalytic
						action to improve teaching-learning, evaluation, and overall quality for students and
						faculty.
					</p>
				</div>
			</section>

			<div class="bento-grid">
				<!-- Vision & Mission -->
				<section class="bento-card vision-card" in:fly={{ y: 20, duration: 600, delay: 200 }}>
					<div class="icon-box vision-icon"><i class="fa-solid fa-eye"></i></div>
					<h3 class="vision-title">Vision</h3>
					<p class="vision-text">
						To build and ensure a quality culture aimed at all round excellence at the institutional
						level.
					</p>
				</section>

				<section class="bento-card mission-card" in:fly={{ y: 20, duration: 600, delay: 300 }}>
					<div class="icon-box mission-icon"><i class="fa-solid fa-bullseye"></i></div>
					<h3 class="mission-title">Mission</h3>
					<p class="mission-text">
						To channelize and systematize efforts towards academic excellence and be the driving
						force for quality enhancement.
					</p>
				</section>

				<!-- Quality Policy -->
				<section class="bento-card policy-card" in:fly={{ y: 20, duration: 600, delay: 400 }}>
					<div class="policy-header">
						<span class="small-label">Core Principle</span>
						<h3>Quality Policy</h3>
					</div>
					<p>
						To emphasize & inculcate a quality culture with responsive, reliable and transparent
						efforts through self and external evaluation.
					</p>
				</section>

				<!-- Quality Objectives -->
				<section class="bento-card objectives-card" in:fly={{ y: 20, duration: 600, delay: 500 }}>
					<div class="section-header">
						<div class="num-indicator">01</div>
						<h3>Quality Objectives</h3>
					</div>
					<ul class="tight-list">
						{#each objectives as obj}
							<li>{obj}</li>
						{/each}
					</ul>
				</section>

				<!-- Functions (Large Card) -->
				<section class="bento-card functions-card" in:fly={{ y: 20, duration: 600, delay: 600 }}>
					<div class="section-header">
						<div class="num-indicator">02</div>
						<h3>Primary Functions</h3>
					</div>
					<div class="functions-grid">
						{#each functions as func}
							<div class="func-item">
								<i class="fa-solid fa-check"></i>
								<p>{func}</p>
							</div>
						{/each}
					</div>
				</section>
			</div>
		</div>
	</main>
{/if}

<style>
	:global(body) {
		background-color: #fcfcfc;
		font-family:
			'Inter',
			-apple-system,
			BlinkMacSystemFont,
			sans-serif;
	}

	.iqac-container {
		padding-bottom: 6rem;
		color: #334155;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* Header Styles */
	.page-header {
		position: relative;
		padding: 6rem 0 4rem;
		background: #ffffff;
		border-bottom: 1px solid #f1f5f9;
		margin-bottom: 3rem;
		overflow: hidden;
	}

	.header-gradient {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		background:
			radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.03) 0%, transparent 50%),
			radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
		pointer-events: none;
	}

	.breadcrumb {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #64748b;
		margin-bottom: 0.75rem;
	}

	h1 {
		font-family: 'Satoshi', sans-serif;
		font-size: 3.5rem;
		font-weight: 900;
		letter-spacing: -0.04em;
		margin-bottom: 0.5rem;
		color: #0f172a;
		background: linear-gradient(to right, #0f172a, #334155);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.tagline {
		font-size: 1.25rem;
		color: #1e40af;
		font-weight: 600;
		letter-spacing: -0.01em;
	}

	/* Bento Grid Layout */
	.bento-grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-auto-rows: minmax(160px, auto);
		gap: 1.25rem;
	}

	.bento-card {
		background: #ffffff;
		border: 1px solid #f1f5f9;
		border-radius: 1.75rem;
		padding: 2.25rem;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		flex-direction: column;
	}

	.bento-card:hover {
		border-color: #e2e8f0;
		box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.08);
		transform: translateY(-4px);
	}

	/* Institution Card */
	.institution-card {
		background: linear-gradient(165deg, #ffffff, #f8fafc);
		justify-content: center;
		margin-bottom: 1.25rem;
		border-width: 2px;
	}

	.badge {
		display: inline-block;
		padding: 0.4rem 0.9rem;
		background: #1e293b;
		color: #f8fafc;
		font-size: 0.65rem;
		font-weight: 800;
		border-radius: 99px;
		margin-bottom: 1.75rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.college-name {
		font-size: 2.15rem;
		font-weight: 900;
		line-height: 1.1;
		margin-bottom: 0.75rem;
		letter-spacing: -0.03em;
		/* New Vibe Color for College Name */
		color: #1e3a8a; /* Deep Indigo Vibe */
		background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.sub-heading {
		font-size: 1.2rem;
		font-weight: 700;
		color: #6366f1; /* Indigo 500 Vibe */
		margin-bottom: 1.5rem;
	}

	.meta-row {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1.75rem;
	}

	.meta-item {
		font-size: 0.85rem;
		font-weight: 700;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}

	.dot {
		width: 4px;
		height: 4px;
		background: #cbd5e1;
		border-radius: 50%;
	}

	.divider {
		height: 1px;
		background: linear-gradient(to right, #e2e8f0, transparent);
		width: 100%;
		margin-bottom: 1.75rem;
	}

	.desc {
		font-size: 1.1rem;
		line-height: 1.6;
		color: #475569;
		font-weight: 500;
	}

	/* Vision & Mission Cards */
	.vision-card,
	.mission-card {
		grid-column: span 3;
	}

	.vision-icon,
	.mission-icon {
		background: transparent !important;
		padding: 0 !important;
		width: auto !important;
		height: auto !important;
		font-size: 1.75rem !important;
		margin-bottom: 1.25rem !important;
		box-shadow: none !important;
	}

	.vision-icon {
		color: #d90606 !important;
	}

	.mission-icon {
		color: #05f800 !important;
	}

	.vision-title {
		color: #a82d20 !important; /* Amber 700 Vibe */
		font-weight: 900;
	}

	.mission-title {
		color: #2a8441 !important; /* Indigo 800 Vibe */
		font-weight: 900;
	}

	.vision-text {
		color: #92400e !important; /* Amber 800 */
		font-weight: 500;
	}

	.mission-text {
		color: #312e81 !important; /* Indigo 900 */
		font-weight: 500;
	}

	h3 {
		font-size: 1.4rem;
		font-weight: 900;
		margin-bottom: 1rem;
		color: #0f172a;
		letter-spacing: -0.01em;
	}

	.bento-card p {
		font-size: 1rem;
		line-height: 1.6;
		color: #475569;
		font-weight: 500;
	}

	/* Quality Policy Card */
	.policy-card {
		grid-column: span 6;
		background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
		color: #f8fafc;
		border: none;
		position: relative;
		overflow: hidden;
		margin-top: 0.5rem;
	}

	.policy-card::after {
		content: '';
		position: absolute;
		top: -50%;
		right: -50%;
		width: 100%;
		height: 100%;
		background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
		pointer-events: none;
	}

	.policy-card .small-label {
		font-size: 0.7rem;
		font-weight: 800;
		text-transform: uppercase;
		color: #94a3b8;
		margin-bottom: 0.5rem;
		display: block;
		letter-spacing: 0.1em;
	}

	.policy-card h3 {
		color: #ffffff;
		margin-bottom: 1.25rem;
	}

	.policy-card p {
		color: #cbd5e1;
		font-size: 1.15rem;
		line-height: 1.6;
		font-weight: 600;
	}

	/* Objectives Card */
	.objectives-card {
		grid-column: span 6;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.num-indicator {
		font-size: 0.75rem;
		font-weight: 900;
		color: #fff;
		background: #2563eb;
		width: 28px;
		height: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
	}

	.tight-list {
		list-style: none;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
	}

	.tight-list li {
		font-size: 0.95rem;
		font-weight: 600;
		color: #000000;
		padding: 1.25rem;
		background: #f8fafc;
		border-radius: 1.25rem;
		border: 1px solid #f1f5f9;
		line-height: 1.5;
		transition: all 0.3s ease;
	}

	.tight-list li:hover {
		background: #ffffff;
		border-color: #2563eb;
		color: #0f172a;
	}

	/* Functions Card */
	.functions-card {
		grid-column: span 6;
	}

	.functions-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.func-item {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		border-radius: 1rem;
		transition: background 0.3s ease;
	}

	.func-item:hover {
		background: #f8fafc;
	}

	.func-item i {
		font-size: 0.85rem;
		color: #059669;
		margin-top: 0.35rem;
	}

	.func-item p {
		font-size: 0.9rem;
		line-height: 1.6;
		color: #475569;
		font-weight: 500;
	}

	/* Responsive Grid */
	@media (max-width: 1024px) {
		.functions-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 900px) {
		.bento-grid {
			grid-template-columns: 1fr 1fr;
		}
		.objectives-card,
		.functions-card,
		.policy-card {
			grid-column: span 2;
		}
		.vision-card,
		.mission-card {
			grid-column: span 1;
		}
	}

	@media (max-width: 600px) {
		.bento-grid {
			grid-template-columns: 1fr;
		}
		.objectives-card,
		.functions-card,
		.vision-card,
		.mission-card,
		.policy-card {
			grid-column: span 1;
		}
		.functions-grid,
		.tight-list {
			grid-template-columns: 1fr;
		}
		h1 {
			font-size: 2.75rem;
		}
	}
</style>
