<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import HodMessage from '$lib/components/HodMessage.svelte';

	const navItems = [
		{
			id: 'about',
			label: 'About Department',
			icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			color: '#2563eb'
		},
		{
			id: 'vision',
			label: 'Vision & Mission',
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
			color: '#dc2626'
		},

		{
			id: 'labs',
			label: 'Labs & Infra',
			icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
			color: '#7c3aed'
		},
		{
			id: 'faculty',
			label: 'Faculty Profile',
			icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 110-8 4 4 0 010 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75',
			color: '#059669'
		},
		{
			id: 'hod',
			label: 'HOD Message',
			icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
			color: '#db2777'
		},
		{
			id: 'innovations',
			label: 'Teaching Innovations',
			icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
			color: '#d97706'
		},
		{
			id: 'contact',
			label: 'Contact Info',
			icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: '#0284c7'
		}
	];

	const intake = [
		{ key: 'B.Tech', value: '180', color: '#2563eb' },
		{ key: 'M.Tech', value: '18', color: '#0284c7' }
	];

	const deptImages = [
		'/cse-course1 copy.png',
		'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
		'/Computer-Science-1-scaled.jpg',
		'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
		'https://static.wixstatic.com/media/271739_7e59438cf8d84b70a4c56b170855b8c0~mv2.png/v1/fill/w_980,h_560,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/271739_7e59438cf8d84b70a4c56b170855b8c0~mv2.png'
	];

	const labCategories = [
		{
			name: 'Programming Labs',
			color: '#2563eb',
			labs: ['C Programming Laboratory', 'OOPs Through Java Lab', 'Advanced Java & Web Dev Lab']
		},
		{
			name: 'Systems & Infra',
			color: '#7c3aed',
			labs: ['OS & Compiler Design Lab', 'Computer Networks Lab', 'FOSS Lab']
		},
		{
			name: 'Data & Structures',
			color: '#059669',
			labs: ['Advanced Data Structures Lab', 'Database Management Systems Lab']
		},
		{
			name: 'Emerging Tech',
			color: '#d97706',
			labs: ['AI & Data Analytics Lab', 'Cloud Computing Lab', 'Mobile App Development Lab']
		}
	];

	const facultyRows = [
		{ name: 'Dr. J Narendra Babu', role: 'Professor', exp: '20 Years', qual: 'PhD' },
		{ name: 'Dr. B Bhavani', role: 'Professor', exp: '13 Years', qual: 'PhD' },
		{ name: 'Dr. V Dinesh Babu', role: 'Associate Prof & HOD', exp: '10 Years', qual: 'PhD' },
		{ name: 'Dr. G Bharathi', role: 'Associate Professor', exp: '14 Years', qual: 'PhD' },
		{ name: 'Mr. P. Sandeep', role: 'Assistant Professor', exp: '8 Years', qual: 'M.Tech' }
	];

	const visionMissionTabs = [
		{
			id: 'vision',
			label: 'Vision',
			color: '#10b981',
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
		},
		{ id: 'mission', label: 'Mission', color: '#3b82f6', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
		{
			id: 'peos',
			label: 'PEOs',
			color: '#8b5cf6',
			icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
		},
		{
			id: 'psos',
			label: 'PSOs',
			color: '#f97316',
			icon: 'M11 4a2 2 0 114 0v1a2 2 0 11-4 0V4zM7 8a2 2 0 012-2h6a2 2 0 012 2v1a2 2 0 01-2 2H9a2 2 0 01-2-2V8zM3 13a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1z'
		},
		{ id: 'pos', label: 'POs', color: '#0ea5e9', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
		{
			id: 'knowledge',
			label: 'Knowledge',
			color: '#4f46e5',
			icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
		},
		{
			id: 'sdgs',
			label: 'SDGs',
			color: '#d946ef',
			icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
		}
	];

	let activeVmTab = 'vision';
	$: activeTabColor = visionMissionTabs.find((t) => t.id === activeVmTab)?.color || '#10b981';

	const vmContent = {
		vision: {
			title: 'Our Vision',
			text: '“Nurturing future-ready engineers with technical mastery, innovative thinking, and ethical values to solve global challenges.”'
		},
		mission: [
			{
				id: 'M1',
				text: 'Deliver industry-aligned education in AI, Cyber Security, and emerging technologies.'
			},
			{
				id: 'M2',
				text: 'Foster practical learning through modern labs, research, and real-time projects.'
			},
			{
				id: 'M3',
				text: 'Cultivate critical thinking, teamwork, and continuous self-learning skills.'
			},
			{ id: 'M4', text: 'Drive social impact through ethical leadership and technology solutions.' }
		],
		peos: [
			{ id: 'PEO1', text: 'Build elite careers in global software industries and research.' },
			{ id: 'PEO2', text: 'Adapt swiftly to evolving tech and industry requirements.' },
			{ id: 'PEO3', text: 'Solve complex industrial and societal problems responsibly.' },
			{ id: 'PEO4', text: 'Demonstrate lifelong learning and professional leadership.' }
		],
		psos: [
			{ id: 'PSO1', text: 'Apply modern tools and programming for efficient engineering.' },
			{ id: 'PSO2', text: 'Design intelligent AI, Cloud, and Security-driven systems.' },
			{ id: 'PSO3', text: 'Develop scalable, secure, and user-centric software solutions.' }
		],
		pos: [
			{ id: 'PO1', title: 'Knowledge', text: 'Apply core computing and engineering fundamentals.' },
			{ id: 'PO2', title: 'Analysis', text: 'Identify and analyze complex technical challenges.' },
			{ id: 'PO3', title: 'Design', text: 'Architect innovative software systems for users.' },
			{ id: 'PO4', title: 'Research', text: 'Use modern methods to develop technical solutions.' },
			{ id: 'PO5', title: 'Modern Tools', text: 'Utilize latest frameworks and cloud platforms.' },
			{ id: 'PO6', title: 'Ethics', text: 'Practice professional and cyber responsibility.' },
			{ id: 'PO7', title: 'Teamwork', text: 'Work effectively in multidisciplinary environments.' },
			{
				id: 'PO8',
				title: 'Communication',
				text: 'Present technical ideas with clarity and precision.'
			},
			{ id: 'PO9', title: 'Learning', text: 'Stay updated with emerging industry trends.' }
		],
		knowledge: [
			{ cat: 'Foundations', items: 'Data Structures, Algorithms, OS, DBMS, Networks, OOPs.' },
			{ cat: 'Emerging Tech', items: 'AI, ML, Generative AI, Cloud, IoT, Blockchain, Security.' },
			{ cat: 'Dev Skills', items: 'Full Stack, Mobile Apps, UI/UX, API, DevOps Practices.' },
			{ cat: 'Readiness', items: 'Internships, Hackathons, Open Source, Aptitude Training.' },
			{
				cat: 'Innovation',
				items: 'Research-driven learning, Startup incubation, Product thinking.'
			}
		],
		sdgs: [
			{ goal: 'Quality Education', desc: 'Promoting skill-oriented modern technical training.' },
			{
				goal: 'Industry Innovation',
				desc: 'Driving sustainable technological and research growth.'
			},
			{ goal: 'Decent Work', desc: 'Preparing students for global career opportunities.' },
			{ goal: 'Reduced Inequalities', desc: 'Ensuring digital empowerment and equal learning.' },
			{
				goal: 'Sustainable Communities',
				desc: 'Building solutions that improve societal quality of life.'
			}
		]
	};

	let activeNav = 'about';
	let mounted = false;
	let currentImg = 0;
	let sectionObserver;

	function scrollToSection(id) {
		const el = document.getElementById(id);
		if (el) {
			window.scrollTo({
				top: el.offsetTop - 100,
				behavior: 'smooth'
			});
		}
	}

	onMount(() => {
		mounted = true;
		const interval = setInterval(() => {
			currentImg = (currentImg + 1) % deptImages.length;
		}, 4000);

		const targets = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
		sectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
						activeNav = entry.target.id;
					}
				});
			},
			{ threshold: 0.3, rootMargin: '-10% 0px -40% 0px' }
		);
		targets.forEach((t) => sectionObserver.observe(t));

		return () => clearInterval(interval);
	});

	onDestroy(() => {
		if (sectionObserver) sectionObserver.disconnect();
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="dept-premium-root" class:mounted>
	<!-- Hero Header -->
	<header class="header-hero">
		<div class="header-overlay"></div>
		<div class="header-content" in:fly={{ y: 30, duration: 1000 }}>
			<div class="welcome-text inter">
				{#each 'Welcome to the CSE 2026'.split('') as char, i}
					<span class="animated-char" style="animation-delay: {i * 0.05}s">
						{char === ' ' ? '\u00A0' : char}
					</span>
				{/each}
			</div>

			<h1 class="satoshi">Computer Science and Engineering</h1>
		</div>
	</header>

	<div class="main-content-layout">
		<!-- Sidebar Navigation -->
		<aside class="side-nav-container">
			<div class="side-nav-card">
				<div class="side-nav-title satoshi">DEPARTMENT MENU</div>
				<nav class="side-nav-list">
					{#each navItems as item}
						<button
							class="side-nav-btn inter"
							class:active={activeNav === item.id}
							on:click={() => scrollToSection(item.id)}
							style="--nav-accent: {item.color}"
						>
							<div class="nav-btn-icon">
								<svg
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d={item.icon}></path>
								</svg>
							</div>
							<span class="nav-btn-label">{item.label}</span>
							{#if activeNav === item.id}
								<div class="nav-active-dot" in:fade></div>
							{/if}
						</button>
					{/each}
				</nav>
			</div>
		</aside>

		<!-- Main Content Area -->
		<main class="content-body-grid">
			<!-- About Department -->
			<section id="about" class="dept-section-card" style="--section-accent: #2563eb">
				<div class="section-top">
					<div class="section-title-wrap">
						<h2 class="satoshi">About Department</h2>
						<div class="section-underline"></div>
					</div>
					<div class="intake-group">
						{#each intake as item}
							<div class="intake-badge inter" style="--bg: {item.color}">
								<span class="key">{item.key}:</span>
								<span class="val">{item.value} Seats</span>
							</div>
						{/each}
					</div>
				</div>
				<div class="about-grid-content">
					<div class="about-text-side">
						<p class="inter main-para">
							The Department of Computer Science and Engineering at BITS Vizag is a center of
							academic excellence dedicated to producing world-class engineers.
						</p>
						<p class="inter sub-para">
							Established in 2008, the department has evolved into a thriving community of 180
							undergraduate and 18 postgraduate students. We focus on outcome-based education,
							industry collaboration, and cutting-edge research in AI, Data Science, and Modern
							Systems.
						</p>
					</div>
					<div class="about-visual-side">
						<div class="visual-slideshow">
							{#each deptImages as img, i}
								{#if currentImg === i}
									<img
										src={img}
										alt="Dept View {i}"
										in:fade={{ duration: 800 }}
										out:fade={{ duration: 800 }}
									/>
								{/if}
							{/each}
							<div class="slideshow-indicators">
								{#each deptImages as _, i}
									<div class="dot" class:active={currentImg === i}></div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>

		<!-- Vision & Mission Section -->
		<section
			id="vision"
			class="dept-section-card vm-premium-section"
			style="--section-accent: {activeTabColor}"
		>
			<div class="section-top">
				<div class="section-title-wrap">
					<div class="vm-title-row">
						<div class="vm-icon-badge" style="color: {activeTabColor}">
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.5"
							>
								<circle cx="12" cy="12" r="3"></circle>
								<path
									d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
								></path>
							</svg>
						</div>
						<h2 class="satoshi">Vision & Mission</h2>
					</div>
					<div class="section-underline"></div>
				</div>
			</div>

			<!-- VM Tab Navigation -->
			<div class="vm-tabs-nav scrollbar-hide">
				{#each visionMissionTabs as tab}
					<button
						class="vm-tab-btn inter"
						class:active={activeVmTab === tab.id}
						on:click={() => (activeVmTab = tab.id)}
						style="--tab-color: {tab.color}"
					>
						<svg
							viewBox="0 0 24 24"
							width="16"
							height="16"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
						>
							<path d={tab.icon}></path>
						</svg>
						<span>{tab.label}</span>
					</button>
				{/each}
			</div>

			<!-- VM Content Display -->
			<div class="vm-content-viewport">
				{#key activeVmTab}
					<div class="vm-tab-panel" in:fade={{ duration: 300 }}>
						{#if activeVmTab === 'vision'}
							<div class="vision-panel" in:fly={{ y: 20, duration: 500, delay: 100 }}>
								<h3 class="satoshi panel-title">Our Vision</h3>
								<p class="inter vision-quote">{vmContent.vision.text}</p>
							</div>
						{:else if activeVmTab === 'mission'}
							<div class="mission-panel">
								<div class="panel-grid">
									{#each vmContent.mission as m, i}
										<div class="m-card" in:fly={{ y: 30, duration: 500, delay: i * 100 }}>
											<span class="m-id satoshi">{m.id}</span>
											<p class="inter">{m.text}</p>
										</div>
									{/each}
								</div>
							</div>
						{:else if activeVmTab === 'peos'}
							<div class="peos-panel">
								<div class="panel-list">
									{#each vmContent.peos as peo, i}
										<div class="peo-item" in:fly={{ x: -20, duration: 400, delay: i * 100 }}>
											<div class="peo-dot"></div>
											<div class="peo-content">
												<span class="peo-id satoshi">{peo.id}</span>
												<p class="inter">{peo.text}</p>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{:else if activeVmTab === 'psos'}
							<div class="psos-panel">
								<div class="panel-grid">
									{#each vmContent.psos as pso, i}
										<div class="pso-card" in:fly={{ y: 30, duration: 500, delay: i * 100 }}>
											<div class="pso-icon" style="background: {activeTabColor}">
												<svg
													viewBox="0 0 24 24"
													width="20"
													height="20"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
												>
													<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
												</svg>
											</div>
											<div class="pso-text">
												<span class="pso-id satoshi">{pso.id}</span>
												<p class="inter">{pso.text}</p>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{:else if activeVmTab === 'pos'}
							<div class="pos-panel">
								<div class="pos-scroll-area scrollbar-hide">
									<div class="pos-grid">
										{#each vmContent.pos as po, i}
											<div class="po-card" in:fly={{ y: 20, duration: 400, delay: i * 50 }}>
												<div class="po-header">
													<span class="po-id satoshi">{po.id}</span>
													<h4 class="satoshi">{po.title}</h4>
												</div>
												<p class="inter">{po.text}</p>
											</div>
										{/each}
									</div>
								</div>
							</div>
						{:else if activeVmTab === 'knowledge'}
							<div class="knowledge-panel">
								<div class="k-grid">
									{#each vmContent.knowledge as k, i}
										<div class="k-card" in:fly={{ y: 30, duration: 500, delay: i * 100 }}>
											<h4 class="satoshi">{k.cat}</h4>
											<p class="inter">{k.items}</p>
										</div>
									{/each}
								</div>
							</div>
						{:else if activeVmTab === 'sdgs'}
							<div class="sdgs-panel">
								<div class="sdg-grid">
									{#each vmContent.sdgs as sdg, i}
										<div
											class="sdg-card"
											in:fly={{ x: 20, duration: 400, delay: i * 100 }}
											style="--sdg-color: {['#4C9F38', '#BF1D2D', '#26BDE2', '#FCC30B', '#E5243B'][
												i % 5
											]}"
										>
											<div class="sdg-icon-wrap" style="color: var(--sdg-color)">
												<svg
													viewBox="0 0 24 24"
													width="24"
													height="24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
												>
													<circle cx="12" cy="12" r="10"></circle>
													<path d="M12 6v6l4 2"></path>
												</svg>
											</div>
											<div class="sdg-content">
												<h4 class="satoshi">{sdg.goal}</h4>
												<p class="inter">{sdg.desc}</p>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				{/key}
			</div>
		</section>

		<main class="content-body-grid">
			<!-- Labs & Infrastructure -->
			<section id="labs" class="dept-section-card" style="--section-accent: #7c3aed">
				<div class="section-top">
					<div class="section-title-wrap">
						<h2 class="satoshi">Labs & Infrastructure</h2>
						<div class="section-underline"></div>
					</div>
				</div>
				<div class="labs-detailed-grid">
					{#each labCategories as cat}
						<div class="lab-category-card" style="--cat-accent: {cat.color}">
							<div class="cat-header">
								<h4 class="satoshi">{cat.name}</h4>
							</div>
							<ul class="inter lab-list">
								{#each cat.labs as lab}
									<li>
										<svg
											viewBox="0 0 24 24"
											width="14"
											height="14"
											fill="none"
											stroke="currentColor"
											stroke-width="2.5"
										>
											<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
											<path d="M22 4L12 14.01l-3-3"></path>
										</svg>
										<span>{lab}</span>
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</section>

			<!-- Faculty Profile -->
			<section id="faculty" class="dept-section-card" style="--section-accent: #059669">
				<div class="section-top">
					<div class="section-title-wrap">
						<h2 class="satoshi">Faculty Excellence</h2>
						<div class="section-underline"></div>
					</div>
				</div>
				<div class="table-viewport scrollbar-hide">
					<table>
						<thead>
							<tr class="inter">
								<th>NAME</th>
								<th>QUALIFICATION</th>
								<th>DESIGNATION</th>
								<th>EXPERIENCE</th>
							</tr>
						</thead>
						<tbody>
							{#each facultyRows as faculty}
								<tr class="inter">
									<td class="bold-name">{faculty.name}</td>
									<td class="muted-text">{faculty.qual}</td>
									<td>{faculty.role}</td>
									<td class="muted-text">{faculty.exp}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>

			<!-- HOD Message -->
			<section id="hod" class="dept-section-card hod-card" style="--section-accent: #db2777">
				<div class="hod-grid">
					<div class="hod-img-wrap">
						<img src="/cse hod.jpg" alt="Prof. S. Durga Prasad" />
					</div>
					<div class="hod-content-wrap">
						<span class="hod-eyebrow satoshi">MESSAGE FROM THE HOD</span>
						<h2 class="satoshi">Prof. S. Durga Prasad</h2>
						<p class="hod-role inter">HEAD OF DEPARTMENT | CSE</p>
						<p class="hod-text inter">
							"Welcome to the Department of Computer Science and Engineering. Our mission is to
							build strong technologists with analytical depth, engineering discipline, and a
							commitment to innovation and societal progress."
						</p>
					</div>
				</div>
			</section>

			<!-- Contact -->
			<section
				id="contact"
				class="dept-section-card contact-section"
				style="--section-accent: #0284c7"
			>
				<div class="section-top">
					<div class="section-title-wrap">
						<h2 class="satoshi">Contact CSE</h2>
						<div class="section-underline"></div>
					</div>
				</div>
				<div class="contact-data-grid inter">
					<div class="contact-item">
						<span class="clabel">Official Email</span>
						<span class="cval">cse@bitsvizag.com</span>
					</div>
					<div class="contact-item">
						<span class="clabel">Phone / Helpdesk</span>
						<span class="cval">+91 99999 88888</span>
					</div>
					<div class="contact-item">
						<span class="clabel">Location</span>
						<span class="cval">Block A, 2nd Floor, BITS Campus</span>
					</div>
				</div>
			</section>
		</main>
	</div>
</div>

<style>
	:global(body) {
		background-color: #f8fafc;
		margin: 0;
		padding: 0;
	}

	.dept-premium-root {
		opacity: 0;
		transition: opacity 1s ease;
		background: linear-gradient(180deg, #f1f5f9 0%, #f8fafc 100%);
	}

	.dept-premium-root.mounted {
		opacity: 1;
	}

	/* Hero Header */
	.header-hero {
		height: 430px;
		background: #09090b
			url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop')
			center/cover;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: white;
		padding-bottom: 110px;
	}

	.header-overlay {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle at center,
			rgba(9, 9, 11, 0.4) 0%,
			rgba(9, 9, 11, 0.85) 100%
		);
	}

	.header-content {
		position: relative;
		z-index: 10;
		padding: 0 24px;
		max-width: 1200px;
		margin-top: -30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.welcome-text {
		display: flex;
		gap: 0;
		margin-bottom: 12px;
	}

	.animated-char {
		display: inline-block;
		font-size: 0.85rem;
		font-weight: 800;
		letter-spacing: 0.4em;
		color: #ffffff;
		text-transform: uppercase;
		opacity: 0;
		transform: translateY(10px);
		animation: charAppear 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	@keyframes charAppear {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.header-content h1 {
		font-size: clamp(2rem, 6vw, 3.8rem);
		font-weight: 900;
		margin: 0;
		letter-spacing: -0.04em;
		line-height: 1.3;
		padding: 10px 0;
		background: linear-gradient(
			to right,
			#f4f4f5 0%,
			#ffffff 25%,
			#60a5fa 50%,
			#ffffff 75%,
			#f4f4f5 100%
		);
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shine 6s linear infinite;
		filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2));
		white-space: nowrap;
	}

	@keyframes shine {
		to {
			background-position: 200% center;
		}
	}

	/* Layout Grid */
	.main-content-layout {
		max-width: 1300px;
		margin: -180px auto 0;
		padding: 40px 24px 60px;
		display: grid;
		grid-template-columns: 320px 1fr;
		gap: 32px;
		position: relative;
		z-index: 20;
	}

	/* Sidebar */
	.side-nav-container {
		position: sticky;
		top: 40px;
		height: calc(100vh - 80px);
	}
	.side-nav-card {
		background: white;
		border-radius: 24px;
		padding: 24px;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
		border: 1px solid #e2e8f0;
	}

	.side-nav-title {
		font-size: 0.8rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		color: #64748b;
		margin-bottom: 24px;
		padding-left: 12px;
	}
	.side-nav-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.side-nav-btn {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 12px 16px;
		border-radius: 14px;
		border: none;
		background: transparent;
		color: #475569;
		font-weight: 600;
		font-size: 0.95rem;
		cursor: pointer;
		transition: all 0.2s ease;
		text-align: left;
		position: relative;
	}

	.side-nav-btn:hover {
		background: #f8fafc;
		color: #0f172a;
		transform: translateX(5px);
	}
	.side-nav-btn.active {
		background: #f1f5f9;
		color: var(--nav-accent);
	}
	.nav-btn-icon {
		color: #94a3b8;
		transition: color 0.2s;
	}
	.side-nav-btn.active .nav-btn-icon {
		color: var(--nav-accent);
	}
	.nav-active-dot {
		position: absolute;
		right: 16px;
		width: 6px;
		height: 6px;
		background: var(--nav-accent);
		border-radius: 50%;
		box-shadow: 0 0 10px var(--nav-accent);
	}

	/* Main Section Cards */
	.content-body-grid {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	/* Special case for Vision section to expand full width */
	#vision.vm-premium-section {
		grid-column: 1 / -1;
		width: 100%;
		margin-top: 20px;
	}

	.dept-section-card {
		background: white;
		border-radius: 32px;
		padding: 48px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
		border: 1px solid #e2e8f0;
		transition: transform 0.3s ease;
	}

	.dept-section-card:hover {
		transform: translateY(-4px);
	}
	.section-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 40px;
	}
	.section-title-wrap h2 {
		font-size: 2.2rem;
		font-weight: 800;
		margin: 0;
		color: #0f172a;
		letter-spacing: -0.03em;
	}
	.section-underline {
		width: 100px;
		height: 4px;
		background: linear-gradient(90deg, var(--section-accent), #0f172a);
		border-radius: 100px;
		margin-top: 12px;
		position: relative;
		overflow: hidden;
		box-shadow: 0 4px 15px -4px var(--section-accent);
		transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	}

	.section-underline::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 50%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
		animation: hyper-shimmer 2.5s infinite linear;
	}

	@keyframes hyper-shimmer {
		0% {
			left: -100%;
		}
		100% {
			left: 200%;
		}
	}

	.dept-section-card:hover .section-underline {
		width: 200px;
		box-shadow: 0 6px 20px -2px var(--section-accent);
	}
	.intake-group {
		display: flex;
		gap: 12px;
	}
	.intake-badge {
		padding: 8px 16px;
		border-radius: 100px;
		background: #f8fafc;
		border: 1px solid #e2e8f0;
		font-size: 0.85rem;
		font-weight: 700;
		display: flex;
		gap: 6px;
	}
	.intake-badge .val {
		color: var(--bg);
	}

	/* About Grid */
	.about-grid-content {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 40px;
		align-items: center;
	}
	.main-para {
		font-size: 1.1rem;
		line-height: 1.5;
		color: #1e2e34;
		margin-bottom: 20px;
		font-weight: 500;
	}
	.sub-para {
		font-size: 1rem;
		line-height: 1.7;
		color: #11344e;
		text-align: justify;
	}

	/* Slideshow Styles */
	.visual-slideshow {
		position: relative;
		width: 100%;
		aspect-ratio: 4/3;
		border-radius: 24px;
		overflow: hidden;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
		background: #f1f5f9;
	}

	.visual-slideshow img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.slideshow-indicators {
		position: absolute;
		bottom: 16px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 8px;
		z-index: 10;
	}

	.slideshow-indicators .dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.4);
		transition: all 0.3s ease;
	}

	.slideshow-indicators .dot.active {
		background: white;
		width: 24px;
		border-radius: 4px;
	}

	/* Info Split Grid */
	.split-info-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}
	.info-card {
		background: #f8fafc;
		padding: 32px;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
	}
	.info-card h3 {
		font-size: 1.2rem;
		font-weight: 800;
		color: #0f172a;
		margin: 0 0 16px;
	}
	.info-card p,
	.info-card li {
		font-size: 0.95rem;
		color: #475569;
		line-height: 1.6;
	}
	.info-card ul {
		padding-left: 20px;
		display: grid;
		gap: 10px;
	}

	/* Table */
	.table-viewport {
		border-radius: 20px;
		border: 1px solid #f1f5f9;
		overflow-x: auto;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}
	th {
		background: #f8fafc;
		padding: 20px;
		font-size: 0.75rem;
		font-weight: 800;
		color: #64748b;
		border-bottom: 1px solid #f1f5f9;
	}
	td {
		padding: 20px;
		border-bottom: 1px solid #f8fafc;
		font-size: 0.95rem;
		color: #334155;
	}
	.bold-name {
		font-weight: 700;
		color: #2563eb;
	}
	.muted-text {
		color: #94a3b8;
	}

	/* Labs Grid */
	.labs-detailed-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}
	.lab-category-card {
		background: #fbfcfd;
		padding: 32px;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
		border-top: 4px solid var(--cat-accent);
	}
	.lab-category-card h4 {
		font-size: 1.1rem;
		font-weight: 800;
		color: #0f172a;
		margin-bottom: 20px;
	}
	.lab-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 12px;
	}
	.lab-list li {
		font-size: 0.9rem;
		color: #64748b;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.lab-list svg {
		color: var(--cat-accent);
	}

	/* HOD Card */
	.hod-grid {
		display: grid;
		grid-template-columns: 240px 1fr;
		gap: 40px;
		align-items: center;
	}
	.hod-img-wrap img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 24px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
	}
	.hod-eyebrow {
		font-size: 0.75rem;
		font-weight: 800;
		color: #94a3b8;
		letter-spacing: 0.2em;
		display: block;
		margin-bottom: 12px;
	}
	.hod-content-wrap h2 {
		font-size: 2.5rem;
		font-weight: 950;
		color: #db2777;
		margin: 0;
		letter-spacing: -0.04em;
	}
	.hod-role {
		font-size: 0.95rem;
		font-weight: 700;
		color: #1e293b;
		margin: 4px 0 20px;
	}
	.hod-text {
		font-size: 1.2rem;
		line-height: 1.6;
		color: #475569;
		font-weight: 500;
	}

	/* Contact Info */
	.contact-data-grid {
		display: grid;
		gap: 20px;
	}
	.contact-item {
		display: flex;
		justify-content: space-between;
		padding-bottom: 16px;
		border-bottom: 1px solid #f1f5f9;
		font-size: 1.1rem;
	}
	.clabel {
		font-weight: 800;
		color: #0f172a;
	}
	.cval {
		font-weight: 600;
		color: #0284c7;
	}

	/* Vision & Mission Premium Tabs */
	.vm-premium-section {
		padding: 24px 32px !important;
		overflow: hidden;
		margin-top: -150px !important; /* Move up significantly to close gap */
	}

	.vm-title-row {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 4px;
	}

	.vm-icon-badge {
		background: #ffffff;
		color: #d47515;
		padding: 8px;
		border-radius: 12px;
		border: 1px solid #e2e8f0;
	}

	.vm-tabs-nav {
		display: flex;
		gap: 6px;
		margin: 20px 0;
		padding-bottom: 8px;
		overflow-x: auto;
		border-bottom: 1px solid #f1f5f9;
	}

	.vm-tab-btn {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 8px 16px;
		border-radius: 100px;
		border: 1px solid #e2e8f0;
		background: white;
		color: #64748b;
		font-weight: 700;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.3s ease;
		white-space: nowrap;
	}

	.vm-tab-btn.active {
		background: var(--tab-color);
		color: white;
		border-color: var(--tab-color);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.vm-content-viewport {
		min-height: auto;
		position: relative;
	}

	.panel-title {
		font-size: 1.2rem;
		font-weight: 800;
		color: #1e293b;
		margin-bottom: 16px;
	}

	/* Vision Panel */
	.vision-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px 0;
		text-align: center;
	}

	.vision-quote {
		font-size: 1.5rem;
		line-height: 1.6;
		color: #0f172a;
		font-weight: 700;
		padding: 60px 80px;
		background: white;
		border-radius: 40px;
		border: 1px solid #f1f5f9;
		box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.08);
		position: relative;
		max-width: 900px;
		z-index: 1;
	}

	.vision-quote::before {
		content: '';
		position: absolute;
		inset: -2px;
		background: linear-gradient(45deg, var(--section-accent), transparent, var(--section-accent));
		border-radius: 42px;
		z-index: -1;
		opacity: 0.2;
	}

	/* Mission Cards - Centered Alignment */
	.mission-panel .panel-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 32px;
		max-width: 1000px;
		margin: 0 auto;
	}

	.m-card {
		text-align: center;
		align-items: center;
		padding: 40px 32px;
		background: white;
		border-radius: 32px;
		border: 1px solid #f1f5f9;
		box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.04);
	}

	.m-id {
		margin: 0 auto 16px;
		font-size: 0.7rem;
		padding: 6px 16px;
		border-radius: 100px;
		text-transform: uppercase;
	}

	.m-card p {
		font-size: 1rem;
		font-weight: 600;
		color: #334155;
	}

	/* PEOs - Horizontal Alignment */
	.peos-panel .panel-list {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
	}

	.peo-item {
		flex: 1;
		min-width: 200px;
		max-width: 280px;
		flex-direction: column;
		text-align: center;
		padding: 32px 24px;
		background: #f8fafc;
	}

	.peo-dot {
		margin-bottom: 20px;
		width: 16px;
		height: 16px;
	}

	/* Knowledge Chips */
	.k-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center;
	}

	.k-card {
		flex: 1;
		min-width: 260px;
		padding: 24px 32px;
		border-top: none;
		border-left: 5px solid var(--section-accent);
		background: #f1f5f9;
	}

	.k-card h4 {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--section-accent);
		margin-bottom: 8px;
	}

	.k-card p {
		font-size: 0.9rem;
		font-weight: 700;
		color: #1e293b;
	}

	/* SDGs List Style */
	.sdg-grid {
		grid-template-columns: 1fr;
		max-width: 800px;
		margin: 0 auto;
	}

	.m-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
		border-color: var(--section-accent);
	}

	.m-card p {
		font-size: 0.95rem;
		line-height: 1.6;
		color: #475569;
		margin: 0;
	}

	/* PEOs & PSOs */
	.peo-item {
		display: flex;
		gap: 24px;
		background: white;
		padding: 24px;
		border-radius: 20px;
		border: 1px solid #f1f5f9;
		align-items: center;
		transition: all 0.3s ease;
	}

	.peo-item:hover {
		border-color: var(--section-accent);
		background: color-mix(in srgb, var(--section-accent), transparent 98%);
	}

	.peo-dot {
		width: 12px;
		height: 12px;
		background: var(--section-accent);
		border-radius: 4px;
		rotate: 45deg;
		flex-shrink: 0;
		box-shadow: 0 0 15px var(--section-accent);
	}

	.peo-id {
		font-weight: 900;
		color: var(--section-accent);
		font-size: 0.8rem;
		margin-bottom: 4px;
		display: block;
	}

	.pso-card {
		display: flex;
		align-items: flex-start;
		gap: 20px;
		padding: 24px;
		background: white;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
		transition: all 0.4s ease;
	}

	.pso-icon {
		background: var(--section-accent);
		color: white;
		padding: 12px;
		border-radius: 16px;
		box-shadow: 0 10px 20px -5px var(--section-accent);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* POs Grid - Brand New High-Density Alignment */
	.pos-panel {
		padding: 10px 0;
	}

	.pos-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
		width: 100%;
	}

	.po-card {
		background: #f8fafc;
		padding: 16px;
		border-radius: 16px;
		border: 1px solid #e2e8f0;
		transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
		display: flex;
		flex-direction: column;
		gap: 8px;
		position: relative;
		overflow: hidden;
	}

	.po-card:hover {
		background: white;
		border-color: var(--section-accent);
		transform: translateY(-4px);
		box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.1);
	}

	.po-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.po-id {
		background: var(--section-accent);
		color: white;
		padding: 3px 8px;
		border-radius: 6px;
		font-size: 0.65rem;
		font-weight: 900;
		letter-spacing: 0.05em;
	}

	.po-card h4 {
		font-size: 0.85rem;
		font-weight: 800;
		color: #0f172a;
		margin: 0;
	}

	.po-card p {
		font-size: 0.75rem;
		line-height: 1.4;
		color: #64748b;
		margin: 0;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* Tablet/Mobile refinement for POs */
	@media (max-width: 1100px) {
		.pos-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (max-width: 800px) {
		.pos-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Knowledge & SDGs */
	.k-card {
		background: white;
		padding: 32px;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
		border-top: 5px solid var(--section-accent);
		transition: all 0.3s ease;
	}

	.k-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.02);
	}

	.sdg-card {
		background: white;
		padding: 24px;
		border-radius: 20px;
		border: 1px solid #f1f5f9;
		border-left: 6px solid var(--sdg-color);
		display: flex;
		gap: 20px;
		transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.sdg-card:hover {
		transform: translateX(12px) scale(1.02);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
	}

	.sdg-content h4 {
		font-size: 0.95rem;
	}
	.sdg-content p {
		font-size: 0.8rem;
	}

	.pos-scroll-area {
		overflow-x: auto;
		padding-bottom: 10px;
	}

	@media (max-width: 1200px) {
		.main-content-layout {
			grid-template-columns: 1fr;
			padding: 0 16px 60px;
		}
		.side-nav-container {
			position: static;
			height: auto;
			margin-bottom: 32px;
		}
		.side-nav-list {
			flex-direction: row;
			overflow-x: auto;
			padding-bottom: 10px;
		}
		.side-nav-btn {
			white-space: nowrap;
		}
		.header-hero {
			margin-bottom: -40px;
		}
	}

	@media (max-width: 768px) {
		.about-grid-content,
		.split-info-grid,
		.labs-detailed-grid,
		.hod-grid {
			grid-template-columns: 1fr;
		}
		.dept-section-card {
			padding: 32px 24px;
		}
		.header-hero {
			height: 300px;
		}
		.hod-content-wrap h2 {
			font-size: 2rem;
		}
	}
</style>
