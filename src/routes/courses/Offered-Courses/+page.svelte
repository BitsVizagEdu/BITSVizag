<script>
	import Seo from '$lib/components/Seo.svelte';
	import { onMount } from 'svelte';

	const ugPrograms = [
		{ name: 'B.Tech in Computer Science & Engg. (CSE)', intake: 360, icon: 'fa-solid fa-laptop-code' },
		{ name: 'B.Tech in CSE (Data Science)', intake: 180, icon: 'fa-solid fa-chart-pie' },
		{ name: 'B.Tech in CSE (AI & Machine Learning)', intake: 120, icon: 'fa-solid fa-robot' },
		{ name: 'B.Tech in Electronics & Comm. (ECE)', intake: 60, icon: 'fa-solid fa-microchip' },
		{ name: 'B.Tech in VLSI Design & Technology', intake: 60, icon: 'fa-solid fa-circuit-board' },
		{ name: 'Bachelor of Computer Applications (BCA)', intake: 180, icon: 'fa-solid fa-desktop' }
	];

	const pgPrograms = [
		{ name: 'Master of Business Administration (MBA)', intake: 300, icon: 'fa-solid fa-briefcase' },
		{ name: 'M.Tech in Computer Science & Engg.', intake: 18, icon: 'fa-solid fa-code' },
		{ name: 'M.Tech in VLSI & Embedded Systems', intake: 18, icon: 'fa-solid fa-microchip' },
		{ name: 'M.Tech in Power Systems (EEE)', intake: 18, icon: 'fa-solid fa-bolt' }
	];

	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<Seo 
	title="Courses Offered - BITS Vizag"
	description="Explore the wide range of undergraduate and postgraduate programs offered at BITS Vizag. Join us to shape your future."
/>

<div class="page-container">
	<div class="background-blobs">
		<div class="blob blob-1"></div>
		<div class="blob blob-2"></div>
		<div class="blob blob-3"></div>
	</div>

	<div class="content-wrapper {visible ? 'fade-in' : ''}">
		<header class="page-header">
			<h2 class="tagline">What starts <span>here</span>, holds the <span>future.</span></h2>
			<div class="badge-container">
				<span class="course-badge">COURSES OFFERED AT BABA</span>
			</div>
		</header>

		<div class="programs-grid">
			<!-- Undergraduate Programs -->
			<section class="program-section">
				<div class="section-header">
					<i class="fa-solid fa-user-graduate"></i>
					<h3>UNDERGRADUATE PROGRAMS</h3>
				</div>
				<div class="course-list">
					{#each ugPrograms as course}
						<div class="course-card">
							<div class="course-info">
								<div class="icon-box">
									<i class={course.icon}></i>
								</div>
								<span class="course-name">{course.name}</span>
							</div>
							<div class="intake-info">
								<span class="intake-label">INTAKE</span>
								<span class="intake-value">{course.intake}</span>
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Postgraduate Programs -->
			<section class="program-section">
				<div class="section-header">
					<i class="fa-solid fa-graduation-cap"></i>
					<h3>POSTGRADUATE PROGRAMS</h3>
				</div>
				<div class="course-list">
					{#each pgPrograms as course}
						<div class="course-card">
							<div class="course-info">
								<div class="icon-box">
									<i class={course.icon}></i>
								</div>
								<span class="course-name">{course.name}</span>
							</div>
							<div class="intake-info">
								<span class="intake-label">INTAKE</span>
								<span class="intake-value">{course.intake}</span>
							</div>
						</div>
					{/each}
				</div>

				<div class="counselling-code">
					<div class="code-box">
						<i class="fa-solid fa-graduation-cap"></i>
						<span>Counselling Code: <strong>BABA</strong></span>
					</div>
				</div>
			</section>
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
		background: #f8fafc;
		overflow: hidden;
		font-family: 'Outfit', 'Inter', sans-serif;
		padding: 4rem 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* Beautiful Background Blobs */
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
		opacity: 0.15;
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
		0% { transform: translate(0, 0) scale(1); }
		33% { transform: translate(30px, -50px) scale(1.1); }
		66% { transform: translate(-20px, 20px) scale(0.9); }
		100% { transform: translate(0, 0) scale(1); }
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
		margin-bottom: 3.5rem;
	}

	.tagline {
		font-size: 2.25rem;
		font-weight: 400;
		color: #1e293b;
		margin-bottom: 1.5rem;
	}

	.tagline span {
		font-weight: 800;
		color: #4f46e5;
	}

	.course-badge {
		background: #6366f1;
		color: white;
		padding: 0.6rem 1.5rem;
		border-radius: 999px;
		font-weight: 700;
		font-size: 0.9rem;
		letter-spacing: 0.05em;
		box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
	}

	.programs-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: start;
	}

	.program-section {
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.5);
		border-radius: 2rem;
		padding: 2.5rem;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 2rem;
		color: #4f46e5;
	}

	.section-header i {
		font-size: 1.25rem;
	}

	.section-header h3 {
		font-size: 1rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		margin: 0;
	}

	.course-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.course-card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: white;
		padding: 1.2rem 1.5rem;
		border-radius: 1.25rem;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
		transition: all 0.3s ease;
		border: 1px solid transparent;
	}

	.course-card:hover {
		transform: translateY(-3px) scale(1.02);
		box-shadow: 0 12px 25px rgba(0, 0, 0, 0.06);
		border-color: #6366f133;
	}

	.course-info {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.icon-box {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f1f5f9;
		color: #6366f1;
		border-radius: 0.75rem;
		font-size: 1rem;
	}

	.course-name {
		font-size: 0.95rem;
		font-weight: 600;
		color: #334155;
	}

	.intake-info {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		padding-left: 1rem;
	}

	.intake-label {
		font-size: 0.65rem;
		font-weight: 700;
		color: #94a3b8;
		letter-spacing: 0.05em;
	}

	.intake-value {
		font-size: 1.25rem;
		font-weight: 800;
		color: #6366f1;
		min-width: 2.5rem;
		text-align: right;
	}

	.counselling-code {
		margin-top: 2.5rem;
		display: flex;
		justify-content: center;
	}

	.code-box {
		background: #fffbeb;
		border: 1px solid #fde68a;
		padding: 0.8rem 1.5rem;
		border-radius: 1rem;
		color: #92400e;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1rem;
	}

	.code-box strong {
		color: #d97706;
		font-size: 1.2rem;
		font-weight: 900;
	}

	.accreditation-footer {
		margin-top: 4rem;
		text-align: center;
	}

	.footer-pills {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		background: rgba(255, 255, 255, 0.8);
		padding: 0.8rem 2rem;
		border-radius: 999px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
		font-size: 0.85rem;
		font-weight: 600;
		color: #64748b;
	}

	.separator {
		color: #cbd5e1;
	}

	@media (max-width: 1024px) {
		.programs-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.tagline {
			font-size: 1.75rem;
		}
	}

	@media (max-width: 640px) {
		.page-container {
			padding: 2rem 1rem;
		}

		.program-section {
			padding: 1.5rem;
		}

		.course-card {
			padding: 1rem;
		}

		.course-name {
			font-size: 0.85rem;
		}

		.intake-value {
			font-size: 1.1rem;
		}
		
		.footer-pills {
			flex-wrap: wrap;
			justify-content: center;
			gap: 0.5rem;
			border-radius: 1.5rem;
		}
		
		.separator {
			display: none;
		}
	}
</style>
