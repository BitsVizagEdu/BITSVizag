<script>
	import { onDestroy, onMount } from 'svelte';
	import HodMessage from '$lib/components/HodMessage.svelte';

	const navItems = [
		{ id: 'about', label: 'About Dept' },
		{ id: 'vision', label: 'Vision & Mission' },
		{ id: 'faculty', label: 'Faculty' },
		{ id: 'innovations', label: 'Teaching Innovations' },
		{ id: 'labs', label: 'Labs & Infra' },
		{ id: 'committees', label: 'Committees' },
		{ id: 'research', label: 'Research & Patents' },
		{ id: 'contact', label: 'Contact' }
	];

	const intake = [
		{ key: 'B.Tech', value: '360' },
		{ key: 'M.Tech', value: '18' }
	];

	const historyData = {
		btech: [
			'Started with 60 seats in 2008',
			'Increased to 120 in 2019',
			'Increased to 180 in 2022',
			'Increased to 360 in 2024'
		],
		mtech: ['Started with 18 seats in 2012']
	};

	const labCategories = [
		{
			title: 'Programming Labs',
			color: '#38BDF8',
			labs: ['C Programming Laboratory', 'OOPs Through Java Lab', 'Advanced Java and Web Development Lab']
		},
		{
			title: 'Systems and Infrastructure',
			color: '#6366F1',
			labs: ['OS and Compiler Design Lab', 'Computer Networks and Unix Lab', 'Free and Open Source Lab']
		},
		{
			title: 'Data and Structures',
			color: '#22D3EE',
			labs: ['Advanced Data Structures Lab', 'Database Management Systems Lab']
		},
		{
			title: 'Emerging Technologies',
			color: '#7DD3FC',
			labs: ['AI and Data Analytics Lab', 'Cloud Computing Lab', 'Mobile App Development Lab', 'Information Technology Workshop']
		},
		{
			title: 'Design and Architecture',
			color: '#93C5FD',
			labs: ['UML and Design Patterns Lab', 'IT Workshop', 'Computer Science Laboratory']
		}
	];

	const featureCards = [
		{
			title: 'Infrastructure',
			desc: 'Modern computer labs, digital library access, and high-bandwidth research infrastructure.'
		},
		{
			title: 'Academic Support',
			desc: 'Strong mentoring, coding clubs, project review forums, and industry-driven workshops.'
		},
		{
			title: 'Career Development',
			desc: 'Placement training, interview preparation, internship guidance, and alumni mentorship.'
		}
	];

	const tabData = {
		vision:
			'To produce ingenious and socially responsible technologists and scientists in the area of Computer Science and Engineering.',
		mission:
			'Create a high-impact learning ecosystem with practical rigor, research depth, and ethical leadership for a digital future.',
		peos:
			'PEO-1: Build strong computing careers. PEO-2: Foster entrepreneurship and innovation. PEO-3: Encourage societal impact through technology.',
		psos:
			'PSO-1: Design and deploy robust software systems. PSO-2: Solve domain problems using data and AI methods. PSO-3: Apply secure computing practices.',
		pos:
			'Graduates demonstrate engineering knowledge, problem analysis, design capability, experimentation, teamwork, and professional ethics.',
		knowledge:
			'Core focus on algorithms, systems, software engineering, data science, cloud computing, cybersecurity, and responsible AI.',
		sdgs:
			'Aligned with SDG 4, 8, 9, and 17 through inclusive education, innovation, employability, and industry-academia collaboration.'
	};

	const tabLabels = [
		{ id: 'vision', label: 'Vision' },
		{ id: 'mission', label: 'Mission' },
		{ id: 'peos', label: 'PEOs' },
		{ id: 'psos', label: 'PSOs' },
		{ id: 'pos', label: 'POs' },
		{ id: 'knowledge', label: 'Knowledge Profile' },
		{ id: 'sdgs', label: 'SDGs' }
	];

	const facultyRows = [
		{ sno: 1, name: 'Dr. J Narendra Babu', qualification: 'M.Tech, PhD', designation: 'Professor', experience: '20 Years' },
		{ sno: 2, name: 'Dr. B Bhavani', qualification: 'M.Tech, PhD', designation: 'Professor', experience: '13 Years' },
		{ sno: 3, name: 'Dr. Vunnava Dinesh Babu', qualification: 'M.Tech, PhD', designation: 'Associate Professor and HOD', experience: '10 Years' },
		{ sno: 4, name: 'Dr. G Bharathi', qualification: 'M.Tech, PhD', designation: 'Associate Professor', experience: '14 Years' },
		{ sno: 5, name: 'Dr. M. Ratna Kumari', qualification: 'M.Tech, PhD', designation: 'Associate Professor', experience: '12 Years' },
		{ sno: 6, name: 'Mr. P. Sandeep', qualification: 'M.Tech', designation: 'Assistant Professor', experience: '8 Years' },
		{ sno: 7, name: 'Ms. P. Tejaswini', qualification: 'M.Tech', designation: 'Assistant Professor', experience: '6 Years' },
		{ sno: 8, name: 'Mr. N. Mahesh', qualification: 'M.Tech', designation: 'Assistant Professor', experience: '7 Years' }
	];

	const socialItems = [
		{ label: 'G', href: 'https://maps.google.com', name: 'Google Maps' },
		{ label: 'I', href: 'https://instagram.com', name: 'Instagram' },
		{ label: 'W', href: 'https://wa.me', name: 'WhatsApp' },
		{ label: 'L', href: 'https://linkedin.com', name: 'LinkedIn' },
		{ label: 'Y', href: 'https://youtube.com', name: 'YouTube' },
		{ label: 'F', href: 'https://facebook.com', name: 'Facebook' }
	];

	let mounted = false;
	let activeNav = 'about';
	let activeTab = 'vision';
	let search = '';
	let sectionObserver;

	$: filteredFaculty = facultyRows.filter((row) => {
		const q = search.trim().toLowerCase();
		if (!q) return true;
		return (
			row.name.toLowerCase().includes(q) ||
			row.qualification.toLowerCase().includes(q) ||
			row.designation.toLowerCase().includes(q) ||
			row.experience.toLowerCase().includes(q)
		);
	});

	function scrollToSection(id) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	function reveal(node, delay = 0) {
		node.style.opacity = '0';
		node.style.transform = 'translateY(24px)';
		node.style.transition = `opacity 760ms ${delay}ms cubic-bezier(0.4, 0, 0.2, 1), transform 760ms ${delay}ms cubic-bezier(0.4, 0, 0.2, 1)`;
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						node.style.opacity = '1';
						node.style.transform = 'translateY(0)';
						io.disconnect();
					}
				});
			},
			{ threshold: 0.18 }
		);
		io.observe(node);
		return { destroy: () => io.disconnect() };
	}

	onMount(() => {
		mounted = true;
		const targets = navItems
			.map((item) => document.getElementById(item.id))
			.filter(Boolean);

		sectionObserver = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				if (visible[0]) {
					activeNav = visible[0].target.id;
				}
			},
			{ threshold: [0.2, 0.4, 0.65], rootMargin: '-12% 0px -40% 0px' }
		);

		targets.forEach((target) => sectionObserver.observe(target));
	});

	onDestroy(() => {
		if (sectionObserver) sectionObserver.disconnect();
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
	<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet" />
</svelte:head>

<div class="cse-page" class:mounted>
	<div class="ambient-bg" aria-hidden="true"></div>
	<div class="scanline" aria-hidden="true"></div>

	<section class="hero" use:reveal={20}>
		<div class="hero-orb hero-orb-a" aria-hidden="true"></div>
		<div class="hero-orb hero-orb-b" aria-hidden="true"></div>
		<div class="hero-content">
			<h1>Department of CSE</h1>
			<p class="sub">Computer Science &amp; Engineering</p>
			<p class="tagline">INNOVATING THE FUTURE OF TECHNOLOGY</p>
		</div>
	</section>

	<div class="layout-wrap">
		<aside class="side-panel" use:reveal={80}>
			<h3>CSE Department</h3>
			<nav>
				{#each navItems as item}
					<button
						type="button"
						class:active={activeNav === item.id}
						on:click={() => scrollToSection(item.id)}
					>
						<span class="dot" aria-hidden="true"></span>
						{item.label}
					</button>
				{/each}
			</nav>
		</aside>

		<main class="content-stack">
			<section id="about" class="section-card" use:reveal={90}>
				<div class="section-head">
					<h2>About the Department</h2>
				</div>
				<div class="about-grid">
					<div class="about-copy">
						<div class="badge-row">
							{#each intake as item}
								<span>{item.key}: {item.value}</span>
							{/each}
						</div>
						<p>
							The Department of Computer Science and Engineering drives a high-caliber academic environment with a focus on software systems, data intelligence, and emerging digital platforms. Our students build practical capability through industry-focused labs, structured mentoring, and applied research.
						</p>
						<p>
							With strong academic governance and outcome-centered pedagogy, the department prepares graduates for product engineering, higher studies, and technology leadership roles.
						</p>
					</div>
					<div class="about-visual" aria-hidden="true">
						<div class="code-window">
							<div class="window-top"></div>
							<div class="code-line w-90"></div>
							<div class="code-line w-70"></div>
							<div class="code-line w-85"></div>
							<div class="code-line w-55"></div>
						</div>
						<div class="chip-grid">
							<span>AI</span><span>Cloud</span><span>Data</span><span>Sec</span>
						</div>
					</div>
				</div>
			</section>

			<section class="section-card" use:reveal={120}>
				<div class="section-head">
					<h2>Department History</h2>
				</div>
				<div class="history-grid">
					<article class="history-card">
						<h3>B.Tech (CSE)</h3>
						<ul>
							{#each historyData.btech as milestone}
								<li>{milestone}</li>
							{/each}
						</ul>
					</article>
					<article class="history-card">
						<h3>M.Tech (CSE)</h3>
						<ul>
							{#each historyData.mtech as milestone}
								<li>{milestone}</li>
							{/each}
						</ul>
					</article>
				</div>
			</section>

			<section id="labs" class="section-card" use:reveal={140}>
				<div class="section-head">
					<h2>Labs and Infrastructure</h2>
				</div>
				<div class="labs-grid">
					{#each labCategories as category}
						<article class="lab-category" style="--cat-color: {category.color}">
							<h3>{category.title}</h3>
							<ul>
								{#each category.labs as lab}
									<li>{lab}</li>
								{/each}
							</ul>
						</article>
					{/each}
				</div>
				<div class="feature-grid">
					{#each featureCards as feature}
						<article class="feature-card">
							<div class="feature-icon" aria-hidden="true"></div>
							<h4>{feature.title}</h4>
							<p>{feature.desc}</p>
						</article>
					{/each}
				</div>
			</section>

			<section id="innovations" class="section-card" use:reveal={160}>
				<div class="section-head">
					<h2>Teaching Innovations</h2>
				</div>
				<div class="pill-list">
					<span>Flipped Classroom Modules</span>
					<span>Practice-First Lab Cycles</span>
					<span>Industry Problem Sprints</span>
					<span>Outcome-Centric Assessments</span>
				</div>
			</section>

			<section class="section-card" use:reveal={175}>
				<div class="section-head">
					<h2>Department Leadership</h2>
				</div>
				<HodMessage
					hodName="Prof. S. Durga Prasad"
					designation="Head of Department"
					department="Computer Science & Engineering"
					hodMessage="Welcome to the Department of Computer Science and Engineering. Our mission is to build strong technologists with analytical depth, engineering discipline, and a commitment to innovation and societal progress."
					hodImage="/cse hod.jpg"
				/>
			</section>

			<section id="vision" class="section-card" use:reveal={190}>
				<div class="section-head">
					<h2>Vision and Mission</h2>
				</div>
				<div class="tabs-row" role="tablist" aria-label="Vision and mission tabs">
					{#each tabLabels as tab}
						<button
							type="button"
							role="tab"
							aria-selected={activeTab === tab.id}
							class:active={activeTab === tab.id}
							on:click={() => (activeTab = tab.id)}
						>
							{tab.label}
						</button>
					{/each}
				</div>
				<div class="tab-panel" role="tabpanel">
					<p>{tabData[activeTab]}</p>
				</div>
			</section>

			<section id="faculty" class="section-card" use:reveal={210}>
				<div class="section-head faculty-head">
					<h2>Faculty Profile</h2>
					<div class="faculty-tools">
						<button type="button" aria-label="Download faculty data">Download</button>
						<button type="button" aria-label="Export faculty data">Export</button>
						<input type="text" bind:value={search} placeholder="Search records..." aria-label="Search faculty records" />
					</div>
				</div>
				<div class="table-wrap">
					<table>
						<thead>
							<tr>
								<th>S.No</th>
								<th>Name</th>
								<th>Qualification</th>
								<th>Designation</th>
								<th>Experience</th>
							</tr>
						</thead>
						<tbody>
							{#each filteredFaculty as row}
								<tr>
									<td>{row.sno}</td>
									<td>{row.name}</td>
									<td>{row.qualification}</td>
									<td>{row.designation}</td>
									<td>{row.experience}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>

			<section id="committees" class="section-card" use:reveal={230}>
				<div class="section-head">
					<h2>Committees</h2>
				</div>
				<p class="plain-copy">
					Department committees include curriculum planning, research review, student mentoring, and quality assurance cells for academic governance.
				</p>
			</section>

			<section id="research" class="section-card" use:reveal={240}>
				<div class="section-head">
					<h2>Research and Patents</h2>
				</div>
				<p class="plain-copy">
					Faculty and students actively publish in peer-reviewed venues and pursue patentable work in intelligent systems, cybersecurity, and data-centric applications.
				</p>
			</section>

			<section id="contact" class="section-card" use:reveal={250}>
				<div class="section-head">
					<h2>Contact</h2>
				</div>
				<div class="contact-grid">
					<div>
						<h4>Email</h4>
						<p>cse@bitsvizag.edu.in</p>
					</div>
					<div>
						<h4>Phone</h4>
						<p>+91 98765 43210</p>
					</div>
					<div>
						<h4>Address</h4>
						<p>BITS Vizag Campus, Visakhapatnam, Andhra Pradesh</p>
					</div>
				</div>
			</section>
		</main>
	</div>

	<div class="social-pod" aria-label="Social links">
		{#each socialItems as item}
			<a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.name}>{item.label}</a>
		{/each}
	</div>
</div>

<style>
	:global(:root) {
		--cse-bg: #020617;
		--cse-surface: #0b1220;
		--cse-accent: #38bdf8;
		--cse-gradient: linear-gradient(135deg, #38bdf8, #6366f1);
		--cse-highlight: #facc15;
		--cse-text: #e2e8f0;
		--cse-text-muted: #94a3b8;
		--cse-card: rgba(255, 255, 255, 0.04);
		--cse-border: rgba(255, 255, 255, 0.08);
		--cse-ease: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.cse-page {
		position: relative;
		isolation: isolate;
		overflow: hidden;
		background: var(--cse-bg);
		color: var(--cse-text);
		font-family: 'Inter', sans-serif;
		opacity: 0;
		transform: translateY(14px);
		transition: opacity 700ms var(--cse-ease), transform 700ms var(--cse-ease);
		padding-bottom: 80px;
	}

	.cse-page.mounted {
		opacity: 1;
		transform: translateY(0);
	}

	.ambient-bg {
		position: absolute;
		inset: -30% -10% auto;
		height: 680px;
		background: radial-gradient(circle at 30% 40%, rgba(56, 189, 248, 0.22), transparent 46%),
			radial-gradient(circle at 78% 22%, rgba(99, 102, 241, 0.18), transparent 44%),
			linear-gradient(160deg, #020617 0%, #020617 42%, #091126 100%);
		z-index: -2;
		animation: drift 20s linear infinite alternate;
	}

	.scanline {
		position: absolute;
		inset: 0;
		z-index: -1;
		background-image: linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px);
		background-size: 100% 4px;
		opacity: 0.2;
		pointer-events: none;
	}

	.hero {
		min-height: 64vh;
		display: grid;
		place-items: center;
		padding: 120px 24px 90px;
		text-align: center;
		position: relative;
	}

	.hero-content h1 {
		font-family: 'Satoshi', 'Inter', sans-serif;
		font-size: clamp(2.6rem, 6vw, 5rem);
		letter-spacing: -0.005em;
		font-weight: 900;
		line-height: 1.05;
		margin: 0;
		text-shadow: 0 0 22px rgba(56, 189, 248, 0.35);
	}

	.hero .sub {
		font-size: clamp(1.1rem, 2.1vw, 1.6rem);
		margin: 14px 0 6px;
		color: var(--cse-text);
	}

	.hero .tagline {
		font-size: 0.88rem;
		letter-spacing: 0.13em;
		font-weight: 600;
		margin: 0;
		color: var(--cse-text-muted);
	}

	.hero-orb {
		position: absolute;
		border-radius: 999px;
		filter: blur(32px);
		opacity: 0.45;
		pointer-events: none;
	}

	.hero-orb-a {
		width: 260px;
		height: 260px;
		background: #38bdf8;
		left: 14%;
		top: 20%;
	}

	.hero-orb-b {
		width: 320px;
		height: 320px;
		background: #6366f1;
		right: 11%;
		top: 18%;
	}

	.layout-wrap {
		max-width: 1240px;
		margin: 0 auto;
		padding: 0 24px;
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: 28px;
	}

	.side-panel {
		position: sticky;
		top: 24px;
		height: fit-content;
		padding: 18px;
		border-radius: 20px;
		background: rgba(11, 18, 32, 0.72);
		border: 1px solid var(--cse-border);
		backdrop-filter: blur(12px);
		box-shadow: 0 30px 60px rgba(2, 6, 23, 0.5);
	}

	.side-panel h3 {
		margin: 0 0 14px;
		font-family: 'Satoshi', 'Inter', sans-serif;
		font-size: 1.15rem;
		font-weight: 700;
		letter-spacing: -0.005em;
	}

	nav {
		display: grid;
		gap: 8px;
	}

	nav button {
		appearance: none;
		border: 1px solid transparent;
		background: rgba(255, 255, 255, 0.02);
		color: var(--cse-text-muted);
		padding: 11px 12px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		gap: 10px;
		font-weight: 600;
		cursor: pointer;
		transition: all 250ms var(--cse-ease);
	}

	nav button .dot {
		width: 7px;
		height: 7px;
		border-radius: 999px;
		background: rgba(148, 163, 184, 0.5);
		transition: transform 250ms var(--cse-ease), background-color 250ms var(--cse-ease);
	}

	nav button:hover {
		transform: translateX(4px);
		color: var(--cse-text);
		background: rgba(56, 189, 248, 0.1);
		border-color: rgba(56, 189, 248, 0.24);
	}

	nav button.active {
		color: #0f172a;
		background: var(--cse-highlight);
	}

	nav button.active .dot {
		background: #0f172a;
		transform: scale(1.15);
	}

	.content-stack {
		display: grid;
		gap: 24px;
	}

	.section-card {
		background: var(--cse-card);
		border: 1px solid var(--cse-border);
		border-radius: 20px;
		padding: 30px;
		box-shadow: 0 18px 48px rgba(2, 6, 23, 0.32);
	}

	.section-head h2 {
		margin: 0;
		font-family: 'Satoshi', 'Inter', sans-serif;
		font-size: clamp(1.5rem, 2.3vw, 2.2rem);
		letter-spacing: -0.005em;
	}

	.about-grid {
		margin-top: 20px;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(260px, 380px);
		gap: 24px;
	}

	.badge-row {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		margin-bottom: 16px;
	}

	.badge-row span {
		font-weight: 700;
		font-size: 0.88rem;
		color: #0f172a;
		background: #67e8f9;
		padding: 8px 12px;
		border-radius: 999px;
	}

	.about-copy p {
		margin: 0 0 14px;
		color: var(--cse-text-muted);
		line-height: 1.72;
		font-size: 1.01rem;
	}

	.about-visual {
		border-radius: 16px;
		padding: 16px;
		background: linear-gradient(145deg, rgba(56, 189, 248, 0.12), rgba(99, 102, 241, 0.1));
		border: 1px solid rgba(56, 189, 248, 0.3);
		display: grid;
		gap: 12px;
	}

	.code-window {
		border-radius: 14px;
		padding: 14px;
		background: rgba(2, 6, 23, 0.72);
		border: 1px solid rgba(148, 163, 184, 0.2);
	}

	.window-top {
		height: 7px;
		width: 72px;
		border-radius: 999px;
		background: linear-gradient(135deg, #38bdf8, #6366f1);
		margin-bottom: 10px;
	}

	.code-line {
		height: 7px;
		border-radius: 999px;
		background: rgba(148, 163, 184, 0.24);
		margin-bottom: 8px;
	}

	.code-line.w-90 {
		width: 90%;
	}

	.code-line.w-70 {
		width: 70%;
	}

	.code-line.w-85 {
		width: 85%;
	}

	.code-line.w-55 {
		width: 55%;
		margin-bottom: 0;
	}

	.chip-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 8px;
	}

	.chip-grid span {
		text-align: center;
		padding: 7px 6px;
		border-radius: 10px;
		background: rgba(255, 255, 255, 0.1);
		font-weight: 700;
		font-size: 0.82rem;
	}

	.history-grid {
		margin-top: 20px;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
	}

	.history-card {
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid var(--cse-border);
		padding: 20px 20px 18px;
		position: relative;
		overflow: hidden;
	}

	.history-card::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		background: var(--cse-gradient);
	}

	.history-card h3 {
		margin: 0 0 10px;
		font-family: 'Satoshi', 'Inter', sans-serif;
		font-size: 1.2rem;
	}

	.history-card ul {
		margin: 0;
		padding: 0 0 0 20px;
		display: grid;
		gap: 9px;
		color: var(--cse-text-muted);
	}

	.labs-grid {
		margin-top: 20px;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 14px;
	}

	.lab-category {
		padding: 18px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid var(--cse-border);
		border-radius: 16px;
		transition: transform 280ms var(--cse-ease), box-shadow 280ms var(--cse-ease), border-color 280ms var(--cse-ease);
	}

	.lab-category:hover {
		transform: translateY(-5px);
		border-color: color-mix(in srgb, var(--cat-color) 65%, white 35%);
		box-shadow: 0 18px 36px rgba(2, 6, 23, 0.45);
	}

	.lab-category h3 {
		margin: 0 0 12px;
		font-size: 1.05rem;
		font-family: 'Satoshi', 'Inter', sans-serif;
		color: var(--cat-color);
	}

	.lab-category ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 8px;
	}

	.lab-category li {
		padding-left: 14px;
		position: relative;
		font-size: 0.95rem;
		line-height: 1.5;
		color: var(--cse-text-muted);
	}

	.lab-category li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 10px;
		width: 6px;
		height: 6px;
		border-radius: 999px;
		background: var(--cat-color);
	}

	.feature-grid {
		margin-top: 22px;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 14px;
	}

	.feature-card {
		padding: 20px;
		border-radius: 16px;
		border: 1px solid var(--cse-border);
		background: rgba(255, 255, 255, 0.02);
		transition: transform 280ms var(--cse-ease), box-shadow 280ms var(--cse-ease), border-color 280ms var(--cse-ease);
	}

	.feature-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 18px 40px rgba(56, 189, 248, 0.17);
		border-color: rgba(56, 189, 248, 0.5);
	}

	.feature-icon {
		width: 36px;
		height: 36px;
		border-radius: 12px;
		background: var(--cse-gradient);
		margin-bottom: 12px;
	}

	.feature-card h4 {
		margin: 0 0 8px;
		font-size: 1.05rem;
	}

	.feature-card p {
		margin: 0;
		color: var(--cse-text-muted);
		line-height: 1.6;
	}

	.pill-list {
		margin-top: 16px;
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}

	.pill-list span {
		padding: 9px 13px;
		border-radius: 999px;
		border: 1px solid rgba(56, 189, 248, 0.24);
		background: rgba(56, 189, 248, 0.08);
		font-size: 0.86rem;
		font-weight: 600;
	}

	.tabs-row {
		margin-top: 16px;
		display: flex;
		flex-wrap: wrap;
		gap: 9px;
	}

	.tabs-row button {
		border: 1px solid var(--cse-border);
		background: rgba(255, 255, 255, 0.02);
		color: var(--cse-text-muted);
		padding: 9px 13px;
		border-radius: 999px;
		font-weight: 700;
		cursor: pointer;
		transition: all 220ms var(--cse-ease);
	}

	.tabs-row button:hover {
		color: var(--cse-text);
		border-color: rgba(56, 189, 248, 0.4);
	}

	.tabs-row button.active {
		background: rgba(30, 41, 59, 0.96);
		color: #f8fafc;
		border-color: rgba(56, 189, 248, 0.55);
		box-shadow: 0 10px 24px rgba(2, 6, 23, 0.4);
	}

	.tab-panel {
		margin-top: 14px;
		padding: 22px;
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid var(--cse-border);
	}

	.tab-panel p {
		margin: 0;
		text-align: center;
		line-height: 1.75;
		color: var(--cse-text);
		font-size: 1.02rem;
	}

	.faculty-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}

	.faculty-tools {
		display: flex;
		align-items: center;
		gap: 8px;
		flex-wrap: wrap;
	}

	.faculty-tools button {
		border: 1px solid var(--cse-border);
		background: rgba(255, 255, 255, 0.02);
		color: var(--cse-text);
		padding: 8px 12px;
		font-weight: 700;
		border-radius: 10px;
		cursor: pointer;
	}

	.faculty-tools input {
		border: 1px solid var(--cse-border);
		background: rgba(2, 6, 23, 0.72);
		color: var(--cse-text);
		padding: 9px 12px;
		min-width: 220px;
		border-radius: 10px;
	}

	.table-wrap {
		margin-top: 14px;
		overflow: auto;
		border: 1px solid var(--cse-border);
		border-radius: 14px;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		min-width: 760px;
	}

	thead th {
		position: sticky;
		top: 0;
		background: #111827;
		color: #f8fafc;
		padding: 13px 14px;
		font-size: 0.82rem;
		text-transform: uppercase;
		letter-spacing: 0.07em;
		text-align: left;
	}

	tbody td {
		padding: 14px;
		color: var(--cse-text-muted);
		border-top: 1px solid rgba(148, 163, 184, 0.12);
	}

	tbody tr {
		transition: background-color 220ms var(--cse-ease);
	}

	tbody tr:hover {
		background: rgba(56, 189, 248, 0.08);
	}

	.plain-copy {
		margin: 16px 0 0;
		color: var(--cse-text-muted);
		line-height: 1.72;
	}

	.contact-grid {
		margin-top: 16px;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 12px;
	}

	.contact-grid div {
		padding: 14px;
		border: 1px solid var(--cse-border);
		background: rgba(255, 255, 255, 0.02);
		border-radius: 12px;
	}

	.contact-grid h4 {
		margin: 0 0 6px;
		font-size: 0.95rem;
	}

	.contact-grid p {
		margin: 0;
		color: var(--cse-text-muted);
		line-height: 1.5;
	}

	.social-pod {
		position: fixed;
		right: 18px;
		top: 52%;
		transform: translateY(-50%);
		display: grid;
		gap: 7px;
		padding: 12px 10px;
		border-radius: 999px;
		background: rgba(11, 18, 32, 0.84);
		border: 1px solid var(--cse-border);
		box-shadow: 0 22px 40px rgba(2, 6, 23, 0.48);
		z-index: 20;
	}

	.social-pod a {
		display: grid;
		place-items: center;
		width: 32px;
		height: 32px;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(148, 163, 184, 0.2);
		color: #e2e8f0;
		text-decoration: none;
		font-size: 0.8rem;
		font-weight: 800;
		transition: transform 220ms var(--cse-ease), background-color 220ms var(--cse-ease), border-color 220ms var(--cse-ease);
	}

	.social-pod a:hover {
		transform: scale(1.11);
		background: rgba(56, 189, 248, 0.24);
		border-color: rgba(56, 189, 248, 0.55);
	}

	@keyframes drift {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(0, 16px, 0);
		}
	}

	@media (max-width: 1120px) {
		.layout-wrap {
			grid-template-columns: 1fr;
		}

		.side-panel {
			position: static;
		}
	}

	@media (max-width: 900px) {
		.hero {
			padding-top: 104px;
		}

		.about-grid,
		.history-grid,
		.labs-grid,
		.feature-grid,
		.contact-grid {
			grid-template-columns: 1fr;
		}

		.section-card {
			padding: 24px;
		}
	}

	@media (max-width: 640px) {
		.hero-content h1 {
			font-size: 2.25rem;
		}

		.hero .tagline {
			font-size: 0.75rem;
		}

		.layout-wrap {
			padding: 0 14px;
		}

		.section-card {
			padding: 18px;
			border-radius: 16px;
		}

		.social-pod {
			right: 8px;
			padding: 8px 7px;
		}
	}
</style>
