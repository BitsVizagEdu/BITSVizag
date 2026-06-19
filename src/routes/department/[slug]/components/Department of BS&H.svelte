<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import HodMessage from '$lib/components/HodMessage.svelte';

	const navItems = [
		{ id: 'about', label: 'About', color: '#4f46e5' },
		{ id: 'vision', label: 'Vision', color: '#6366f1' },
		{ id: 'labs', label: 'Labs', color: '#4338ca' },
		{ id: 'faculty', label: 'Faculty', color: '#3730a3' },
		{ id: 'hod', label: 'HOD', color: '#312e81' },
		{ id: 'contact', label: 'Contact', color: '#1e1b4b' }
	];

	const stats = [
		{ key: 'Faculty', value: '14+', color: '#4f46e5' },
		{ key: 'Labs', value: '10+', color: '#4338ca' }
	];

	const facultyRows = [
		{
			name: 'Dr. Dusi Narasimha Murty',
			role: 'Associate Professor',
			exp: '15+ Years',
			qual: 'Ph.D',
			mobile: '9398688852'
		},
		{
			name: 'Dr. Jayarangarao Prathipati',
			role: 'Associate Professor',
			exp: '32+ Years',
			qual: 'Ph.D',
			mobile: '9885597842'
		},
		{
			name: 'Dr. Ganduri Uma Sankar',
			role: 'Associate Professor',
			exp: '15+ Years',
			qual: 'Ph.D',
			mobile: '9885056352'
		},
		{
			name: 'Dr. Paromita Mukherjee',
			role: 'Associate Professor',
			exp: '11+ Years',
			qual: 'Ph.D',
			mobile: '9313184040'
		},
		{
			name: 'Dr. Samareddy Sravan Kumar',
			role: 'Associate Professor',
			exp: '15+ Years',
			qual: 'Ph.D',
			mobile: '9494369900'
		},
		{
			name: 'Mr. Palla Venkata Murali',
			role: 'Associate Professor',
			exp: '25+ Years',
			qual: 'M.A., B.Ed., Ph.D',
			mobile: '9492535197'
		},
		{
			name: 'Dr. Gandham Suneetha Rani',
			role: 'Associate Professor',
			exp: '13+ Years',
			qual: 'Ph.D',
			mobile: '8008506949'
		},
		{
			name: 'Ms. Kathula Serisha',
			role: 'Assistant Professor',
			exp: '15+ Years',
			qual: 'M.Sc., M.Tech',
			mobile: '9440938025'
		},
		{
			name: 'Mr. Gollamandala Noel',
			role: 'Assistant Professor',
			exp: '5+ Years',
			qual: 'M.Sc',
			mobile: '7989675577'
		},
		{
			name: 'Ms. Gottumukkala Jyothi',
			role: 'Assistant Professor',
			exp: '15+ Years',
			qual: 'M.Phil., M.Sc',
			mobile: '9989609399'
		},
		{
			name: 'Ms. Kamada Piyali Varma',
			role: 'Assistant Professor',
			exp: '20+ Years',
			qual: 'M.A',
			mobile: '9642932971'
		},
		{
			name: 'Ms. Lanka Priyanka',
			role: 'Assistant Professor',
			exp: '10+ Years',
			qual: 'M.Sc',
			mobile: '8074127417'
		},
		{
			name: 'Ms. Mondi Mounika',
			role: 'Assistant Professor',
			exp: '9+ Years',
			qual: 'M.Sc., B.Ed',
			mobile: '9515099654'
		},
		{
			name: 'Mr. Palakollu Mahesh',
			role: 'Assistant Professor',
			exp: '18+ Years',
			qual: 'Ph.D., M.Phil., M.Sc',
			mobile: '9866358722'
		},
		{
			name: 'Mr. Pulli Eswararao',
			role: 'Assistant Professor',
			exp: '5+ Years',
			qual: 'M.Sc',
			mobile: '9705059627'
		},
		{
			name: 'Ms. Pydikondala Surya Kumari',
			role: 'Assistant Professor',
			exp: '16+ Years',
			qual: 'M.Sc',
			mobile: '9951934411'
		},
		{
			name: 'Ms. Sriperembudhuru Sowmya Latha',
			role: 'Assistant Professor',
			exp: '5+ Years',
			qual: 'M.Sc',
			mobile: '9848585013'
		},
		{
			name: 'Ms. Sukka Venkatakavitha',
			role: 'Assistant Professor',
			exp: '13+ Years',
			qual: 'M.Sc., B.Ed., Ph.D',
			mobile: '9985388148'
		},
		{
			name: 'Mr. Yarra Appalaraju',
			role: 'Assistant Professor',
			exp: '5+ Years',
			qual: 'M.Sc',
			mobile: '8500337689'
		},
		{
			name: 'Ms. Vidhyarani Mehar',
			role: 'Assistant Professor',
			exp: '5+ Years',
			qual: 'M.Sc',
			mobile: '6301298509'
		},
		{
			name: 'Mr. Aratikatla Pydi Raju',
			role: 'Chief Librarian',
			exp: '15+ Years',
			qual: 'M.A., M.L.I.Sc., M.Ed',
			mobile: '7893429433'
		},
		{
			name: 'Mr. Choppa Chandra Sekhar',
			role: 'Physical Director',
			exp: '15+ Years',
			qual: 'M.P.Ed',
			mobile: '9885075455'
		}
	];

	const labCategories = [
		{
			name: 'Core Sciences',
			color: '#4f46e5',
			labs: ['Physics Lab', 'Chemistry Lab', 'Environmental Engineering Lab'],
			desc: 'Fundamental science exploration.'
		},
		{
			name: 'Humanities & Skills',
			color: '#6366f1',
			labs: ['English & Communication Lab', 'Language Lab', 'Department Library'],
			desc: 'Communication & soft skills.'
		},
		{
			name: 'Engineering Skills',
			color: '#4338ca',
			labs: ['Engineering Drawing Lab', 'Material Science Lab', 'Computer Simulation Lab'],
			desc: 'Technical foundations.'
		}
	];

	let mounted = false;
	let currentImg = 0;
	const deptImages = ['/batch2026.png', '/cse9.jpg', '/cse10.jpg'];

	function scrollToSection(id) {
		const el = document.getElementById(id);
		if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
	}

	onMount(() => {
		mounted = true;
		const interval = setInterval(() => {
			currentImg = (currentImg + 1) % deptImages.length;
		}, 4000);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;600;700&family=Satoshi:wght@700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="bsh-compact-root" class:mounted>
	<!-- Compact Indigo Header -->
	<header class="hero-neat">
		<div class="hero-overlay"></div>
		<div class="hero-content" in:fly={{ y: 20, duration: 800 }}>
			<div class="tag inter">BASIC SCIENCES & HUMANITIES</div>
			<h1 class="satoshi">The Foundation of Engineering</h1>
			<div class="pills inter">
				{#each stats as item}
					<span class="pill">{item.key}: {item.value}</span>
				{/each}
			</div>
		</div>
	</header>

	<div class="layout-neat">
		<main class="content-stream-neat">
			<!-- About -->
			<section id="about" class="block-neat">
				<div class="block-head text-center">
					<h2 class="outfit">About BS&H</h2>
					<div class="line mx-auto" style="background: #4f46e5"></div>
				</div>
				<div class="about-grid-neat">
					<div class="info text-center lg:text-left">
						<p class="inter bold">Building Analytical Minds.</p>
						<p class="inter detail">
							The BS&H department is the cornerstone of engineering education at BITS Vizag,
							providing essential knowledge in Mathematics, Physics, Chemistry, and Humanities.
						</p>
					</div>
					<div class="visual">
						<div class="frame">
							<img src={deptImages[currentImg]} alt="BS&H Hub" in:fade />
						</div>
					</div>
				</div>
			</section>

			<!-- Labs -->
			<section id="labs" class="block-neat">
				<div class="block-head text-center">
					<h2 class="outfit">Laboratories</h2>
					<div class="line mx-auto" style="background: #4338ca"></div>
				</div>
				<div class="labs-grid-neat">
					{#each labCategories as cat}
						<div class="lab-card-neat">
							<h3 class="outfit" style="color: {cat.color}">{cat.name}</h3>
							<p class="inter desc">{cat.desc}</p>
							<div class="tag-row inter">
								{#each cat.labs as lab}
									<span>{lab}</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Faculty -->
			<!-- <section id="faculty" class="block-neat">
				<div class="block-head text-center">
					<h2 class="outfit">Expert Faculty</h2>
					<div class="line mx-auto" style="background: #3730a3"></div>
				</div>
				<div class="table-wrap-neat">
					<table class="table-neat inter">
						<thead>
							<tr>
								<th>Name</th>
								<th>Role</th>
								<th>Qualification</th>
								<th>Contact</th>
							</tr>
						</thead>
						<tbody>
							{#each facultyRows as f}
								<tr>
									<td class="font-600">{f.name}</td>
									<td class="role-cell">{f.role}</td>
									<td><span class="qual-badge">{f.qual}</span></td>
									<td>
										<a href="tel:{f.mobile}" class="tel-link">
											<svg
												viewBox="0 0 24 24"
												width="12"
												height="12"
												fill="none"
												stroke="currentColor"
												stroke-width="2.5"
												><path
													d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l2.27-2.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
												></path></svg
											>
											{f.mobile}
										</a>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section> -->

			<!-- HOD Message - Upgraded with Impactful Motion -->
			<section
				id="hod"
				class="dept-section-card hod-premium-card"
				style="--section-accent: #4f46e5"
			>
				<div class="hod-container">
					<div class="hod-visual" in:fly={{ x: -40, duration: 800 }}>
						<div class="hod-image-glow"></div>
						<img src="/rangaraosir.png" alt="Dr. P. Jaya Ranga Rao" loading="lazy" />
						<div class="hod-badge satoshi">32+ Years Exp</div>
					</div>
					<div class="hod-content" in:fly={{ x: 40, duration: 800 }}>
						<div class="quote-icon">
							<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" opacity="0.1">
								<path
									d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.01701 21L6.01701 18C6.01701 16.8954 6.91244 16 8.01701 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.01701C7.46473 8 7.01701 8.44772 7.01701 9V12C7.01701 12.5523 6.56929 13 6.01701 13H5.01701V21H6.01701Z"
								></path>
							</svg>
						</div>
						<h2 class="satoshi">Dr. P. Jaya Ranga Rao</h2>
						<p class="hod-designation inter">Head of Department | Basic Sciences & Humanities</p>
						<div class="hod-message-body">
							<p class="inter">
								"We ensure students grasp the fundamental principles of science and communication —
								empowering them to excel in their chosen engineering discipline."
							</p>
							<p class="inter signature">Dr. P. Jaya Ranga Rao</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Contact: Simple -->
			<section id="contact" class="block-neat contact-minimal">
				<div class="text-center">
					<h2 class="outfit">Connect with BS&H</h2>
					<div class="line mx-auto" style="background: #1e1b4b"></div>
					<p class="inter minimal-p">
						Need guidance regarding first-year academics or foundation courses?
					</p>
					<div class="contact-links inter">
						<a href="mailto:hod.bsh@bitsvizag.com">hod.bsh@bitsvizag.com</a>
						<span class="sep">|</span>
						<a href="">+91-9885597842</a>
					</div>
				</div>
			</section>
		</main>
	</div>
</div>

<style>
	.bsh-compact-root {
		background: #fff;
		color: #334155;
		opacity: 0;
		transition: opacity 0.8s ease;
	}
	.bsh-compact-root.mounted {
		opacity: 1;
	}

	/* Hero */
	.hero-neat {
		height: 32vh;
		min-height: 260px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		background: #000;
		overflow: hidden;
		text-align: center;
		background-image: url('/header.png');
		background-size: cover;
		background-position: center;
	}
	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(49, 46, 129, 0.8));
	}
	.hero-content {
		position: relative;
		z-index: 10;
		padding: 0 20px;
	}
	.tag {
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.3em;
		color: #a5b4fc;
		margin-bottom: 0.8rem;
	}
	.hero-content h1 {
		font-size: clamp(1.8rem, 4vw, 2.8rem);
		font-weight: 900;
		color: #fff;
		margin-bottom: 1rem;
	}
	.pills {
		display: flex;
		gap: 8px;
		justify-content: center;
	}
	.pill {
		padding: 4px 12px;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 99px;
		color: #fff;
		font-size: 0.75rem;
		font-weight: 500;
	}

	/* Layout */
	.layout-neat {
		max-width: 900px;
		margin: 0 auto;
		padding: 60px 24px;
	}
	.content-stream-neat {
		display: flex;
		flex-direction: column;
		gap: 60px;
	}

	/* Block Headers */
	.block-head h2 {
		font-size: 1.6rem;
		font-weight: 700;
		color: #111;
		margin-bottom: 6px;
	}
	.line {
		width: 30px;
		height: 3px;
		border-radius: 2px;
	}

	/* About */
	.about-grid-neat {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;
		align-items: center;
		margin-top: 30px;
	}
	.bold {
		font-size: 1.1rem;
		font-weight: 600;
		color: #4f46e5;
		margin-bottom: 10px;
	}
	.detail {
		font-size: 0.9rem;
		color: #64748b;
		line-height: 1.7;
	}
	.frame {
		border-radius: 16px;
		overflow: hidden;
		aspect-ratio: 16/10;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
	}
	.frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Labs */
	.labs-grid-neat {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 16px;
		margin-top: 30px;
	}
	.lab-card-neat {
		background: #fff;
		border: 1px solid #f1f5f9;
		padding: 20px;
		border-radius: 16px;
	}
	.lab-card-neat h3 {
		font-size: 1rem;
		font-weight: 700;
		margin-bottom: 4px;
	}
	.desc {
		font-size: 0.8rem;
		color: #94a3b8;
		margin-bottom: 12px;
	}
	.tag-row {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.tag-row span {
		background: #f8fafc;
		padding: 4px 8px;
		border-radius: 6px;
		font-size: 0.75rem;
		color: #64748b;
		border: 1px solid #f1f5f9;
	}

	/* Faculty Table */
	.table-wrap-neat {
		overflow-x: auto;
		border-radius: 12px;
		border: 1px solid #f1f5f9;
		margin-top: 30px;
	}
	.table-neat {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}
	.table-neat th {
		padding: 14px 18px;
		background: #f8fafc;
		color: #94a3b8;
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.table-neat td {
		padding: 14px 18px;
		border-top: 1px solid #f1f5f9;
		font-size: 0.8rem;
	}
	.role-cell {
		color: #64748b;
		font-size: 0.75rem;
	}
	.qual-badge {
		background: #f1f5f9;
		padding: 3px 8px;
		border-radius: 6px;
		font-size: 0.7rem;
		font-weight: 600;
		color: #64748b;
	}
	.tel-link {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #4f46e5;
		font-weight: 600;
		text-decoration: none;
	}

	/* HOD Premium Card */
	.hod-premium-card {
		padding: 0 !important;
		overflow: hidden;
		background: #0f172a !important;
		border: none !important;
		margin-top: 30px;
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

	/* Contact Minimal */
	.contact-minimal {
		padding-bottom: 60px;
	}
	.minimal-p {
		font-size: 0.85rem;
		color: #64748b;
		margin: 15px 0;
	}
	.contact-links {
		display: flex;
		gap: 15px;
		justify-content: center;
		font-size: 0.9rem;
		font-weight: 600;
	}
	.contact-links a {
		color: #4f46e5;
		text-decoration: none;
	}
	.sep {
		color: #e2e8f0;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero-neat {
			height: 25vh;
		}
		.about-grid-neat {
			grid-template-columns: 1fr;
			text-align: center;
		}
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
		.hidden-mobile {
			display: none;
		}
		.contact-links {
			flex-direction: column;
			gap: 8px;
		}
		.sep {
			display: none;
		}
	}

	.text-center {
		text-align: center;
	}
	.mx-auto {
		margin-left: auto;
		margin-right: auto;
	}
	.font-600 {
		font-weight: 600;
	}
</style>
