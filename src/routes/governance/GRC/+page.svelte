<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;
	onMount(() => {
		visible = true;
	});

	const objectives = [
		'Uphold the dignity of the College by ensuring a strife-free atmosphere through cordial relationships.',
		'Provide a responsive approach and be accountable for the expeditious settlement of student grievances.',
		'Encourage students to express their problems freely and frankly without fear of victimization.',
		'Advise students to respect rights and dignity, and show restraint and patience during conflicts.',
		'Ensure college officials are responsive, accountable, and courteous in dealing with students.',
		'Ensure impartial and fair solutions to all student grievances within a stipulated time limit.'
	];

	const members = [
		{ name: 'Dr. M. Rajan Babu', role: 'Chair Person', phone: '8008844699' },
		{ name: 'Mrs. A.S.B Prasanna', role: 'Member', phone: '8008633321' },
		{ name: 'Mrs. Fathimunisa Begum', role: 'Member', phone: '9966540481' },
		{ name: 'Mr. E. Anil Kumar', role: 'Member', phone: '8096173988' },
		{ name: 'Dr. Shahazadi Begum', role: 'Member', phone: '9502960116' },
		{ name: 'Dr. B. Kiranmai', role: 'Member', phone: '8500267193' },
		{ name: 'Mrs. Komali', role: 'Member', phone: '8121206946' },
		{ name: 'Mr. S Durga Prasad', role: 'Member', phone: '9293733176' },
		{ name: 'Dr. D.N Murthy', role: 'Member', phone: '9581880098' },
		{ name: 'Mrs. K Sireesha', role: 'Member', phone: '9059416941' }
	];

	const functions = [
		'Anyone with a genuine grievance may approach department members or class in-charges.',
		'Grievances may be submitted in writing via the suggestion box at the Administrative Block.',
		'Cases are attended promptly upon receipt of written grievances and necessary documents.',
		'The Cell ensures grievances are resolved within a stipulated time limit.',
		'Statistical reports and meeting minutes are prepared regularly for higher authorities.'
	];
</script>

<svelte:head>
	<title>GRC | BITS Vizag</title>
</svelte:head>

{#if visible}
	<main class="grc-page" in:fade={{ duration: 600 }}>
		<!-- Ambient Background Elements -->
		<div class="ambient-glow g1"></div>
		<div class="ambient-glow g2"></div>

		<!-- Hero Section -->
		<header class="hero">
			<div class="container">
				<div class="hero-content" in:fly={{ y: 30, duration: 800 }}>
					<span class="year-badge">Academic Year 2025-2026</span>
					<h1>Grievance Redressal Cell</h1>
					<p class="ref-code">Ref: Baba/ Principal/GRC/2025-26/1</p>
					<div class="hero-desc">
						<p>Promoting transparency, accountability, and a harmonious educational atmosphere for all students and staff.</p>
					</div>
				</div>
			</div>
		</header>

		<div class="container">
			<!-- Reconstitution & Vision/Mission Grid -->
			<div class="bento-grid top-grid">
				<section class="bento-card intro-card" in:fly={{ y: 20, duration: 600, delay: 200 }}>
					<div class="label">Mechanism</div>
					<h3>Reconstitution of GRC</h3>
					<p>In order to redress individual and collective grievances of students and staff, our mechanism has been revised to effectively deal with all complaints and malpractices.</p>
				</section>

				<section class="bento-card vision-card" in:fly={{ y: 20, duration: 600, delay: 300 }}>
					<div class="icon-wrap"><i class="fa-solid fa-eye"></i></div>
					<h3>Vision</h3>
					<p>A grievance-free ambience for Baba Institute of Technology and Sciences.</p>
				</section>

				<section class="bento-card mission-card" in:fly={{ y: 20, duration: 600, delay: 400 }}>
					<div class="icon-wrap"><i class="fa-solid fa-bullseye"></i></div>
					<h3>Mission</h3>
					<p>Promoting a transparent and healthy environment by addressing grievances with impartiality.</p>
				</section>
			</div>

			<!-- Objectives & Functions -->
			<div class="grid-layout">
				<section class="section-container" in:fly={{ x: -30, duration: 800, delay: 500 }}>
					<div class="section-header">
						<span class="num">01</span>
						<h2>Objectives</h2>
					</div>
					<div class="objectives-list">
						{#each objectives as obj, i}
							<div class="obj-item" in:fly={{ y: 10, delay: 600 + (i * 100) }}>
								<div class="check"><i class="fa-solid fa-check"></i></div>
								<p>{obj}</p>
							</div>
						{/each}
					</div>
				</section>

				<section class="section-container" in:fly={{ x: 30, duration: 800, delay: 600 }}>
					<div class="section-header">
						<span class="num">02</span>
						<h2>Functions</h2>
					</div>
					<div class="functions-stack">
						{#each functions as func, i}
							<div class="func-step" in:fly={{ x: 20, delay: 700 + (i * 100) }}>
								<div class="step-num">{i + 1}</div>
								<p>{func}</p>
							</div>
						{/each}
					</div>
				</section>
			</div>

			<!-- Committee Members -->
			<section class="committee-section" in:scale={{ start: 0.98, duration: 800, delay: 800 }}>
				<div class="glass-container">
					<div class="table-header">
						<div class="title-wrap">
							<div class="status-dot pulse"></div>
							<h2>Committee Members</h2>
						</div>
						<p>Periodically enquiring and resolving grievances with professional integrity.</p>
					</div>
					<div class="table-wrapper">
						<table>
							<thead>
								<tr>
									<th>S.No</th>
									<th>Name of Member</th>
									<th>Designation</th>
									<th>Contact</th>
								</tr>
							</thead>
							<tbody>
								{#each members as member, i}
									<tr>
										<td>{i + 1}</td>
										<td class="name">{member.name}</td>
										<td><span class="role-tag">{member.role}</span></td>
										<td class="phone">{member.phone}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</section>

			<!-- Meeting Details -->
			<section class="meeting-details" in:fly={{ y: 30, duration: 800, delay: 1000 }}>
				<div class="bento-grid">
					<div class="bento-card meeting-card">
						<div class="label">Latest Meeting</div>
						<h3>21-08-2025</h3>
						<p>Meeting held at Principal's Chamber to discuss reconstitution and awareness measures.</p>
					</div>
					<div class="bento-card agenda-card">
						<h3>Agenda Items</h3>
						<ul class="agenda-list">
							<li>Re-constitution of Committee</li>
							<li>Student Awareness Measures</li>
							<li>Impartial Resolution Protocols</li>
						</ul>
					</div>
				</div>
			</section>

			<footer class="grc-footer" in:fade={{ delay: 1200 }}>
				<div class="principal-sign">
					<p>Approved By</p>
					<strong>PRINCIPAL</strong>
					<span>BITS Vizag</span>
				</div>
			</footer>
		</div>
	</main>
{/if}

<style>
	:global(body) {
		background-color: #ffffff;
		font-family: 'Inter', sans-serif;
	}

	.grc-page {
		padding-bottom: 8rem;
		color: #1e293b;
		position: relative;
		overflow: hidden;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* Ambient Background */
	.ambient-glow {
		position: absolute;
		width: 600px;
		height: 600px;
		filter: blur(120px);
		opacity: 0.15;
		z-index: -1;
		border-radius: 50%;
	}

	.g1 { top: -100px; right: -100px; background: #3b82f6; }
	.g2 { bottom: -100px; left: -100px; background: #10b981; }

	/* Hero Section */
	.hero {
		padding: 8rem 0 5rem;
		text-align: center;
		background: radial-gradient(circle at 50% 0%, #f8fafc 0%, #ffffff 100%);
	}

	.year-badge {
		display: inline-block;
		padding: 0.5rem 1.25rem;
		background: #0f172a;
		color: #fff;
		font-size: 0.75rem;
		font-weight: 700;
		border-radius: 99px;
		margin-bottom: 1.5rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	h1 {
		font-family: 'Satoshi', sans-serif;
		font-size: clamp(2.5rem, 8vw, 4rem);
		font-weight: 900;
		letter-spacing: -0.04em;
		color: #0f172a;
		margin-bottom: 1rem;
		line-height: 1;
	}

	.ref-code {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.8rem;
		color: #64748b;
		margin-bottom: 2rem;
	}

	.hero-desc {
		max-width: 600px;
		margin: 0 auto;
		font-size: 1.15rem;
		color: #475569;
		line-height: 1.6;
	}

	/* Bento Grid */
	.bento-grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 1.25rem;
		margin-bottom: 3rem;
	}

	.bento-card {
		background: #ffffff;
		border: 1px solid #f1f5f9;
		border-radius: 1.5rem;
		padding: 2rem;
		transition: all 0.4s ease;
	}

	.bento-card:hover {
		border-color: #3b82f6;
		transform: translateY(-4px);
		box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.1);
	}

	.intro-card { grid-column: span 6; }
	.vision-card, .mission-card { grid-column: span 3; }

	.label {
		font-size: 0.7rem;
		font-weight: 800;
		text-transform: uppercase;
		color: #3b82f6;
		margin-bottom: 0.5rem;
		letter-spacing: 0.1em;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 800;
		margin-bottom: 0.75rem;
		color: #0f172a;
	}

	.bento-card p {
		color: #64748b;
		line-height: 1.6;
	}

	.icon-wrap {
		width: 44px;
		height: 44px;
		background: #f8fafc;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #3b82f6;
		margin-bottom: 1rem;
	}

	/* Layout Grid */
	.grid-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-bottom: 5rem;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2.5rem;
	}

	.num {
		font-size: 0.75rem;
		font-weight: 900;
		color: #fff;
		background: #1e293b;
		padding: 0.25rem 0.6rem;
		border-radius: 6px;
	}

	h2 {
		font-size: 2rem;
		font-weight: 900;
		color: #0f172a;
		letter-spacing: -0.02em;
	}

	/* Objectives List */
	.objectives-list {
		display: grid;
		gap: 1rem;
	}

	.obj-item {
		display: flex;
		gap: 1rem;
		padding: 1.25rem;
		background: #f8fafc;
		border-radius: 1rem;
		border: 1px solid #f1f5f9;
	}

	.check {
		flex-shrink: 0;
		width: 24px;
		height: 24px;
		background: #3b82f6;
		color: #fff;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
	}

	.obj-item p {
		font-size: 0.95rem;
		line-height: 1.5;
		color: #475569;
		font-weight: 500;
	}

	/* Functions Stack */
	.functions-stack {
		display: grid;
		gap: 1.25rem;
	}

	.func-step {
		display: flex;
		gap: 1.25rem;
		align-items: flex-start;
	}

	.step-num {
		flex-shrink: 0;
		width: 32px;
		height: 32px;
		border: 1px solid #e2e8f0;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 0.9rem;
		color: #64748b;
	}

	.func-step p {
		font-size: 1rem;
		line-height: 1.6;
		color: #475569;
	}

	/* Committee Section */
	.committee-section {
		margin-bottom: 5rem;
	}

	.glass-container {
		background: #ffffff;
		border: 1px solid #f1f5f9;
		border-radius: 2rem;
		padding: 3rem;
		box-shadow: 0 40px 80px -40px rgba(0, 0, 0, 0.05);
	}

	.table-header {
		margin-bottom: 2.5rem;
	}

	.title-wrap {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}

	.status-dot {
		width: 10px;
		height: 10px;
		background: #10b981;
		border-radius: 50%;
	}

	.pulse {
		animation: pulse-animation 2s infinite;
	}

	@keyframes pulse-animation {
		0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
		70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
		100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
	}

	.table-header p {
		color: #64748b;
		font-weight: 500;
	}

	.table-wrapper {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th {
		text-align: left;
		padding: 1.25rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #94a3b8;
		border-bottom: 2px solid #f8fafc;
	}

	td {
		padding: 1.25rem;
		border-bottom: 1px solid #f8fafc;
		font-size: 0.95rem;
		color: #475569;
	}

	.name {
		font-weight: 700;
		color: #0f172a;
	}

	.role-tag {
		padding: 0.25rem 0.75rem;
		background: #eff6ff;
		color: #2563eb;
		border-radius: 99px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.phone {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.85rem;
	}

	/* Agenda Styles */
	.agenda-list {
		list-style: none;
		padding: 0;
		margin-top: 1rem;
	}

	.agenda-list li {
		padding: 0.5rem 0;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9rem;
		font-weight: 500;
		color: #475569;
	}

	.agenda-list li::before {
		content: '→';
		color: #3b82f6;
	}

	/* Footer */
	.principal-sign {
		text-align: right;
		border-top: 1px solid #f1f5f9;
		padding-top: 3rem;
	}

	.principal-sign p {
		font-size: 0.8rem;
		color: #94a3b8;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
	}

	.principal-sign strong {
		display: block;
		font-size: 1.25rem;
		color: #0f172a;
	}

	/* Responsive */
	@media (max-width: 860px) {
		.grid-layout { grid-template-columns: 1fr; gap: 4rem; }
		.vision-card, .mission-card { grid-column: span 6; }
		.hero { padding: 6rem 0 3rem; }
		h1 { font-size: 2.75rem; }
		.glass-container { padding: 1.5rem; }
	}
</style>
