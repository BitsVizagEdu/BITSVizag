<script>
	import Seo from '$lib/components/Seo.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const bTechPrograms = [
		{
			sno: 1,
			estd: 2008,
			name: 'Computer Science & Engineering',
			intake: 180,
			slug: 'Department of CSE'
		},
		{
			sno: 2,
			estd: 2020,
			name: 'CSE - AI & Machine Learning',
			intake: 60,
			slug: 'Department of CSE (AI & ML)'
		},
		{
			sno: 3,
			estd: 2020,
			name: 'CSE - Cyber Security',
			intake: 60,
			slug: 'Department of CSE (Cyber Security)'
		},
		{
			sno: 4,
			estd: 2008,
			name: 'Electronics & Communication Engineering',
			intake: 120,
			slug: 'Department of ECE'
		},
		{
			sno: 5,
			estd: 2008,
			name: 'Electrical & Electronic Engineering',
			intake: 60,
			slug: 'Department of EEE'
		},
		{ sno: 6, estd: 2008, name: 'Mechanical Engineering', intake: 60, slug: 'Department of MECH' }
	];

	const pgPrograms = [
		{ sno: 1, duration: '2 Years', name: 'Master of Technology (M.Tech)', slug: null },
		{
			sno: 2,
			duration: '2 Years',
			name: 'Master of Business Administration (MBA)',
			slug: 'Department of MBA'
		}
	];

	let activeTab = 'btech';
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
	imageUrl="https://bitsvizag.com/bits.jpg"
	siteName="BITS Vizag"
/>

<div class="page-container">
	<div class="background-blobs">
		<div class="blob blob-1"></div>
		<div class="blob blob-2"></div>
		<div class="blob blob-3"></div>
	</div>

	<div class="content-wrapper {visible ? 'fade-in' : ''}">
		<header class="page-header">
			<h1>Courses Offered</h1>
			<p class="subtitle">Comprehensive Academic Offerings at BITS Vizag</p>
		</header>

		<div class="admission-section">
			<div class="admission-box">
				<div class="admission-icon">ⓘ</div>
				<div class="admission-text">
					<strong>Admission Allocation</strong>
					<p>
						70% seats allotted via EAPCET / ECET / PGECET / ICET. 30% seats earmarked for Management
						/ NRI Quota.
					</p>
				</div>
			</div>
		</div>

		<div class="tabs-container">
			<div class="tabs-nav">
				<button
					class="tab-btn {activeTab === 'btech' ? 'active' : ''}"
					on:click={() => (activeTab = 'btech')}
				>
					<span class="icon">🎓</span> B.Tech
				</button>
				<button
					class="tab-btn {activeTab === 'pg' ? 'active' : ''}"
					on:click={() => (activeTab = 'pg')}
				>
					<span class="icon">📚</span> PG Courses
				</button>
			</div>

			<div class="tab-content">
				{#if activeTab === 'btech'}
					<div class="course-section">
						<h2 class="section-title">
							<span class="icon">🎓</span>
							UNDERGRADUATE
							<span class="sub-title">Bachelor of Technology (B.Tech)</span>
						</h2>
						<div class="table-wrapper">
							<table class="courses-table">
								<thead>
									<tr>
										<th>S. NO</th>
										<th>ESTD.</th>
										<th>COURSE SPECIALIZATION</th>
										<th>INTAKE</th>
									</tr>
								</thead>
								<tbody>
									{#each bTechPrograms as course}
										<tr class="course-row" on:click={() => navigateToCourse(course.slug)}>
											<td>{course.sno}</td>
											<td>{course.estd}</td>
											<td class="course-name-cell">{course.name}</td>
											<td class="intake-cell"><span class="intake-badge">{course.intake}</span></td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				{:else if activeTab === 'pg'}
					<div class="course-section">
						<h2 class="section-title">
							<span class="icon">📚</span>
							POSTGRADUATE
							<span class="sub-title"
								>Master of Technology (M.Tech) and Master of Business Administration (MBA)</span
							>
						</h2>
						<div class="table-wrapper">
							<table class="courses-table">
								<thead>
									<tr>
										<th>S. NO</th>
										<th>DURATION</th>
										<th>COURSE SPECIALIZATION</th>
										<th>ACTION</th>
									</tr>
								</thead>
								<tbody>
									{#each pgPrograms as course}
										<tr
											class="course-row {course.slug ? 'is-clickable' : 'is-static'}"
											on:click={() => navigateToCourse(course.slug)}
										>
											<td>{course.sno}</td>
											<td>{course.duration}</td>
											<td class="course-name-cell">{course.name}</td>
											<td class="intake-cell">
												{#if course.slug}
													<span class="action-chip">Explore Department</span>
												{:else}
													<span class="action-chip static">Info Only</span>
												{/if}
											</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				{/if}
			</div>
		</div>

		<div class="counselling-code-section">
			<div class="code-box">
				<span class="code-label">Counselling Code:</span> <strong class="code-value">BABA</strong>
			</div>
		</div>

		<footer class="accreditation-footer">
			<div class="footer-pills">
				<span>UGC Autonomous</span>
				<span class="separator">|</span>
				<span>NAAC 'A'</span>
				<span class="separator">|</span>
				<span>JNTU-GV Affiliated</span>
			</div>
		</footer>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.page-container {
		position: relative;
		min-height: 100vh;
		background: linear-gradient(135deg, #1a1f3a 0%, #16213e 100%);
		overflow: hidden;
		font-family: 'Inter', 'Satoshi', sans-serif;
		padding: 3rem 2rem;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.background-blobs {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		overflow: hidden;
	}

	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.08;
		animation: blob-float 20s infinite alternate;
	}

	.blob-1 {
		width: 500px;
		height: 500px;
		background: #4f46e5;
		top: -100px;
		left: -100px;
	}

	.blob-2 {
		width: 400px;
		height: 400px;
		background: #ec4899;
		bottom: -50px;
		right: -50px;
		animation-delay: -5s;
	}

	.blob-3 {
		width: 300px;
		height: 300px;
		background: #fbbf24;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation-delay: -10s;
	}

	@keyframes blob-float {
		0% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(30px, -50px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
		}
		100% {
			transform: translate(0, 0) scale(1);
		}
	}

	.content-wrapper {
		position: relative;
		z-index: 1;
		width: 100%;
		max-width: 1200px;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.content-wrapper.fade-in {
		opacity: 1;
		transform: translateY(0);
	}

	.page-header {
		text-align: center;
		margin-bottom: 2rem;
		padding: 3rem 0;
		background: linear-gradient(180deg, #1e3c72 0%, rgba(30, 60, 114, 0) 100%);
		border-radius: 0.5rem;
	}

	.page-header h1 {
		font-size: 3rem;
		font-weight: 900;
		color: #fbbf24;
		margin: 0;
		letter-spacing: -0.02em;
		font-family: 'Inter', 'Satoshi', sans-serif;
	}

	.subtitle {
		font-size: 1.1rem;
		color: #cbd5e1;
		margin: 0.5rem 0 0 0;
		font-weight: 500;
		letter-spacing: 0.02em;
	}

	.admission-section {
		margin: 2rem 0;
		padding: 1.5rem;
		background: #fffbeb;
		border-left: 4px solid #fbbf24;
		border-radius: 0.5rem;
	}

	.admission-box {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.admission-icon {
		width: 40px;
		height: 40px;
		background: #fbbf24;
		color: #92400e;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 900;
		font-size: 1.2rem;
		flex-shrink: 0;
	}

	.admission-text {
		color: #92400e;
	}

	.admission-text strong {
		display: block;
		font-size: 1rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.admission-text p {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.tabs-container {
		background: white;
		border-radius: 0.75rem;
		overflow: hidden;
		margin: 2rem 0;
	}

	.tabs-nav {
		display: flex;
		flex-wrap: wrap;
		background: #f8fafc;
		border-bottom: 2px solid #e2e8f0;
		padding: 0.5rem;
		gap: 0.5rem;
	}

	.tab-btn {
		padding: 0.75rem 1.25rem;
		border: none;
		background: white;
		color: #64748b;
		font-weight: 600;
		font-size: 0.95rem;
		cursor: pointer;
		border-radius: 0.5rem;
		transition: all 0.3s ease;
		font-family: 'Inter', 'Satoshi', sans-serif;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		white-space: nowrap;
	}

	.tab-btn:hover {
		background: #eff6ff;
		color: #1e40af;
	}

	.tab-btn.active {
		background: #1e40af;
		color: white;
		box-shadow: 0 4px 12px rgba(30, 64, 175, 0.2);
	}

	.tab-btn .icon {
		font-size: 1.1rem;
	}

	.tab-content {
		padding: 2rem;
	}

	.course-section {
		animation: fadeIn 0.3s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.section-title {
		font-size: 1.4rem;
		font-weight: 700;
		color: #1e40af;
		margin: 0 0 1.5rem 0;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-family: 'Inter', 'Satoshi', sans-serif;
	}

	.section-title .icon {
		font-size: 1.5rem;
	}

	.section-title .sub-title {
		display: block;
		font-size: 0.85rem;
		font-weight: 500;
		color: #64748b;
		margin-left: auto;
	}

	.table-wrapper {
		overflow-x: auto;
	}

	.courses-table {
		width: 100%;
		border-collapse: collapse;
		background: white;
	}

	.courses-table thead tr {
		background: #1e293b;
		color: white;
	}

	.courses-table th {
		padding: 1rem;
		text-align: left;
		font-weight: 700;
		font-size: 0.85rem;
		letter-spacing: 0.05em;
		border: none;
		font-family: 'Inter', 'Satoshi', sans-serif;
	}

	.courses-table tbody tr {
		border-bottom: 1px solid #e2e8f0;
		transition: all 0.3s ease;
	}

	.courses-table tbody tr:hover {
		background: #f0f9ff;
		transform: scale(1.01);
	}

	.course-row.is-clickable {
		cursor: pointer;
	}

	.course-row.is-static {
		cursor: default;
	}

	.courses-table td {
		padding: 1rem;
		font-size: 0.95rem;
		color: #334155;
		font-family: 'Inter', 'Satoshi', sans-serif;
	}

	.course-name-cell {
		font-weight: 600;
		color: #1e40af;
	}

	.intake-cell {
		text-align: right;
	}

	.action-chip {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.35rem 0.75rem;
		border-radius: 999px;
		background: #dbeafe;
		color: #1d4ed8;
		font-size: 0.8rem;
		font-weight: 700;
		border: 1px solid #93c5fd;
	}

	.action-chip.static {
		background: #f1f5f9;
		border-color: #cbd5e1;
		color: #64748b;
	}

	.intake-badge {
		background: #fef3c7;
		color: #92400e;
		padding: 0.4rem 0.9rem;
		border-radius: 999px;
		font-weight: 700;
		font-size: 0.95rem;
		display: inline-block;
		border: 1px solid #fcd34d;
	}

	.counselling-code-section {
		text-align: center;
		margin: 2rem 0;
	}

	.code-box {
		background: #fffbeb;
		border: 2px solid #fbbf24;
		padding: 1rem 2rem;
		border-radius: 0.75rem;
		color: #92400e;
		display: inline-block;
		font-size: 1rem;
		font-weight: 600;
	}

	.code-label {
		font-weight: 600;
	}

	.code-value {
		font-size: 1.3rem;
		color: #d97706;
		margin-left: 0.5rem;
	}

	.accreditation-footer {
		margin-top: 3rem;
		text-align: center;
	}

	.footer-pills {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		background: rgba(255, 255, 255, 0.1);
		padding: 0.8rem 2rem;
		border-radius: 999px;
		font-size: 0.85rem;
		font-weight: 600;
		color: #cbd5e1;
	}

	.separator {
		color: #475569;
	}

	@media (max-width: 768px) {
		.page-container {
			padding: 1.5rem 1rem;
		}

		.page-header {
			padding: 2rem 1rem;
		}

		.page-header h1 {
			font-size: 2.25rem;
			text-align: center;
		}

		.subtitle {
			font-size: 1rem;
			text-align: center;
		}

		.admission-box {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.admission-icon {
			margin-bottom: 0.5rem;
		}

		.tabs-nav {
			flex-wrap: nowrap;
			overflow-x: auto;
			-webkit-overflow-scrolling: touch;
			justify-content: flex-start;
			padding-bottom: 0.75rem;
		}

		.tab-btn {
			padding: 0.65rem 1.1rem;
			font-size: 0.85rem;
		}

		.tab-content {
			padding: 1.5rem 0.75rem;
		}

		.section-title {
			font-size: 1.25rem;
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 0.5rem;
		}

		.section-title .sub-title {
			margin-left: 0;
			text-align: center;
		}

		.courses-table th,
		.courses-table td {
			padding: 0.75rem 0.5rem;
			font-size: 0.82rem;
		}

		.footer-pills {
			padding: 0.75rem 1.25rem;
			font-size: 0.75rem;
			flex-wrap: wrap;
			justify-content: center;
		}
	}

	@media (max-width: 480px) {
		.page-header h1 {
			font-size: 1.75rem;
		}

		.tab-btn .icon {
			display: none;
		}

		.tab-btn {
			padding: 0.6rem 0.8rem;
			font-size: 0.8rem;
		}

		.courses-table {
			font-size: 0.8rem;
		}

		.courses-table th,
		.courses-table td {
			padding: 0.5rem;
		}

		.intake-badge {
			font-size: 0.85rem;
			padding: 0.3rem 0.7rem;
		}
	}
</style>
