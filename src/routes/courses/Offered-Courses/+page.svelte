<script>
	import Seo from '$lib/components/Seo.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const bTechPrograms = [
		{
			sno: 1,
			estd: 2008,
			name: 'Computer Science & Engineering',
			intake: 240,
			slug: 'Department of CSE'
		},
		{
			sno: 2,
			estd: 2024,
			name: 'AI & Machine Learning',
			intake: 120,
			slug: 'Department of CSE (AI & ML)'
		},
		{
			sno: 3,
			estd: 2024,
			name: 'Cyber Security',
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
			<div class="dot-grid-overlay"></div>
			<div class="right-circle-overlay"></div>
			<div class="header-glow"></div>

			<div class="header-icon-badge">
				<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
					<path
						d="M4.14 12.18L12 16.47l7.86-4.29c.12-.06.14-.23.03-.32l-1.07-.86L12 14.86l-6.82-3.72-1.07.86c-.11.09-.09.26.03.32z"
					/>
				</svg>
			</div>

			<h1 class="page-title">Courses <span class="gold-text">Offered</span></h1>

			<div class="gold-divider">
				<span class="divider-line"></span>
				<span class="divider-diamond"></span>
				<span class="divider-line"></span>
			</div>

			<p class="subtitle">Comprehensive Academic Offerings at BITS Vizag</p>
		</header>

		<div class="admission-section">
			<div class="admission-box">
				<div class="info-icon-badge">
					<span class="info-symbol">i</span>
				</div>
				<div class="admission-content">
					<h3 class="admission-title">Admission Allocation</h3>
					<div class="title-underline"></div>
					<p class="admission-desc">
						70% seats allotted via EAPCET / ECET / PGECET / ICET.<br />
						30% seats earmarked for Management / NRI Quota.
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
					<svg class="tab-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 14l9-5-9-5-9 5 9 5z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
						/>
					</svg>
					B.Tech Specializations
					{#if activeTab === 'btech'}
						<div class="active-indicator">
							<span class="indicator-blue"></span>
							<span class="indicator-gold"></span>
						</div>
					{/if}
				</button>
				<button
					class="tab-btn {activeTab === 'pg' ? 'active' : ''}"
					on:click={() => (activeTab = 'pg')}
				>
					<svg class="tab-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
						/>
					</svg>
					Postgraduate Programs
					{#if activeTab === 'pg'}
						<div class="active-indicator">
							<span class="indicator-blue"></span>
							<span class="indicator-gold"></span>
						</div>
					{/if}
				</button>
			</div>

			<div class="tab-content">
				{#if activeTab === 'btech'}
					<div class="course-section">
						<div class="section-title-wrap">
							<div class="title-left">
								<div class="title-icon-bubble">
									<svg
										class="w-5 h-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
										/>
									</svg>
								</div>
								<h2 class="section-title">Undergraduate Programs</h2>
							</div>
							<span class="duration-badge">
								<svg
									class="w-4 h-4 mr-1.5 text-slate-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								Bachelor of Technology (4 Years)
							</span>
						</div>
						<div class="table-wrapper">
							<table class="courses-table">
								<thead>
									<tr>
										<th>S. NO</th>
										<th>ESTD.</th>
										<th>COURSE SPECIALIZATION</th>
										<th class="intake-header">INTAKE</th>
									</tr>
								</thead>
								<tbody>
									{#each bTechPrograms as course}
										<tr class="course-row" on:click={() => navigateToCourse(course.slug)}>
											<td class="sno-cell">{course.sno}</td>
											<td class="estd-cell">{course.estd}</td>
											<td class="course-name-cell">
												<div class="course-name-wrap">
													<div class="course-icon-bubble">
														{#if course.sno === 1}
															<!-- Computer Science Monitor Icon -->
															<svg
																class="w-5 h-5"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																stroke-width="2"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
																/>
															</svg>
														{:else if course.sno === 2}
															<!-- AI Brain Icon -->
															<svg
																class="w-5 h-5"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																stroke-width="2"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
																/>
															</svg>
														{:else if course.sno === 3}
															<!-- Cyber Security Shield/Lock Icon -->
															<svg
																class="w-5 h-5"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																stroke-width="2"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
																/>
															</svg>
														{:else if course.sno === 4}
															<!-- Chip/Processor Icon -->
															<svg
																class="w-5 h-5"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																stroke-width="2"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
																/>
															</svg>
														{:else if course.sno === 5}
															<!-- Lightning Bolt Icon -->
															<svg
																class="w-5 h-5"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																stroke-width="2"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M13 10V3L4 14h7v7l9-11h-7z"
																/>
															</svg>
														{:else if course.sno === 6}
															<!-- Gear/Mechanical Icon -->
															<svg
																class="w-5 h-5"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																stroke-width="2"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
																/>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
																/>
															</svg>
														{/if}
													</div>
													<span class="course-name">{course.name}</span>
												</div>
											</td>
											<td class="intake-cell"><span class="intake-badge">{course.intake}</span></td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				{:else if activeTab === 'pg'}
					<div class="course-section">
						<div class="section-title-wrap">
							<div class="title-left">
								<div class="title-icon-bubble">
									<svg
										class="w-5 h-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
										/>
									</svg>
								</div>
								<h2 class="section-title">Postgraduate Programs</h2>
							</div>
							<span class="duration-badge">
								<svg
									class="w-4 h-4 mr-1.5 text-slate-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
								M.Tech & MBA (2 Years)
							</span>
						</div>
						<div class="table-wrapper">
							<table class="courses-table">
								<thead>
									<tr>
										<th>S. NO</th>
										<th>DURATION</th>
										<th>COURSE SPECIALIZATION</th>
										<th class="intake-header">ACTION</th>
									</tr>
								</thead>
								<tbody>
									{#each pgPrograms as course}
										<tr
											class="course-row {course.slug ? 'is-clickable' : 'is-static'}"
											on:click={() => navigateToCourse(course.slug)}
										>
											<td class="sno-cell">{course.sno}</td>
											<td class="estd-cell">{course.duration}</td>
											<td class="course-name-cell">
												<div class="course-name-wrap">
													<div class="course-icon-bubble">
														{#if course.sno === 1}
															<!-- Academic cap outline -->
															<svg
																class="w-5 h-5"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																stroke-width="2"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M12 14l9-5-9-5-9 5 9 5z"
																/>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
																/>
															</svg>
														{:else if course.sno === 2}
															<!-- Briefcase/MBA Icon -->
															<svg
																class="w-5 h-5"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																stroke-width="2"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4.67 12.89a3 3 0 11-5.34 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																/>
															</svg>
														{/if}
													</div>
													<span class="course-name">{course.name}</span>
												</div>
											</td>
											<td class="intake-cell">
												{#if course.slug}
													<span class="action-chip clickable">Explore Department</span>
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
				<div class="code-box-glow"></div>
				<span class="code-label">Counselling Code</span>
				<strong class="code-value">BABA</strong>
			</div>
		</div>

		<footer class="accreditation-footer">
			<div class="footer-pills">
				<span>UGC Autonomous</span>
				<span class="separator">|</span>
				<span>NAAC 'A' Grade</span>
				<span class="separator">|</span>
				<span>JNTU-GV Affiliated</span>
			</div>
		</footer>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

	:global(body) {
		margin: 0;
		padding: 0;
	}

	.page-container {
		position: relative;
		min-height: 100vh;
		background: radial-gradient(circle at 50% 0%, #111827 0%, #030712 100%);
		overflow: hidden;
		font-family: 'Inter', 'Poppins', sans-serif;
		padding: 4rem 2rem;
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
		pointer-events: none;
	}

	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.12;
		animation: blob-float 22s infinite alternate;
	}

	.blob-1 {
		width: 600px;
		height: 600px;
		background: #3b82f6;
		top: -150px;
		left: -150px;
	}

	.blob-2 {
		width: 500px;
		height: 500px;
		background: #fbbf24;
		bottom: -100px;
		right: -100px;
		animation-delay: -6s;
	}

	.blob-3 {
		width: 400px;
		height: 400px;
		background: #10b981;
		top: 40%;
		left: 55%;
		transform: translate(-50%, -50%);
		animation-delay: -11s;
		opacity: 0.06;
	}

	@keyframes blob-float {
		0% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(40px, -60px) scale(1.12);
		}
		66% {
			transform: translate(-30px, 30px) scale(0.92);
		}
		100% {
			transform: translate(0, 0) scale(1);
		}
	}

	.content-wrapper {
		position: relative;
		z-index: 1;
		width: 100%;
		max-width: 1000px;
		opacity: 0;
		transform: translateY(24px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.content-wrapper.fade-in {
		opacity: 1;
		transform: translateY(0);
	}

	/* Ultra-premium page header banner perfectly styled as screenshot */
	.page-header {
		position: relative;
		text-align: center;
		margin-bottom: 2.5rem;
		padding: 3.5rem 2rem 3rem 2rem;
		background: linear-gradient(135deg, #021a44 0%, #000c24 100%);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 1.5rem;
		box-shadow:
			0 20px 45px -15px rgba(0, 0, 0, 0.6),
			inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
		overflow: hidden;
	}

	.header-glow {
		position: absolute;
		top: -50px;
		left: -50px;
		width: 350px;
		height: 350px;
		background: radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%);
		pointer-events: none;
	}

	.dot-grid-overlay {
		position: absolute;
		left: 4%;
		top: 50%;
		transform: translateY(-50%);
		width: 72px;
		height: 96px;
		background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px);
		background-size: 14px 14px;
		opacity: 0.7;
		pointer-events: none;
	}

	.right-circle-overlay {
		position: absolute;
		right: -10%;
		bottom: -40%;
		width: 380px;
		height: 380px;
		border-radius: 50%;
		background: radial-gradient(circle at center, rgba(15, 52, 122, 0.35) 0%, transparent 80%);
		pointer-events: none;
	}

	.header-icon-badge {
		margin: 0 auto;
		width: 56px;
		height: 56px;
		background: rgba(15, 32, 67, 0.6);
		border: 1.5px solid rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #e0a92e;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
	}

	.page-title {
		font-family: 'Playfair Display', 'Lora', 'Georgia', serif;
		font-size: clamp(2.5rem, 5.5vw, 4rem);
		font-weight: 700;
		color: #ffffff;
		margin: 1.25rem 0 0.5rem 0;
		letter-spacing: -0.01em;
		line-height: 1.2;
	}

	.gold-text {
		color: #e0a92e;
	}

	/* Gold divider matching the image */
	.gold-divider {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.25rem;
		margin: 0.75rem auto 1.5rem auto;
		max-width: 320px;
	}

	.divider-line {
		flex: 1;
		height: 1px;
		background: linear-gradient(90deg, transparent, #e0a92e 50%, transparent);
		opacity: 0.6;
	}

	.divider-diamond {
		width: 6px;
		height: 6px;
		background-color: #e0a92e;
		transform: rotate(45deg);
		flex-shrink: 0;
	}

	.subtitle {
		font-size: 1.15rem;
		color: #cbd5e1;
		margin: 0;
		font-weight: 500;
		letter-spacing: 0.01em;
	}

	/* High-end styled admission allocation alert */
	.admission-section {
		margin: 2rem 0;
	}

	.admission-box {
		display: flex;
		gap: 1.5rem;
		align-items: center;
		background: #fffdf5;
		border: 1px solid rgba(226, 163, 44, 0.2);
		border-left: 5px solid #e2a32c;
		border-radius: 0.75rem;
		padding: 1.75rem 2rem;
		box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.admission-box:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.2);
	}

	.info-icon-badge {
		width: 54px;
		height: 54px;
		background: #fcecb4;
		border: 2px solid #e5a93c;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		box-shadow: 0 4px 10px rgba(229, 169, 60, 0.2);
	}

	.info-symbol {
		font-family: 'Georgia', serif;
		font-size: 1.85rem;
		font-weight: 700;
		color: #b27a1e;
		line-height: 1;
		margin-top: -2px;
	}

	.admission-content {
		flex-grow: 1;
	}

	.admission-title {
		font-family: 'Playfair Display', 'Georgia', serif;
		font-size: 1.25rem;
		font-weight: 800;
		color: #0c1b40;
		margin: 0;
	}

	.title-underline {
		width: 42px;
		height: 2px;
		background-color: #e2a32c;
		margin: 0.35rem 0 0.65rem 0;
	}

	.admission-desc {
		margin: 0;
		font-family: 'Inter', sans-serif;
		font-size: 0.95rem;
		font-weight: 500;
		color: #2c3a58;
		line-height: 1.6;
	}

	/* Light Bento Box Tabs & Table System styled exactly like screenshot */
	.tabs-container {
		background: #ffffff;
		border: 1.5px solid #e2e8f0;
		border-radius: 1rem;
		overflow: hidden;
		margin: 2.5rem 0;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
	}

	.tabs-nav {
		display: flex;
		background: #f8fafc;
		border-bottom: 1px solid #e2e8f0;
		padding: 0;
	}

	.tab-btn {
		flex: 1;
		padding: 1.25rem 2rem;
		border: none;
		background: transparent;
		color: #64748b;
		font-weight: 700;
		font-size: 1rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		position: relative;
		transition: all 0.25s ease;
		font-family: 'Inter', 'Poppins', sans-serif;
	}

	.tab-btn:hover {
		color: #0f2249;
		background: rgba(15, 34, 73, 0.02);
	}

	.tab-btn.active {
		background: #ffffff;
		color: #0f2249;
		font-weight: 800;
	}

	/* Double indicator underline */
	.active-indicator {
		position: absolute;
		bottom: -1.5px;
		left: 0;
		right: 0;
		height: 3px;
		display: flex;
	}

	.indicator-blue {
		flex: 1;
		background-color: #0f2249;
	}

	.indicator-gold {
		flex: 1;
		background-color: #e0a92e;
	}

	.tab-icon {
		width: 20px;
		height: 20px;
		color: currentColor;
	}

	.tab-content {
		padding: 2.25rem;
	}

	.course-section {
		animation: reveal 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@keyframes reveal {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.section-title-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid #f1f5f9;
		padding-bottom: 1.25rem;
	}

	.title-left {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.title-icon-bubble {
		width: 42px;
		height: 42px;
		background: #fff8eb;
		border: 1px solid #fde047;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #e0a92e;
		flex-shrink: 0;
	}

	.section-title {
		font-size: 1.5rem;
		font-weight: 800;
		color: #0e214d;
		margin: 0;
		letter-spacing: -0.01em;
	}

	.duration-badge {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 1.25rem;
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 999px;
		color: #475569;
		font-size: 0.88rem;
		font-weight: 700;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
	}

	.table-wrapper {
		overflow-x: auto;
		border-radius: 0.75rem;
		border: 1px solid #e2e8f0;
		background: #ffffff;
	}

	.courses-table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}

	.courses-table thead tr {
		background: #ffffff;
		border-bottom: 1px solid #e2e8f0;
	}

	.courses-table th {
		padding: 1.1rem 1.5rem;
		font-weight: 800;
		font-size: 0.8rem;
		letter-spacing: 0.08em;
		color: #3b4e75;
		text-transform: uppercase;
	}

	.courses-table tbody tr {
		border-bottom: 1px solid #f1f5f9;
		transition: all 0.25s ease;
	}

	.courses-table tbody tr:last-child {
		border-bottom: none;
	}

	.courses-table tbody tr.course-row {
		cursor: pointer;
	}

	.courses-table tbody tr.course-row:hover {
		background: #fafafa;
	}

	.courses-table td {
		padding: 1.1rem 1.5rem;
		font-size: 0.95rem;
		color: #475569;
		vertical-align: middle;
	}

	.sno-cell {
		font-weight: 800;
		color: #0e214d;
		width: 10%;
	}

	.estd-cell {
		font-weight: 600;
		color: #94a3b8;
		width: 15%;
	}

	.course-name-cell {
		width: 55%;
	}

	.course-name-wrap {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}

	.course-icon-bubble {
		width: 38px;
		height: 38px;
		background: #fff8eb;
		border: 1px solid #fde047;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #e0a92e;
		flex-shrink: 0;
	}

	.course-name {
		font-weight: 700;
		color: #0e214d;
		transition: color 0.2s ease;
	}

	.course-row:hover .course-name {
		color: #e0a92e;
	}

	.intake-header {
		text-align: right;
		width: 20%;
	}

	.intake-cell {
		text-align: right;
		width: 20%;
	}

	.intake-badge {
		background: #fffbeb;
		color: #e0a92e;
		border: 1.5px solid #fde047;
		padding: 0.45rem 1.25rem;
		border-radius: 999px;
		font-weight: 800;
		font-size: 0.92rem;
		display: inline-block;
		box-shadow: 0 2px 5px rgba(224, 169, 46, 0.05);
		transition: all 0.2s ease;
	}

	.course-row:hover .intake-badge {
		transform: scale(1.03);
		box-shadow: 0 4px 10px rgba(224, 169, 46, 0.15);
	}

	/* Action Chips for PG Table */
	.action-chip {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.45rem 1.1rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.02em;
		transition: all 0.25s ease;
	}

	.action-chip.clickable {
		background: #eff6ff;
		color: #3b82f6;
		border: 1.5px solid #dbeafe;
	}

	.course-row:hover .action-chip.clickable {
		background: #3b82f6;
		color: #ffffff;
		border-color: #3b82f6;
		box-shadow: 0 4px 10px rgba(59, 130, 246, 0.25);
	}

	.action-chip.static {
		background: #f1f5f9;
		border: 1.5px solid #e2e8f0;
		color: #64748b;
	}

	/* High-end Counselling code segment */
	.counselling-code-section {
		text-align: center;
		margin: 2.5rem 0;
	}

	.code-box {
		position: relative;
		background: rgba(30, 41, 59, 0.45);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(251, 191, 36, 0.18);
		padding: 1.1rem 2.25rem;
		border-radius: 1.5rem;
		color: #94a3b8;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		box-shadow:
			0 20px 40px -15px rgba(0, 0, 0, 0.4),
			inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
		overflow: hidden;
	}

	.code-box-glow {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, transparent, #fbbf24, transparent);
	}

	.code-label {
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.8rem;
		color: #94a3b8;
	}

	.code-value {
		font-size: 1.45rem;
		font-weight: 900;
		color: #fbbf24;
		letter-spacing: 0.05em;
		text-shadow: 0 0 12px rgba(251, 191, 36, 0.35);
	}

	/* Premium Footer Accreditation grid */
	.accreditation-footer {
		margin-top: 3.5rem;
		text-align: center;
	}

	.footer-pills {
		display: inline-flex;
		align-items: center;
		gap: 1.25rem;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.05);
		padding: 0.9rem 2.25rem;
		border-radius: 999px;
		font-size: 0.82rem;
		font-weight: 700;
		letter-spacing: 0.03em;
		color: #64748b;
		box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.02);
	}

	.separator {
		color: rgba(255, 255, 255, 0.08);
	}

	/* Mobile responsive optimization */
	@media (max-width: 768px) {
		.page-container {
			padding: 2rem 1rem;
		}

		.page-header {
			padding: 2.5rem 1.25rem;
			margin-bottom: 2rem;
		}

		.page-title {
			font-size: 2.15rem;
		}

		.subtitle {
			font-size: 0.95rem;
		}

		.admission-box {
			flex-direction: column;
			align-items: flex-start;
			padding: 1.25rem;
		}

		.tabs-nav {
			flex-wrap: nowrap;
			overflow-x: auto;
			-webkit-overflow-scrolling: touch;
			padding: 0.5rem;
		}

		.tab-btn {
			padding: 0.75rem 1.1rem;
			font-size: 0.85rem;
			flex-shrink: 0;
		}

		.tab-content {
			padding: 1.5rem 1rem;
		}

		.section-title-wrap {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}

		.duration-badge {
			align-self: flex-start;
		}

		.courses-table th,
		.courses-table td {
			padding: 1rem 0.75rem;
			font-size: 0.86rem;
		}

		.course-name-cell {
			width: 50%;
		}

		.intake-cell,
		.intake-header {
			width: 25%;
		}

		.footer-pills {
			padding: 0.75rem 1.5rem;
			font-size: 0.74rem;
			flex-wrap: wrap;
			justify-content: center;
			gap: 0.75rem;
			border-radius: 1.5rem;
		}

		.footer-pills .separator {
			display: none;
		}
	}

	@media (max-width: 480px) {
		.page-title {
			font-size: 1.85rem;
		}

		.tab-btn {
			flex: 1;
			font-size: 0.8rem;
			padding: 0.65rem 0.8rem;
		}

		.tab-icon {
			display: none;
		}

		.courses-table th {
			font-size: 0.7rem;
		}

		.courses-table td {
			font-size: 0.82rem;
		}

		.estd-cell {
			display: none;
		}

		.intake-badge {
			font-size: 0.8rem;
			padding: 0.3rem 0.75rem;
		}
	}
</style>
