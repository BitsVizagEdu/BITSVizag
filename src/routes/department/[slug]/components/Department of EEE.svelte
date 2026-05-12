<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import HodMessage from '$lib/components/HodMessage.svelte';

	const navItems = [
		{
			id: 'about',
			label: 'About Department',
			icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			color: '#0369a1'
		},
		{
			id: 'vision',
			label: 'Vision & Mission',
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
			color: '#0ea5e9'
		},
		{
			id: 'labs',
			label: 'Labs & Infra',
			icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
			color: '#38bdf8'
		},
		{
			id: 'jobs',
			label: 'Career Pathways',
			icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: '#f97316'
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
			id: 'contact',
			label: 'Contact Info',
			icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: '#0284c7'
		}
	];

	const jobRoles = [
		{
			role: 'Power Systems Engineer',
			description:
				'Designing and managing electrical power generation, transmission, and distribution.',
			skills: ['Power World', 'ETAP', 'Load Flow', 'Protection'],
			icon: 'M13 10V3L4 14h7v7l9-11h-7z',
			color: '#f97316'
		},
		{
			role: 'Control Systems Engineer',
			description: 'Designing systems to control complex processes in automation and robotics.',
			skills: ['MATLAB', 'Simulink', 'PLC/SCADA', 'Feedback Control'],
			icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
			color: '#0ea5e9'
		},
		{
			role: 'Renewable Energy Consultant',
			description:
				'Developing sustainable energy solutions including Solar, Wind, and Smart Grids.',
			skills: ['Solar PV', 'Wind Turbines', 'Grid Integration', 'Sustainability'],
			icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
			color: '#10b981'
		},
		{
			role: 'Electrical Design Engineer',
			description:
				'Creating electrical schematics and layouts for industrial and residential projects.',
			skills: ['AutoCAD Electrical', 'Revit', 'PCB Design', 'Wiring'],
			icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
			color: '#8b5cf6'
		},
		{
			role: 'Automation Engineer',
			description:
				'Implementing automated manufacturing systems using advanced robotics and sensors.',
			skills: ['Robotics', 'Sensors', 'HMI', 'Industrial IoT'],
			icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: '#ef4444'
		},
		{
			role: 'Maintenance Engineer',
			description:
				'Ensuring the reliability and efficiency of heavy electrical machinery and equipment.',
			skills: ['Troubleshooting', 'Preventive Maint', 'Safety', 'Drives'],
			icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
			color: '#0d9488'
		}
	];

	const careerResources = {
		jobs: [
			{ name: 'PowerJobs', url: 'https://www.powerjobs.com' },
			{ name: 'Engineering.com', url: 'https://www.engineering.com' },
			{ name: 'Indeed', url: 'https://www.indeed.com' },
			{ name: 'Naukri', url: 'https://www.naukri.com' }
		],
		tools: [
			{ name: 'MATLAB', url: 'https://www.mathworks.com' },
			{ name: 'AutoCAD Electrical', url: 'https://www.autodesk.com' },
			{ name: 'ETAP', url: 'https://etap.com' }
		],
		learning: [
			{ name: 'IEEE Spectrum', url: 'https://spectrum.ieee.org' },
			{ name: 'NPTEL Electrical', url: 'https://nptel.ac.in' },
			{ name: 'Coursera EEE', url: 'https://www.coursera.org' }
		],
		resume: [
			{ name: 'Overleaf', url: 'https://www.overleaf.com' },
			{ name: 'Canva', url: 'https://www.canva.com' }
		]
	};

	const focusRoadmap = [
		{ year: '1st Year', goals: ['Electrical Science', 'Circuit Theory', 'Engineering Physics'] },
		{
			year: '2nd Year',
			goals: ['Electrical Machines', 'Digital Electronics', 'Field Theory', 'Analog ICs']
		},
		{
			year: '3rd Year',
			goals: ['Power Systems', 'Control Systems', 'Power Electronics', 'Microcontrollers']
		},
		{
			year: 'Final Year',
			goals: ['Smart Grids', 'Renewable Energy', 'Switchgear', 'EEE Capstone Project']
		}
	];

	const intake = [
		{ key: 'B.Tech', value: '60', color: '#0369a1' },
		{ key: 'M.Tech', value: '18', color: '#0ea5e9' }
	];
	const deptImages = ['/eee1.jpg', '/eee2.jpg', '/eee3.jpg'];

	const labCategories = [
		{
			id: 'machines-power',
			name: 'Machines & Power Systems',
			color: '#0369a1',
			icon: 'M13 10V3L4 14h7v7l9-11h-7z',
			labs: [
				'Electrical Machines Lab',
				'Power System & Systems Lab',
				'Power Systems Simulation Lab',
				'Power Electronics & Drives Lab'
			],
			description:
				'Hands-on training with heavy electrical machinery and power distribution simulations.'
		},
		{
			id: 'circuits-control',
			name: 'Circuits & Control',
			color: '#0ea5e9',
			icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
			labs: [
				'Electrical Circuits Lab',
				'Electrical Measurements Lab',
				'Control Systems Lab',
				'Linear & Digital IC Applications Lab'
			],
			description: 'Mastering circuit analysis, precision measurement, and system feedback loops.'
		},
		{
			id: 'digital-micro',
			name: 'Digital & Microprocessors',
			color: '#38bdf8',
			icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z',
			labs: [
				'Microprocessors & Microcontrollers Lab',
				'Electric Drives Lab',
				'Simulation of Electrical Systems'
			],
			description: 'Bridging electrical engineering with modern computer-controlled automation.'
		}
	];

	let activeLabCat = 'machines-power';

	const visionMissionTabs = [
		{
			id: 'vision',
			label: 'Vision',
			color: '#0ea5e9',
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
		},
		{ id: 'mission', label: 'Mission', color: '#0369a1', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
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
		{ id: 'pos', label: 'POs', color: '#ec4899', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
		{
			id: 'sdgs',
			label: 'SDGs',
			color: '#10b981',
			icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
		}
	];

	let activeVmTab = 'vision';
	$: activeTabColor = visionMissionTabs.find((t) => t.id === activeVmTab)?.color || '#0ea5e9';

	const vmContent = {
		vision: {
			text: '“To be a center of excellence in Electrical and Electronics Engineering by imparting quality education and research to meet the global energy challenges.”'
		},
		mission: [
			{
				id: 'M1',
				text: 'Provide high-quality technical education in power systems, control, and renewable energy.'
			},
			{
				id: 'M2',
				text: 'Foster innovation and research to solve complex electrical engineering problems.'
			},
			{
				id: 'M3',
				text: 'Promote industry-academia interaction for professional growth and placements.'
			},
			{
				id: 'M4',
				text: 'Instill ethical values and social responsibility in future engineers.'
			}
		],
		peos: [
			{
				id: 'PEO1',
				text: 'Apply technical knowledge to design and implement efficient electrical systems.'
			},
			{
				id: 'PEO2',
				text: 'Excel in professional careers across power, automation, and core engineering industries.'
			},
			{
				id: 'PEO3',
				text: 'Engage in research and lifelong learning to adapt to evolving energy technologies.'
			},
			{
				id: 'PEO4',
				text: 'Demonstrate leadership and ethical practices in multidisciplinary engineering projects.'
			}
		],
		psos: [
			{
				id: 'PSO1',
				text: 'Analyze and design electrical machines, power systems, and control networks.'
			},
			{
				id: 'PSO2',
				text: 'Develop solutions for renewable energy integration and smart grid automation.'
			},
			{
				id: 'PSO3',
				text: 'Apply modern simulation tools like MATLAB and ETAP for electrical design.'
			}
		],
		pos: [
			{
				id: 'PO1',
				title: 'Knowledge',
				text: 'Apply engineering fundamentals to complex electrical problems.'
			},
			{
				id: 'PO2',
				title: 'Analysis',
				text: 'Identify and analyze systems in power and control engineering.'
			},
			{
				id: 'PO3',
				title: 'Design',
				text: 'Architect electrical solutions for societal and industrial needs.'
			},
			{
				id: 'PO4',
				title: 'Modern Tools',
				text: 'Utilize latest software and hardware for system simulation.'
			},
			{
				id: 'PO5',
				title: 'Ethics',
				text: 'Practice professional and ethical engineering responsibilities.'
			}
		],
		sdgs: [
			{
				goal: 'Quality Education',
				desc: 'Promoting specialized technical training in electrical engineering.'
			},
			{
				goal: 'Affordable Energy',
				desc: 'Driving innovations in clean and renewable energy systems.'
			},
			{
				goal: 'Industry Innovation',
				desc: 'Building resilient infrastructure through smart electrical design.'
			},
			{
				goal: 'Decent Work',
				desc: 'Preparing students for careers in power, automation, and electronics.'
			}
		]
	};

	const facultyRows = [
		{
			name: 'Prof. K. Venkateswara Rao',
			role: 'HOD - Professor',
			exp: '25+ Years',
			qual: 'M.Tech., Ph.D',
			mobile: '99999 00000'
		},
		{
			name: 'Dr. E. Anil Kumar',
			role: 'Associate Professor',
			exp: '12+ Years',
			qual: 'M.Tech., Ph.D.',
			mobile: '8096173988'
		},
		{
			name: 'Dr. U. KAMARAJU',
			role: 'Associate Professor',
			exp: '12+ Years',
			qual: 'Ph.D',
			mobile: '9963268636'
		},
		{
			name: 'Mr. P. Arun Tez',
			role: 'Sr. Assistant Professor',
			exp: '11+ Years',
			qual: 'M.Tech',
			mobile: '9494518461'
		},
		{
			name: 'Mr. B. V. S. PREM SAGAR',
			role: 'Sr. Assistant Professor',
			exp: '10+ Years',
			qual: 'M.Tech., M.B.A',
			mobile: '9985742615'
		},
		{
			name: 'Ms. D. Sudhamsha',
			role: 'Assistant Professor',
			exp: '8+ Years',
			qual: 'M.Tech',
			mobile: '9177228301'
		},
		{
			name: 'Ms. G. Aliveni',
			role: 'Assistant Professor',
			exp: '7+ Years',
			qual: 'M.Tech',
			mobile: '6305862557'
		}
	];

	let facultySearch = '';
	$: filteredFacultyRows = facultyRows.filter(
		(f) =>
			f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
			f.role.toLowerCase().includes(facultySearch.toLowerCase()) ||
			f.qual.toLowerCase().includes(facultySearch.toLowerCase())
	);

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
				{#each 'WELCOME TO THE EEE 2026'.split('') as char, i}
					<span class="animated-char" style="animation-delay: {i * 0.05}s">
						{char === ' ' ? '\u00A0' : char}
					</span>
				{/each}
			</div>
			<h1 class="satoshi"><span>Electrical and Electronics</span><span>Engineering</span></h1>
		</div>
	</header>

	<div class="main-content-layout">
		<!-- Sidebar Navigation -->
		<aside class="side-nav-container">
			<div class="side-nav-card">
				<div class="side-nav-title satoshi">EEE DEPARTMENT MENU</div>
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
			<section id="about" class="dept-section-card" style="--section-accent: #0369a1">
				<div class="section-top">
					<div class="section-title-wrap">
						<h2 class="satoshi">About EEE</h2>
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
							The Department of Electrical and Electronics Engineering at BITS Vizag is dedicated to
							powering the future of global infrastructure and smart energy systems.
						</p>
						<p class="inter sub-para">
							Focusing on Power Systems, Renewable Energy, and Automation, we prepare students for
							an engineering world where sustainable power and intelligent control systems drive
							innovation in energy, robotics, and industrial sectors.
						</p>
					</div>
					<div class="about-visual-side">
						<div class="visual-slideshow">
							{#if !mounted}
								<img src={deptImages[0]} alt="EEE Department" />
							{:else}
								{#each deptImages as img, i}
									{#if currentImg === i}
										<img
											src={img}
											alt="Dept View {i}"
											loading="lazy"
											in:fade={{ duration: 800 }}
											out:fade={{ duration: 800 }}
										/>
									{/if}
								{/each}
							{/if}
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
						<h2 class="satoshi">Vision & Mission</h2>
					</div>
					<div class="section-underline"></div>
				</div>
			</div>

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
						{:else if activeVmTab === 'sdgs'}
							<div class="sdgs-panel">
								<div class="sdg-grid">
									{#each vmContent.sdgs as sdg, i}
										<div
											class="sdg-card"
											in:fly={{ x: 20, duration: 400, delay: i * 100 }}
											style="--sdg-color: {['#4C9F38', '#BF1D2D', '#26BDE2', '#FCC30B'][i % 4]}"
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

		<!-- Labs & Infrastructure -->
		<section
			id="labs"
			class="dept-section-card labs-premium-section"
			style="--section-accent: #38bdf8"
		>
			<div class="section-top">
				<div class="section-title-wrap">
					<div class="labs-title-row">
						<h2 class="satoshi">Labs & Infrastructure</h2>
					</div>
					<div class="section-underline"></div>
				</div>
			</div>

			<div class="labs-interactive-grid">
				<div class="labs-nav-sidebar scrollbar-hide">
					{#each labCategories as cat}
						<button
							class="lab-nav-item inter"
							class:active={activeLabCat === cat.id}
							on:click={() => (activeLabCat = cat.id)}
							style="--nav-color: {cat.color}"
						>
							<div class="nav-icon">
								<svg
									viewBox="0 0 24 24"
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d={cat.icon}></path>
								</svg>
							</div>
							<div class="nav-text">
								<span class="cat-name">{cat.name}</span>
								<span class="cat-count">{cat.labs.length} Facilities</span>
							</div>
							<div class="active-indicator"></div>
						</button>
					{/each}
				</div>

				<div class="labs-display-pane">
					{#each labCategories as cat}
						{#if activeLabCat === cat.id}
							<div class="labs-content-wrap" in:fly={{ x: 20, duration: 400 }}>
								<div class="display-header">
									<h3 class="satoshi" style="color: {cat.color}">{cat.name}</h3>
									<p class="inter">{cat.description}</p>
								</div>

								<div class="lab-items-grid">
									{#each cat.labs as lab, i}
										<div class="lab-item-card" in:fly={{ y: 20, duration: 400, delay: i * 50 }}>
											<div class="lab-status-dot" style="background: {cat.color}"></div>
											<span class="inter lab-name">{lab}</span>
											<div class="lab-action-btn">
												<svg
													viewBox="0 0 24 24"
													width="14"
													height="14"
													fill="none"
													stroke="currentColor"
													stroke-width="3"
												>
													<path d="M5 12h14M12 5l7 7-7 7"></path>
												</svg>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</section>

		<!-- Career Pathways Section -->
		<section id="jobs" class="dept-section-card" style="--section-accent: #f97316">
			<div class="section-top">
				<div class="section-title-wrap">
					<h2 class="satoshi">Career Pathways</h2>
					<div class="section-underline"></div>
				</div>
			</div>

			<div class="job-roles-ultra-grid">
				{#each jobRoles as job, i}
					<div class="job-ultra-card" in:fly={{ y: 30, duration: 600, delay: i * 100 }}>
						<div class="job-u-icon" style="background: {job.color}15; color: {job.color}">
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d={job.icon}></path>
							</svg>
						</div>
						<div class="job-u-content">
							<h4 class="satoshi">{job.role}</h4>
							<p class="inter">{job.description}</p>
							<div class="job-u-skills">
								{#each job.skills as skill}
									<span class="u-skill inter">{skill}</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="career-resources-box">
				<div class="resource-grid">
					<div class="res-group">
						<h5 class="satoshi">Top Job Portals</h5>
						<div class="res-links">
							{#each careerResources.jobs as link}
								<a href={link.url} target="_blank" class="inter">{link.name}</a>
							{/each}
						</div>
					</div>
					<div class="res-group">
						<h5 class="satoshi">Core Tools</h5>
						<div class="res-links">
							{#each careerResources.tools as link}
								<a href={link.url} target="_blank" class="inter">{link.name}</a>
							{/each}
						</div>
					</div>
					<div class="res-group">
						<h5 class="satoshi">Learning Hubs</h5>
						<div class="res-links">
							{#each careerResources.learning as link}
								<a href={link.url} target="_blank" class="inter">{link.name}</a>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Roadmap Section -->
		<section id="roadmap" class="dept-section-card" style="--section-accent: #8b5cf6">
			<div class="section-top">
				<div class="section-title-wrap">
					<h2 class="satoshi">EEE Engineering Roadmap</h2>
					<div class="section-underline"></div>
				</div>
			</div>

			<div class="roadmap-ultra-grid">
				{#each focusRoadmap as step, i}
					<div class="roadmap-card" in:fly={{ x: i % 2 === 0 ? -30 : 30, duration: 700 }}>
						<div class="rd-year satoshi">{step.year}</div>
						<div class="rd-goals">
							{#each step.goals as goal}
								<div class="goal-chip inter">
									<div class="g-dot"></div>
									{goal}
								</div>
							{/each}
						</div>
						<div class="rd-step-num">{i + 1}</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Faculty Table Section -->
		<section
			id="faculty"
			class="dept-section-card faculty-table-section"
			style="--section-accent: #059669"
		>
			<div class="section-top">
				<div class="section-title-wrap">
					<h2 class="satoshi">EEE Faculty</h2>
					<div class="section-underline"></div>
				</div>
				<div class="faculty-search-wrap">
					<input
						type="text"
						bind:value={facultySearch}
						placeholder="Search EEE faculty..."
						class="inter"
					/>
				</div>
			</div>

			<div class="faculty-table-viewport scrollbar-hide">
				<table class="premium-table">
					<thead>
						<tr class="satoshi">
							<th>Name & Qualification</th>
							<th>Designation</th>
							<th>Experience</th>
							<th>Contact Info</th>
						</tr>
					</thead>
					<tbody>
						{#each filteredFacultyRows as f, i}
							<tr in:fade={{ duration: 400, delay: i * 50 }}>
								<td>
									<div class="f-main">
										<span class="f-name satoshi">{f.name}</span>
										<span class="f-qual inter">{f.qual}</span>
									</div>
								</td>
								<td><span class="f-role inter">{f.role}</span></td>
								<td><span class="f-exp satoshi">{f.exp}</span></td>
								<td>
									<div class="f-contact">
										<a href="tel:{f.mobile}" class="f-phone inter">
											<svg
												viewBox="0 0 24 24"
												width="14"
												height="14"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
											>
												<path
													d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
												></path>
											</svg>
											{f.mobile}
										</a>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>

		<!-- HOD Message Section -->
		<section id="hod" class="dept-section-card hod-ultra-section" style="--section-accent: #db2777">
			<div class="hod-container-layout">
				<div class="hod-visual" in:fly={{ x: -40, duration: 800 }}>
					<div class="hod-image-glow"></div>
					<img src="/eee hod.jpg" alt="Prof. K. Venkateswara Rao" loading="lazy" />
					<div class="hod-badge satoshi">25+ Years Exp</div>
				</div>
				<div class="hod-content" in:fly={{ x: 40, duration: 800 }}>
					<div class="quote-icon">
						<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
							<path
								d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11M14.017 21H10.017V11C10.017 10.4477 10.4647 10 11.017 10H14.017M14.017 21C14.017 21.5523 13.5693 22 13.017 22H11.017C10.4647 22 10.017 21.5523 10.017 21V19C10.017 18.4477 10.4647 18 11.017 18H14.017"
							></path>
						</svg>
					</div>
					<h3 class="satoshi hod-title">From the desk of HOD</h3>
					<p class="inter hod-message">
						We are committed to fostering excellence in Electrical Engineering, empowering students
						with the skills and innovation needed to lead in the global energy and automation
						landscape.
					</p>
					<div class="hod-signature">
						<span class="name satoshi">Prof. K. Venkateswara Rao</span>
						<span class="title inter">Head of Department, EEE</span>
					</div>
				</div>
			</div>
		</section>
		<!-- Contact Section -->
		<section
			id="contact"
			class="dept-section-card contact-ultra-section"
			style="--section-accent: #0284c7"
		>
			<div class="contact-grid-layout">
				<div class="contact-info-side">
					<h2 class="satoshi">Get in Touch</h2>
					<p class="inter">
						Have questions about the EEE department? Our team is here to help you.
					</p>
					<div class="contact-methods">
						<div class="c-method-card">
							<div class="c-icon" style="background: #0284c715; color: #0284c7">
								<svg
									viewBox="0 0 24 24"
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
									></path>
									<polyline points="22,6 12,13 2,6"></polyline>
								</svg>
							</div>
							<div class="c-text">
								<span class="label inter">Email Us</span>
								<span class="val satoshi">eee@bitsvizag.com</span>
							</div>
						</div>
						<div class="c-method-card">
							<div class="c-icon" style="background: #10b98115; color: #10b981">
								<svg
									viewBox="0 0 24 24"
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
									></path>
								</svg>
							</div>
							<div class="c-text">
								<span class="label inter">Call Us</span>
								<span class="val satoshi">+91 99999 00000</span>
							</div>
						</div>
					</div>
				</div>
				<div class="contact-quick-links">
					<h3 class="satoshi">Quick Support</h3>
					<div class="quick-links-grid">
						<a
							href="mailto:eee@bitsvizag.com"
							class="c-u-btn mail-u-btn"
							in:fly={{ y: 20, duration: 500 }}
						>
							<div class="c-u-icon">
								<svg
									viewBox="0 0 24 24"
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
									></path>
									<polyline points="22,6 12,13 2,6"></polyline>
								</svg>
							</div>
							<div class="c-u-info">
								<span class="label inter">Official Email</span>
								<span class="val satoshi">eee@bitsvizag.com</span>
							</div>
						</a>
						<a
							href="tel:+919999900000"
							class="c-u-btn phone-u-btn"
							in:fly={{ y: 20, duration: 500, delay: 200 }}
						>
							<div class="c-u-icon">
								<svg
									viewBox="0 0 24 24"
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									><path
										d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
									></path></svg
								>
							</div>
							<div class="c-u-info">
								<span class="label inter">Phone Support</span>
								<span class="val satoshi">+91 99999 00000</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	:global(body) {
		background-color: #ffffff;
		margin: 0;
		padding: 0;
	}

	.dept-premium-root {
		opacity: 0;
		transition: opacity 1s ease;
		background: #ffffff;
	}

	.dept-premium-root.mounted {
		opacity: 1;
	}

	/* Hero Header */
	.header-hero {
		height: 430px;
		background-color: #0f172a;
		background-image:
			linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url('/eee4.png');
		background-position: center;
		background-size: cover;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: white;
		padding-bottom: 40px;
	}

	.header-overlay {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle at center,
			rgba(3, 105, 161, 0.5) 0%,
			rgba(15, 23, 42, 0.95) 100%
		);
	}

	.header-content {
		position: relative;
		z-index: 10;
		padding: 0 24px;
		max-width: 1200px;
		margin-top: 20px;
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
		font-size: 1.2rem;
		font-weight: 700;
		letter-spacing: 0.4em;
		color: #e0e7ff;
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
		font-size: clamp(2rem, 4.5vw, 3.5rem);
		font-weight: 800;
		margin: 0;
		letter-spacing: -0.02em;
		line-height: 1.2;
		padding: 10px 0;
		color: #ffffff;
		text-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
	}

	.header-content h1 span {
		display: block;
		white-space: nowrap;
		opacity: 0;
		transform: translateY(30px);
		animation: premiumReveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}

	.header-content h1 span:first-child {
		animation-delay: 0.6s;
	}

	.header-content h1 span:last-child {
		animation-delay: 0.8s;
	}

	@keyframes premiumReveal {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Main Layout */
	.main-content-layout {
		max-width: 100%;
		margin: -60px auto 0;
		padding: 0 24px 100px;
		display: grid;
		grid-template-columns: 320px 1fr;
		gap: 40px;
		position: relative;
		z-index: 10;
	}

	/* Sidebar */
	.side-nav-container {
		position: sticky;
		top: 40px;
		height: fit-content;
	}

	.side-nav-card {
		background: white;
		border-radius: 32px;
		padding: 32px;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
		border: 1px solid #f1f5f9;
	}

	.side-nav-title {
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.15em;
		color: #94a3b8;
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
		gap: 16px;
		padding: 14px 20px;
		border-radius: 16px;
		color: #64748b;
		transition: all 0.3s;
		position: relative;
		text-align: left;
		width: 100%;
		background: transparent;
		border: none;
		cursor: pointer;
	}

	.side-nav-btn:hover {
		background: #f8fafc;
		color: #0f172a;
	}

	.side-nav-btn.active {
		background: #f8fafc;
		color: var(--nav-accent);
		font-weight: 700;
	}

	.nav-btn-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 10px;
		background: white;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
		transition: all 0.3s;
	}

	.side-nav-btn.active .nav-btn-icon {
		background: var(--nav-accent);
		color: white;
	}

	.nav-active-dot {
		position: absolute;
		right: 20px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--nav-accent);
	}

	/* Section Cards */
	.dept-section-card {
		background: white;
		border-radius: 28px;
		padding: 32px;
		margin-bottom: 32px;
		border: 1px solid #f8fafc;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.02);
		position: relative;
		overflow: hidden;
		grid-column: 1 / -1;
	}

	main.content-body-grid .dept-section-card {
		grid-column: auto;
	}

	.section-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 48px;
	}

	.section-title-wrap h2 {
		font-size: 1.7rem;
		font-weight: 700;
		color: #0f172a;
		margin: 0;
		letter-spacing: -0.03em;
	}

	.section-underline {
		width: 60px;
		height: 4px;
		background: var(--section-accent);
		border-radius: 2px;
	}

	.intake-group {
		display: flex;
		gap: 12px;
	}

	.intake-badge {
		padding: 8px 16px;
		background: white;
		border: 1px solid #f8fafc;
		border-radius: 12px;
		font-size: 0.85rem;
		font-weight: 700;
	}

	.intake-badge .val {
		color: var(--bg);
	}

	/* About Grid */
	.about-grid-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		align-items: center;
	}

	.main-para {
		font-size: 1.15rem;
		line-height: 1.5;
		font-weight: 600;
		color: #1e293b;
		margin-bottom: 20px;
	}

	.sub-para {
		font-size: 0.9rem;
		line-height: 1.7;
		color: #64748b;
	}

	.visual-slideshow {
		height: 340px;
		border-radius: 24px;
		overflow: hidden;
		position: relative;
		background: #f1f5f9;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
	}

	.visual-slideshow img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		inset: 0;
	}

	.slideshow-indicators {
		position: absolute;
		bottom: 20px;
		left: 20px;
		display: flex;
		gap: 8px;
		z-index: 5;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.4);
		transition: all 0.3s;
	}

	.dot.active {
		width: 24px;
		border-radius: 4px;
		background: white;
	}

	/* Vision & Mission Tab System */
	.vm-premium-section {
		padding: 0;
		border: none;
		background: #ffffff;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.04);
	}

	.vm-premium-section .section-top {
		padding: 40px 40px 20px;
		margin-bottom: 0;
	}

	.vm-title-row {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-bottom: 8px;
	}

	.vm-icon-badge {
		background: #f8fafc;
		padding: 10px;
		border-radius: 12px;
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
	}

	.vm-tabs-nav {
		display: flex;
		padding: 10px 40px;
		gap: 8px;
		background: #ffffff;
		border-bottom: 1px solid #f1f5f9;
		overflow-x: auto;
	}

	.vm-tab-btn {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 10px 20px;
		border-radius: 12px;
		font-size: 0.85rem;
		font-weight: 700;
		color: #64748b;
		transition: all 0.3s;
		white-space: nowrap;
		background: transparent;
		border: 1px solid transparent;
		cursor: pointer;
	}

	.vm-tab-btn:hover {
		background: #f8fafc;
		color: #0f172a;
	}

	.vm-tab-btn.active {
		background: white;
		color: var(--tab-color);
		border-color: #f1f5f9;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	}

	.vm-content-viewport {
		min-height: 380px;
		padding: 40px;
		background: linear-gradient(to bottom, #ffffff, #fcfdfe);
		border-radius: 0 0 28px 28px;
	}

	/* Panel Styles */
	.vision-panel {
		text-align: center;
		padding: 40px 0;
	}

	.panel-title {
		font-size: 0.85rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: #94a3b8;
		margin-bottom: 24px;
	}

	.vision-quote {
		font-size: clamp(1.1rem, 2.2vw, 1.5rem);
		font-weight: 700;
		line-height: 1.5;
		text-align: center;
		padding: 32px;
		background: linear-gradient(90deg, #1e1b4b, #312e81, #4338ca, #312e81, #1e1b4b);
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: visionShimmer 6s linear infinite;
		margin: 0 auto;
		max-width: 900px;
	}

	@keyframes visionShimmer {
		to {
			background-position: 200% center;
		}
	}

	.panel-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 20px;
	}

	.m-card {
		background: white;
		padding: 24px;
		border-radius: 20px;
		border: 1px solid #f1f5f9;
		transition: all 0.3s;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
	}

	.m-card:hover {
		transform: translateY(-5px);
		border-color: var(--section-accent);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
	}

	.m-id {
		display: inline-block;
		font-weight: 900;
		color: var(--section-accent);
		margin-bottom: 12px;
		font-size: 0.9rem;
	}

	.m-card p {
		font-size: 0.95rem;
		line-height: 1.6;
		color: #334155;
		font-weight: 500;
	}

	.panel-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
		max-width: 800px;
		margin: 0 auto;
	}

	.peo-item {
		display: flex;
		gap: 20px;
		padding: 20px;
		background: white;
		border-radius: 16px;
		border: 1px solid #f1f5f9;
		align-items: center;
	}

	.peo-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--section-accent);
		flex-shrink: 0;
	}

	.peo-id {
		font-weight: 800;
		color: var(--section-accent);
		font-size: 0.8rem;
		margin-right: 12px;
	}

	.peo-content p {
		font-size: 0.95rem;
		color: #334155;
		font-weight: 600;
		display: inline;
	}

	.pso-card {
		display: flex;
		gap: 20px;
		padding: 24px;
		background: white;
		border-radius: 20px;
		border: 1px solid #f1f5f9;
	}

	.pso-icon {
		width: 48px;
		height: 48px;
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		flex-shrink: 0;
	}

	.pso-id {
		font-weight: 800;
		font-size: 0.8rem;
		color: #94a3b8;
		display: block;
		margin-bottom: 4px;
	}

	.pso-text p {
		font-size: 0.95rem;
		line-height: 1.5;
		color: #1e293b;
		font-weight: 600;
	}

	.pos-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 16px;
	}

	.po-card {
		padding: 20px;
		background: white;
		border-radius: 16px;
		border: 1px solid #f1f5f9;
		transition: all 0.3s;
	}

	.po-card:hover {
		background: #f8fafc;
	}

	.po-header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 12px;
	}

	.po-id {
		font-size: 0.75rem;
		font-weight: 800;
		color: #64748b;
		background: #f1f5f9;
		padding: 2px 8px;
		border-radius: 6px;
	}

	.po-header h4 {
		font-size: 0.95rem;
		font-weight: 700;
		color: #0f172a;
	}

	.po-card p {
		font-size: 0.85rem;
		line-height: 1.5;
		color: #64748b;
	}

	.sdg-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 20px;
	}

	.sdg-card {
		display: flex;
		gap: 20px;
		padding: 24px;
		background: white;
		border-radius: 20px;
		border: 1px solid #f1f5f9;
		border-left: 6px solid var(--sdg-color);
	}

	.sdg-icon-wrap {
		flex-shrink: 0;
	}

	.sdg-content h4 {
		font-size: 1rem;
		font-weight: 700;
		color: #0f172a;
		margin-bottom: 4px;
	}

	.sdg-content p {
		font-size: 0.85rem;
		color: #64748b;
		line-height: 1.5;
	}

	/* Labs Interactive */
	.labs-premium-section {
		padding: 40px;
	}

	.labs-title-row {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.labs-icon-badge {
		background: #0ea5e9;
		color: white;
		padding: 10px;
		border-radius: 12px;
		box-shadow: 0 8px 16px -4px rgba(14, 165, 233, 0.3);
	}

	.labs-interactive-grid {
		display: grid;
		grid-template-columns: 240px 1fr;
		gap: 32px;
		margin-top: 32px;
		min-height: 400px;
	}

	.labs-nav-sidebar {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.lab-nav-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 16px;
		background: #f8fafc;
		border: 1px solid #f1f5f9;
		border-radius: 14px;
		cursor: pointer;
		transition: all 0.3s;
		text-align: left;
		position: relative;
		overflow: hidden;
		width: 100%;
	}

	.lab-nav-item.active {
		background: white;
		border-color: var(--nav-color);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
	}

	.lab-nav-item .nav-icon {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		background: white;
		color: #94a3b8;
		transition: all 0.3s;
	}

	.lab-nav-item.active .nav-icon {
		background: var(--nav-color);
		color: white;
	}

	.nav-text {
		display: flex;
		flex-direction: column;
	}

	.cat-name {
		font-weight: 600;
		font-size: 0.85rem;
		color: #1e293b;
	}

	.cat-count {
		font-size: 0.7rem;
		color: #94a3b8;
		font-weight: 600;
	}

	.active-indicator {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 4px;
		background: var(--nav-color);
		opacity: 0;
		transition: opacity 0.3s;
	}

	.lab-nav-item.active .active-indicator {
		opacity: 1;
	}

	.labs-display-pane {
		background: #f8fafc;
		border-radius: 24px;
		padding: 28px;
	}

	.display-header {
		margin-bottom: 24px;
	}

	.display-header h3 {
		font-size: 1.25rem;
		font-weight: 800;
		margin-bottom: 8px;
	}

	.display-header p {
		font-size: 0.9rem;
		color: #64748b;
	}

	.lab-items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 12px;
	}

	.lab-item-card {
		background: white;
		padding: 16px 20px;
		border-radius: 16px;
		display: flex;
		align-items: center;
		gap: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
		transition: all 0.3s;
	}

	.lab-item-card:hover {
		transform: scale(1.02);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
	}

	.lab-status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.lab-name {
		font-size: 0.85rem;
		font-weight: 600;
		color: #334155;
		flex: 1;
	}

	.lab-action-btn {
		color: #cbd5e1;
	}

	/* Job Ultra Section */
	.job-roles-ultra-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 20px;
		margin-bottom: 32px;
	}

	.job-ultra-card {
		display: flex;
		gap: 24px;
		padding: 28px;
		background: white;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
		transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
	}

	.job-ultra-card:hover {
		transform: translateY(-8px);
		border-color: var(--section-accent);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
	}

	.job-u-icon {
		width: 56px;
		height: 56px;
		border-radius: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.job-u-content h4 {
		font-size: 1.1rem;
		font-weight: 800;
		color: #0f172a;
		margin-bottom: 8px;
	}

	.job-u-content p {
		font-size: 0.9rem;
		line-height: 1.5;
		color: #64748b;
		margin-bottom: 16px;
	}

	.job-u-skills {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.u-skill {
		font-size: 0.65rem;
		font-weight: 700;
		color: #475569;
		background: #f8fafc;
		padding: 4px 10px;
		border-radius: 6px;
		border: 1px solid #f1f5f9;
	}

	.career-resources-box {
		background: #f8fafc;
		border-radius: 24px;
		padding: 32px;
	}

	.resource-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 32px;
	}

	.res-group h5 {
		font-size: 0.85rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #94a3b8;
		margin-bottom: 16px;
	}

	.res-links {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.res-links a {
		font-size: 0.9rem;
		font-weight: 600;
		color: #475569;
		text-decoration: none;
		transition: color 0.3s;
	}

	.res-links a:hover {
		color: var(--section-accent);
	}

	/* Roadmap Section */
	.roadmap-ultra-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 16px;
	}

	.roadmap-card {
		background: white;
		padding: 32px;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
		position: relative;
		overflow: hidden;
		transition: all 0.3s;
	}

	.roadmap-card:hover {
		border-color: var(--section-accent);
	}

	.rd-year {
		font-size: 1.25rem;
		font-weight: 800;
		color: #0f172a;
		margin-bottom: 24px;
	}

	.rd-goals {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.goal-chip {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.9rem;
		font-weight: 600;
		color: #475569;
	}

	.g-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--section-accent);
	}

	.rd-step-num {
		position: absolute;
		top: -10px;
		right: -10px;
		font-size: 5rem;
		font-weight: 900;
		color: #f1f5f9;
		opacity: 0.5;
		z-index: 0;
	}

	/* Faculty Table */
	.faculty-table-section .section-top {
		align-items: center;
	}

	.faculty-search-wrap input {
		padding: 12px 24px;
		border-radius: 12px;
		border: 1px solid #e2e8f0;
		width: 300px;
		font-size: 0.9rem;
		outline: none;
		transition: all 0.3s;
	}

	.faculty-search-wrap input:focus {
		border-color: var(--section-accent);
		box-shadow: 0 0 0 4px var(--section-accent) 10;
	}

	.faculty-table-viewport {
		overflow-x: auto;
		margin-top: 24px;
	}

	.premium-table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0 8px;
	}

	.premium-table th {
		text-align: left;
		padding: 12px 24px;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #94a3b8;
		background: #f8fafc;
	}

	.premium-table tr {
		background: white;
		transition: all 0.3s;
	}

	.premium-table tbody tr:hover {
		transform: scale(1.005);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	}

	.premium-table td {
		padding: 12px 24px;
		border-bottom: 1px solid #f1f5f9;
	}

	.f-name {
		display: block;
		font-weight: 600;
		color: #0f172a;
		font-size: 0.95rem;
	}

	.f-qual {
		font-size: 0.7rem;
		color: #64748b;
		font-weight: 500;
	}

	.f-role {
		font-weight: 600;
		color: #475569;
		font-size: 0.85rem;
	}

	.f-exp {
		color: #0891b2;
		font-weight: 700;
		font-size: 0.85rem;
	}

	.f-contact {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.f-phone {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 0.85rem;
		color: #64748b;
		text-decoration: none;
		font-weight: 600;
	}

	/* HOD Ultra Section Redesign */
	.hod-ultra-section {
		background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
		padding: 80px 40px;
	}

	.hod-container-layout {
		display: flex;
		align-items: center;
		gap: 60px;
		max-width: 1000px;
		margin: 0 auto;
	}

	.hod-visual {
		position: relative;
		flex-shrink: 0;
	}

	.hod-visual img {
		width: 320px;
		height: 420px;
		object-fit: cover;
		border-radius: 28px;
		position: relative;
		z-index: 2;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
		border: 6px solid white;
	}

	.hod-image-glow {
		position: absolute;
		inset: -15px;
		background: radial-gradient(circle, var(--section-accent) 0%, transparent 70%);
		opacity: 0.1;
		z-index: 1;
		filter: blur(20px);
	}

	.hod-badge {
		position: absolute;
		bottom: 20px;
		right: -15px;
		background: white;
		padding: 10px 20px;
		border-radius: 12px;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
		font-weight: 800;
		color: var(--section-accent);
		font-size: 0.75rem;
		z-index: 3;
		border: 1px solid #f1f5f9;
	}

	.hod-content {
		flex: 1;
	}

	.quote-icon {
		color: var(--section-accent);
		opacity: 0.15;
		margin-bottom: 8px;
	}

	.hod-title {
		font-size: 0.75rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: #94a3b8;
		margin-bottom: 20px;
	}

	.hod-message {
		font-size: 1.05rem;
		line-height: 1.8;
		color: #334155;
		font-weight: 500;
		margin-bottom: 32px;
		font-style: italic;
	}

	.hod-signature {
		display: flex;
		flex-direction: column;
		border-left: 3px solid var(--section-accent);
		padding-left: 20px;
	}

	.hod-signature .name {
		font-size: 1.2rem;
		font-weight: 800;
		color: #0f172a;
	}

	.hod-signature .title {
		font-size: 0.85rem;
		color: #64748b;
		font-weight: 600;
	}

	/* Contact Section */
	.contact-grid-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
	}

	.contact-info-side h2 {
		font-size: 2rem;
		font-weight: 800;
		margin-bottom: 16px;
	}

	.contact-info-side p {
		color: #64748b;
		margin-bottom: 40px;
	}

	.contact-methods {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.c-method-card {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.c-icon {
		width: 48px;
		height: 48px;
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.c-text .label {
		display: block;
		font-size: 0.75rem;
		font-weight: 800;
		color: #94a3b8;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.c-text .val {
		font-size: 1.1rem;
		font-weight: 700;
		color: #0f172a;
	}

	.quick-links-grid {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.c-u-btn {
		display: flex;
		align-items: center;
		gap: 20px;
		padding: 24px;
		border-radius: 20px;
		background: #f8fafc;
		text-decoration: none;
		border: 1px solid #f1f5f9;
		transition: all 0.3s;
	}

	.c-u-btn:hover {
		transform: scale(1.02);
		background: white;
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
		border-color: #e2e8f0;
	}

	.c-u-icon {
		width: 40px;
		height: 40px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
	}

	.mail-u-btn .c-u-icon {
		color: #0284c7;
	}

	.phone-u-btn .c-u-icon {
		color: #10b981;
	}

	.c-u-info .label {
		display: block;
		font-size: 0.7rem;
		font-weight: 700;
		color: #94a3b8;
		text-transform: uppercase;
	}

	.c-u-info .val {
		font-weight: 700;
		color: #0f172a;
	}

	/* Responsive Media Queries */
	@media (max-width: 1200px) {
		.main-content-layout {
			grid-template-columns: 280px 1fr;
			gap: 24px;
		}
		.about-grid-content {
			grid-template-columns: 1fr;
			gap: 40px;
		}
	}

	@media (max-width: 1000px) {
		.main-content-layout {
			display: block;
			padding: 0 20px 60px;
		}
		.side-nav-container {
			display: none;
		}
		.hod-container-layout {
			flex-direction: column;
			text-align: center;
		}
		.contact-grid-layout {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.main-content-layout {
			padding: 0 12px 40px;
			display: block;
			margin-top: -30px;
		}

		.header-hero {
			height: 320px;
		}

		.dept-section-card {
			padding: 20px;
			border-radius: 20px;
		}

		.section-top {
			flex-direction: column;
			gap: 20px;
			margin-bottom: 24px;
		}

		.intake-group {
			width: 100%;
		}

		.intake-badge {
			flex: 1;
			text-align: center;
			padding: 10px;
		}

		.vm-tabs-nav {
			padding: 10px 20px;
		}

		.vm-content-viewport {
			padding: 24px;
		}

		.labs-interactive-grid {
			grid-template-columns: 1fr;
		}

		.labs-premium-section {
			padding: 20px;
		}

		.lab-item-card {
			padding: 12px 16px;
		}

		.job-ultra-card {
			padding: 16px 12px !important;
			gap: 8px !important;
		}
		.job-u-icon {
			width: 32px !important;
			height: 32px !important;
			margin-bottom: 4px !important;
		}
		.job-u-icon svg {
			width: 16px !important;
			height: 16px !important;
		}
		.job-u-content h4 {
			font-size: 0.85rem !important;
			margin-bottom: 4px !important;
			line-height: 1.2 !important;
		}
		.job-u-content p {
			font-size: 0.65rem !important;
			margin-bottom: 8px !important;
			line-height: 1.4 !important;
		}
		.job-u-skills {
			gap: 4px !important;
		}
		.u-skill {
			font-size: 0.55rem !important;
			padding: 3px 6px !important;
			border-radius: 4px !important;
		}

		/* Welcome Text - Minimized for Mobile */
		.welcome-text {
			margin-bottom: 4px !important;
		}
		.welcome-text .animated-char {
			font-size: 0.7rem !important;
			letter-spacing: 0.1em !important;
		}
		.header-content h1 {
			font-size: 1.4rem !important;
		}

		/* Reorder About Section for Mobile */
		.about-grid-content {
			display: flex !important;
			flex-direction: column-reverse !important;
			gap: 20px !important;
		}
		.about-visual-side {
			width: 100% !important;
			display: block !important;
		}
		.visual-slideshow {
			height: 220px !important;
			width: 100% !important;
			display: block !important;
		}
		.main-para {
			font-size: 1rem !important;
			margin-bottom: 12px !important;
		}

		/* Reduce Heights & Spacing */
		.vm-content-viewport {
			min-height: auto !important;
			padding: 20px !important;
		}
		.vision-panel {
			padding: 10px 0 !important;
		}
		.vision-quote {
			font-size: 1.1rem !important;
			padding: 10px !important;
		}

		.labs-display-pane {
			padding: 16px !important;
		}
		.lab-items-grid {
			grid-template-columns: 1fr !important;
		}

		.job-roles-ultra-grid {
			gap: 12px !important;
		}
		.job-ultra-card {
			padding: 16px !important;
		}

		.hod-container-layout {
			gap: 24px !important;
		}
		.hod-visual img {
			width: 200px !important;
			height: 250px !important;
			border-radius: 20px !important;
		}
		.hod-message {
			font-size: 0.95rem !important;
			line-height: 1.6 !important;
			margin-bottom: 20px !important;
		}

		.contact-grid-layout {
			gap: 32px !important;
		}

		/* Tighten Faculty Section Gap */
		.faculty-table-section {
			margin-top: -20px !important;
		}
	}

	@media (max-width: 1000px) {
		.hod-ultra-section {
			padding: 40px 20px;
		}
		.hod-container-layout {
			flex-direction: column;
			text-align: center;
			gap: 40px;
		}
		.hod-signature {
			border-left: none;
			padding-left: 0;
			align-items: center;
		}
		.hod-badge {
			right: 50%;
			transform: translateX(50%);
			bottom: -15px;
		}
		.hod-visual img {
			width: 260px;
			height: 340px;
		}
	}
</style>
